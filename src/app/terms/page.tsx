import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat Penggunaan & Affiliate Disclosure",
  description: "Ketentuan penggunaan situs dan pengungkapan program affiliate resmi Recommendation by Ze.",
};

export default function TermsPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-rose">
            Ketentuan Layanan
          </span>
          <h1 className="font-editorial text-3xl sm:text-4xl font-medium text-charcoal">
            Syarat Penggunaan & Affiliate Disclosure
          </h1>
          <p className="text-xs text-charcoal-50">Terakhir diperbarui: 12 Oktober 2026</p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-6 text-sm text-charcoal-200 leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-semibold text-charcoal text-base">1. Pengungkapan Affiliate (Affiliate Disclosure)</h2>
            <p>
              Sesuai dengan prinsip transparansi konsumen, Recommendation by Ze menginformasikan
              bahwa beberapa tautan yang tercantum di website ini adalah tautan affiliate resmi.
              Artinya, pemilik website dapat memperoleh komisi rujukan (referral fee) apabila
              pengunjung melakukan pembelian produk yang dituju melalui tautan tersebut, tanpa ada
              biaya ekstra apapun bagi pembeli.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-semibold text-charcoal text-base">2. Batasan Tanggung Jawab Marketplace</h2>
            <p>
              Recommendation by Ze bukan merupakan pemilik barang, manufaktur, maupun penyedia jasa
              ekspedisi. Segala hal yang berkaitan dengan ketersediaan stok, harga terkini, pengiriman,
              kualitas fisik barang, dan proses retur sepenuhnya merupakan tanggung jawab toko dan
              marketplace bersangkutan (Shopee, Tokopedia, Lazada, TikTok Shop).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-semibold text-charcoal text-base">3. Hak Kekayaan Intelektual</h2>
            <p>
              Semua konten editorial, tata letak kurasi, dan identitas brand Recommendation by Ze
              dilindungi oleh hak cipta. Nama, logo, dan merek dagang dari marketplace yang disebutkan
              merupakan hak milik masing-masing perusahaan terkait.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
