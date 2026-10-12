"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Sparkles, Flame, Heart, ArrowRight, SlidersHorizontal } from "lucide-react";
import { Product, Category } from "@/types";
import { ProductCard } from "@/components/product/ProductCard";

interface HomeFeedInteractiveProps {
  products: Product[];
  categories: Category[];
}

export function HomeFeedInteractive({
  products,
  categories,
}: HomeFeedInteractiveProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", label: "✨ Semua Spill" },
    { id: "skena-kalcer", label: "🎸 Skena & Kalcer" },
    { id: "outfit-pria", label: "🛹 Outfit Cowok" },
    { id: "outfit-wanita", label: "👗 Outfit Cewek" },
    { id: "outfit-unisex", label: "🧢 Unisex Streetwear" },
    { id: "skincare-grooming", label: "💧 Skincare & Grooming" },
    { id: "desk-setup-gadget", label: "🎧 Desk & Gadget" },
    { id: "aesthetic-room", label: "🪴 Room Decor" },
    { id: "trending", label: "🔥 Viral TikTok" },
    { id: "under-100k", label: "💸 Under 100k" },
  ];

  const filteredProducts = useMemo(() => {
    switch (activeTab) {
      case "skena-kalcer":
        return products.filter(
          (p) =>
            p.tags?.some((t) =>
              ["skena", "kalcer", "tote bag", "derby", "corduroy", "workwear"].includes(
                t.toLowerCase()
              )
            ) ||
            p.name.toLowerCase().includes("tote") ||
            p.name.toLowerCase().includes("derby") ||
            p.name.toLowerCase().includes("corduroy")
        );
      case "trending":
        return products.filter((p) => p.is_trending);
      case "featured":
        return products.filter((p) => p.is_featured);
      case "under-100k":
        return products.filter((p) => p.price <= 100000);
      case "outfit-pria":
        return products.filter(
          (p) => p.category?.slug === "outfit-pria" || p.gender === "men"
        );
      case "outfit-wanita":
        return products.filter(
          (p) => p.category?.slug === "outfit-wanita" || p.gender === "women"
        );
      case "outfit-unisex":
        return products.filter(
          (p) => p.category?.slug === "outfit-unisex" || p.gender === "unisex"
        );
      case "skincare-grooming":
        return products.filter(
          (p) =>
            p.category?.slug === "skincare-grooming" ||
            p.category?.slug === "beauty-skincare"
        );
      case "all":
        return products;
      default:
        return products.filter((p) => p.category?.slug === activeTab);
    }
  }, [products, activeTab]);

  const displayedList = filteredProducts.slice(0, 8);

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
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Katalog Racun Ol Shop Pilihan
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
              Tap kategori di bawah untuk langsung memfilter kurasi produk tanpa reload halaman.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white transition-colors group"
          >
            <span>Buka Katalog Lengkap</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Dark & Clean Filter Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-semibold transition-all tap-bounce border ${
                  isActive
                    ? "bg-white text-black font-bold border-white shadow-lg"
                    : "bg-[#12131A] text-zinc-400 border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        {displayedList.length === 0 ? (
          <div className="p-12 text-center bg-[#12131A] rounded-2xl border border-white/10 space-y-3">
            <p className="text-3xl">🛍️</p>
            <h4 className="text-base font-bold text-white">
              Belum ada produk di kategori ini
            </h4>
            <p className="text-xs text-zinc-400">
              Coba pilih tab kategori lainnya di atas.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {displayedList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Bottom CTA to View More */}
        <div className="mt-12 text-center">
          <Link
            href={`/products${activeTab !== "all" && activeTab !== "trending" && activeTab !== "featured" && activeTab !== "under-100k" ? `?category=${activeTab}` : ""}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm hover:bg-zinc-200 transition-all shadow-xl tap-bounce"
          >
            <span>Lihat Lebih Banyak di Katalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
