"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, Star, Copy, Sparkles, Flame } from "lucide-react";
import { Product } from "@/types";
import { formatRupiah, calculateDiscount, getMarketplaceMeta } from "@/lib/utils";
import { WishlistButton } from "./WishlistButton";
import { MarketplaceButton } from "./MarketplaceButton";
import { useToast } from "@/context/ToastContext";
import { triggerConfetti } from "@/lib/confetti";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { showToast } = useToast();

  // Find cover media or first media item
  const coverMedia =
    product.media?.find((m) => m.is_cover) ||
    product.media?.[0] || {
      public_url:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
      alt_text: product.name,
      media_type: "image",
    };

  const hasVideo = product.media?.some((m) => m.media_type === "video");
  const discount = calculateDiscount(product.original_price, product.price);
  const marketplaceMeta = getMarketplaceMeta(product.marketplace);

  const handleCopySpill = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const productUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}/product/${product.slug}`
        : product.affiliate_url;
    navigator.clipboard.writeText(productUrl).then(() => {
      triggerConfetti(e.clientX, e.clientY);
      showToast(
        `Tautan Spill No. #${product.spill_number || "01"} (${product.name}) disalin! 🔗`,
        "link"
      );
    });
  };

  return (
    <div className="group relative bg-white rounded-3xl border-2 border-espresso overflow-hidden shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 flex flex-col h-full tap-bounce">
      {/* Media Container with 4:5 aspect ratio */}
      <div className="relative aspect-[4/5] bg-softgray overflow-hidden w-full border-b-2 border-espresso">
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image
            src={
              coverMedia.media_type === "video"
                ? coverMedia.thumbnail_url || coverMedia.public_url
                : coverMedia.public_url
            }
            alt={coverMedia.alt_text || product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Soft hover gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        {/* Top Badges Row */}
        <div className="absolute top-3 inset-x-3 flex items-start justify-between pointer-events-none z-10 gap-2">
          {/* Retro Creator Spill Number + Badge */}
          <div className="flex flex-col gap-1 items-start">
            <div className="flex items-center gap-1.5 flex-wrap pointer-events-auto">
              {product.spill_number && (
                <span
                  title={`Kode Racun Bio #${product.spill_number}`}
                  className="px-2 py-0.5 rounded-md bg-espresso text-vanilla font-mono text-[10px] font-bold tracking-wider shadow-sm border border-espresso flex items-center gap-1"
                >
                  <span className="text-butter-400 font-editorial">№</span>
                  <span>{String(product.spill_number).padStart(2, "0")}</span>
                </span>
              )}

              {product.badge_label ? (
                <span className="px-2 py-0.5 rounded-full bg-butter-300 text-espresso text-[10px] font-extrabold shadow-sm flex items-center gap-1 border border-espresso -rotate-1">
                  <Sparkles className="w-2.5 h-2.5 text-rose" />
                  <span>{product.badge_label}</span>
                </span>
              ) : product.is_featured ? (
                <span className="px-2 py-0.5 rounded-full bg-butter-400 text-espresso text-[10px] font-extrabold shadow-sm border border-espresso -rotate-1">
                  ⭐ Ze&apos;s Pick
                </span>
              ) : null}
            </div>

            {discount && (
              <span className="px-2 py-0.5 rounded-full bg-matcha-500 text-white text-[10px] font-extrabold shadow-sm border border-espresso rotate-2">
                -{discount}%
              </span>
            )}
          </div>

          {/* Top Right Action: Wishlist + Copy */}
          <div className="pointer-events-auto flex items-center gap-1.5">
            <button
              onClick={handleCopySpill}
              title={`Salin tautan spill No. #${product.spill_number || ""}`}
              className="w-8 h-8 rounded-full bg-vanilla/95 backdrop-blur-md shadow-sm hover:bg-butter-400 flex items-center justify-center text-espresso transition-all opacity-0 group-hover:opacity-100 hidden sm:flex border-2 border-espresso"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
            <WishlistButton product={product} size="sm" />
          </div>
        </div>

        {/* Bottom Floating Info Over Media */}
        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
          {/* Video Indicator Pill */}
          {hasVideo ? (
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md text-white text-[10px] font-bold shadow-sm border border-white/20">
              <Play className="w-3 h-3 fill-white" />
              <span>Video Try-On</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-vanilla/95 backdrop-blur-md text-espresso text-[10px] font-extrabold border border-espresso shadow-sm">
              <Star className="w-3 h-3 text-butter-500 fill-butter-500" />
              <span>4.9 (1.2k+)</span>
            </div>
          )}

          {/* Marketplace Pill with Official Color */}
          <span
            className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-sm border ${marketplaceMeta.borderClass}`}
          >
            {marketplaceMeta.name}
          </span>
        </div>
      </div>

      {/* Info Container */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            {product.category && (
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-matcha-600">
                {product.category.name}
              </span>
            )}
            {product.spill_number && (
              <span className="text-[10px] font-mono font-bold text-espresso/50 tracking-wider">
                SPILL #{String(product.spill_number).padStart(2, "0")}
              </span>
            )}
          </div>

          <Link href={`/product/${product.slug}`} className="block group-hover:text-matcha-600 transition-colors">
            <h3 className="font-editorial text-sm sm:text-base font-bold text-espresso line-clamp-2 leading-snug">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-espresso-100 line-clamp-1">
            {product.short_description}
          </p>
        </div>

        {/* Price & Actions Row */}
        <div className="pt-2.5 border-t border-softgray-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm sm:text-base font-extrabold text-espresso">
                {formatRupiah(product.price)}
              </span>
              {product.original_price && product.original_price > product.price && (
                <span className="text-xs text-espresso-50 line-through">
                  {formatRupiah(product.original_price)}
                </span>
              )}
            </div>
            {product.price_note && (
              <span className="text-[10px] text-espresso-50 block truncate max-w-[150px]">
                {product.price_note}
              </span>
            )}
          </div>

          {/* Quick Outbound Link */}
          <MarketplaceButton
            productId={product.id}
            marketplace={product.marketplace}
            affiliateUrl={product.affiliate_url}
            size="sm"
            customText="Spill 🛍️"
            className="w-full sm:w-auto font-bold"
          />
        </div>

        {/* Streetwear barcode detail */}
        <div className="pt-1 flex items-center justify-between text-[10px] text-espresso/40 font-mono select-none border-t border-dashed border-espresso/15">
          <span className="tracking-widest">||| | |||| | ||</span>
          <span className="text-[9px] uppercase font-bold text-matcha-600">
            ✦ ZE ARCHIVE #{String(product.spill_number || "01").padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
