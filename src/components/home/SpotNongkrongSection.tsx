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
    <section className="py-16 bg-vanilla border-t-3 border-espresso overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt text-vanilla text-xs font-black shadow-brutal-sm -rotate-1 mb-2 border-2 border-espresso">
              <MapPin className="w-4 h-4 text-coral" />
              <span>SPOT NONGKRONG MATCH • JAKARTA & SEKITARNYA 📍</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-espresso">
              Outfit Sesuai Vibe Tempat Nongkrong Favorit
            </h2>
            <p className="text-sm text-espresso-100 mt-1 max-w-xl">
              Mau ke Blok M, Senopati, Panglima Polim, atau PIK? Setiap tempat punya dresscode estetika tak tertulis. Ini rumus outfit biar nyatu sempurna sama tempatnya:
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-espresso text-xs font-black text-espresso shadow-brutal-sm self-start md:self-auto">
            <Camera className="w-4 h-4 text-coral" />
            <span>Foto OOTD Auto Masuk Feed ✨</span>
          </div>
        </div>

        {/* Spot Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
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
                className={`p-4 rounded-2xl border-2 text-left transition-all tap-bounce flex flex-col justify-between ${
                  isActive
                    ? "bg-cobalt text-vanilla border-espresso shadow-brutal scale-105"
                    : "bg-white text-espresso border-espresso/20 hover:border-espresso hover:shadow-brutal-sm"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{s.emoji}</span>
                  {isActive && <span className="w-2.5 h-2.5 rounded-full bg-coral animate-pulse" />}
                </div>
                <div className="mt-2">
                  <h4 className="font-black text-sm">{s.name}</h4>
                  <span className={`text-[10px] font-semibold block truncate mt-0.5 ${isActive ? "text-coral" : "text-espresso/60"}`}>
                    {s.area}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Spot Content Details Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-4 border-espresso shadow-brutal-lg space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b-2 border-espresso/15">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-cobalt">
                DRESSCODE SPESIFIK • {spot.name}
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-espresso">
                {spot.curatedLook.title}
              </h3>
              <p className="text-xs text-espresso-100 mt-1 max-w-xl">
                📍 <strong>Spot Foto:</strong> {spot.photoSpot}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-vanilla border-2 border-espresso text-xs font-bold text-espresso text-right">
              Total 1 Set: <span className="text-cobalt font-black">{formatRupiah(setTotal)}</span>
              <span className="block text-[10px] text-espresso/60 font-medium mt-0.5">
                (Checkout satuan via link di bawah)
              </span>
            </div>
          </div>

          {/* 4 Items Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {spot.curatedLook.items.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border-2 border-espresso bg-vanilla/40 overflow-hidden flex flex-col justify-between hover:shadow-brutal-sm transition-all"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-softgray border-b-2 border-espresso">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-coral text-espresso text-[9px] font-black border border-espresso">
                    {item.tag}
                  </span>
                </div>

                <div className="p-3 space-y-1.5 flex flex-col justify-between flex-1">
                  <div>
                    <h5 className="text-xs font-bold text-espresso line-clamp-2 leading-tight">
                      {item.name}
                    </h5>
                    <p className="text-xs font-black text-cobalt mt-1">
                      {formatRupiah(item.price)}
                    </p>
                  </div>

                  <a
                    href={item.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => triggerConfetti(e.clientX, e.clientY)}
                    className="w-full py-1.5 rounded-xl bg-espresso hover:bg-coral text-vanilla hover:text-espresso font-bold text-[10px] text-center border border-espresso transition-all flex items-center justify-center gap-1 mt-2"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>Beli Item Ini ↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpotNongkrongSection;
