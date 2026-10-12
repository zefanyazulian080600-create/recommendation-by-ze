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
        name: "Oversized Soft Linen Shirt - Ivory Off-White",
        feature: "Serat katun linen alami dingin berpori",
        price: 135000,
        image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        name: "Heavyweight Boxy Fit Tee 235gsm Washed",
        feature: "100% Cotton combed menyerap keringat",
        price: 119000,
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        name: "Vintage Washed Cotton Baseball Dad Cap",
        feature: "Pelindung kepala katun washed anti gerah",
        price: 58000,
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://lazada.co.id",
      },
      {
        name: "Hydrating Dewy Water Sunscreen SPF 50+",
        feature: "Perlindungan UV ringan tanpa whitecast",
        price: 89000,
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://tokopedia.com",
      },
    ],
  },
  {
    id: "rainy",
    label: "Malam Dingin / Musim Hujan",
    icon: CloudRain,
    tempBadge: "22°C - 26°C • Angin & Hujan",
    desc: "Bahan hangat tebal, windproof, dan sepatu dengan grip karet anti-licin saat jalan di trotoar atau jalanan basah.",
    fabricTips: "Heavyweight fleece 330gsm tanpa tali, kain korduroi tebal, dan sol lug TPR karet tebal anti-slip.",
    items: [
      {
        name: "Drop-Shoulder Boxy Heavyweight Fleece Hoodie",
        feature: "Fleece katun 330gsm hangat anti rontok",
        price: 189000,
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shop.tiktok.com",
      },
      {
        name: "Vintage Relaxed Corduroy Overshirt Jacket",
        feature: "Korduroi tebal melindungi dari terpaan angin",
        price: 175000,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://tokopedia.com",
      },
      {
        name: "Classic Chunky Lug Penny Loafers - Black",
        feature: "Sol lug karet anti-slip saat lantai basah",
        price: 198000,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        name: "Relaxed Parachute Cargo Pants with Toggle",
        feature: "Kain parasut cepat kering (quick-dry)",
        price: 145000,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shop.tiktok.com",
      },
    ],
  },
  {
    id: "ac",
    label: "Ruangan AC Kampus & Kantor",
    icon: Wind,
    tempBadge: "19°C - 23°C • AC Dingin Seharian",
    desc: "Layering fleksibel yang mudah dilepas-pasang saat pindah dari ruangan dingin ke luar gedung kampus.",
    fabricTips: "Gunakan knit cardigan crop atau kemeja kasual loose, dipadu celana straight trousers rapi.",
    items: [
      {
        name: "Korean Cable Knit Crop Cardigan - Muted Rose",
        feature: "Rajut kepang lembut tidak gatal",
        price: 119000,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shop.tiktok.com",
      },
      {
        name: "Baggy Straight Pants Charcoal Grey",
        feature: "Bahan semi-wool lembut tidak menerawang",
        price: 145000,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        name: "Heavy Canvas 16oz Multi-Pocket Laptop Tote Bag",
        feature: "Slot laptop busa tebal aman dibawa ke kelas",
        price: 125000,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        name: "Retro Suede Gumsole Skate Sneakers",
        feature: "Insole foam empuk buat jalan antar ruangan",
        price: 239000,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
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
