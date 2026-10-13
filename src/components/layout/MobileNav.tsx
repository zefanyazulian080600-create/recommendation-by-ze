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
  Laptop,
  Home,
  Tag,
  Zap,
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

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-[#090A0F] border-r border-white/10 shadow-2xl flex flex-col z-10 overflow-y-auto animate-slideRight text-white">
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <Link href="/" onClick={onClose} className="flex flex-col">
            <span className="font-editorial text-xl font-medium tracking-tight text-white">
              Recommendation
            </span>
            <span className="font-mono text-[9px] font-bold tracking-[0.25em] uppercase text-emerald-400">
              by Ze • Curated Archive
            </span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 -mr-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Tutup menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-6 flex-1">
          {/* User VIP Greeting Card */}
          <div className="p-3.5 rounded-2xl bg-[#12131A] border border-white/15 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-bold text-xs text-emerald-400">
                {userName ? userName.charAt(0).toUpperCase() : "✨"}
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold uppercase text-zinc-400">VIP Access</p>
                <p className="text-xs font-bold text-white truncate max-w-[120px]">
                  {userName ? `${userName} (${userVibe || "Vibe"})` : "Spill Nama Kamu"}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                openModal();
              }}
              className="text-[11px] font-bold text-emerald-400 hover:text-emerald-300 transition-colors underline"
            >
              {userName ? "Ubah" : "Isi ✨"}
            </button>
          </div>

          {/* Quick Wishlist Banner */}
          <Link
            href="/wishlist"
            onClick={onClose}
            className="flex items-center justify-between p-3 rounded-xl bg-[#12131A] border border-white/10 text-white font-medium text-sm transition-all hover:border-white/20"
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
            <h4 className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-2">
              Jelajahi Rekomendasi
            </h4>
            <div className="space-y-1">
              <Link
                href="/products"
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <span>Semua Produk Ol Shop</span>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </Link>
              <Link
                href="/products?sort=trending"
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#EE4D2D]" />
                  <span>Viral TikTok & FYP</span>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </Link>
              <Link
                href="/collections"
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Koleksi Tematik</span>
                </div>
                <ChevronRight className="w-4 h-4 text-zinc-500" />
              </Link>
            </div>
          </div>

          {/* Universal Categories */}
          <div>
            <h4 className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-2">
              Kategori Online Shop
            </h4>
            <div className="space-y-1">
              <Link
                href="/products?category=desk-setup-gadget"
                onClick={onClose}
                className="flex items-center justify-between py-2 px-3 rounded-xl text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <span>🎧 Desk Setup & Gadget</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              </Link>
              <Link
                href="/products?category=aesthetic-room"
                onClick={onClose}
                className="flex items-center justify-between py-2 px-3 rounded-xl text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <span>🏠 Kamar & Kost Estetik</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              </Link>
              <Link
                href="/products?category=skincare-grooming"
                onClick={onClose}
                className="flex items-center justify-between py-2 px-3 rounded-xl text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <span>🧴 Skincare & Grooming</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              </Link>
              <Link
                href="/products?category=outfit-pria"
                onClick={onClose}
                className="flex items-center justify-between py-2 px-3 rounded-xl text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <span>🛹 Outfit Pria (Bro Look)</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              </Link>
              <Link
                href="/products?category=outfit-wanita"
                onClick={onClose}
                className="flex items-center justify-between py-2 px-3 rounded-xl text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <span>👗 Outfit Wanita</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              </Link>
              <Link
                href="/products?category=outfit-unisex"
                onClick={onClose}
                className="flex items-center justify-between py-2 px-3 rounded-xl text-sm text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <span>🧢 Unisex & Streetwear</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              </Link>
              <Link
                href="/products?price=under-50k"
                onClick={onClose}
                className="flex items-center justify-between py-2 px-3 rounded-xl text-sm text-emerald-400 hover:text-emerald-300 hover:bg-white/5 transition-colors font-semibold"
              >
                <span>💸 Super Hemat Under 50k</span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
              </Link>
            </div>
          </div>

          {/* Shop by Marketplace */}
          <div>
            <h4 className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-2">
              Berdasarkan Marketplace
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link
                href="/products?marketplace=shopee"
                onClick={onClose}
                className="p-2.5 rounded-xl border border-[#EE4D2D]/30 bg-[#EE4D2D]/10 text-[#EE4D2D] font-bold text-center hover:bg-[#EE4D2D]/20 transition-colors"
              >
                Shopee Finds
              </Link>
              <Link
                href="/products?marketplace=tokopedia"
                onClick={onClose}
                className="p-2.5 rounded-xl border border-[#03AC0E]/30 bg-[#03AC0E]/10 text-[#03AC0E] font-bold text-center hover:bg-[#03AC0E]/20 transition-colors"
              >
                Tokopedia Finds
              </Link>
              <Link
                href="/products?marketplace=tiktok"
                onClick={onClose}
                className="p-2.5 rounded-xl border border-white/20 bg-white/10 text-white font-bold text-center hover:bg-white/15 transition-colors"
              >
                TikTok Shop
              </Link>
              <Link
                href="/products?marketplace=lazada"
                onClick={onClose}
                className="p-2.5 rounded-xl border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8] font-bold text-center hover:bg-[#38BDF8]/20 transition-colors"
              >
                Lazada Finds
              </Link>
            </div>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="p-5 border-t border-white/10 bg-[#12131A] space-y-3">
          <Link
            href="/admin"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white text-xs font-bold text-black hover:bg-zinc-200 transition-colors shadow-md"
          >
            <Lock className="w-3.5 h-3.5 text-black" />
            <span>Admin CMS Dashboard</span>
          </Link>

          <p className="text-[10px] text-center text-zinc-500 font-mono">
            Recommendation by Ze • Curated Online Shop Affiliate
          </p>
        </div>
      </div>
    </div>
  );
}
