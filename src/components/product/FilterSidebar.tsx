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
      <div className="flex items-center justify-between pb-4 border-b border-softgray">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-rose" />
          <h3 className="font-editorial text-lg font-medium text-charcoal">Filter Produk</h3>
        </div>
        {(currentCategory || currentMarketplace || currentSearch || currentPriceRange || currentSort !== "newest") && (
          <button
            type="button"
            onClick={resetFilters}
            className="flex items-center gap-1 text-xs text-rose hover:text-rose-700 font-medium"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Keyword Search */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-50 mb-2">
          Pencarian
        </label>
        <form onSubmit={handleSearchSubmit} className="relative">
          <input
            type="text"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            placeholder="Cari item..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-softgray-border text-xs text-charcoal placeholder:text-charcoal-50 focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-rose"
          />
          <Search className="w-3.5 h-3.5 text-charcoal-50 absolute left-3 top-1/2 -translate-y-1/2" />
        </form>
      </div>

      {/* Sort By */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-50 mb-2">
          Urutan Tampil
        </label>
        <select
          value={currentSort}
          onChange={(e) => updateParam("sort", e.target.value)}
          className="w-full py-2.5 px-3 rounded-xl bg-white border border-softgray-border text-xs font-medium text-charcoal focus:outline-none focus:ring-2 focus:ring-rose/30"
        >
          {sortOptions.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-50 mb-2">
          Kategori
        </label>
        <div className="space-y-1 max-h-56 overflow-y-auto pr-1 no-scrollbar">
          <button
            type="button"
            onClick={() => updateParam("category", "")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
              !currentCategory
                ? "bg-rose text-white font-semibold"
                : "text-charcoal hover:bg-softgray"
            }`}
          >
            <span>Semua Kategori</span>
            {!currentCategory && <Check className="w-3.5 h-3.5" />}
          </button>
          {categories.map((cat) => {
            const isActive = currentCategory.toLowerCase() === cat.slug.toLowerCase();
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => updateParam("category", cat.slug)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
                  isActive
                    ? "bg-rose text-white font-semibold"
                    : "text-charcoal hover:bg-softgray"
                }`}
              >
                <span>{cat.name}</span>
                {cat.product_count !== undefined && (
                  <span className={`text-[10px] ${isActive ? "text-white/80" : "text-charcoal-50"}`}>
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
        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-50 mb-2">
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
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors border ${
                  isActive
                    ? "bg-charcoal text-white border-charcoal font-semibold"
                    : "bg-white text-charcoal border-softgray-border hover:bg-softgray"
                }`}
              >
                <span>{mp.label}</span>
                {isActive && <Check className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-50 mb-2">
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
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
                  isActive
                    ? "bg-blush-200 text-charcoal font-semibold border border-blush-300"
                    : "text-charcoal hover:bg-softgray"
                }`}
              >
                <span>{pr.label}</span>
                {isActive && <Check className="w-3.5 h-3.5 text-rose" />}
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
        <div className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm" onClick={onClose} />
        <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-ivory shadow-xl p-5 overflow-y-auto animate-slideLeft z-10">
          <div className="flex justify-end pb-2">
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-charcoal hover:bg-blush-100 rounded-lg"
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
              className="w-full py-3 rounded-full bg-charcoal text-white text-sm font-semibold hover:bg-rose transition-colors shadow-md"
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
    <aside className="w-64 flex-shrink-0 bg-white/70 backdrop-blur-sm rounded-3xl p-5 border border-softgray-border/80 shadow-soft h-fit sticky top-24">
      {content}
    </aside>
  );
}
