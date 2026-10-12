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
      desc: "Simulasi pasang baju & cetak struk belanja thermal",
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
    <section className="py-14 sm:py-20 bg-vanilla border-t-2 border-espresso/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Studio Section Header - Y2K Retro Archive Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-espresso/20 pb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-espresso text-vanilla text-[11px] font-mono font-bold uppercase tracking-widest">
              <span className="text-butter-400">✦</span>
              <span>ZE ARCHIVE LABS • INTERACTIVE STUDIO</span>
              <span className="text-butter-400">✦</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight">
              Styling Studio & Generator Outfit
            </h2>
            <p className="text-xs sm:text-sm text-espresso/70 max-w-xl">
              Gak perlu pusing scroll panjang. Pilih fitur styling di bawah untuk coba racun mix & match, panduan spot nongkrong, atau alternatif brand mahal:
            </p>
          </div>

          {/* Ticket Badge */}
          <div className="hidden lg:flex items-center gap-3 p-3 rounded-2xl bg-white border-2 border-espresso shadow-brutal-sm">
            <div className="font-mono text-center border-r-2 border-dashed border-espresso/30 pr-3">
              <div className="text-[9px] uppercase font-bold text-espresso/50">STYLING PASS</div>
              <div className="text-sm font-extrabold text-espresso">#VOL-03</div>
            </div>
            <div className="text-[11px] font-bold text-espresso leading-snug">
              <span>UNLIMITED SPILL</span>
              <div className="text-[10px] text-matcha-600 font-mono">100% INDEPENDENT</div>
            </div>
          </div>
        </div>

        {/* Tab Selector Buttons Bar (Y2K Concert Ticket / Streetwear Tabs) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
          {studioTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`p-3 sm:p-4 rounded-2xl border-2 text-left transition-all relative overflow-hidden tap-bounce flex flex-col justify-between ${
                  isActive
                    ? "bg-espresso text-vanilla border-espresso shadow-brutal translate-y-[-2px]"
                    : "bg-white text-espresso border-espresso/20 hover:border-espresso hover:bg-butter-200/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-7 h-7 rounded-xl flex items-center justify-center border ${
                        isActive
                          ? "bg-vanilla text-espresso border-espresso"
                          : "bg-vanilla/80 text-espresso border-espresso/20"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span
                      className={`text-[9px] font-mono font-bold tracking-wider uppercase px-1.5 py-0.5 rounded ${
                        isActive
                          ? "bg-butter-400 text-espresso"
                          : "bg-espresso/10 text-espresso/70"
                      }`}
                    >
                      {tab.badge}
                    </span>
                  </div>
                  <div className="font-editorial text-xs sm:text-sm font-bold truncate">
                    {tab.label}
                  </div>
                </div>
                <div
                  className={`text-[10px] mt-1 line-clamp-1 ${
                    isActive ? "text-vanilla/70" : "text-espresso/50"
                  }`}
                >
                  {tab.desc}
                </div>

                {/* Active Indicator Accent Line */}
                {isActive && (
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-butter-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Studio Content Display Area */}
        <div className="bg-white rounded-3xl border-2 border-espresso p-4 sm:p-8 shadow-brutal transition-all duration-300">
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
              <div className="pt-8 border-t-2 border-espresso/15">
                <WeatherOutfitSection />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
