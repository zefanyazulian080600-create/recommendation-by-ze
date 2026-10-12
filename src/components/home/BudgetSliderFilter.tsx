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
    <section className="py-14 bg-vanilla border-t-2 border-espresso/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-butter-400 border-2 border-espresso text-espresso text-xs font-extrabold shadow-brutal-sm -rotate-1 mb-2">
              <Wallet className="w-3.5 h-3.5" />
              <span>KALKULATOR SISA UANG JAJAN 💸</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-espresso">
              Filter Sesuai Sisa Dompet Kamu
            </h2>
            <p className="text-sm text-espresso-100 mt-1 max-w-xl">
              Tentukan budget belanja kamu hari ini, dan kami tampilkan racun yang beneran muat di kantong!
            </p>
          </div>

          {/* Preset Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            {presets.map((p) => (
              <button
                key={p.value}
                onClick={() => setBudget(p.value)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all tap-bounce border-2 border-espresso ${
                  budget === p.value
                    ? "bg-butter-400 text-espresso shadow-brutal-sm"
                    : "bg-white text-espresso hover:bg-softgray"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Slider Control Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-4 border-espresso shadow-brutal-lg mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-matcha-600">
                BUDGET BELANJA MAKSIMAL KAMU
              </span>
              <p className="text-3xl font-extrabold text-espresso font-editorial">
                {formatRupiah(budget)}
              </p>
            </div>
            <span className="px-4 py-2 rounded-2xl bg-vanilla text-espresso text-xs font-extrabold border-2 border-espresso self-start sm:self-auto">
              Ditemukan {filteredProducts.length} item ramah dompet ✨
            </span>
          </div>

          {/* HTML5 Range Slider with Chunky Thumb */}
          <div className="space-y-2">
            <input
              type="range"
              min={35000}
              max={300000}
              step={5000}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-3 bg-vanilla rounded-lg appearance-none cursor-pointer border-2 border-espresso accent-[#F2C46A]"
            />
            <div className="flex justify-between text-[11px] font-bold text-espresso-100">
              <span>Rp 35.000</span>
              <span>Rp 150.000</span>
              <span>Rp 300.000</span>
            </div>
          </div>
        </div>

        {/* Product Cards for this Budget */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center bg-white rounded-3xl border-2 border-espresso">
            <p className="text-sm font-bold text-espresso">
              Coba geser slider ke atas Rp 100.000 untuk melihat lebih banyak pilihan! 💸
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
