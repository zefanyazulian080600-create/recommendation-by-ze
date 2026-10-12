"use client";

import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Product } from "@/types";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/context/ToastContext";

interface WishlistButtonProps {
  product: Product;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function WishlistButton({
  product,
  className = "",
  size = "md",
}: WishlistButtonProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();
  const active = isInWishlist(product.id);
  const [animate, setAnimate] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAnimate(true);
    toggleWishlist(product);
    if (!active) {
      showToast(`Disimpan ke Wishlist kamu! ❤️`, "wishlist");
    } else {
      showToast(`Dihapus dari Wishlist`, "info");
    }
    setTimeout(() => setAnimate(false), 300);
  };

  const sizeClasses = {
    sm: "w-7 h-7 p-1.5",
    md: "w-9 h-9 p-2",
    lg: "w-11 h-11 p-2.5",
  }[size];

  const iconSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  }[size];

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={active ? "Hapus dari wishlist" : "Simpan ke wishlist"}
      className={`rounded-full bg-white/90 backdrop-blur-md shadow-card hover:bg-white flex items-center justify-center transition-all ${sizeClasses} ${
        animate ? "scale-125" : "scale-100"
      } ${className}`}
    >
      <Heart
        className={`${iconSizes} transition-colors ${
          active
            ? "text-rose fill-rose"
            : "text-charcoal-100 hover:text-rose fill-transparent"
        }`}
      />
    </button>
  );
}
