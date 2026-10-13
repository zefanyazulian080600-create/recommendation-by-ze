"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
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
    { id: "trending", label: "⚡ Viral Ol Shop & FYP" },
    { id: "desk-setup-gadget", label: "🎧 Tech & Desk Setup" },
    { id: "aesthetic-room", label: "🏠 Kamar & Kost Estetik" },
    { id: "skincare-grooming", label: "🧴 Skincare & Perawatan" },
    { id: "fashion-daily", label: "👕 Fashion & Daily Wear" },
    { id: "under-50k", label: "💸 Di Bawah 50k" },
    { id: "shopee", label: "🧡 Shopee Finds" },
    { id: "tokopedia", label: "💚 Tokopedia Finds" },
  ];

  const filteredProducts = useMemo(() => {
    switch (activeTab) {
      case "trending":
        return products.filter(
          (p) =>
            p.is_trending ||
            p.tags?.some((t) => ["viral", "trending", "fyp", "tiktok"].includes(t.toLowerCase()))
        );
      case "desk-setup-gadget":
        return products.filter(
          (p) =>
            p.category?.slug === "desk-setup-gadget" ||
            p.category?.slug === "gadget" ||
            p.tags?.some((t) =>
              ["gadget", "keyboard", "desk", "audio", "tws", "setup", "lightbar", "mouse"].includes(
                t.toLowerCase()
              )
            ) ||
            p.name.toLowerCase().includes("keyboard") ||
            p.name.toLowerCase().includes("tws") ||
            p.name.toLowerCase().includes("lightbar") ||
            p.name.toLowerCase().includes("desk")
        );
      case "aesthetic-room":
        return products.filter(
          (p) =>
            p.category?.slug === "aesthetic-room" ||
            p.category?.slug === "home" ||
            p.tags?.some((t) =>
              ["kamar", "room", "lampu", "diffuser", "dekor", "kost", "organizer"].includes(
                t.toLowerCase()
              )
            ) ||
            p.name.toLowerCase().includes("lampu") ||
            p.name.toLowerCase().includes("diffuser") ||
            p.name.toLowerCase().includes("kamar")
        );
      case "skincare-grooming":
        return products.filter(
          (p) =>
            p.category?.slug === "skincare-grooming" ||
            p.category?.slug === "beauty-skincare" ||
            p.tags?.some((t) =>
              ["skincare", "parfum", "sunscreen", "grooming", "serum", "moisturizer"].includes(
                t.toLowerCase()
              )
            ) ||
            p.name.toLowerCase().includes("sunscreen") ||
            p.name.toLowerCase().includes("parfum") ||
            p.name.toLowerCase().includes("serum")
        );
      case "fashion-daily":
        return products.filter(
          (p) =>
            p.category?.slug?.startsWith("outfit") ||
            p.category?.slug === "bags-shoes" ||
            p.category?.slug === "korean-style" ||
            p.tags?.some((t) =>
              ["tee", "hoodie", "shirt", "celana", "pants", "shoes", "bag", "sepatu"].includes(
                t.toLowerCase()
              )
            )
        );
      case "under-50k":
        return products.filter((p) => p.price <= 50000);
      case "shopee":
        return products.filter((p) => p.marketplace === "shopee");
      case "tokopedia":
        return products.filter((p) => p.marketplace === "tokopedia");
      case "all":
      default:
        return products;
    }
  }, [products, activeTab]);

  const displayedList = filteredProducts.slice(0, 12);

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
              Semua yang ada di online shop terkurasi rapi: gadget, dekorasi kamar, skincare, hingga daily wear tanpa zonk.
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
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs transition-all tap-bounce border ${
                  isActive
                    ? "bg-white text-black font-extrabold border-white shadow-lg"
                    : "bg-[#12131A] text-zinc-400 border-white/10 font-medium hover:text-white hover:border-white/20"
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
              Belum ada produk di filter ini
            </h4>
            <p className="text-xs text-zinc-400">
              Coba pilih tab kategori lainnya di atas atau eksplorasi katalog lengkap.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {displayedList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
