"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Play, Heart, Star, ShieldCheck, Flame, Tag, Zap } from "lucide-react";
import { SiteSettings } from "@/types";
import { useUser } from "@/context/UserContext";

interface HeroSectionProps {
  settings?: SiteSettings;
}

export function HeroSection({ settings }: HeroSectionProps) {
  const { userName, userVibe, openModal } = useUser();
  const headline = settings?.hero_headline || "Curated Finds for Your Everyday Aesthetic.";
  const subheadline =
    settings?.hero_subheadline ||
    "Rekomendasi terbaik belanja online shop pilihan Ze: outfit kece, skincare viral, perintilan aesthetic, sampai gadget setup favorit yang beneran worth it dibeli.";
  const heroImage =
    settings?.hero_image ||
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop";

  return (
    <section className="relative overflow-hidden pt-6 pb-14 md:pt-12 md:pb-20 bg-vanilla">
      {/* 3D background subtle glow shapes */}
      <div className="absolute top-0 right-10 -z-10 w-96 h-96 bg-butter-200/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-5 -z-10 w-80 h-80 bg-matcha-100/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Tag with 3D tactile feel */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-espresso text-xs font-bold text-espresso shadow-3d-pill">
                <span className="w-2.5 h-2.5 rounded-full bg-matcha-500 animate-ping" />
                <Sparkles className="w-4 h-4 text-butter-500" />
                <span>Spill Racun Ol Shop & OOTD All Gender • Curated by Ze 🛹✨</span>
              </div>

              {userName ? (
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-butter-500 border-2 border-espresso text-xs font-black text-espresso shadow-brutal-sm hover:scale-105 transition-all"
                  title="Klik untuk ubah nama atau aesthetic vibe kamu"
                >
                  <Zap className="w-3.5 h-3.5 fill-espresso" />
                  <span>VIP Pass: {userName} ⚡ ({userVibe}) ✏️</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-butter-400 border-2 border-espresso text-xs font-black text-espresso shadow-brutal-sm hover:scale-105 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 fill-espresso" />
                  <span>Spill Nama Kamu ✨</span>
                </button>
              )}
            </div>

            {/* Editorial Headline */}
            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-espresso leading-[1.12]">
              {userName ? `Yo ${userName}! ` : ""}
              {headline}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-espresso-100 leading-relaxed max-w-xl font-normal">
              {subheadline}
            </p>

            {/* 3D Interactive CTAs Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/products"
                className="btn-3d inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-espresso text-vanilla text-sm font-bold border-2 border-espresso hover:bg-espresso-400 transition-all"
              >
                <span>Mulai Cari Rekomendasi 🛍️</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#video-reels"
                className="btn-3d-butter inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-butter-400 border-2 border-espresso text-espresso text-sm font-bold hover:bg-butter-500 transition-all"
              >
                <Play className="w-4 h-4 text-espresso fill-espresso" />
                <span>Tonton Video Spill</span>
              </Link>
            </div>

            {/* Social Proof & Metrics Strip in Vanilla/Espresso Box */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-espresso-100 border-t-2 border-espresso/15">
              {/* Star Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center text-butter-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-butter-500 text-butter-500" />
                  ))}
                </div>
                <span className="font-extrabold text-espresso">4.9 / 5.0</span>
                <span className="text-espresso-50">(10k+ Gen Z readers)</span>
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-1.5 text-espresso font-semibold">
                <ShieldCheck className="w-4 h-4 text-matcha-600" />
                <span>100% Toko Asli & Terpercaya</span>
              </div>
            </div>

            {/* Marketplace badges mini-strip */}
            <div className="flex items-center gap-2.5 text-xs text-espresso-100 flex-wrap">
              <span className="font-bold text-espresso">Marketplace:</span>
              <div className="flex items-center gap-2 font-semibold flex-wrap">
                <span className="px-3 py-1 rounded-full bg-[#EE4D2D] text-white text-[11px] font-bold shadow-sm">Shopee</span>
                <span className="px-3 py-1 rounded-full bg-[#03AC0E] text-white text-[11px] font-bold shadow-sm">Tokopedia</span>
                <span className="px-3 py-1 rounded-full bg-black text-white text-[11px] font-bold shadow-sm">TikTok Shop</span>
                <span className="px-3 py-1 rounded-full bg-[#0F146D] text-white text-[11px] font-bold shadow-sm">Lazada</span>
              </div>
            </div>
          </div>

          {/* Right Editorial 3D Showcase Frame (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Fashion Editorial Frame with 3D Card Shadow */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-espresso shadow-3d-card bg-vanilla">
                <Image
                  src={heroImage}
                  alt="Inspirasi kurasi Recommendation by Ze"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />

                {/* Floating Bottom Card Inside Photo */}
                <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-vanilla/95 backdrop-blur-md shadow-lg border-2 border-espresso text-espresso">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-matcha-600">
                        KOLEKSI PILIHAN ZE
                      </span>
                      <h4 className="font-editorial text-sm font-bold text-espresso">
                        Daily Aesthetic & Lookbook
                      </h4>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-butter-400 text-espresso border border-espresso">
                      100% Real ✨
                    </span>
                  </div>
                </div>
              </div>

              {/* 3D Floating Sticker Top Right */}
              <div className="absolute -top-4 -right-4 sm:-right-5 bg-vanilla p-3 rounded-2xl shadow-float border-2 border-espresso flex items-center gap-2.5 float-3d">
                <div className="w-9 h-9 rounded-full bg-matcha-400 flex items-center justify-center border border-espresso">
                  <Sparkles className="w-5 h-5 text-espresso" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-espresso-100 font-bold">Kurasi Pilihan</p>
                  <p className="text-xs font-extrabold text-espresso">Anti Gagal ✨</p>
                </div>
              </div>

              {/* 3D Floating Sticker Bottom Left */}
              <div className="absolute -bottom-4 -left-4 sm:-left-5 bg-butter-400 p-3 rounded-2xl shadow-float border-2 border-espresso flex items-center gap-2.5 float-3d">
                <span className="text-xl">🛹</span>
                <div className="text-left">
                  <p className="text-[10px] text-espresso font-bold">All-Gender Fit</p>
                  <p className="text-xs font-extrabold text-espresso">Streetwear & Clean 🔥</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
