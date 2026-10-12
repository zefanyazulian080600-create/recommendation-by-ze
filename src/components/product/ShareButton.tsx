"use client";

import React, { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";

interface ShareButtonProps {
  title: string;
  url?: string;
  className?: string;
}

export function ShareButton({ title, url, className = "" }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          text: `Cek rekomendasi ${title} di Recommendation by Ze!`,
          url: shareUrl,
        });
        return;
      } catch (err) {
        // Fallback to clipboard if user dismissed or cancelled share sheet
      }
    }

    // Fallback: Copy to clipboard
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback alert
      prompt("Salin link ini:", shareUrl);
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full border border-softgray-border bg-white text-xs font-medium text-charcoal hover:bg-softgray transition-all shadow-sm ${className}`}
      aria-label="Bagikan produk"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-green-600" />
          <span className="text-green-700">Link Tersalin!</span>
        </>
      ) : (
        <>
          <Share2 className="w-3.5 h-3.5 text-charcoal-100" />
          <span>Bagikan</span>
        </>
      )}
    </button>
  );
}
