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
    id: "dupe-tumbler",
    category: "Drinkware & Lifestyle",
    grail: {
      name: "Quencher H2.0 FlowState Tumbler 1.2L",
      brand: "Stanley 1913",
      price: 850000,
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop",
      badge: "GRAIL MAHAL 💸",
    },
    dupe: {
      name: "Aesthetic Stainless Vacuum Tumbler 1.2L with Straw - Matte Cream",
      price: 79000,
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop",
      badge: "ZE APPROVED ✨",
      marketplace: "Shopee",
      affiliateUrl: "https://shopee.co.id",
      productSlug: "aesthetic-vacuum-tumbler",
      proReview: "Bahan stainless 304 food-grade tebal, tahan es dingin 18 jam tanpa bocor dan warna estetik pastel.",
    },
  },
  {
    id: "dupe-lightbar",
    category: "Desk & Gadget Setup",
    grail: {
      name: "ScreenBar Plus Auto-Dimming Light",
      brand: "BenQ",
      price: 2100000,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=600&auto=format&fit=crop",
      badge: "GRAIL MAHAL 💸",
    },
    dupe: {
      name: "Baseus i-wok Series Monitor Hanging Lightbar USB-C",
      price: 220000,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=600&auto=format&fit=crop",
      badge: "ZE APPROVED ✨",
      marketplace: "Tokopedia",
      affiliateUrl: "https://tokopedia.com",
      productSlug: "baseus-monitor-lightbar",
      proReview: "Pencahayaan asimetris anti silau di layar monitor, 3 mode temperatur warna & hemat tempat di meja.",
    },
  },
  {
    id: "dupe-audio",
    category: "Tech & Audio",
    grail: {
      name: "AirPods Pro (2nd Generation) with MagSafe",
      brand: "Apple",
      price: 3800000,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop",
      badge: "GRAIL MAHAL 💸",
    },
    dupe: {
      name: "Low-Latency Gaming & Music ANC Wireless TWS Earbuds",
      price: 189000,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop",
      badge: "ZE APPROVED ✨",
      marketplace: "TikTok Shop",
      affiliateUrl: "https://tiktok.com",
      productSlug: "low-latency-tws-earbuds",
      proReview: "Bass punchy, latensi rendah 45ms buat gaming & nonton, baterai tahan 6 jam nonstop.",
    },
  },
  {
    id: "dupe-kicks",
    category: "Footwear & Streetwear",
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
      badge: "ZE APPROVED ✨",
      marketplace: "Shopee",
      affiliateUrl: "https://shopee.co.id",
      productSlug: "retro-suede-gumsole-skate-sneakers",
      proReview: "Siluet gumsole retro 95% identik, suede lembut dan insole empuk buat daily jalan kaki.",
    },
  },
  {
    id: "dupe-parfum",
    category: "Fragrance & Grooming",
    grail: {
      name: "Santal 33 Eau de Parfum 50ml",
      brand: "Le Labo Paris",
      price: 4500000,
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop",
      badge: "GRAIL MAHAL 💸",
    },
    dupe: {
      name: "Woody Santal & Smoked Bergamot Unisex Extrait 50ml",
      price: 129000,
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop",
      badge: "ZE APPROVED ✨",
      marketplace: "Shopee",
      affiliateUrl: "https://shopee.co.id",
      productSlug: "woody-santal-smoked-bergamot-unisex-edp",
      proReview: "Notes aroma kayu cendana smoky, leather, dan cardamom berkelas tahan hingga 8-10 jam.",
    },
  },
];

