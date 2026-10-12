"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, Sparkles, Flame, Check } from "lucide-react";

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

  const handleGenderChange = (genderValue: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (genderValue === "all") {
      params.delete("gender");
    } else {
      params.set("gender", genderValue);
    }
    router.push(`/products?${params.toString()}`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchInput.trim()) {
      params.set("search", searchInput.trim());
    } else {
      params.delete("search");
    }
    router.push(`/products?${params.toString()}`);
  };

  const handleQuickNumberClick = (numStr: string) => {
    setSearchInput(numStr);
    const params = new URLSearchParams(searchParams.toString());
    params.set("search", numStr);
    router.push(`/products?${params.toString()}`);
  };

  const genderOptions = [
    { label: "Semua Look", value: "all", icon: "✦" },
    { label: "Outfit Cowok", value: "men", icon: "🛹" },
    { label: "Outfit Cewek", value: "women", icon: "👗" },
    { label: "Unisex & Streetwear", value: "unisex", icon: "🧢" },
  ];

  const activeGender = currentGender || "all";

  return (
    <div className="space-y-4 mb-6">
      {/* Top Retro Stamp & Bio Spill Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3 sm:p-4 rounded-3xl border-2 border-espresso shadow-brutal">
        {/* Bio Search Input */}
        <form onSubmit={handleSearchSubmit} className="relative flex-1">
          <Search className="w-4 h-4 text-espresso/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Cari kata kunci atau No. Racun Bio (contoh: 14 atau #07)..."
            className="w-full pl-10 pr-24 py-2.5 rounded-2xl bg-vanilla/60 border-2 border-espresso/20 text-xs sm:text-sm font-medium text-espresso placeholder:text-espresso/40 focus:outline-none focus:border-espresso focus:bg-white transition-colors"
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-espresso text-vanilla text-xs font-bold hover:bg-rose transition-colors"
          >
            Cari 🔍
          </button>
        </form>

        {/* Quick Spill No. Suggestions */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-espresso/50 whitespace-nowrap hidden lg:inline">
            Fast Bio:
          </span>
          {["#01", "#04", "#07", "#12", "#18"].map((no) => (
            <button
              key={no}
              type="button"
              onClick={() => handleQuickNumberClick(no)}
              className="px-2.5 py-1 rounded-xl bg-vanilla text-espresso font-mono text-[11px] font-bold border border-espresso/30 hover:border-espresso hover:bg-butter-300 transition-colors whitespace-nowrap"
            >
              {no}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Gender Pill Tabs (Retro Magazine Navigation) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {genderOptions.map((opt) => {
          const isActive = activeGender === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => handleGenderChange(opt.value)}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap border-2 ${
                isActive
                  ? "bg-espresso text-vanilla border-espresso shadow-brutal translate-y-[-1px]"
                  : "bg-white text-espresso border-espresso/20 hover:border-espresso hover:bg-butter-200/50"
              }`}
            >
              <span>{opt.icon}</span>
              <span>{opt.label}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-butter-400 ml-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
