"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Play, Heart, Star, CheckCircle, ShieldCheck } from "lucide-react";
import { SiteSettings } from "@/types";

interface HeroSectionProps {
  settings?: SiteSettings;
}

export function HeroSection({ settings }: HeroSectionProps) {
  const headline = settings?.hero_headline || "Curated Finds for Your Everyday Aesthetic.";
  const subheadline =
    settings?.hero_subheadline ||
    "Rekomendasi terbaik belanja online shop pilihan Ze: outfit kece, skincare viral, perintilan aesthetic, sampai gadget setup favorit yang beneran worth it dibeli.";
  const heroImage =
    settings?.hero_image ||
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop";

  return (
    <section className="relative overflow-hidden pt-6 pb-14 md:pt-10 md:pb-20">
      {/* Soft gradient background accents */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blush-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-rose-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-softgray-border shadow-sm text-xs font-semibold text-charcoal">
              <span className="w-2 h-2 rounded-full bg-rose animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-rose" />
              <span>Spill Racun Ol Shop & OOTD 2026 • Curated by Ze</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-charcoal leading-[1.14]">
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
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-charcoal text-white text-sm font-semibold hover:bg-rose transition-all shadow-md hover:shadow-lg tap-bounce"
              >
                <span>Mulai Eksplorasi Racun</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#video-reels"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-softgray-border text-charcoal text-sm font-semibold hover:bg-softgray hover:border-charcoal-50 transition-all shadow-sm tap-bounce"
              >
                <Play className="w-4 h-4 text-rose fill-rose" />
                <span>Tonton Video Spill</span>
              </Link>
            </div>

            {/* Social Proof & Metrics Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-charcoal-200 border-t border-softgray">
              {/* Star Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="font-bold text-charcoal">4.9 / 5.0</span>
                <span className="text-charcoal-50">(10k+ readers)</span>
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-1.5 text-charcoal font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Link Toko Asli & Terverifikasi</span>
              </div>
            </div>

            {/* Marketplace badges mini-strip */}
            <div className="flex items-center gap-2.5 text-xs text-charcoal-50 flex-wrap">
              <span className="font-semibold text-charcoal">Tersedia di:</span>
              <div className="flex items-center gap-2 font-medium flex-wrap">
                <span className="px-2.5 py-1 rounded-full bg-[#EE4D2D]/10 text-[#EE4D2D] font-bold">Shopee</span>
                <span className="px-2.5 py-1 rounded-full bg-[#03AC0E]/10 text-[#03AC0E] font-bold">Tokopedia</span>
                <span className="px-2.5 py-1 rounded-full bg-black/10 text-black font-bold">TikTok Shop</span>
                <span className="px-2.5 py-1 rounded-full bg-[#0F146D]/10 text-[#0F146D] font-bold">Lazada</span>
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
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />

                {/* Floating Bottom Card Inside Photo */}
                <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl glass-pill shadow-lg border border-white/50 text-charcoal">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rose">
                        Koleksi Baru 2026
                      </span>
                      <h4 className="font-editorial text-sm font-semibold text-charcoal">
                        Aesthetic Mood & Daily Looks
                      </h4>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blush-200 text-charcoal">
                      100% Curated ✨
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Pill Top Right */}
              <div className="absolute -top-3 -right-3 sm:-right-4 bg-white p-3 rounded-2xl shadow-float border border-softgray-border flex items-center gap-2.5 animate-bounce-slow">
                <div className="w-8 h-8 rounded-full bg-blush-200 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-rose" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-charcoal-50 font-medium">Kurasi Pilihan</p>
                  <p className="text-xs font-bold text-charcoal">Anti Gagal ✨</p>
                </div>
              </div>

              {/* Decorative Floating Pill Bottom Left */}
              <div className="absolute -bottom-3 -left-3 sm:-left-4 bg-white p-2.5 rounded-2xl shadow-float border border-softgray-border flex items-center gap-2">
                <span className="text-lg">👗</span>
                <div className="text-left">
                  <p className="text-[10px] text-charcoal-50 font-medium">Outfit Cewek</p>
                  <p className="text-xs font-bold text-rose">Under 150k 🔥</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
