"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Dices, ArrowRight, X, Heart, ExternalLink, Check } from "lucide-react";
import { Product } from "@/types";
import { formatRupiah, getMarketplaceMeta } from "@/lib/utils";
import { triggerConfetti } from "@/lib/confetti";
import { useToast } from "@/context/ToastContext";

interface VibeSelectorProps {
  products: Product[];
}

export function VibeSelector({ products }: VibeSelectorProps) {
  const { showToast } = useToast();
  const [selectedVibe, setSelectedVibe] = useState<string>("all");
  const [randomItem, setRandomItem] = useState<Product | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  const vibes = [
    { id: "all", label: "✨ Semua Vibe", emoji: "✨", tag: "Semua Rekomendasi" },
    { id: "bro-streetwear", label: "🛹 Bro Streetwear", emoji: "🛹", tag: "Boxy & Cargo Cowok" },
    { id: "clean-fit", label: "🕶️ Clean Minimalist", emoji: "🕶️", tag: "Sleek & Uniqlo-Core" },
    { id: "earthy-tone", label: "🌿 Earth Tone", emoji: "🌿", tag: "Olive, Khaki & Linen" },
    { id: "dark-monochrome", label: "🖤 Dark Monochrome", emoji: "🖤", tag: "Edgy Charcoal & Loafers" },
    { id: "korean-aesthetic", label: "🇰🇷 Korean Casual", emoji: "🇰🇷", tag: "Oversized & Neat" },
    { id: "ngampus", label: "🎒 Ngampus / WFC", emoji: "🎒", tag: "Kuliah & Cafe Fit" },
    { id: "hemat", label: "💸 Under 100k", emoji: "💸", tag: "Ramah Dompet" },
  ];

  // Random Spill Generator (Gacha Racun)
  const handleRollRandom = (e: React.MouseEvent) => {
    setIsRolling(true);
    triggerConfetti(e.clientX, e.clientY);
    showToast("🎲 Mengacak racun terbaik untukmu...", "info");

    setTimeout(() => {
      const pool = products.length > 0 ? products : [];
      if (pool.length > 0) {
        const randomIndex = Math.floor(Math.random() * pool.length);
        setRandomItem(pool[randomIndex]);
        triggerConfetti();
        showToast("✨ Racun terpilih! Siap checkout 🛍️", "success");
      }
      setIsRolling(false);
    }, 700);
  };

  return (
    <section className="py-12 bg-vanilla border-t-2 border-espresso/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Gen Z Slanted Stickers */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-butter-400 border-2 border-espresso text-espresso text-xs font-extrabold shadow-brutal-sm -rotate-1 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PILIH VIBE & GAYA KAMU 🛹✨</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-espresso">
              Outfit Archetype & Mood Matcher (All Gender)
            </h2>
            <p className="text-sm text-espresso-100 mt-1 max-w-xl">
              Lagi cari gaya Bro Streetwear, Clean Minimalist, Korean Casual, atau Earth Tone? Pilih vibe kamu di bawah:
            </p>
          </div>

          {/* Random Roll Button (Interactive Gacha) */}
          <button
            type="button"
            onClick={handleRollRandom}
            disabled={isRolling}
            className="btn-3d-butter inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-butter-400 border-2 border-espresso text-espresso text-xs sm:text-sm font-extrabold shadow-brutal hover:bg-butter-500 transition-all self-start md:self-auto"
          >
            <Dices className={`w-5 h-5 ${isRolling ? "animate-spin" : ""}`} />
            <span>{isRolling ? "Mengacak..." : "Acak Racun Ze Hari Ini 🎲"}</span>
          </button>
        </div>

        {/* Vibe Selection Pills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 mb-6">
          {vibes.map((vibe) => {
            const isActive = selectedVibe === vibe.id;
            return (
              <button
                key={vibe.id}
                onClick={(e) => {
                  setSelectedVibe(vibe.id);
                  triggerConfetti(e.clientX, e.clientY);
                }}
                className={`p-3.5 rounded-2xl border-2 text-left transition-all tap-bounce flex flex-col justify-between ${
                  isActive
                    ? "bg-butter-400 border-espresso shadow-brutal scale-105"
                    : "bg-white border-espresso/20 hover:border-espresso hover:shadow-brutal-sm"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{vibe.emoji}</span>
                  {isActive && (
                    <span className="w-2.5 h-2.5 rounded-full bg-espresso animate-pulse" />
                  )}
                </div>
                <div className="mt-2">
                  <p className="text-xs sm:text-sm font-extrabold text-espresso truncate">
                    {vibe.label}
                  </p>
                  <p className="text-[10px] text-espresso-100 font-medium truncate mt-0.5">
                    {vibe.tag}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Vibe Bar & Fast Catalog Jump */}
        <div className="p-4 rounded-2xl bg-white border-2 border-espresso/15 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-espresso">Mood Aktif:</span>
            <span className="px-3 py-1 rounded-full bg-matcha-100 text-espresso font-bold border border-matcha-400">
              {vibes.find((v) => v.id === selectedVibe)?.label || "Semua Look"} ✨
            </span>
            <span className="text-espresso-100 hidden md:inline">
              (Menampilkan rekomendasi outfit & racun yang cocok dengan vibe ini)
            </span>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 font-bold text-espresso hover:text-matcha-600 group"
          >
            <span>Buka Katalog Lengkap</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Random Gacha Mystery Modal */}
      {randomItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/80 backdrop-blur-md animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setRandomItem(null);
          }}
        >
          <div className="relative w-full max-w-sm bg-vanilla rounded-3xl border-4 border-espresso shadow-brutal-lg overflow-hidden p-5 space-y-4 animate-slideUp">
            {/* Washi Tape Header */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-6 py-1 bg-butter-400 border border-espresso text-[10px] font-extrabold uppercase tracking-widest text-espresso shadow-sm rotate-1">
              ✨ ZE&apos;S MYSTERY SPILL ✨
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-bold text-matcha-600 uppercase tracking-wider">
                {randomItem.category?.name || "Rekomendasi Spesial"}
              </span>
              <button
                type="button"
                onClick={() => setRandomItem(null)}
                className="w-8 h-8 rounded-full bg-white border-2 border-espresso flex items-center justify-center text-espresso hover:bg-butter-400 active:scale-90 transition-all"
                aria-label="Tutup mystery card"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Photo Card */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-espresso bg-softgray">
              <Image
                src={randomItem.media?.[0]?.public_url || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop"}
                alt={randomItem.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-butter-400 text-espresso text-[10px] font-extrabold border border-espresso shadow-sm">
                CONFIRMED SLAY 💅
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-1">
              <h3 className="font-editorial text-base font-bold text-espresso leading-snug line-clamp-2">
                {randomItem.name}
              </h3>
              <p className="text-xs text-espresso-100 line-clamp-2">
                {randomItem.short_description}
              </p>
              <p className="text-lg font-extrabold text-espresso pt-1">
                {formatRupiah(randomItem.price)}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={randomItem.affiliate_url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerConfetti()}
                className="btn-3d flex-1 py-3 text-center rounded-full bg-espresso text-vanilla text-xs font-bold border-2 border-espresso hover:bg-butter-400 hover:text-espresso transition-all"
              >
                Checkout di Marketplace 🛍️
              </a>
              <Link
                href={`/product/${randomItem.slug}`}
                onClick={() => setRandomItem(null)}
                className="px-4 py-3 rounded-full bg-white text-espresso text-xs font-bold border-2 border-espresso hover:bg-softgray transition-colors"
              >
                Detail
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
