"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Search,
  Heart,
  Menu,
  X,
  Lock,
  Sparkles,
  ChevronDown,
  ArrowRight,
  Flame,
  Tag,
  Shirt,
  Footprints,
  Sparkle,
  Compass,
} from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useUser } from "@/context/UserContext";
import { MobileNav } from "./MobileNav";

interface NavbarProps {
  categories?: { id: string; name: string; slug: string }[];
}

export function Navbar({ categories = [] }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { wishlistCount } = useWishlist();
  const { userName, openModal } = useUser();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Dropdown States
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const categoryTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const collectionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setIsCategoryOpen(false);
    setIsCollectionOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);

  // Click outside listener to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target as Node)
      ) {
        setIsCategoryOpen(false);
        setIsCollectionOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  // Hover handlers with smooth grace period
  const handleCategoryMouseEnter = () => {
    if (categoryTimeoutRef.current) clearTimeout(categoryTimeoutRef.current);
    setIsCollectionOpen(false);
    setIsCategoryOpen(true);
  };

  const handleCategoryMouseLeave = () => {
    categoryTimeoutRef.current = setTimeout(() => {
      setIsCategoryOpen(false);
    }, 70);
  };

  const handleCollectionMouseEnter = () => {
    if (collectionTimeoutRef.current) clearTimeout(collectionTimeoutRef.current);
    setIsCategoryOpen(false);
    setIsCollectionOpen(true);
  };

  const handleCollectionMouseLeave = () => {
    collectionTimeoutRef.current = setTimeout(() => {
      setIsCollectionOpen(false);
    }, 70);
  };

  // Quick categories for sub-bar
  const quickCategories = [
    { label: "Semua", href: "/products", icon: "✦" },
    { label: "👔 Kemeja Pria", href: "/products?subCategory=pria-kemeja", icon: "👔" },
    { label: "👕 Kaos Pria", href: "/products?subCategory=pria-kaos", icon: "👕" },
    { label: "🎒 Tas & Ransel", href: "/products?category=bags-wallets", icon: "🎒" },
    { label: "👟 Sepatu & Sandal", href: "/products?category=shoes-footwear", icon: "👟" },
    { label: "👚 Blouse Cewek", href: "/products?subCategory=wanita-blouse", icon: "👚" },
    { label: "🌙 Gamis Muslimah", href: "/products?category=gamis-muslimah", icon: "🌙" },
    { label: "😴 Piyama Rayon", href: "/products?category=piyama-sleepwear", icon: "😴" },
    { label: "🏠 Perlengkapan Rumah", href: "/products?category=aesthetic-room", icon: "🏠" },
    { label: "🍿 Camilan & Snack", href: "/products?category=food-snack", icon: "🍿" },
    { label: "✨ Skincare", href: "/products?category=skincare-beauty", icon: "✨" },
    { label: "🌸 Parfum", href: "/products?category=parfum-fragrance", icon: "🌸" },
    { label: "💍 Aksesoris", href: "/products?category=accessories-jewelry", icon: "💍" },
    { label: "Under 50k", href: "/products?price=under-50k", icon: "💸" },
    { label: "Viral Shopee", href: "/products?sort=trending", icon: "🔥" },
  ];

  return (
    <>
      <header
        ref={navContainerRef}
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B0C14]/98 backdrop-blur-md shadow-2xl border-b border-white/15"
            : "bg-[#0B0C14] border-b border-white/15"
        }`}
      >
        {/* Main Navbar Top Row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Mobile Menu Trigger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 rounded-xl text-white hover:bg-white/10 transition-colors"
                aria-label="Buka menu navigasi"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Brand Logo / Wordmark */}
            <div className="flex items-center">
              <Link href="/" className="group flex flex-col items-start leading-none">
                <span className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  Recommendation
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] font-extrabold tracking-[0.25em] uppercase text-emerald-400 mt-0.5">
                  by Ze • Curated Archive
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links (Bold, High Contrast, Crystal Clear) */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3 text-sm font-bold text-zinc-100">
              {/* 1. Beranda */}
              <Link
                href="/"
                className={`px-3.5 py-2 rounded-xl transition-all ${
                  pathname === "/"
                    ? "text-white font-extrabold bg-white/15 shadow-sm"
                    : "text-zinc-200 hover:text-white hover:bg-white/10"
                }`}
              >
                Beranda
              </Link>

              {/* 2. Semua Produk */}
              <Link
                href="/products"
                className={`px-3.5 py-2 rounded-xl transition-all ${
                  pathname === "/products" && !pathname.includes("category")
                    ? "text-white font-extrabold bg-white/15 shadow-sm"
                    : "text-zinc-200 hover:text-white hover:bg-white/10"
                }`}
              >
                Katalog Lengkap
              </Link>

              {/* 3. Dropdown Kategori Terkurasi */}
              <div
                className="relative"
                onMouseEnter={handleCategoryMouseEnter}
                onMouseLeave={handleCategoryMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setIsCategoryOpen((prev) => !prev)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all text-sm font-bold ${
                    isCategoryOpen || pathname.includes("/categories") || pathname.includes("category=")
                      ? "text-emerald-300 font-extrabold bg-emerald-500/20 border border-emerald-500/40 shadow-sm"
                      : "text-zinc-100 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>Kategori Pilihan</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isCategoryOpen ? "rotate-180 text-emerald-400" : "text-zinc-300"
                    }`}
                  />
                </button>

                {/* Mega Dropdown Menu Panel (High Contrast & Clear) */}
                {isCategoryOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[1040px] max-w-[96vw] z-50 animate-fadeIn">
                    <div className="bg-[#151724] rounded-2xl border-2 border-white/20 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.95)] text-white">
                      {/* Top Header Badge */}
                      <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-white/15">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-xs font-mono font-extrabold tracking-wider text-emerald-400 uppercase">
                            11 Kategori & Sub-Kategori Terkurasi Lengkap (896 Produk)
                          </span>
                        </div>
                        <Link
                          href="/categories"
                          className="text-xs font-bold text-zinc-200 hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5 underline underline-offset-4"
                        >
                          <span>Buka Semua Indeks Kategori</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>

                      {/* 5 Structured Columns */}
                      <div className="grid grid-cols-5 gap-3.5">
                        {/* Col 1: Fashion Pria */}
                        <div className="space-y-2">
                          <Link
                            href="/products?category=outfit-pria"
                            className="group flex items-center justify-between pb-1 border-b border-white/10"
                          >
                            <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                              <span>🛹 Outfit Pria</span>
                            </h4>
                            <span className="text-[10px] text-zinc-400 group-hover:text-emerald-300 font-mono">153+</span>
                          </Link>
                          <div className="space-y-1">
                            <Link
                              href="/products?subCategory=pria-kemeja"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">👔</span>
                                <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                                  Kemeja Pria
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Boxy, flanel, workshirt</p>
                            </Link>

                            <Link
                              href="/products?subCategory=pria-kaos"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">👕</span>
                                <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                                  Kaos & T-Shirt
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Oversize & basic tee</p>
                            </Link>

                            <Link
                              href="/products?subCategory=pria-jaket"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">🧥</span>
                                <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                                  Jaket & Hoodie
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Gorpcore, varsity, knit</p>
                            </Link>

                            <Link
                              href="/products?subCategory=pria-celana"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">👖</span>
                                <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                                  Celana Pria
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Cargo, jeans & chinos</p>
                            </Link>
                          </div>
                        </div>

                        {/* Col 2: Fashion Wanita */}
                        <div className="space-y-2">
                          <Link
                            href="/products?category=outfit-wanita"
                            className="group flex items-center justify-between pb-1 border-b border-white/10"
                          >
                            <h4 className="text-xs font-black text-pink-400 uppercase tracking-wider flex items-center gap-1.5">
                              <span>👗 Fashion Cewek</span>
                            </h4>
                            <span className="text-[10px] text-zinc-400 group-hover:text-pink-300 font-mono">119+</span>
                          </Link>
                          <div className="space-y-1">
                            <Link
                              href="/products?subCategory=wanita-blouse"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">👚</span>
                                <span className="text-xs font-bold text-white group-hover:text-pink-300 transition-colors">
                                  Blouse & Kemeja
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Blouse chic, linen shirt</p>
                            </Link>

                            <Link
                              href="/products?subCategory=wanita-croptop"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">👕</span>
                                <span className="text-xs font-bold text-white group-hover:text-pink-300 transition-colors">
                                  Crop Top & Kaos
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Baby tee & crop top</p>
                            </Link>

                            <Link
                              href="/products?subCategory=wanita-knitwear"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">🧶</span>
                                <span className="text-xs font-bold text-white group-hover:text-pink-300 transition-colors">
                                  Cardigan & Knit
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Rajut Korea adem</p>
                            </Link>

                            <Link
                              href="/products?subCategory=wanita-dress"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">👗</span>
                                <span className="text-xs font-bold text-white group-hover:text-pink-300 transition-colors">
                                  Dress & One Set
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Midi dress & setelan</p>
                            </Link>

                            <Link
                              href="/products?subCategory=wanita-rok"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">👗</span>
                                <span className="text-xs font-bold text-white group-hover:text-pink-300 transition-colors">
                                  Rok & Skirt Cantik
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Plisket, midi & rok A-line</p>
                            </Link>

                            <Link
                              href="/products?subCategory=wanita-celana"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">👖</span>
                                <span className="text-xs font-bold text-white group-hover:text-pink-300 transition-colors">
                                  Celana & Kulot
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Kulot linen & jeans baggy</p>
                            </Link>
                          </div>
                        </div>

                        {/* Col 3: Muslimah & Sleepwear */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between pb-1 border-b border-white/10">
                            <h4 className="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                              <span>🌙 Muslimah & Sleep</span>
                            </h4>
                            <span className="text-[10px] text-zinc-400 font-mono">97+</span>
                          </div>
                          <div className="space-y-1">
                            <Link
                              href="/products?subCategory=muslim-gamis"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">🌙</span>
                                <span className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                                  Gamis & Abaya
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Abaya malika, brokat</p>
                            </Link>

                            <Link
                              href="/products?subCategory=muslim-hijab"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">🧕</span>
                                <span className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                                  Hijab & Pashmina
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Pashmina silk, instan</p>
                            </Link>

                            <Link
                              href="/products?subCategory=muslim-tunik"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">✨</span>
                                <span className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                                  Tunik Muslimah
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Tunik modis sopan</p>
                            </Link>

                            <Link
                              href="/products?subCategory=sleep-piyama"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">😴</span>
                                <span className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                                  Piyama Rayon
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Katun rayon adem tidur</p>
                            </Link>

                            <Link
                              href="/products?subCategory=sleep-daster"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">🩳</span>
                                <span className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                                  Daster Santai
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Daster busui santai</p>
                            </Link>
                          </div>
                        </div>

                        {/* Col 4: Tas & Sepatu (Dipisah!) */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between pb-1 border-b border-white/10">
                            <h4 className="text-xs font-black text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                              <span>🎒 Tas & Sepatu</span>
                            </h4>
                            <span className="text-[10px] text-zinc-400 font-mono">302+</span>
                          </div>
                          <div className="space-y-1">
                            <Link
                              href="/products?subCategory=tas-ransel"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">🎒</span>
                                <span className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                                  Tas Ransel Laptop
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Backpack kantor & kuliah</p>
                            </Link>

                            <Link
                              href="/products?subCategory=tas-sling"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">👜</span>
                                <span className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                                  Slingbag Selempang
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Shoulder & chest bag</p>
                            </Link>

                            <Link
                              href="/products?subCategory=tas-dompet"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">👛</span>
                                <span className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                                  Dompet & Card Case
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Dompet lipat kulit</p>
                            </Link>

                            <Link
                              href="/products?category=shoes-footwear"
                              className="group block p-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">👟</span>
                                <span className="text-xs font-bold text-sky-300 group-hover:text-white transition-colors">
                                  Sepatu & Sneakers
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Sneakers retro & casual</p>
                            </Link>

                            <Link
                              href="/products?subCategory=sepatu-sandal"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">🩴</span>
                                <span className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                                  Sandal Slop Empuk
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Sandal slide EVA awet</p>
                            </Link>

                            <Link
                              href="/products?subCategory=sepatu-heels"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">👠</span>
                                <span className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                                  Heels & Flat Shoes
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">High heels, flat & mules</p>
                            </Link>
                          </div>
                        </div>

                        {/* Col 5: Rumah, Snack & Lifestyle */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between pb-1 border-b border-white/10">
                            <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                              <span>🏠 Ol Shop & Rumah</span>
                            </h4>
                            <span className="text-[10px] text-zinc-400 font-mono">225+</span>
                          </div>
                          <div className="space-y-1">
                            <Link
                              href="/products?category=aesthetic-room"
                              className="group block p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">🏠</span>
                                <span className="text-xs font-bold text-emerald-300 group-hover:text-white transition-colors">
                                  Perlengkapan Rumah
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Tumbler dingin & dekor kost</p>
                            </Link>

                            <Link
                              href="/products?category=food-snack"
                              className="group block p-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">🍿</span>
                                <span className="text-xs font-bold text-amber-300 group-hover:text-white transition-colors">
                                  Camilan & Snack
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Basreng pedas & promo dapur</p>
                            </Link>

                            <Link
                              href="/products?category=accessories-jewelry"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">💍</span>
                                <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                                  Aksesoris Titanium
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Gelang, cincin & jedai</p>
                            </Link>

                            <Link
                              href="/products?category=skincare-beauty"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">✨</span>
                                <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                                  Skincare Glowing
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Serum, toner & sunscreen</p>
                            </Link>

                            <Link
                              href="/products?category=parfum-fragrance"
                              className="group block p-1.5 rounded-lg bg-white/[0.02] hover:bg-white/10 border border-transparent hover:border-white/15 transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-sm">🌸</span>
                                <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                                  Parfum Tahan Lama
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-300 line-clamp-1 pl-5">Extrait de parfum mewah</p>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Quick Feature Strip */}
                      <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between bg-white/[0.04] -mx-5 -mb-5 p-3.5 rounded-b-2xl">
                        <span className="text-xs font-semibold text-zinc-200">
                          Temukan produk online shop pilihan dengan harga hemat di bawah Rp 50.000
                        </span>
                        <div className="flex items-center gap-2">
                          <Link
                            href="/products?price=under-50k"
                            className="px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-extrabold transition-all shadow-md inline-flex items-center gap-1"
                          >
                            <span>Under 50k 💸</span>
                          </Link>
                          <Link
                            href="/products?sort=trending"
                            className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all inline-flex items-center gap-1"
                          >
                            <span>Viral Shopee 🔥</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Dropdown Koleksi Spesial */}
              <div
                className="relative"
                onMouseEnter={handleCollectionMouseEnter}
                onMouseLeave={handleCollectionMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setIsCollectionOpen((prev) => !prev)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all text-sm font-bold ${
                    isCollectionOpen || pathname.includes("/collections")
                      ? "text-emerald-300 font-extrabold bg-emerald-500/20 border border-emerald-500/40 shadow-sm"
                      : "text-zinc-100 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Koleksi Spesial</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isCollectionOpen ? "rotate-180 text-emerald-400" : "text-zinc-300"
                    }`}
                  />
                </button>

                {/* Compact Dropdown Menu (High Contrast) */}
                {isCollectionOpen && (
                  <div className="absolute top-full left-0 pt-2.5 w-72 z-50 animate-fadeIn">
                    <div className="bg-[#151724] rounded-2xl border-2 border-white/20 p-3 shadow-2xl space-y-1.5 text-white">
                      <Link
                        href="/collections/best-seller-shopee"
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/10 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                          <Flame className="w-4 h-4 text-orange-400" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                            Best Seller 10RB+ Terjual
                          </p>
                          <p className="text-xs text-zinc-300 font-medium">
                            Paling banyak di-checkout di Shopee
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/products?price=under-50k"
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/10 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                          <Tag className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                            Pilihan Under 50k
                          </p>
                          <p className="text-xs text-zinc-300 font-medium">
                            Harga ekonomis ramah dompet
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/products?sort=trending"
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/10 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                          <Sparkles className="w-4 h-4 text-amber-400" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                            Viral TikTok & FYP
                          </p>
                          <p className="text-xs text-zinc-300 font-medium">
                            Paling ramai dibicarakan minggu ini
                          </p>
                        </div>
                      </Link>

                      <div className="pt-2 mt-1 border-t border-white/15">
                        <Link
                          href="/collections"
                          className="flex items-center justify-between p-2 rounded-xl text-xs font-bold text-zinc-200 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <span>Semua Koleksi Tematik</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 5. Tentang Ze */}
              <Link
                href="/about"
                className={`px-3.5 py-2 rounded-xl transition-all ${
                  pathname === "/about"
                    ? "text-white font-extrabold bg-white/15 shadow-sm"
                    : "text-zinc-200 hover:text-white hover:bg-white/10"
                }`}
              >
                Tentang
              </Link>
            </nav>

            {/* Right: Actions (Search, Wishlist, User VIP, Admin) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Toggle Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2.5 rounded-full text-zinc-100 hover:text-white hover:bg-white/15 transition-colors"
                aria-label="Cari produk"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Link */}
              <Link
                href="/wishlist"
                className="p-2.5 rounded-full text-zinc-100 hover:text-white hover:bg-white/15 transition-colors relative"
                aria-label={`Wishlist (${wishlistCount} item)`}
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 bg-emerald-400 text-black text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-[#0B0C14]">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* User VIP Badge / Name Spill Button */}
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all shadow-sm"
                title="Ganti nama atau vibe kamu"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                <span className="max-w-[85px] sm:max-w-[120px] truncate">
                  {userName ? userName : "Spill Nama"}
                </span>
              </button>

              {/* Admin Portal Shortcut */}
              <Link
                href="/admin"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-bold text-zinc-200 hover:text-white hover:bg-white/15 transition-all"
                title="Admin Dashboard"
              >
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Admin</span>
              </Link>
            </div>
          </div>

          {/* Expandable Search Input Bar */}
          {isSearchOpen && (
            <div className="mt-3 pt-3 border-t border-white/15 animate-fadeIn">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center max-w-2xl mx-auto">
                <Search className="absolute left-3.5 w-4 h-4 text-zinc-300" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari ransel, perhiasan titanium, gamis, skincare, parfum, outfit, atau No. Bio (#07)..."
                  className="w-full pl-10 pr-24 py-2.5 rounded-full bg-[#151724] border-2 border-white/20 text-sm font-medium text-white placeholder:text-zinc-400 focus:outline-none focus:border-emerald-400 transition-all"
                  autoFocus
                />
                <div className="absolute right-1.5 flex items-center gap-1">
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors shadow-md"
                  >
                    Cari
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="p-1.5 text-zinc-300 hover:text-white"
                    aria-label="Tutup pencarian"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Secondary Category Quick Bar (Always Readable Directly on Desktop) */}
        <div className="hidden lg:block border-t border-white/10 bg-[#090A0F]/90 px-4 sm:px-6 lg:px-8 py-2">
          <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <span>⚡ Rekomendasi Cepat:</span>
            </span>
            {quickCategories.map((cat) => {
              const isActive =
                cat.href === "/products"
                  ? pathname === "/products" && !pathname.includes("category") && !pathname.includes("price") && !pathname.includes("sort")
                  : pathname + (typeof window !== "undefined" ? window.location.search : "") === cat.href;
              return (
                <Link
                  key={cat.label}
                  href={cat.href}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all shrink-0 border ${
                    isActive
                      ? "bg-white text-black border-white shadow-sm font-extrabold"
                      : "bg-white/[0.04] text-zinc-200 border-white/10 hover:border-white/25 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        categories={categories}
      />
    </>
  );
}
