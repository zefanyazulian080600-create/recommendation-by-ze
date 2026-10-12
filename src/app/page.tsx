import React from "react";
import Link from "next/link";
import { ArrowRight, Flame, Sparkles, Heart, ShieldCheck, Tag } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { AestheticMarquee } from "@/components/home/AestheticMarquee";
import { StoryHighlights } from "@/components/home/StoryHighlights";
import { HomeFeedInteractive } from "@/components/home/HomeFeedInteractive";
import { ArchiveLabsStudioHub } from "@/components/home/ArchiveLabsStudioHub";
import { BeliOrSkipPoll } from "@/components/home/BeliOrSkipPoll";
import { BudgetSliderFilter } from "@/components/home/BudgetSliderFilter";
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
    <div className="space-y-0 bg-vanilla">
      {/* 1. Hero Section: Y2K Retro Archive & Underground Skate Aesthetic */}
      <HeroSection settings={settings} />

      {/* 2. Running Retro Ticker Marquee */}
      <AestheticMarquee />

      {/* 3. Instagram/TikTok Story Highlights with Neon/Matcha Gradient Rings */}
      <StoryHighlights />

      {/* 4. MAIN PRODUCT FEED: Curated Drops & Bio Spill Numbers (Langsung Terlihat!) */}
      <HomeFeedInteractive products={allProducts} categories={categories} />

      {/* 5. ARCHIVE LABS STUDIO HUB: Interactive Modules in Clean Tabs (Zero Clutter!) */}
      {/* Bundles OOTD Studio & Struk, Spot Nongkrong, Dupe vs Grail, Reels, Occasion & Weather */}
      <ArchiveLabsStudioHub products={allProducts} />

      {/* 6. COMMUNITY & BUDGET CORNER: 2-Column Balanced Section */}
      <section className="py-14 sm:py-20 border-t-2 border-espresso/15 bg-vanilla">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-espresso text-vanilla text-[10px] font-mono font-bold tracking-widest uppercase">
              ✦ COMMUNITY PICKS & BUDGET SMART ✦
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl font-extrabold text-espresso">
              Suara Komunitas & Kalkulator Jajan
            </h2>
            <p className="text-xs sm:text-sm text-espresso/70">
              Ikutan voting outfit dan hitung sisa uang saku sebelum memutuskan checkout.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Voting: Beli or Skip? */}
            <div className="bg-white rounded-3xl border-2 border-espresso p-2 sm:p-4 shadow-brutal">
              <BeliOrSkipPoll products={allProducts} />
            </div>

            {/* Smart Budget Slider */}
            <div className="bg-white rounded-3xl border-2 border-espresso p-2 sm:p-4 shadow-brutal">
              <BudgetSliderFilter products={allProducts} />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Marketplace Discovery (Shopee, Tokopedia, TikTok Shop, Lazada) */}
      <MarketplaceSection />

      {/* 8. Thematic Collections Lookbook */}
      <CollectionsSection collections={collections} />

      {/* 9. Retro Concert Ticket Callout Banner */}
      <section className="py-16 bg-vanilla border-t-2 border-espresso/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-butter-200 via-vanilla to-matcha-100 border-2 border-espresso text-center space-y-4 shadow-brutal-lg relative overflow-hidden">
            {/* Retro Ticket Stamps */}
            <div className="absolute top-4 left-6 text-espresso/20 font-mono text-xs hidden sm:block select-none">
              ||| | |||| | ||<br />
              ZE-ARCHIVE-PASS
            </div>
            <div className="absolute top-4 right-6 text-espresso/20 font-mono text-xs hidden sm:block select-none text-right">
              VOL. 2026<br />
              ★ VERIFIED
            </div>

            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-xs font-extrabold text-espresso shadow-sm border border-espresso">
              <Sparkles className="w-3.5 h-3.5 text-butter-500" />
              <span>Gaya Hidup & Belanja Cerdas • Gen Z Approved ✨</span>
            </span>

            <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-espresso max-w-xl mx-auto">
              Punya Request Spill Barang atau OOTD Tertentu?
            </h2>

            <p className="text-xs sm:text-sm text-espresso-100 max-w-lg mx-auto leading-relaxed">
              Lagi nyari kaos boxy cowok, outer kemeja corduroy, outfit cewek chic, skincare ramah kantong, atau perintilan setup estetik? Ze siap kurasiin toko yang terpercaya dan terbukti bagus!
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/products"
                className="btn-3d px-8 py-3.5 rounded-full bg-espresso text-vanilla text-xs sm:text-sm font-bold border-2 border-espresso hover:bg-espresso-400 transition-all shadow-brutal"
              >
                Cari di Katalog Produk 🛍️
              </Link>
              <Link
                href="/about"
                className="btn-3d-butter px-8 py-3.5 rounded-full bg-butter-400 border-2 border-espresso text-espresso text-xs sm:text-sm font-bold hover:bg-butter-500 transition-all shadow-sm"
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
