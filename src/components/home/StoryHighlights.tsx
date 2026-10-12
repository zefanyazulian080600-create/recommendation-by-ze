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
    <section className="py-4 border-b-2 border-espresso/15 bg-vanilla overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-butter-500 animate-ping" />
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-espresso">
              Stories & Highlight Racun Ol Shop
            </h3>
          </div>
          <span className="text-[11px] text-espresso-100 font-semibold hidden sm:inline">
            Geser untuk kategori lainnya 👉
          </span>
        </div>

        {/* Stories Horizontal Container */}
        <div className="flex items-center gap-3.5 sm:gap-5 overflow-x-auto no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {highlights.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex flex-col items-center flex-shrink-0 group tap-bounce"
            >
              {/* Outer Ring with Matcha-Butter-Espresso Story Gradient */}
              <div className="relative p-[3px] rounded-full story-ring-gradient shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                {/* White border cushion */}
                <div className="p-0.5 bg-vanilla rounded-full">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-softgray border border-espresso/20">
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
                  <span className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-butter-400 text-espresso text-[9px] font-extrabold shadow-sm border border-espresso">
                    NEW
                  </span>
                )}
              </div>

              {/* Title & Micro Tag */}
              <span className="mt-1.5 text-xs font-bold text-espresso group-hover:text-matcha-600 transition-colors max-w-[74px] truncate text-center">
                {item.label}
              </span>
              <span className="text-[9px] text-espresso-100 font-medium max-w-[74px] truncate text-center -mt-0.5">
                {item.tag}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
