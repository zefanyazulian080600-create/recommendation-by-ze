"use client";

import React from "react";
import { Sparkles, Flame, Heart, ShoppingBag, Tag, CheckCircle2 } from "lucide-react";

export function AestheticMarquee() {
  const items = [
    { text: "SPILL RACUN SHOPEE & TIKTOK SHOP", icon: Flame, color: "text-butter-400" },
    { text: "VIBE SKENA, KALCER BLOK M, STARBOY & GORPCORE", icon: Sparkles, color: "text-butter-300" },
    { text: "100% REAL CURATION BY ZE", icon: Sparkles, color: "text-matcha-300" },
    { text: "VOUCHER GRATIS ONGKIR & DISKON", icon: Tag, color: "text-butter-300" },
    { text: "OOTD COWOK & CEWEK • STREETWEAR & CLEAN FIT", icon: Heart, color: "text-vanilla" },
    { text: "RATING 4.9+ TOKO TERVERIFIKASI", icon: CheckCircle2, color: "text-matcha-400" },
    { text: "ROOM DECOR & GADGET SETUP ESTETIK", icon: ShoppingBag, color: "text-butter-400" },
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
