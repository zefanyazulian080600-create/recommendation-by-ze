"use client";

import React from "react";
import { Sparkles, Flame, Heart, ShoppingBag, Tag, CheckCircle2 } from "lucide-react";

export function AestheticMarquee() {
  const items = [
    { text: "SPILL RACUN SHOPEE & TIKTOK SHOP", icon: Flame, color: "text-[#EE4D2D]" },
    { text: "100% REAL CURATION BY ZE", icon: Sparkles, color: "text-rose" },
    { text: "DISKON & VOUCHER GRATIS ONGKIR", icon: Tag, color: "text-[#03AC0E]" },
    { text: "OOTD KOREAN & MINIMALIST LOOK", icon: Heart, color: "text-rose-500" },
    { text: "RATING 4.9+ REPUTASI TERPERCAYA", icon: CheckCircle2, color: "text-charcoal" },
    { text: "ROOM DECOR & GADGET SETUP ESTETIK", icon: ShoppingBag, color: "text-rose" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-charcoal text-white py-2.5 select-none border-y border-charcoal-800">
      <div className="flex w-[200%] animate-marquee">
        {/* Track 1 */}
        <div className="flex items-center gap-8 px-4 flex-shrink-0">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
                <Icon className={`w-3.5 h-3.5 ${item.color} flex-shrink-0`} />
                <span>{item.text}</span>
                <span className="text-white/30 text-xs ml-4">•</span>
              </div>
            );
          })}
        </div>

        {/* Track 2 for seamless loop */}
        <div className="flex items-center gap-8 px-4 flex-shrink-0" aria-hidden="true">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`dup-${idx}`} className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
                <Icon className={`w-3.5 h-3.5 ${item.color} flex-shrink-0`} />
                <span>{item.text}</span>
                <span className="text-white/30 text-xs ml-4">•</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
