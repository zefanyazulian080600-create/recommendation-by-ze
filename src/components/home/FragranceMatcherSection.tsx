"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Heart, ShoppingBag, Droplets, Clock, Flame, Check } from "lucide-react";
import { formatRupiah } from "@/lib/utils";
import { triggerConfetti } from "@/lib/confetti";

interface FragranceOption {
  id: string;
  name: string;
  tagline: string;
  notesProfile: string;
  vibeTag: string;
  longevity: string;
  sillage: string;
  price: number;
  image: string;
  marketplace: string;
  affiliateUrl: string;
  reviewHighlight: string;
}

const FRAGRANCES: FragranceOption[] = [
  {
    id: "woody-santal",
    name: "Woody Santal & Smoked Bergamot Unisex EDP 50ml",
    tagline: "Aura mahal, nocturnal, misterius, & disukai semua gender.",
    notesProfile: "Top: Smoked Bergamot | Mid: Cardamom, Iris | Base: Sandalwood, Cedar, Leather",
    vibeTag: "Starboy & Skena Grail ⚡",
    longevity: "8 - 10 Jam (Long Lasting)",
    sillage: "Strong (Jejak wangi 2 meter)",
    price: 135000,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop",
    marketplace: "Shopee",
    affiliateUrl: "https://shopee.co.id",
    reviewHighlight: "Review 4.9★: 'Wangi cendana smokey kayak masuk hotel bintang lima di Tokyo.'",
  },
  {
    id: "fresh-citrus",
    name: "Aqua Neroli & Sea Salt Clean Breeze EDP 50ml",
    tagline: "Segar seperti angin laut, energetic, sejuk dipakai siang bolong.",
    notesProfile: "Top: Italian Mandarin, Grapefruit | Mid: Sea Salt, Sage | Base: White Musk",
    vibeTag: "Clean Fit & Kuliah Pagi 🌊",
    longevity: "6 - 8 Jam",
    sillage: "Moderate (Segar & Sopan)",
    price: 129000,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600&auto=format&fit=crop",
    marketplace: "Tokopedia",
    affiliateUrl: "https://tokopedia.com",
    reviewHighlight: "Review 4.9★: 'Disemprot pas panas-panasan naik motor tetap wangi segar gak bikin pusing.'",
  },
  {
    id: "warm-vanilla",
    name: "Warm Bourbon Vanilla & Roasted Almond EDP 50ml",
    tagline: "Manis menggoda, cozy bakery vibe, bikin orang lain pengen peluk.",
    notesProfile: "Top: Pear, Coconut | Mid: Roasted Almond, Heliotrope | Base: Bourbon Vanilla",
    vibeTag: "Cewek Kue & First Date 🍰",
    longevity: "9 - 12 Jam (Super Long Lasting)",
    sillage: "Enormous (Intimate & Sweet)",
    price: 145000,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=600&auto=format&fit=crop",
    marketplace: "TikTok Shop",
    affiliateUrl: "https://shop.tiktok.com",
    reviewHighlight: "Review 5.0★: 'Manisnya mahal gak kayak sirup, cocok banget buat kencan malam.'",
  },
  {
    id: "clean-cotton",
    name: "Pure White Linen & Soft Cotton Fluff EDP 50ml",
    tagline: "Wangi baju baru dicuci bersih, aesthetic minimalist, no-perfume perfume.",
    notesProfile: "Top: Aldehydes, Clean Rain | Mid: White Lily, Peony | Base: Cashmere Wood",
    vibeTag: "Quiet Luxury & Old Money ☕",
    longevity: "7 - 8 Jam",
    sillage: "Intimate (Skin Scent Mewah)",
    price: 139000,
    image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=600&auto=format&fit=crop",
    marketplace: "Shopee",
    affiliateUrl: "https://shopee.co.id",
    reviewHighlight: "Review 4.8★: 'Kaya aroma sprei hotel bintang 5 yang baru diganti. Super comforting!'",
  },
];

