"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Category } from "@/types";

interface CategorySliderProps {
  categories: Category[];
}

export function CategorySlider({ categories = [] }: CategorySliderProps) {
  return (
    <section className="py-14 border-t border-white/10 bg-[#090A0F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>JELAJAHI BERDASARKAN KATEGORI</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Kategori Terkurasi Lengkap
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white transition-colors group"
          >
            <span>Buka Semua Produk</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="group relative bg-[#12131A] rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/40 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col tap-bounce"
            >
              <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden border-b border-white/10">
                <Image
                  src={
                    category.cover_image ||
                    "https://down-id.img.susercontent.com/file/id-11134207-7rbke-ma7vs1c79of1c0"
                  }
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Category title overlay */}
                <div className="absolute bottom-3 inset-x-3 text-white">
                  <h3 className="font-sans text-sm sm:text-base font-bold leading-tight group-hover:text-emerald-400 transition-colors">
                    {category.name}
                  </h3>
                  {category.product_count !== undefined && (
                    <span className="text-[11px] text-zinc-300 block mt-0.5 font-mono">
                      {category.product_count} Rekomendasi
                    </span>
                  )}
                </div>
              </div>

              {category.subcategories && category.subcategories.length > 0 ? (
                <div className="p-3 bg-[#12131A] border-t border-white/5 flex flex-wrap gap-1">
                  {category.subcategories.slice(0, 4).map((sub) => (
                    <span
                      key={sub.id}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-zinc-300 font-medium"
                    >
                      <span>{sub.icon}</span>
                      <span className="truncate max-w-[80px]">{sub.name}</span>
                    </span>
                  ))}
                  {category.subcategories.length > 4 && (
                    <span className="text-[10px] text-zinc-400 self-center px-1 font-mono">
                      +{category.subcategories.length - 4} lagi
                    </span>
                  )}
                </div>
              ) : category.description ? (
                <div className="p-3.5 bg-[#12131A]">
                  <p className="text-xs text-zinc-400 line-clamp-1 font-normal">
                    {category.description}
                  </p>
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
