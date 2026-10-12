import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-full bg-blush-200 text-rose flex items-center justify-center mx-auto shadow-soft">
          <Sparkles className="w-10 h-10 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-rose">
            Error 404 • Halaman Tidak Ditemukan
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl font-medium text-charcoal">
            Outfit atau Halaman Ini Sudah Pindah
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-50 leading-relaxed">
            Halaman atau produk yang kamu cari mungkin telah diperbarui, dipindahkan, atau tautannya
            sudah tidak aktif.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-charcoal text-white text-xs sm:text-sm font-semibold hover:bg-rose transition-all shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-softgray-border text-charcoal text-xs sm:text-sm font-semibold hover:bg-softgray transition-all shadow-sm"
          >
            <span>Lihat Semua Produk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
