import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ShieldCheck, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Recommendation by Ze",
  description:
    "Cerita di balik kurasi Recommendation by Ze: kurasi online shop terpercaya untuk gadget, dekorasi kamar, skincare, dan daily wear.",
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20 bg-[#090A0F] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            About Our Brand
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Recommendation by Ze
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Menghilangkan keraguan saat scrolling online shop. Menemukan produk yang benar-benar worth
            it dari segi fungsi, estetika, dan harga.
          </p>
        </div>

        {/* Story Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#12131A] border border-white/10 shadow-2xl space-y-6 leading-relaxed text-sm sm:text-base text-zinc-300">
          <h2 className="font-sans text-2xl font-bold text-white">
            Kenapa Recommendation by Ze Hadir?
          </h2>
          <p>
            Belanja di marketplace online sering kali membingungkan. Terlalu banyak pilihan, foto
            serupa dengan kualitas yang sangat berbeda, hingga ulasan yang sulit dibedakan antara
            yang asli atau sekadar promosi buatan.
          </p>
          <p>
            <strong>Recommendation by Ze</strong> hadir sebagai ruang kurasi independen untuk
            semua kategori belanja online: mulai dari gadget & desk setup kerja, dekorasi kamar
            kost aesthetic, skincare viral teruji, hingga fashion harian dan racun unik TikTok Shop/Shopee.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Kurasi Teliti</h3>
              <p className="text-xs text-zinc-400">
                Hanya merekomendasikan produk dari official store atau seller berperingkat tinggi dengan track record jelas.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Transparansi Nyata</h3>
              <p className="text-xs text-zinc-400">
                Menyediakan informasi affiliate secara terbuka tanpa ada biaya tambahan apapun bagi pembeli.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Ramah Kantong</h3>
              <p className="text-xs text-zinc-400">
                Pilihan item fungsional dan estetik dengan harga masuk akal, dari opsi under 50k hingga holy grail.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-all shadow-xl active:scale-95"
          >
            <span>Mulai Jelajahi Produk 🛍️</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
