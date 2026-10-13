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
  const activeSubCategory = searchParams.get("subCategory") || searchParams.get("sub") || "";
  const activeGender = searchParams.get("gender") || "";
  const activePrice = searchParams.get("price") || "";
  const activeSort = searchParams.get("sort") || "";

  const filterPills = [
    { id: "all", label: "Semua Produk", icon: "✦", type: "all" },
    { id: "pria-celana", label: "Celana Pria", icon: "👖", type: "subCategory", value: "pria-celana" },
    { id: "pria-kemeja", label: "Kemeja Pria", icon: "👔", type: "subCategory", value: "pria-kemeja" },
    { id: "pria-kaos", label: "Kaos Pria", icon: "👕", type: "subCategory", value: "pria-kaos" },
    { id: "wanita-rok", label: "Rok & Skirt", icon: "👗", type: "subCategory", value: "wanita-rok" },
    { id: "wanita-celana", label: "Celana Wanita", icon: "👖", type: "subCategory", value: "wanita-celana" },
    { id: "bags-wallets", label: "Tas & Ransel", icon: "🎒", type: "category", value: "bags-wallets" },
    { id: "shoes-footwear", label: "Sepatu & Sandal", icon: "👟", type: "category", value: "shoes-footwear" },
    { id: "sepatu-heels", label: "Heels & Flat Shoes", icon: "👠", type: "subCategory", value: "sepatu-heels" },
    { id: "wanita-blouse", label: "Blouse Cewek", icon: "👚", type: "subCategory", value: "wanita-blouse" },
    { id: "gamis-muslimah", label: "Gamis Muslimah", icon: "🌙", type: "category", value: "gamis-muslimah" },
    { id: "piyama-sleepwear", label: "Piyama Adem", icon: "😴", type: "category", value: "piyama-sleepwear" },
    { id: "aesthetic-room", label: "Perlengkapan Rumah", icon: "🏠", type: "category", value: "aesthetic-room" },
    { id: "food-snack", label: "Camilan & Snack", icon: "🍿", type: "category", value: "food-snack" },
    { id: "skincare-beauty", label: "Skincare", icon: "✨", type: "category", value: "skincare-beauty" },
    { id: "parfum-fragrance", label: "Parfum", icon: "🌸", type: "category", value: "parfum-fragrance" },
    { id: "accessories-jewelry", label: "Aksesoris", icon: "💍", type: "category", value: "accessories-jewelry" },
    { id: "under-50k", label: "Under 50k", icon: "💸", type: "price", value: "under-50k" },
    { id: "trending", label: "Viral Shopee", icon: "🔥", type: "sort", value: "trending" },
  ];

  const handlePillClick = (pill: typeof filterPills[0]) => {
    const params = new URLSearchParams(searchParams.toString());

    if (pill.type === "all") {
      params.delete("category");
      params.delete("subCategory");
      params.delete("sub");
      params.delete("gender");
      params.delete("price");
      params.delete("sort");
    } else if (pill.type === "subCategory") {
      if (params.get("subCategory") === pill.value || params.get("sub") === pill.value) {
        params.delete("subCategory");
        params.delete("sub");
      } else {
        params.set("subCategory", pill.value!);
        params.delete("sub");
        params.delete("category");
        params.delete("gender");
      }
    } else if (pill.type === "category") {
      if (params.get("category") === pill.value) {
        params.delete("category");
      } else {
        params.set("category", pill.value!);
        params.delete("subCategory");
        params.delete("sub");
        params.delete("gender");
      }
    } else if (pill.type === "gender") {
      if (params.get("gender") === pill.value) {
        params.delete("gender");
      } else {
        params.set("gender", pill.value!);
        params.delete("category");
        params.delete("subCategory");
        params.delete("sub");
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
    router.push(queryStr ? `/products?${queryStr}` : "/products", { scroll: false });
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
    router.push(queryStr ? `/products?${queryStr}` : "/products", { scroll: false });
  };

  const handleQuickNumberClick = (numStr: string) => {
    setSearchInput(numStr);
    const params = new URLSearchParams(searchParams.toString());
    params.set("search", numStr);
    router.push(`/products?${params.toString()}`, { scroll: false });
  };

  const isPillActive = (pill: typeof filterPills[0]) => {
    if (pill.type === "all") {
      return !activeCategory && !activeSubCategory && !activeGender && !activePrice && !activeSort;
    }
    if (pill.type === "subCategory") return activeSubCategory === pill.value;
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
                  : "bg-[#151724] text-zinc-100 border-white/15 hover:border-white/30 hover:text-white"
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
