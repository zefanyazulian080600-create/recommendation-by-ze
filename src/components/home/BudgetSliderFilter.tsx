"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Wallet, Sparkles, ArrowRight, Tag } from "lucide-react";
import { Product } from "@/types";
import { formatRupiah } from "@/lib/utils";
import { ProductCard } from "@/components/product/ProductCard";

interface BudgetSliderFilterProps {
  products: Product[];
}

export function BudgetSliderFilter({ products }: BudgetSliderFilterProps) {
  const [budget, setBudget] = useState<number>(150000);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => p.price <= budget).slice(0, 4);
  }, [products, budget]);

  const presets = [
    { label: "💸 Di Bawah 50rb", value: 50000 },
    { label: "🏷️ Di Bawah 100rb", value: 100000 },
    { label: "✨ Di Bawah 150rb", value: 150000 },
    { label: "💅 Di Bawah 250rb", value: 250000 },
  ];

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-[#12131A] border border-white/10 shadow-2xl space-y-4">
      {/* Top Pill & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-mono font-bold tracking-wider mb-2">
            <Wallet className="w-3 h-3 text-emerald-400" />
            <span>KALKULATOR SISA UANG SAKU 💸</span>
          </div>
          <h3 className="font-sans text-base sm:text-lg font-bold text-white">
            Filter Sesuai Dompet
          </h3>
        </div>

        {/* Preset Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {presets.map((p) => (
            <button
              key={p.value}
              onClick={() => setBudget(p.value)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                budget === p.value
                  ? "bg-white text-black shadow-md"
                  : "bg-[#090A0F] text-zinc-400 border border-white/10 hover:text-white"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Slider Control Box */}
      <div className="p-4 rounded-xl bg-[#090A0F] border border-white/10 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">
              BUDGET MAKSIMAL
            </span>
            <p className="text-xl sm:text-2xl font-mono font-extrabold text-white">
              {formatRupiah(budget)}
            </p>
          </div>
          <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300 text-[11px] font-mono">
            {filteredProducts.length} item muat
          </span>
        </div>

        {/* HTML5 Range Slider */}
        <div className="space-y-1.5">
          <input
            type="range"
            min={35000}
            max={300000}
            step={5000}
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full h-2 bg-[#181924] rounded-lg appearance-none cursor-pointer border border-white/10 accent-emerald-400"
          />
          <div className="flex justify-between text-[10px] font-mono text-zinc-500">
            <span>Rp 35k</span>
            <span>Rp 150k</span>
            <span>Rp 300k</span>
          </div>
        </div>
      </div>

      {/* Product Mini List */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 pt-1">
          {filteredProducts.slice(0, 2).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="p-4 text-center bg-[#090A0F] rounded-xl border border-white/10">
          <p className="text-xs text-zinc-400">
            Geser slider ke atas Rp 100.000 untuk melihat lebih banyak pilihan! 💸
          </p>
        </div>
      )}
    </div>
  );
}
