"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, X, ShoppingBag, Heart, Flame } from "lucide-react";
import { useUser } from "@/context/UserContext";

export function LiveSpillTicker() {
  const { userName } = useUser();
  const [currentNotification, setCurrentNotification] = useState<{
    text: string;
    icon: string;
    time: string;
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const notifications = [
    { 
      text: userName 
        ? `Yo ${userName}! Seseorang di Bandung baru saja checkout Mechanical Keyboard 75%!` 
        : "Seseorang di Bandung baru saja checkout TWS Low Latency di Shopee!", 
      icon: "🎧", 
      time: "Baru saja" 
    },
    { text: "Lampu Meja Sunset Aesthetic baru ditambahkan ke Wishlist! 🪴", icon: "✨", time: "1 mnt lalu" },
    { text: "Tumbler Vacuum Tahan 24 Jam lagi viral di TikTok Shop! ⚡", icon: "🔥", time: "2 mnt lalu" },
    { 
      text: userName 
        ? `${userName}, 140+ orang lagi kepoin Sunscreen Barrier Viral hari ini!` 
        : "Sunscreen Serum SPF 50 dilihat 140+ orang hari ini!", 
      icon: "🧴", 
      time: "Baru saja" 
    },
    { text: "Heavyweight Boxy Tee diskon 30% di Tokopedia hari ini! 🛹", icon: "👕", time: "3 mnt lalu" },
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
    <div className="fixed bottom-20 left-4 z-40 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#12131A]/95 backdrop-blur-md border border-white/15 shadow-2xl text-white animate-slideUp max-w-xs pointer-events-auto">
      <span className="text-xl flex-shrink-0">{currentNotification.icon}</span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold text-white leading-snug">
          {currentNotification.text}
        </p>
        <span className="text-[10px] text-zinc-400 font-mono block mt-0.5">
          {currentNotification.time} • Community Activity
        </span>
      </div>
      <button
        type="button"
        onClick={() => setIsDismissed(true)}
        className="p-1 rounded-md text-zinc-500 hover:text-white"
        aria-label="Tutup notifikasi aktivitas"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
