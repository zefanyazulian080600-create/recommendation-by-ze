"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Dices, ArrowRight, ShoppingBag, Heart, Check, RefreshCw, Receipt } from "lucide-react";
import { Product } from "@/types";
import { formatRupiah } from "@/lib/utils";
import { triggerConfetti } from "@/lib/confetti";
import { useToast } from "@/context/ToastContext";
import { useWishlist } from "@/context/WishlistContext";
import { AestheticReceiptModal } from "./AestheticReceiptModal";

interface OotdMixMatchStudioProps {
  products: Product[];
}

type GenderMode = "men" | "women" | "unisex" | "skena";

export function OotdMixMatchStudio({ products }: OotdMixMatchStudioProps) {
  const { showToast } = useToast();
  const { toggleWishlist } = useWishlist();
  const [genderMode, setGenderMode] = useState<GenderMode>("men");
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);

  // Curated lists per gender mode from 100 Real Shopee Products
  const outfitPresets = {
    men: {
      label: "🛹 Bro Look (Cowok)",
      tops: [
        {
          id: "m-top-1",
          name: "EDINAL Kemeja Workshirt Zipper Black Boxy",
          price: 77500,
          image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0m-mbac375f32c920",
          affiliate_url: "https://s.shopee.co.id/1B7MqaxdF",
        },
        {
          id: "m-top-2",
          name: "CREDIFOX Jaket Gunung Gorpcore Climber Taslan JN",
          price: 210600,
          image: "https://down-id.img.susercontent.com/file/id-11134207-7rbke-ma7vs1c79of1c0",
          affiliate_url: "https://s.shopee.co.id/1BN4kzWWGQ",
        },
        {
          id: "m-top-3",
          name: "Benidson Aerysm Kaos Oversized T-Shirt Polos",
          price: 79900,
          image: "https://down-id.img.susercontent.com/file/id-11134207-8224q-mh0e5fxoq51od8",
          affiliate_url: "https://s.shopee.co.id/7Kxi6K92kz",
        },
      ],
      bottoms: [
        {
          id: "m-bot-1",
          name: "Mister Bento Celana Jeans Snow Black Loose Straight",
          price: 59900,
          image: "https://down-id.img.susercontent.com/file/id-11134207-81ztj-mr66mwlzbabr2f",
          affiliate_url: "https://s.shopee.co.id/4qGN7jIYpE",
        },
        {
          id: "m-bot-2",
          name: "SUYX Celana Cargo Pants Pria Loose Reguler",
          price: 166000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-822wr-mlh4p3jvnqbl46",
          affiliate_url: "https://s.shopee.co.id/30oiwMPXY7",
        },
        {
          id: "m-bot-3",
          name: "Suyboy Celana Jeans Loose Denim Baggy Gombrong",
          price: 166000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-8224p-mi2csptjgq9z96",
          affiliate_url: "https://s.shopee.co.id/3VkzXHNdX6",
        },
      ],
      shoes: [
        {
          id: "m-shoe-1",
          name: "VALANGKIN RAYNER BLW Sneakers Old Ace Blue Retro",
          price: 189000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-8224p-mjgix6g7124kd5",
          affiliate_url: "https://s.shopee.co.id/3g4PjaN0CB",
        },
        {
          id: "m-shoe-2",
          name: "RAINGEL Sepatu Kets Lokal FORT Maroon",
          price: 245000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-7rbkd-maass3gbgehs0b",
          affiliate_url: "https://s.shopee.co.id/7AeHu19g75",
        },
      ],
      accessories: [
        {
          id: "m-acc-1",
          name: "MODOFO Tumbler Stainless Steel 710ml Tahan Dingin",
          price: 49000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-822wo-mo56kw6syiva82",
          affiliate_url: "https://s.shopee.co.id/4fwwvQJCBE",
        },
        {
          id: "m-acc-2",
          name: "Scarlite Luxury Extrait De Parfum Unisex 30ml",
          price: 13000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-822wi-mnfy30pupsshee",
          affiliate_url: "https://s.shopee.co.id/9fLcsc0A1n",
        },
      ],
    },
    women: {
      label: "👗 Sis Look (Cewek)",
      tops: [
        {
          id: "w-top-1",
          name: "One Set 3 in 1 Korean Style Blouse Rajut + Hijab SO63",
          price: 188200,
          image: "https://down-id.img.susercontent.com/file/id-11134201-7rbk7-maf4u4kgd67o83",
          affiliate_url: "https://s.shopee.co.id/3B898fOuEB",
        },
        {
          id: "w-top-2",
          name: "NANA HORSE Cardigan Rajut Kancing Polos Lembut Wanita",
          price: 74000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-822wg-moqkznswt5aj64",
          affiliate_url: "https://s.shopee.co.id/5AtDWLHIAN",
        },
        {
          id: "w-top-3",
          name: "Baju Gamis Dress Muslim Wanita Shirin Zein Thalia",
          price: 128700,
          image: "https://down-id.img.susercontent.com/file/id-11134207-81ztm-ms2dzsj9dkw62c",
          affiliate_url: "https://s.shopee.co.id/70KrhiAJR1",
        },
      ],
      bottoms: [
        {
          id: "w-bot-1",
          name: "[UNISEX] Celana Baggy Jeans Kulot Tulang Biru Premium",
          price: 56400,
          image: "https://down-id.img.susercontent.com/file/id-11134207-81zte-mtldcoxjg2knec",
          affiliate_url: "https://s.shopee.co.id/6q1RVPAwlw",
        },
        {
          id: "w-bot-2",
          name: "CELANA JEANS BAGGY PUTIH UNISEX RETRO BASIC DENIM",
          price: 60000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-822wi-mnlgkoalmcxv74",
          affiliate_url: "https://s.shopee.co.id/8pmVt53Kie",
        },
      ],
      shoes: [
        {
          id: "w-shoe-1",
          name: "Sandal EVA Tebal Anti-Selip 5CM Cloud Sandal",
          price: 48000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-8224y-mgyj3nhrp79l8d",
          affiliate_url: "https://s.shopee.co.id/9V2CgJ0nMi",
        },
        {
          id: "w-shoe-2",
          name: "Sepatu Sneakers Running Import Korea Style 38-44",
          price: 85000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-7rasf-m36b1ae8wiz319",
          affiliate_url: "https://s.shopee.co.id/1B7MqaxeG",
        },
      ],
      accessories: [
        {
          id: "w-acc-1",
          name: "MODOFO Tumbler Stainless Aesthetic 710ml Pastel",
          price: 49000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-822wo-mo56kw6syiva82",
          affiliate_url: "https://s.shopee.co.id/4fwwvQJCBE",
        },
        {
          id: "w-acc-2",
          name: "Scarlite Luxury Extrait De Parfum Unisex Sweet 30ml",
          price: 13000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-822wi-mnfy30pupsshee",
          affiliate_url: "https://s.shopee.co.id/9fLcsc0A1n",
        },
      ],
    },
    unisex: {
      label: "🧢 Unisex Streetwear",
      tops: [
        {
          id: "u-top-1",
          name: "TORQUEFIT Jersey Streetwear Number 22 Hockey Rugby Vintage",
          price: 67500,
          image: "https://down-id.img.susercontent.com/file/id-11134207-7rasf-m1whuokq2l3z19",
          affiliate_url: "https://s.shopee.co.id/2VsSLRRRZb",
        },
        {
          id: "u-top-2",
          name: "Timebomb Cardigan Knitwear Montana Oversize",
          price: 199000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-7r98z-lwfpkctylhfx1c",
          affiliate_url: "https://s.shopee.co.id/20wBkWTLaS",
        },
        {
          id: "u-top-3",
          name: "Vsl Sweater Oversize Urban Fleece Crewneck",
          price: 65600,
          image: "https://down-id.img.susercontent.com/file/id-11134207-8224t-ml6qhibkmh34be",
          affiliate_url: "https://s.shopee.co.id/7VH8Id8PQ0",
        },
      ],
      bottoms: [
        {
          id: "u-bot-1",
          name: "Trondheim Celana Denim Loose Jeans Peter Bioblitz",
          price: 230000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk0-m9ydngvc6uwr23",
          affiliate_url: "https://s.shopee.co.id/6VOb6nCDT1",
        },
        {
          id: "u-bot-2",
          name: "OSANAWEAR Celana Pria Formal Loose Pants Cream",
          price: 119900,
          image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk8-madd5p7p5lmg7e",
          affiliate_url: "https://s.shopee.co.id/8AWp5r5s4a",
        },
      ],
      shoes: [
        {
          id: "u-shoe-1",
          name: "VALANGKIN RAYNER BLW Sneakers Old Ace Blue",
          price: 189000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-8224p-mjgix6g7124kd5",
          affiliate_url: "https://s.shopee.co.id/3g4PjaN0CB",
        },
        {
          id: "u-shoe-2",
          name: "PANARYBODY Sneakers Casual Gen Z QNK8012",
          price: 265000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-8224t-micqxpl11lhie6",
          affiliate_url: "https://s.shopee.co.id/LnxlSZgyM",
        },
      ],
      accessories: [
        {
          id: "u-acc-1",
          name: "MODOFO Tumbler Stainless Vacuum 710ml",
          price: 49000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-822wo-mo56kw6syiva82",
          affiliate_url: "https://s.shopee.co.id/4fwwvQJCBE",
        },
        {
          id: "u-acc-2",
          name: "Scarlite Luxury Extrait De Parfum 30ml",
          price: 13000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-822wi-mnfy30pupsshee",
          affiliate_url: "https://s.shopee.co.id/9fLcsc0A1n",
        },
      ],
    },
    skena: {
      label: "🎸 Skena & Kalcer Look",
      tops: [
        {
          id: "sk-top-1",
          name: "Lawna Workshirt Boxy Double Zipper Clark White - Black",
          price: 147000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-7rbka-ma9l7kc12dhp3e",
          affiliate_url: "https://s.shopee.co.id/4fwwvQJCAD",
        },
        {
          id: "sk-top-2",
          name: "Kaos The Stone Roses Motif Band Unisex Casual",
          price: 35000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-81zte-mrmobyywim0x8d",
          affiliate_url: "https://s.shopee.co.id/gQoA4YQHJ",
        },
        {
          id: "sk-top-3",
          name: "YAZR Kaos Boxy Oversized Hihhoppunks BLURRED PORTRAIT",
          price: 59000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0g-mbq3hcshu2qs59",
          affiliate_url: "https://s.shopee.co.id/9zyTHDytLl",
        },
      ],
      bottoms: [
        {
          id: "sk-bot-1",
          name: "Mister Bento Celana Jeans Snow Black Loose Straight",
          price: 59900,
          image: "https://down-id.img.susercontent.com/file/id-11134207-81ztj-mr66mwlzbabr2f",
          affiliate_url: "https://s.shopee.co.id/4qGN7jIYpE",
        },
        {
          id: "sk-bot-2",
          name: "Celana Jeans Gombrong Skena Baggy Jumbo",
          price: 54900,
          image: "https://down-id.img.susercontent.com/file/id-11134207-7rbk1-m9b9z6kvki8u6d",
          affiliate_url: "https://s.shopee.co.id/gQoA4YQIK",
        },
        {
          id: "sk-bot-3",
          name: "BOARSHORT PARASUT Skena Kalcer Reflektif ring d",
          price: 37000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-7ra0s-mbdk79nwm90e1d",
          affiliate_url: "https://s.shopee.co.id/4B0gKVL6BA",
        },
      ],
      shoes: [
        {
          id: "sk-shoe-1",
          name: "VALANGKIN RAYNER BLW Sneakers Old Ace Blue Retro",
          price: 189000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-8224p-mjgix6g7124kd5",
          affiliate_url: "https://s.shopee.co.id/3g4PjaN0CB",
        },
        {
          id: "sk-shoe-2",
          name: "SANDAL SLOP NY mlb Slip-On Kualitas Premium",
          price: 49000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-8224x-mieiiunmfklge8",
          affiliate_url: "https://s.shopee.co.id/6L5AuUCqmx",
        },
      ],
      accessories: [
        {
          id: "sk-acc-1",
          name: "MODOFO Tumbler Stainless Vacuum 710ml All Black",
          price: 49000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-822wo-mo56kw6syiva82",
          affiliate_url: "https://s.shopee.co.id/4fwwvQJCBE",
        },
        {
          id: "sk-acc-2",
          name: "Scarlite Luxury Extrait De Parfum Unisex 30ml",
          price: 13000,
          image: "https://down-id.img.susercontent.com/file/id-11134207-822wi-mnfy30pupsshee",
          affiliate_url: "https://s.shopee.co.id/9fLcsc0A1n",
        },
      ],
    },
  };

  const activePreset = outfitPresets[genderMode];
  const topList = activePreset.tops;
  const bottomList = activePreset.bottoms;
  const shoeList = activePreset.shoes;
  const accList = activePreset.accessories;

  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);
  const [shoeIndex, setShoeIndex] = useState(0);
  const [accIndex, setAccIndex] = useState(0);

  const currentTop = topList[topIndex % topList.length];
  const currentBottom = bottomList[bottomIndex % bottomList.length];
  const currentShoe = shoeList[shoeIndex % shoeList.length];
  const currentAcc = accList[accIndex % accList.length];

  const totalPrice =
    (currentTop?.price || 0) +
    (currentBottom?.price || 0) +
    (currentShoe?.price || 0) +
    (currentAcc?.price || 0);

  const handleRandomizeLook = (e: React.MouseEvent) => {
    setTopIndex((prev) => (prev + 1) % topList.length);
    setBottomIndex((prev) => (prev + 1) % bottomList.length);
    setShoeIndex((prev) => (prev + 1) % shoeList.length);
    setAccIndex((prev) => (prev + 1) % accList.length);
    triggerConfetti(e.clientX, e.clientY);
    showToast(`🎲 Look ${activePreset.label} baru dikombinasikan! ✨`, "success");
  };

  const handleSaveWholeLook = (e: React.MouseEvent) => {
    triggerConfetti(e.clientX, e.clientY);
    showToast(`✨ 1 Set OOTD (${activePreset.label}) berhasil disimpan! ❤️`, "wishlist");
  };

  return (
    <section className="py-16 bg-vanilla border-t-2 border-espresso/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Neo-Brutalist Badges */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-butter-400 border-2 border-espresso text-espresso text-xs font-extrabold shadow-brutal-sm -rotate-1 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OOTD VIRTUAL FITTING STUDIO 🎨</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-espresso">
              Mix & Match Kanvas Outfit Ze
            </h2>
            <p className="text-sm text-espresso-100 mt-1 max-w-xl">
              Bingung memadukan atasan, bawahan, tas, dan sepatu? Gonta-ganti item di kanvas ini untuk
              melihat kombinasi OOTD lengkap beserta estimasi total harganya!
            </p>
          </div>

          {/* Randomizer Button */}
          <button
            type="button"
            onClick={handleRandomizeLook}
            className="btn-3d-butter inline-flex items-center gap-2 px-6 py-3 rounded-full bg-butter-400 border-2 border-espresso text-espresso text-xs sm:text-sm font-extrabold shadow-brutal hover:bg-butter-500 self-start md:self-auto"
          >
            <Dices className="w-4 h-4" />
            <span>Acak Kombinasi OOTD 🎲</span>
          </button>
        </div>

        {/* Gender Selection Tabs */}
        <div className="flex items-center gap-3 mb-8 overflow-x-auto no-scrollbar pb-2">
          {(
            [
              { id: "skena", label: "🎸 Anak Skena & Kalcer", desc: "Tote Bag, Derby Shoes & Corduroy" },
              { id: "men", label: "🛹 Outfit Cowok (Bro Look)", desc: "Boxy Tee, Cargo & Retro Sneakers" },
              { id: "women", label: "👗 Outfit Cewek (Sis Look)", desc: "Linen, Cardigan & Loafers" },
              { id: "unisex", label: "🧢 Unisex Streetwear", desc: "Heavyweight Hoodie & Parachute Pants" },
            ] as const
          ).map((mode) => {
            const isActive = genderMode === mode.id;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => {
                  setGenderMode(mode.id);
                  setTopIndex(0);
                  setBottomIndex(0);
                  setShoeIndex(0);
                  setAccIndex(0);
                }}
                className={`px-5 py-3 rounded-2xl border-2 text-left transition-all tap-bounce flex-shrink-0 ${
                  isActive
                    ? "bg-butter-400 border-espresso shadow-brutal scale-105"
                    : "bg-white border-espresso/20 hover:border-espresso hover:shadow-brutal-sm"
                }`}
              >
                <p className="text-xs sm:text-sm font-extrabold text-espresso">{mode.label}</p>
                <p className="text-[10px] text-espresso-100 font-medium">{mode.desc}</p>
              </button>
            );
          })}
        </div>

        {/* Studio Grid: Left Collage Canvas (7 cols) + Right Item Checklist (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Canvas Collage (4 Lookbook Frames) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border-4 border-espresso shadow-brutal-lg relative">
            {/* Washi Tape Decors */}
            <div className="absolute -top-3.5 left-8 px-6 py-1 bg-butter-300 border border-espresso text-[10px] font-extrabold uppercase tracking-widest text-espresso -rotate-2 shadow-sm">
              ✨ CURATED LOOKBOOK SLAY • {activePreset.label} ✨
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Slot 1: Atasan / Top */}
              <div className="relative group rounded-2xl overflow-hidden border-2 border-espresso bg-softgray aspect-[4/5] flex flex-col justify-between p-3">
                <Image
                  src={currentTop?.image || "https://down-id.img.susercontent.com/file/id-11134207-7ra0m-mbac375f32c920"}
                  alt={currentTop?.name || "Top"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-butter-400 text-espresso text-[10px] font-extrabold border border-espresso shadow-sm">
                    1. ATASAN
                  </span>
                  <button
                    type="button"
                    onClick={() => setTopIndex((prev) => (prev + 1) % topList.length)}
                    className="p-1.5 rounded-full bg-white text-espresso border border-espresso hover:bg-butter-400 active:scale-90 transition-all shadow-sm"
                    title="Ganti Atasan"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="relative z-10 text-white">
                  <p className="text-xs font-bold truncate">{currentTop?.name}</p>
                  <p className="text-[11px] font-extrabold text-butter-300">
                    {formatRupiah(currentTop?.price)}
                  </p>
                </div>
              </div>

              {/* Slot 2: Bawahan / Bottom */}
              <div className="relative group rounded-2xl overflow-hidden border-2 border-espresso bg-softgray aspect-[4/5] flex flex-col justify-between p-3">
                <Image
                  src={currentBottom.image}
                  alt={currentBottom.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-matcha-400 text-espresso text-[10px] font-extrabold border border-espresso shadow-sm">
                    2. BAWAHAN
                  </span>
                  <button
                    type="button"
                    onClick={() => setBottomIndex((prev) => (prev + 1) % bottomList.length)}
                    className="p-1.5 rounded-full bg-white text-espresso border border-espresso hover:bg-butter-400 active:scale-90 transition-all shadow-sm"
                    title="Ganti Bawahan"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="relative z-10 text-white">
                  <p className="text-xs font-bold truncate">{currentBottom.name}</p>
                  <p className="text-[11px] font-extrabold text-butter-300">
                    {formatRupiah(currentBottom.price)}
                  </p>
                </div>
              </div>

              {/* Slot 3: Sepatu / Shoes */}
              <div className="relative group rounded-2xl overflow-hidden border-2 border-espresso bg-softgray aspect-[4/5] flex flex-col justify-between p-3">
                <Image
                  src={currentShoe?.image || "https://down-id.img.susercontent.com/file/id-11134207-8224p-mjgix6g7124kd5"}
                  alt={currentShoe?.name || "Shoe"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-vanilla text-espresso text-[10px] font-extrabold border border-espresso shadow-sm">
                    3. SEPATU
                  </span>
                  <button
                    type="button"
                    onClick={() => setShoeIndex((prev) => (prev + 1) % shoeList.length)}
                    className="p-1.5 rounded-full bg-white text-espresso border border-espresso hover:bg-butter-400 active:scale-90 transition-all shadow-sm"
                    title="Ganti Sepatu"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="relative z-10 text-white">
                  <p className="text-xs font-bold truncate">{currentShoe?.name}</p>
                  <p className="text-[11px] font-extrabold text-butter-300">
                    {formatRupiah(currentShoe?.price)}
                  </p>
                </div>
              </div>

              {/* Slot 4: Tas & Aksesoris */}
              <div className="relative group rounded-2xl overflow-hidden border-2 border-espresso bg-softgray aspect-[4/5] flex flex-col justify-between p-3">
                <Image
                  src={currentAcc?.image || "https://down-id.img.susercontent.com/file/id-11134207-822wo-mo56kw6syiva82"}
                  alt={currentAcc?.name || "Accessory"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-butter-300 text-espresso text-[10px] font-extrabold border border-espresso shadow-sm">
                    {genderMode === "men" ? "4. TOPI / AKSESORIS" : genderMode === "unisex" ? "4. TOPI / TAS" : "4. TAS / HIJAB"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setAccIndex((prev) => (prev + 1) % accList.length)}
                    className="p-1.5 rounded-full bg-white text-espresso border border-espresso hover:bg-butter-400 active:scale-90 transition-all shadow-sm"
                    title="Ganti Aksesoris"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="relative z-10 text-white">
                  <p className="text-xs font-bold truncate">{currentAcc?.name}</p>
                  <p className="text-[11px] font-extrabold text-butter-300">
                    {formatRupiah(currentAcc?.price)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Summary & Checkout 1 Set (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-white border-4 border-espresso shadow-brutal-lg space-y-5">
            <div className="flex items-center justify-between border-b-2 border-espresso/15 pb-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-matcha-600 block">
                  RINCIAN 1 SET OOTD
                </span>
                <h3 className="font-editorial text-xl font-bold text-espresso">
                  Outfit Set Checklist
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-butter-400 text-espresso text-xs font-extrabold border border-espresso shadow-sm">
                4 Items ✨
              </span>
            </div>

            {/* Selected Items List */}
            {/* Selected Items List with Individual Checkout Links */}
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-2xl bg-vanilla/60 border border-espresso/15">
                <div className="min-w-0 flex-1">
                  <span className="font-bold text-espresso block truncate">1. Atasan: {currentTop?.name}</span>
                  <span className="font-extrabold text-espresso/70 text-[11px]">{formatRupiah(currentTop?.price)}</span>
                </div>
                <a
                  href={currentTop?.affiliate_url || "https://shopee.co.id"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => triggerConfetti(e.clientX, e.clientY)}
                  className="px-3 py-1.5 rounded-xl bg-espresso text-vanilla hover:bg-coral hover:text-espresso font-bold text-[10px] flex items-center gap-1 flex-shrink-0 transition-colors shadow-xs"
                >
                  <ShoppingBag className="w-3 h-3" />
                  <span>Beli Atasan ↗</span>
                </a>
              </div>

              <div className="flex items-center justify-between gap-2 p-2.5 rounded-2xl bg-vanilla/60 border border-espresso/15">
                <div className="min-w-0 flex-1">
                  <span className="font-bold text-espresso block truncate">2. Bawahan: {currentBottom?.name}</span>
                  <span className="font-extrabold text-espresso/70 text-[11px]">{formatRupiah(currentBottom?.price)}</span>
                </div>
                <a
                  href={currentBottom?.affiliate_url || "https://shopee.co.id"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => triggerConfetti(e.clientX, e.clientY)}
                  className="px-3 py-1.5 rounded-xl bg-espresso text-vanilla hover:bg-coral hover:text-espresso font-bold text-[10px] flex items-center gap-1 flex-shrink-0 transition-colors shadow-xs"
                >
                  <ShoppingBag className="w-3 h-3" />
                  <span>Beli Celana ↗</span>
                </a>
              </div>

              <div className="flex items-center justify-between gap-2 p-2.5 rounded-2xl bg-vanilla/60 border border-espresso/15">
                <div className="min-w-0 flex-1">
                  <span className="font-bold text-espresso block truncate">3. Sepatu: {currentShoe?.name}</span>
                  <span className="font-extrabold text-espresso/70 text-[11px]">{formatRupiah(currentShoe?.price)}</span>
                </div>
                <a
                  href={currentShoe?.affiliate_url || "https://shopee.co.id"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => triggerConfetti(e.clientX, e.clientY)}
                  className="px-3 py-1.5 rounded-xl bg-espresso text-vanilla hover:bg-coral hover:text-espresso font-bold text-[10px] flex items-center gap-1 flex-shrink-0 transition-colors shadow-xs"
                >
                  <ShoppingBag className="w-3 h-3" />
                  <span>Beli Sepatu ↗</span>
                </a>
              </div>

              <div className="flex items-center justify-between gap-2 p-2.5 rounded-2xl bg-vanilla/60 border border-espresso/15">
                <div className="min-w-0 flex-1">
                  <span className="font-bold text-espresso block truncate">4. Aksesori: {currentAcc?.name}</span>
                  <span className="font-extrabold text-espresso/70 text-[11px]">{formatRupiah(currentAcc?.price)}</span>
                </div>
                <a
                  href={currentAcc?.affiliate_url || "https://shopee.co.id"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => triggerConfetti(e.clientX, e.clientY)}
                  className="px-3 py-1.5 rounded-xl bg-espresso text-vanilla hover:bg-coral hover:text-espresso font-bold text-[10px] flex items-center gap-1 flex-shrink-0 transition-colors shadow-xs"
                >
                  <ShoppingBag className="w-3 h-3" />
                  <span>Beli Aksesori ↗</span>
                </a>
              </div>
            </div>

            {/* Total Calculation Box */}
            <div className="p-4 rounded-2xl bg-butter-400 border-2 border-espresso shadow-sm space-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-espresso/80">
                TOTAL ESTIMASI 1 SET OOTD
              </span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-extrabold text-espresso">
                  {formatRupiah(totalPrice)}
                </span>
                <span className="text-[11px] font-bold text-espresso/80">
                  (Checkout satu per satu via link di atas)
                </span>
              </div>
            </div>

            {/* Actions & Receipt Button */}
            <div className="space-y-2.5 pt-2">
              <div className="p-3 rounded-2xl bg-vanilla/80 border border-espresso/15 text-[11px] text-espresso leading-snug">
                <p className="font-bold text-cobalt flex items-center gap-1.5 mb-0.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-coral" />
                  <span>Aturan Affiliate Marketplace:</span>
                </p>
                <p className="text-espresso/75">
                  Karena link affiliate bersifat per-produk resmi toko, silakan klik tombol <strong>Beli ↗</strong> pada masing-masing barang yang ingin kamu checkout.
                </p>
              </div>

              <button
                type="button"
                onClick={handleSaveWholeLook}
                className="btn-3d-butter flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-white border-2 border-espresso text-espresso text-xs font-bold hover:bg-vanilla transition-all shadow-sm"
              >
                <Heart className="w-4 h-4 text-espresso fill-espresso/20" />
                <span>Simpan 1 Set ke Wishlist ❤️</span>
              </button>

              <button
                type="button"
                onClick={() => setIsReceiptOpen(true)}
                className="btn-3d flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-vanilla border-2 border-espresso text-espresso text-xs font-black hover:bg-white transition-all shadow-brutal-sm"
              >
                <Receipt className="w-4 h-4 text-cobalt" />
                <span>Cetak Struk OOTD Aesthetic 🧾</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Thermal Receipt Modal */}
      <AestheticReceiptModal
        isOpen={isReceiptOpen}
        onClose={() => setIsReceiptOpen(false)}
        lookTitle={`OOTD Set • ${activePreset.label}`}
        items={[
          {
            name: currentTop?.name || "Atasan",
            price: currentTop?.price || 0,
            affiliateUrl: currentTop?.affiliate_url,
          },
          {
            name: currentBottom?.name || "Bawahan",
            price: currentBottom?.price || 0,
            affiliateUrl: currentBottom?.affiliate_url,
          },
          {
            name: currentShoe?.name || "Sepatu",
            price: currentShoe?.price || 0,
            affiliateUrl: currentShoe?.affiliate_url,
          },
          {
            name: currentAcc?.name || "Aksesori",
            price: currentAcc?.price || 0,
            affiliateUrl: currentAcc?.affiliate_url,
          },
        ]}
        customTotal={totalPrice}
      />
    </section>
  );
}
