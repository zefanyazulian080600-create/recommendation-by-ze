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
      tag: "⚡ Racun FYP",
      href: "/products?sort=trending",
      imageUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=400&auto=format&fit=crop",
      isNew: true,
    },
    {
      id: "desk",
      label: "Tech & Setup",
      tag: "🎧 Gadget WFH",
      href: "/products?category=desk-setup-gadget",
      imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=400&auto=format&fit=crop",
      isNew: true,
    },
    {
      id: "room",
      label: "Kamar & Kost",
      tag: "🏠 Estetik",
      href: "/products?category=aesthetic-room",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop",
      isNew: true,
    },
    {
      id: "skincare",
      label: "Skin & Care",
      tag: "🧴 Holy Grail",
      href: "/products?category=skincare-grooming",
      imageUrl: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=400&auto=format&fit=crop",
      isNew: true,
    },
    {
      id: "outfit",
      label: "Daily Wear",
      tag: "👕 Fashion Fit",
      href: "/products?category=outfit-pria",
      imageUrl: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "cheap",
      label: "Under 50k",
      tag: "💸 Hemat Banget",
      href: "/products?price=under-50k",
      imageUrl: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=400&auto=format&fit=crop",
      isNew: true,
    },
    {
      id: "shopee",
      label: "Spill Shopee",
      tag: "🧡 Free Ongkir",
      href: "/products?marketplace=shopee",
      imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "tokopedia",
      label: "Tokopedia",
      tag: "💚 Official",
      href: "/products?marketplace=tokopedia",
      imageUrl: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=400&auto=format&fit=crop",
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
      href: "/products?sort=featured",
      imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=400&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-6 sm:py-8 bg-[#090A0F] border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0">
          {highlights.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex-shrink-0 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
            >
              {/* Instagram/TikTok Circular Story Ring */}
              <div className="relative">
                {/* Gradient Ring */}
                <div className="w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] rounded-full p-[2.5px] bg-gradient-to-tr from-emerald-500 via-sky-400 to-amber-300 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  {/* Inner Dark Border */}
                  <div className="w-full h-full rounded-full bg-[#090A0F] p-[2px]">
                    {/* Story Circle Image */}
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-[#12131A]">
                      <Image
                        src={item.imageUrl}
                        alt={item.label}
                        fill
                        sizes="76px"
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Optional "NEW" or "HOT" micro badge */}
                {item.isNew && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-emerald-400 text-black font-mono text-[8px] font-black uppercase px-1.5 py-0.2 rounded-full tracking-wider border border-[#090A0F] shadow-sm">
                    SPILL
                  </span>
                )}
              </div>

              {/* Story Title & Tiny Tag */}
              <div className="text-center w-20 sm:w-24">
                <span className="block text-xs font-bold text-white group-hover:text-emerald-400 transition-colors truncate">
                  {item.label}
                </span>
                <span className="block text-[10px] text-zinc-400 truncate">
                  {item.tag}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
