"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Sparkles, Flame, Eye, X, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Product } from "@/types";
import { formatRupiah, getMarketplaceMeta } from "@/lib/utils";
import { VideoPlayer } from "@/components/product/VideoPlayer";

interface VideoReelsSectionProps {
  products: Product[];
}

export function VideoReelsSection({ products }: VideoReelsSectionProps) {
  const videoProducts = products
    .filter((p) => p.media?.some((m) => m.media_type === "video"))
    .slice(0, 4);

  const displayList =
    videoProducts.length > 0 ? videoProducts : products.slice(0, 4);

  const [activeVideo, setActiveVideo] = useState<{
    url: string;
    product: Product;
  } | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideo(null);
      }
    };
    if (activeVideo) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  if (displayList.length === 0) return null;

  return (
    <section className="py-14 bg-gradient-to-b from-vanilla via-[#FAF3E4] to-vanilla border-t border-softgray-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-butter-400 text-espresso text-xs font-bold mb-2 shadow-sm border border-butter-500">
              <Flame className="w-3.5 h-3.5 text-espresso fill-espresso" />
              <span>Racun Video FYP & Try-On Look</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium text-espresso">
              Spill Video FYP & Reels
            </h2>
            <p className="text-sm text-espresso-100 mt-1 max-w-xl">
              Tonton review dan video try-on nyata sebelum checkout, biar gak salah pilih ukuran dan bahan.
            </p>
          </div>
          <Link
            href="/products?sort=trending"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-espresso hover:text-matcha-600 transition-colors group"
          >
            <span>Lihat Semua Video Spill</span>
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
                className="group relative aspect-[9/16] rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between border-2 border-espresso/15 bg-espresso"
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
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/25 to-black/40 pointer-events-none" />

                {/* Top Overlay Strip */}
                <div className="relative z-10 p-3.5 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold">
                    <Eye className="w-3 h-3 text-butter-400" />
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
                        setActiveVideo({
                          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                          product,
                        });
                      }
                    }}
                    className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-vanilla text-espresso hover:bg-butter-400 hover:scale-110 flex items-center justify-center shadow-lg transition-all active:scale-95 border-2 border-espresso"
                    aria-label={`Putar video review ${product.name}`}
                  >
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current translate-x-0.5" />
                  </button>
                </div>

                {/* Bottom Info Overlay */}
                <div className="relative z-10 p-3.5 sm:p-4 text-white space-y-2">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-butter-300 block">
                      {product.badge_label || "Trending TikTok"}
                    </span>
                    <Link
                      href={`/product/${product.slug}`}
                      className="font-editorial text-sm font-semibold line-clamp-1 hover:text-butter-300 transition-colors"
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
                    className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-butter-400 text-espresso text-xs font-bold hover:bg-butter-500 transition-all shadow-md active:scale-95 border border-espresso"
                  >
                    <span>Spill Link Produk 🛍️</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Modal Popup with foolproof Exit/Back Mechanism */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-espresso/80 backdrop-blur-md animate-fadeIn"
          onClick={(e) => {
            // Click outside to close
            if (e.target === e.currentTarget) {
              setActiveVideo(null);
            }
          }}
        >
          {/* Top Bar for Mobile & Desktop - Easy Return */}
          <div className="fixed top-4 inset-x-4 max-w-sm mx-auto flex items-center justify-between z-50 pointer-events-none">
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="pointer-events-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-vanilla text-espresso text-xs font-bold shadow-lg border border-espresso hover:bg-butter-400 active:scale-95 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Toko</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="pointer-events-auto w-9 h-9 rounded-full bg-vanilla text-espresso hover:bg-butter-400 flex items-center justify-center shadow-lg border border-espresso active:scale-95 transition-all"
              aria-label="Tutup video"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Container */}
          <div className="relative w-full max-w-sm bg-espresso rounded-3xl overflow-hidden shadow-2xl border-2 border-vanilla mt-10">
            {/* Video Player */}
            <div className="aspect-[9/16] bg-black">
              <VideoPlayer
                src={activeVideo.url}
                title={activeVideo.product.name}
                autoPlay={true}
              />
            </div>

            {/* Modal Product Footer */}
            <div className="p-4 bg-vanilla border-t-2 border-espresso space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-xs font-bold text-espresso truncate">
                    {activeVideo.product.name}
                  </p>
                  <p className="text-sm font-extrabold text-matcha-600">
                    {formatRupiah(activeVideo.product.price)}
                  </p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-matcha-100 text-espresso border border-matcha-400">
                  Rating 4.9★
                </span>
              </div>

              {/* Action Buttons: Checkout + Tutup */}
              <div className="flex items-center gap-2">
                <a
                  href={activeVideo.product.affiliate_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-center rounded-full bg-espresso text-vanilla text-xs font-bold hover:bg-butter-400 hover:text-espresso transition-all shadow-md active:scale-95 border border-espresso"
                >
                  Beli di Marketplace 🛍️
                </a>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="px-4 py-3 rounded-full bg-white text-espresso text-xs font-semibold hover:bg-softgray transition-colors border border-softgray-border"
                >
                  Tutup Video
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
