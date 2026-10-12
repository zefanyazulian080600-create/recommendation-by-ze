"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ShoppingBag, Flame, TrendingDown, Check, Zap } from "lucide-react";
import { formatRupiah } from "@/lib/utils";
import { triggerConfetti } from "@/lib/confetti";

interface DupePair {
  id: string;
  category: string;
  grail: {
    name: string;
    brand: string;
    price: number;
    image: string;
    badge: string;
  };
  dupe: {
    name: string;
    price: number;
    image: string;
    badge: string;
    marketplace: string;
    affiliateUrl: string;
    productSlug?: string;
    proReview: string;
  };
}

const DUPE_PAIRS: DupePair[] = [
  {
    id: "dupe-kicks",
    category: "Footwear / Kicks",
    grail: {
      name: "Samba OG Retro Gumsole Classic",
      brand: "Adidas Originals",
      price: 2200000,
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
      badge: "GRAIL MAHAL 💸",
    },
    dupe: {
      name: "Retro Suede Gumsole Skate Sneakers - Off-White & Forest",
      price: 239000,
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
      badge: "DUPE ZE APPROVED ✨",
      marketplace: "Shopee",
      affiliateUrl: "https://shopee.co.id",
      productSlug: "retro-suede-gumsole-skate-sneakers",
      proReview: "Siluet gumsole retro 95% identik, suede lembut dan insole empuk buat daily jalan.",
    },
  },
  {
    id: "dupe-jacket",
    category: "Outerwear",
    grail: {
      name: "Detroit Canvas Workwear Jacket - Moss Green",
      brand: "Carhartt WIP",
      price: 3500000,
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop",
      badge: "GRAIL MAHAL 💸",
    },
    dupe: {
      name: "Vintage Relaxed Corduroy Overshirt Jacket - Olive Green",
      price: 175000,
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop",
      badge: "DUPE ZE APPROVED ✨",
      marketplace: "Tokopedia",
      affiliateUrl: "https://tokopedia.com",
      productSlug: "vintage-corduroy-workwear-jacket",
      proReview: "Bahan korduroi tebal hangat bertekstur, cutting boxy pas di bahu tanpa bikin gerah.",
    },
  },
  {
    id: "dupe-parfum",
    category: "Fragrance / EDP",
    grail: {
      name: "Santal 33 Eau de Parfum 50ml",
      brand: "Le Labo Paris",
      price: 4500000,
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop",
      badge: "GRAIL MAHAL 💸",
    },
    dupe: {
      name: "Woody Santal & Smoked Bergamot Unisex EDP 50ml",
      price: 135000,
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop",
      badge: "DUPE ZE APPROVED ✨",
      marketplace: "Shopee",
      affiliateUrl: "https://shopee.co.id",
      productSlug: "woody-santal-smoked-bergamot-unisex-edp",
      proReview: "Notes aroma kayu cendana smoky, leather, dan cardamom berkelas tahan hingga 8-10 jam.",
    },
  },
  {
    id: "dupe-shoes",
    category: "Formal Footwear",
    grail: {
      name: "1461 Smooth 3-Eye Shoe Classic",
      brand: "Dr. Martens",
      price: 2800000,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
      badge: "GRAIL MAHAL 💸",
    },
    dupe: {
      name: "Classic 3-Eyelet Matte Leather Derby Shoes - Deep Noir",
      price: 219000,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
      badge: "DUPE ZE APPROVED ✨",
      marketplace: "Tokopedia",
      affiliateUrl: "https://tokopedia.com",
      productSlug: "classic-3-eyelet-matte-leather-derby-shoes-noir",
      proReview: "Kulit matte tidak kaku, sol chunky lug anti-slip, tidak bikin lecet tumit saat dipakai jalan.",
    },
  },
];

