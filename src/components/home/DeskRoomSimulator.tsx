"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Laptop, Home, Sparkles, ShoppingBag, Receipt, Check, ArrowRight } from "lucide-react";
import { formatRupiah } from "@/lib/utils";
import { AestheticReceiptModal } from "./AestheticReceiptModal";
import { triggerConfetti } from "@/lib/confetti";
import { useToast } from "@/context/ToastContext";

interface SetupItem {
  id: string;
  name: string;
  price: number;
  image: string;
  marketplace: string;
  affiliateUrl: string;
  tag: string;
}

const GADGET_ITEMS: SetupItem[] = [
  {
    id: "g1",
    name: "Mechanical Keyboard 75% Wireless RGB",
    price: 245000,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=500&auto=format&fit=crop",
    marketplace: "Shopee",
    affiliateUrl: "https://shopee.co.id",
    tag: "Keyboard",
  },
  {
    id: "g2",
    name: "Low-Latency Gaming & Music ANC Wireless TWS",
    price: 189000,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=500&auto=format&fit=crop",
    marketplace: "TikTok Shop",
    affiliateUrl: "https://tiktok.com",
    tag: "Audio TWS",
  },
  {
    id: "g3",
    name: "Alumunium Foldable Desk Phone & Tablet Stand",
    price: 49000,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=500&auto=format&fit=crop",
    marketplace: "Tokopedia",
    affiliateUrl: "https://tokopedia.com",
    tag: "Stand Holder",
  },
];

const DESK_ITEMS: SetupItem[] = [
  {
    id: "d1",
    name: "ScreenBar Monitor Hanging Lightbar USB-C",
    price: 220000,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=500&auto=format&fit=crop",
    marketplace: "Tokopedia",
    affiliateUrl: "https://tokopedia.com",
    tag: "Monitor Lightbar",
  },
  {
    id: "d2",
    name: "Dual-Sided Waterproof Leather Desk Mat 80x40cm",
    price: 59000,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop",
    marketplace: "Shopee",
    affiliateUrl: "https://shopee.co.id",
    tag: "Desk Mat XXL",
  },
  {
    id: "d3",
    name: "Cable Organizer Box with Heat Dissipation",
    price: 39000,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=500&auto=format&fit=crop",
    marketplace: "Shopee",
    affiliateUrl: "https://shopee.co.id",
    tag: "Cable Box",
  },
];

const ROOM_ITEMS: SetupItem[] = [
  {
    id: "r1",
    name: "Sunset Projection Ambient Lamp 16 Colors",
    price: 55000,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=500&auto=format&fit=crop",
    marketplace: "Shopee",
    affiliateUrl: "https://shopee.co.id",
    tag: "Lampu Sunset",
  },
  {
    id: "r2",
    name: "Ultrasonic Flame Aroma Diffuser & Humidifier",
    price: 89000,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=500&auto=format&fit=crop",
    marketplace: "TikTok Shop",
    affiliateUrl: "https://tiktok.com",
    tag: "Aroma Diffuser",
  },
  {
    id: "r3",
    name: "Aesthetic Stainless Vacuum Tumbler 1.2L",
    price: 79000,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=500&auto=format&fit=crop",
    marketplace: "Shopee",
    affiliateUrl: "https://s.shopee.co.id/4fwwvQJCBE",
    tag: "Vacuum Tumbler",
  },
];

