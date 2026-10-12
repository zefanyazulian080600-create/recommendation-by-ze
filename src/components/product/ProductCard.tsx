"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, ExternalLink } from "lucide-react";
import { Product } from "@/types";
import { formatRupiah, calculateDiscount, getMarketplaceMeta } from "@/lib/utils";
import { WishlistButton } from "./WishlistButton";
import { MarketplaceButton } from "./MarketplaceButton";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
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

  return (
    <div className="group relative bg-white rounded-3xl border border-softgray-border/80 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full">
      {/* Media Container with 4:5 aspect ratio */}
      <div className="relative aspect-[4/5] bg-softgray overflow-hidden w-full">
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

        {/* Top Badges Row */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
          <div className="flex flex-col gap-1 items-start">
            {product.badge_label && (
              <span className="px-2.5 py-1 rounded-full bg-charcoal/90 text-white text-[10px] sm:text-xs font-semibold backdrop-blur-md shadow-sm">
                {product.badge_label}
              </span>
            )}
            {discount && (
              <span className="px-2 py-0.5 rounded-full bg-rose text-white text-[10px] font-bold shadow-sm">
                -{discount}%
              </span>
            )}
          </div>

          {/* Wishlist Button (pointer events enabled) */}
          <div className="pointer-events-auto">
            <WishlistButton product={product} size="sm" />
          </div>
        </div>

        {/* Video Indicator Pill */}
        {hasVideo && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-medium shadow-sm">
            <Play className="w-3 h-3 fill-white" />
            <span>Video</span>
          </div>
        )}

        {/* Marketplace Pill */}
        <div className="absolute bottom-3 right-3">
          <span
            className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm border ${marketplaceMeta.borderClass}`}
          >
            {marketplaceMeta.name}
          </span>
        </div>
      </div>

      {/* Info Container */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          {product.category && (
            <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-50">
              {product.category.name}
            </span>
          )}

          <Link href={`/product/${product.slug}`} className="block group-hover:text-rose transition-colors">
            <h3 className="font-editorial text-sm sm:text-base font-medium text-charcoal line-clamp-2 leading-snug">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-charcoal-50 line-clamp-1">
            {product.short_description}
          </p>
        </div>

        {/* Price & Actions Row */}
        <div className="pt-2 border-t border-softgray flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm sm:text-base font-bold text-charcoal">
                {formatRupiah(product.price)}
              </span>
              {product.original_price && product.original_price > product.price && (
                <span className="text-xs text-charcoal-50 line-through">
                  {formatRupiah(product.original_price)}
                </span>
              )}
            </div>
            {product.price_note && (
              <span className="text-[10px] text-charcoal-50 block truncate max-w-[150px]">
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
            customText="Beli"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
