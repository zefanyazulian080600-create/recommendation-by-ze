"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal, RotateCcw, X, Search, Check } from "lucide-react";
import { Category, Marketplace } from "@/types";

interface FilterSidebarProps {
  categories: Category[];
  isMobileDrawer?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

export function FilterSidebar({
  categories = [],
  isMobileDrawer = false,
  isOpen = false,
  onClose,
}: FilterSidebarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "";
  const currentMarketplace = searchParams.get("marketplace") || "";
  const currentSort = searchParams.get("sort") || "newest";
  const currentSearch = searchParams.get("search") || "";
  const currentPriceRange = searchParams.get("price") || "";
  const currentGender = searchParams.get("gender") || "";

  const [localSearch, setLocalSearch] = useState(currentSearch);

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/products?${params.toString()}`);
  };

  const resetFilters = () => {
    setLocalSearch("");
    router.push("/products");
    onClose?.();
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateParam("search", localSearch.trim());
  };

  const marketplaces: { id: Marketplace | "all"; label: string }[] = [
    { id: "all", label: "Semua Marketplace" },
    { id: "shopee", label: "Shopee" },
    { id: "tokopedia", label: "Tokopedia" },
    { id: "tiktok", label: "TikTok Shop" },
    { id: "lazada", label: "Lazada" },
  ];

  const priceRanges = [
    { id: "", label: "Semua Harga" },
    { id: "under-50k", label: "< Rp 50.000 (Budget Pick)" },
    { id: "50k-100k", label: "Rp 50.000 - Rp 100.000" },
    { id: "100k-250k", label: "Rp 100.000 - Rp 250.000" },
    { id: "above-250k", label: "> Rp 250.000" },
  ];

  const sortOptions = [
    { id: "newest", label: "Terbaru Dirilis" },
    { id: "featured", label: "Pilihan Ze (Featured)" },
    { id: "trending", label: "Trending & Viral" },
    { id: "price_asc", label: "Harga: Termurah" },
    { id: "price_desc", label: "Harga: Tertinggi" },
  ];

  const content = (
    <div className="space-y-6">
      {/* Header with Reset */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
          <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-white">Filter Produk</h3>
        </div>
        {(currentCategory || currentMarketplace || currentSearch || currentPriceRange || currentSort !== "newest") && (
          <button
            type="button"
            onClick={resetFilters}
            className="flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-medium"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Keyword Search */}
      <div>
        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
          Pencarian
        </label>
        <form onSubmit={handleSearchSubmit} className="relative">
          <input
            type="text"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            placeholder="Cari item..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#090A0F] border border-white/10 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30"
          />
          <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
        </form>
      </div>

      {/* Sort By */}
      <div>
        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
          Urutan Tampil
        </label>
        <select
          value={currentSort}
          onChange={(e) => updateParam("sort", e.target.value)}
          className="w-full py-2 px-3 rounded-xl bg-[#090A0F] border border-white/10 text-xs font-medium text-white focus:outline-none focus:border-white/30"
        >
          {sortOptions.map((opt) => (
            <option key={opt.id} value={opt.id} className="bg-[#12131A] text-white">
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Target Gender */}
      <div>
        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
          Target Gender
        </label>
        <div className="space-y-1">
          {[
            { id: "", label: "Semua Gender / Unisex" },
            { id: "men", label: "🛹 Outfit & Grooming Pria" },
            { id: "women", label: "👗 Outfit & Beauty Wanita" },
            { id: "unisex", label: "🧢 Unisex Streetwear" },
          ].map((g) => {
            const isSelected = currentGender === g.id;
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => updateParam("gender", g.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs text-left transition-all ${
                  isSelected
                    ? "bg-white text-black font-bold shadow-md"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{g.label}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-black" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
          Kategori
        </label>
        <div className="space-y-1 max-h-56 overflow-y-auto pr-1 no-scrollbar">
          <button
            type="button"
            onClick={() => updateParam("category", "")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
              !currentCategory
                ? "bg-white text-black font-bold shadow-md"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>Semua Kategori</span>
            {!currentCategory && <Check className="w-3.5 h-3.5 text-black" />}
          </button>
          {categories.map((cat) => {
            const isActive = currentCategory.toLowerCase() === cat.slug.toLowerCase();
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => updateParam("category", cat.slug)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                  isActive
                    ? "bg-white text-black font-bold shadow-md"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{cat.name}</span>
                {cat.product_count !== undefined && (
                  <span className={`text-[10px] font-mono ${isActive ? "text-black/70" : "text-zinc-500"}`}>
                    ({cat.product_count})
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Marketplace Filter */}
      <div>
        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
          Marketplace
        </label>
        <div className="grid grid-cols-1 gap-1.5">
          {marketplaces.map((mp) => {
            const isActive =
              (mp.id === "all" && !currentMarketplace) ||
              currentMarketplace.toLowerCase() === mp.id.toLowerCase();
            return (
              <button
                key={mp.id}
                type="button"
                onClick={() => updateParam("marketplace", mp.id === "all" ? "" : mp.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors border ${
                  isActive
                    ? "bg-white text-black border-white font-bold shadow-md"
                    : "bg-[#090A0F] text-zinc-400 border-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                <span>{mp.label}</span>
                {isActive && <Check className="w-3.5 h-3.5 text-black" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
          Kisaran Budget
        </label>
        <div className="space-y-1">
          {priceRanges.map((pr) => {
            const isActive = currentPriceRange === pr.id;
            return (
              <button
                key={pr.id}
                type="button"
                onClick={() => updateParam("price", pr.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                  isActive
                    ? "bg-white text-black font-bold shadow-md"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{pr.label}</span>
                {isActive && <Check className="w-3.5 h-3.5 text-black" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  // If mobile drawer mode
  if (isMobileDrawer) {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-50 lg:hidden">
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
        <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#090A0F] border-l border-white/10 shadow-2xl p-5 overflow-y-auto animate-slideLeft z-10">
          <div className="flex justify-end pb-2">
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg"
              aria-label="Tutup filter"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          {content}
          <div className="pt-6">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 rounded-full bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-colors shadow-lg"
            >
              Terapkan Filter
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop sidebar mode
  return (
    <aside className="w-64 flex-shrink-0 bg-[#12131A] rounded-2xl p-5 border border-white/10 shadow-2xl h-fit sticky top-24">
      {content}
    </aside>
  );
}
