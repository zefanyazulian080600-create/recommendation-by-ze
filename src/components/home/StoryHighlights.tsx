"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface HighlightItem {
  id: string;
  label: string;
  tag: string;
  href: string;
  imageUrl: string;
  isNew?: boolean;
}

export function StoryHighlights() {
  const highlights: HighlightItem[] = [
    {
      id: "anak-skena",
      label: "Anak Skena",
      tag: "🎸 Tote & Kopi",
      href: "/products?search=skena",
      imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop",
      isNew: true,
    },
    {
      id: "kalcer-blok-m",
      label: "Kalcer Blok M",
      tag: "🛹 Workwear",
      href: "/products?search=kalcer",
      imageUrl: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=400&auto=format&fit=crop",
      isNew: true,
    },
    {
      id: "outfit-cowok",
      label: "OOTD Cowok",
      tag: "🛹 Bro Look",
      href: "/products?category=outfit-pria",
      imageUrl: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=400&auto=format&fit=crop",
      isNew: true,
    },
    {
      id: "unisex",
      label: "Unisex Fit",
      tag: "🧢 Streetwear",
      href: "/products?category=outfit-unisex",
      imageUrl: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=400&auto=format&fit=crop",
      isNew: true,
    },
    {
      id: "outfit",
      label: "OOTD Cewek",
      tag: "👗 Fashion",
      href: "/products?category=outfit-wanita",
      imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "viral",
      label: "Viral TikTok",
      tag: "🔥 FYP",
      href: "/products?sort=trending",
      imageUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "skincare",
      label: "Skin & Grooming",
      tag: "💧 Holy Grail",
      href: "/products?category=skincare-grooming",
      imageUrl: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=400&auto=format&fit=crop",
      isNew: true,
    },
    {
      id: "room",
      label: "Room Aesthetic",
      tag: "🪴 Cozy Home",
      href: "/products?category=aesthetic-room",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "desk",
      label: "Desk & Gadget",
      tag: "🎧 Setup",
      href: "/products?category=desk-setup-gadget",
      imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "cheap",
      label: "Under 100k",
      tag: "💸 Hemat",
      href: "/products?price=under-50k",
      imageUrl: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=400&auto=format&fit=crop",
      isNew: true,
    },
    {
      id: "shopee",
      label: "Spill Shopee",
      tag: "🧡 Gratis Ongkir",
      href: "/products?marketplace=shopee",
      imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "tiktok",
      label: "TikTok Shop",
      tag: "🖤 Live Racun",
      href: "/products?marketplace=tiktok",
      imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "picks",
      label: "Pilihan Ze",
      tag: "⭐ Best Curated",
      href: "#zes-picks",
      imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=400&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-5 border-b border-white/10 bg-[#090A0F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
              Stories & Highlight Drops
            </h3>
          </div>
          <span className="text-[11px] text-zinc-500 font-medium hidden sm:inline">
            Scroll untuk kategori lainnya →
          </span>
        </div>

        {/* Stories Horizontal Container */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {highlights.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex flex-col items-center flex-shrink-0 group tap-bounce"
            >
              {/* Outer Ring with emerald & white subtle glow */}
              <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-white/20 via-emerald-400/50 to-white/30 group-hover:from-emerald-400 group-hover:to-sky-400 transition-all duration-300">
                {/* Dark cushion */}
                <div className="p-0.5 bg-[#090A0F] rounded-full">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-[#12131A] border border-white/10">
                    <Image
                      src={item.imageUrl}
                      alt={item.label}
                      fill
                      sizes="64px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* 'New' or Hot Badge */}
                {item.isNew && (
                  <span className="absolute -top-0.5 -right-0.5 px-1.5 py-0.2 rounded-full bg-emerald-500 text-black text-[8px] font-mono font-bold tracking-tight shadow-md">
                    NEW
                  </span>
                )}
              </div>

              {/* Title & Micro Tag */}
              <span className="mt-2 text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors max-w-[76px] truncate text-center">
                {item.label}
              </span>
              <span className="text-[10px] text-zinc-500 font-medium max-w-[76px] truncate text-center">
                {item.tag}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
