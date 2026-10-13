"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Zap, Flame, Heart, ShoppingBag, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { formatRupiah } from "@/lib/utils";
import { triggerConfetti } from "@/lib/confetti";
import { useToast } from "@/context/ToastContext";

interface DripArchetype {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  auraScore: string;
  outerwear: { name: string; price: number; image: string; tag: string };
  bottom: { name: string; price: number; image: string; tag: string };
  footwear: { name: string; price: number; image: string; tag: string };
  scent: { name: string; price: number; image: string; tag: string };
  accessory: { name: string; price: number; image: string; tag: string };
  affiliateUrl: string;
}

const STARBOY_ARCHETYPES: DripArchetype[] = [
  {
    id: "starboy-night",
    name: "⚡ Gorpcore Skena Starboy",
    tagline: "Jaket gorpcore waterproof, cargo outdoor, sneakers retro & parfum extrait mewah.",
    badge: "STARBOY GRAIL 🕶️",
    auraScore: "100% Aura 🔥",
    outerwear: {
      name: "CREDIFOX Jaket Gunung Gorpcore Seri CLIMBER",
      price: 210600,
      image: "https://down-id.img.susercontent.com/file/id-11134207-7rbke-ma7vs1c79of1c0",
      tag: "Outerwear",
    },
    bottom: {
      name: "SUYX Celana Cargo Pants pria Loose Outdoor",
      price: 166000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-822wr-mlh4p3jvnqbl46",
      tag: "Bawahan",
    },
    footwear: {
      name: "VALANGKIN RAYNER BLW Sneakers Old Ace Blue",
      price: 189000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-8224p-mjgix6g7124kd5",
      tag: "Footwear",
    },
    scent: {
      name: "Scarlite Perfume Extrait De Parfum Luxury",
      price: 129000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-822wi-mnfy30pupsshee",
      tag: "Signature Scent",
    },
    accessory: {
      name: "MODOFO Aesthetic Vacuum Tumbler 1.2L Stainless",
      price: 79000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-822wo-mo56kw6syiva82",
      tag: "Gear 24 Jam",
    },
    affiliateUrl: "https://s.shopee.co.id/1BN4kzWWGQ",
  },
  {
    id: "stargirl-downtown",
    name: "✨ Stargirl Downtown Chic",
    tagline: "One set korean style, dress muslimah estetik, sneakers retro & aroma mewah.",
    badge: "IT-GIRL APPROVED 💅",
    auraScore: "100% Slay ✨",
    outerwear: {
      name: "One Set 3 in 1 Korean Style SO63 Setelan Wanita",
      price: 109000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-7rasf-m1whuokq2l3z19",
      tag: "One Set Korean",
    },
    bottom: {
      name: "Baju Gamis Dress Muslimah Shirin Zein Thalia",
      price: 115000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0o-mbn9ag5qp86ld2",
      tag: "Bawahan & Dress",
    },
    footwear: {
      name: "VALANGKIN RAYNER BLW Sneakers Old Ace Blue",
      price: 189000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-8224p-mjgix6g7124kd5",
      tag: "Footwear",
    },
    scent: {
      name: "Scarlite Perfume Extrait De Parfum Luxury",
      price: 129000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-822wi-mnfy30pupsshee",
      tag: "Signature Scent",
    },
    accessory: {
      name: "MODOFO Aesthetic Vacuum Tumbler 1.2L Stainless",
      price: 79000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-822wo-mo56kw6syiva82",
      tag: "Tumbler Pastel",
    },
    affiliateUrl: "https://s.shopee.co.id/7VH8Id8PQ0",
  },
  {
    id: "baggy-streetwear",
    name: "🛹 Baggy Cyber-Street",
    tagline: "Kaos band casual, baggy denim snow black, sneakers retro & boardshort reflektif.",
    badge: "FYP GRAIL 🧢",
    auraScore: "99% Street Cred 🛹",
    outerwear: {
      name: "Kaos The Stone Roses Motif Band Casual",
      price: 35000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-81zte-mrmobyywim0x8d",
      tag: "Kaos Band",
    },
    bottom: {
      name: "Celana Jeans Pria Panjang Snow Black Oversize",
      price: 59900,
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lvt8w29u386l31",
      tag: "Baggy Denim",
    },
    footwear: {
      name: "VALANGKIN RAYNER BLW Sneakers Old Ace Blue",
      price: 189000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-8224p-mjgix6g7124kd5",
      tag: "Footwear",
    },
    scent: {
      name: "Scarlite Perfume Extrait De Parfum Luxury",
      price: 129000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-822wi-mnfy30pupsshee",
      tag: "Signature Scent",
    },
    accessory: {
      name: "BOARSHORT Parasut Skena Reflektif Kalcer",
      price: 37000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lu8d50u87n1t41",
      tag: "Celana Skena",
    },
    affiliateUrl: "https://s.shopee.co.id/gQoA4YQHJ",
  },
  {
    id: "old-money",
    name: "☕ Clean Old Money & Knitwear",
    tagline: "Off-white cable knit sweater, baggy denim gombrong, wangi mewah aroma extrait.",
    badge: "QUIET LUXURY 🍸",
    auraScore: "98% Class 💼",
    outerwear: {
      name: "HIGHTY Off White Cable-Knit Sweater",
      price: 291600,
      image: "https://down-id.img.susercontent.com/file/id-11134207-7rasa-m3h7h3ad4k6p44",
      tag: "Cable Knit",
    },
    bottom: {
      name: "Suyboy Celana Jeans pria Baggy Denim Gombrong",
      price: 166000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-82251-mh4q8t5dskk157",
      tag: "Bawahan",
    },
    footwear: {
      name: "VALANGKIN RAYNER BLW Sneakers Old Ace Blue",
      price: 189000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-8224p-mjgix6g7124kd5",
      tag: "Footwear",
    },
    scent: {
      name: "Scarlite Perfume Extrait De Parfum Luxury",
      price: 129000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-822wi-mnfy30pupsshee",
      tag: "Signature Scent",
    },
    accessory: {
      name: "MODOFO Aesthetic Vacuum Tumbler 1.2L",
      price: 79000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-822wo-mo56kw6syiva82",
      tag: "Aksesori",
    },
    affiliateUrl: "https://s.shopee.co.id/LnxlSZgxL",
  },
  {
    id: "anak-skena",
    name: "🏉 Anak Skena Rugby & Crewneck",
    tagline: "OVRDZ rugby sweatshirt retro, baggy denim snow black, sneakers retro & tumbler 24 jam.",
    badge: "ANAK SKENA GRAIL ☕",
    auraScore: "100% Skena Aura 🎸",
    outerwear: {
      name: "OVRDZ Sweater Crewneck Rugby Sweatshirt Bordir",
      price: 103400,
      image: "https://down-id.img.susercontent.com/file/id-11134207-822wn-mpp9l1o8r30h6d",
      tag: "Rugby Sweatshirt",
    },
    bottom: {
      name: "Celana Jeans Pria Panjang Snow Black",
      price: 59900,
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lvt8w29u386l31",
      tag: "Bawahan",
    },
    footwear: {
      name: "VALANGKIN RAYNER BLW Sneakers Old Ace Blue",
      price: 189000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-8224p-mjgix6g7124kd5",
      tag: "Footwear",
    },
    scent: {
      name: "Scarlite Perfume Extrait De Parfum Luxury",
      price: 129000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-822wi-mnfy30pupsshee",
      tag: "Signature Scent",
    },
    accessory: {
      name: "MODOFO Aesthetic Vacuum Tumbler 1.2L Stainless",
      price: 79000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-822wo-mo56kw6syiva82",
      tag: "Tumbler 24 Jam",
    },
    affiliateUrl: "https://s.shopee.co.id/113eYgX9bP",
  },
  {
    id: "kalcer-blok-m",
    name: "🎨 Kalcer Workwear Boxy",
    tagline: "EDINAL workshirt zipper boxy, celana cargo outdoor, retro sneakers & kaos distro.",
    badge: "KALCER WORKWEAR 🛹",
    auraScore: "99% Culture Drip 🎨",
    outerwear: {
      name: "EDINAL Workshirt Zipper Black Boxy DO NOT BE",
      price: 77500,
      image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0m-mbac375f32c920",
      tag: "Workshirt Boxy",
    },
    bottom: {
      name: "SUYX Celana Cargo Pants pria Loose Outdoor",
      price: 166000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-822wr-mlh4p3jvnqbl46",
      tag: "Bawahan",
    },
    footwear: {
      name: "VALANGKIN RAYNER BLW Sneakers Old Ace Blue",
      price: 189000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-8224p-mjgix6g7124kd5",
      tag: "Footwear",
    },
    scent: {
      name: "Scarlite Perfume Extrait De Parfum Luxury",
      price: 129000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-822wi-mnfy30pupsshee",
      tag: "Signature Scent",
    },
    accessory: {
      name: "Kaos The Stone Roses Motif Band Casual",
      price: 35000,
      image: "https://down-id.img.susercontent.com/file/id-11134207-81zte-mrmobyywim0x8d",
      tag: "Kaos Dalam",
    },
    affiliateUrl: "https://s.shopee.co.id/1B7MqaxdF",
  },
];

