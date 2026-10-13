"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Search,
  Heart,
  Menu,
  X,
  Lock,
  Sparkles,
  User,
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  const navLinks = [
    { label: "Semua", href: "/products" },
    { label: "⚡ Viral Ol Shop", href: "/products?sort=trending" },
    { label: "🎧 Tech & Setup", href: "/products?category=desk-setup-gadget" },
    { label: "🏠 Kamar & Kost", href: "/products?category=aesthetic-room" },
    { label: "🧴 Skincare", href: "/products?category=skincare-grooming" },
    { label: "👕 Fashion", href: "/products?category=outfit-pria" },
    { label: "💸 Under 50k", href: "/products?price=under-50k" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#090A0F]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3"
            : "bg-[#090A0F] border-b border-white/10 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 rounded-xl text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Buka menu navigasi"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Center-Left: Brand Wordmark */}
            <div className="flex items-center">
              <Link href="/" className="group flex flex-col items-start leading-none">
                <span className="font-editorial text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  Recommendation
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase text-emerald-400 mt-0.5">
                  by Ze • Curated Archive
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs uppercase tracking-wider font-semibold">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors relative py-1 ${
                      isActive ? "text-white font-bold" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Actions (Search, Wishlist, User VIP, Admin) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Toggle Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Cari produk"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Link */}
              <Link
                href="/wishlist"
                className="p-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors relative"
                aria-label={`Wishlist (${wishlistCount} item)`}
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 bg-emerald-400 text-black text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-[#090A0F]">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* User VIP Badge / Name Spill Button */}
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
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
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/15 transition-all"
                title="Admin Dashboard"
              >
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Admin</span>
              </Link>
            </div>
          </div>

          {/* Expandable Search Input Bar */}
          {isSearchOpen && (
            <div className="mt-3 pt-3 border-t border-white/10 animate-fadeIn">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center max-w-2xl mx-auto">
                <Search className="absolute left-3.5 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari gadget, kamar estetik, skincare, outfit, atau No. Bio (#07)..."
                  className="w-full pl-10 pr-24 py-2.5 rounded-full bg-[#12131A] border border-white/20 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-400 transition-all"
                  autoFocus
                />
                <div className="absolute right-1.5 flex items-center gap-1">
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors"
                  >
                    Cari
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="p-1.5 text-zinc-400 hover:text-white"
                    aria-label="Tutup pencarian"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}
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
