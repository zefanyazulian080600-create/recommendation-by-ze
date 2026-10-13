"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, Sparkles } from "lucide-react";

interface RetroCatalogHeaderProps {
  currentGender?: string;
  currentSearch?: string;
  totalProducts: number;
}

export function RetroCatalogHeader({
  currentGender,
  currentSearch = "",
  totalProducts,
}: RetroCatalogHeaderProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchInput, setSearchInput] = useState(currentSearch);

  const activeCategory = searchParams.get("category") || "";
  const activeGender = searchParams.get("gender") || "";
  const activePrice = searchParams.get("price") || "";
  const activeSort = searchParams.get("sort") || "";

  // Universal Filter Pills
  const filterPills = [
    { id: "all", label: "Semua Produk", icon: "✦", type: "all" },
    { id: "desk-setup-gadget", label: "Tech & Setup", icon: "🎧", type: "category", value: "desk-setup-gadget" },
    { id: "aesthetic-room", label: "Kamar & Kost", icon: "🏠", type: "category", value: "aesthetic-room" },
    { id: "skincare-grooming", label: "Skincare", icon: "🧴", type: "category", value: "skincare-grooming" },
    { id: "men", label: "Fashion Cowok", icon: "🛹", type: "gender", value: "men" },
    { id: "women", label: "Fashion Cewek", icon: "👗", type: "gender", value: "women" },
    { id: "unisex", label: "Streetwear", icon: "🧢", type: "gender", value: "unisex" },
    { id: "under-50k", label: "Under 50k", icon: "💸", type: "price", value: "under-50k" },
    { id: "trending", label: "Viral TikTok", icon: "🔥", type: "sort", value: "trending" },
  ];

  const handlePillClick = (pill: typeof filterPills[0]) => {
    const params = new URLSearchParams(searchParams.toString());

    if (pill.type === "all") {
      params.delete("category");
      params.delete("gender");
      params.delete("price");
      params.delete("sort");
    } else if (pill.type === "category") {
      if (params.get("category") === pill.value) {
        params.delete("category");
      } else {
        params.set("category", pill.value!);
        params.delete("gender");
      }
    } else if (pill.type === "gender") {
      if (params.get("gender") === pill.value) {
        params.delete("gender");
      } else {
        params.set("gender", pill.value!);
        params.delete("category");
      }
    } else if (pill.type === "price") {
      if (params.get("price") === pill.value) {
        params.delete("price");
      } else {
        params.set("price", pill.value!);
      }
    } else if (pill.type === "sort") {
      if (params.get("sort") === pill.value) {
        params.delete("sort");
      } else {
        params.set("sort", pill.value!);
      }
    }

    const queryStr = params.toString();
    router.push(queryStr ? `/products?${queryStr}` : "/products");
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchInput.trim()) {
      params.set("search", searchInput.trim());
    } else {
      params.delete("search");
    }
    const queryStr = params.toString();
    router.push(queryStr ? `/products?${queryStr}` : "/products");
  };

  const handleQuickNumberClick = (numStr: string) => {
    setSearchInput(numStr);
    const params = new URLSearchParams(searchParams.toString());
    params.set("search", numStr);
    router.push(`/products?${params.toString()}`);
  };

  const isPillActive = (pill: typeof filterPills[0]) => {
    if (pill.type === "all") {
      return !activeCategory && !activeGender && !activePrice && !activeSort;
    }
    if (pill.type === "category") return activeCategory === pill.value;
    if (pill.type === "gender") return activeGender === pill.value;
    if (pill.type === "price") return activePrice === pill.value;
    if (pill.type === "sort") return activeSort === pill.value;
    return false;
  };

  return (
    <div className="space-y-4 mb-6">
      {/* Top Bio Spill Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#12131A] p-3 sm:p-4 rounded-2xl border border-white/10 shadow-2xl">
        {/* Bio Search Input */}
        <form onSubmit={handleSearchSubmit} className="relative flex-1">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Cari gadget, kamar kost, skincare, fashion, atau No. Bio (#07)..."
            className="w-full pl-10 pr-24 py-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-xs sm:text-sm font-medium text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 transition-colors"
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors"
          >
            Cari 🔍
          </button>
        </form>

        {/* Quick Spill No. Suggestions */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 whitespace-nowrap hidden lg:inline">
            Fast Bio:
          </span>
          {["#01", "#04", "#07", "#12", "#18"].map((no) => (
            <button
              key={no}
              type="button"
              onClick={() => handleQuickNumberClick(no)}
              className="px-2.5 py-1 rounded-lg bg-[#090A0F] text-zinc-300 font-mono text-[11px] font-bold border border-white/10 hover:border-white/30 hover:text-white transition-colors whitespace-nowrap"
            >
              {no}
            </button>
          ))}
        </div>
      </div>

      {/* Universal Category & Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {filterPills.map((pill) => {
          const active = isPillActive(pill);
          return (
            <button
              key={pill.id}
              type="button"
              onClick={() => handlePillClick(pill)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap border ${
                active
                  ? "bg-white text-black border-white shadow-md font-extrabold"
                  : "bg-[#12131A] text-zinc-300 border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              <span>{pill.icon}</span>
              <span>{pill.label}</span>
              {active && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
