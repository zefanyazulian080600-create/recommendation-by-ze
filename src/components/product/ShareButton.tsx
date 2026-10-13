"use client";

import React, { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";
import { useToast } from "@/context/ToastContext";

interface ShareButtonProps {
  title: string;
  url?: string;
  className?: string;
}

export function ShareButton({ title, url, className = "" }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleShare = async () => {
    const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          text: `Cek rekomendasi ${title} di Recommendation by Ze!`,
          url: shareUrl,
        });
        showToast("Tautan berhasil dibagikan! ✨", "success");
        return;
      } catch (err) {
        // Fallback to clipboard if user dismissed or cancelled share sheet
      }
    }

    // Fallback: Copy to clipboard
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      showToast("Tautan spill disalin ke clipboard! 🔗", "link");
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
      className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full border border-white/20 bg-[#12131A] text-xs font-bold text-white hover:bg-white/15 transition-all shadow-sm active:scale-95 ${className}`}
      aria-label="Bagikan produk"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-emerald-400 font-bold">Link Tersalin!</span>
        </>
      ) : (
        <>
          <Share2 className="w-3.5 h-3.5 text-zinc-300" />
          <span className="text-white font-bold">Bagikan</span>
        </>
      )}
    </button>
  );
}
