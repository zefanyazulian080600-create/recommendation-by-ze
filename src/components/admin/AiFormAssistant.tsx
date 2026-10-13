"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Zap,
  Wand2,
  Copy,
  Check,
  Share2,
  BookmarkCheck,
  HelpCircle,
  Flame,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  AiVibeTone,
  READY_MADE_PRESETS,
  generateProductFromPrompt,
  generateSocialCaptions,
  SocialCaptionBundle,
} from "@/lib/ai/local-copywriter";
import { triggerConfetti } from "@/lib/confetti";

interface AiFormAssistantProps {
  onApplyProductDraft: (draft: any) => void;
  currentProductData: {
    name: string;
    price?: number;
    originalPrice?: number;
    shortDesc?: string;
    badgeLabel?: string;
    affiliateUrl?: string;
  };
}

export function AiFormAssistant({
  onApplyProductDraft,
  currentProductData,
}: AiFormAssistantProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [vibe, setVibe] = useState<AiVibeTone>("skena");
  const [gender, setGender] = useState<"unisex" | "men" | "women">("unisex");
  const [isGenerating, setIsGenerating] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Social Captions Modal State
  const [showCaptionModal, setShowCaptionModal] = useState(false);
  const [captions, setCaptions] = useState<SocialCaptionBundle | null>(null);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Handle 1-Click Magic Generation
  const handleGenerate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!keyword.trim()) {
      setStatusMessage("Masukkan ide produk atau kata kunci dulu (misal: jaket corduroy / parfum le labo)");
      return;
    }

    setIsGenerating(true);
    setStatusMessage("");

    setTimeout(() => {
      const result = generateProductFromPrompt({
        rawKeyword: keyword.trim(),
        vibe,
        gender,
      });

      onApplyProductDraft(result);
      setIsGenerating(false);
      setStatusMessage("✨ Formulir berhasil diisi otomatis oleh AI!");

      try {
        triggerConfetti(window.innerWidth / 2, 200);
      } catch (err) {}

      setTimeout(() => setStatusMessage(""), 4000);
    }, 400);
  };

  // Handle Preset Click
  const handleApplyPreset = (presetId: string) => {
    const found = READY_MADE_PRESETS.find((p) => p.id === presetId);
    if (!found) return;

    onApplyProductDraft(found.data);
    setStatusMessage(`✨ Preset "${found.label}" berhasil dimuat ke formulir!`);
    try {
      triggerConfetti(window.innerWidth / 2, 200);
    } catch (err) {}
    setTimeout(() => setStatusMessage(""), 4000);
  };

  // Open Caption Generator
  const handleOpenCaptions = () => {
    const generated = generateSocialCaptions(currentProductData);
    setCaptions(generated);
    setShowCaptionModal(true);
  };

  // Copy Caption to Clipboard
  const handleCopyText = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-[#12131A] p-5 sm:p-6 shadow-2xl space-y-4">
      {/* Header Bar */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shadow-sm">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-editorial text-base sm:text-lg font-bold text-white">
                Ze&apos;s AI Local Co-Pilot
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-mono text-[10px] font-bold border border-emerald-500/20">
                100% Gratis & Instan
              </span>
            </div>
            <p className="text-[11px] text-white/50">
              Ketik nama/ide barang ol shop, AI otomatis menulis ulasan kurasi, tags viral, & spesifikasi.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleOpenCaptions}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#090A0F] border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-all text-xs font-semibold"
          >
            <Share2 className="w-3.5 h-3.5 text-sky-400" />
            <span>Generator Caption Medsos</span>
          </button>

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-3 py-1.5 rounded-xl border border-white/10 bg-[#090A0F] text-white hover:bg-white/10 text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isExpanded ? "Tutup AI" : "Buka AI Auto-Fill ⚡"}</span>
            {isExpanded ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-4 pt-2 border-t border-white/10">
          {/* Status Message */}
          {statusMessage && (
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium flex items-center gap-2 animate-fadeIn">
              <Zap className="w-4 h-4 flex-shrink-0 text-emerald-400" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Form Auto-Generator Input */}
          <form onSubmit={handleGenerate} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
              <div className="sm:col-span-6">
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Ketik ide: misal 'TWS noise cancelling', 'lampu sunset kamar kost', 'sunscreen'..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-xs sm:text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <div className="sm:col-span-3">
                <select
                  value={vibe}
                  onChange={(e) => setVibe(e.target.value as AiVibeTone)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-xs text-white focus:outline-none focus:border-emerald-500/50"
                >
                  <option value="skena" className="bg-[#12131A] text-white">Gaya: Skena Blok M</option>
                  <option value="starboy" className="bg-[#12131A] text-white">Gaya: Starboy / SCBD</option>
                  <option value="kalcer" className="bg-[#12131A] text-white">Gaya: Kalcer Santa</option>
                  <option value="dupe" className="bg-[#12131A] text-white">Gaya: Dupe Alert (Hemat)</option>
                  <option value="clean" className="bg-[#12131A] text-white">Gaya: Clean Minimalist</option>
                  <option value="viral" className="bg-[#12131A] text-white">Gaya: Viral TikTok</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="w-full py-2.5 px-4 rounded-xl bg-white text-black hover:bg-emerald-400 hover:text-black text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Wand2 className="w-4 h-4" />
                  <span>{isGenerating ? "Meracik Kata..." : "Auto-Fill Form ⚡"}</span>
                </button>
              </div>
            </div>
          </form>

          {/* Quick 1-Click Templates */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-white/50">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Atau Pilih Template Rekomendasi Siap Rilis (1-Klik):</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {READY_MADE_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => handleApplyPreset(preset.id)}
                  className="px-3 py-1.5 rounded-full bg-[#090A0F] hover:bg-white/10 border border-white/10 hover:border-emerald-400/40 text-[11px] font-semibold text-white/80 transition-all flex items-center gap-1.5"
                >
                  <span>{preset.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Social Media Captions Modal */}
      {showCaptionModal && captions && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#12131A] border border-white/15 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl space-y-5 animate-scaleUp text-white">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-emerald-400" />
                <h3 className="font-editorial text-xl font-bold text-white">
                  Generator Caption Medsos Ze
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowCaptionModal(false)}
                className="w-8 h-8 rounded-full bg-[#090A0F] border border-white/10 text-white hover:bg-white/10 flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-white/60">
              Salin langsung script video atau teks promosi affiliate ini ke TikTok, Instagram Story, Telegram, atau Twitter:
            </p>

            <div className="space-y-4">
              {/* TikTok / Reels Script */}
              <div className="bg-[#090A0F] rounded-2xl border border-white/10 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-sky-400 font-mono uppercase tracking-wide">
                    📱 TikTok & IG Reels Script
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopyText(captions.tiktokScript, "tiktok")}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-400 text-[11px] font-semibold hover:bg-sky-500/30"
                  >
                    {copiedType === "tiktok" ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Salin Script</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-xs text-white/80 whitespace-pre-wrap font-sans bg-black/40 p-3 rounded-xl border border-white/5">
                  {captions.tiktokScript}
                </pre>
              </div>

              {/* Instagram Story Copy */}
              <div className="bg-[#090A0F] rounded-2xl border border-white/10 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-rose-400 font-mono uppercase tracking-wide">
                    📸 Instagram Story Copy & Stiker Link
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopyText(captions.igStory, "ig")}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-400 text-[11px] font-semibold hover:bg-rose-500/30"
                  >
                    {copiedType === "ig" ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Salin Teks</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-xs text-white/80 whitespace-pre-wrap font-sans bg-black/40 p-3 rounded-xl border border-white/5">
                  {captions.igStory}
                </pre>
              </div>

              {/* Telegram / WA Broadcast */}
              <div className="bg-[#090A0F] rounded-2xl border border-white/10 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-emerald-400 font-mono uppercase tracking-wide">
                    💬 Telegram Channel / WA Broadcast
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopyText(captions.telegramBroadcast, "tele")}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold hover:bg-emerald-500/30"
                  >
                    {copiedType === "tele" ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Salin Pesan</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-xs text-white/80 whitespace-pre-wrap font-sans bg-black/40 p-3 rounded-xl border border-white/5">
                  {captions.telegramBroadcast}
                </pre>
              </div>

              {/* Twitter / X Thread Starter */}
              <div className="bg-[#090A0F] rounded-2xl border border-white/10 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-white/70 font-mono uppercase tracking-wide">
                    🐦 Twitter / X Racun Belanja
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopyText(captions.twitterHook, "x")}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-[11px] font-semibold hover:bg-white/20"
                  >
                    {copiedType === "x" ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Salin Thread</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-xs text-white/80 whitespace-pre-wrap font-sans bg-black/40 p-3 rounded-xl border border-white/5">
                  {captions.twitterHook}
                </pre>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setShowCaptionModal(false)}
                className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs hover:bg-emerald-400 transition-all"
              >
                Tutup Jendela
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
