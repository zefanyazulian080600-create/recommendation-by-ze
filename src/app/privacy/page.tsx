import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi dan perlindungan data pengguna di Recommendation by Ze.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-rose">
            Legal & Privasi
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl font-medium text-charcoal">
            Kebijakan Privasi
          </h1>
          <p className="text-xs text-charcoal-50">Terakhir diperbarui: 12 Oktober 2026</p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-6 text-sm text-charcoal-200 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-semibold text-charcoal text-base">1. Pengumpulan Data</h2>
            <p>
              Recommendation by Ze berkomitmen menjaga privasi pengunjung. Website ini tidak meminta
              pengguna publik untuk membuat akun, mengisi formulir data pribadi sensitif, atau
              memasukkan informasi kartu kredit/rekening bank.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-semibold text-charcoal text-base">2. Penyimpanan Lokal (LocalStorage)</h2>
            <p>
              Fitur Wishlist kami beroperasi sepenuhnya di browser pengguna menggunakan teknologi
              HTML5 LocalStorage. Data produk yang kamu simpan hanya tersimpan secara lokal di
              perangkatmu dan tidak dikirimkan ke server kami.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-semibold text-charcoal text-base">3. Analitik & Tautan Pihak Ketiga</h2>
            <p>
              Kami dapat mencatat data agregat non-pribadi seperti jumlah klik outbound pada masing-masing
              produk untuk memahami produk yang paling diminati. Saat kamu mengklik tautan menuju
              Shopee, Tokopedia, Lazada, atau TikTok Shop, kebijakan privasi marketplace masing-masinglah
              yang berlaku.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-semibold text-charcoal text-base">4. Keamanan Informasi</h2>
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
