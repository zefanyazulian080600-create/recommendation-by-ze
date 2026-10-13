"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, ShoppingBag, ArrowRight, Camera } from "lucide-react";
import { formatRupiah } from "@/lib/utils";
import { triggerConfetti } from "@/lib/confetti";

interface HangoutSpot {
  id: string;
  name: string;
  area: string;
  emoji: string;
  dresscode: string;
  photoSpot: string;
  coverImage: string;
  curatedLook: {
    title: string;
    items: {
      name: string;
      price: number;
      image: string;
      tag: string;
      affiliateUrl: string;
    }[];
  };
}

const HANGOUT_SPOTS: HangoutSpot[] = [
  {
    id: "blok-m",
    name: "Blok M & M Bloc",
    area: "Jakarta Selatan",
    emoji: "🛹",
    dresscode: "Kalcer Drip • Workwear Jacket, Parachute Cargo, Chunky Derby/Loafers & Dad Cap",
    photoSpot: "Lorong mural M Bloc, record store, & bakery vintage Melawai.",
    coverImage: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop",
    curatedLook: {
      title: "Kalcer Blok M Vinyl Hunter Set",
      items: [
        {
          name: "Vintage Relaxed Corduroy Overshirt Jacket - Olive",
          price: 175000,
          image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop",
          tag: "Workwear",
          affiliateUrl: "https://tokopedia.com",
        },
        {
          name: "Relaxed Parachute Cargo Pants with Toggle - Sand Khaki",
          price: 145000,
          image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop",
          tag: "Bawahan",
          affiliateUrl: "https://shop.tiktok.com",
        },
        {
          name: "Classic 3-Eyelet Matte Leather Derby Shoes - Noir",
          price: 219000,
          image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
          tag: "Footwear",
          affiliateUrl: "https://tokopedia.com",
        },
        {
          name: "Vintage Washed Cotton Baseball Dad Cap - Forest Olive",
          price: 58000,
          image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop",
          tag: "Aksesori",
          affiliateUrl: "https://lazada.co.id",
        },
      ],
    },
  },
  {
    id: "senopati",
    name: "Senopati & SCBD",
    area: "Jakarta Selatan",
    emoji: "🍸",
    dresscode: "Quiet Luxury • Soft Linen Shirt, Trousers, Penny Loafers & Santal Perfume",
    photoSpot: "Cafe modern minimalis, bar patio, & outdoor courtyard SCBD.",
    coverImage: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=600&auto=format&fit=crop",
    curatedLook: {
      title: "Senopati Clean Old Money Set",
      items: [
        {
          name: "Oversized Soft Linen Shirt - Ivory Off-White",
          price: 135000,
          image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=600&auto=format&fit=crop",
          tag: "Atasan",
          affiliateUrl: "https://shopee.co.id",
        },
        {
          name: "Baggy Straight Pants Charcoal Grey",
          price: 145000,
          image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
          tag: "Bawahan",
          affiliateUrl: "https://shopee.co.id",
        },
        {
          name: "Classic Chunky Lug Penny Loafers - Black",
          price: 198000,
          image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
          tag: "Footwear",
          affiliateUrl: "https://shopee.co.id",
        },
        {
          name: "Woody Santal & Smoked Bergamot Unisex EDP",
          price: 135000,
          image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop",
          tag: "Parfum",
          affiliateUrl: "https://shopee.co.id",
        },
      ],
    },
  },
  {
    id: "panglima-polim",
    name: "Panglima Polim & Santa",
    area: "Jakarta Selatan",
    emoji: "☕",
    dresscode: "Indie Skena • Boxy Band Tee, Tote Bag Kanvas, Retro Gumsole & Kopi Susu",
    photoSpot: "Kedai kopi indie tangga ruko, pasar santa vinyl, & retro cafe.",
    coverImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop",
    curatedLook: {
      title: "Skena Kopi & Records Set",
      items: [
        {
          name: "Heavyweight Boxy Fit Tee 235gsm - Washed Charcoal",
          price: 119000,
          image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
          tag: "Atasan",
          affiliateUrl: "https://shopee.co.id",
        },
        {
          name: "Baggy Straight Fit Trousers - Deep Charcoal",
          price: 145000,
          image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
          tag: "Bawahan",
          affiliateUrl: "https://shopee.co.id",
        },
        {
          name: "Retro Suede Gumsole Skate Sneakers - Off-White",
          price: 239000,
          image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
          tag: "Kicks",
          affiliateUrl: "https://shopee.co.id",
        },
        {
          name: "Heavy Canvas 16oz Multi-Pocket Laptop Tote Bag",
          price: 125000,
          image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop",
          tag: "Tas Skena",
          affiliateUrl: "https://shopee.co.id",
        },
      ],
    },
  },
  {
    id: "pik",
    name: "Pantai Indah Kapuk (PIK)",
    area: "Jakarta Utara",
    emoji: "🏖️",
    dresscode: "Breezy Seaside Street • Breathable Crop/Shirt, Highwaist & Sunscreen",
    photoSpot: "Pantai pasir putih, pagoda, & seaside promenade.",
    coverImage: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop",
    curatedLook: {
      title: "PIK Seaside Stroll Set",
      items: [
        {
          name: "Korean Cable Knit Crop Cardigan - Muted Rose",
          price: 119000,
          image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=600&auto=format&fit=crop",
          tag: "Outer",
          affiliateUrl: "https://shop.tiktok.com",
        },
        {
          name: "Wide-Leg Highwaist Trousers Ivory",
          price: 135000,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop",
          tag: "Bawahan",
          affiliateUrl: "https://shopee.co.id",
        },
        {
          name: "Retro Suede Gumsole Skate Sneakers",
          price: 239000,
          image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
          tag: "Footwear",
          affiliateUrl: "https://shopee.co.id",
        },
        {
          name: "Hydrating Dewy Water Sunscreen SPF 50+",
          price: 89000,
          image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600&auto=format&fit=crop",
          tag: "Skincare",
          affiliateUrl: "https://tokopedia.com",
        },
      ],
    },
  },
];

