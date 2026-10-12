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
    name: "⚡ Starboy Night-Out",
    tagline: "Confident, nocturnal, sleek leather & signature smoked santal aura.",
    badge: "STARBOY GRAIL 🕶️",
    auraScore: "100% Aura 🔥",
    outerwear: {
      name: "Vintage Relaxed Corduroy Overshirt Jacket",
      price: 175000,
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop",
      tag: "Outerwear",
    },
    bottom: {
      name: "Baggy Straight Fit Trousers - Deep Charcoal",
      price: 145000,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
      tag: "Bawahan",
    },
    footwear: {
      name: "Classic Chunky Lug Penny Loafers - Black",
      price: 198000,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
      tag: "Footwear",
    },
    scent: {
      name: "Woody Santal & Smoked Bergamot Unisex EDP 50ml",
      price: 135000,
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop",
      tag: "Signature Scent",
    },
    accessory: {
      name: "Minimalist Leather Cardholder & Lanyard - Black",
      price: 49000,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop",
      tag: "Aksesori",
    },
    affiliateUrl: "https://shopee.co.id",
  },
  {
    id: "stargirl-downtown",
    name: "✨ Stargirl Downtown",
    tagline: "Effortless chic, European editorial crop, clean loafers & amber perfume.",
    badge: "IT-GIRL APPROVED 💅",
    auraScore: "100% Slay ✨",
    outerwear: {
      name: "Korean Cable Knit Crop Cardigan - Muted Rose",
      price: 119000,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=600&auto=format&fit=crop",
      tag: "Outerwear",
    },
    bottom: {
      name: "Wide-Leg Highwaist Trousers Ivory",
      price: 135000,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop",
      tag: "Bawahan",
    },
    footwear: {
      name: "Classic Chunky Platform Penny Loafers - Glossy",
      price: 198000,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
      tag: "Footwear",
    },
    scent: {
      name: "Woody Santal & Smoked Bergamot Unisex EDP",
      price: 135000,
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop",
      tag: "Signature Scent",
    },
    accessory: {
      name: "Heavy Canvas Multi-Pocket Laptop Tote Bag",
      price: 125000,
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop",
      tag: "Aksesori",
    },
    affiliateUrl: "https://shopee.co.id",
  },
  {
    id: "baggy-streetwear",
    name: "🛹 Baggy Cyber-Street",
    tagline: "Heavyweight boxy cut, parachute cargo, retro gumsole skate silhouette.",
    badge: "FYP GRAIL 🧢",
    auraScore: "99% Street Cred 🛹",
    outerwear: {
      name: "Heavyweight Boxy Fit Tee 235gsm - Washed Charcoal",
      price: 119000,
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
      tag: "Atasan",
    },
    bottom: {
      name: "Relaxed Parachute Cargo Pants - Sand Khaki",
      price: 145000,
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop",
      tag: "Bawahan",
    },
    footwear: {
      name: "Retro Suede Gumsole Skate Sneakers - Off-White & Forest",
      price: 239000,
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
      tag: "Footwear",
    },
    scent: {
      name: "Matte Texture Styling Hair Clay 80g",
      price: 68000,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop",
      tag: "Grooming",
    },
    accessory: {
      name: "Vintage Washed Cotton Baseball Dad Cap",
      price: 58000,
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop",
      tag: "Aksesori",
    },
    affiliateUrl: "https://shop.tiktok.com",
  },
  {
    id: "old-money",
    name: "☕ Clean Old Money",
    tagline: "Muted luxury, neutral linen, quiet confidence, cafe & workspace ready.",
    badge: "QUIET LUXURY 🍸",
    auraScore: "98% Class 💼",
    outerwear: {
      name: "Oversized Soft Linen Shirt - Ivory Off-White",
      price: 135000,
      image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=600&auto=format&fit=crop",
      tag: "Atasan",
    },
    bottom: {
      name: "Baggy Straight Pants Charcoal Grey",
      price: 145000,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
      tag: "Bawahan",
    },
    footwear: {
      name: "Classic Chunky Platform Penny Loafers",
      price: 198000,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
      tag: "Footwear",
    },
    scent: {
      name: "Hydrating Dewy Water Sunscreen SPF 50+",
      price: 89000,
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600&auto=format&fit=crop",
      tag: "Skincare",
    },
    accessory: {
      name: "Minimalist Leather Cardholder Lanyard Pouch",
      price: 49000,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop",
      tag: "Aksesori",
    },
    affiliateUrl: "https://tokopedia.com",
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
              <span>THE STARBOY & STARGIRL ARCHIVE ⚡</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-espresso">
              Outfit, Kicks & Signature Scent Pairing
            </h2>
            <p className="text-sm text-espresso-100 mt-1 max-w-xl">
              Ala anak-anak Starboy & Stargirl: outfit kece belum lengkap tanpa sepatu yang statement dan parfum yang wangi mewah. Cek 1 set drip di bawah:
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-espresso text-xs font-extrabold text-espresso shadow-brutal-sm self-start md:self-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-butter-500 animate-ping" />
            <span>Vibe Status: {currentDrip.auraScore}</span>
          </div>
        </div>

        {/* Archetype Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
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
