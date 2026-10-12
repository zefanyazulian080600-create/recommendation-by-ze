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
    <section className="py-14 border-t-2 border-espresso/15 bg-vanilla">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-matcha-600 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-butter-500" />
              <span>Explore The Spill</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium text-espresso">
              Katalog Racun Ol Shop Pilihan
            </h2>
            <p className="text-sm text-espresso-100 mt-1 max-w-xl">
              Tap kategori di bawah untuk langsung memfilter kurasi produk tanpa reload halaman.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-espresso hover:text-matcha-600 transition-colors group"
          >
            <span>Buka Katalog Lengkap</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Gen Z Filter Pills Bar with 3D Tactile Buttons */}
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-3 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all tap-bounce border-2 border-espresso ${
                  isActive
                    ? "bg-butter-400 text-espresso shadow-3d-pill scale-105"
                    : "bg-white text-espresso hover:bg-vanilla"
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        {displayedList.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border-2 border-espresso/15 space-y-3">
            <p className="text-3xl">🛍️</p>
            <h4 className="font-editorial text-lg font-bold text-espresso">
              Belum ada produk di kategori ini
            </h4>
            <p className="text-xs text-espresso-100">
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
            className="btn-3d inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border-2 border-espresso text-espresso font-bold text-xs sm:text-sm hover:bg-butter-400 transition-all shadow-md tap-bounce"
          >
            <span>Lihat Lebih Banyak di Katalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
