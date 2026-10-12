"use client";

import React from "react";
import Link from "next/link";
import {
  X,
  Heart,
  ShoppingBag,
  Sparkles,
  Lock,
  ExternalLink,
  ChevronRight,
  Shirt,
  Flame,
  Home,
  Laptop,
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
        className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-ivory shadow-xl flex flex-col z-10 overflow-y-auto animate-slideRight">
        {/* Header */}
        <div className="p-5 border-b border-softgray flex items-center justify-between">
          <Link href="/" onClick={onClose} className="flex flex-col">
            <span className="font-editorial text-xl font-medium tracking-tight text-charcoal">
              Recommendation
            </span>
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-rose">
              by Ze
            </span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 -mr-2 rounded-lg text-charcoal hover:bg-blush-100 transition-colors"
            aria-label="Tutup menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-6 flex-1">
          {/* User VIP Greeting Card */}
          <div className="p-3.5 rounded-2xl bg-butter-500 border-2 border-espresso flex items-center justify-between shadow-brutal-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-vanilla border border-espresso flex items-center justify-center font-black text-xs text-espresso">
                {userName ? userName.charAt(0).toUpperCase() : "✨"}
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-espresso/70">VIP Member</p>
                <p className="text-xs font-black text-espresso">{userName || "Spill Nama Kamu"}</p>
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                openModal();
              }}
              className="text-[10px] font-black underline text-espresso hover:text-matcha-600 transition-colors"
            >
              {userName ? "Ubah Vibe" : "Isi Nama ✨"}
            </button>
          </div>

          {/* Quick Wishlist Banner */}
          <Link
            href="/wishlist"
            onClick={onClose}
            className="flex items-center justify-between p-3 rounded-xl bg-blush-100 border border-blush-300 text-charcoal font-medium text-sm transition-all hover:bg-blush-200"
          >
            <div className="flex items-center gap-2.5">
              <Heart className="w-4 h-4 text-rose fill-rose/20" />
              <span>Wishlist Saya</span>
            </div>
            <span className="bg-rose text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {wishlistCount}
            </span>
          </Link>

          {/* Primary Navigation */}
          <div>
            <h4 className="text-[11px] font-semibold text-charcoal-50 uppercase tracking-wider mb-2">
              Jelajahi Rekomendasi
            </h4>
            <div className="space-y-1">
              <Link
                href="/products"
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm text-charcoal hover:bg-softgray transition-colors"
              >
                <span>Semua Produk Ol Shop</span>
                <ChevronRight className="w-4 h-4 text-charcoal-50" />
              </Link>
              <Link
                href="/collections"
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm text-charcoal hover:bg-softgray transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-rose" />
                  <span>Koleksi Tematik</span>
                </div>
                <ChevronRight className="w-4 h-4 text-charcoal-50" />
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-[11px] font-semibold text-charcoal-50 uppercase tracking-wider mb-2">
              Kategori Favorit
            </h4>
            <div className="space-y-1">
              <Link
                href="/products?category=outfit-pria"
                onClick={onClose}
                className="flex items-center justify-between py-2 px-3 rounded-lg text-sm text-charcoal-200 hover:text-charcoal hover:bg-softgray transition-colors"
              >
                <span>🛹 Outfit Pria (Bro Look)</span>
                <ChevronRight className="w-3.5 h-3.5 text-charcoal-50" />
              </Link>
              <Link
                href="/products?category=outfit-wanita"
                onClick={onClose}
                className="flex items-center justify-between py-2 px-3 rounded-lg text-sm text-charcoal-200 hover:text-charcoal hover:bg-softgray transition-colors"
              >
                <span>👗 Outfit Wanita</span>
                <ChevronRight className="w-3.5 h-3.5 text-charcoal-50" />
              </Link>
              <Link
                href="/products?category=outfit-unisex"
                onClick={onClose}
                className="flex items-center justify-between py-2 px-3 rounded-lg text-sm text-charcoal-200 hover:text-charcoal hover:bg-softgray transition-colors"
              >
                <span>🧢 Unisex & Streetwear</span>
                <ChevronRight className="w-3.5 h-3.5 text-charcoal-50" />
              </Link>
              <Link
                href="/products?category=skincare-grooming"
                onClick={onClose}
                className="flex items-center justify-between py-2 px-3 rounded-lg text-sm text-charcoal-200 hover:text-charcoal hover:bg-softgray transition-colors"
              >
                <span>💧 Skincare & Grooming</span>
                <ChevronRight className="w-3.5 h-3.5 text-charcoal-50" />
              </Link>
              <Link
                href="/products?category=desk-setup-gadget"
                onClick={onClose}
                className="flex items-center justify-between py-2 px-3 rounded-lg text-sm text-charcoal-200 hover:text-charcoal hover:bg-softgray transition-colors"
              >
                <span>🎧 Desk Setup & Gadget</span>
                <ChevronRight className="w-3.5 h-3.5 text-charcoal-50" />
              </Link>
              <Link
                href="/products?category=aesthetic-room"
                onClick={onClose}
                className="flex items-center justify-between py-2 px-3 rounded-lg text-sm text-charcoal-200 hover:text-charcoal hover:bg-softgray transition-colors"
              >
                <span>🪴 Aesthetic Room & Home</span>
                <ChevronRight className="w-3.5 h-3.5 text-charcoal-50" />
              </Link>
              <Link
                href="/products?category=bags-shoes"
                onClick={onClose}
                className="flex items-center justify-between py-2 px-3 rounded-lg text-sm text-charcoal-200 hover:text-charcoal hover:bg-softgray transition-colors"
              >
                <span>👟 Shoes & Bags</span>
                <ChevronRight className="w-3.5 h-3.5 text-charcoal-50" />
              </Link>
            </div>
          </div>

          {/* Shop by Marketplace */}
          <div>
            <h4 className="text-[11px] font-semibold text-charcoal-50 uppercase tracking-wider mb-2">
              Berdasarkan Marketplace
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link
                href="/products?marketplace=shopee"
                onClick={onClose}
                className="p-2.5 rounded-lg border border-[#EE4D2D]/20 bg-[#EE4D2D]/5 text-[#EE4D2D] font-medium text-center hover:bg-[#EE4D2D]/10 transition-colors"
              >
                Shopee Finds
              </Link>
              <Link
                href="/products?marketplace=tokopedia"
                onClick={onClose}
                className="p-2.5 rounded-lg border border-[#03AC0E]/20 bg-[#03AC0E]/5 text-[#03AC0E] font-medium text-center hover:bg-[#03AC0E]/10 transition-colors"
              >
                Tokopedia Finds
              </Link>
              <Link
                href="/products?marketplace=tiktok"
                onClick={onClose}
                className="p-2.5 rounded-lg border border-black/20 bg-black/5 text-black font-medium text-center hover:bg-black/10 transition-colors"
              >
                TikTok Shop
              </Link>
              <Link
                href="/products?marketplace=lazada"
                onClick={onClose}
                className="p-2.5 rounded-lg border border-[#0F146D]/20 bg-[#0F146D]/5 text-[#0F146D] font-medium text-center hover:bg-[#0F146D]/10 transition-colors"
              >
                Lazada Finds
              </Link>
            </div>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="p-5 border-t border-softgray bg-ivory-200/50 space-y-3">
          <Link
            href="/admin"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-softgray-border bg-white text-xs font-semibold text-charcoal hover:bg-softgray transition-colors shadow-sm"
          >
            <Lock className="w-3.5 h-3.5 text-rose" />
            <span>Admin CMS Dashboard</span>
          </Link>

          <p className="text-[10px] text-center text-charcoal-50">
            Recommendation by Ze • Curated Online Shop Affiliate
          </p>
        </div>
      </div>
    </div>
  );
}
