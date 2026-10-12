"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Check, ArrowRight, ShieldCheck, Ruler, ShoppingBag } from "lucide-react";
import { formatRupiah } from "@/lib/utils";
import { triggerConfetti } from "@/lib/confetti";

type HeightOption = "petite" | "regular" | "tall";
type BuildOption = "slim" | "regular" | "broad";

interface StyleRule {
  formulaTitle: string;
  ruleTag: string;
  goldenRatio: string;
  avoidTips: string[];
  recommendationTips: string[];
  suggestedItems: {
    name: string;
    why: string;
    price: number;
    image: string;
    affiliateUrl: string;
  }[];
}

const STYLE_RULES: Record<string, StyleRule> = {
  "petite-slim": {
    formulaTitle: "Rule of Thirds (1:2) • Elongated Silhouette",
    ruleTag: "Petite & Slim Frame",
    goldenRatio: "1/3 Atasan : 2/3 Bawahan",
    avoidTips: [
      "Hindari kaos oversized yang terlalu panjang melebihi selangkangan (bikin kaki terlihat pendek)",
      "Hindari celana yang terlalu menumpuk tebal di pergelangan kaki",
    ],
    recommendationTips: [
      "Pilih atasan Boxy Crop Cut (jatuh pas di pinggang) untuk memperpanjang ilusi kaki",
      "Gunakan Highwaist Wide Leg Trousers dengan sepatu bersol tebal (chunky loafers / platform)",
    ],
    suggestedItems: [
      {
        name: "Korean Cable Knit Crop Cardigan - Muted Rose",
        why: "Cutting crop memberi proporsi tubuh atas tampak lebih ringkas.",
        price: 119000,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shop.tiktok.com",
      },
      {
        name: "Wide-Leg Highwaist Trousers Ivory",
        why: "Garis pinggang tinggi otomatis membuat kaki tampak lebih jenjang.",
        price: 135000,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
    ],
  },
  "regular-regular": {
    formulaTitle: "Balanced Modern Streetwear • Boxy Clean",
    ruleTag: "Proportionate Balanced Frame",
    goldenRatio: "1:1 Relaxed Balance",
    avoidTips: [
      "Hindari celana skinny jeans ketat (terlihat kuno/outdated di tren 2026)",
      "Hindari bahan sintetis panas yang mudah kusut",
    ],
    recommendationTips: [
      "Kaos heavyweight 235gsm drop shoulder memberikan bahu tegap alami",
      "Celana straight atau parachute cargo sand khaki untuk look streetwear santai",
    ],
    suggestedItems: [
      {
        name: "Heavyweight Boxy Fit Tee 235gsm - Washed Charcoal",
        why: "Jatuh kain tebal dan kaku di bahu menciptakan siluet gagah.",
        price: 119000,
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        name: "Relaxed Parachute Cargo Pants with Toggle - Sand Khaki",
        why: "Cutting lurus leluasa dengan toggle di bawah yang bisa di-adjust.",
        price: 145000,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shop.tiktok.com",
      },
    ],
  },
  "tall-broad": {
    formulaTitle: "Architectural Drape • Structured Flow",
    ruleTag: "Tall & Broad Frame",
    goldenRatio: "Longline Relaxed",
    avoidTips: [
      "Hindari motif horizontal yang terlalu ramai di bagian dada",
      "Hindari jaket crop yang terlalu gantung di atas pinggang",
    ],
    recommendationTips: [
      "Manfaatkan kemeja overshirt atau workwear corduroy terbuka sebagai layer",
      "Celana straight charcoal panjang dengan sepatu penny loafers chunky",
    ],
    suggestedItems: [
      {
        name: "Vintage Relaxed Corduroy Overshirt Jacket - Olive Green",
        why: "Siluet workwear memberi struktur kokoh dan berwibawa.",
        price: 175000,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://tokopedia.com",
      },
      {
        name: "Classic Chunky Lug Penny Loafers - Black",
        why: "Sol lug kokoh menyeimbangkan tubuh jenjang dan tinggi.",
        price: 198000,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
    ],
  },
};

export function BodyProportionAdvisor() {
  const [height, setHeight] = useState<HeightOption>("regular");
  const [build, setBuild] = useState<BuildOption>("regular");

  const key = `${height}-${build}`;
  const rule = STYLE_RULES[key] || STYLE_RULES["regular-regular"];

  return (
    <section className="py-16 bg-vanilla border-t-3 border-espresso overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coral text-espresso text-xs font-black shadow-brutal-sm -rotate-1 mb-2 border-2 border-espresso">
              <Ruler className="w-4 h-4" />
              <span>ANTI SALAH UKURAN • BODY PROPORTION ADVISOR 📏</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-espresso">
              Formula Cutting Pakaian Sesuai Postur Tubuh
            </h2>
            <p className="text-sm text-espresso-100 mt-1 max-w-xl">
              Takut baju kedodoran atau bikin badan terlihat pendek? Masukkan profil posturmu, Ze berikan rumus cutting outfit yang paling bikin kamu percaya diri:
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-espresso text-xs font-black text-espresso shadow-brutal-sm self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-cobalt" />
            <span>Formula Proporsi 100% Tested ✨</span>
          </div>
        </div>

        {/* Interactive Controls (Height & Build) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Height Selector */}
          <div className="p-4 rounded-2xl bg-white border-2 border-espresso shadow-sm space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-espresso block">
              1. Tinggi Badan Kamu:
            </span>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { id: "petite", label: "< 165 cm", sub: "Petite / Compact" },
                { id: "regular", label: "165 - 175 cm", sub: "Proporsional" },
                { id: "tall", label: "> 175 cm", sub: "Tinggi / Jenjang" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={(e) => {
                    setHeight(opt.id as HeightOption);
                    triggerConfetti(e.clientX, e.clientY);
                  }}
                  className={`p-2.5 rounded-xl border-2 text-center transition-all ${
                    height === opt.id
                      ? "bg-cobalt text-vanilla border-espresso font-black shadow-brutal-sm"
                      : "bg-vanilla text-espresso border-espresso/20 hover:border-espresso font-semibold"
                  }`}
                >
                  <p className="text-xs font-bold">{opt.label}</p>
                  <p className="text-[10px] opacity-75">{opt.sub}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Build Selector */}
          <div className="p-4 rounded-2xl bg-white border-2 border-espresso shadow-sm space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-espresso block">
              2. Tipe Siluet Tubuh:
            </span>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { id: "slim", label: "Kurus / Slim", sub: "Ramping" },
                { id: "regular", label: "Standar", sub: "Normal" },
                { id: "broad", label: "Berisi / Bahu Lebar", sub: "Gagah / Curvy" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={(e) => {
                    setBuild(opt.id as BuildOption);
                    triggerConfetti(e.clientX, e.clientY);
                  }}
                  className={`p-2.5 rounded-xl border-2 text-center transition-all ${
                    build === opt.id
                      ? "bg-coral text-espresso border-espresso font-black shadow-brutal-sm"
                      : "bg-vanilla text-espresso border-espresso/20 hover:border-espresso font-semibold"
                  }`}
                >
                  <p className="text-xs font-bold">{opt.label}</p>
                  <p className="text-[10px] opacity-75">{opt.sub}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Result Recommendation Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-4 border-espresso shadow-brutal-lg space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b-2 border-espresso/15">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-cobalt">
                FORMULA PROPORSI ZE • {rule.ruleTag}
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-espresso">
                {rule.formulaTitle}
              </h3>
            </div>
            <span className="px-3.5 py-1 rounded-full bg-vanilla text-espresso text-xs font-black border-2 border-espresso shadow-sm">
              Golden Ratio: {rule.goldenRatio}
            </span>
          </div>

          {/* Tips Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Do's */}
            <div className="p-4 rounded-2xl bg-green-50 border-2 border-green-800/30 space-y-2">
              <span className="font-black text-green-800 uppercase tracking-wider block">
                ✅ REKOMENDASI CUTTING UNTUKMU:
              </span>
              <ul className="space-y-1.5 text-espresso/90 font-medium">
                {rule.recommendationTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-700 flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Don'ts */}
            <div className="p-4 rounded-2xl bg-red-50 border-2 border-red-800/30 space-y-2">
              <span className="font-black text-red-800 uppercase tracking-wider block">
                ❌ HINDARI CUTTING INI:
              </span>
              <ul className="space-y-1.5 text-espresso/90 font-medium">
                {rule.avoidTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-600 font-black">✕</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Curated Matching Items */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-espresso mb-3">
              BARANG KURASI ZE YANG POTONGANNYA PAS UNTUK POSTURMU:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rule.suggestedItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl border-2 border-espresso bg-vanilla flex items-center gap-4 hover:shadow-brutal-sm transition-all"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-espresso flex-shrink-0 bg-white">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <h5 className="font-bold text-xs text-espresso truncate">
                      {item.name}
                    </h5>
                    <p className="text-[11px] text-espresso/80 line-clamp-2 leading-tight">
                      {item.why}
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-black text-cobalt">
                        {formatRupiah(item.price)}
                      </span>
                      <a
                        href={item.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => triggerConfetti(e.clientX, e.clientY)}
                        className="px-3 py-1 rounded-full bg-espresso hover:bg-coral text-vanilla hover:text-espresso font-bold text-[10px] border border-espresso transition-all flex items-center gap-1"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Beli</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BodyProportionAdvisor;