export function SpotNongkrongSection() {
  const [activeSpotId, setActiveSpotId] = useState<string>("blok-m");
  const spot = HANGOUT_SPOTS.find((s) => s.id === activeSpotId) || HANGOUT_SPOTS[0];
  const setTotal = spot.curatedLook.items.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="space-y-8 text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>SPOT NONGKRONG & WFC • JAKARTA & SEKITARNYA 📍</span>
          </div>
          <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Outfit & Gear Sesuai Vibe Tempat Nongkrong
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl leading-relaxed">
            Mau ke Blok M, Senopati, Panglima Polim, atau PIK? Ini rekomendasi perpaduan look & aksesoris yang pas:
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-xs font-mono font-bold text-emerald-400 self-start md:self-auto">
          <Camera className="w-3.5 h-3.5 text-emerald-400" />
          <span>Foto OOTD Auto Masuk Feed ✨</span>
        </div>
      </div>

      {/* Spot Buttons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
        {HANGOUT_SPOTS.map((s) => {
          const isActive = activeSpotId === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={(e) => {
                setActiveSpotId(s.id);
                triggerConfetti(e.clientX, e.clientY);
              }}
              className={`p-3.5 rounded-xl border text-left transition-all tap-bounce flex flex-col justify-between ${
                isActive
                  ? "bg-white text-black border-white shadow-xl font-bold"
                  : "bg-[#090A0F] text-zinc-300 border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{s.emoji}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-emerald-500" />}
              </div>
              <div className="mt-2">
                <h4 className="font-bold text-sm truncate">{s.name}</h4>
                <span className={`text-[10px] font-mono block truncate mt-0.5 ${isActive ? "text-zinc-600 font-semibold" : "text-zinc-500"}`}>
                  {s.area}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Spot Content Details Box */}
      <div className="p-5 sm:p-7 rounded-2xl bg-[#090A0F] border border-white/10 shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">
              VIBE LOOK: {spot.name}
            </span>
            <h4 className="font-sans text-lg sm:text-xl font-bold text-white mt-0.5">
              {spot.curatedLook.title}
            </h4>
            <p className="text-xs text-zinc-400 mt-1 max-w-xl">
              📍 <strong>Spot Foto:</strong> {spot.photoSpot}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#12131A] border border-white/10 text-xs text-right">
            <span className="text-zinc-400">Total 1 Set: </span>
            <span className="text-emerald-400 font-mono font-extrabold">{formatRupiah(setTotal)}</span>
            <span className="block text-[10px] text-zinc-500 font-mono mt-0.5">
              (Checkout via tombol spill di bawah)
            </span>
          </div>
        </div>

        {/* 4 Items Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {spot.curatedLook.items.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl border border-white/10 bg-[#12131A] overflow-hidden flex flex-col justify-between hover:border-white/30 transition-all shadow-lg"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-zinc-950 border-b border-white/10">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-white text-[9px] font-mono font-bold border border-white/20">
                  {item.tag}
                </span>
              </div>

              <div className="p-3 space-y-2 flex flex-col justify-between flex-1">
                <div>
                  <h5 className="text-xs font-bold text-white line-clamp-2 leading-tight">
                    {item.name}
                  </h5>
                  <p className="text-xs font-mono font-extrabold text-emerald-400 mt-1">
                    {formatRupiah(item.price)}
                  </p>
                </div>

                <a
                  href={item.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => triggerConfetti(e.clientX, e.clientY)}
                  className="w-full py-2 rounded-lg bg-white text-black hover:bg-zinc-200 font-bold text-[10px] text-center transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 mt-2"
                >
                  <ShoppingBag className="w-3 h-3 text-black" />
                  <span>Beli Item Ini ↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpotNongkrongSection;
