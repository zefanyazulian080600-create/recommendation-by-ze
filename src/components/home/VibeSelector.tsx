"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Dices, ArrowRight, X, Heart, ShoppingBag } from "lucide-react";
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
    { id: "skena", label: "🎸 Anak Skena", emoji: "🎸", tag: "Tote Bag & Vinyl" },
    { id: "kalcer", label: "🛹 Anak Kalcer", emoji: "🛹", tag: "Blok M Drip & Workwear" },
    { id: "starboy", label: "⚡ Starboy", emoji: "⚡", tag: "Loafers & Santal" },
    { id: "stargirl", label: "✨ Stargirl", emoji: "✨", tag: "Clean Glam & Chic" },
    { id: "gorpcore", label: "🏕️ Gorpcore", emoji: "🏕️", tag: "Outdoor & Tactical" },
    { id: "old-money", label: "🍸 Old Money", emoji: "🍸", tag: "Quiet Luxury & Linen" },
    { id: "cewek-kue", label: "🍰 Cewek Kue", emoji: "🍰", tag: "Pastel Pop & Cute" },
    { id: "cewek-mamba", label: "🖤 Cewek Mamba", emoji: "🖤", tag: "All Black & Edgy" },
    { id: "y2k", label: "💿 Cyber Y2K", emoji: "💿", tag: "Parachute & Baggy" },
    { id: "ngampus", label: "🎒 Ngampus / WFC", emoji: "🎒", tag: "Cafe Fit & Laptop" },
    { id: "hemat", label: "💸 Under 100k", emoji: "💸", tag: "Ramah Uang Jajan" },
  ];

  // Dynamic products filtering based on Gen Z aesthetic vibes
  const filteredProducts = useMemo(() => {
    if (!products || products.length === 0) return [];
    if (selectedVibe === "all") return products.slice(0, 6);

    const matches = products.filter((p) => {
      const pName = (p.name || "").toLowerCase();
      const pDesc = (p.description || "").toLowerCase();
      const pTags = (p.tags || []).map((t) => t.toLowerCase());

      if (selectedVibe === "skena") {
        return (
          pTags.some((t) => ["skena", "tote bag", "derby", "vintage", "santal"].includes(t)) ||
          pName.includes("tote") ||
          pName.includes("derby") ||
          pName.includes("vintage") ||
          pName.includes("santal") ||
          pName.includes("corduroy")
        );
      }
      if (selectedVibe === "kalcer") {
        return (
          pTags.some((t) => ["kalcer", "workwear", "cargo", "sneakers", "cap"].includes(t)) ||
          pName.includes("workwear") ||
          pName.includes("corduroy") ||
          pName.includes("cargo") ||
          pName.includes("sneakers") ||
          pName.includes("cap") ||
          pName.includes("derby")
        );
      }
      if (selectedVibe === "starboy") {
        return (
          pName.includes("loafers") ||
          pName.includes("santal") ||
          pName.includes("charcoal") ||
          pName.includes("cardholder") ||
          pName.includes("corduroy")
        );
      }
      if (selectedVibe === "stargirl") {
        return (
          pName.includes("cardigan") ||
          pName.includes("trousers") ||
          pName.includes("loafers") ||
          p.category_id === "cat-outfit-wanita"
        );
      }
      if (selectedVibe === "gorpcore") {
        return (
          pName.includes("parachute") ||
          pName.includes("cargo") ||
          pName.includes("sneakers") ||
          pName.includes("cap")
        );
      }
      if (selectedVibe === "old-money") {
        return (
          pName.includes("linen") ||
          pName.includes("trousers") ||
          pName.includes("loafers") ||
          pName.includes("cardholder")
        );
      }
      if (selectedVibe === "cewek-kue") {
        return (
          pName.includes("rose") ||
          pName.includes("cardigan") ||
          pName.includes("ivory") ||
          pName.includes("hijab")
        );
      }
      if (selectedVibe === "cewek-mamba") {
        return (
          pName.includes("charcoal") ||
          pName.includes("black") ||
          pName.includes("loafers") ||
          pName.includes("noir")
        );
      }
      if (selectedVibe === "y2k") {
        return (
          pName.includes("parachute") ||
          pName.includes("hoodie") ||
          pName.includes("boxy") ||
          pName.includes("sneakers")
        );
      }
      if (selectedVibe === "ngampus") {
        return (
          pName.includes("tote") ||
          pName.includes("hoodie") ||
          pName.includes("linen") ||
          pName.includes("dad cap")
        );
      }
      if (selectedVibe === "hemat") {
        return p.price <= 100000;
      }
      return true;
    });

    return matches.length > 0 ? matches.slice(0, 6) : products.slice(0, 4);
  }, [selectedVibe, products]);

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

  const activeVibeObj = vibes.find((v) => v.id === selectedVibe) || vibes[0];

  return (
    <section className="py-12 bg-vanilla border-t-2 border-espresso/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Gen Z Slanted Stickers */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-butter-400 border-2 border-espresso text-espresso text-xs font-extrabold shadow-brutal-sm -rotate-1 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PILIH VIBE & GAYA KAMU 🎸🛹✨</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-espresso">
              Outfit Archetype & Mood Matcher (Skena, Kalcer, Starboy & More)
            </h2>
            <p className="text-sm text-espresso-100 mt-1 max-w-xl">
              Anak Skena ngopi, Kalcer Blok M, Starboy night-out, Gorpcore, atau Clean Old Money? Klik vibe favoritmu untuk langsung lihat kurasinya:
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
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3.5 mb-6">
          {vibes.map((vibe) => {
            const isActive = selectedVibe === vibe.id;
            return (
              <button
                key={vibe.id}
                onClick={(e) => {
                  setSelectedVibe(vibe.id);
                  triggerConfetti(e.clientX, e.clientY);
                }}
                className={`p-3 rounded-2xl border-2 text-left transition-all tap-bounce flex flex-col justify-between ${
                  isActive
                    ? "bg-butter-400 border-espresso shadow-brutal scale-105"
                    : "bg-white border-espresso/20 hover:border-espresso hover:shadow-brutal-sm"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl">{vibe.emoji}</span>
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

        {/* Active Vibe Bar */}
        <div className="p-4 rounded-2xl bg-white border-2 border-espresso/15 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-xs mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-extrabold text-espresso">Vibe Terpilih:</span>
            <span className="px-3 py-1 rounded-full bg-matcha-100 text-espresso font-black border border-espresso shadow-brutal-sm">
              {activeVibeObj.label} ✨
            </span>
            <span className="text-espresso-100 hidden sm:inline">
              • Menampilkan {filteredProducts.length} rekomendasi outfit & gear terkurasi
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

        {/* Dynamic Vibe Products Showcase Rack */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {filteredProducts.map((product) => {
            const meta = getMarketplaceMeta(product.marketplace);
            const coverImg =
              product.media?.find((m) => m.is_cover)?.public_url ||
              product.media?.[0]?.public_url ||
              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop";

            return (
              <div
                key={product.id}
                className="group relative rounded-2xl border-2 border-espresso bg-white overflow-hidden flex flex-col justify-between hover:shadow-brutal-sm transition-all"
              >
                {/* Photo */}
                <div className="relative aspect-square w-full overflow-hidden bg-softgray border-b-2 border-espresso">
                  <Image
                    src={coverImg}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge_label && (
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-butter-400 text-espresso text-[9px] font-black border border-espresso shadow-sm">
                      {product.badge_label}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="p-2.5 sm:p-3 flex flex-col justify-between flex-1 space-y-2">
                  <div className="space-y-1">
                    <span
                      className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-md inline-block uppercase text-white shadow-xs"
                      style={{ backgroundColor: meta.badgeBg }}
                    >
                      {meta.name}
                    </span>
                    <Link
                      href={`/product/${product.slug}`}
                      className="text-xs font-bold text-espresso line-clamp-2 leading-tight hover:underline block"
                    >
                      {product.name}
                    </Link>
                  </div>

                  <div>
                    <p className="text-xs sm:text-sm font-black text-espresso">
                      {formatRupiah(product.price)}
                    </p>
                    <a
                      href={product.affiliate_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => triggerConfetti(e.clientX, e.clientY)}
                      className="mt-2 w-full py-1.5 px-2 rounded-xl bg-espresso hover:bg-butter-400 text-vanilla hover:text-espresso font-bold text-[10px] sm:text-[11px] text-center border border-espresso transition-all flex items-center justify-center gap-1"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Beli</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
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
                src={
                  randomItem.media?.[0]?.public_url ||
                  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop"
                }
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
