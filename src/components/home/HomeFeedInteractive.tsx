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
    { id: "all", label: "✨ Semua Spill", icon: Sparkles },
    { id: "trending", label: "🔥 Viral TikTok", icon: Flame },
    { id: "featured", label: "⭐ Pilihan Ze", icon: Heart },
    { id: "outfit-wanita", label: "👗 Outfit Cewek" },
    { id: "beauty-skincare", label: "💄 Skincare & Beauty" },
    { id: "aesthetic-room", label: "🪴 Room Decor" },
    { id: "desk-setup-gadget", label: "🎧 Desk & Gadget" },
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
      case "all":
        return products;
      default:
        return products.filter((p) => p.category?.slug === activeTab);
    }
  }, [products, activeTab]);

  const displayedList = filteredProducts.slice(0, 8);

  return (
    <section className="py-14 border-t border-softgray bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-rose mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore The Spill</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium text-charcoal">
              Katalog Racun Ol Shop Pilihan
            </h2>
            <p className="text-sm text-charcoal-50 mt-1 max-w-xl">
              Tap kategori di bawah untuk langsung memfilter kurasi produk tanpa reload halaman.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-charcoal hover:text-rose transition-colors group"
          >
            <span>Buka Katalog Lengkap</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Gen Z Filter Pills Bar (Horizontal Scroll on Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all tap-bounce ${
                  isActive
                    ? "bg-charcoal text-white shadow-md scale-105"
                    : "bg-white text-charcoal border border-softgray-border hover:bg-softgray hover:border-charcoal-50"
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        {displayedList.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-softgray-border space-y-3">
            <p className="text-2xl">🛍️</p>
            <h4 className="font-editorial text-lg font-medium text-charcoal">
              Belum ada produk di kategori ini
            </h4>
            <p className="text-xs text-charcoal-50">
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
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border border-softgray-border text-charcoal font-semibold text-xs sm:text-sm hover:bg-charcoal hover:text-white transition-all shadow-sm hover:shadow-md tap-bounce"
          >
            <span>Lihat Lebih Banyak di Katalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
