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
    <section className="py-14 bg-vanilla border-t-2 border-espresso/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-white border-4 border-espresso shadow-brutal-lg relative overflow-hidden">
          {/* Top Washi Sticker */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-butter-400 border-2 border-espresso text-espresso text-xs font-extrabold shadow-sm -rotate-1 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMUNITY SPILL VOTE 🗳️</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Photo Frame (5 cols) */}
            <div className="md:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-espresso shadow-brutal-sm bg-softgray">
              <Image
                src={
                  activeProduct.media?.[0]?.public_url ||
                  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop"
                }
                alt={activeProduct.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-espresso text-vanilla text-[10px] font-bold border border-vanilla/40">
                Racun #{currentIndex + 1}
              </div>
            </div>

            {/* Right Interactive Poll Box (7 cols) */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-matcha-600 block">
                  MENURUT KAMU: BELI ATAU SKIP?
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-espresso leading-snug">
                  {activeProduct.name}
                </h3>
                <p className="text-lg font-extrabold text-espresso mt-1">
                  {formatRupiah(activeProduct.price)}
                </p>
              </div>

              {/* Voting Action or Results */}
              {!userVote ? (
                <div className="space-y-3 pt-2">
                  <p className="text-xs text-espresso-100 font-semibold">
                    Vote selera kamu untuk membuka persentase komunitas:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={(e) => handleVote("beli", e)}
                      className="btn-3d-butter flex items-center justify-center gap-2 py-4 rounded-2xl bg-butter-400 border-2 border-espresso text-espresso text-sm font-extrabold shadow-brutal hover:bg-butter-500"
                    >
                      <Flame className="w-5 h-5 text-espresso fill-espresso" />
                      <span>BELI! (Slay 🔥)</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleVote("skip", e)}
                      className="btn-3d flex items-center justify-center gap-2 py-4 rounded-2xl bg-white border-2 border-espresso text-espresso text-sm font-extrabold shadow-brutal hover:bg-softgray"
                    >
                      <ThumbsDown className="w-5 h-5 text-espresso" />
                      <span>SKIP (Nah 🥱)</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-vanilla/80 border-2 border-espresso space-y-3 animate-slideUp">
                  <div className="flex items-center justify-between text-xs font-bold text-espresso">
                    <span className="flex items-center gap-1.5 text-matcha-600">
                      <Check className="w-4 h-4" />
                      Vote kamu: {userVote === "beli" ? "Beli (Slay 🔥)" : "Skip (Nah 🥱)"}
                    </span>
                    <span className="text-espresso-100">{votedStats.total.toLocaleString()} Gen Z votes</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-softgray h-5 rounded-full overflow-hidden border-2 border-espresso flex">
                    <div
                      className="bg-butter-400 h-full flex items-center justify-center text-[10px] font-extrabold text-espresso transition-all duration-700"
                      style={{ width: `${votedStats.beli}%` }}
                    >
                      {votedStats.beli}% Beli
                    </div>
                    <div
                      className="bg-espresso h-full flex items-center justify-center text-[10px] font-extrabold text-vanilla transition-all duration-700"
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
                      className="btn-3d flex-1 py-2.5 rounded-full bg-espresso text-vanilla text-xs font-bold text-center border-2 border-espresso hover:bg-butter-400 hover:text-espresso"
                    >
                      Cek Tokonya di Marketplace 🛍️
                    </a>
                    <button
                      type="button"
                      onClick={handleNextItem}
                      className="px-4 py-2.5 rounded-full bg-white border-2 border-espresso text-xs font-bold text-espresso hover:bg-softgray"
                    >
                      Next Racun 👉
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
