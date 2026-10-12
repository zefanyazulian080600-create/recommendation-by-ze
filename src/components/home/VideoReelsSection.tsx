"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Sparkles, Flame, Eye, Volume2, X, ExternalLink, ArrowRight } from "lucide-react";
import { Product } from "@/types";
import { formatRupiah, getMarketplaceMeta } from "@/lib/utils";
import { VideoPlayer } from "@/components/product/VideoPlayer";

interface VideoReelsSectionProps {
  products: Product[];
}

export function VideoReelsSection({ products }: VideoReelsSectionProps) {
  // Find products that have video media, or fallback to top trending products
  const videoProducts = products
    .filter((p) => p.media?.some((m) => m.media_type === "video"))
    .slice(0, 4);

  const displayList =
    videoProducts.length > 0 ? videoProducts : products.slice(0, 4);

  const [activeVideo, setActiveVideo] = useState<{
    url: string;
    product: Product;
  } | null>(null);

  if (displayList.length === 0) return null;

  return (
    <section className="py-14 bg-gradient-to-b from-ivory to-blush-50/60 border-t border-softgray overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-semibold mb-2 shadow-sm">
              <Flame className="w-3.5 h-3.5 text-[#EE4D2D] fill-[#EE4D2D]" />
              <span>Racun Video & Try-On Look</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium text-charcoal">
              Spill Video FYP & Reels
            </h2>
            <p className="text-sm text-charcoal-50 mt-1 max-w-xl">
              Tonton review dan video try-on nyata sebelum beli, biar gak salah pilih ukuran dan bahan.
            </p>
          </div>
          <Link
            href="/products?sort=trending"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-charcoal hover:text-rose transition-colors group"
          >
            <span>Lihat Semua Spill</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 9:16 Video Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {displayList.map((product, idx) => {
            const videoMedia = product.media?.find((m) => m.media_type === "video");
            const coverMedia =
              videoMedia?.thumbnail_url ||
              product.media?.[0]?.public_url ||
              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop";
            const marketplaceMeta = getMarketplaceMeta(product.marketplace);

            const views = ["142.5k", "98.2k", "215.8k", "76.4k"][idx % 4];

            return (
              <div
                key={product.id}
                className="group relative aspect-[9/16] rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between border border-softgray-border bg-charcoal"
              >
                {/* Background Image / Thumbnail */}
                <Image
                  src={coverMedia}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-black/40 pointer-events-none" />

                {/* Top Overlay Strip */}
                <div className="relative z-10 p-3.5 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold">
                    <Eye className="w-3 h-3 text-rose" />
                    <span>{views}</span>
                  </div>

                  <span
                    className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${marketplaceMeta.badgeBg} text-white`}
                  >
                    {marketplaceMeta.name}
                  </span>
                </div>

                {/* Center Play Button Overlay */}
                <div className="relative z-10 flex-1 flex items-center justify-center">
                  <button
                    onClick={() => {
                      if (videoMedia?.public_url) {
                        setActiveVideo({ url: videoMedia.public_url, product });
                      } else {
                        // Fallback sample video if none attached
                        setActiveVideo({
                          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                          product,
                        });
                      }
                    }}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 text-charcoal hover:bg-rose hover:text-white flex items-center justify-center shadow-lg backdrop-blur-md group-hover:scale-110 active:scale-95 transition-all"
                    aria-label={`Putar video review ${product.name}`}
                  >
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current translate-x-0.5" />
                  </button>
                </div>

                {/* Bottom Info Overlay */}
                <div className="relative z-10 p-3.5 sm:p-4 text-white space-y-2">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blush-300 block">
                      {product.badge_label || "Trending TikTok"}
                    </span>
                    <Link
                      href={`/product/${product.slug}`}
                      className="font-editorial text-sm font-semibold line-clamp-1 hover:text-blush transition-colors"
                    >
                      {product.name}
                    </Link>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-white">
                        {formatRupiah(product.price)}
                      </span>
                      {product.original_price && product.original_price > product.price && (
                        <span className="text-[10px] text-white/60 line-through">
                          {formatRupiah(product.original_price)}
                        </span>
                      )}
                    </div>
                  </div>

                  <Link
                    href={`/product/${product.slug}`}
                    className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-white text-charcoal text-xs font-semibold hover:bg-rose hover:text-white transition-all shadow-md active:scale-95"
                  >
                    <span>Spill Link Produk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-sm bg-charcoal rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-white hover:text-charcoal transition-all"
              aria-label="Tutup video"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player */}
            <div className="aspect-[9/16] bg-black">
              <VideoPlayer
                src={activeVideo.url}
                title={activeVideo.product.name}
                autoPlay={true}
              />
            </div>

            {/* Modal Product Footer */}
            <div className="p-4 bg-white flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-bold text-charcoal truncate">
                  {activeVideo.product.name}
                </p>
                <p className="text-xs font-bold text-rose">
                  {formatRupiah(activeVideo.product.price)}
                </p>
              </div>
              <a
                href={activeVideo.product.affiliate_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-charcoal text-white text-xs font-semibold hover:bg-rose transition-colors flex-shrink-0"
              >
                Checkout 🛍️
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
