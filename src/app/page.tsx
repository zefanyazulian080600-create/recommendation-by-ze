import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { AestheticMarquee } from "@/components/home/AestheticMarquee";
import { StoryHighlights } from "@/components/home/StoryHighlights";
import { ZeSmartAiAdvisor } from "@/components/home/ZeSmartAiAdvisor";
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
import { Product } from "@/types";

export const revalidate = 60; // ISR cache revalidation

// Lightweight serializer: strips bulky unused text fields for lightning-fast SSR & hydration
function toCardProduct(p: Product): Product {
  return {
    id: p.id,
    name: p.name,
    slug: p.slug,
    short_description: p.short_description || "",
    description: "", // omitted for card view
    category_id: p.category_id,
    tags: p.tags?.slice(0, 3) || [],
    marketplace: p.marketplace,
    affiliate_url: p.affiliate_url,
    price: p.price,
    original_price: p.original_price,
    price_note: p.price_note,
    is_featured: p.is_featured,
    is_trending: p.is_trending,
    badge_label: p.badge_label,
    spill_number: p.spill_number,
    gender: p.gender,
    status: p.status,
    sort_order: p.sort_order,
    click_count: p.click_count,
    created_at: p.created_at,
    updated_at: p.updated_at,
    media: p.media?.slice(0, 1) || [],
  };
}

// Fisher-Yates random shuffle
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Multi-category interleave: mixes old & newly uploaded items across all categories randomly
function createRandomDiversePool(products: Product[], totalLimit = 180): Product[] {
  const byCategory: Record<string, Product[]> = {};

  for (const p of products) {
    const cat = p.category_id || "other";
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(p);
  }

  // Shuffle within each category so newest uploads are mixed evenly with older ones
  for (const cat in byCategory) {
    byCategory[cat] = shuffleArray(byCategory[cat]);
  }

  const categoryKeys = Object.keys(byCategory);
  const result: Product[] = [];
  const addedIds = new Set<string>();

  const maxLen = Math.max(...categoryKeys.map((k) => byCategory[k].length), 0);

  // Round-robin pick across all categories in randomized order
  for (let i = 0; i < maxLen && result.length < totalLimit; i++) {
    const randomOrder = shuffleArray(categoryKeys);
    for (const cat of randomOrder) {
      if (i < byCategory[cat].length) {
        const item = byCategory[cat][i];
        if (!addedIds.has(item.id)) {
          result.push(item);
          addedIds.add(item.id);
          if (result.length >= totalLimit) break;
        }
      }
    }
  }

  return result;
}

export default async function HomePage() {
  const [settings, categories, collections, rawProducts] = await Promise.all([
    getSiteSettings(),
    getCategories(),
    getCollections(),
    getProducts({}),
  ]);

  // Strip bulky text fields
  const cardProducts = rawProducts.map(toCardProduct);

  // Randomize & interleave products across all categories so it never shows only the newly uploaded batch
  const curatedHomePool = createRandomDiversePool(cardProducts, 180);

  const advisorProducts = shuffleArray(curatedHomePool).slice(0, 60);
  const studioProducts = shuffleArray(curatedHomePool).slice(0, 30);
  const pollProducts = shuffleArray(curatedHomePool).slice(0, 20);
  const budgetProducts = shuffleArray(curatedHomePool).slice(0, 40);

  return (
    <div className="space-y-0 bg-[#090A0F] text-white">
      {/* 1. Hero Section: Dark Luxury Aesthetic */}
      <HeroSection settings={settings} />

      {/* 2. Running Dark Luxury Ticker Marquee */}
      <AestheticMarquee />

      {/* 3. Story Highlights */}
      <StoryHighlights />

      {/* 4. ZE AI PERSONAL SHOPPER: Interactive Smart Recommendation Advisor */}
      <ZeSmartAiAdvisor products={advisorProducts} />

      {/* 5. MAIN PRODUCT FEED: Random Curated Drops & Bio Spill Numbers */}
      <HomeFeedInteractive products={curatedHomePool} categories={categories} />

      {/* 6. ARCHIVE LABS STUDIO HUB: Interactive Modules in Clean Tabs */}
      <ArchiveLabsStudioHub products={studioProducts} />

      {/* 7. COMMUNITY & BUDGET CORNER: Balanced Clean 2-Column Section */}
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
            <BeliOrSkipPoll products={pollProducts} />

            {/* Smart Budget Slider */}
            <BudgetSliderFilter products={budgetProducts} />
          </div>
        </div>
      </section>

      {/* 8. Marketplace Discovery (Shopee) */}
      <MarketplaceSection />

      {/* 9. Thematic Collections Lookbook */}
      <CollectionsSection collections={collections} />

      {/* 10. VIP Concierge Request Callout */}
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
              Lagi nyari piyama adem, gamis anggun, skincare glowing, parfum wangi tahan lama, atau outfit streetwear cowok/cewek? Ze siap carikan rekomendasi toko terpercaya anti zonk!
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/products"
                className="px-8 py-3.5 rounded-full bg-white text-black text-xs sm:text-sm font-bold hover:bg-zinc-200 transition-all active:scale-95 shadow-lg"
              >
                Eksplor Katalog ({rawProducts.length} Produk)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
