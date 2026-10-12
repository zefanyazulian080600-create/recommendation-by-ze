import React from "react";
import Link from "next/link";
import { Sparkles, Heart, ShieldCheck, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white pt-14 pb-10 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-charcoal-800">
          {/* Brand Column (2 cols wide on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight text-white group-hover:text-blush transition-colors">
                Recommendation
              </span>
              <span className="block font-sans text-xs font-semibold tracking-[0.25em] uppercase text-rose mt-0.5">
                by Ze
              </span>
            </Link>
            <p className="text-sm text-softgray-dark leading-relaxed max-w-sm">
              Kurasi online shop terpercaya & inspirasi harian. Menemukan fashion outfit kece,
              skincare viral, perintilan aesthetic, dan gadget setup idaman langsung di marketplace
              favoritmu.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal-800 flex items-center justify-center text-softgray-dark hover:text-white hover:bg-rose transition-colors"
                aria-label="Instagram Ze"
              >
                <span className="text-xs font-bold">IG</span>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal-800 flex items-center justify-center text-softgray-dark hover:text-white hover:bg-rose transition-colors"
                aria-label="TikTok Ze"
              >
                <span className="text-xs font-bold">TT</span>
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal-800 flex items-center justify-center text-softgray-dark hover:text-white hover:bg-rose transition-colors"
                aria-label="Telegram Channel Racun Ze"
              >
                <span className="text-xs font-bold">TG</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-sm text-softgray-dark">
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
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose">
              Kategori Populer
            </h4>
            <ul className="space-y-2 text-sm text-softgray-dark">
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
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose">
              Marketplace
            </h4>
            <ul className="space-y-2 text-sm text-softgray-dark">
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
                  className="hover:text-[#0F146D] transition-colors"
                >
                  Lazada Finds
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1.5 text-xs text-rose hover:underline"
                >
                  <span>Admin CMS</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure Note */}
        <div className="py-6 border-b border-charcoal-800">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-charcoal-900 border border-charcoal-800 text-xs text-softgray-dark leading-relaxed">
            <ShieldCheck className="w-5 h-5 text-rose flex-shrink-0 mt-0.5" />
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
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-50">
          <p>© {currentYear} Recommendation by Ze. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-softgray transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/terms" className="hover:text-softgray transition-colors">
              Kebijakan & Syarat
            </Link>
            <Link href="/about" className="hover:text-softgray transition-colors">
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
