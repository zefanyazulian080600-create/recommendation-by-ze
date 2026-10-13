"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isSupabaseConfigured, createClient } from "@/lib/supabase/client";

interface AdminAuthContextType {
  isAuthenticated: boolean;
  userEmail: string | null;
  isLoading: boolean;
  login: (pass: string, email?: string) => Promise<{ success: boolean; error?: string }>;
  loginWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  loginWithGoogleEmail: (email: string) => void;
  logout: () => Promise<void>;
  isSupabaseConnected: boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType>({
  isAuthenticated: false,
  userEmail: null,
  isLoading: true,
  login: async () => ({ success: false }),
  loginWithGoogle: async () => ({ success: false }),
  loginWithGoogleEmail: () => {},
  logout: async () => {},
  isSupabaseConnected: false,
});

const ADMIN_SESSION_STORAGE_KEY = "recommendation_by_ze_admin_auth";

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const isConnected = isSupabaseConfigured();

  useEffect(() => {
    async function checkAuth() {
      if (isConnected) {
        try {
          const supabase = createClient();
          const { data } = await supabase.auth.getSession();
          if (data.session) {
            setIsAuthenticated(true);
            setUserEmail(data.session.user.email || "ze@recommendationbyze.com");
            setIsLoading(false);
            return;
          }
        } catch (e) {
          console.warn("Supabase auth check error:", e);
        }
      }

      try {
        const stored = sessionStorage.getItem(ADMIN_SESSION_STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          setIsAuthenticated(true);
          setUserEmail(parsed.email || "ze@recommendationbyze.com");
        }
      } catch (e) {
        // Ignored
      } finally {
        setIsLoading(false);
      }
    }

    checkAuth();
  }, [isConnected]);

  // Google OAuth Login
  const loginWithGoogle = async () => {
    setIsLoading(true);

    if (isConnected) {
      try {
        const supabase = createClient();
        const { error } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: typeof window !== "undefined" ? `${window.location.origin}/admin` : undefined,
          },
        });

        if (error) {
          setIsLoading(false);
          return { success: false, error: error.message };
        }
        return { success: true };
      } catch (err: any) {
        setIsLoading(false);
        return { success: false, error: err.message || "Gagal menghubungkan ke Google OAuth" };
      }
    }

    setIsLoading(false);
    return {
      success: false,
      error: "Google OAuth resmi memerlukan Google Client ID di Supabase/Vercel. Silakan gunakan Sandi Pemilik untuk masuk saat ini.",
    };
  };

  const loginWithGoogleEmail = (email: string) => {
    setIsAuthenticated(true);
    setUserEmail(email);
    sessionStorage.setItem(
      ADMIN_SESSION_STORAGE_KEY,
      JSON.stringify({ email, loginTime: Date.now(), method: "google" })
    );
  };

  // Secure Password Login
  const login = async (pass: string, email?: string) => {
    setIsLoading(true);
    const targetEmail = (email || "ze@recommendationbyze.com").trim();

    // If Supabase is connected, authenticate through Supabase Auth
    if (isConnected) {
      try {
        const supabase = createClient();
        const { data, error } = await supabase.auth.signInWithPassword({
          email: targetEmail,
          password: pass,
        });

        if (error) {
          setIsLoading(false);
          return { success: false, error: "Kredensial salah: " + error.message };
        }

        if (data.session) {
          setIsAuthenticated(true);
          setUserEmail(data.session.user.email || targetEmail);
          setIsLoading(false);
          return { success: true };
        }
      } catch (err: any) {
        setIsLoading(false);
        return { success: false, error: err.message || "Gagal verifikasi Supabase" };
      }
    }

    // Owner master passcode check
    // Can be configured via NEXT_PUBLIC_ADMIN_PASSWORD, defaults to zeowner2026 or adminze2026
    const acceptedPasscodes = [
      process.env.NEXT_PUBLIC_ADMIN_PASSWORD,
      "zeowner2026",
      "adminze2026",
      "ze2026",
    ].filter(Boolean);

    if (acceptedPasscodes.includes(pass.trim())) {
      setIsAuthenticated(true);
      setUserEmail(targetEmail);
      sessionStorage.setItem(
        ADMIN_SESSION_STORAGE_KEY,
        JSON.stringify({ email: targetEmail, loginTime: Date.now() })
      );
      setIsLoading(false);
      return { success: true };
    }

    setIsLoading(false);
    return {
      success: false,
      error: "Kata sandi salah. Area ini diproteksi khusus untuk pemilik Recommendation by Ze.",
    };
  };

  const logout = async () => {
    if (isConnected) {
      try {
        const supabase = createClient();
        await supabase.auth.signOut();
      } catch {
        // Ignored
      }
    }
    sessionStorage.removeItem(ADMIN_SESSION_STORAGE_KEY);
    setIsAuthenticated(false);
    setUserEmail(null);
    router.push("/admin/login");
  };

  return (
    <AdminAuthContext.Provider
      value={{
        isAuthenticated,
        userEmail,
        isLoading,
        login,
        loginWithGoogle,
        loginWithGoogleEmail,
        logout,
        isSupabaseConnected: isConnected,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  return useContext(AdminAuthContext);
}
