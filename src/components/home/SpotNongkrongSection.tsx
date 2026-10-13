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
    dresscode: "Kalcer Drip • Workwear Boxy, Loose Denim, Retro Kicks & Tumbler Tahan Es",
    photoSpot: "Lorong mural M Bloc, record store, & bakery vintage Melawai.",
    coverImage: "https://down-id.img.susercontent.com/file/id-11134207-7rbka-ma9l7kc12dhp3e",
    curatedLook: {
      title: "Kalcer Blok M Vinyl Hunter Set",
      items: [
        {
          name: "Lawna Workshirt Boxy Double Zipper Clark White - Black",
          price: 147000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-7rbka-ma9l7kc12dhp3e",
          tag: "Workshirt",
          affiliateUrl: "https://s.shopee.co.id/4fwwvQJCAD",
        },
        {
          name: "BOARSHORT PARASUT Skena Kalcer Reflektif ring d",
          price: 37000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0s-mbdk79nwm90e1d",
          tag: "Bawahan",
          affiliateUrl: "https://s.shopee.co.id/4B0gKVL6BA",
        },
        {
          name: "VALANGKIN RAYNER BLW Sneakers Old Ace Blue Retro",
          price: 189000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-8224p-mjgix6g7124kd5",
          tag: "Footwear",
          affiliateUrl: "https://s.shopee.co.id/3g4PjaN0CB",
        },
        {
          name: "Kaos The Stone Roses Motif Band Unisex Casual",
          price: 35000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-81zte-mrmobyywim0x8d",
          tag: "Band Tee",
          affiliateUrl: "https://s.shopee.co.id/gQoA4YQHJ",
        },
      ],
    },
  },
  {
    id: "senopati",
    name: "Senopati & SCBD",
    area: "Jakarta Selatan",
    emoji: "🍸",
    dresscode: "Quiet Luxury • Soft Linen Shirt, Trousers Cream, Gen Z Sneakers & Luxury EDP",
    photoSpot: "Cafe modern minimalis, bar patio, & outdoor courtyard SCBD.",
    coverImage: "https://down-id.img.susercontent.com/file/id-11134207-7rasl-m2kijfh0d96s1b",
    curatedLook: {
      title: "Senopati Clean Old Money Set",
      items: [
        {
          name: "Kiko Ina Kemeja Linen Natural Revere Embroidery",
          price: 99800,
          image: "https://down-id.img.susercontent.com/file/id-11134207-7rasl-m2kijfh0d96s1b",
          tag: "Atasan",
          affiliateUrl: "https://s.shopee.co.id/BUXZ9aKJJ",
        },
        {
          name: "OSANAWEAR Celana Pria Formal Loose Pants Cream",
          price: 119900,
          image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk8-madd5p7p5lmg7e",
          tag: "Bawahan",
          affiliateUrl: "https://s.shopee.co.id/8AWp5r5s4a",
        },
        {
          name: "PANARYBODY Sepatu Pria Gen Z Casual Sneakers QNK8012",
          price: 265000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-8224t-micqxpl11lhie6",
          tag: "Footwear",
          affiliateUrl: "https://s.shopee.co.id/LnxlSZgyM",
        },
        {
          name: "Scarlite Luxury Extrait De Parfum Unisex 30ml",
          price: 13000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-822wi-mnfy30pupsshee",
          tag: "Parfum",
          affiliateUrl: "https://s.shopee.co.id/9fLcsc0A1n",
        },
      ],
    },
  },
  {
    id: "panglima-polim",
    name: "Panglima Polim & Santa",
    area: "Jakarta Selatan",
    emoji: "☕",
    dresscode: "Indie Skena • Boxy Art Avatar Tee, Snow Black Jeans, Cardigan Montana & Tumbler",
    photoSpot: "Kedai kopi indie tangga ruko, pasar santa vinyl, & retro cafe.",
    coverImage: "https://down-id.img.susercontent.com/file/id-11134207-7ra0g-mbq3hcshu2qs59",
    curatedLook: {
      title: "Skena Kopi & Records Set",
      items: [
        {
          name: "YAZR Kaos Boxy Oversized Hihhoppunks BLURRED PORTRAIT",
          price: 59000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0g-mbq3hcshu2qs59",
          tag: "Atasan",
          affiliateUrl: "https://s.shopee.co.id/9zyTHDytLl",
        },
        {
          name: "Mister Bento Celana Jeans Snow Black Loose Straight",
          price: 59900,
          image: "https://down-id.img.susercontent.com/file/id-11134207-81ztj-mr66mwlzbabr2f",
          tag: "Bawahan",
          affiliateUrl: "https://s.shopee.co.id/4qGN7jIYpE",
        },
        {
          name: "Timebomb Cardigan Knitwear Montana Oversize",
          price: 199000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-7r98z-lwfpkctylhfx1c",
          tag: "Knitwear",
          affiliateUrl: "https://s.shopee.co.id/20wBkWTLaS",
        },
        {
          name: "MODOFO Tumbler Stainless Steel 710ml Tahan Dingin 24 Jam",
          price: 49000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-822wo-mo56kw6syiva82",
          tag: "Tumbler",
          affiliateUrl: "https://s.shopee.co.id/4fwwvQJCBE",
        },
      ],
    },
  },
  {
    id: "pik",
    name: "Pantai Indah Kapuk (PIK)",
    area: "Jakarta Utara",
    emoji: "🏖️",
    dresscode: "Breezy Seaside Street • One Set 3 in 1 Korean Style, Baggy Denim Putih & Sandal EVA",
    photoSpot: "Pantai pasir putih, pagoda, & seaside promenade.",
    coverImage: "https://down-id.img.susercontent.com/file/id-11134201-7rbk7-maf4u4kgd67o83",
    curatedLook: {
      title: "PIK Seaside Stroll Set",
      items: [
        {
          name: "One Set 3 in 1 Korean Style Blouse Rajut + Jilbab SO63",
          price: 188200,
          image: "https://down-id.img.susercontent.com/file/id-11134201-7rbk7-maf4u4kgd67o83",
          tag: "Setelan",
          affiliateUrl: "https://s.shopee.co.id/3B898fOuEB",
        },
        {
          name: "CELANA JEANS BAGGY PUTIH UNISEX RETRO",
          price: 60000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-822wi-mnlgkoalmcxv74",
          tag: "Bawahan",
          affiliateUrl: "https://s.shopee.co.id/8pmVt53Kie",
        },
        {
          name: "Sandal EVA Tebal Anti-Selip 5CM Cloud Sandal",
          price: 48000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-8224y-mgyj3nhrp79l8d",
          tag: "Footwear",
          affiliateUrl: "https://s.shopee.co.id/9V2CgJ0nMi",
        },
        {
          name: "MODOFO Tumbler Stainless Pastel Aesthetic 710ml",
          price: 49000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-822wo-mo56kw6syiva82",
          tag: "Tumbler",
          affiliateUrl: "https://s.shopee.co.id/4fwwvQJCBE",
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
