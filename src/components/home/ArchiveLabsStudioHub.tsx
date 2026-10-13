"use client";

import React, { useState } from "react";
import { Sparkles, Laptop, TrendingDown, Play, Layers, MapPin } from "lucide-react";
import { Product } from "@/types";
import { DeskRoomSimulator } from "./DeskRoomSimulator";
import { DupeVsGrailSection } from "./DupeVsGrailSection";
import { OotdMixMatchStudio } from "./OotdMixMatchStudio";
import { VideoReelsSection } from "./VideoReelsSection";
import { SpotNongkrongSection } from "./SpotNongkrongSection";

interface ArchiveLabsStudioHubProps {
  products: Product[];
}

type StudioTab = "desk-room" | "dupe-grail" | "ootd-studio" | "video-reels" | "spot-nongkrong";

export function ArchiveLabsStudioHub({ products }: ArchiveLabsStudioHubProps) {
  const [activeTab, setActiveTab] = useState<StudioTab>("desk-room");

  const studioTabs = [
    {
      id: "desk-room" as StudioTab,
      label: "Desk & Room Makeover",
      icon: Laptop,
      badge: "SETUP SIMULATOR",
      desc: "Rakit sudut meja, gadget & kamar estetik",
    },
    {
      id: "dupe-grail" as StudioTab,
      label: "Dupe vs. Mahal",
      icon: TrendingDown,
      badge: "HEMAT 90%",
      desc: "Alternatif online shop setara brand jutaan",
    },
    {
      id: "ootd-studio" as StudioTab,
      label: "Fashion & OOTD Studio",
      icon: Layers,
      badge: "MIX & MATCH",
      desc: "Kombinasi atasan, bawahan, tas & sepatu",
    },
    {
      id: "video-reels" as StudioTab,
      label: "Video Review 9:16",
      icon: Play,
      badge: "TIKTOK / REELS",
      desc: "Kompilasi video spill format vertikal",
    },
    {
      id: "spot-nongkrong" as StudioTab,
      label: "Spot Nongkrong & WFC",
      icon: MapPin,
      badge: "LIFESTYLE SPOT",
      desc: "Paduan outfit & gear cafe hits",
    },
  ];

  return (
    <section id="curated-hub" className="py-14 sm:py-20 bg-[#090A0F] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Studio Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
              <span>✦</span>
              <span>ZE DISCOVERY LABS • INTERACTIVE HUB</span>
              <span>✦</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Eksplorasi Interaktif Racun Ol Shop
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
              Pilih fitur interaktif di bawah: simulasi rakit setup meja & kamar estetik, alternatif brand mahal ramah kantong, atau inspirasi gaya harian:
            </p>
          </div>

          {/* Clean Badge */}
          <div className="hidden lg:flex items-center gap-3 p-3 rounded-xl bg-[#12131A] border border-white/10 shadow-lg">
            <div className="font-mono text-center border-r border-white/10 pr-3">
              <div className="text-[9px] uppercase font-bold text-zinc-500">DISCOVERY HUB</div>
              <div className="text-sm font-bold text-white">#VOL-04</div>
            </div>
            <div className="text-[11px] font-medium text-zinc-300 leading-snug">
              <span>ALL OL SHOP ITEMS</span>
              <div className="text-[10px] text-emerald-400 font-mono">100% INDEPENDENT</div>
            </div>
          </div>
        </div>

        {/* Tab Selector Buttons Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
          {studioTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`p-3 sm:p-4 rounded-xl border text-left transition-all relative overflow-hidden tap-bounce flex flex-col justify-between ${
                  isActive
                    ? "bg-white text-black border-white shadow-2xl translate-y-[-2px] font-bold"
                    : "bg-[#12131A] text-zinc-300 border-white/10 hover:border-white/25 hover:text-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center border ${
                        isActive
                          ? "bg-black text-white border-black"
                          : "bg-white/5 text-zinc-300 border-white/10"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span
                      className={`text-[9px] font-mono font-bold tracking-wider uppercase px-1.5 py-0.5 rounded ${
                        isActive
                          ? "bg-emerald-500 text-black font-extrabold"
                          : "bg-white/5 text-zinc-400"
                      }`}
                    >
                      {tab.badge}
                    </span>
                  </div>
                  <div className="font-sans text-xs sm:text-sm font-bold truncate">
                    {tab.label}
                  </div>
                </div>
                <div
                  className={`text-[10px] mt-1 line-clamp-1 ${
                    isActive ? "text-zinc-700 font-medium" : "text-zinc-500"
                  }`}
                >
                  {tab.desc}
                </div>

                {isActive && (
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-emerald-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Studio Content Display Area */}
        <div className="bg-[#12131A] rounded-2xl border border-white/10 p-4 sm:p-8 shadow-2xl transition-all duration-300">
          {activeTab === "desk-room" && (
            <div className="animate-fadeIn">
              <DeskRoomSimulator />
            </div>
          )}

          {activeTab === "dupe-grail" && (
            <div className="animate-fadeIn">
              <DupeVsGrailSection />
            </div>
          )}

          {activeTab === "ootd-studio" && (
            <div className="animate-fadeIn">
              <OotdMixMatchStudio products={products} />
            </div>
          )}

          {activeTab === "video-reels" && (
            <div className="animate-fadeIn">
              <VideoReelsSection products={products} />
            </div>
          )}

          {activeTab === "spot-nongkrong" && (
            <div className="animate-fadeIn">
              <SpotNongkrongSection />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ArchiveLabsStudioHub;
