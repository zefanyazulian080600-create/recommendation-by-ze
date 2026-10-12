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
    { label: "Semua Rekomendasi", href: "/products" },
    { label: "Outfit Cowok", href: "/products?category=outfit-pria" },
    { label: "Outfit Cewek", href: "/products?category=outfit-wanita" },
    { label: "Unisex Streetwear", href: "/products?category=outfit-unisex" },
    { label: "Skincare & Grooming", href: "/products?category=skincare-grooming" },
    { label: "Desk & Room", href: "/products?category=desk-setup-gadget" },
    { label: "Koleksi Tematik", href: "/collections" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-vanilla/95 backdrop-blur-md shadow-sm border-b-2 border-espresso/15 py-2.5"
            : "bg-vanilla border-b-2 border-espresso/15 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 rounded-xl text-espresso hover:bg-butter-300 transition-colors"
                aria-label="Buka menu navigasi"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Center-Left: Brand Wordmark */}
            <div className="flex items-center">
              <Link href="/" className="group flex flex-col items-start leading-none">
                <span className="font-editorial text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-espresso group-hover:text-matcha-600 transition-colors">
                  Recommendation
                </span>
                <span className="font-sans text-[10px] sm:text-xs font-extrabold tracking-[0.25em] uppercase text-matcha-600 mt-0.5">
                  by Ze
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors hover:text-matcha-600 relative py-1 ${
                      isActive ? "text-espresso font-extrabold" : "text-espresso-100"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-1 bg-butter-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Actions (Search, Wishlist, Admin Login) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Toggle Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-full text-espresso hover:bg-butter-300 transition-colors"
                aria-label="Cari produk"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Link */}
              <Link
                href="/wishlist"
                className="p-2 rounded-full text-espresso hover:bg-butter-300 transition-colors relative"
                aria-label={`Wishlist (${wishlistCount} item)`}
              >
                <Heart className="w-5 h-5 text-espresso hover:text-matcha-600 transition-colors" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 bg-butter-400 text-espresso text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-vanilla border border-espresso">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* User VIP Badge / Name Spill Button */}
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-espresso bg-butter-500 hover:bg-butter-400 text-espresso text-xs font-black transition-all shadow-brutal-sm"
                title="Ganti nama atau vibe kamu"
              >
                <Sparkles className="w-3.5 h-3.5 fill-espresso" />
                <span className="max-w-[85px] sm:max-w-[120px] truncate">
                  {userName ? userName : "Spill Nama"}
                </span>
              </button>

              {/* Admin Portal Shortcut */}
              <Link
                href="/admin"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-espresso bg-white text-xs font-bold text-espresso hover:bg-butter-400 transition-all shadow-sm"
                title="Admin Dashboard"
              >
                <Lock className="w-3.5 h-3.5 text-matcha-600" />
                <span>Admin</span>
              </Link>
            </div>
          </div>

          {/* Expandable Search Input Bar */}
          {isSearchOpen && (
            <div className="mt-3 pt-3 border-t border-espresso/15 animate-fadeIn">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center max-w-2xl mx-auto">
                <Search className="absolute left-3.5 w-4 h-4 text-espresso-100" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari outfit, skincare, perintilan aesthetic, keyboard..."
                  className="w-full pl-10 pr-24 py-2.5 rounded-full bg-white border-2 border-espresso text-sm text-espresso placeholder:text-espresso-50 focus:outline-none focus:ring-2 focus:ring-butter-400 transition-all shadow-sm"
                  autoFocus
                />
                <div className="absolute right-1.5 flex items-center gap-1">
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-full bg-espresso text-vanilla text-xs font-bold hover:bg-butter-400 hover:text-espresso transition-colors"
                  >
                    Cari
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="p-1.5 text-espresso-100 hover:text-espresso"
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
