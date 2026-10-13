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
      id: "piyama",
      label: "Piyama Adem",
      tag: "😴 Sleepwear",
      href: "/products?category=piyama-sleepwear",
      imageUrl: "https://down-id.img.susercontent.com/file/91f5d9bd6f645c992910082c5739553c",
      isNew: true,
    },
    {
      id: "gamis",
      label: "Gamis & Abaya",
      tag: "🌙 Muslimah",
      href: "/products?category=gamis-muslimah",
      imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-81ztm-ms2dzsj9dkw62c",
      isNew: true,
    },
    {
      id: "skincare",
      label: "Skincare Glowing",
      tag: "✨ Perawatan",
      href: "/products?category=skincare-beauty",
      imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-81ztg-mq8fw3fafbws46",
      isNew: true,
    },
    {
      id: "parfum",
      label: "Parfum Mewah",
      tag: "🌸 Extrait",
      href: "/products?category=parfum-fragrance",
      imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-822wi-mnfy30pupsshee",
    },
    {
      id: "gorpcore",
      label: "Gorpcore Kalcer",
      tag: "🏔️ Jaket Gunung",
      href: "/products?category=outfit-pria",
      imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7rbke-ma7vs1c79of1c0",
      isNew: true,
    },
    {
      id: "wanita",
      label: "Korean Chic",
      tag: "👗 Blouse & Rajut",
      href: "/products?category=outfit-wanita",
      imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-81ztg-mffgl05qebk9b1",
      isNew: true,
    },
    {
      id: "sneakers",
      label: "Sepatu & Sandal",
      tag: "👟 Kicks Empuk",
      href: "/products?category=bags-shoes",
      imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-8224x-mieiiunmfklge8",
      isNew: true,
    },
    {
      id: "tumbler",
      label: "Tumbler 24 Jam",
      tag: "❄️ Stainless",
      href: "/products?category=aesthetic-room",
      imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-822wo-mo56kw6syiva82",
    },
    {
      id: "cheap",
      label: "Di Bawah 50k",
      tag: "💸 Hemat Banget",
      href: "/products?price=under-50k",
      imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-81zte-mrmobyywim0x8d",
      isNew: true,
    },
  ];

  return (
    <section className="py-6 sm:py-8 bg-[#090A0F] border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-2 pt-1 w-full">
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
                  <div className="w-full h-full rounded-full p-[2px] bg-[#090A0F]">
                    {/* Image Container */}
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-900">
                      <Image
                        src={item.imageUrl}
                        alt={item.label}
                        fill
                        sizes="76px"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Badge if NEW */}
                {item.isNew && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-1.5 py-0.2 rounded-full bg-emerald-500 text-black text-[9px] font-mono font-black uppercase tracking-wider shadow">
                    NEW
                  </span>
                )}
              </div>

              {/* Label & Micro Tag */}
              <div className="text-center max-w-[80px]">
                <p className="font-sans text-xs font-bold text-white group-hover:text-emerald-400 transition-colors truncate">
                  {item.label}
                </p>
                <p className="text-[10px] text-zinc-400 font-mono tracking-tight truncate">
                  {item.tag}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
