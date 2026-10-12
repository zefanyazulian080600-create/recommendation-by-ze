"use client";

import React, { useState } from "react";
import { Sparkles, Layers, MapPin, TrendingDown, Play, Compass, Shirt, SunMedium } from "lucide-react";
import { Product } from "@/types";
import { OotdMixMatchStudio } from "./OotdMixMatchStudio";
import { SpotNongkrongSection } from "./SpotNongkrongSection";
import { DupeVsGrailSection } from "./DupeVsGrailSection";
import { VideoReelsSection } from "./VideoReelsSection";
import { OutfitOccasionSection } from "./OutfitOccasionSection";
import { WeatherOutfitSection } from "./WeatherOutfitSection";

interface ArchiveLabsStudioHubProps {
  products: Product[];
}

type StudioTab = "ootd-studio" | "spot-nongkrong" | "dupe-grail" | "video-reels" | "occasion-weather";

export function ArchiveLabsStudioHub({ products }: ArchiveLabsStudioHubProps) {
  const [activeTab, setActiveTab] = useState<StudioTab>("ootd-studio");

  const studioTabs = [
    {
      id: "ootd-studio" as StudioTab,
      label: "OOTD Studio & Struk",
      icon: Layers,
      badge: "MIX & MATCH",
      desc: "Simulasi pasang baju & cetak struk thermal",
    },
    {
      id: "spot-nongkrong" as StudioTab,
      label: "Spot Nongkrong",
      icon: MapPin,
      badge: "BLOK M & SENOPATI",
      desc: "Outfit match cafe & spot foto hits",
    },
    {
      id: "dupe-grail" as StudioTab,
      label: "Dupe vs. Grail",
      icon: TrendingDown,
      badge: "HEMAT 80%",
      desc: "Alternatif lokal mirip brand jutaan",
    },
    {
      id: "video-reels" as StudioTab,
      label: "Video Try-On 9:16",
      icon: Play,
      badge: "REELS / TIKTOK",
      desc: "Kompilasi video spill format vertikal",
    },
    {
      id: "occasion-weather" as StudioTab,
      label: "Acara & Cuaca",
      icon: SunMedium,
      badge: "SITUASI LOOK",
      desc: "Formula outfit date, WFC, konser & cuaca",
    },
  ];

  return (
    <section id="archive-labs" className="py-14 sm:py-20 bg-[#090A0F] border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Studio Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
              <span>✦</span>
              <span>ZE ARCHIVE LABS • INTERACTIVE STUDIO</span>
              <span>✦</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Styling Studio & Generator Outfit
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Pilih fitur styling di bawah untuk coba racun mix & match, panduan spot nongkrong, atau alternatif brand mahal tanpa scroll panjang:
            </p>
          </div>

          {/* Clean Badge */}
          <div className="hidden lg:flex items-center gap-3 p-3 rounded-xl bg-[#12131A] border border-white/10 shadow-lg">
            <div className="font-mono text-center border-r border-white/10 pr-3">
              <div className="text-[9px] uppercase font-bold text-zinc-500">STYLING HUB</div>
              <div className="text-sm font-bold text-white">#VOL-03</div>
            </div>
            <div className="text-[11px] font-medium text-zinc-300 leading-snug">
              <span>UNLIMITED SPILL</span>
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
                    ? "bg-white text-black border-white shadow-2xl translate-y-[-2px]"
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
                    isActive ? "text-zinc-600 font-medium" : "text-zinc-500"
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
          {activeTab === "ootd-studio" && (
            <div className="animate-fadeIn">
              <OotdMixMatchStudio products={products} />
            </div>
          )}

          {activeTab === "spot-nongkrong" && (
            <div className="animate-fadeIn">
              <SpotNongkrongSection />
            </div>
          )}

          {activeTab === "dupe-grail" && (
            <div className="animate-fadeIn">
              <DupeVsGrailSection />
            </div>
          )}

          {activeTab === "video-reels" && (
            <div className="animate-fadeIn">
              <VideoReelsSection products={products} />
            </div>
          )}

          {activeTab === "occasion-weather" && (
            <div className="space-y-8 animate-fadeIn">
              <OutfitOccasionSection />
              <div className="pt-8 border-t border-white/10">
                <WeatherOutfitSection />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
