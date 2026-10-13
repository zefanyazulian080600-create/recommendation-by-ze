"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Eye, EyeOff, ShieldCheck, ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import { useAdminAuth } from "@/context/AdminAuthContext";

export default function AdminLoginPage() {
  const router = useRouter();
  const { login, loginWithGoogle, isSupabaseConnected } = useAdminAuth();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [showGoogleHelp, setShowGoogleHelp] = useState(false);

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    const result = await login(password);
    setIsLoading(false);

    if (result.success) {
      router.push("/admin");
    } else {
      setErrorMsg(result.error || "Kata sandi salah. Akses ditolak.");
    }
  };

  const handleGoogleClick = async () => {
    setErrorMsg("");
    setIsGoogleLoading(true);

    const result = await loginWithGoogle();
    setIsGoogleLoading(false);

    if (result.success) {
      router.push("/admin");
    } else {
      // If Supabase OAuth is not yet hooked up, show graceful instruction
      setShowGoogleHelp(true);
      setErrorMsg(result.error || "Belum ada konfigurasi Google OAuth.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-[#090A0F]">
      <div className="w-full max-w-md space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-block group">
            <span className="font-editorial text-3xl font-medium tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              Recommendation
            </span>
            <span className="block font-mono text-xs font-semibold tracking-[0.25em] uppercase text-emerald-400 mt-0.5">
              by Ze • Owner Portal
            </span>
          </Link>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono font-bold text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PORTAL KHUSUS PEMILIK TOKO</span>
          </div>
        </div>

        {/* Login Box */}
        <div className="p-7 sm:p-8 rounded-3xl bg-[#12131A] border border-white/10 shadow-2xl space-y-6">
          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* 1. Primary Action: Google Login */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 text-center">
              Pilihan Masuk Aman
            </label>
            <button
              type="button"
              onClick={handleGoogleClick}
              disabled={isGoogleLoading || isLoading}
              className="w-full py-3.5 px-4 rounded-2xl bg-white hover:bg-zinc-100 text-zinc-900 text-sm font-bold transition-all shadow-lg active:scale-[0.99] flex items-center justify-center gap-3 border border-zinc-200"
            >
              {isGoogleLoading ? (
                <div className="w-4 h-4 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin" />
              ) : (
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              )}
              <span>Lanjutkan dengan Akun Google</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <span className="relative px-3 bg-[#12131A] text-[11px] font-mono uppercase text-zinc-500">
              atau gunakan sandi pemilik
            </span>
          </div>

          {/* 2. Secondary Action: Password Login */}
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300">
                Kata Sandi Pemilik
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan kata sandi rahasia..."
                  className="w-full pl-10 pr-11 py-3 rounded-xl bg-[#090A0F] border border-white/10 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-all font-mono"
                />
                <Lock className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                  aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4 text-emerald-400" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || isGoogleLoading}
              className="w-full py-3.5 rounded-full bg-emerald-400 text-black text-sm font-bold hover:bg-emerald-300 transition-all shadow-md active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Memverifikasi Sandi...</span>
                </>
              ) : (
                <>
                  <span>Masuk ke Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Google OAuth Help Guide Modal / Banner */}
          {showGoogleHelp && (
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-zinc-300 space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-amber-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tips Setup Google Login di Vercel:</span>
              </div>
              <p className="leading-relaxed text-[11px] text-zinc-400">
                Agar tombol Google dapat langsung memverifikasi akun email Google kamu secara otomatis, kamu cukup menghubungkan Supabase Auth di menu Environment Variables Vercel. Untuk sekarang, silakan gunakan kata sandi pemilik di atas.
              </p>
            </div>
          )}
        </div>

        <div className="text-center">
          <Link href="/" className="text-xs text-zinc-500 hover:text-white transition-colors">
            ← Kembali ke Katalog Publik
          </Link>
        </div>
      </div>
    </div>
  );
}
