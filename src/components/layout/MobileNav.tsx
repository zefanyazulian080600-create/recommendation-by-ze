"use client";

import React from "react";
import Link from "next/link";
import {
  X,
  Heart,
  ShoppingBag,
  Sparkles,
  Lock,
  ChevronRight,
  Flame,
  Tag,
  Shirt,
  Footprints,
  Sparkle,
} from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useUser } from "@/context/UserContext";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  categories?: { id: string; name: string; slug: string }[];
}

export function MobileNav({ isOpen, onClose, categories = [] }: MobileNavProps) {
  const { wishlistCount } = useWishlist();
  const { userName, userVibe, openModal } = useUser();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer (High Contrast Dark Slate) */}
      <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-[#10121C] border-r-2 border-white/20 shadow-2xl flex flex-col z-10 overflow-y-auto animate-slideRight text-white">
        {/* Header */}
        <div className="p-5 border-b border-white/15 flex items-center justify-between bg-[#151724]">
          <Link href="/" onClick={onClose} className="flex flex-col">
            <span className="font-editorial text-xl font-bold tracking-tight text-white">
              Recommendation
            </span>
            <span className="font-mono text-[10px] font-extrabold tracking-[0.25em] uppercase text-emerald-400">
              by Ze • Curated Archive
            </span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 -mr-2 rounded-xl text-zinc-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Tutup menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-6 flex-1">
          {/* User VIP Greeting Card */}
          <div className="p-4 rounded-2xl bg-[#181A28] border-2 border-white/15 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center font-extrabold text-sm text-emerald-400">
                {userName ? userName.charAt(0).toUpperCase() : "✨"}
              </div>
              <div>
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">VIP Access</p>
                <p className="text-sm font-bold text-white truncate max-w-[130px]">
                  {userName ? `${userName} (${userVibe || "Vibe"})` : "Spill Nama Kamu"}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                openModal();
              }}
              className="text-xs font-extrabold text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-2"
            >
              {userName ? "Ubah" : "Isi ✨"}
            </button>
          </div>

          {/* Quick Wishlist Banner */}
          <Link
            href="/wishlist"
            onClick={onClose}
            className="flex items-center justify-between p-3.5 rounded-xl bg-[#181A28] border border-white/15 text-white font-bold text-sm transition-all hover:border-white/30"
          >
            <div className="flex items-center gap-2.5">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20" />
              <span>Wishlist Saya</span>
            </div>
            <span className="bg-emerald-400 text-black text-xs font-extrabold px-2.5 py-0.5 rounded-full">
              {wishlistCount}
            </span>
          </Link>

          {/* Primary Navigation */}
          <div>
            <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wider mb-2.5">
              Jelajahi Menu Utama
            </h4>
            <div className="space-y-1.5">
              <Link
                href="/products"
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-white/[0.04] text-sm font-bold text-white hover:bg-white/10 transition-colors border border-white/5"
              >
                <span>Katalog Semua Produk Ol Shop</span>
                <ChevronRight className="w-4 h-4 text-zinc-300" />
              </Link>
              <Link
                href="/products?sort=trending"
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-white/[0.04] text-sm font-bold text-white hover:bg-white/10 transition-colors border border-white/5"
              >
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#EE4D2D]" />
                  <span>Viral TikTok & FYP</span>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-300" />
              </Link>
              <Link
                href="/collections"
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-white/[0.04] text-sm font-bold text-white hover:bg-white/10 transition-colors border border-white/5"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Koleksi Tematik Spesial</span>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-300" />
              </Link>
            </div>
          </div>

          {/* Group 1: Fashion Pria */}
          <div>
            <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Shirt className="w-3.5 h-3.5 text-emerald-400" />
                <span>Outfit Pria</span>
              </span>
              <Link href="/products?category=outfit-pria" onClick={onClose} className="text-[10px] text-zinc-300 hover:text-white underline">
                Semua Pria
              </Link>
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-xs font-bold">
              <Link
                href="/products?subCategory=pria-kemeja"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                👔 Kemeja Pria
              </Link>
              <Link
                href="/products?subCategory=pria-kaos"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                👕 Kaos Pria
              </Link>
              <Link
                href="/products?subCategory=pria-jaket"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                🧥 Jaket & Hoodie
              </Link>
              <Link
                href="/products?subCategory=pria-celana"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                👖 Celana Pria
              </Link>
            </div>
          </div>

          {/* Group 2: Fashion Wanita */}
          <div>
            <h4 className="text-xs font-black text-pink-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Shirt className="w-3.5 h-3.5 text-pink-400" />
                <span>Fashion Wanita</span>
              </span>
              <Link href="/products?category=outfit-wanita" onClick={onClose} className="text-[10px] text-zinc-300 hover:text-white underline">
                Semua Cewek
              </Link>
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-xs font-bold">
              <Link
                href="/products?subCategory=wanita-blouse"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                👚 Blouse & Kemeja
              </Link>
              <Link
                href="/products?subCategory=wanita-croptop"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                👕 Crop Top
              </Link>
              <Link
                href="/products?subCategory=wanita-knitwear"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                🧶 Cardigan & Knit
              </Link>
              <Link
                href="/products?subCategory=wanita-dress"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                👗 Dress & One Set
              </Link>
              <Link
                href="/products?subCategory=wanita-rok"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                👗 Rok & Skirt Cantik
              </Link>
              <Link
                href="/products?subCategory=wanita-celana"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                👖 Celana & Kulot
              </Link>
            </div>
          </div>

          {/* Group 3: Muslimah & Sleepwear */}
          <div>
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Sparkle className="w-3.5 h-3.5 text-amber-400" />
                <span>Muslimah & Tidur</span>
              </span>
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-xs font-bold">
              <Link
                href="/products?subCategory=muslim-gamis"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                🌙 Gamis & Abaya
              </Link>
              <Link
                href="/products?subCategory=muslim-hijab"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                🧕 Hijab & Pashmina
              </Link>
              <Link
                href="/products?subCategory=sleep-piyama"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                😴 Piyama Rayon
              </Link>
              <Link
                href="/products?subCategory=sleep-daster"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                🩳 Daster Santai
              </Link>
            </div>
          </div>

          {/* Group 4: Tas & Dompet (Dipisah!) */}
          <div>
            <h4 className="text-xs font-black text-sky-400 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Footprints className="w-3.5 h-3.5 text-sky-400" />
                <span>Tas & Dompet (Dipisah)</span>
              </span>
              <Link href="/products?category=bags-wallets" onClick={onClose} className="text-[10px] text-zinc-300 hover:text-white underline">
                Semua Tas
              </Link>
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-xs font-bold">
              <Link
                href="/products?subCategory=tas-ransel"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                🎒 Ransel Laptop
              </Link>
              <Link
                href="/products?subCategory=tas-sling"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                👜 Slingbag
              </Link>
              <Link
                href="/products?subCategory=tas-totebag"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                🛍️ Totebag
              </Link>
              <Link
                href="/products?subCategory=tas-dompet"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                👛 Dompet Kulit
              </Link>
            </div>
          </div>

          {/* Group 5: Sepatu & Sandal (Dipisah!) */}
          <div>
            <h4 className="text-xs font-black text-sky-300 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Footprints className="w-3.5 h-3.5 text-sky-300" />
                <span>Sepatu & Sandal (Dipisah)</span>
              </span>
              <Link href="/products?category=shoes-footwear" onClick={onClose} className="text-[10px] text-zinc-300 hover:text-white underline">
                Semua Sepatu
              </Link>
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-xs font-bold">
              <Link
                href="/products?subCategory=sepatu-sneakers"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                👟 Sneakers Kasual
              </Link>
              <Link
                href="/products?subCategory=sepatu-sandal"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                🩴 Sandal Slop EVA
              </Link>
              <Link
                href="/products?subCategory=sepatu-formal"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                👞 Sepatu Formal
              </Link>
              <Link
                href="/products?subCategory=sepatu-heels"
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                👠 Heels & Flat Shoes
              </Link>
            </div>
          </div>

          {/* Group 6: Ol Shop, Rumah & Lifestyle */}
          <div>
            <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>🏠 Rumah, Snack & Lifestyle</span>
            </h4>
            <div className="space-y-1 text-xs font-bold">
              <Link
                href="/products?category=aesthetic-room"
                onClick={onClose}
                className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                <span>🏠 Perlengkapan Rumah & Kost</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </Link>
              <Link
                href="/products?category=food-snack"
                onClick={onClose}
                className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                <span>🍿 Camilan Pedas & Basreng</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </Link>
              <Link
                href="/products?category=accessories-jewelry"
                onClick={onClose}
                className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                <span>💍 Aksesoris & Perhiasan Titanium</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </Link>
              <Link
                href="/products?category=skincare-beauty"
                onClick={onClose}
                className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                <span>✨ Skincare & Glowing</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </Link>
              <Link
                href="/products?category=parfum-fragrance"
                onClick={onClose}
                className="flex items-center justify-between p-2 rounded-xl bg-white/[0.04] text-zinc-100 hover:text-white hover:bg-white/10 transition-colors"
              >
                <span>🌸 Parfum Mewah Tahan Lama</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </Link>
            </div>
          </div>

          {/* Shop by Marketplace */}
          <div>
            <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wider mb-2.5">
              Berdasarkan Marketplace
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link
                href="/products?marketplace=shopee"
                onClick={onClose}
                className="p-2.5 rounded-xl border border-[#EE4D2D]/40 bg-[#EE4D2D]/15 text-[#EE4D2D] font-bold text-center hover:bg-[#EE4D2D]/25 transition-colors"
              >
                Shopee Finds
              </Link>
              <Link
                href="/products?marketplace=tokopedia"
                onClick={onClose}
                className="p-2.5 rounded-xl border border-[#03AC0E]/40 bg-[#03AC0E]/15 text-[#03AC0E] font-bold text-center hover:bg-[#03AC0E]/25 transition-colors"
              >
                Tokopedia Finds
              </Link>
              <Link
                href="/products?marketplace=tiktok"
                onClick={onClose}
                className="p-2.5 rounded-xl border border-white/30 bg-white/15 text-white font-bold text-center hover:bg-white/25 transition-colors"
              >
                TikTok Shop
              </Link>
              <Link
                href="/products?marketplace=lazada"
                onClick={onClose}
                className="p-2.5 rounded-xl border border-[#38BDF8]/40 bg-[#38BDF8]/15 text-[#38BDF8] font-bold text-center hover:bg-[#38BDF8]/25 transition-colors"
              >
                Lazada Finds
              </Link>
            </div>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="p-5 border-t border-white/15 bg-[#151724] space-y-3">
          <Link
            href="/admin"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white text-xs font-extrabold text-black hover:bg-zinc-200 transition-colors shadow-md"
          >
            <Lock className="w-3.5 h-3.5 text-black" />
            <span>Admin CMS Dashboard</span>
          </Link>

          <p className="text-[11px] text-center text-zinc-300 font-mono font-medium">
            Recommendation by Ze • Curated Online Shop Archive
          </p>
        </div>
      </div>
    </div>
  );
}