export function DeskRoomSimulator() {
  const { showToast } = useToast();
  const [selectedGadget, setSelectedGadget] = useState<SetupItem>(GADGET_ITEMS[0]);
  const [selectedDesk, setSelectedDesk] = useState<SetupItem>(DESK_ITEMS[0]);
  const [selectedRoom, setSelectedRoom] = useState<SetupItem>(ROOM_ITEMS[0]);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);

  const totalDamage = selectedGadget.price + selectedDesk.price + selectedRoom.price;

  const handlePrintReceipt = (e: React.MouseEvent) => {
    triggerConfetti(e.clientX, e.clientY);
    setIsReceiptOpen(true);
    showToast("🧾 Mencetak struk belanja setup meja & kamar!", "success");
  };

  const receiptItems = [
    { name: selectedGadget.name, price: selectedGadget.price, affiliateUrl: selectedGadget.affiliateUrl },
    { name: selectedDesk.name, price: selectedDesk.price, affiliateUrl: selectedDesk.affiliateUrl },
    { name: selectedRoom.name, price: selectedRoom.price, affiliateUrl: selectedRoom.affiliateUrl },
  ];

  return (
    <div className="space-y-8 text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold mb-2">
            <Laptop className="w-3.5 h-3.5" />
            <span>INTERACTIVE MAKE OVER • SIMULATOR SETUP & KAMAR 🎧</span>
          </div>
          <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Rakit Sudut Kerja & Kamar Kost Estetik
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl leading-relaxed">
            Pilih 3 item utama (Gadget, Perlengkapan Meja, dan Ambience Kamar) untuk melihat total biaya & cetak struk thermal belanjaanmu:
          </p>
        </div>

        <button
          type="button"
          onClick={handlePrintReceipt}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-xl active:scale-95 self-start md:self-auto"
        >
          <Receipt className="w-4 h-4 text-black" />
          <span>Cetak Struk Setup 🧾</span>
        </button>
      </div>

      {/* 3 Columns Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Column 1: Gadget & Audio */}
        <div className="p-5 rounded-2xl bg-[#090A0F] border border-white/10 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-xs font-mono font-bold uppercase text-emerald-400">
              1. Gadget & Device
            </span>
            <span className="text-[10px] text-zinc-500 font-mono">PILIH 1</span>
          </div>

          <div className="space-y-2.5">
            {GADGET_ITEMS.map((item) => {
              const isSelected = selectedGadget.id === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedGadget(item)}
                  className={`w-full p-3 rounded-xl border text-left transition-all flex items-center gap-3 ${
                    isSelected
                      ? "bg-white text-black border-white shadow-lg font-bold"
                      : "bg-[#12131A] text-zinc-300 border-white/10 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-950 border border-white/10">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold truncate">{item.name}</p>
                    <p className={`text-xs font-mono font-extrabold mt-0.5 ${isSelected ? "text-emerald-700" : "text-emerald-400"}`}>
                      {formatRupiah(item.price)}
                    </p>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-black flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Column 2: Desk Setup */}
        <div className="p-5 rounded-2xl bg-[#090A0F] border border-white/10 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-xs font-mono font-bold uppercase text-sky-400">
              2. Pencahayaan & Meja
            </span>
            <span className="text-[10px] text-zinc-500 font-mono">PILIH 1</span>
          </div>

          <div className="space-y-2.5">
            {DESK_ITEMS.map((item) => {
              const isSelected = selectedDesk.id === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedDesk(item)}
                  className={`w-full p-3 rounded-xl border text-left transition-all flex items-center gap-3 ${
                    isSelected
                      ? "bg-white text-black border-white shadow-lg font-bold"
                      : "bg-[#12131A] text-zinc-300 border-white/10 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-950 border border-white/10">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold truncate">{item.name}</p>
                    <p className={`text-xs font-mono font-extrabold mt-0.5 ${isSelected ? "text-sky-700" : "text-sky-400"}`}>
                      {formatRupiah(item.price)}
                    </p>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-black flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Column 3: Room Ambience */}
        <div className="p-5 rounded-2xl bg-[#090A0F] border border-white/10 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-xs font-mono font-bold uppercase text-amber-400">
              3. Suasana Kamar / Kost
            </span>
            <span className="text-[10px] text-zinc-500 font-mono">PILIH 1</span>
          </div>

          <div className="space-y-2.5">
            {ROOM_ITEMS.map((item) => {
              const isSelected = selectedRoom.id === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedRoom(item)}
                  className={`w-full p-3 rounded-xl border text-left transition-all flex items-center gap-3 ${
                    isSelected
                      ? "bg-white text-black border-white shadow-lg font-bold"
                      : "bg-[#12131A] text-zinc-300 border-white/10 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-950 border border-white/10">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold truncate">{item.name}</p>
                    <p className={`text-xs font-mono font-extrabold mt-0.5 ${isSelected ? "text-amber-700" : "text-amber-400"}`}>
                      {formatRupiah(item.price)}
                    </p>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-black flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Summary Box with Total Calculation & Direct Spill Links */}
      <div className="p-6 rounded-2xl bg-[#090A0F] border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-2xl">
        <div className="space-y-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400">
            TOTAL DAMAGE ESTIMASI 3 ITEM
          </span>
          <div className="flex items-baseline gap-3">
            <span className="text-2xl sm:text-3xl font-mono font-extrabold text-white">
              {formatRupiah(totalDamage)}
            </span>
            <span className="text-xs text-zinc-400">
              (Sudah dapat setup lengkap & estetik!)
            </span>
          </div>
          <div className="flex items-center gap-2 pt-1 flex-wrap text-xs text-zinc-400">
            <span>{selectedGadget.tag}</span>
            <span>+</span>
            <span>{selectedDesk.tag}</span>
            <span>+</span>
            <span>{selectedRoom.tag}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrintReceipt}
            className="px-6 py-3.5 rounded-xl bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-xl active:scale-95 flex items-center gap-2"
          >
            <Receipt className="w-4 h-4 text-black" />
            <span>Lihat Struk Thermal 🧾</span>
          </button>
        </div>
      </div>

      {/* Receipt Modal Integration */}
      <AestheticReceiptModal
        isOpen={isReceiptOpen}
        onClose={() => setIsReceiptOpen(false)}
        items={receiptItems}
        total={totalDamage}
      />
    </div>
  );
}

export default DeskRoomSimulator;
