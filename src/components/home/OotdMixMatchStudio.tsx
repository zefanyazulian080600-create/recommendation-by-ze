"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Dices, ArrowRight, ShoppingBag, Heart, Check, RefreshCw } from "lucide-react";
import { Product } from "@/types";
import { formatRupiah } from "@/lib/utils";
import { triggerConfetti } from "@/lib/confetti";
import { useToast } from "@/context/ToastContext";
import { useWishlist } from "@/context/WishlistContext";

interface OotdMixMatchStudioProps {
  products: Product[];
}

type GenderMode = "men" | "women" | "unisex";

export function OotdMixMatchStudio({ products }: OotdMixMatchStudioProps) {
  const { showToast } = useToast();
  const { toggleWishlist } = useWishlist();
  const [genderMode, setGenderMode] = useState<GenderMode>("men");

  // Curated lists per gender mode
  const outfitPresets = {
    men: {
      label: "🛹 Bro Look (Cowok)",
      tops: [
        {
          id: "m-top-1",
          name: "Heavyweight Boxy Fit Tee 235gsm - Washed Charcoal",
          price: 119000,
          image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://shopee.co.id",
        },
        {
          id: "m-top-2",
          name: "Vintage Relaxed Corduroy Overshirt - Olive Green",
          price: 175000,
          image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://tokopedia.com",
        },
        {
          id: "m-top-3",
          name: "Relaxed Knit Polo Shirt - Oatmeal Beige",
          price: 149000,
          image: "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://shopee.co.id",
        },
      ],
      bottoms: [
        {
          id: "m-bot-1",
          name: "Relaxed Carpenter Cargo Pants - Khaki Sand",
          price: 155000,
          image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://tiktok.com",
        },
        {
          id: "m-bot-2",
          name: "Baggy Straight Fit Trousers - Deep Charcoal",
          price: 145000,
          image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://shopee.co.id",
        },
        {
          id: "m-bot-3",
          name: "Vintage Washed Loose Denim - Light Grey",
          price: 189000,
          image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://tokopedia.com",
        },
      ],
      shoes: [
        {
          id: "m-shoe-1",
          name: "Retro Suede Gumsole Skate Sneakers - Off-White",
          price: 239000,
          image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://shopee.co.id",
        },
        {
          id: "m-shoe-2",
          name: "Classic Chunky Lug Penny Loafers - Black",
          price: 198000,
          image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://shopee.co.id",
        },
      ],
      accessories: [
        {
          id: "m-acc-1",
          name: "Vintage Washed Baseball Dad Cap - Forest Olive",
          price: 58000,
          image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://lazada.co.id",
        },
        {
          id: "m-acc-2",
          name: "Minimalist Leather Cardholder Lanyard - Black",
          price: 49000,
          image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://shopee.co.id",
        },
        {
          id: "m-acc-3",
          name: "Woody Santal & Bergamot Unisex EDP 50ml",
          price: 135000,
          image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://shopee.co.id",
        },
      ],
    },
    women: {
      label: "👗 Sis Look (Cewek)",
      tops: [
        {
          id: "w-top-1",
          name: "Oversized Soft Linen Shirt - Ivory Off-White",
          price: 135000,
          image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://shopee.co.id",
        },
        {
          id: "w-top-2",
          name: "Korean Cable Knit Crop Cardigan - Muted Rose",
          price: 119000,
          image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://shop.tiktok.com",
        },
      ],
      bottoms: [
        {
          id: "w-bot-1",
          name: "Wide-Leg Highwaist Trousers Ivory",
          price: 135000,
          image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://shopee.co.id",
        },
        {
          id: "w-bot-2",
          name: "Pleated A-Line Midi Skirt Cream",
          price: 119000,
          image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://tokopedia.com",
        },
      ],
      shoes: [
        {
          id: "w-shoe-1",
          name: "Classic Chunky Platform Penny Loafers - Glossy Black",
          price: 198000,
          image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://shopee.co.id",
        },
      ],
      accessories: [
        {
          id: "w-acc-1",
          name: "Heavy Canvas Multi-Pocket Laptop Tote Bag",
          price: 125000,
          image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://shopee.co.id",
        },
        {
          id: "w-acc-2",
          name: "Ceruty Babydoll Plisket Pashmina Hijab - Soft Mocca",
          price: 35000,
          image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://lazada.co.id",
        },
      ],
    },
    unisex: {
      label: "🧢 Unisex Streetwear",
      tops: [
        {
          id: "u-top-1",
          name: "Drop-Shoulder Boxy Heavyweight Hoodie - Raw Oatmeal",
          price: 189000,
          image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://shop.tiktok.com",
        },
        {
          id: "u-top-2",
          name: "Heavyweight Boxy Fit Tee 235gsm - Washed Charcoal",
          price: 119000,
          image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://shopee.co.id",
        },
      ],
      bottoms: [
        {
          id: "u-bot-1",
          name: "Relaxed Parachute Cargo Pants with Toggle - Sand Khaki",
          price: 145000,
          image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://shop.tiktok.com",
        },
        {
          id: "u-bot-2",
          name: "Baggy Straight Pants Charcoal Grey",
          price: 145000,
          image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://shopee.co.id",
        },
      ],
      shoes: [
        {
          id: "u-shoe-1",
          name: "Retro Suede Gumsole Skate Sneakers - Off-White & Forest",
          price: 239000,
          image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://shopee.co.id",
        },
      ],
      accessories: [
        {
          id: "u-acc-1",
          name: "Vintage Washed Cotton Baseball Dad Cap - Forest Olive",
          price: 58000,
          image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://lazada.co.id",
        },
        {
          id: "u-acc-2",
          name: "Heavy Canvas Multi-Pocket Laptop Tote Bag",
          price: 125000,
          image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop",
          affiliate_url: "https://shopee.co.id",
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
                  src={currentTop?.image || "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop"}
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
                  src={currentShoe?.image || "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop"}
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
                  src={currentAcc?.image || "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop"}
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
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-vanilla/60 border border-espresso/15">
                <span className="font-bold text-espresso truncate">1. {currentTop?.name}</span>
                <span className="font-extrabold text-espresso flex-shrink-0">
                  {formatRupiah(currentTop?.price)}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-vanilla/60 border border-espresso/15">
                <span className="font-bold text-espresso truncate">2. {currentBottom?.name}</span>
                <span className="font-extrabold text-espresso flex-shrink-0">
                  {formatRupiah(currentBottom?.price)}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-vanilla/60 border border-espresso/15">
                <span className="font-bold text-espresso truncate">3. {currentShoe?.name}</span>
                <span className="font-extrabold text-espresso flex-shrink-0">
                  {formatRupiah(currentShoe?.price)}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-vanilla/60 border border-espresso/15">
                <span className="font-bold text-espresso truncate">4. {currentAcc?.name}</span>
                <span className="font-extrabold text-espresso flex-shrink-0">
                  {formatRupiah(currentAcc?.price)}
                </span>
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
                  (Under 400rb Auto Slay! 🔥)
                </span>
              </div>
            </div>

            {/* Actions: Save 1 Set & Direct Marketplace Outbound */}
            <div className="space-y-2.5 pt-2">
              <a
                href={currentTop?.affiliate_url || "https://shopee.co.id"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => triggerConfetti(e.clientX, e.clientY)}
                className="btn-3d flex items-center justify-center gap-2 w-full py-4 rounded-full bg-espresso text-vanilla text-sm font-bold border-2 border-espresso hover:bg-espresso-400 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Beli Look Ini di Marketplace 🛍️</span>
              </a>

              <button
                type="button"
                onClick={handleSaveWholeLook}
                className="btn-3d-butter flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-white border-2 border-espresso text-espresso text-xs font-bold hover:bg-vanilla transition-all shadow-sm"
              >
                <Heart className="w-4 h-4 text-espresso fill-espresso/20" />
                <span>Simpan 1 Set ke Wishlist ❤️</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
