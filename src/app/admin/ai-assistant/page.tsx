"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Sparkles,
  Wand2,
  Copy,
  Check,
  PlusCircle,
  Share2,
  BookOpen,
  ArrowRight,
  Zap,
  Flame,
  FileText,
  BookmarkPlus,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import {
  AiVibeTone,
  AiGeneratedProductDraft,
  READY_MADE_PRESETS,
  generateProductFromPrompt,
  generateSocialCaptions,
  SocialCaptionBundle,
} from "@/lib/ai/local-copywriter";
import { getProducts } from "@/lib/data/store";
import { Product } from "@/types";
import { triggerConfetti } from "@/lib/confetti";

export default function AiAssistantStudioPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"product" | "captions" | "dictionary">("product");

  // Tab 1: Product Generator State
  const [keyword, setKeyword] = useState("jaket canvas boxy wash vintage");
  const [vibe, setVibe] = useState<AiVibeTone>("skena");
  const [gender, setGender] = useState<"unisex" | "men" | "women">("unisex");
  const [generatedDraft, setGeneratedDraft] = useState<AiGeneratedProductDraft | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Tab 2: Caption Generator State
  const [productsList, setProductsList] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string>("");
  const [customCaptionTitle, setCustomCaptionTitle] = useState("Oversized Heavyweight Boxy Tee 24s");
  const [customPrice, setCustomPrice] = useState<number>(119000);
  const [captionsBundle, setCaptionsBundle] = useState<SocialCaptionBundle | null>(null);

  // Copied item tracker
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    getProducts({}, true).then((prods) => {
      setProductsList(prods);
      if (prods.length > 0) {
        setSelectedProductId(prods[0].id);
      }
    });

    // Run initial generation so page is never empty
    const initial = generateProductFromPrompt({
      rawKeyword: "jaket canvas boxy wash vintage",
      vibe: "skena",
      gender: "unisex",
    });
    setGeneratedDraft(initial);

    const initialCaptions = generateSocialCaptions({
      name: "Vintage Washed Boxy Canvas Detroit Jacket",
      price: 239000,
      originalPrice: 380000,
      shortDesc: "Jaket canvas boxy cropped dupe Carhartt Detroit dengan kerah corduroy kontras.",
      badgeLabel: "Dupe Alert ⚡",
    });
    setCaptionsBundle(initialCaptions);
  }, []);

  // Handle Generate Product
  const handleGenerateProduct = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!keyword.trim()) return;

    setIsGenerating(true);
    setTimeout(() => {
      const result = generateProductFromPrompt({
        rawKeyword: keyword.trim(),
        vibe,
        gender,
      });
      setGeneratedDraft(result);
      setIsGenerating(false);
      try {
        triggerConfetti(window.innerWidth / 2, 250);
      } catch (err) {}
    }, 300);
  };

  // Open Draft in Product Form
  const handleOpenInNewProduct = () => {
    if (!generatedDraft) return;
    sessionStorage.setItem("ze_ai_pending_draft", JSON.stringify(generatedDraft));
    router.push("/admin/products/new");
  };

  // Handle Preset Pick
  const handlePickPreset = (presetId: string) => {
    const found = READY_MADE_PRESETS.find((p) => p.id === presetId);
    if (!found) return;
    setGeneratedDraft(found.data as AiGeneratedProductDraft);
    setKeyword(found.label.replace(/^.*? /, ""));
    try {
      triggerConfetti(window.innerWidth / 2, 250);
    } catch (err) {}
  };

  // Handle Generate Captions for Selected Product
  const handleGenerateCaptions = () => {
    let pName = customCaptionTitle;
    let pPrice = customPrice;
    let pOriginal = customPrice ? Math.round(customPrice * 1.5) : 199000;
    let pBadge = "Ze's Pick";
    let pAffiliate = "https://shope.ee/...";

    if (selectedProductId) {
      const prod = productsList.find((p) => p.id === selectedProductId);
      if (prod) {
        pName = prod.name;
        pPrice = prod.price;
        pOriginal = prod.original_price || Math.round(prod.price * 1.4);
        pBadge = prod.badge_label || "Ze's Pick";
        pAffiliate = prod.affiliate_url;
      }
    }

    const bundle = generateSocialCaptions({
      name: pName,
      price: pPrice,
      originalPrice: pOriginal,
      badgeLabel: pBadge,
      affiliateUrl: pAffiliate,
    });
    setCaptionsBundle(bundle);
    try {
      triggerConfetti(window.innerWidth / 2, 250);
    } catch (err) {}
  };

  // Copy helper
  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  // Gen Z High-Converting Vocabulary Bank
  const VOCABULARY_CHUNKS = [
    {
      category: "⚡ Hook 3 Detik Pertama (Bikin Berhenti Scroll)",
      items: [
        "Stop beli kemeja tipis tembus pandang kalau belum liat yang satu ini...",
        "POV: Nemu hidden gem outfit di marketplace yang look-nya mirip brand jutaan...",
        "Rating jujur fashion item yang lagi viral di kalangan anak Skena Blok M...",
        "Satu-satunya celana yang gak bikin siluet kaki keliatan bantet...",
        "Outfit cheat code buat kamu yang mau keliatan rapi tanpa terkesan kaku...",
        "Dupe alert: Kenapa bayar 2 juta kalau yang 200 ribu ini kualitasnya identik?",
      ],
    },
    {
      category: "🕶️ Siluet, Fit & Terminologi Gaya",
      items: [
        "Boxy Cropped Cut (Bahu tegap, potongan pas di atas pinggang)",
        "Rule of Thirds 1:2 (Proporsi ilusi kaki jenjang)",
        "Relaxed Wide Leg Drape (Jatuh kain rapi menutupi sepatu)",
        "Drop Shoulder Silhouette (Kesan santai effortless chic)",
        "Vintage Washed Texture (Warna pudar natural estetika analog)",
        "Camp Collar Retro (Kerah liburan terbuka yang bikin leher jenjang)",
      ],
    },
    {
      category: "💰 Justifikasi Hemat & Value (Menghapus Rasa Bersalah Beli)",
      items: [
        "Investasi outfit seumur hidup dibanding beli fast fashion murah sekali pakai.",
        "Hemat hingga 90% tanpa drop aura sedetik pun.",
        "Steal deal parah, harga segini udah dapet bahan katun combed 24s berstruktur.",
        "Anti boncos, tabungan tetap aman tapi OOTD tetap keliatan old money.",
      ],
    },
    {
      category: "🔥 Call To Action (Dorongan Segera Checkout)",
      items: [
        "Link checkout udah Ze simpen di Bio profil katalog no. [x] ya!",
        "Stok warna earth tone & size L biasanya paling cepet ludes, buruan amankan!",
        "Jangan lupa klaim voucher diskon toko & gratis ongkir sebelum promo berakhir.",
        "Tap stiker link di atas sebelum harganya balik normal ke harga coret!",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-softgray-border">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F2765E]">
              Admin Co-Pilot Suite
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
              AI Generator Siap Pakai
            </span>
          </div>
          <h1 className="font-editorial text-2xl sm:text-4xl font-medium text-[#413333]">
            AI Copywriter Studio
          </h1>
          <p className="text-xs sm:text-sm text-[#413333]/70 mt-1">
            Asisten cerdas peracik kata-kata gaul Gen Z, auto-fill form produk affiliate, & script medsos siap pakai.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleOpenInNewProduct}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F2765E] to-[#e0624a] text-white text-xs sm:text-sm font-bold hover:shadow-lg transition-all"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Tambah Produk dari AI</span>
          </button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-softgray-border gap-2 sm:gap-6 overflow-x-auto pb-1">
        <button
          type="button"
          onClick={() => setActiveTab("product")}
          className={`pb-3 px-2 text-xs sm:text-sm font-semibold transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
            activeTab === "product"
              ? "border-[#F2765E] text-[#F2765E]"
              : "border-transparent text-[#413333]/60 hover:text-[#413333]"
          }`}
        >
          <Wand2 className="w-4 h-4" />
          <span>1. Magic Product Drafter</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("captions")}
          className={`pb-3 px-2 text-xs sm:text-sm font-semibold transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
            activeTab === "captions"
              ? "border-[#315B8C] text-[#315B8C]"
              : "border-transparent text-[#413333]/60 hover:text-[#413333]"
          }`}
        >
          <Share2 className="w-4 h-4" />
          <span>2. Generator Script & Caption Medsos</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("dictionary")}
          className={`pb-3 px-2 text-xs sm:text-sm font-semibold transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
            activeTab === "dictionary"
              ? "border-[#413333] text-[#413333]"
              : "border-transparent text-[#413333]/60 hover:text-[#413333]"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>3. Kamus Kata-Kata & Hook Gen Z</span>
        </button>
      </div>

      {/* TAB 1: PRODUCT GENERATOR */}
      {activeTab === "product" && (
        <div className="space-y-6">
          {/* Input Generator Box */}
          <div className="p-6 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-4">
            <h2 className="font-editorial text-lg font-bold text-[#413333] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#F2765E]" />
              <span>Ketik Ide Produk / Kata Kunci</span>
            </h2>

            <form onSubmit={handleGenerateProduct} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-6 space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#413333]/70">
                    Ide / Nama Kasar / Link
                  </label>
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="misal: jaket kulit oversize atau parfum santal le labo"
                    className="w-full px-4 py-2.5 rounded-2xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-[#413333] focus:outline-none focus:ring-2 focus:ring-[#F2765E]/30"
                  />
                </div>

                <div className="sm:col-span-3 space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#413333]/70">
                    Vibe & Nuansa
                  </label>
                  <select
                    value={vibe}
                    onChange={(e) => setVibe(e.target.value as AiVibeTone)}
                    className="w-full px-3 py-2.5 rounded-2xl bg-ivory-50 border border-softgray-border text-xs text-[#413333]"
                  >
                    <option value="skena">Skena Blok M (Vintage / Kalcer)</option>
                    <option value="starboy">Starboy SCBD (Monokrom / Luxury)</option>
                    <option value="kalcer">Kalcer Santa (Linen / Artisanal)</option>
                    <option value="dupe">Dupe Alert (Alternatif Hemat)</option>
                    <option value="clean">Clean Minimalist (Quiet Luxury)</option>
                    <option value="viral">Viral TikTok (FOMO / Hype)</option>
                  </select>
                </div>

                <div className="sm:col-span-3 space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#413333]/70">
                    Target Gender
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as any)}
                    className="w-full px-3 py-2.5 rounded-2xl bg-ivory-50 border border-softgray-border text-xs text-[#413333]"
                  >
                    <option value="unisex">Unisex (Semua Gender)</option>
                    <option value="men">Pria / Cowok</option>
                    <option value="women">Wanita / Cewek</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-1.5 text-xs text-[#413333]/70">
                  <Flame className="w-3.5 h-3.5 text-[#F2765E]" />
                  <span>Preset Populer:</span>
                  <div className="flex flex-wrap gap-1">
                    {READY_MADE_PRESETS.slice(0, 4).map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => handlePickPreset(p.id)}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-softgray hover:bg-[#F2765E]/10 text-[#413333] transition-colors"
                      >
                        {p.label.replace(/^.*? /, "")}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isGenerating}
                  className="px-6 py-2.5 rounded-2xl bg-[#413333] hover:bg-[#F2765E] text-white text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-2 disabled:opacity-50"
                >
                  <Wand2 className="w-4 h-4" />
                  <span>{isGenerating ? "Meracik Draft..." : "Generate Draft Lengkap ⚡"}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Generated Product Result Card */}
          {generatedDraft && (
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#F5EBDD] via-white to-[#F5EBDD]/60 border-2 border-[#F2765E]/30 shadow-md space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#413333]/15">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#F2765E] text-white text-[10px] font-bold tracking-wide">
                    {generatedDraft.badgeLabel}
                  </span>
                  <span className="text-xs font-mono text-[#315B8C] font-semibold">
                    /{generatedDraft.slug}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(generatedDraft.description, "desc")}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white border border-[#413333]/20 text-xs font-semibold text-[#413333] hover:bg-softgray"
                  >
                    {copiedKey === "desc" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === "desc" ? "Tersalin!" : "Salin Ulasan"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenInNewProduct}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#315B8C] hover:bg-[#25456b] text-white text-xs font-bold shadow-sm"
                  >
                    <span>Gunakan di Form Tambah Produk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Title & Short Description */}
              <div className="space-y-2">
                <h3 className="font-editorial text-2xl font-bold text-[#413333]">
                  {generatedDraft.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#413333]/80 italic bg-white/70 p-3 rounded-2xl border border-[#413333]/10">
                  &ldquo;{generatedDraft.shortDescription}&rdquo;
                </p>
              </div>

              {/* Price & Specs row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-white rounded-2xl border border-[#413333]/10 space-y-0.5">
                  <span className="text-[10px] text-[#413333]/60 uppercase font-bold">Harga Rekomendasi</span>
                  <div className="font-bold text-sm text-[#F2765E]">
                    Rp {generatedDraft.price.toLocaleString("id-ID")}
                  </div>
                  {generatedDraft.originalPrice && (
                    <span className="text-[10px] line-through text-[#413333]/40 block">
                      Rp {generatedDraft.originalPrice.toLocaleString("id-ID")}
                    </span>
                  )}
                </div>

                <div className="p-3 bg-white rounded-2xl border border-[#413333]/10 space-y-0.5">
                  <span className="text-[10px] text-[#413333]/60 uppercase font-bold">Catatan Harga</span>
                  <div className="text-[11px] text-[#413333] font-medium leading-snug">
                    {generatedDraft.priceNote}
                  </div>
                </div>

                <div className="p-3 bg-white rounded-2xl border border-[#413333]/10 space-y-0.5 sm:col-span-2">
                  <span className="text-[10px] text-[#413333]/60 uppercase font-bold">Panduan Ukuran (TB/BB)</span>
                  <div className="text-[11px] text-[#413333] font-medium leading-snug">
                    {generatedDraft.sizeNotes}
                  </div>
                </div>
              </div>

              {/* Structured Review Body */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#413333]/10 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#315B8C] block">
                  Ulasan Lengkap Kurasi Stylist
                </span>
                <div className="text-xs text-[#413333] whitespace-pre-wrap font-sans leading-relaxed">
                  {generatedDraft.description}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-bold text-[#413333]/60 mr-1">Tags Viral:</span>
                {generatedDraft.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-full bg-white border border-[#413333]/15 text-[10px] font-mono text-[#315B8C]"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: SOCIAL CAPTIONS GENERATOR */}
      {activeTab === "captions" && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-4">
            <h2 className="font-editorial text-lg font-bold text-[#413333]">
              Pilih Produk untuk Dibuatkan Script Medsos
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-8 space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#413333]/70">
                  Pilih Produk dari Toko
                </label>
                <select
                  value={selectedProductId}
                  onChange={(e) => {
                    setSelectedProductId(e.target.value);
                    const found = productsList.find((p) => p.id === e.target.value);
                    if (found) {
                      setCustomCaptionTitle(found.name);
                      setCustomPrice(found.price);
                    }
                  }}
                  className="w-full px-3 py-2.5 rounded-2xl bg-ivory-50 border border-softgray-border text-xs text-[#413333]"
                >
                  {productsList.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} (Rp {p.price.toLocaleString("id-ID")})
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-4 flex items-end">
                <button
                  type="button"
                  onClick={handleGenerateCaptions}
                  className="w-full py-2.5 px-4 rounded-2xl bg-[#315B8C] hover:bg-[#25456b] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 text-[#F2765E]" />
                  <span>Racik Script Sekarang ⚡</span>
                </button>
              </div>
            </div>
          </div>

          {/* Social Media Output Cards */}
          {captionsBundle && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1: TikTok / Reels */}
              <div className="p-5 rounded-3xl bg-white border border-[#413333]/15 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-[#315B8C] uppercase tracking-wide">
                    📱 Script Video TikTok / Reels
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(captionsBundle.tiktokScript, "tiktok")}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#315B8C] text-white text-[11px] font-semibold hover:bg-[#25456b]"
                  >
                    {copiedKey === "tiktok" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === "tiktok" ? "Tersalin!" : "Salin Script"}</span>
                  </button>
                </div>
                <pre className="text-xs text-[#413333] whitespace-pre-wrap font-sans bg-[#F5EBDD]/40 p-4 rounded-2xl border border-[#413333]/10 leading-relaxed">
                  {captionsBundle.tiktokScript}
                </pre>
              </div>

              {/* Card 2: Instagram Story */}
              <div className="p-5 rounded-3xl bg-white border border-[#413333]/15 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-[#F2765E] uppercase tracking-wide">
                    📸 Instagram Story Copy & Link
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(captionsBundle.igStory, "ig")}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F2765E] text-white text-[11px] font-semibold hover:bg-[#e0624a]"
                  >
                    {copiedKey === "ig" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === "ig" ? "Tersalin!" : "Salin Teks"}</span>
                  </button>
                </div>
                <pre className="text-xs text-[#413333] whitespace-pre-wrap font-sans bg-[#F5EBDD]/40 p-4 rounded-2xl border border-[#413333]/10 leading-relaxed">
                  {captionsBundle.igStory}
                </pre>
              </div>

              {/* Card 3: Telegram / WA */}
              <div className="p-5 rounded-3xl bg-white border border-[#413333]/15 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-emerald-700 uppercase tracking-wide">
                    💬 Broadcast Channel Telegram / WA
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(captionsBundle.telegramBroadcast, "tele")}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-700 text-white text-[11px] font-semibold hover:bg-emerald-800"
                  >
                    {copiedKey === "tele" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === "tele" ? "Tersalin!" : "Salin Pesan"}</span>
                  </button>
                </div>
                <pre className="text-xs text-[#413333] whitespace-pre-wrap font-sans bg-[#F5EBDD]/40 p-4 rounded-2xl border border-[#413333]/10 leading-relaxed">
                  {captionsBundle.telegramBroadcast}
                </pre>
              </div>

              {/* Card 4: Twitter / X */}
              <div className="p-5 rounded-3xl bg-white border border-[#413333]/15 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-[#413333] uppercase tracking-wide">
                    🐦 Twitter / X Racun Belanja Thread
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(captionsBundle.twitterHook, "x")}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#413333] text-white text-[11px] font-semibold hover:bg-[#251d1d]"
                  >
                    {copiedKey === "x" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === "x" ? "Tersalin!" : "Salin Thread"}</span>
                  </button>
                </div>
                <pre className="text-xs text-[#413333] whitespace-pre-wrap font-sans bg-[#F5EBDD]/40 p-4 rounded-2xl border border-[#413333]/10 leading-relaxed">
                  {captionsBundle.twitterHook}
                </pre>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: GEN Z CHEAT SHEET VOCABULARY */}
      {activeTab === "dictionary" && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-2">
            <h2 className="font-editorial text-lg font-bold text-[#413333]">
              Kamus Kata-Kata & Hook Penjualan Gen Z
            </h2>
            <p className="text-xs text-[#413333]/70">
              Koleksi frasa persuasif yang terbukti menaikkan klik dan konversi affiliate. Klik frasa mana pun untuk menyalin otomatis ke clipboard!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {VOCABULARY_CHUNKS.map((group, gIdx) => (
              <div
                key={gIdx}
                className="p-5 rounded-3xl bg-white border border-[#413333]/15 shadow-sm space-y-3"
              >
                <h3 className="font-bold text-xs sm:text-sm text-[#413333] flex items-center gap-2">
                  <span>{group.category}</span>
                </h3>

                <div className="space-y-2">
                  {group.items.map((item, iIdx) => {
                    const key = `vocab-${gIdx}-${iIdx}`;
                    return (
                      <div
                        key={iIdx}
                        onClick={() => handleCopy(item, key)}
                        className="p-3 rounded-2xl bg-[#F5EBDD]/30 hover:bg-[#F2765E]/10 border border-[#413333]/10 hover:border-[#F2765E]/40 cursor-pointer transition-all flex items-center justify-between gap-2 group"
                      >
                        <span className="text-xs text-[#413333] group-hover:text-[#F2765E] transition-colors leading-relaxed">
                          &ldquo;{item}&rdquo;
                        </span>
                        <span className="flex-shrink-0 text-[10px] px-2 py-0.5 rounded-md bg-white border border-[#413333]/10 text-[#413333]/60 group-hover:bg-[#F2765E] group-hover:text-white transition-all font-semibold">
                          {copiedKey === key ? "Tersalin!" : "Salin"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
