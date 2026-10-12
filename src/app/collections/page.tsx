import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { getCollections, getProducts } from "@/lib/data/store";
import { ProductCard } from "@/components/product/ProductCard";

export const metadata: Metadata = {
  title: "Koleksi Tematik & Editorial Lookbooks",
  description:
    "Kombinasi kurasi outfit, dekorasi aesthetic, dan produk esensial pilihan Ze yang dirancang tematik.",
};

export default async function CollectionsPage() {
  const collections = await getCollections();
  const allProducts = await getProducts({});

  return (
    <div className="min-h-screen bg-[#090A0F] text-white py-8 md:py-14 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
            Editorial Curations
          </span>
          <h1 className="font-sans text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Koleksi Tematik Pilihan
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Daftar paket inspirasi kurasi Ze untuk berbagai momen: dari gaya hidup clean minimalis
            hingga racun hemat under 100k.
          </p>
        </div>

        {/* Collections Stack */}
        <div className="space-y-16">
          {collections.map((col, idx) => {
            // For demo: show a subset of products for each collection
            const colProducts = allProducts.slice(idx * 2, idx * 2 + 4);

            return (
              <div
                key={col.id}
                id={col.slug}
                className="space-y-6 pt-6 border-t border-white/10 first:border-0"
              >
                {/* Collection Feature Card Banner */}
                <div className="relative rounded-2xl overflow-hidden bg-[#12131A] border border-white/10 text-white aspect-[21/9] min-h-[220px] flex items-end p-6 sm:p-10 shadow-2xl">
                  <Image
                    src={col.cover_image}
                    alt={col.title}
                    fill
                    sizes="100vw"
                    className="object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-[#090A0F]/50 to-transparent" />

                  <div className="relative z-10 space-y-2 max-w-2xl">
                    {col.badge_text && (
                      <span className="px-3 py-1 rounded-full bg-white text-black text-[10px] font-mono font-bold shadow-md">
                        {col.badge_text}
                      </span>
                    )}
                    <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                      {col.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {col.description}
                    </p>
                  </div>
                </div>

                {/* Associated Products Grid */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                      Item Dalam Koleksi Ini:
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {colProducts.map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