export function FragranceMatcherSection() {
  const [selectedFragranceId, setSelectedFragranceId] = useState<string>("woody-santal");
  const activeScent = FRAGRANCES.find((f) => f.id === selectedFragranceId) || FRAGRANCES[0];

  return (
    <section className="py-16 bg-vanilla border-t-3 border-espresso overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt text-vanilla text-xs font-black shadow-brutal-sm -rotate-1 mb-2 border-2 border-espresso">
              <Droplets className="w-4 h-4 text-coral" />
              <span>SIGNATURE SCENT MATCHER 🧴✨</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-espresso">
              Outfit Keren Belum Lengkap Tanpa Wangi Mahal
            </h2>
            <p className="text-sm text-espresso-100 mt-1 max-w-xl">
              Cari parfum lokal yang aromanya tahan 8-10 jam dan punya karakter unik? Pilih aroma favoritmu di bawah:
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-espresso text-xs font-black text-espresso shadow-brutal-sm self-start md:self-auto">
            <Clock className="w-4 h-4 text-coral" />
            <span>Ketahanan Teruji 8-12 Jam</span>
          </div>
        </div>

        {/* Aroma Pill Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {FRAGRANCES.map((scent) => {
            const isActive = selectedFragranceId === scent.id;
            return (
              <button
                key={scent.id}
                type="button"
                onClick={(e) => {
                  setSelectedFragranceId(scent.id);
                  triggerConfetti(e.clientX, e.clientY);
                }}
                className={`p-3.5 rounded-2xl border-2 text-left transition-all tap-bounce flex flex-col justify-between ${
                  isActive
                    ? "bg-coral text-espresso border-espresso shadow-brutal scale-105"
                    : "bg-white text-espresso border-espresso/20 hover:border-espresso hover:shadow-brutal-sm"
                }`}
              >
                <span className="text-[10px] font-black uppercase tracking-wider block opacity-80">
                  {scent.vibeTag}
                </span>
                <p className="text-xs sm:text-sm font-black truncate mt-1">
                  {scent.name.split("EDP")[0]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Scent Showcase Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-4 border-espresso shadow-brutal-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Photo & Badges */}
            <div className="md:col-span-5 relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden border-3 border-espresso bg-vanilla shadow-brutal-sm">
                <Image
                  src={activeScent.image}
                  alt={activeScent.name}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-espresso text-vanilla text-[10px] font-black border border-white">
                  {activeScent.vibeTag}
                </span>
              </div>
            </div>

            {/* Right Details */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-black text-cobalt uppercase tracking-widest">
                  NOTES BREAKDOWN • LOCAL PERFUMERY GRAIL
                </span>
                <h3 className="font-editorial text-xl sm:text-3xl font-bold text-espresso mt-1">
                  {activeScent.name}
                </h3>
                <p className="text-sm text-espresso-100 font-semibold mt-1">
                  {activeScent.tagline}
                </p>
              </div>

              {/* Fragrance Metrics */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-vanilla border border-espresso/30">
                  <span className="text-espresso/60 block font-bold text-[10px]">KETAHANAN (LONGEVITY)</span>
                  <span className="font-black text-espresso mt-0.5 block">{activeScent.longevity}</span>
                </div>
                <div className="p-3 rounded-xl bg-vanilla border border-espresso/30">
                  <span className="text-espresso/60 block font-bold text-[10px]">JEJAK WANGI (SILLAGE)</span>
                  <span className="font-black text-espresso mt-0.5 block">{activeScent.sillage}</span>
                </div>
              </div>

              {/* Notes Details */}
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-espresso/20 text-xs font-mono">
                <span className="font-black text-espresso block mb-1 text-[11px] font-sans">PIRAMIDA AROMA:</span>
                <p className="text-espresso/80 leading-relaxed text-[11px]">{activeScent.notesProfile}</p>
              </div>

              {/* Review Quote */}
              <p className="text-xs italic text-espresso/80 border-l-3 border-coral pl-3">
                {activeScent.reviewHighlight}
              </p>

              {/* Price & Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t-2 border-espresso/15">
                <div>
                  <span className="text-xs text-espresso/60 font-semibold block">Harga di {activeScent.marketplace}:</span>
                  <span className="text-2xl font-black text-cobalt">{formatRupiah(activeScent.price)}</span>
                </div>

                <a
                  href={activeScent.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => triggerConfetti(e.clientX, e.clientY)}
                  className="btn-3d flex items-center justify-center gap-2 py-3.5 px-8 rounded-full bg-coral hover:bg-coral-dark text-espresso font-black text-xs uppercase tracking-wider border-2 border-espresso shadow-brutal hover:shadow-brutal-sm transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Beli di {activeScent.marketplace} 🛍️</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FragranceMatcherSection;