export function DupeVsGrailSection() {
  const [activeTab, setActiveTab] = useState<string>("dupe-kicks");
  const activePair = DUPE_PAIRS.find((p) => p.id === activeTab) || DUPE_PAIRS[0];
  const savedAmount = activePair.grail.price - activePair.dupe.price;
  const savedPercent = Math.round((savedAmount / activePair.grail.price) * 100);

  return (
    <section className="py-16 bg-vanilla border-t-3 border-espresso overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coral text-espresso text-xs font-black shadow-brutal-sm -rotate-1 mb-2 border-2 border-espresso">
              <TrendingDown className="w-4 h-4" />
              <span>SMART SHOPPING • DUPE VS GRAIL 🔄</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-espresso">
              Look Mewah Jutaan, Harga Ramah Uang Jajan
            </h2>
            <p className="text-sm text-espresso-100 mt-1 max-w-xl">
              Naksir barang branded viral jutaan rupiah? Ze carikan alternatif lokal berkualitas yang siluet dan aromanya 95% mirip dengan harga di bawah 250 ribu!
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-espresso text-xs font-black text-espresso shadow-brutal-sm self-start md:self-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-coral animate-ping" />
            <span>Hemat hingga {savedPercent}%! 💸</span>
          </div>
        </div>

        {/* Tab Category Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 mb-8">
          {DUPE_PAIRS.map((pair) => {
            const isActive = activeTab === pair.id;
            return (
              <button
                key={pair.id}
                type="button"
                onClick={(e) => {
                  setActiveTab(pair.id);
                  triggerConfetti(e.clientX, e.clientY);
                }}
                className={`p-3.5 rounded-2xl border-2 text-left transition-all tap-bounce flex flex-col justify-between ${
                  isActive
                    ? "bg-cobalt text-vanilla border-espresso shadow-brutal scale-105"
                    : "bg-white text-espresso border-espresso/20 hover:border-espresso hover:shadow-brutal-sm"
                }`}
              >
                <span className={`text-[10px] font-black uppercase tracking-wider ${isActive ? "text-coral" : "text-espresso/60"}`}>
                  {pair.category}
                </span>
                <p className="text-xs sm:text-sm font-black truncate mt-1">
                  {pair.grail.brand} vs Dupe
                </p>
              </button>
            );
          })}
        </div>

        {/* Comparison Showcase Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-4 border-espresso shadow-brutal-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b-2 border-espresso/15">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-cobalt">
                KATEGORI: {activePair.category}
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-espresso">
                {activePair.grail.brand} Alternative
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral text-espresso text-xs font-black border-2 border-espresso shadow-sm">
              <Zap className="w-4 h-4 fill-espresso" />
              <span>HEMAT {formatRupiah(savedAmount)} ({savedPercent}%)</span>
            </div>
          </div>

          {/* Side by Side Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Left: The Expensive Grail */}
            <div className="p-5 rounded-2xl border-2 border-dashed border-espresso/40 bg-softgray/40 space-y-4 flex flex-col justify-between opacity-85">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-espresso/70">
                    BRAND ASLI / GRAIL
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-espresso/20 text-espresso text-[10px] font-black">
                    {activePair.grail.badge}
                  </span>
                </div>

                <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-espresso/30 bg-white">
                  <Image
                    src={activePair.grail.image}
                    alt={activePair.grail.name}
                    fill
                    className="object-cover grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-espresso/20 flex items-center justify-center">
                    <span className="px-3 py-1 rounded-full bg-espresso text-white text-xs font-black border border-white">
                      Brand Hype Mewah
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-bold text-espresso/60 uppercase">
                    {activePair.grail.brand}
                  </p>
                  <h4 className="font-editorial text-base font-bold text-espresso">
                    {activePair.grail.name}
                  </h4>
                </div>
              </div>

              <div className="pt-3 border-t border-espresso/20 flex items-baseline justify-between text-espresso/70">
                <span className="text-xs font-semibold">Harga Resmi:</span>
                <span className="text-lg font-black line-through text-espresso/60">
                  {formatRupiah(activePair.grail.price)}
                </span>
              </div>
            </div>

            {/* Right: Ze's Budget Dupe Winner */}
            <div className="p-5 rounded-2xl border-3 border-espresso bg-vanilla space-y-4 flex flex-col justify-between shadow-brutal-sm relative">
              <div className="absolute -top-3.5 right-6 px-4 py-0.5 bg-coral border-2 border-espresso text-[10px] font-black uppercase tracking-widest text-espresso -rotate-1 shadow-xs">
                ⭐ PILIHAN CERDAS ZE
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-cobalt">
                    VERSI HEMAT KURASI ZE
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-cobalt text-vanilla text-[10px] font-black border border-espresso">
                    {activePair.dupe.badge}
                  </span>
                </div>

                <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-espresso bg-white">
                  <Image
                    src={activePair.dupe.image}
                    alt={activePair.dupe.name}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-coral text-espresso text-[10px] font-black border border-espresso shadow-xs">
                    Tersedia di {activePair.dupe.marketplace}
                  </span>
                </div>

                <div>
                  <h4 className="font-editorial text-base sm:text-lg font-bold text-espresso">
                    {activePair.dupe.name}
                  </h4>
                  <p className="text-xs text-espresso-100 mt-1 leading-snug">
                    💡 <strong>Review Ze:</strong> {activePair.dupe.proReview}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t-2 border-espresso/20 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-black text-espresso">Harga Dupe Pilihan:</span>
                  <span className="text-2xl font-black text-cobalt">
                    {formatRupiah(activePair.dupe.price)}
                  </span>
                </div>

                <a
                  href={activePair.dupe.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => triggerConfetti(e.clientX, e.clientY)}
                  className="btn-3d flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-coral hover:bg-coral-dark text-espresso font-black text-xs uppercase tracking-wider border-2 border-espresso shadow-brutal hover:shadow-brutal-sm transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Beli Dupe Ini di {activePair.dupe.marketplace} 🛍️</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DupeVsGrailSection;
