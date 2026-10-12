"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Category } from "@/types";

interface CategorySliderProps {
  categories: Category[];
}

export function CategorySlider({ categories = [] }: CategorySliderProps) {
  return (
    <section className="py-14 border-t-2 border-espresso/15 bg-vanilla">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-matcha-600">
              Jelajahi Berdasarkan Kategori
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium text-espresso mt-1">
              Temukan Yang Kamu Cari
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-espresso hover:text-matcha-600 transition-colors group"
          >
            <span>Semua Kategori</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="group relative bg-white rounded-3xl overflow-hidden border-2 border-espresso/15 hover:border-espresso shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col tap-bounce"
            >
              <div className="relative aspect-[4/3] bg-softgray overflow-hidden border-b-2 border-espresso/10">
                <Image
                  src={
                    category.cover_image ||
                    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop"
                  }
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
                
                {/* Category title overlay */}
                <div className="absolute bottom-3 inset-x-3 text-white">
                  <h3 className="font-editorial text-base sm:text-lg font-bold leading-tight">
                    {category.name}
                  </h3>
                  {category.product_count !== undefined && (
                    <span className="text-[11px] text-vanilla/90 block mt-0.5 font-medium">
                      {category.product_count} Rekomendasi
                    </span>
                  )}
                </div>
              </div>

              {category.description && (
                <div className="p-3.5 bg-white">
                  <p className="text-xs text-espresso-100 line-clamp-1 font-medium">
                    {category.description}
                  </p>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
