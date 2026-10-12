"use client";

import React, { useState } from "react";
import { Sparkles, X } from "lucide-react";

interface AnnouncementBarProps {
  message?: string;
  isActive?: boolean;
}

export function AnnouncementBar({
  message = "Temukan racun online shop terbaik & wishlist favoritmu hari ini ✨",
  isActive = true,
}: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(isActive);

  if (!isVisible || !message) return null;

  return (
    <div className="bg-blush-200 border-b border-blush-300 text-charcoal text-xs sm:text-sm font-medium py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 flex items-center justify-center gap-2 text-center">
          <Sparkles className="w-3.5 h-3.5 text-rose-600 animate-pulse flex-shrink-0" />
          <span className="tracking-wide">{message}</span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-charcoal-50 hover:text-charcoal p-1 rounded-md transition-colors"
          aria-label="Tutup pengumuman"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
