"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ShoppingBag, ArrowRight, Check, MapPin, Heart } from "lucide-react";
import { formatRupiah } from "@/lib/utils";
import { triggerConfetti } from "@/lib/confetti";
import { useToast } from "@/context/ToastContext";

interface OccasionScenario {
  id: string;
  title: string;
  emoji: string;
  locationTag: string;
  vibeSummary: string;
  aestheticTip: string;
  pieces: {
    slot: string;
    name: string;
    price: number;
    image: string;
    affiliateUrl: string;
  }[];
}

const OCCASIONS: OccasionScenario[] = [
  {
    id: "cafe-wfc",
    title: "Nongkrong Cafe / WFC",
    emoji: "☕",
    locationTag: "Coffee Shop & Co-Working",
    vibeSummary: "Santai, adem ber-AC, muat laptop, tapi tetap eye-catching saat foto ootd di cermin cafe.",
    aestheticTip: "Kemeja linen oversized dijadikan outer di atas kaos polos, padukan dengan tote bag kanvas tebal 16oz.",
    pieces: [
      {
        slot: "Outer",
        name: "Oversized Soft Linen Shirt - Ivory Off-White",
        price: 135000,
        image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        slot: "Bawahan",
        name: "Baggy Straight Pants Charcoal Grey",
        price: 145000,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        slot: "Sepatu",
        name: "Retro Suede Gumsole Skate Sneakers",
        price: 239000,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        slot: "Tas",
        name: "Heavy Canvas 16oz Multi-Pocket Laptop Tote Bag",
        price: 125000,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
    ],
  },
  {
    id: "first-date",
    title: "First Date Malam Minggu",
    emoji: "💘",
    locationTag: "Dinner, Bioskop & Walk",
    vibeSummary: "Rapi tanpa terlihat kaku, siluet berkelas, dan aroma santal yang bikin doi betah deketan.",
    aestheticTip: "Gunakan chunky penny loafers dan semprotan parfum woody santal di titik nadi pergelangan dan leher.",
    pieces: [
      {
        slot: "Outer / Atasan",
        name: "Vintage Relaxed Corduroy Overshirt Jacket",
        price: 175000,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://tokopedia.com",
      },
      {
        slot: "Bawahan",
        name: "Wide-Leg Highwaist Trousers Ivory",
        price: 135000,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        slot: "Sepatu",
        name: "Classic Chunky Lug Penny Loafers - Black",
        price: 198000,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        slot: "Parfum",
        name: "Woody Santal & Smoked Bergamot Unisex EDP",
        price: 135000,
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
    ],
  },
  {
    id: "ngampus",
    title: "Kuliah Pagi / Ngampus",
    emoji: "🎓",
    locationTag: "Gedung Kuliah & Perpustakaan",
    vibeSummary: "Dosen-friendly, anti ribet, nyaman buat jalan bolak-balik tangga kampus seharian.",
    aestheticTip: "Kaos boxy tebal 235gsm dipadu celana parachute cargo dengan toggle dan dad cap pudar.",
    pieces: [
      {
        slot: "Atasan",
        name: "Heavyweight Boxy Fit Tee 235gsm - Washed Charcoal",
        price: 119000,
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        slot: "Bawahan",
        name: "Relaxed Parachute Cargo Pants - Sand Khaki",
        price: 145000,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shop.tiktok.com",
      },
      {
        slot: "Sepatu",
        name: "Retro Suede Gumsole Skate Sneakers",
        price: 239000,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        slot: "Aksesori",
        name: "Vintage Washed Cotton Baseball Dad Cap",
        price: 58000,
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://lazada.co.id",
      },
    ],
  },
  {
    id: "konser-gigs",
    title: "Konser Musik & Gigs",
    emoji: "🎸",
    locationTag: "Festival Outdoor & Live House",
    vibeSummary: "Siap loncat di moshpit, anti gerah, dan siluet skena yang tetap stand out di foto crowd.",
    aestheticTip: "Pilih derby shoes dengan lug tebal anti-slip atau sneakers karet agar kaki tidak terinjak.",
    pieces: [
      {
        slot: "Atasan",
        name: "Heavyweight Boxy Fit Tee 235gsm Washed",
        price: 119000,
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        slot: "Bawahan",
        name: "Relaxed Parachute Cargo Pants with Toggle",
        price: 145000,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shop.tiktok.com",
      },
      {
        slot: "Sepatu",
        name: "Classic 3-Eyelet Matte Leather Derby Shoes",
        price: 219000,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://tokopedia.com",
      },
      {
        slot: "Grooming",
        name: "Matte Texture Styling Hair Clay 80g",
        price: 68000,
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
    ],
  },
  {
    id: "hujan-dingin",
    title: "Musim Hujan / Sore Dingin",
    emoji: "🌧️",
    locationTag: "Cuaca Mendung & Sore Hari",
    vibeSummary: "Hangat, nyaman, bahan fleece tebal tanpa bikin gatal, siluet aesthetic effortless.",
    aestheticTip: "Gunakan hoodie fleece tebal 330gsm tanpa tali untuk look yang bersih dan modern.",
    pieces: [
      {
        slot: "Atasan",
        name: "Drop-Shoulder Boxy Heavyweight Fleece Hoodie",
        price: 189000,
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shop.tiktok.com",
      },
      {
        slot: "Bawahan",
        name: "Baggy Straight Pants Charcoal Grey",
        price: 145000,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        slot: "Sepatu",
        name: "Classic Chunky Lug Penny Loafers - Black",
        price: 198000,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
      {
        slot: "Aksesori",
        name: "Minimalist Leather Cardholder Lanyard - Black",
        price: 49000,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop",
        affiliateUrl: "https://shopee.co.id",
      },
    ],
  },
];

export function OutfitOccasionSection() {
  const [selectedId, setSelectedId] = useState<string>("cafe-wfc");
  const { showToast } = useToast();

  const activeOccasion = OCCASIONS.find((o) => o.id === selectedId) || OCCASIONS[0];
  const setTotal = activeOccasion.pieces.reduce((acc, p) => acc + p.price, 0);

  return (
    <section className="py-16 bg-vanilla border-t-3 border-espresso overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt text-vanilla text-xs font-black shadow-brutal-sm -rotate-1 mb-2 border-2 border-espresso">
              <MapPin className="w-4 h-4 text-coral" />
              <span>MAU KE MANA HARI INI? 🎯</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-espresso">
              Kurasi Outfit Berdasarkan Momen & Aktivitas
            </h2>
            <p className="text-sm text-espresso-100 mt-1 max-w-xl">
              Nggak perlu pusing mikir dresscode. Pilih agenda kamu hari ini, Ze langsung racikkan 1 set outfit yang anti salah kostum:
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-espresso text-xs font-black text-espresso shadow-brutal-sm self-start md:self-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-coral animate-ping" />
            <span>Total 1 Set: {formatRupiah(setTotal)}</span>
          </div>
        </div>

        {/* Occasion Selection Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {OCCASIONS.map((occ) => {
            const isActive = selectedId === occ.id;
            return (
              <button
                key={occ.id}
                type="button"
                onClick={(e) => {
                  setSelectedId(occ.id);
                  triggerConfetti(e.clientX, e.clientY);
                }}
                className={`p-3.5 rounded-2xl border-2 text-left transition-all tap-bounce flex flex-col justify-between ${
                  isActive
                    ? "bg-coral text-espresso border-espresso shadow-brutal scale-105"
                    : "bg-white text-espresso border-espresso/20 hover:border-espresso hover:shadow-brutal-sm"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{occ.emoji}</span>
                  {isActive && <span className="w-2.5 h-2.5 rounded-full bg-espresso animate-pulse" />}
                </div>
                <div className="mt-2">
                  <h4 className="font-black text-xs sm:text-sm leading-tight">
                    {occ.title}
                  </h4>
                  <span className="text-[10px] font-semibold opacity-80 block truncate mt-0.5">
                    {occ.locationTag}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Occasion Showcase Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-4 border-espresso shadow-brutal-lg space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b-2 border-espresso/15">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-cobalt">
                FORMULA DRESSCODE ZE • {activeOccasion.locationTag}
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-espresso">
                {activeOccasion.title} Fit
              </h3>
              <p className="text-xs text-espresso-100 mt-1 max-w-xl">
                {activeOccasion.vibeSummary}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-vanilla border-2 border-espresso max-w-md text-xs text-espresso">
              💡 <strong>Tips Styling Ze:</strong> {activeOccasion.aestheticTip}
            </div>
          </div>

          {/* 4 Pieces Showcase */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {activeOccasion.pieces.map((piece, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border-2 border-espresso bg-vanilla/40 overflow-hidden flex flex-col justify-between hover:shadow-brutal-sm transition-all"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-softgray border-b-2 border-espresso">
                  <Image
                    src={piece.image}
                    alt={piece.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-cobalt text-vanilla text-[9px] font-black border border-espresso">
                    {piece.slot}
                  </span>
                </div>

                <div className="p-3 space-y-1.5 flex flex-col justify-between flex-1">
                  <div>
                    <h5 className="text-xs font-bold text-espresso line-clamp-2 leading-tight">
                      {piece.name}
                    </h5>
                    <p className="text-xs font-black text-cobalt mt-1">
                      {formatRupiah(piece.price)}
                    </p>
                  </div>

                  <a
                    href={piece.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => triggerConfetti(e.clientX, e.clientY)}
                    className="w-full py-1.5 rounded-xl bg-espresso hover:bg-coral text-vanilla hover:text-espresso font-bold text-[10px] text-center border border-espresso transition-all flex items-center justify-center gap-1 mt-2"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>Cek di Toko</span>
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

export default OutfitOccasionSection;
