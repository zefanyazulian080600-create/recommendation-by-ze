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
      id: "viral",
      label: "Viral TikTok",
      tag: "🔥 FYP",
      href: "/products?sort=trending",
      imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop",
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
      id: "korean",
      label: "Korean Vibe",
      tag: "🌸 Minimalist",
      href: "/products?category=korean-style",
      imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "skincare",
      label: "Skincare Viral",
      tag: "💧 Holy Grail",
      href: "/products?category=beauty-skincare",
      imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=400&auto=format&fit=crop",
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
      label: "Holy Grail Ze",
      tag: "⭐ Rekomendasi",
      href: "#zes-picks",
      imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=400&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-4 border-b border-softgray bg-ivory-50/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose animate-ping" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal">
              Stories & Highlight Racun Ol Shop
            </h3>
          </div>
          <span className="text-[11px] text-charcoal-50 font-medium hidden sm:inline">
            Geser untuk kategori lainnya 👉
          </span>
        </div>

        {/* Stories Horizontal Container */}
        <div className="flex items-center gap-3 sm:gap-5 overflow-x-auto no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {highlights.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex flex-col items-center flex-shrink-0 group tap-bounce"
            >
              {/* Outer Ring with Story Gradient */}
              <div className="relative p-[2.5px] rounded-full story-ring-gradient shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                {/* White border cushion */}
                <div className="p-0.5 bg-white rounded-full">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-softgray">
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
                  <span className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-rose text-[9px] font-bold text-white shadow-sm ring-1 ring-white">
                    NEW
                  </span>
                )}
              </div>

              {/* Title & Micro Tag */}
              <span className="mt-1.5 text-xs font-semibold text-charcoal group-hover:text-rose transition-colors max-w-[72px] truncate text-center">
                {item.label}
              </span>
              <span className="text-[9px] text-charcoal-50 font-medium max-w-[72px] truncate text-center -mt-0.5">
                {item.tag}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
