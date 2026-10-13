"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Play, Star, ShieldCheck, Zap, Laptop, Home, Heart, Flame } from "lucide-react";
import { SiteSettings } from "@/types";
import { useUser } from "@/context/UserContext";

interface HeroSectionProps {
  settings?: SiteSettings;
}

export function HeroSection({ settings }: HeroSectionProps) {
  const { userName, userVibe, openModal } = useUser();
  const headline = settings?.hero_headline || "Kurasi Racun Belanja Online Shop Paling Worth It.";
  const subheadline =
    settings?.hero_subheadline ||
    "Rekomendasi terbaik belanja online shop pilihan Ze: outfit streetwear & kalcer, kemeja boxy, batik modern, tumbler aesthetic, parfum, sampai racun viral Shopee terkurasi 100% independen.";
  const heroImage =
    settings?.hero_image ||
    "https://down-id.img.susercontent.com/file/id-11134207-7rbke-ma7vs1c79of1c0";

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 bg-[#090A0F] text-white">
      {/* Subtle ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-sky-500/10 to-purple-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Text Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Tag */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-medium text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>CURATED OL SHOP • GADGET, ROOM, SKINCARE & STYLE ✦</span>
              </div>

              {userName ? (
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-bold text-emerald-300 hover:bg-emerald-500/25 transition-all"
                  title="Klik untuk ubah nama atau preferensi kamu"
                >
                  <Zap className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                  <span>VIP Pass: {userName} ({userVibe})</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Personalisasi Nama ✨</span>
                </button>
              )}
            </div>

            {/* Editorial Headline */}
            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.12]">
              {userName ? `Yo ${userName}, ` : ""}
              {headline}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl font-normal">
              {subheadline}
            </p>

            {/* Universal Category Badges */}
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              {[
                { label: "🎧 Tech & Gadget", href: "/products?category=desk-setup-gadget" },
                { label: "🏠 Kamar Estetik", href: "/products?category=aesthetic-room" },
                { label: "🧴 Skincare Viral", href: "/products?category=skincare-grooming" },
                { label: "👕 Daily Wear", href: "/products?category=outfit-pria" },
                { label: "⚡ Viral TikTok", href: "/products?sort=trending" },
                { label: "💸 Under 50k", href: "/products?price=under-50k" },
              ].map((badge) => (
                <Link
                  key={badge.label}
                  href={badge.href}
                  className="px-3 py-1.5 rounded-xl bg-[#12131A] border border-white/10 text-zinc-300 hover:text-white hover:border-emerald-400/40 text-xs font-semibold transition-all"
                >
                  {badge.label}
                </Link>
              ))}
            </div>

            {/* Fast Bio Numbers Strip */}
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                ⚡ Fast Bio Spill:
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {["#01", "#03", "#07", "#09", "#12", "#18"].map((no) => (
                  <Link
                    key={no}
                    href={`/products?search=${encodeURIComponent(no)}`}
                    className="px-2.5 py-1 rounded-md bg-[#12131A] border border-white/10 text-white font-mono text-xs font-bold hover:border-emerald-400 hover:text-emerald-400 transition-all"
                  >
                    {no}
                  </Link>
                ))}
              </div>
            </div>

            {/* Clean Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-all shadow-xl hover:scale-[1.02]"
              >
                <span>Eksplor Racun Ol Shop 🛍️</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
              <Link
                href="#curated-hub"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#12131A] border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-all"
              >
                <Zap className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>Discovery Hub ⚡</span>
              </Link>
            </div>

            {/* Social Proof Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-zinc-400 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">4.9 / 5.0</span>
                <span className="text-zinc-500">(15k+ Pengunjung)</span>
              </div>

              <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Toko Terverifikasi Star / Mall</span>
              </div>
            </div>
          </div>

          {/* Right Editorial Showcase Frame (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#12131A]">
                <Image
                  src={heroImage}
                  alt="Inspirasi kurasi Recommendation by Ze"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Floating Bottom Card Inside Photo */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-[#090A0F]/90 backdrop-blur-md border border-white/15 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                        UNIVERSAL SELECTION
                      </span>
                      <h4 className="font-sans text-sm font-bold text-white">
                        Curated Online Shop Archive
                      </h4>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Real Spill ✨
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge Top Right */}
              <div className="absolute -top-3 -right-3 bg-[#12131A] p-3 rounded-xl shadow-2xl border border-white/15 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-zinc-400">Kurasi Pilihan</p>
                  <p className="text-xs font-bold text-white">Anti Zonk ✦</p>
                </div>
              </div>

              {/* Floating Badge Bottom Left */}
              <div className="absolute -bottom-3 -left-3 bg-[#12131A] p-3 rounded-xl shadow-2xl border border-white/15 flex items-center gap-2.5">
                <span className="text-xl">🎧</span>
                <div className="text-left">
                  <p className="text-[10px] text-zinc-400">Semua Kategori</p>
                  <p className="text-xs font-bold text-white">Tech, Room, Care & Style</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
