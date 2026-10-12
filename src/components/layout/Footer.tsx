import React from "react";
import Link from "next/link";
import { Sparkles, Heart, ShieldCheck, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#06070B] text-zinc-300 pt-14 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column (2 cols wide on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                Recommendation
              </span>
              <span className="block font-mono text-xs font-bold tracking-[0.25em] uppercase text-emerald-400 mt-0.5">
                by Ze • Archive
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              Kurasi online shop terpercaya & inspirasi harian. Menemukan fashion outfit kece,
              skincare viral, perintilan aesthetic, dan gadget setup idaman langsung di marketplace
              favoritmu.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-white transition-all"
                aria-label="Instagram Ze"
              >
                <span className="text-xs font-mono font-bold">IG</span>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-white transition-all"
                aria-label="TikTok Ze"
              >
                <span className="text-xs font-mono font-bold">TT</span>
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-white transition-all"
                aria-label="Telegram Channel Racun Ze"
              >
                <span className="text-xs font-mono font-bold">TG</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Semua Produk
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-white transition-colors">
                  Koleksi Tematik
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-white transition-colors">
                  Wishlist Saya
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Tentang Ze
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ & Bantuan
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Kategori Populer
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link
                  href="/products?category=outfit-wanita"
                  className="hover:text-white transition-colors"
                >
                  Outfit Wanita
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=korean-style"
                  className="hover:text-white transition-colors"
                >
                  Korean Style
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=beauty-skincare"
                  className="hover:text-white transition-colors"
                >
                  Beauty & Skincare
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=aesthetic-room"
                  className="hover:text-white transition-colors"
                >
                  Aesthetic Room
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=desk-setup-gadget"
                  className="hover:text-white transition-colors"
                >
                  Desk Setup & Gadget
                </Link>
              </li>
            </ul>
          </div>

          {/* Marketplaces Supported */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Marketplace
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li>
                <Link
                  href="/products?marketplace=shopee"
                  className="hover:text-[#EE4D2D] transition-colors"
                >
                  Shopee Finds
                </Link>
              </li>
              <li>
                <Link
                  href="/products?marketplace=tokopedia"
                  className="hover:text-[#03AC0E] transition-colors"
                >
                  Tokopedia Finds
                </Link>
              </li>
              <li>
                <Link
                  href="/products?marketplace=tiktok"
                  className="hover:text-white transition-colors"
                >
                  TikTok Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/products?marketplace=lazada"
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  Lazada Finds
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline"
                >
                  <span>Admin CMS</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure Note */}
        <div className="py-6 border-b border-white/10">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#12131A] border border-white/10 text-xs text-zinc-400 leading-relaxed">
            <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-0.5">Transparansi Affiliate:</strong>
              Beberapa tautan di website ini merupakan tautan affiliate resmi. Ze dapat menerima
              komisi apabila kamu melakukan pembelian melalui tautan tersebut, tanpa biaya
              tambahan apapun bagi kamu. Harga dan ketersediaan stok dapat berubah sewaktu-waktu di
              aplikasi marketplace masing-masing penjual. Website ini adalah kurator independen dan
              bukan merupakan bagian dari website resmi Shopee, Tokopedia, Lazada, atau TikTok Shop.
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} Recommendation by Ze. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">
              Kebijakan & Syarat
            </Link>
            <Link href="/about" className="hover:text-zinc-300 transition-colors">
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
