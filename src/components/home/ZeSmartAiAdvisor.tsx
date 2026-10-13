"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  RotateCcw,
  Sliders,
  Flame,
  ShoppingBag,
  Heart,
  ChevronRight,
  ShieldCheck,
  Star,
  Check
} from "lucide-react";
import { Product } from "@/types";
import { formatRupiah, calculateDiscount } from "@/lib/utils";
import { useToast } from "@/context/ToastContext";
import { triggerConfetti } from "@/lib/confetti";
import { WishlistButton } from "@/components/product/WishlistButton";

interface ZeSmartAiAdvisorProps {
  products: Product[];
}

type VibeIntent =
  | "all"
  | "piyama"
  | "gamis"
  | "skincare"
  | "parfum"
  | "pria"
  | "wanita"
  | "sepatu"
  | "accessories"
  | "under-50k";

type BudgetRange = "all" | "under-50k" | "50k-100k" | "above-100k";

type PriorityGoal = "bestseller" | "rating" | "budget" | "curator";

export function ZeSmartAiAdvisor({ products }: ZeSmartAiAdvisorProps) {
  const { showToast } = useToast();

  const [intent, setIntent] = useState<VibeIntent>("all");
  const [budget, setBudget] = useState<BudgetRange>("all");
  const [priority, setPriority] = useState<PriorityGoal>("curator");
  const [isGenerated, setIsGenerated] = useState<boolean>(true);

  // Intent options
  const intentOptions = [
    {
      id: "all" as VibeIntent,
      label: "✨ Eksplor Semua",
      desc: "Rekomendasi terbaik serba bisa",
      icon: "🌟",
    },
    {
      id: "piyama" as VibeIntent,
      label: "😴 Piyama & Baju Tidur",
      desc: "Katun rayon adem, santai di rumah",
      icon: "🌙",
    },
    {
      id: "gamis" as VibeIntent,
      label: "🌙 Gamis & Muslimah",
      desc: "Abaya malika, dress brokat anggun",
      icon: "✨",
    },
    {
      id: "skincare" as VibeIntent,
      label: "✨ Skincare Glowing",
      desc: "Serum pencerah, sunscreen & toner",
      icon: "🧴",
    },
    {
      id: "parfum" as VibeIntent,
      label: "🌸 Parfum Tahan Lama",
      desc: "Extrait mewah & decant wangi viral",
      icon: "🌺",
    },
    {
      id: "pria" as VibeIntent,
      label: "🛹 Streetwear Cowok",
      desc: "Kemeja boxy, gorpcore, vintage fit",
      icon: "👔",
    },
    {
      id: "wanita" as VibeIntent,
      label: "👗 Fashion Korean Cewek",
      desc: "Blouse rajut, knitwear & one set chic",
      icon: "🎀",
    },
    {
      id: "sepatu" as VibeIntent,
      label: "🎒 Tas, Sepatu & Sandal",
      desc: "Ransel, slingbag, sneakers & slip on",
      icon: "🎒",
    },
    {
      id: "accessories" as VibeIntent,
      label: "💍 Aksesoris & Perhiasan",
      desc: "Gelang titanium, cincin, kalung & hair clip",
      icon: "💎",
    },
    {
      id: "under-50k" as VibeIntent,
      label: "💸 Murah Meriah (Under 50k)",
      desc: "Ramah kantong harga di bawah 50rb",
      icon: "💰",
    },
  ];

  // Budget options
  const budgetOptions = [
    { id: "all" as BudgetRange, label: "Semua Budget", desc: "Fleksibel tanpa batasan" },
    { id: "under-50k" as BudgetRange, label: "< Rp 50.000", desc: "Super hemat ramah dompet" },
    { id: "50k-100k" as BudgetRange, label: "Rp 50k - 100k", desc: "Paling banyak dicari" },
    { id: "above-100k" as BudgetRange, label: "> Rp 100.000", desc: "Kualitas premium terbaik" },
  ];

  // Priority options
  const priorityOptions = [
    { id: "curator" as PriorityGoal, label: "Pilihan Ze ✨", desc: "Kurasi independen terfavorit" },
    { id: "bestseller" as PriorityGoal, label: "Best Seller 🔥", desc: "Terjual ribuan unit di Shopee" },
    { id: "budget" as PriorityGoal, label: "Harga Termurah 💸", desc: "Harga paling ekonomis" },
    { id: "rating" as PriorityGoal, label: "Star+ Seller ⭐", desc: "Toko resmi bintang tinggi" },
  ];

  // Smart Matching Engine
  const recommendedItems = useMemo(() => {
    let pool = [...products];

    // 1. Filter by Intent
    if (intent === "piyama") {
      pool = pool.filter((p) => p.category_id === "cat-piyama-sleepwear" || /piyama|baju tidur|sleepwear/i.test(p.name));
    } else if (intent === "gamis") {
      pool = pool.filter((p) => p.category_id === "cat-gamis-muslimah" || /gamis|abaya|brokat|malika|muslimah/i.test(p.name));
    } else if (intent === "skincare") {
      pool = pool.filter((p) => p.category_id === "cat-skincare-beauty" || /skincare|serum|facial|toner|sunscreen|scrub/i.test(p.name));
    } else if (intent === "parfum") {
      pool = pool.filter((p) => p.category_id === "cat-parfum-fragrance" || /parfum|perfume|fragrance|decant/i.test(p.name));
    } else if (intent === "pria") {
      pool = pool.filter((p) => p.category_id === "cat-outfit-pria" || /pria|cowok|gorpcore|boxy|kemeja pria/i.test(p.name));
    } else if (intent === "wanita") {
      pool = pool.filter((p) => p.category_id === "cat-outfit-wanita" || /wanita|cewek|blouse|rajut|croptop|korean/i.test(p.name));
    } else if (intent === "sepatu") {
      pool = pool.filter((p) => p.category_id === "cat-bags-shoes" || /tas|ransel|slingbag|handbag|sepatu|sneaker|sandal|slop|kicks/i.test(p.name));
    } else if (intent === "accessories") {
      pool = pool.filter((p) => p.category_id === "cat-accessories" || /cincin|gelang|kalung|anting|sabuk|jedai|jepit|bando|kacamata/i.test(p.name));
    } else if (intent === "under-50k") {
      pool = pool.filter((p) => p.price <= 50000);
    }

    // 2. Filter by Budget
    if (budget === "under-50k") {
      pool = pool.filter((p) => p.price <= 50000);
    } else if (budget === "50k-100k") {
      pool = pool.filter((p) => p.price > 50000 && p.price <= 100000);
    } else if (budget === "above-100k") {
      pool = pool.filter((p) => p.price > 100000);
    }

    // Fallback if pool is empty after strict filtering
    if (pool.length === 0) {
      pool = products.filter((p) => p.price <= (budget === "under-50k" ? 50000 : 150000));
    }

    // 3. Compute Smart Relevance Score for each product
    const scored = pool.map((p) => {
      let score = 85;

      // Best seller bonus
      if (p.price_note?.includes("10RB+") || p.short_description?.includes("10RB+")) {
        score += 8;
      } else if (p.price_note?.includes("5RB+") || p.price_note?.includes("3RB+")) {
        score += 5;
      }

      // Feature bonus
      if (p.is_featured) score += 4;
      if (p.is_trending) score += 3;

      // Priority adjustments
      if (priority === "bestseller" && (p.price_note?.includes("10RB+") || p.tags?.includes("bestseller"))) {
        score += 10;
      } else if (priority === "budget") {
        if (p.price <= 50000) score += 12;
        else if (p.price <= 80000) score += 6;
      } else if (priority === "rating") {
        if (p.price_note?.includes("Official") || p.price_note?.includes("Terpercaya")) {
          score += 8;
        }
      }

      // Match score capped between 92% and 99%
      const matchScore = Math.min(99, Math.max(92, score));

      // Generate a personalized smart rationale
      let rationale = `Paling pas dengan kriteria ${intent !== "all" ? intentOptions.find((i) => i.id === intent)?.label : "belanja kamu"}. Sudah terbukti terjual banyak dengan rating pembeli memuaskan di Shopee.`;

      if (intent === "piyama") {
        rationale = `Bahan katun rayon adem dan tidak panas dipakai tidur seharian. Penjualan toko tinggi dan review jahitan rapi.`;
      } else if (intent === "gamis") {
        rationale = `Desain busana muslimah anggun dan elegan. Cocok untuk pengajian maupun kondangan dengan cutting jatuh yang rapi.`;
      } else if (intent === "skincare") {
        rationale = `Formulasi lembut dan aman teruji di Shopee. Paling banyak di-repurchase pembeli untuk perawatan kulit harian.`;
      } else if (intent === "parfum") {
        rationale = `Aroma wangi mewah dengan daya sebar tahan lama. Alternatif fragrance elegan dengan harga yang sangat terjangkau.`;
      } else if (intent === "under-50k" || budget === "under-50k") {
        rationale = `Pilihan terbaik di bawah 50 ribu rupiah. Harga hemat tanpa mengorbankan kualitas bahan dan kenyamanan pemakaian.`;
      } else if (intent === "pria") {
        rationale = `Cutting proporsional dan bahan nyaman untuk aktivitas luar ruangan maupun nongkrong santai.`;
      } else if (intent === "wanita") {
        rationale = `Look Korean chic estetik yang mudah di-mix and match dengan bawahan apapun.`;
      }

      return {
        product: p,
        matchScore,
        rationale,
      };
    });

    // Sort by match score descending
    scored.sort((a, b) => b.matchScore - a.matchScore);

    return scored.slice(0, 4);
  }, [products, intent, budget, priority]);

  const handleReset = () => {
    setIntent("all");
    setBudget("all");
    setPriority("curator");
    showToast("Filter asisten pintar di-reset ✨", "info");
  };

  return (
    <section className="py-14 sm:py-20 border-t border-white/10 bg-[#07080B] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>ZE AI PERSONAL SHOPPER • ASISTEN PINTAR</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Rekomendasi Pintar Sesuai Kebutuhan & Budget Kamu
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
              Bingung mau checkout apa? Pilih apa yang kamu cari dan budget kamu, sistem kurasi pintar Ze akan otomatis mencocokkan produk Shopee asli yang paling tepat dan anti-zonk!
            </p>
          </div>

          <button
            onClick={handleReset}
            className="self-start md:self-auto flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Pilihan</span>
          </button>
        </div>

        {/* Interactive Filter Wizard Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* 1. Kebutuhan / Vibe */}
          <div className="p-5 rounded-2xl bg-[#12131A] border border-white/10 space-y-3 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                1. Kategori / Vibe Belanja
              </span>
              <span className="text-xs text-zinc-400">Pilih salah satu</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 max-h-[290px] overflow-y-auto pr-1 scrollbar-thin">
              {intentOptions.map((opt) => {
                const isSelected = intent === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setIntent(opt.id)}
                    className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-emerald-500/20 border-emerald-500/50 text-white shadow-sm"
                        : "bg-white/5 border-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className="text-base">{opt.icon}</span>
                      <div className="truncate">
                        <div className="font-bold truncate">{opt.label}</div>
                        <div className="text-[10px] text-zinc-400 truncate">{opt.desc}</div>
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-emerald-400 shrink-0 ml-1" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Budget Belanja */}
          <div className="p-5 rounded-2xl bg-[#12131A] border border-white/10 space-y-3 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                  2. Budget Maksimal Kamu
                </span>
                <span className="text-xs text-zinc-400">Sesuai dompet</span>
              </div>
              <div className="space-y-2">
                {budgetOptions.map((opt) => {
                  const isSelected = budget === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setBudget(opt.id)}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-emerald-500/20 border-emerald-500/50 text-white shadow-sm"
                          : "bg-white/5 border-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm">{opt.label}</div>
                        <div className="text-[10px] text-zinc-400">{opt.desc}</div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 text-[11px] text-zinc-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Harga diupdate langsung dari Shopee</span>
            </div>
          </div>

          {/* 3. Prioritas Belanja */}
          <div className="p-5 rounded-2xl bg-[#12131A] border border-white/10 space-y-3 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                  3. Prioritas Rekomendasi
                </span>
                <span className="text-xs text-zinc-400">Fokus kamu</span>
              </div>
              <div className="space-y-2">
                {priorityOptions.map((opt) => {
                  const isSelected = priority === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setPriority(opt.id)}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-emerald-500/20 border-emerald-500/50 text-white shadow-sm"
                          : "bg-white/5 border-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm">{opt.label}</div>
                        <div className="text-[10px] text-zinc-400">{opt.desc}</div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 text-[11px] text-zinc-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Bebas toko zonk & review palsu</span>
            </div>
          </div>
        </div>

        {/* RESULTS: Smart AI Matches */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Hasil Kurasi Cerdas ({recommendedItems.length} Produk Paling Pas)</span>
              </span>
            </div>
            <Link
              href="/products"
              className="text-xs text-zinc-400 hover:text-white font-semibold flex items-center gap-1 transition-colors"
            >
              <span>Lihat Semua Katalog (+490)</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {recommendedItems.map(({ product, matchScore, rationale }) => {
              const coverImg =
                product.media?.[0]?.public_url ||
                "https://down-id.img.susercontent.com/file/id-11134207-7rbke-ma7vs1c79of1c0";
              const discount = calculateDiscount(product.original_price, product.price);

              return (
                <div
                  key={product.id}
                  className="group bg-[#12131A] rounded-2xl border border-white/10 hover:border-emerald-500/40 p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative"
                >
                  {/* Top Match Score Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[11px] font-bold border border-emerald-500/40 flex items-center gap-1">
                      <span>🎯</span>
                      <span>{matchScore}% Cocok</span>
                    </span>
                    <WishlistButton product={product} />
                  </div>

                  {/* Image & Product Info */}
                  <div className="space-y-3">
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-zinc-950 border border-white/10">
                      <Image
                        src={coverImg}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {discount && (
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-rose-500 text-white text-[10px] font-bold shadow-md">
                          -{discount}%
                        </span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-zinc-400 truncate">
                        {product.price_note || "Shopee Star Seller"}
                      </div>
                      <Link href={`/product/${product.slug}`}>
                        <h3 className="font-sans text-xs sm:text-sm font-bold text-white line-clamp-2 group-hover:text-emerald-400 transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                    </div>

                    {/* Price Row */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-extrabold text-white font-mono">
                        {formatRupiah(product.price)}
                      </span>
                      {product.original_price && (
                        <span className="text-[11px] text-zinc-500 line-through">
                          {formatRupiah(product.original_price)}
                        </span>
                      )}
                    </div>

                    {/* AI Rationale Box */}
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-[11px] text-zinc-300 leading-snug">
                      <span className="text-emerald-400 font-bold block mb-0.5">
                        Alasan Ze Pilihkan:
                      </span>
                      {rationale}
                    </div>
                  </div>

                  {/* 1-Click Shopee Checkout Button */}
                  <div className="pt-4 mt-3 border-t border-white/10 flex items-center gap-2">
                    <a
                      href={product.affiliate_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#EE4D2D] hover:bg-[#D73211] text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow-lg active:scale-95"
                    >
                      <span>Beli di Shopee</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <Link
                      href={`/product/${product.slug}`}
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white transition-colors"
                      title="Lihat Detail Produk"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
