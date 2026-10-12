import React from "react";
import Link from "next/link";
import { ArrowRight, Flame, Sparkles, Heart } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { AestheticMarquee } from "@/components/home/AestheticMarquee";
import { StoryHighlights } from "@/components/home/StoryHighlights";
import { HomeFeedInteractive } from "@/components/home/HomeFeedInteractive";
import { VideoReelsSection } from "@/components/home/VideoReelsSection";
import { CategorySlider } from "@/components/home/CategorySlider";
import { MarketplaceSection } from "@/components/home/MarketplaceSection";
import { CollectionsSection } from "@/components/home/CollectionsSection";
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

  return (
    <div className="space-y-0">
      {/* 1. Hero Section with Editorial Aesthetics & Social Proof */}
      <HeroSection settings={settings} />

      {/* 2. Running Marquee Ticker */}
      <AestheticMarquee />

      {/* 3. Instagram/TikTok Story Highlights */}
      <StoryHighlights />

      {/* 4. Interactive Instant Filter Feed (Tabs for Viral, Holy Grail, Fashion, Decor, etc.) */}
      <HomeFeedInteractive products={allProducts} categories={categories} />

      {/* 5. 9:16 Video Reels Try-On & Spill Section (TikTok/Reels format) */}
      <div id="video-reels">
        <VideoReelsSection products={allProducts} />
      </div>

      {/* 6. Shop by Category with Visual Photos */}
      <CategorySlider categories={categories} />

      {/* 7. Marketplace Discovery (Shopee, Tokopedia, TikTok Shop, Lazada) */}
      <MarketplaceSection />

      {/* 8. Thematic Collections Lookbook */}
      <CollectionsSection collections={collections} />

      {/* 9. Gen Z Interactive Request Callout */}
      <section className="py-16 bg-vanilla">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-butter-200 via-vanilla to-matcha-100 border-2 border-espresso text-center space-y-4 shadow-3d-card">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-xs font-bold text-espresso shadow-sm border border-espresso">
              <Sparkles className="w-3.5 h-3.5 text-butter-500" />
              <span>Gaya Hidup & Belanja Cerdas • Gen Z Approved ✨</span>
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl font-medium text-espresso max-w-xl mx-auto">
              Punya Request Spill Barang atau OOTD Tertentu?
            </h2>
            <p className="text-xs sm:text-sm text-espresso-100 max-w-lg mx-auto leading-relaxed">
              Lagi nyari blazer kuliah yang adem, skincare ramah kantong, atau perintilan kamar aesthetic warna pastel? Ze siap kurasiin toko yang terpercaya dan terbukti bagus!
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/products"
                className="btn-3d px-8 py-3.5 rounded-full bg-espresso text-vanilla text-xs sm:text-sm font-bold border-2 border-espresso hover:bg-espresso-400 transition-all"
              >
                Cari di Katalog Produk 🛍️
              </Link>
              <Link
                href="/about"
                className="btn-3d-butter px-8 py-3.5 rounded-full bg-butter-400 border-2 border-espresso text-espresso text-xs sm:text-sm font-bold hover:bg-butter-500 transition-all"
              >
                Tentang Kurasi Ze
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
