"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isSupabaseConfigured, createClient } from "@/lib/supabase/client";

interface AdminAuthContextType {
  isAuthenticated: boolean;
  userEmail: string | null;
  isLoading: boolean;
  login: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  isSupabaseConnected: boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType>({
  isAuthenticated: false,
  userEmail: null,
  isLoading: true,
  login: async () => ({ success: false }),
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
            setUserEmail(data.session.user.email || "admin@recommendationbyze.com");
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
          setUserEmail(parsed.email || "admin@recommendationbyze.com");
        }
      } catch (e) {
        // Ignored
      } finally {
        setIsLoading(false);
      }
    }

    checkAuth();
  }, [isConnected]);

  const login = async (email: string, pass: string) => {
    setIsLoading(true);

    if (isConnected) {
      try {
        const supabase = createClient();
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password: pass,
        });

        if (error) {
          setIsLoading(false);
          return { success: false, error: error.message };
        }

        if (data.session) {
          setIsAuthenticated(true);
          setUserEmail(data.session.user.email || email);
          setIsLoading(false);
          return { success: true };
        }
      } catch (err: any) {
        setIsLoading(false);
        return { success: false, error: err.message || "Gagal masuk ke Supabase" };
      }
    }

    if (email.trim() && pass.length >= 6) {
      setIsAuthenticated(true);
      setUserEmail(email.trim());
      sessionStorage.setItem(
        ADMIN_SESSION_STORAGE_KEY,
        JSON.stringify({ email: email.trim(), loginTime: Date.now() })
      );
      setIsLoading(false);
      return { success: true };
    }

    setIsLoading(false);
    return {
      success: false,
      error: "Email harus diisi dan password minimal 6 karakter.",
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
