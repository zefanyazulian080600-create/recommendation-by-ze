"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { formatRupiah, getMarketplaceMeta } from "@/lib/utils";
import { MarketplaceButton } from "./MarketplaceButton";
import { Sparkles, ShoppingBag } from "lucide-react";

interface MobileStickyCheckoutBarProps {
  product: Product;
}

export function MobileStickyCheckoutBar({ product }: MobileStickyCheckoutBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const marketplaceMeta = getMarketplaceMeta(product.marketplace);

  const coverMedia =
    product.media?.find((m) => m.is_cover) ||
    product.media?.[0] || {
      public_url:
        "https://down-id.img.susercontent.com/file/id-11134207-7rbke-ma7vs1c79of1c0",
      alt_text: product.name,
    };

  useEffect(() => {
    // Show sticky bar after scrolling past 150px
    const handleScroll = () => {
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Checkout langsung di marketplace"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#090A0F]/95 backdrop-blur-md border-t border-white/10 px-3.5 py-3 shadow-[0_-10px_35px_rgba(0,0,0,0.8)] transition-all duration-300 animate-slide-up"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        {/* Left: Thumbnail & Price Info */}
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/20 flex-shrink-0 bg-[#12131A]">
            <Image
              src={coverMedia.public_url}
              alt={product.name}
              fill
              sizes="48px"
              className="object-cover"
            />
            {product.spill_number && (
              <span className="absolute bottom-0 inset-x-0 bg-white text-black text-[8px] font-mono font-bold text-center py-0.2 leading-tight">
                #{String(product.spill_number).padStart(2, "0")}
              </span>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider truncate">
                {product.category?.name || "Rekomendasi"}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-[9px] font-mono text-zinc-400 uppercase">
                {marketplaceMeta.name}
              </span>
            </div>
            <p className="text-xs font-bold text-white truncate leading-tight mt-0.5">
              {product.name}
            </p>
            <p className="text-xs font-extrabold text-white font-mono mt-0.5">
              {formatRupiah(product.price)}
            </p>
          </div>
        </div>

        {/* Right: Primary Checkout Outbound */}
        <div className="flex-shrink-0">
          <MarketplaceButton
            productId={product.id}
            marketplace={product.marketplace}
            affiliateUrl={product.affiliate_url}
            size="sm"
            customText={`Beli ↗`}
            className="py-2.5 px-4 text-xs font-bold shadow-lg active:scale-95 whitespace-nowrap"
          />
        </div>
      </div>
    </aside>
  );
}
