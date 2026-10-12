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

export function OotdMixMatchStudio({ products }: OotdMixMatchStudioProps) {
  const { showToast } = useToast();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Categorize available items for the studio slots
  const tops = products.filter(
    (p) =>
      p.category?.slug === "outfit-wanita" ||
      p.name.toLowerCase().includes("shirt") ||
      p.name.toLowerCase().includes("outer") ||
      p.name.toLowerCase().includes("blouse")
  );

  const bottoms = [
    {
      id: "bottom-1",
      name: "Wide-Leg Highwaist Trousers Ivory",
      price: 135000,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop",
      marketplace: "shopee",
      affiliate_url: "https://shopee.co.id",
    },
    {
      id: "bottom-2",
      name: "Pleated A-Line Midi Skirt Cream",
      price: 119000,
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=600&auto=format&fit=crop",
      marketplace: "tokopedia",
      affiliate_url: "https://tokopedia.com",
    },
    {
      id: "bottom-3",
      name: "Baggy Straight Pants Charcoal Grey",
      price: 145000,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
      marketplace: "tiktok",
      affiliate_url: "https://tiktok.com",
    },
  ];

  const shoes = products.filter(
    (p) =>
      p.name.toLowerCase().includes("loafer") ||
      p.name.toLowerCase().includes("shoe") ||
      p.name.toLowerCase().includes("sneaker")
  );

  const accessories = products.filter(
    (p) =>
      p.name.toLowerCase().includes("tote") ||
      p.name.toLowerCase().includes("bag") ||
      p.name.toLowerCase().includes("pashmina") ||
      p.name.toLowerCase().includes("hijab")
  );

  // Fallback defaults if catalog is still growing
  const topList = tops.length > 0 ? tops : products.slice(0, 3);
  const shoeList = shoes.length > 0 ? shoes : products.slice(2, 5);
  const accList = accessories.length > 0 ? accessories : products.slice(1, 4);

  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);
  const [shoeIndex, setShoeIndex] = useState(0);
  const [accIndex, setAccIndex] = useState(0);

  const currentTop = topList[topIndex % topList.length];
  const currentBottom = bottoms[bottomIndex % bottoms.length];
  const currentShoe = shoeList[shoeIndex % shoeList.length];
  const currentAcc = accList[accIndex % accList.length];

  const totalPrice =
    (currentTop?.price || 0) +
    currentBottom.price +
    (currentShoe?.price || 0) +
    (currentAcc?.price || 0);

  const handleRandomizeLook = (e: React.MouseEvent) => {
    setTopIndex((prev) => (prev + 1) % topList.length);
    setBottomIndex((prev) => (prev + 1) % bottoms.length);
    setShoeIndex((prev) => (prev + 1) % shoeList.length);
    setAccIndex((prev) => (prev + 1) % accList.length);
    triggerConfetti(e.clientX, e.clientY);
    showToast("🎲 Look baru dikombinasikan! Auto Slay ✨", "success");
  };

  const handleSaveWholeLook = (e: React.MouseEvent) => {
    if (currentTop) toggleWishlist(currentTop);
    if (currentShoe) toggleWishlist(currentShoe);
    if (currentAcc) toggleWishlist(currentAcc);
    triggerConfetti(e.clientX, e.clientY);
    showToast("✨ 1 Set OOTD berhasil disimpan ke Wishlist! ❤️", "wishlist");
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

        {/* Studio Grid: Left Collage Canvas (7 cols) + Right Item Checklist (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Canvas Collage (4 Lookbook Frames) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border-4 border-espresso shadow-brutal-lg relative">
            {/* Washi Tape Decors */}
            <div className="absolute -top-3.5 left-8 px-6 py-1 bg-butter-300 border border-espresso text-[10px] font-extrabold uppercase tracking-widest text-espresso -rotate-2 shadow-sm">
              ✨ CURATED LOOKBOOK SLAY ✨
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Slot 1: Atasan / Top */}
              <div className="relative group rounded-2xl overflow-hidden border-2 border-espresso bg-softgray aspect-[4/5] flex flex-col justify-between p-3">
                <Image
                  src={currentTop?.media?.[0]?.public_url || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop"}
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
                    onClick={() => setBottomIndex((prev) => (prev + 1) % bottoms.length)}
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
                  src={currentShoe?.media?.[0]?.public_url || "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop"}
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
                  src={currentAcc?.media?.[0]?.public_url || "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop"}
                  alt={currentAcc?.name || "Accessory"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-butter-300 text-espresso text-[10px] font-extrabold border border-espresso shadow-sm">
                    4. TAS / HIJAB
                  </span>
                  <button
                    type="button"
                    onClick={() => setAccIndex((prev) => (prev + 1) % accList.length)}
                    className="p-1.5 rounded-full bg-white text-espresso border border-espresso hover:bg-butter-400 active:scale-90 transition-all shadow-sm"
                    title="Ganti Tas & Aksesoris"
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
                <span className="font-bold text-espresso truncate">2. {currentBottom.name}</span>
                <span className="font-extrabold text-espresso flex-shrink-0">
                  {formatRupiah(currentBottom.price)}
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
