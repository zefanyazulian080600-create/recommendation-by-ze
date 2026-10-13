"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Sun, CloudRain, Wind, ShoppingBag, Thermometer, Check } from "lucide-react";
import { formatRupiah } from "@/lib/utils";
import { triggerConfetti } from "@/lib/confetti";

type WeatherMode = "hot" | "rainy" | "ac";

interface WeatherPreset {
  id: WeatherMode;
  label: string;
  icon: typeof Sun;
  tempBadge: string;
  desc: string;
  fabricTips: string;
  items: {
    name: string;
    feature: string;
    price: number;
    image: string;
    affiliateUrl: string;
  }[];
}

const WEATHER_PRESETS: WeatherPreset[] = [
  {
    id: "hot",
    label: "Siang Terik / Panas Tropis",
    icon: Sun,
    tempBadge: "31°C - 35°C • Outdoor Panas",
    desc: "Bahan breathable adem, menyerap keringat maksimal, tidak bikin gerah atau bau apek saat beraktivitas di luar ruangan.",
    fabricTips: "Pilih kain katun combed 24s/16s breathable dan linen blend. Jangan lupa sunscreen SPF50+ dan topi dad cap.",
    items: [
      {
        name: "Kaos The Stone Roses Motif Band Casual",
        feature: "Katun adem breathable nyaman cuaca panas",
        price: 35000,
        image: "https://down-id.img.susercontent.com/file/id-11134207-81zte-mrmobyywim0x8d",
        affiliateUrl: "https://s.shopee.co.id/gQoA4YQHJ",
      },
      {
        name: "BOARSHORT Parasut Skena Kalcer Reflektif",
        feature: "Kain parasut ringan anti gerah cepat kering",
        price: 37000,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lu8d50u87n1t41",
        affiliateUrl: "https://s.shopee.co.id/4B0gKVL6BA",
      },
      {
        name: "MODOFO Vacuum Tumbler Stainless 1.2L",
        feature: "Menjaga air es dingin beku hingga 24 jam",
        price: 79000,
        image: "https://down-id.img.susercontent.com/file/id-11134207-822wo-mo56kw6syiva82",
        affiliateUrl: "https://s.shopee.co.id/4fwwvQJCBE",
      },
      {
        name: "VALANGKIN RAYNER BLW Sneakers Old Ace Blue",
        feature: "Insole empuk buat mobilitas jalan kaki santai",
        price: 189000,
        image: "https://down-id.img.susercontent.com/file/id-11134207-8224p-mjgix6g7124kd5",
        affiliateUrl: "https://s.shopee.co.id/3g4PjaN0CB",
      },
    ],
  },
  {
    id: "rainy",
    label: "Malam Dingin / Musim Hujan",
    icon: CloudRain,
    tempBadge: "22°C - 26°C • Angin & Hujan",
    desc: "Bahan hangat tebal, windproof, dan tahan air saat cuaca gerimis atau terpaan angin malam.",
    fabricTips: "Pilih jaket taslan JN tahan air, windbreaker parasut, dan celana kargo tebal.",
    items: [
      {
        name: "CREDIFOX Jaket Gunung Gorpcore Seri CLIMBER",
        feature: "Bahan taslan JN premium waterproof & windproof",
        price: 210600,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7rbke-ma7vs1c79of1c0",
        affiliateUrl: "https://s.shopee.co.id/1BN4kzWWGQ",
      },
      {
        name: "Fairgoods Tracksuit Jacket Line Dune Black",
        feature: "Melindungi dari angin malam dengan look retro sporty",
        price: 179000,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7rasl-m1wj4345qszbe1",
        affiliateUrl: "https://s.shopee.co.id/W7NxlZ3cM",
      },
      {
        name: "SUYX Celana Cargo Pants pria Loose Outdoor",
        feature: "Bahan tebal kokoh dengan banyak saku fungsional",
        price: 166000,
        image: "https://down-id.img.susercontent.com/file/id-11134207-822wr-mlh4p3jvnqbl46",
        affiliateUrl: "https://s.shopee.co.id/30oiwMPXY7",
      },
      {
        name: "WESTGODS Jacket Retro Vintage Bahan Parasut",
        feature: "Windbreaker retro vintage tahan terpaan angin",
        price: 115000,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lvbctc5eox511c",
        affiliateUrl: "https://s.shopee.co.id/3B898fOuD8",
      },
    ],
  },
  {
    id: "ac",
    label: "Ruangan AC Kampus & Kantor",
    icon: Wind,
    tempBadge: "19°C - 23°C • AC Dingin Seharian",
    desc: "Outfit layering hangat yang tetap rapi, nyaman, dan estetik untuk kuliah maupun kerja seharian di ruangan ber-AC.",
    fabricTips: "Gunakan sweater rajut tebal, rugby crewneck, atau workshirt zipper dipadu celana baggy denim.",
    items: [
      {
        name: "OVRDZ Sweater Crewneck Rugby Sweatshirt Bordir",
        feature: "Bahan fleece tebal lembut berkerah polo rapi",
        price: 103400,
        image: "https://down-id.img.susercontent.com/file/id-11134207-822wn-mpp9l1o8r30h6d",
        affiliateUrl: "https://s.shopee.co.id/113eYgX9bP",
      },
      {
        name: "HIGHTY Off White Cable-Knit Sweater",
        feature: "Rajut kepang tebal premium hangat seharian",
        price: 291600,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7rasa-m3h7h3ad4k6p44",
        affiliateUrl: "https://s.shopee.co.id/LnxlSZgxL",
      },
      {
        name: "EDINAL Workshirt Zipper Black Boxy DO NOT BE",
        feature: "Katun drill kokoh berkerah rapi dengan resleting zipper",
        price: 77500,
        image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0m-mbac375f32c920",
        affiliateUrl: "https://s.shopee.co.id/1B7MqaxdF",
      },
      {
        name: "Suyboy Celana Jeans pria Baggy Denim Wide Leg",
        feature: "Potongan gombrong nyaman untuk duduk berjam-jam",
        price: 166000,
        image: "https://down-id.img.susercontent.com/file/id-11134207-82251-mh4q8t5dskk157",
        affiliateUrl: "https://s.shopee.co.id/3VkzXHNdX6",
      },
    ],
  },
];

