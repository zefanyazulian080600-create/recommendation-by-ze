import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ & Pertanyaan Sering Diajukan",
  description:
    "Pertanyaan yang sering ditanyakan seputar cara belanja, affiliate link, dan sistem rekomendasi di Recommendation by Ze.",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "Apakah website ini menjual atau memproses pembayaran produk secara langsung?",
      a: "Tidak. Recommendation by Ze adalah website katalog kurasi dan inspirasi belanja online shop. Ketika kamu mengklik tombol beli/spill, kamu akan diarahkan ke aplikasi marketplace resmi (Shopee, Tokopedia, Lazada, atau TikTok Shop) tempat toko resmi tersebut beroperasi. Seluruh transaksi pembayaran, pengiriman, dan garansi diproses oleh marketplace bersangkutan.",
    },
    {
      q: "Apakah ada biaya tambahan jika saya membeli lewat tautan affiliate Ze?",
      a: "Sama sekali tidak ada biaya tambahan! Harga yang kamu bayar adalah harga resmi toko di marketplace tersebut, bahkan kamu tetap bisa menggunakan voucher gratis ongkir, cashback, dan koin tokomu seperti biasa.",
    },
    {
      q: "Mengapa harga di marketplace kadang berbeda dengan yang tertera di website?",
      a: "Harga di website ini adalah informasi saat produk terakhir kali diperiksa oleh tim kami. Karena penjual di marketplace sering mengadakan flash sale, promo tanggal kembar, atau perubahan diskon toko sewaktu-waktu, harga akhir yang berlaku adalah harga yang tertera di aplikasi marketplace saat kamu checkout.",
    },
    {
      q: "Produk apa saja yang direkomendasikan di website ini?",
      a: "Semua barang yang ada di online shop (Shopee, Tokopedia, TikTok Shop, Lazada)! Mulai dari gadget & desk setup kerja, lampu & dekorasi kamar kost, skincare & grooming harian, daily wear & fashion, sampai racun barang unik viral TikTok yang benar-benar worth it.",
    },
    {
      q: "Bagaimana cara kerja fitur Wishlist di website ini?",
      a: "Kamu bisa menekan tombol ikon hati (Wishlist) pada produk apa saja. Produk favoritmu akan otomatis tersimpan di memori browser perangkatmu tanpa mewajibkan pendaftaran atau pembuatan akun.",
    },
    {
      q: "Bagaimana jika barang yang saya terima di marketplace mengalami kendala atau rusak?",
      a: "Karena transaksi pembelian dilakukan di marketplace, segala bentuk komplain, pengembalian dana, atau retur barang dapat kamu ajukan langsung melalui fitur 'Ajukan Pengembalian' atau 'Pusat Resolusi' di aplikasi Shopee, Tokopedia, Lazada, atau TikTok Shop dengan menyertakan video unboxing.",
    },
  ];

  return (
    <div className="py-12 md:py-20 bg-[#090A0F] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
            <HelpCircle className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            Pusat Bantuan
          </span>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto">
            Semua hal yang perlu kamu ketahui tentang cara kerja kurasi dan tautan affiliate di
            Recommendation by Ze.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#12131A] border border-white/10 shadow-2xl space-y-2.5 transition-all"
            >
              <h3 className="font-sans text-base sm:text-lg font-bold text-white">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-xs sm:text-sm font-bold hover:bg-zinc-200 transition-all shadow-xl active:scale-95"
          >
            <span>Kembali ke Katalog Produk 🛍️</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
