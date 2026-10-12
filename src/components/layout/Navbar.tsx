"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Search,
  Heart,
  Menu,
  X,
  ShoppingBag,
  Sparkles,
  SlidersHorizontal,
  Lock,
} from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { MobileNav } from "./MobileNav";

interface NavbarProps {
  categories?: { id: string; name: string; slug: string }[];
}

export function Navbar({ categories = [] }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { wishlistCount } = useWishlist();

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
    { label: "Outfit & Fashion", href: "/products?category=outfit-wanita" },
    { label: "Beauty & Skincare", href: "/products?category=beauty-skincare" },
    { label: "Aesthetic Room", href: "/products?category=aesthetic-room" },
    { label: "Desk & Gadget", href: "/products?category=desk-setup-gadget" },
    { label: "Koleksi Tematik", href: "/collections" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-ivory-50/95 backdrop-blur-md shadow-sm border-b border-softgray-border py-2.5"
            : "bg-ivory border-b border-softgray py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 rounded-lg text-charcoal hover:bg-blush-100 transition-colors"
                aria-label="Buka menu navigasi"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Center-Left: Brand Wordmark */}
            <div className="flex items-center">
              <Link href="/" className="group flex flex-col items-start leading-none">
                <span className="font-editorial text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-charcoal group-hover:text-rose transition-colors">
                  Recommendation
                </span>
                <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-rose mt-0.5">
                  by Ze
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors hover:text-rose relative py-1 ${
                      isActive ? "text-rose font-semibold" : "text-charcoal-200"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose rounded-full" />
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
                className="p-2 rounded-full text-charcoal hover:bg-blush-100 transition-colors"
                aria-label="Cari produk"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Link */}
              <Link
                href="/wishlist"
                className="p-2 rounded-full text-charcoal hover:bg-blush-100 transition-colors relative"
                aria-label={`Wishlist (${wishlistCount} item)`}
              >
                <Heart className="w-5 h-5 text-charcoal hover:text-rose transition-colors" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 bg-rose text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-ivory">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Admin Portal Shortcut */}
              <Link
                href="/admin"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-softgray-border bg-white text-xs font-medium text-charcoal-200 hover:text-charcoal hover:border-charcoal transition-all shadow-sm"
                title="Admin Dashboard"
              >
                <Lock className="w-3.5 h-3.5 text-rose" />
                <span>Admin</span>
              </Link>
            </div>
          </div>

          {/* Expandable Search Input Bar */}
          {isSearchOpen && (
            <div className="mt-3 pt-3 border-t border-softgray animate-fadeIn">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center max-w-2xl mx-auto">
                <Search className="absolute left-3.5 w-4 h-4 text-charcoal-50" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari outfit, skincare, perintilan aesthetic, keyboard..."
                  className="w-full pl-10 pr-24 py-2.5 rounded-full bg-white border border-softgray-border text-sm text-charcoal placeholder:text-charcoal-50 focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-rose transition-all shadow-sm"
                  autoFocus
                />
                <div className="absolute right-1.5 flex items-center gap-1">
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 rounded-full bg-charcoal text-white text-xs font-medium hover:bg-rose transition-colors"
                  >
                    Cari
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="p-1.5 text-charcoal-50 hover:text-charcoal"
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
