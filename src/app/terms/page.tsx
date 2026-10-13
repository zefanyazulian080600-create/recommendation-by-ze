import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan penggunaan website Recommendation by Ze.",
};

export default function TermsPage() {
  return (
    <div className="py-12 md:py-20 bg-[#090A0F] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            Legal & Terms
          </span>
          <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-white">
            Syarat & Ketentuan
          </h1>
          <p className="text-xs text-zinc-500 font-mono">Terakhir diperbarui: 13 Oktober 2026</p>
        </div>

        <div className="p-8 rounded-3xl bg-[#12131A] border border-white/10 shadow-2xl space-y-6 text-sm text-zinc-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-bold text-white text-base">1. Penggunaan Website</h2>
            <p>
              Dengan mengakses Recommendation by Ze, kamu menyetujui bahwa website ini bertujuan
              sebagai panduan kurasi independen dan penyedia tautan afiliasi untuk memudahkan penelusuran
              produk di marketplace resmi.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-white text-base">2. Keterbukaan Afiliasi (Affiliate Disclosure)</h2>
            <p>
              Beberapa tautan di website ini merupakan tautan affiliate resmi ke Shopee, Tokopedia,
              Lazada, dan TikTok Shop. Kami dapat menerima komisi atas transaksi yang berhasil tanpa
              menambah biaya pembelian bagi pengunjung.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-white text-base">3. Hak Cipta & Merek Dagang</h2>
            <p>
              Seluruh nama merek dagang, logo marketplace, dan foto produk yang ditampilkan adalah
              milik masing-masing pemegang hak cipta dan seller resmi terkait.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
