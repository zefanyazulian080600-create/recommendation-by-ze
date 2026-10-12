"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Flame, ThumbsDown, Check, Sparkles, ArrowRight, Heart } from "lucide-react";
import { Product } from "@/types";
import { formatRupiah } from "@/lib/utils";
import { triggerConfetti } from "@/lib/confetti";
import { useToast } from "@/context/ToastContext";

interface BeliOrSkipPollProps {
  products: Product[];
}

export function BeliOrSkipPoll({ products }: BeliOrSkipPollProps) {
  const { showToast } = useToast();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userVote, setUserVote] = useState<"beli" | "skip" | null>(null);
  const [votedStats, setVotedStats] = useState({ beli: 88, skip: 12, total: 1614 });

  const activeProduct = products[currentIndex % (products.length || 1)] || products[0];

  const handleVote = (type: "beli" | "skip", e: React.MouseEvent) => {
    if (userVote) return;
    setUserVote(type);

    if (type === "beli") {
      triggerConfetti(e.clientX, e.clientY);
      setVotedStats((prev) => ({
        beli: Math.round(((prev.beli * prev.total + 1) / (prev.total + 1)) * 100),
        skip: 100 - Math.round(((prev.beli * prev.total + 1) / (prev.total + 1)) * 100),
        total: prev.total + 1,
      }));
      showToast("🔥 Vote tersimpan! Selera fashion kamu Slayyy!", "success");
    } else {
      setVotedStats((prev) => ({
        ...prev,
        total: prev.total + 1,
      }));
      showToast("🥱 Vote tersimpan! Skip dulu yaa.", "info");
    }
  };

  const handleNextItem = () => {
    setUserVote(null);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  if (!activeProduct) return null;

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-[#12131A] border border-white/10 shadow-2xl space-y-4">
      {/* Top Pill */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-mono font-bold tracking-wider">
        <Sparkles className="w-3 h-3 text-emerald-400" />
        <span>COMMUNITY SPILL VOTE 🗳️</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
        {/* Left Photo Frame (5 cols) */}
        <div className="sm:col-span-5 relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-[#090A0F]">
          <Image
            src={
              activeProduct.media?.[0]?.public_url ||
              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop"
            }
            alt={activeProduct.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-white text-[10px] font-mono font-bold border border-white/20">
            #{currentIndex + 1}
          </div>
        </div>

        {/* Right Interactive Poll Box (7 cols) */}
        <div className="sm:col-span-7 space-y-3">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 block">
              BELI ATAU SKIP?
            </span>
            <h3 className="font-sans text-base sm:text-lg font-bold text-white leading-snug line-clamp-2">
              {activeProduct.name}
            </h3>
            <p className="text-base font-extrabold text-white mt-1">
              {formatRupiah(activeProduct.price)}
            </p>
          </div>

          {/* Voting Action or Results */}
          {!userVote ? (
            <div className="space-y-2.5 pt-1">
              <p className="text-[11px] text-zinc-400 font-medium">
                Pilih preferensimu untuk membuka suara komunitas:
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={(e) => handleVote("beli", e)}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-all active:scale-95 shadow-md"
                >
                  <Flame className="w-4 h-4 fill-black text-black" />
                  <span>BELI 🔥</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => handleVote("skip", e)}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#090A0F] border border-white/20 text-zinc-300 text-xs font-bold hover:bg-white/10 hover:text-white transition-all active:scale-95"
                >
                  <ThumbsDown className="w-4 h-4 text-zinc-400" />
                  <span>SKIP 🥱</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="p-3.5 rounded-xl bg-[#090A0F] border border-white/10 space-y-2.5 animate-slideUp">
              <div className="flex items-center justify-between text-xs font-bold text-white">
                <span className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
                  <Check className="w-3.5 h-3.5" />
                  Vote: {userVote === "beli" ? "Beli 🔥" : "Skip 🥱"}
                </span>
                <span className="text-[11px] text-zinc-400 font-mono">{votedStats.total.toLocaleString()} votes</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#181924] h-4 rounded-full overflow-hidden border border-white/10 flex">
                <div
                  className="bg-emerald-400 h-full flex items-center justify-center text-[9px] font-mono font-bold text-black transition-all duration-700"
                  style={{ width: `${votedStats.beli}%` }}
                >
                  {votedStats.beli}% Beli
                </div>
                <div
                  className="bg-zinc-700 h-full flex items-center justify-center text-[9px] font-mono font-bold text-white transition-all duration-700"
                  style={{ width: `${votedStats.skip}%` }}
                >
                  {votedStats.skip}%
                </div>
              </div>

              {/* Actions after vote */}
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={activeProduct.affiliate_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-white text-black text-xs font-bold text-center hover:bg-zinc-200 transition-colors"
                >
                  Lihat Toko 🛍️
                </a>
                <button
                  type="button"
                  onClick={handleNextItem}
                  className="px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-xs font-bold text-white hover:bg-white/20 transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
