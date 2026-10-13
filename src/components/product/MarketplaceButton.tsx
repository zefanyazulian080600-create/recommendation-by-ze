"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { Marketplace } from "@/types";
import { getMarketplaceMeta, isValidAffiliateUrl, cn } from "@/lib/utils";

interface MarketplaceButtonProps {
  productId: string;
  marketplace: Marketplace;
  affiliateUrl: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  customText?: string;
}

export function MarketplaceButton({
  productId,
  marketplace,
  affiliateUrl,
  size = "md",
  className = "",
  customText,
}: MarketplaceButtonProps) {
  const meta = getMarketplaceMeta(marketplace);
  const isValid = isValidAffiliateUrl(affiliateUrl);

  const handleClick = () => {
    if (!isValid) return;

    // Fire tracking event non-blockingly
    try {
      fetch("/api/track-click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_id: productId,
          marketplace,
          referrer: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      }).catch(() => {
        // Ignore tracking error, never block user journey
      });
    } catch {
      // Ignored
    }
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs font-bold",
    md: "px-4 py-2.5 text-sm font-bold",
    lg: "px-6 py-3.5 text-base font-bold",
  }[size];

  if (!isValid) {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center gap-1.5 rounded-full bg-white/10 text-zinc-500 cursor-not-allowed",
          sizeClasses,
          className
        )}
      >
        Tautan Belum Tersedia
      </span>
    );
  }

  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all shadow-md active:scale-[0.98]",
        meta.colorClass,
        sizeClasses,
        className
      )}
    >
      <span>{customText || meta.cta}</span>
      <ExternalLink className="w-4 h-4 opacity-80" />
    </a>
  );
}
