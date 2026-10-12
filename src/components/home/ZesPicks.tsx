"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Product } from "@/types";
import { ProductCard } from "@/components/product/ProductCard";

interface ZesPicksProps {
  products: Product[];
}

export function ZesPicks({ products = [] }: ZesPicksProps) {
  const featured = products.filter((p) => p.is_featured).slice(0, 8);

  if (featured.length === 0) return null;

  return (
    <section id="zes-picks" className="py-14 bg-ivory-50/70 border-t border-softgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-rose mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Selection</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium text-charcoal">
              Ze&apos;s Picks
            </h2>
            <p className="text-sm text-charcoal-50 mt-1 max-w-xl">
              Barang online shop pilihan terbaik yang paling recommended karena kualitas bahan,
              fungsi nyata, dan estetika visualnya.
            </p>
          </div>
          <Link
            href="/products?sort=featured"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-charcoal hover:text-rose transition-colors group"
          >
            <span>Lihat Semua Pilihan Ze</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Grid: 2 cols on mobile, 3 on md, 4 on lg */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 4} />
          ))}
        </div>
      </div>
    </section>
  );
}
