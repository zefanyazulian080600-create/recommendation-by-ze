"use client";

import React from "react";
import Link from "next/link";
import { Heart, ArrowRight, Trash2 } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { ProductCard } from "@/components/product/ProductCard";

export default function WishlistPage() {
  const { wishlist, wishlistCount } = useWishlist();

  return (
    <div className="min-h-screen bg-[#090A0F] text-white py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-emerald-400 flex items-center justify-center mx-auto mb-3 shadow-md">
            <Heart className="w-6 h-6 fill-emerald-400" />
          </div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
            Daftar Keinginan Saya
          </span>
          <h1 className="font-sans text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Wishlist Pilihanmu
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Tersimpan langsung di browsermu tanpa perlu login. Klik produk kapan saja untuk langsung
            membeli di marketplace terkait.
          </p>
        </div>

        {/* Content */}
        {wishlistCount === 0 ? (
          <div className="p-12 text-center bg-[#12131A] rounded-2xl border border-white/10 space-y-4 max-w-md mx-auto shadow-2xl">
            <p className="text-sm text-zinc-400">
              Belum ada produk yang disimpan di wishlist-mu.
            </p>
            <div className="pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs sm:text-sm font-bold hover:bg-zinc-200 transition-all shadow-md"
              >
                <span>Mulai Eksplorasi Rekomendasi</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono px-1">
              <span>{wishlistCount} item tersimpan</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {wishlist.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
