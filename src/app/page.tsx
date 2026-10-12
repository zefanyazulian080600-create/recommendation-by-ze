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
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-blush-200 via-blush-100 to-ivory border border-blush-300 text-center space-y-4 shadow-soft">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-xs font-semibold text-rose shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gaya Hidup & Belanja Cerdas • Gen Z Approved</span>
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl font-medium text-charcoal max-w-xl mx-auto">
              Punya Request Spill Barang atau OOTD Tertentu?
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-200 max-w-lg mx-auto leading-relaxed">
              Lagi nyari blazer kuliah yang adem, skincare ramah kantong, atau perintilan kamar aesthetic warna pastel? Ze siap kurasiin toko yang terpercaya dan terbukti bagus!
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/products"
                className="px-7 py-3.5 rounded-full bg-charcoal text-white text-xs sm:text-sm font-semibold hover:bg-rose transition-all shadow-md tap-bounce"
              >
                Cari di Katalog Produk
              </Link>
              <Link
                href="/about"
                className="px-7 py-3.5 rounded-full bg-white border border-softgray-border text-charcoal text-xs sm:text-sm font-semibold hover:bg-softgray transition-all shadow-sm tap-bounce"
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
