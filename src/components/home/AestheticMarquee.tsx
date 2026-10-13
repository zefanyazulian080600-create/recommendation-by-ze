"use client";

import React from "react";
import { Sparkles, Flame, Laptop, Home, ShoppingBag, Tag, CheckCircle2, Heart } from "lucide-react";

export function AestheticMarquee() {
  const items = [
    { text: "SPILL RACUN SHOPEE & TIKTOK SHOP", icon: Flame, color: "text-emerald-400" },
    { text: "TECH & DESK SETUP MINIMALIS", icon: Laptop, color: "text-sky-400" },
    { text: "KAMAR ESTETIK & PERINTILAN KOST", icon: Home, color: "text-amber-400" },
    { text: "SKINCARE VIRAL & DAILY GROOMING", icon: Heart, color: "text-rose-400" },
    { text: "OOTD STREETWEAR & CLEAN FIT", icon: Sparkles, color: "text-emerald-400" },
    { text: "BARANG UNIK LIFEHACK UNDER 50K", icon: Tag, color: "text-sky-400" },
    { text: "100% INDEPENDENT CURATION BY ZE", icon: CheckCircle2, color: "text-emerald-400" },
    { text: "RATING 4.9+ TOKO TERVERIFIKASI", icon: ShoppingBag, color: "text-amber-400" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#0C0D14] text-zinc-300 py-3 select-none border-y border-white/10">
      <div className="flex w-[200%] animate-marquee">
        {/* Track 1 */}
        <div className="flex items-center gap-8 px-4 flex-shrink-0">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase">
                <Icon className={`w-3.5 h-3.5 ${item.color} flex-shrink-0`} />
                <span className="text-zinc-200">{item.text}</span>
                <span className="text-white/20 text-xs ml-4">✦</span>
              </div>
            );
          })}
        </div>

        {/* Track 2 for seamless loop */}
        <div className="flex items-center gap-8 px-4 flex-shrink-0" aria-hidden="true">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`dup-${idx}`} className="flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase">
                <Icon className={`w-3.5 h-3.5 ${item.color} flex-shrink-0`} />
                <span className="text-zinc-200">{item.text}</span>
                <span className="text-white/20 text-xs ml-4">✦</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
