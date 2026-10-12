"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, X, ShoppingBag, Heart, Flame } from "lucide-react";

export function LiveSpillTicker() {
  const [currentNotification, setCurrentNotification] = useState<{
    text: string;
    icon: string;
    time: string;
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const notifications = [
    { text: "Seseorang di Bandung baru saja checkout Linen Shirt di Shopee!", icon: "🛍️", time: "Baru saja" },
    { text: "Chunky Platform Loafers baru ditambahkan ke Wishlist! 💅", icon: "❤️", time: "1 mnt lalu" },
    { text: "Ceruty Pashmina Plisket lagi ramai di-spill di TikTok Shop!", icon: "🔥", time: "2 mnt lalu" },
    { text: "Multi-Pocket Canvas Tote Bag dilihat 140+ orang hari ini!", icon: "✨", time: "Baru saja" },
    { text: "Voucher Gratis Ongkir Shopee terverifikasi aktif hari ini! 💸", icon: "⚡", time: "3 mnt lalu" },
  ];

  useEffect(() => {
    if (isDismissed) return;

    let index = 0;
    const interval = setInterval(() => {
      setCurrentNotification(notifications[index % notifications.length]);
      setIsVisible(true);
      index++;

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }, 14000);

    // Initial show after 4 seconds
    const initialTimer = setTimeout(() => {
      setCurrentNotification(notifications[0]);
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 5000);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimer);
    };
  }, [isDismissed]);

  if (isDismissed || !currentNotification || !isVisible) return null;

  return (
    <div className="fixed bottom-20 left-4 z-40 hidden sm:flex items-center gap-2.5 p-3 rounded-2xl bg-vanilla/95 backdrop-blur-md border-2 border-espresso shadow-brutal text-espresso animate-slideUp max-w-xs pointer-events-auto">
      <span className="text-xl flex-shrink-0">{currentNotification.icon}</span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-bold text-espresso leading-snug">
          {currentNotification.text}
        </p>
        <span className="text-[9px] text-espresso-100 font-semibold block mt-0.5">
          {currentNotification.time} • Community Activity
        </span>
      </div>
      <button
        type="button"
        onClick={() => setIsDismissed(true)}
        className="p-1 rounded-md text-espresso-100 hover:text-espresso"
        aria-label="Tutup notifikasi aktivitas"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
