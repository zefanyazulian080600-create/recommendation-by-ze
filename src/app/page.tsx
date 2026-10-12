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
    <div className="space-y-0 bg-[#090A0F] text-white">
      {/* 1. Hero Section: Dark Luxury Streetwear Aesthetic */}
      <HeroSection settings={settings} />

      {/* 2. Running Dark Luxury Ticker Marquee */}
      <AestheticMarquee />

      {/* 3. Story Highlights with Obsidian/Emerald Rings */}
      <StoryHighlights />

      {/* 4. MAIN PRODUCT FEED: Curated Drops & Bio Spill Numbers */}
      <HomeFeedInteractive products={allProducts} categories={categories} />

      {/* 5. ARCHIVE LABS STUDIO HUB: Interactive Modules in Clean Tabs */}
      <ArchiveLabsStudioHub products={allProducts} />

      {/* 6. COMMUNITY & BUDGET CORNER: Balanced Clean 2-Column Section */}
      <section className="py-14 sm:py-20 border-t border-white/10 bg-[#090A0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-mono font-bold tracking-widest uppercase">
              ✦ COMMUNITY PICKS & BUDGET SMART ✦
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Suara Komunitas & Kalkulator Jajan
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Ikutan voting outfit dan hitung sisa uang saku sebelum memutuskan checkout.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Voting: Beli or Skip? */}
            <BeliOrSkipPoll products={allProducts} />

            {/* Smart Budget Slider */}
            <BudgetSliderFilter products={allProducts} />
          </div>
        </div>
      </section>

      {/* 7. Marketplace Discovery (Shopee, Tokopedia, TikTok Shop, Lazada) */}
      <MarketplaceSection />

      {/* 8. Thematic Collections Lookbook */}
      <CollectionsSection collections={collections} />

      {/* 9. VIP Concierge Request Callout */}
      <section className="py-16 bg-[#090A0F] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#12131A] via-[#161822] to-[#0D0E15] border border-white/10 text-center space-y-4 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIRECT CURATION CONCIERGE ✨</span>
            </span>

            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-white max-w-xl mx-auto tracking-tight">
              Punya Request Spill Barang atau OOTD Tertentu?
            </h2>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto leading-relaxed">
              Lagi nyari kaos boxy cowok, kemeja corduroy, outfit cewek chic, skincare ramah kantong, atau perintilan setup estetik? Ze siap kurasiin toko yang terpercaya dan terbukti bagus!
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/products"
                className="px-8 py-3.5 rounded-full bg-white text-black text-xs sm:text-sm font-bold hover:bg-zinc-200 transition-all active:scale-95 shadow-lg"
              >
                Cari di Katalog Produk 🛍️
              </Link>
              <Link
                href="/about"
                className="px-8 py-3.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-bold hover:bg-white/20 transition-all"
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
