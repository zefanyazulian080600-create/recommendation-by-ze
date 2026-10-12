"use client";

import React from "react";
import { Sparkles, Flame, Heart, ShoppingBag, Tag, CheckCircle2 } from "lucide-react";

export function AestheticMarquee() {
  const items = [
    { text: "SPILL RACUN SHOPEE & TIKTOK SHOP", icon: Flame, color: "text-butter-400" },
    { text: "100% REAL CURATION BY ZE", icon: Sparkles, color: "text-matcha-300" },
    { text: "VOUCHER GRATIS ONGKIR & DISKON", icon: Tag, color: "text-butter-300" },
    { text: "OOTD KOREAN & CLEAN GIRL LOOK", icon: Heart, color: "text-vanilla" },
    { text: "RATING 4.9+ TOKO TERVERIFIKASI", icon: CheckCircle2, color: "text-matcha-400" },
    { text: "ROOM DECOR & GADGET SETUP ESTETIK", icon: ShoppingBag, color: "text-butter-400" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-espresso text-vanilla py-3 select-none border-y-2 border-espresso-800">
      <div className="flex w-[200%] animate-marquee">
        {/* Track 1 */}
        <div className="flex items-center gap-8 px-4 flex-shrink-0">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase">
                <Icon className={`w-4 h-4 ${item.color} flex-shrink-0`} />
                <span>{item.text}</span>
                <span className="text-butter-400/50 text-sm ml-4">•</span>
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
                <Icon className={`w-4 h-4 ${item.color} flex-shrink-0`} />
                <span>{item.text}</span>
                <span className="text-butter-400/50 text-sm ml-4">•</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
