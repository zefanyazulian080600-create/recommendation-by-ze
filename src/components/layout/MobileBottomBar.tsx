"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Flame, Heart, Sparkles } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

export function MobileBottomBar() {
  const pathname = usePathname();
  const { wishlistCount } = useWishlist();

  // Don't show bottom bar inside admin pages
  if (pathname.startsWith("/admin")) {
    return null;
  }

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Katalog", href: "/products", icon: Search },
    { label: "Viral FYP", href: "/products?sort=trending", icon: Flame, isHot: true },
    { label: "Wishlist", href: "/wishlist", icon: Heart, count: wishlistCount },
    { label: "Koleksi", href: "/collections", icon: Sparkles },
  ];

  return (
    <div className="fixed bottom-3 inset-x-3 z-40 lg:hidden pointer-events-none">
      <div className="max-w-md mx-auto bg-vanilla/95 backdrop-blur-xl rounded-full shadow-2xl border-2 border-espresso p-1.5 flex items-center justify-around pointer-events-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href.split("?")[0]) && item.href !== "/";

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`relative flex flex-col items-center justify-center py-1.5 px-3 rounded-full transition-all tap-bounce ${
                isActive
                  ? "bg-butter-400 text-espresso font-extrabold shadow-sm border border-espresso"
                  : "text-espresso-100 hover:text-espresso"
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform ${
                    isActive ? "scale-110 text-espresso stroke-[2.5]" : "stroke-[1.75]"
                  } ${item.isHot && !isActive ? "text-[#EE4D2D]" : ""}`}
                />

                {/* Badge for Wishlist */}
                {typeof item.count === "number" && item.count > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-espresso text-vanilla text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-vanilla shadow-sm">
                    {item.count > 9 ? "9+" : item.count}
                  </span>
                )}

                {/* Tiny Hot Dot */}
                {item.isHot && !isActive && (
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#EE4D2D] animate-ping" />
                )}
              </div>

              <span className="text-[10px] mt-0.5 tracking-tight font-bold">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
