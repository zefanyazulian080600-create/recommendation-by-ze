import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi dan perlindungan data pengguna di Recommendation by Ze.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-20 bg-[#090A0F] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            Legal & Privasi
          </span>
          <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-white">
            Kebijakan Privasi
          </h1>
          <p className="text-xs text-zinc-500 font-mono">Terakhir diperbarui: 13 Oktober 2026</p>
        </div>

        <div className="p-8 rounded-3xl bg-[#12131A] border border-white/10 shadow-2xl space-y-6 text-sm text-zinc-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-bold text-white text-base">1. Pengumpulan Data</h2>
            <p>
              Recommendation by Ze berkomitmen menjaga privasi pengunjung. Website ini tidak meminta
              pengguna publik untuk membuat akun berbayar, mengisi formulir data pribadi sensitif, atau
              memasukkan informasi kartu kredit/rekening bank.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-white text-base">2. Penyimpanan Lokal (LocalStorage)</h2>
            <p>
              Fitur Wishlist dan Preferensi Vibe beroperasi sepenuhnya di browser pengguna menggunakan teknologi
              HTML5 LocalStorage. Data produk yang kamu simpan hanya tersimpan secara lokal di
              perangkatmu dan tidak diunggah ke pihak ketiga.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-white text-base">3. Analitik & Tautan Pihak Ketiga</h2>
            <p>
              Kami dapat mencatat data agregat non-pribadi seperti jumlah klik outbound pada masing-masing
              produk untuk memahami tren produk yang paling diminati. Saat kamu mengklik tautan menuju
              Shopee, Tokopedia, Lazada, atau TikTok Shop, kebijakan privasi marketplace masing-masinglah
              yang berlaku.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-bold text-white text-base">4. Keamanan Informasi</h2>
            <p>
              Website kami menggunakan protokol HTTPS terenkripsi untuk memastikan setiap interaksi
              pengunjung terlindungi dari intersepsi data.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