export function DupeVsGrailSection() {
  const [activeTab, setActiveTab] = useState<string>("dupe-tumbler");
  const activePair = DUPE_PAIRS.find((p) => p.id === activeTab) || DUPE_PAIRS[0];
  const savedAmount = activePair.grail.price - activePair.dupe.price;
  const savedPercent = Math.round((savedAmount / activePair.grail.price) * 100);

  return (
    <div className="space-y-8 text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold mb-2">
            <TrendingDown className="w-3.5 h-3.5" />
            <span>SMART SHOPPING • DUPE VS GRAIL 🔄</span>
          </div>
          <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Look & Fungsi Mewah Jutaan, Harga Ramah Ol Shop
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl leading-relaxed">
            Naksir barang branded viral jutaan rupiah? Ze carikan alternatif online shop yang fungsi dan estetikanya 95% mirip dengan harga ramah kantong!
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-xs font-mono font-bold text-emerald-400 self-start md:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Hemat hingga {savedPercent}%! 💸</span>
        </div>
      </div>

      {/* Tab Category Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
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
              className={`p-3 rounded-xl border text-left transition-all tap-bounce flex flex-col justify-between ${
                isActive
                  ? "bg-white text-black border-white shadow-xl font-bold"
                  : "bg-[#090A0F] text-zinc-300 border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isActive ? "text-emerald-700" : "text-zinc-500"}`}>
                {pair.category}
              </span>
              <p className="text-xs font-bold truncate mt-1">
                {pair.grail.brand}
              </p>
            </button>
          );
        })}
      </div>

      {/* Comparison Showcase Card */}
      <div className="p-5 sm:p-7 rounded-2xl bg-[#090A0F] border border-white/10 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">
              KATEGORI: {activePair.category}
            </span>
            <h4 className="font-sans text-lg sm:text-xl font-bold text-white mt-0.5">
              {activePair.grail.brand} vs Alternatif Pilihan Ze
            </h4>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>HEMAT {formatRupiah(savedAmount)} ({savedPercent}%)</span>
          </div>
        </div>

        {/* Side by Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {/* Left: The Expensive Grail */}
          <div className="p-5 rounded-xl border border-white/10 bg-[#12131A]/60 space-y-4 flex flex-col justify-between opacity-80">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                  BRAND ASLI / GRAIL
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-white/10 text-zinc-400 text-[10px] font-mono font-bold">
                  {activePair.grail.badge}
                </span>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-zinc-950">
                <Image
                  src={activePair.grail.image}
                  alt={activePair.grail.name}
                  fill
                  className="object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="px-3 py-1 rounded-full bg-black/80 text-zinc-300 text-xs font-mono font-bold border border-white/20">
                    Harga Jutaan
                  </span>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-mono font-bold text-zinc-500 uppercase">
                  {activePair.grail.brand}
                </p>
                <h5 className="font-sans text-base font-bold text-zinc-200">
                  {activePair.grail.name}
                </h5>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-baseline justify-between text-zinc-400">
              <span className="text-xs">Harga Resmi:</span>
              <span className="text-base font-mono font-bold line-through text-zinc-500">
                {formatRupiah(activePair.grail.price)}
              </span>
            </div>
          </div>

          {/* Right: Ze's Budget Dupe Winner */}
          <div className="p-5 rounded-xl border border-emerald-500/30 bg-[#12131A] space-y-4 flex flex-col justify-between shadow-xl relative">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  VERSI HEMAT KURASI ZE
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/40">
                  {activePair.dupe.badge}
                </span>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/15 bg-zinc-950">
                <Image
                  src={activePair.dupe.image}
                  alt={activePair.dupe.name}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-white text-[10px] font-mono font-bold border border-white/20">
                  Tersedia di {activePair.dupe.marketplace}
                </span>
              </div>

              <div>
                <h5 className="font-sans text-base sm:text-lg font-bold text-white">
                  {activePair.dupe.name}
                </h5>
                <p className="text-xs text-zinc-300 mt-1 leading-snug">
                  💡 <strong className="text-emerald-400">Review Ze:</strong> {activePair.dupe.proReview}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold text-zinc-300">Harga Dupe Pilihan:</span>
                <span className="text-xl sm:text-2xl font-mono font-extrabold text-emerald-400">
                  {formatRupiah(activePair.dupe.price)}
                </span>
              </div>

              <a
                href={activePair.dupe.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => triggerConfetti(e.clientX, e.clientY)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-xl active:scale-95"
              >
                <ShoppingBag className="w-4 h-4 text-black" />
                <span>Beli di {activePair.dupe.marketplace} 🛍️</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DupeVsGrailSection;
