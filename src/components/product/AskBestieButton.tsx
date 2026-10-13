"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { Product } from "@/types";
import { formatRupiah } from "@/lib/utils";
import { useToast } from "@/context/ToastContext";

interface AskBestieButtonProps {
  product: Product;
  className?: string;
}

export function AskBestieButton({ product, className = "" }: AskBestieButtonProps) {
  const { showToast } = useToast();

  const handleShareToWhatsApp = () => {
    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://recommendation-by-ze.vercel.app";
    const productUrl = `${origin}/product/${product.slug}`;
    const spillNo = product.spill_number
      ? `[No. #${String(product.spill_number).padStart(2, "0")}]`
      : "";

    const message = `Eh spill racun dari Recommendation by Ze nih! ${spillNo} 👀✨\n\n📌 *${product.name}*\n💸 Harga: ${formatRupiah(product.price)}\n\nMenurut lo mending gue bungkus ini gak? Bagusan warna apa ya? 👇\n${productUrl}`;

    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

    showToast("Membuka WhatsApp untuk tanya bestie... 💬", "success");
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleShareToWhatsApp}
      className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/15 text-emerald-300 hover:bg-[#25D366]/25 transition-all font-bold text-xs sm:text-sm tap-bounce shadow-sm hover:shadow-md ${className}`}
      title="Tanya pendapat teman atau pasangan di WhatsApp"
    >
      <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]/20" />
      <span>Tanya Bestie di WhatsApp 💬</span>
    </button>
  );
}
