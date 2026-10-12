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
  const [isExpanded, setIsExpanded] = useState(true);
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
    <div className="rounded-3xl border-2 border-[#F2765E]/30 bg-gradient-to-br from-[#F5EBDD] via-white to-[#F5EBDD]/60 p-5 sm:p-6 shadow-sm space-y-4">
      {/* Header Bar */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#F2765E] to-[#315B8C] text-white flex items-center justify-center shadow-sm">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-editorial text-base sm:text-lg font-bold text-[#413333]">
                Ze&apos;s AI Local Co-Pilot
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-[#315B8C]/10 text-[#315B8C] font-mono text-[10px] font-bold border border-[#315B8C]/20">
                100% Offline & Gratis
              </span>
            </div>
            <p className="text-[11px] text-[#413333]/70">
              Ketik nama/ide barang, AI otomatis menulis judul gaul, ulasan stylist, tags, & panduan ukuran.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleOpenCaptions}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#315B8C]/30 text-[#315B8C] hover:bg-[#315B8C] hover:text-white transition-all text-xs font-semibold shadow-xs"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Generator Caption Medsos</span>
          </button>

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-xl border border-softgray-border bg-white text-[#413333] hover:bg-softgray"
          >
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-4 pt-2 border-t border-softgray-border/60">
          {/* Status Message */}
          {statusMessage && (
            <div className="p-3 rounded-2xl bg-[#315B8C]/10 border border-[#315B8C]/30 text-xs text-[#315B8C] font-medium flex items-center gap-2 animate-fadeIn">
              <Zap className="w-4 h-4 flex-shrink-0 text-[#F2765E]" />
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
                  placeholder="Ketik ide: misal 'kemeja linen crop santai' atau link produk..."
                  className="w-full px-4 py-2.5 rounded-2xl bg-white border border-[#413333]/20 text-xs sm:text-sm text-[#413333] placeholder:text-[#413333]/40 focus:outline-none focus:ring-2 focus:ring-[#F2765E]/40"
                />
              </div>

              <div className="sm:col-span-3">
                <select
                  value={vibe}
                  onChange={(e) => setVibe(e.target.value as AiVibeTone)}
                  className="w-full px-3 py-2.5 rounded-2xl bg-white border border-[#413333]/20 text-xs text-[#413333] focus:outline-none focus:ring-2 focus:ring-[#F2765E]/40"
                >
                  <option value="skena">Gaya: Skena Blok M</option>
                  <option value="starboy">Gaya: Starboy / SCBD</option>
                  <option value="kalcer">Gaya: Kalcer Santa</option>
                  <option value="dupe">Gaya: Dupe Alert (Hemat)</option>
                  <option value="clean">Gaya: Clean Minimalist</option>
                  <option value="viral">Gaya: Viral TikTok</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-[#F2765E] to-[#e0624a] hover:from-[#e0624a] hover:to-[#c85038] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Wand2 className="w-4 h-4" />
                  <span>{isGenerating ? "Meracik Kata..." : "Auto-Fill Form ⚡"}</span>
                </button>
              </div>
            </div>
          </form>

          {/* Quick 1-Click Templates */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#413333]/70">
              <Flame className="w-3.5 h-3.5 text-[#F2765E]" />
              <span>Atau Pilih Template Rekomendasi Siap Rilis (1-Klik):</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {READY_MADE_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => handleApplyPreset(preset.id)}
                  className="px-3 py-1.5 rounded-full bg-white hover:bg-[#F2765E]/10 border border-[#413333]/15 hover:border-[#F2765E]/40 text-[11px] font-semibold text-[#413333] transition-all flex items-center gap-1.5 hover:scale-[1.02]"
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
        <div className="fixed inset-0 z-50 bg-[#413333]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#F5EBDD] border-2 border-[#413333] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl space-y-5 animate-scaleUp">
            <div className="flex items-center justify-between pb-3 border-b border-[#413333]/20">
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-[#F2765E]" />
                <h3 className="font-editorial text-xl font-bold text-[#413333]">
                  Generator Caption Medsos Ze
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowCaptionModal(false)}
                className="w-8 h-8 rounded-full bg-white border border-[#413333]/20 text-[#413333] hover:bg-[#F2765E] hover:text-white flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#413333]/80">
              Salin langsung script video atau teks promosi affiliate ini ke TikTok, Instagram Story, Telegram, atau Twitter:
            </p>

            <div className="space-y-4">
              {/* TikTok / Reels Script */}
              <div className="bg-white rounded-2xl border border-[#413333]/20 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-[#315B8C] uppercase tracking-wide">
                    📱 TikTok & IG Reels Script
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopyText(captions.tiktokScript, "tiktok")}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#315B8C] text-white text-[11px] font-semibold hover:bg-[#315B8C]/80"
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
                <pre className="text-xs text-[#413333] whitespace-pre-wrap font-sans bg-[#F5EBDD]/40 p-3 rounded-xl border border-[#413333]/10">
                  {captions.tiktokScript}
                </pre>
              </div>

              {/* Instagram Story Copy */}
              <div className="bg-white rounded-2xl border border-[#413333]/20 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-[#F2765E] uppercase tracking-wide">
                    📸 Instagram Story Copy & Stiker Link
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopyText(captions.igStory, "ig")}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F2765E] text-white text-[11px] font-semibold hover:bg-[#e0624a]"
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
                <pre className="text-xs text-[#413333] whitespace-pre-wrap font-sans bg-[#F5EBDD]/40 p-3 rounded-xl border border-[#413333]/10">
                  {captions.igStory}
                </pre>
              </div>

              {/* Telegram / WA Broadcast */}
              <div className="bg-white rounded-2xl border border-[#413333]/20 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-emerald-700 uppercase tracking-wide">
                    💬 Telegram Channel / WA Broadcast
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopyText(captions.telegramBroadcast, "tele")}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-700 text-white text-[11px] font-semibold hover:bg-emerald-800"
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
                <pre className="text-xs text-[#413333] whitespace-pre-wrap font-sans bg-[#F5EBDD]/40 p-3 rounded-xl border border-[#413333]/10">
                  {captions.telegramBroadcast}
                </pre>
              </div>

              {/* Twitter / X Thread Starter */}
              <div className="bg-white rounded-2xl border border-[#413333]/20 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-[#413333] uppercase tracking-wide">
                    🐦 Twitter / X Racun Belanja
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopyText(captions.twitterHook, "x")}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#413333] text-white text-[11px] font-semibold hover:bg-[#413333]/80"
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
                <pre className="text-xs text-[#413333] whitespace-pre-wrap font-sans bg-[#F5EBDD]/40 p-3 rounded-xl border border-[#413333]/10">
                  {captions.twitterHook}
                </pre>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setShowCaptionModal(false)}
                className="px-6 py-2.5 rounded-full bg-[#413333] text-white text-xs font-semibold hover:bg-[#F2765E] transition-all"
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
