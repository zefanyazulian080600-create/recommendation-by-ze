"use client";

import React, { useRef } from "react";
import { Sparkles, X, Share2, ExternalLink } from "lucide-react";
import { formatRupiah } from "@/lib/utils";
import { useUser } from "@/context/UserContext";
import { useToast } from "@/context/ToastContext";

interface ReceiptItem {
  name: string;
  price: number;
  marketplace?: string;
  affiliateUrl?: string;
}

interface AestheticReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: ReceiptItem[];
  total?: number;
  customTotal?: number;
  lookTitle?: string;
}

export function AestheticReceiptModal({
  isOpen,
  onClose,
  items,
  total,
  customTotal,
  lookTitle,
}: AestheticReceiptModalProps) {
  const { userName, userVibe } = useUser();
  const { showToast } = useToast();
  const receiptRef = useRef<HTMLDivElement>(null);

  const effectiveTotal =
    customTotal !== undefined
      ? customTotal
      : total !== undefined
      ? total
      : items.reduce((acc, it) => acc + (it.price || 0), 0);

  if (!isOpen) return null;

  const now = new Date();
  const formattedDate = now.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const formattedTime = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const receiptId = `ZE-${Math.floor(100000 + Math.random() * 900000)}`;

  const handleShare = async () => {
    showToast("📸 Screenshot struk ini untuk share ke IG Story / TikTok!", "info");
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-sm max-h-[92vh] flex flex-col bg-[#12131A] text-white rounded-2xl border border-white/20 shadow-2xl overflow-hidden animate-scaleUp">
        {/* Top Action Bar */}
        <div className="bg-[#12131A] text-white px-5 py-3 border-b border-white/10 flex items-center justify-between font-bold text-xs uppercase tracking-wider flex-shrink-0">
          <div className="flex items-center gap-2 text-emerald-400">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>THERMAL RECEIPT 🧾</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            aria-label="Tutup struk"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Receipt Body (Thermal Receipt Style) */}
        <div className="p-6 overflow-y-auto space-y-4 font-mono text-xs select-text bg-[#FAF8F5] text-zinc-950" ref={receiptRef}>
          {/* Header */}
          <div className="text-center space-y-1 border-b-2 border-dashed border-zinc-400 pb-4">
            <h3 className="font-editorial text-xl font-bold tracking-tight text-zinc-950 font-serif">
              RECOMMENDATION BY ZE
            </h3>
            <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-sans font-bold">
              Curated Online Shop Archive
            </p>
            <p className="text-[9px] text-zinc-500">
              www.recommendationbyze.com • Jakarta, ID
            </p>
          </div>

          {/* Meta Info */}
          <div className="space-y-1 text-[11px] border-b-2 border-dashed border-zinc-400 pb-3">
            <div className="flex justify-between">
              <span className="text-zinc-600">Receipt ID:</span>
              <span className="font-bold text-zinc-950">{receiptId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-600">Date:</span>
              <span className="text-zinc-900">{formattedDate}, {formattedTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-600">Customer:</span>
              <span className="font-black text-sky-700 underline uppercase">
                {userName || "Bestie VIP"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-600">Category/Vibe:</span>
              <span className="font-bold text-zinc-900">{userVibe}</span>
            </div>
            {lookTitle && (
              <div className="flex justify-between">
                <span className="text-zinc-600">Preset / Look:</span>
                <span className="font-bold text-zinc-900">{lookTitle}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-zinc-600">Curator:</span>
              <span className="text-zinc-900 font-medium">Ze Official Kurasi</span>
            </div>
          </div>

          {/* Items Table */}
          <div className="space-y-2 border-b-2 border-dashed border-zinc-400 pb-4">
            <div className="flex justify-between font-bold text-[10px] uppercase text-zinc-600 pb-1">
              <span>ITEM DESCRIPTION</span>
              <span>HARGA & LINK</span>
            </div>

            {items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center gap-2 py-1 border-b border-dashed border-zinc-300 last:border-0">
                <span className="truncate max-w-[170px] sm:max-w-[210px] text-xs font-semibold text-zinc-900">
                  {idx + 1}. {item.name}
                </span>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="font-bold text-xs text-zinc-950">
                    {formatRupiah(item.price)}
                  </span>
                  {item.affiliateUrl && (
                    <a
                      href={item.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-0.5 rounded-md bg-zinc-950 text-white text-[9px] font-bold hover:bg-emerald-600 transition-colors"
                      title={`Beli ${item.name} di marketplace`}
                    >
                      Beli ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="space-y-1.5 border-b-2 border-dashed border-zinc-400 pb-3 text-[11px]">
            <div className="flex justify-between">
              <span className="text-zinc-600">Subtotal ({items.length} items):</span>
              <span className="font-bold text-zinc-950">{formatRupiah(effectiveTotal)}</span>
            </div>
            <div className="flex justify-between text-emerald-700 font-bold">
              <span>Biaya Kurasi Ze:</span>
              <span>GRATIS (Rp 0)</span>
            </div>
            <div className="flex justify-between text-base font-black pt-1 border-t border-zinc-400 text-zinc-950">
              <span>TOTAL DAMAGE:</span>
              <span>{formatRupiah(effectiveTotal)}</span>
            </div>
          </div>

          {/* Witty Footnote & Barcode */}
          <div className="text-center space-y-3 pt-2">
            <p className="text-[10px] text-zinc-600 italic leading-snug px-2">
              &quot;Status dompet kamu: Masih aman buat nongkrong kopi susu sampai akhir bulan! Jangan lupa checkout sebelum kehabisan stock. 💸✨&quot;
            </p>

            {/* Fake Thermal Barcode */}
            <div className="py-1 flex flex-col items-center">
              <div className="w-full h-8 flex items-center justify-center gap-0.5 overflow-hidden opacity-90">
                {[4, 2, 6, 1, 3, 5, 2, 7, 1, 4, 3, 6, 2, 5, 1, 8, 3, 4, 2, 6, 1, 5, 3, 7, 2, 4, 1, 6, 3].map(
                  (width, i) => (
                    <span
                      key={i}
                      className="bg-zinc-950 h-full inline-block"
                      style={{ width: `${width * 1.5}px` }}
                    />
                  )
                )}
              </div>
              <span className="text-[9px] tracking-[0.3em] font-bold text-zinc-600 mt-1">
                *THANK YOU FOR SLAYING*
              </span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#12131A] border-t border-white/10 flex items-center gap-2 flex-shrink-0">
          <button
            type="button"
            onClick={handleShare}
            className="flex-1 py-3 px-4 bg-white text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-zinc-200 flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
          >
            <Share2 className="w-4 h-4 text-black" />
            <span>Screenshot & Share Story 📸</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AestheticReceiptModal;
