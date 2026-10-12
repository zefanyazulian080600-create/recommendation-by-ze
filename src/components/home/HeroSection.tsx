"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, ShoppingBag, Heart } from "lucide-react";
import { SiteSettings } from "@/types";

interface HeroSectionProps {
  settings?: SiteSettings;
}

export function HeroSection({ settings }: HeroSectionProps) {
  const headline = settings?.hero_headline || "Curated Finds for Your Everyday Aesthetic.";
  const subheadline =
    settings?.hero_subheadline ||
    "Rekomendasi terbaik belanja online shop pilihan Ze: mulai dari fashion & outfit, skincare viral, perintilan aesthetic, sampai gadget setup favorit.";
  const heroImage =
    settings?.hero_image ||
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop";

  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24">
      {/* Soft gradient background accents */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blush-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-rose-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-softgray-border shadow-sm text-xs font-semibold text-charcoal">
              <Sparkles className="w-3.5 h-3.5 text-rose animate-spin-slow" />
              <span>Kurasi Online Shop Pilihan Ze • Update 2026</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-charcoal leading-[1.12]">
              {headline}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-charcoal-200 leading-relaxed max-w-xl font-normal">
              {subheadline}
            </p>

            {/* CTAs Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-charcoal text-white text-sm font-semibold hover:bg-rose transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Jelajahi Semua Produk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#zes-picks"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-softgray-border text-charcoal text-sm font-semibold hover:bg-softgray hover:border-charcoal-50 transition-all shadow-sm"
              >
                <Heart className="w-4 h-4 text-rose" />
                <span>Lihat Pilihan Ze</span>
              </Link>
            </div>

            {/* Marketplace badges mini-strip */}
            <div className="pt-4 flex items-center gap-3 text-xs text-charcoal-50">
              <span className="font-medium text-charcoal-100">Marketplace:</span>
              <div className="flex items-center gap-2 font-medium flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EE4D2D]/10 text-[#EE4D2D]">Shopee</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#03AC0E]/10 text-[#03AC0E]">Tokopedia</span>
                <span className="px-2.5 py-0.5 rounded-full bg-black/10 text-black">TikTok Shop</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#0F146D]/10 text-[#0F146D]">Lazada</span>
              </div>
            </div>
          </div>

          {/* Right Editorial Image Grid (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Fashion Editorial Frame */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={heroImage}
                  alt="Inspirasi kurasi Recommendation by Ze"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />

                {/* Floating Bottom Card Inside Photo */}
                <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/50 text-charcoal">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose">
                        Koleksi Baru
                      </span>
                      <h4 className="font-editorial text-sm font-semibold">
                        Aesthetic Mood & Daily Looks
                      </h4>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blush-200 text-charcoal">
                      100% Curated
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Pill */}
              <div className="absolute -top-3 -right-3 sm:-right-5 bg-white p-3 rounded-2xl shadow-float border border-softgray-border flex items-center gap-2 animate-bounce-slow">
                <div className="w-8 h-8 rounded-full bg-blush-200 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-rose" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-charcoal-50 font-medium">Kurasi Pilihan</p>
                  <p className="text-xs font-bold text-charcoal">Anti Gagal ✨</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
