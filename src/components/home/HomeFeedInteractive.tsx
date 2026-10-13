"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ChevronDown, Shuffle } from "lucide-react";
import { Product, Category } from "@/types";
import { ProductCard } from "@/components/product/ProductCard";

interface HomeFeedInteractiveProps {
  products: Product[];
  categories: Category[];
}

// Fisher-Yates client-side shuffle
function shuffleList<T>(list: T[]): T[] {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function HomeFeedInteractive({
  products,
  categories,
}: HomeFeedInteractiveProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(16);
  const [shuffleKey, setShuffleKey] = useState<number>(0);

  const tabs = [
    { id: "all", label: "✨ Semua Produk Acak" },
    { id: "trending", label: "⚡ Best Seller 10RB+" },
    { id: "pria-kemeja", label: "👔 Kemeja Pria" },
    { id: "pria-kaos", label: "👕 Kaos Pria" },
    { id: "tas", label: "🎒 Tas & Ransel" },
    { id: "sepatu", label: "👟 Sepatu & Sandal" },
    { id: "wanita", label: "👗 Fashion Cewek" },
    { id: "gamis", label: "🌙 Gamis Muslimah" },
    { id: "piyama", label: "😴 Piyama Rayon" },
    { id: "rumah", label: "🏠 Perlengkapan Rumah" },
    { id: "snack", label: "🍿 Camilan & Snack" },
    { id: "skincare", label: "✨ Skincare Glowing" },
    { id: "parfum", label: "🌸 Parfum Tahan Lama" },
    { id: "aksesoris", label: "💍 Aksesoris Titanium" },
    { id: "under-50k", label: "💸 Di Bawah 50k" },
  ];

  const filteredProducts = useMemo(() => {
    let list: Product[] = [];
    switch (activeTab) {
      case "trending":
        list = products.filter(
          (p) =>
            p.price_note?.includes("10RB+") ||
            p.short_description?.includes("10RB+") ||
            p.is_trending ||
            p.tags?.includes("bestseller")
        );
        break;
      case "pria-kemeja":
        list = products.filter(
          (p) =>
            p.sub_category_id === "pria-kemeja" ||
            (/kemeja|flanel|workshirt|batik/i.test(p.name) && p.category_id === "cat-outfit-pria")
        );
        break;
      case "pria-kaos":
        list = products.filter(
          (p) =>
            p.sub_category_id === "pria-kaos" ||
            (/kaos|t-shirt|tshirt|jersey/i.test(p.name) && p.category_id === "cat-outfit-pria")
        );
        break;
      case "tas":
        list = products.filter(
          (p) =>
            p.category_id === "cat-tas-dompet" ||
            /tas|ransel|backpack|slingbag|selempang|totebag|dompet/i.test(p.name)
        );
        break;
      case "sepatu":
        list = products.filter(
          (p) =>
            p.category_id === "cat-sepatu-sandal" ||
            /sepatu|sneaker|sandal|slop|kicks|loafers/i.test(p.name)
        );
        break;
      case "wanita":
        list = products.filter(
          (p) =>
            p.category_id === "cat-outfit-wanita" ||
            /wanita|cewek|blouse|rajut|croptop|korean|one set|dress|kulot/i.test(p.name)
        );
        break;
      case "gamis":
        list = products.filter(
          (p) =>
            p.category_id === "cat-gamis-muslimah" ||
            /gamis|abaya|brokat|malika|muslimah|hijab|tunik/i.test(p.name)
        );
        break;
      case "piyama":
        list = products.filter(
          (p) =>
            p.category_id === "cat-piyama-sleepwear" ||
            /piyama|baju tidur|sleepwear|daster/i.test(p.name)
        );
        break;
      case "rumah":
        list = products.filter(
          (p) =>
            p.category_id === "cat-aesthetic-room" ||
            /tumbler|botol|kamar|kost|sprei|dekor/i.test(p.name)
        );
        break;
      case "snack":
        list = products.filter(
          (p) =>
            p.category_id === "cat-food-snack" ||
            /snack|basreng|camilan|kerupuk|pedas|minyak/i.test(p.name)
        );
        break;
      case "skincare":
        list = products.filter(
          (p) =>
            p.category_id === "cat-skincare-beauty" ||
            /skincare|serum|facial|toner|sunscreen|scrub|lotion|sabun|hanasui|cetaphil/i.test(p.name)
        );
        break;
      case "parfum":
        list = products.filter(
          (p) =>
            p.category_id === "cat-parfum-fragrance" ||
            /parfum|perfume|fragrance|decant|cologne|extrait/i.test(p.name)
        );
        break;
      case "aksesoris":
        list = products.filter(
          (p) =>
            p.category_id === "cat-accessories" ||
            /aksesoris|perhiasan|gelang|cincin|kalung|titanium|jedai/i.test(p.name)
        );
        break;
      case "under-50k":
        list = products.filter((p) => p.price <= 50000);
        break;
      case "all":
      default:
        list = products;
        break;
    }

    if (shuffleKey > 0) {
      return shuffleList(list);
    }
    return list;
  }, [products, activeTab, shuffleKey]);

  const displayedList = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setVisibleCount(16);
  };

  const handleShuffle = () => {
    setShuffleKey((k) => k + 1);
    setVisibleCount(16);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 16, filteredProducts.length));
  };

  return (
    <section className="py-14 sm:py-20 border-t border-white/10 bg-[#090A0F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>THE CURATED DROPS</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Katalog Racun Ol Shop Pilihan Ze
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl leading-relaxed">
              Semua produk Shopee diacak bervariasi: piyama adem, gamis, skincare, parfum wangi, outfit cowok/cewek, hingga barang under 50k agar tidak bosan.
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              type="button"
              onClick={handleShuffle}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-xs sm:text-sm font-bold text-emerald-300 transition-all active:scale-95 shadow-sm"
              title="Acak produk untuk melihat variasi lainnya"
            >
              <Shuffle className="w-4 h-4 text-emerald-400" />
              <span>Acak Produk 🎲</span>
            </button>

            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white transition-colors group px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10"
            >
              <span>Semua Katalog ({products.length})</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Dark & Clean Filter Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 w-full">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs transition-all tap-bounce border ${
                  isActive
                    ? "bg-white text-black font-extrabold border-white shadow-lg"
                    : "bg-[#12131A] text-zinc-300 border-white/10 font-bold hover:text-white hover:border-white/20"
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedList.map((product) => (
            <ProductCard key={`${product.id}-${shuffleKey}`} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#12131A] hover:bg-[#181924] border border-white/20 text-white text-xs sm:text-sm font-bold shadow-lg transition-all tap-bounce hover:border-emerald-500/40"
            >
              <span>Muat Lebih Banyak Rekomendasi</span>
              <ChevronDown className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
