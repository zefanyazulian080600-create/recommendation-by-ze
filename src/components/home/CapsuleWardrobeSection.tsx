"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ShoppingBag, ArrowRight, Check, Calendar, Layers } from "lucide-react";
import { formatRupiah } from "@/lib/utils";
import { triggerConfetti } from "@/lib/confetti";

interface DayCombination {
  day: string;
  theme: string;
  vibeTag: string;
  pieces: {
    slot: string;
    name: string;
    image: string;
    affiliateUrl: string;
  }[];
}

const CAPSULE_DAYS: DayCombination[] = [
  {
    day: "Senin",
    theme: "Monday Spirit • Smart Casual",
    vibeTag: "Start the Week Right ✨",
    pieces: [
      {
        slot: "Atasan",
        name: "Oversized Soft Linen Shirt - Ivory Off-White",
        image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        slot: "Bawahan",
        name: "Baggy Straight Pants Charcoal Grey",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        slot: "Sepatu",
        name: "Classic Chunky Lug Penny Loafers",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
    ],
  },
  {
    day: "Selasa",
    theme: "Chill Tuesday • Coffee Run",
    vibeTag: "Comfort First ☕",
    pieces: [
      {
        slot: "Atasan",
        name: "Heavyweight Boxy Fit Tee 235gsm - Washed Charcoal",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        slot: "Bawahan",
        name: "Relaxed Parachute Cargo Pants with Toggle",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shop.tiktok.com",
      },
      {
        slot: "Sepatu",
        name: "Retro Suede Gumsole Skate Sneakers",
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
    ],
  },
  {
    day: "Rabu",
    theme: "Hump Day • Layering Workwear",
    vibeTag: "Midweek Energy 🛹",
    pieces: [
      {
        slot: "Outer",
        name: "Vintage Relaxed Corduroy Overshirt Jacket - Olive",
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://tokopedia.com",
      },
      {
        slot: "Bawahan",
        name: "Baggy Straight Pants Charcoal Grey",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        slot: "Tas",
        name: "Heavy Canvas 16oz Multi-Pocket Laptop Tote Bag",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
    ],
  },
  {
    day: "Kamis",
    theme: "Thursday Cozy • Campus & WFC",
    vibeTag: "Effortless Clean 💻",
    pieces: [
      {
        slot: "Atasan",
        name: "Drop-Shoulder Boxy Heavyweight Fleece Hoodie",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shop.tiktok.com",
      },
      {
        slot: "Bawahan",
        name: "Relaxed Parachute Cargo Pants with Toggle",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shop.tiktok.com",
      },
      {
        slot: "Sepatu",
        name: "Retro Suede Gumsole Skate Sneakers",
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
    ],
  },
  {
    day: "Jumat",
    theme: "TGIF Night • Cafe to Hangout",
    vibeTag: "Weekend Mode On 🔥",
    pieces: [
      {
        slot: "Outer",
        name: "Vintage Relaxed Corduroy Overshirt Jacket",
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://tokopedia.com",
      },
      {
        slot: "Bawahan",
        name: "Baggy Straight Pants Charcoal Grey",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        slot: "Sepatu",
        name: "Classic Chunky Lug Penny Loafers",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
    ],
  },
  {
    day: "Sabtu",
    theme: "Saturday Date • Starboy & Skena Drip",
    vibeTag: "Date Night Ready 💘",
    pieces: [
      {
        slot: "Atasan",
        name: "Heavyweight Boxy Fit Tee 235gsm Washed",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        slot: "Bawahan",
        name: "Baggy Straight Pants Charcoal Grey",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        slot: "Sepatu",
        name: "Classic Chunky Lug Penny Loafers - Black",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
    ],
  },
  {
    day: "Minggu",
    theme: "Sunday Chill • Thrift & Market Run",
    vibeTag: "Sunday Stroll 🌤️",
    pieces: [
      {
        slot: "Atasan",
        name: "Oversized Soft Linen Shirt - Ivory",
        image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        slot: "Bawahan",
        name: "Relaxed Parachute Cargo Pants with Toggle",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shop.tiktok.com",
      },
      {
        slot: "Tas",
        name: "Heavy Canvas 16oz Multi-Pocket Laptop Tote Bag",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
    ],
  },
];

export function CapsuleWardrobeSection() {
  const [activeDayIndex, setActiveDayIndex] = useState<number>(0);
  const currentCombination = CAPSULE_DAYS[activeDayIndex] || CAPSULE_DAYS[0];

  return (
    <section className="py-16 bg-vanilla border-t-3 border-espresso overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt text-vanilla text-xs font-black shadow-brutal-sm -rotate-1 mb-2 border-2 border-espresso">
              <Layers className="w-4 h-4 text-coral" />
              <span>CAPSULE WARDROBE SIMULATOR 🧥✨</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-espresso">
              Beli 7 Barang, Bebas Bergaya Senin Sampai Minggu
            </h2>
            <p className="text-sm text-espresso-100 mt-1 max-w-xl">
              Nggak perlu boros beli baju baru tiap minggu. Lihat bagaimana 7 barang esensial kurasi Ze bisa di-mix and match jadi 7 gaya berbeda untuk tiap hari:
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-espresso text-xs font-black text-espresso shadow-brutal-sm self-start md:self-auto">
            <Calendar className="w-4 h-4 text-coral" />
            <span>7 Hari 7 Look Berbeda 🗓️</span>
          </div>
        </div>

        {/* Day Pills Bar */}
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-2 mb-8">
          {CAPSULE_DAYS.map((item, idx) => {
            const isActive = activeDayIndex === idx;
            return (
              <button
                key={item.day}
                type="button"
                onClick={(e) => {
                  setActiveDayIndex(idx);
                  triggerConfetti(e.clientX, e.clientY);
                }}
                className={`py-2.5 px-5 rounded-2xl border-2 text-xs font-black uppercase tracking-wider transition-all tap-bounce flex-shrink-0 ${
                  isActive
                    ? "bg-coral text-espresso border-espresso shadow-brutal scale-105"
                    : "bg-white text-espresso border-espresso/20 hover:border-espresso hover:shadow-brutal-sm"
                }`}
              >
                {item.day}
              </button>
            );
          })}
        </div>

        {/* Selected Day Showcase Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-4 border-espresso shadow-brutal-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b-2 border-espresso/15">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-cobalt">
                FORMULA HARI {currentCombination.day.toUpperCase()}
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-espresso">
                {currentCombination.theme}
              </h3>
            </div>
            <span className="px-3.5 py-1 rounded-full bg-vanilla text-espresso text-xs font-black border-2 border-espresso shadow-sm">
              {currentCombination.vibeTag}
            </span>
          </div>

          {/* Pieces Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {currentCombination.pieces.map((piece, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border-2 border-espresso bg-vanilla/40 overflow-hidden flex flex-col justify-between hover:shadow-brutal-sm transition-all"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-softgray border-b-2 border-espresso">
                  <Image
                    src={piece.image}
                    alt={piece.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-cobalt text-vanilla text-[9px] font-black border border-espresso">
                    {piece.slot}
                  </span>
                </div>

                <div className="p-3 space-y-2 flex flex-col justify-between flex-1">
                  <h5 className="text-xs font-bold text-espresso line-clamp-2 leading-tight">
                    {piece.name}
                  </h5>

                  <a
                    href={piece.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => triggerConfetti(e.clientX, e.clientY)}
                    className="w-full py-1.5 rounded-xl bg-espresso hover:bg-coral text-vanilla hover:text-espresso font-bold text-[10px] text-center border border-espresso transition-all flex items-center justify-center gap-1"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>Cek Produk</span>
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

export default CapsuleWardrobeSection;
