import React from "react";
import Link from "next/link";
import { ArrowRight, Flame, Sparkles } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { CategorySlider } from "@/components/home/CategorySlider";
import { ZesPicks } from "@/components/home/ZesPicks";
import { MarketplaceSection } from "@/components/home/MarketplaceSection";
import { CollectionsSection } from "@/components/home/CollectionsSection";
import { ProductCard } from "@/components/product/ProductCard";
import {
  getCategories,
  getCollections,
  getProducts,
  getSiteSettings,
} from "@/lib/data/store";

export const revalidate = 60; // ISR cache revalidation

export default async function HomePage() {
  const [settings, categories, collections, allProducts] = await Promise.all([
    getSiteSettings(),
    getCategories(),
    getCollections(),
    getProducts({}),
  ]);

  const trendingProducts = allProducts.filter((p) => p.is_trending).slice(0, 8);
  const latestProducts = allProducts.slice(0, 8);

  return (
    <div className="space-y-4">
      {/* 1. Hero Section */}
      <HeroSection settings={settings} />

      {/* 2. Shop by Category */}
      <CategorySlider categories={categories} />

      {/* 3. Ze's Picks (Featured Products) */}
      <ZesPicks products={allProducts} />

      {/* 4. Trending & Viral Finds */}
      {trendingProducts.length > 0 && (
        <section className="py-14 border-t border-softgray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#EE4D2D] mb-1">
                  <Flame className="w-3.5 h-3.5 fill-[#EE4D2D]" />
                  <span>Sedang Ramai Diperbincangkan</span>
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium text-charcoal">
                  Trending di Ol Shop & TikTok
                </h2>
                <p className="text-sm text-charcoal-50 mt-1 max-w-xl">
                  Produk-produk viral yang lagi banyak dicari dan terbukti punya review positif dari para pembeli.
                </p>
              </div>
              <Link
                href="/products?sort=trending"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-charcoal hover:text-rose transition-colors group"
              >
                <span>Lihat Semua Trending</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {trendingProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Shop by Marketplace */}
      <MarketplaceSection />

      {/* 6. Thematic Collections Lookbook */}
      <CollectionsSection collections={collections} />

      {/* 7. Latest Finds Section */}
      <section className="py-14 border-t border-softgray bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-rose">
                Update Katalog Terkini
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium text-charcoal mt-1">
                Baru Saja Ditambahkan
              </h2>
            </div>
            <Link
              href="/products?sort=newest"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-charcoal hover:text-rose transition-colors group"
            >
              <span>Eksplorasi Seluruh Katalog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {latestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Callout Banner */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blush-200 via-blush-100 to-ivory border border-blush-300 text-center space-y-4 shadow-soft">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-semibold text-rose shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gaya Hidup & Belanja Cerdas</span>
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl font-medium text-charcoal max-w-xl mx-auto">
              Punya Request Barang atau Ide Kolaborasi?
            </h2>
            <p className="text-sm text-charcoal-200 max-w-lg mx-auto leading-relaxed">
              Kamu lagi nyari outfit spesifik, rekomendasi skincare untuk tipe kulit tertentu, atau dekor kamar impian? Pantau update harian Ze di sosial media!
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/products"
                className="px-6 py-3 rounded-full bg-charcoal text-white text-xs sm:text-sm font-semibold hover:bg-rose transition-all shadow-md"
              >
                Mulai Cari Rekomendasi
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 rounded-full bg-white border border-softgray-border text-charcoal text-xs sm:text-sm font-semibold hover:bg-softgray transition-all shadow-sm"
              >
                Kenali Brand Ze
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
