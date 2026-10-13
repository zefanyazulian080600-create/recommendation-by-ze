"use client";

import React, { useState } from "react";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { ChevronDown, Sparkles } from "lucide-react";

interface ProductCatalogGridProps {
  products: Product[];
}

const ITEMS_PER_PAGE = 18;

export function ProductCatalogGrid({ products }: ProductCatalogGridProps) {
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);

  if (products.length === 0) {
    return (
      <div className="p-12 text-center bg-[#12131A] rounded-2xl border border-white/10 space-y-4 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center mx-auto text-2xl">
          🔍
        </div>
        <h3 className="font-sans text-xl font-bold text-white">
          Tidak Ada Produk Yang Cocok
        </h3>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto">
          Coba ubah kata kunci pencarian atau sesuaikan filter marketplace dan kategori yang
          kamu pilih.
        </p>
        <div className="pt-2">
          <a
            href="/products"
            className="inline-block px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors shadow-md"
          >
            Reset Semua Filter
          </a>
        </div>
      </div>
    );
  }

  const displayedProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;
  const progressPercent = Math.min(100, Math.round((displayedProducts.length / products.length) * 100));

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, products.length));
  };

  const handleShowAll = () => {
    setVisibleCount(products.length);
  };

  return (
    <div className="space-y-8">
      {/* Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {displayedProducts.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            priority={idx < 6} // Prioritize only the first 6 above the fold for blazing speed
          />
        ))}
      </div>

      {/* Pagination & Load More Controls */}
      {hasMore && (
        <div className="p-6 rounded-2xl bg-[#12131A] border border-white/10 text-center space-y-4 max-w-md mx-auto shadow-xl">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span>Menampilkan {displayedProducts.length} dari {products.length} produk</span>
              <span className="text-emerald-400 font-bold">{progressPercent}%</span>
            </div>
            {/* Smooth Progress Bar */}
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 rounded-xl bg-white text-black text-xs sm:text-sm font-bold hover:bg-zinc-200 transition-all active:scale-95 shadow-lg flex items-center gap-2 tap-bounce"
            >
              <span>Muat Lebih Banyak (+{Math.min(ITEMS_PER_PAGE, products.length - visibleCount)})</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button
              onClick={handleShowAll}
              className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-semibold border border-white/10 transition-colors tap-bounce"
            >
              Semua ({products.length})
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
