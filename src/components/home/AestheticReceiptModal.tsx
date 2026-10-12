"use client";

import React, { useRef } from "react";
import { X, Sparkles, Download, Share2, Check, Flame } from "lucide-react";
import { formatRupiah } from "@/lib/utils";
import { useUser } from "@/context/UserContext";
import { triggerConfetti } from "@/lib/confetti";
import { useToast } from "@/context/ToastContext";

export interface ReceiptItem {
  name: string;
  price: number;
  category?: string;
}

interface AestheticReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  lookTitle?: string;
  items: ReceiptItem[];
  customTotal?: number;
}

export function AestheticReceiptModal({
  isOpen,
  onClose,
  lookTitle = "OOTD Lookbook Set",
  items,
  customTotal,
}: AestheticReceiptModalProps) {
  const { userName, userVibe } = useUser();
  const { showToast } = useToast();
  const receiptRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const total = customTotal ?? items.reduce((acc, curr) => acc + curr.price, 0);
  const now = new Date();
  const formattedDate = now.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const formattedTime = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const receiptId = `ZE-${Math.floor(100000 + Math.random() * 900000)}`;

  const handleShare = () => {
    triggerConfetti();
    showToast("📸 Screenshot struk ini & tag @recommendationbyze di IG Story ya! ✨", "success");
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-espresso/80 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-sm max-h-[92vh] flex flex-col bg-white text-espresso rounded-3xl border-4 border-espresso shadow-brutal-lg overflow-hidden animate-scaleUp">
        {/* Top Action Bar */}
        <div className="bg-coral text-espresso px-5 py-3 border-b-3 border-espresso flex items-center justify-between font-black text-xs uppercase tracking-wider flex-shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 fill-espresso" />
            <span>AESTHETIC THERMAL RECEIPT 🧾</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full bg-vanilla/40 hover:bg-vanilla text-espresso transition-all border border-espresso/30"
            aria-label="Tutup struk"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Receipt Body */}
        <div className="p-6 overflow-y-auto space-y-4 font-mono text-xs select-text bg-[#FAF8F5]" ref={receiptRef}>
          {/* Header */}
          <div className="text-center space-y-1 border-b-2 border-dashed border-espresso/40 pb-4">
            <h3 className="font-editorial text-xl font-bold tracking-tight text-espresso font-serif">
              RECOMMENDATION BY ZE
            </h3>
            <p className="text-[10px] uppercase tracking-widest text-espresso/70 font-sans font-bold">
              Curated Fashion & Lifestyle Archive
            </p>
            <p className="text-[9px] text-espresso/60">
              www.recommendationbyze.com • Jakarta, ID
            </p>
          </div>

          {/* Meta Info */}
          <div className="space-y-1 text-[11px] border-b-2 border-dashed border-espresso/40 pb-3">
            <div className="flex justify-between">
              <span className="text-espresso/70">Receipt ID:</span>
              <span className="font-bold">{receiptId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-espresso/70">Date:</span>
              <span>{formattedDate}, {formattedTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-espresso/70">Customer:</span>
              <span className="font-black text-cobalt underline uppercase">
                {userName || "Bestie VIP"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-espresso/70">Aesthetic Vibe:</span>
              <span className="font-bold">{userVibe}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-espresso/70">Stylist:</span>
              <span>Ze Official Kurasi</span>
            </div>
          </div>

          {/* Items Table */}
          <div className="space-y-2 border-b-2 border-dashed border-espresso/40 pb-4">
            <div className="flex justify-between font-bold text-[10px] uppercase text-espresso/60 pb-1">
              <span>ITEM DESCRIPTION</span>
              <span>PRICE</span>
            </div>

            {items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-baseline gap-2">
                <span className="truncate max-w-[200px]">
                  {idx + 1}. {item.name}
                </span>
                <span className="font-bold flex-shrink-0">
                  {formatRupiah(item.price)}
                </span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="space-y-1.5 border-b-2 border-dashed border-espresso/40 pb-3 text-[11px]">
            <div className="flex justify-between">
              <span className="text-espresso/70">Subtotal ({items.length} items):</span>
              <span>{formatRupiah(total)}</span>
            </div>
            <div className="flex justify-between text-green-700 font-bold">
              <span>Biaya Kurasi Ze:</span>
              <span>GRATIS (Rp 0)</span>
            </div>
            <div className="flex justify-between text-base font-black pt-1 border-t border-espresso/20">
              <span>TOTAL DAMAGE:</span>
              <span>{formatRupiah(total)}</span>
            </div>
          </div>

          {/* Witty Footnote & Barcode */}
          <div className="text-center space-y-3 pt-2">
            <p className="text-[10px] text-espresso/80 italic leading-snug px-2">
              &quot;Status dompet kamu: Masih aman buat nongkrong kopi susu sampai akhir bulan! Jangan lupa checkout sebelum kehabisan size. 💸✨&quot;
            </p>

            {/* Fake Thermal Barcode */}
            <div className="py-1 flex flex-col items-center">
              <div className="w-full h-9 flex items-center justify-center gap-0.5 overflow-hidden opacity-85">
                {[4, 2, 6, 1, 3, 5, 2, 7, 1, 4, 3, 6, 2, 5, 1, 8, 3, 4, 2, 6, 1, 5, 3, 7, 2, 4, 1, 6, 3].map(
                  (width, i) => (
                    <span
                      key={i}
                      className="bg-espresso h-full inline-block"
                      style={{ width: `${width * 1.5}px` }}
                    />
                  )
                )}
              </div>
              <span className="text-[9px] tracking-[0.3em] font-bold text-espresso/70 mt-1">
                *THANK YOU FOR SLAYING*
              </span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-vanilla border-t-3 border-espresso flex items-center gap-2 flex-shrink-0">
          <button
            type="button"
            onClick={handleShare}
            className="btn-3d flex-1 py-3 px-4 bg-coral hover:bg-coral-dark text-espresso font-black text-xs uppercase tracking-wider rounded-2xl border-2 border-espresso shadow-brutal hover:shadow-brutal-sm flex items-center justify-center gap-2 transition-all"
          >
            <Share2 className="w-4 h-4" />
            <span>Screenshot & Share IG Story 📸</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AestheticReceiptModal;
