"use client";

import React from "react";
import { ShieldCheck, Sparkles, Store, TrendingUp, Lightbulb, CheckCircle2 } from "lucide-react";
import { Product } from "@/types";

interface ZeCuratorReviewProps {
  product: Product;
}

export function ZeCuratorReview({ product }: ZeCuratorReviewProps) {
  // Extract shop name and sales count from price_note or product data
  let shopName = "Official / Star Seller";
  let sales = "1RB+";

  if (product.price_note) {
    const match = product.price_note.match(/Terjual\s+([^\s]+)\s+di\s+([^•]+)/i);
    if (match) {
      sales = match[1].trim();
      shopName = match[2].trim();
    }
  }

  // Clean raw description by removing markdown artifacts (#, *, **)
  const cleanDescription = (rawText: string) => {
    if (!rawText) return "";
    return rawText
      .replace(/#{1,6}\s*/g, "") // remove # headings
      .replace(/\*\*/g, "")      // remove ** bold
      .replace(/\*/g, "")       // remove * bullets
      .replace(/_{1,2}/g, "")    // remove _ italic
      .trim();
  };

  // Determine why Ze recommends it
  let recommendationReason = `Produk ${product.name} ini masuk dalam kurasi pilihan Ze karena memiliki performa penjualan tinggi (${sales} terjual di Shopee) dengan ulasan positif dan konsistensi kualitas dari toko ${shopName}.`;

  // Check if raw description contains custom notes
  if (product.description) {
    const cleaned = cleanDescription(product.description);
    // If it was the generated template, extract the natural text
    if (cleaned.includes("Kenapa Ze Rekomendasiin Produk Ini?")) {
      const parts = cleaned.split(/Material & Detail|Tips Checkout/i);
      if (parts[0]) {
        recommendationReason = parts[0]
          .replace("Kenapa Ze Rekomendasiin Produk Ini?", "")
          .trim();
      }
    } else if (cleaned.length > 20) {
      recommendationReason = cleaned;
    }
  }

  return (
    <div className="pt-6 space-y-5 border-t border-white/10">
      {/* Header with Curator Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500/20 to-teal-500/30 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm shadow-inner">
            ZE
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-sans text-base font-bold text-white tracking-tight">
                Ulasan & Catatan Kurasi Ze
              </h3>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-[11px] text-zinc-400">
              Diverifikasi langsung • Bebas barang zonk
            </p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium self-start sm:self-auto">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curator Approved</span>
        </div>
      </div>

      {/* 1. Alasan Ze Memilih (Curator Editorial Box) */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#12131A] border border-white/10 space-y-2 relative overflow-hidden">
        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
          <span>✨</span>
          <span>Kenapa Ze Rekomendasiin Produk Ini?</span>
        </div>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
          {recommendationReason}
        </p>
      </div>

      {/* 2. Key Highlights / Toko Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-[#12131A] border border-white/10 space-y-1">
          <div className="flex items-center gap-2 text-zinc-400 text-xs">
            <Store className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-[11px] uppercase">Toko Resmi</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-white truncate" title={shopName}>
            {shopName}
          </p>
          <span className="inline-block text-[10px] text-emerald-400 font-mono">
            Shopee Verified
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[#12131A] border border-white/10 space-y-1">
          <div className="flex items-center gap-2 text-zinc-400 text-xs">
            <TrendingUp className="w-4 h-4 text-teal-400" />
            <span className="font-mono text-[11px] uppercase">Track Record</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-white">
            {sales} Terjual
          </p>
          <span className="inline-block text-[10px] text-zinc-400 font-mono">
            Rating Tinggi 4.8+
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[#12131A] border border-white/10 space-y-1">
          <div className="flex items-center gap-2 text-zinc-400 text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-[11px] uppercase">Standar Kualitas</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-white">
            QC & Look Terjamin
          </p>
          <span className="inline-block text-[10px] text-zinc-400 font-mono">
            Jahitan & Bahan Nyaman
          </span>
        </div>
      </div>

      {/* 3. Tips Checkout Hemat */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-[#12131A] to-[#12131A] border border-emerald-500/20 flex items-start gap-3">
        <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 flex-shrink-0 mt-0.5">
          <Lightbulb className="w-4 h-4" />
        </div>
        <div className="space-y-1 text-xs">
          <h4 className="font-bold text-white">
            Tips Checkout Hemat di Shopee
          </h4>
          <p className="text-zinc-300 leading-relaxed">
            Sebelum checkout, klaim voucher toko di halaman etalase dan gunakan voucher Gratis Ongkir XTRA atau Cashback Shopee agar kamu mendapatkan total harga paling hemat.
          </p>
        </div>
      </div>
    </div>
  );
}