export function WeatherOutfitSection() {
  const [activeMode, setActiveMode] = useState<WeatherMode>("hot");
  const currentPreset = WEATHER_PRESETS.find((p) => p.id === activeMode) || WEATHER_PRESETS[0];

  return (
    <section className="py-16 bg-vanilla border-t-3 border-espresso overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coral text-espresso text-xs font-black shadow-brutal-sm -rotate-1 mb-2 border-2 border-espresso">
              <Thermometer className="w-4 h-4" />
              <span>WEATHER & COMFORT ADVISOR ☀️🌧️</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-espresso">
              Outfit Nyaman Sesuai Suhu & Cuaca Hari Ini
            </h2>
            <p className="text-sm text-espresso-100 mt-1 max-w-xl">
              Gak perlu kepanasan atau kedinginan. Pilih kondisi cuaca hari ini untuk melihat rekomendasi bahan pakaian yang paling nyaman dipakai:
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-espresso text-xs font-black text-espresso shadow-brutal-sm self-start md:self-auto">
            <span>{currentPreset.tempBadge}</span>
          </div>
        </div>

        {/* Weather Mode Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {WEATHER_PRESETS.map((preset) => {
            const Icon = preset.icon;
            const isActive = activeMode === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={(e) => {
                  setActiveMode(preset.id);
                  triggerConfetti(e.clientX, e.clientY);
                }}
                className={`p-4 rounded-2xl border-2 text-left transition-all tap-bounce flex items-center gap-3.5 ${
                  isActive
                    ? "bg-cobalt text-vanilla border-espresso shadow-brutal scale-102"
                    : "bg-white text-espresso border-espresso/20 hover:border-espresso hover:shadow-brutal-sm"
                }`}
              >
                <div className={`p-2.5 rounded-xl border border-espresso ${isActive ? "bg-coral text-espresso" : "bg-vanilla text-cobalt"}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-sm">{preset.label}</h4>
                  <span className={`text-[10px] font-semibold block mt-0.5 ${isActive ? "text-coral" : "text-espresso/60"}`}>
                    {preset.tempBadge.split("•")[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Content Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-4 border-espresso shadow-brutal-lg space-y-6">
          <div className="p-4 rounded-2xl bg-vanilla border-2 border-espresso flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
            <div>
              <p className="font-bold text-espresso leading-snug">{currentPreset.desc}</p>
              <p className="text-espresso/80 mt-1">
                💡 <strong>Rekomendasi Bahan Ze:</strong> {currentPreset.fabricTips}
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-coral text-espresso font-black border border-espresso flex-shrink-0 self-start md:self-auto">
              100% Anti Gerah & Nyaman
            </span>
          </div>

          {/* 4 Items Showcase */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {currentPreset.items.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border-2 border-espresso bg-vanilla/40 overflow-hidden flex flex-col justify-between hover:shadow-brutal-sm transition-all"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-softgray border-b-2 border-espresso">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-3 space-y-1.5 flex flex-col justify-between flex-1">
                  <div>
                    <h5 className="text-xs font-bold text-espresso line-clamp-2 leading-tight">
                      {item.name}
                    </h5>
                    <p className="text-[10px] text-espresso/70 line-clamp-2 leading-tight mt-0.5">
                      {item.feature}
                    </p>
                    <p className="text-xs font-black text-cobalt mt-1.5">
                      {formatRupiah(item.price)}
                    </p>
                  </div>

                  <a
                    href={item.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => triggerConfetti(e.clientX, e.clientY)}
                    className="w-full py-1.5 rounded-xl bg-espresso hover:bg-coral text-vanilla hover:text-espresso font-bold text-[10px] text-center border border-espresso transition-all flex items-center justify-center gap-1 mt-2"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>Beli</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeatherOutfitSection;
