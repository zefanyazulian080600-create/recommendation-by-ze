"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, Eye, EyeOff, ShieldCheck, ArrowRight, Database } from "lucide-react";
import { useAdminAuth } from "@/context/AdminAuthContext";

export default function AdminLoginPage() {
  const router = useRouter();
  const { login, isSupabaseConnected } = useAdminAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    const result = await login(email, password);
    setIsLoading(false);

    if (result.success) {
      router.push("/admin");
    } else {
      setErrorMsg(result.error || "Gagal masuk. Periksa kembali kredensial kamu.");
    }
  };

  const handleQuickDemoFill = () => {
    setEmail("admin@recommendationbyze.com");
    setPassword("adminze2026");
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
              by Ze • Admin CMS
            </span>
          </Link>
          <p className="text-xs text-white/50">
            Masuk untuk mengelola katalog, kategori, media, dan tautan affiliate.
          </p>
        </div>

        {/* Login Box */}
        <div className="p-8 rounded-3xl bg-[#12131A] border border-white/10 shadow-2xl space-y-6">
          {/* Status Indicator */}
          <div className="p-3 rounded-xl bg-[#090A0F] border border-white/10 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-white/70">Koneksi Database:</span>
            </div>
            {isSupabaseConnected ? (
              <span className="font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full text-[10px]">
                Supabase Terhubung
              </span>
            ) : (
              <span className="font-bold text-amber-400 bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 rounded-full text-[10px]">
                Mode Standby / Dev
              </span>
            )}
          </div>

          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 font-medium">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono uppercase tracking-wider text-white/70">
                Email Admin
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@recommendationbyze.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#090A0F] border border-white/10 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50 transition-all"
                />
                <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-mono uppercase tracking-wider text-white/70">
                Kata Sandi
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-11 py-3 rounded-xl bg-[#090A0F] border border-white/10 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50 transition-all"
                />
                <Lock className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                  aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4 text-emerald-400" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-full bg-white text-black text-sm font-bold hover:bg-emerald-400 hover:text-black transition-all shadow-md active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Memverifikasi...</span>
                  </>
                ) : (
                  <>
                    <span>Masuk ke Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Quick Demo Fill Shortcut */}
          <div className="pt-3 border-t border-white/10 text-center">
            <button
              type="button"
              onClick={handleQuickDemoFill}
              className="text-xs text-emerald-400 hover:underline font-medium inline-flex items-center gap-1"
            >
              <span>Isi Otomatis Kredensial Admin Standby</span>
            </button>
          </div>
        </div>

        {/* Setup Instructions for User */}
        <div className="p-4 rounded-2xl bg-[#12131A] border border-white/10 text-xs text-white/60 space-y-2">
          <div className="flex items-center gap-1.5 font-bold text-white">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Panduan Akun Supabase Kamu:</span>
          </div>
          <p className="leading-relaxed">
            Untuk mengamankan website saat produksi di Vercel: buat user di <strong>Supabase Dashboard &gt; Authentication &gt; Add User</strong>, lalu masukkan kredensial tersebut di sini.
          </p>
        </div>

        <div className="text-center">
          <Link href="/" className="text-xs text-white/40 hover:text-white transition-colors">
            ← Kembali ke Website Toko Publik
          </Link>
        </div>
      </div>
    </div>
  );
}
