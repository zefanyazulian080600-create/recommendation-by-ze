import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ShieldCheck, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Recommendation by Ze",
  description:
    "Cerita di balik kurasi Recommendation by Ze: kurasi online shop terpercaya untuk outfit, skincare, dan estetika harian.",
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-rose">
            About Our Brand
          </span>
          <h1 className="font-editorial text-3xl sm:text-5xl font-medium text-charcoal">
            Recommendation by Ze
          </h1>
          <p className="text-base text-charcoal-200 max-w-xl mx-auto leading-relaxed">
            Menghilangkan keraguan saat scrolling online shop. Menemukan produk yang benar-benar worth
            it dari segi bahan, estetika, dan harga.
          </p>
        </div>

        {/* Story Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-6 leading-relaxed text-sm sm:text-base text-charcoal-200">
          <h2 className="font-editorial text-2xl font-semibold text-charcoal">
            Kenapa Recommendation by Ze Hadir?
          </h2>
          <p>
            Belanja online di marketplace sering kali membingungkan. Terlalu banyak pilihan, foto
            serupa dengan kualitas yang sangat berbeda, hingga ulasan yang sulit dibedakan antara
            yang asli atau sekadar promosi buatan.
          </p>
          <p>
            <strong>Recommendation by Ze</strong> hadir sebagai ruang kurasi independen. Bermula
            dari kecintaan berbagi inspirasi mix and match outfit harian, kini berkembang menjadi
            panduan lengkap bagi Gen Z dan dewasa muda untuk menemukan barang-barang terbaik di
            berbagai kategori: mulai dari fashion, skincare viral, perintilan dekorasi kamar
            aesthetic, hingga setup meja kerja produktif.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-softgray">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-blush-200 flex items-center justify-center text-rose">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-charcoal text-base">Kurasi Teliti</h3>
              <p className="text-xs text-charcoal-50">
                Hanya merekomendasikan produk dari seller terpercaya dengan rekam jejak ulasan yang
                jelas.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-blush-200 flex items-center justify-center text-rose">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-charcoal text-base">Transparansi Nyata</h3>
              <p className="text-xs text-charcoal-50">
                Menyediakan informasi affiliate secara terbuka tanpa biaya tambahan apapun bagi
                pembeli.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-blush-200 flex items-center justify-center text-rose">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-charcoal text-base">Ramah Budget</h3>
              <p className="text-xs text-charcoal-50">
                Pilihan outfit dan item estetik dengan harga masuk akal dan sering disertai voucher
                promo.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-charcoal text-white text-sm font-semibold hover:bg-rose transition-all shadow-md"
          >
            <span>Mulai Jelajahi Produk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
