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
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-ivory">
      <div className="w-full max-w-md space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-block group">
            <span className="font-editorial text-3xl font-medium tracking-tight text-charcoal group-hover:text-rose transition-colors">
              Recommendation
            </span>
            <span className="block font-sans text-xs font-semibold tracking-[0.25em] uppercase text-rose mt-0.5">
              by Ze • Admin CMS
            </span>
          </Link>
          <p className="text-xs text-charcoal-50">
            Masuk untuk mengelola katalog, kategori, media, dan tautan affiliate.
          </p>
        </div>

        {/* Login Box */}
        <div className="p-8 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-6">
          {/* Status Indicator */}
          <div className="p-3 rounded-xl bg-ivory-100 border border-softgray-border flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-rose" />
              <span className="text-charcoal-200">Koneksi Database:</span>
            </div>
            {isSupabaseConnected ? (
              <span className="font-bold text-green-700 bg-green-100/70 px-2 py-0.5 rounded-full text-[10px]">
                Supabase Terhubung
              </span>
            ) : (
              <span className="font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-full text-[10px]">
                Mode Standby / Dev
              </span>
            )}
          </div>

          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-100">
                Email Admin
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@recommendationbyze.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-softgray-border text-sm text-charcoal placeholder:text-charcoal-50 focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-rose transition-all"
                />
                <Mail className="w-4 h-4 text-charcoal-50 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-100">
                Kata Sandi
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-11 py-3 rounded-xl bg-white border border-softgray-border text-sm text-charcoal placeholder:text-charcoal-50 focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-rose transition-all"
                />
                <Lock className="w-4 h-4 text-charcoal-50 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal-50 hover:text-charcoal"
                  aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-full bg-charcoal text-white text-sm font-semibold hover:bg-rose transition-all shadow-md active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
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
          <div className="pt-3 border-t border-softgray-border text-center">
            <button
              type="button"
              onClick={handleQuickDemoFill}
              className="text-xs text-rose hover:underline font-medium inline-flex items-center gap-1"
            >
              <span>Isi Otomatis Kredensial Admin Standby</span>
            </button>
          </div>
        </div>

        {/* Setup Instructions for User */}
        <div className="p-4 rounded-2xl bg-white/70 border border-softgray-border/80 text-xs text-charcoal-200 space-y-2">
          <div className="flex items-center gap-1.5 font-bold text-charcoal">
            <ShieldCheck className="w-4 h-4 text-rose" />
            <span>Panduan Akun Supabase Kamu:</span>
          </div>
          <p className="leading-relaxed">
            Untuk mengamankan website saat produksi di Vercel: buat user di <strong>Supabase Dashboard &gt; Authentication &gt; Add User</strong>, lalu masukkan kredensial tersebut di sini.
          </p>
        </div>

        <div className="text-center">
          <Link href="/" className="text-xs text-charcoal-50 hover:text-charcoal transition-colors">
            ← Kembali ke Website Toko Publik
          </Link>
        </div>
      </div>
    </div>
  );
}
