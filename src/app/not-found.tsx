import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4 bg-[#090A0F] text-white">
      <div className="text-center max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl">
          <Sparkles className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            Error 404 • Halaman Tidak Ditemukan
          </span>
          <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-white">
            Produk atau Halaman Ini Sudah Pindah
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Halaman atau tautan kurasi yang kamu cari mungkin telah diperbarui, diganti dengan rekomendasi baru, atau sudah tidak aktif.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs sm:text-sm font-bold hover:bg-zinc-200 transition-all shadow-md active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#12131A] border border-white/20 text-white text-xs sm:text-sm font-semibold hover:bg-white/10 transition-all"
          >
            <span>Lihat Semua Produk 🛍️</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