export function StarboyDripMatcher() {
  const { showToast } = useToast();
  const [activeId, setActiveId] = useState<string>("starboy-night");

  const currentDrip =
    STARBOY_ARCHETYPES.find((d) => d.id === activeId) || STARBOY_ARCHETYPES[0];

  const totalPrice =
    currentDrip.outerwear.price +
    currentDrip.bottom.price +
    currentDrip.footwear.price +
    currentDrip.scent.price +
    currentDrip.accessory.price;

  const items = [
    currentDrip.outerwear,
    currentDrip.bottom,
    currentDrip.footwear,
    currentDrip.scent,
    currentDrip.accessory,
  ];

  const handleSaveDrip = (e: React.MouseEvent) => {
    triggerConfetti(e.clientX, e.clientY);
    showToast(`⚡ Paket ${currentDrip.name} disimpan ke Wishlist! Aura max!`, "wishlist");
  };

  return (
    <section className="py-16 bg-vanilla border-t-4 border-espresso overflow-hidden relative">
      {/* Background radial accent glow using sunset coral and cobalt denim */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-butter-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 w-80 h-80 bg-matcha-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-butter-500 border-2 border-espresso text-espresso text-xs font-extrabold shadow-brutal-sm -rotate-1 mb-2">
              <Zap className="w-3.5 h-3.5 fill-espresso" />
              <span>THE DRIP ARCHIVE ⚡ • SKENA, KALCER & STARBOY</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-espresso">
              Outfit, Kicks, Bag & Signature Scent Pairing
            </h2>
            <p className="text-sm text-espresso-100 mt-1 max-w-xl">
              Ala anak Skena kopi, Kalcer Blok M, dan Starboy night-out: outfit kece belum lengkap tanpa sneakers/loafers yang statement, tas yang cocok, dan parfum yang wangi mewah. Cek 1 set drip lengkap di bawah:
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-espresso text-xs font-extrabold text-espresso shadow-brutal-sm self-start md:self-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-butter-500 animate-ping" />
            <span>Vibe Status: {currentDrip.auraScore}</span>
          </div>
        </div>

        {/* Archetype Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5 mb-8">
          {STARBOY_ARCHETYPES.map((drip) => {
            const isActive = activeId === drip.id;
            return (
              <button
                key={drip.id}
                type="button"
                onClick={(e) => {
                  setActiveId(drip.id);
                  triggerConfetti(e.clientX, e.clientY);
                }}
                className={`p-4 rounded-2xl border-2 text-left transition-all tap-bounce flex flex-col justify-between ${
                  isActive
                    ? "bg-butter-500 border-espresso shadow-brutal scale-105"
                    : "bg-white border-espresso/20 hover:border-espresso hover:shadow-brutal-sm"
                }`}
              >
                <div>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-espresso text-vanilla uppercase tracking-wider">
                    {drip.badge}
                  </span>
                  <h3 className="font-editorial text-sm sm:text-base font-bold text-espresso mt-2">
                    {drip.name}
                  </h3>
                </div>
                <p className="text-[11px] text-espresso-100 line-clamp-2 mt-1">
                  {drip.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* 5-Piece Drip Grid (Outer, Bottom, Shoes, Scent, Accs) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-4 border-espresso shadow-brutal-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b-2 border-espresso/15">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-matcha-500">
                DRIP BREAKDOWN • 5 ESSENTIAL PIECES
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-espresso">
                {currentDrip.name} Set
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-matcha-100 border border-matcha-500 text-espresso text-xs font-bold">
                {currentDrip.auraScore}
              </span>
              <span className="px-3.5 py-1 rounded-full bg-butter-500 border border-espresso text-espresso text-xs font-extrabold shadow-sm">
                Total Set: {formatRupiah(totalPrice)}
              </span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border-2 border-espresso bg-vanilla/40 overflow-hidden flex flex-col justify-between hover:shadow-brutal-sm transition-all"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-softgray border-b-2 border-espresso">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-espresso text-vanilla text-[9px] font-extrabold border border-vanilla/30">
                    {item.tag}
                  </span>
                </div>
                <div className="p-3 space-y-1">
                  <p className="text-xs font-bold text-espresso line-clamp-2 leading-tight">
                    {item.name}
                  </p>
                  <p className="text-xs font-extrabold text-butter-600">
                    {formatRupiah(item.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-espresso/15">
            <p className="text-xs text-espresso-100 max-w-md">
              💡 <strong>Tips Ze:</strong> Beli paket ini di Shopee / Tokopedia / TikTok Shop untuk langsung dapatkan look starboy yang kohesif & berkelas.
            </p>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={currentDrip.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => triggerConfetti(e.clientX, e.clientY)}
                className="btn-3d flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-espresso text-vanilla text-xs sm:text-sm font-bold border-2 border-espresso hover:bg-butter-500 hover:text-espresso transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Beli Drip Ini di Marketplace 🛍️</span>
              </a>

              <button
                type="button"
                onClick={handleSaveDrip}
                className="btn-3d-butter inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-full bg-white border-2 border-espresso text-espresso text-xs sm:text-sm font-bold hover:bg-vanilla transition-all shadow-sm"
              >
                <Heart className="w-4 h-4 text-espresso fill-espresso/20" />
                <span className="hidden sm:inline">Simpan Drip</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
