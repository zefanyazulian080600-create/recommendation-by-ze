import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Package,
  CheckCircle2,
  Sparkles,
  MousePointerClick,
  PlusCircle,
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Settings,
  Rocket,
  Globe,
  Share2,
} from "lucide-react";
import { getAnalyticsSummary, getProducts } from "@/lib/data/store";
import { getVisitorAnalytics } from "@/lib/data/visitor-store";
import { formatRupiah, getMarketplaceMeta } from "@/lib/utils";

export default async function AdminDashboardPage() {
  const [analytics, allProducts, visitorAnalytics] = await Promise.all([
    getAnalyticsSummary(),
    getProducts({}, true),
    getVisitorAnalytics(),
  ]);

  // Randomize preview items across all categories instead of only newly uploaded batch
  const previewProducts =
    analytics.topProducts.some((p) => (p.click_count || 0) > 0)
      ? analytics.topProducts
      : [...allProducts].sort(() => 0.5 - Math.random()).slice(0, 8);

  const stats = [
    {
      label: "Total Produk Terdaftar",
      value: analytics.totalProducts,
      desc: "Semua item di database",
      icon: Package,
      badge: "Katalog",
    },
    {
      label: "Produk Live / Aktif",
      value: analytics.publishedProducts,
      desc: "Tampil di website publik",
      icon: CheckCircle2,
      badge: "Live",
    },
    {
      label: "Ze's Curated Pick",
      value: analytics.featuredProducts,
      desc: "Rekomendasi prioritas",
      icon: Sparkles,
      badge: "Pilihan Ze",
    },
    {
      label: "Total Klik Affiliate",
      value: `${analytics.totalClicks}x`,
      desc: "Klik menuju Shopee/TikTok",
      icon: MousePointerClick,
      badge: "Konversi",
    },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#12131A] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-mono font-bold tracking-widest uppercase border border-white/20">
              ✦ ZE CMS ARCHIVE ✦
            </span>
            <span className="text-xs font-mono font-bold text-emerald-400">v2.4 READY</span>
          </div>
          <h1 className="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Dashboard Manajemen Toko
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Kelola link affiliate, nomor racun bio, dan pantau produk yang paling banyak diklik followers.
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <Link
            href="/admin/import"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-black text-xs sm:text-sm font-bold hover:bg-emerald-400 transition-all shadow-md active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>Import CSV/Excel Shopee</span>
          </Link>
          <Link
            href="/admin/products/new"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-xs sm:text-sm font-bold hover:bg-zinc-200 transition-all shadow-md active:scale-95"
          >
            <PlusCircle className="w-4 h-4 text-emerald-600" />
            <span>+ Tambah Manual</span>
          </Link>
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-white/20 bg-[#090A0F] text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-colors shadow-sm"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Lihat Toko Live</span>
          </Link>
        </div>
      </div>

      {/* 4 Clean Essential Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#12131A] border border-white/10 shadow-2xl space-y-2 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                  {s.badge}
                </span>
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {s.value}
                </div>
                <div className="text-[11px] font-bold text-zinc-200 mt-0.5">
                  {s.label}
                </div>
                <div className="text-[10px] text-zinc-500">
                  {s.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Clean Quick Shortcuts: Products & Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/admin/products/new"
          className="p-5 sm:p-6 rounded-2xl bg-[#12131A] border border-white/10 hover:border-white/30 shadow-2xl transition-all group flex items-start gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-white/5 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:scale-105 transition-transform">
            <PlusCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-sans text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                Mode Cepat: Tambah Produk Baru ⚡
              </h3>
            </div>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              Hanya butuh nama produk & link affiliate Shopee/TikTok. Deskripsi dan ulasan stylist akan diisi otomatis oleh AI!
            </p>
          </div>
        </Link>

        <Link
          href="/admin/settings"
          className="p-5 sm:p-6 rounded-2xl bg-[#12131A] border border-white/10 hover:border-white/30 shadow-2xl transition-all group flex items-start gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-white/5 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:scale-105 transition-transform">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-sans text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
              Pengaturan Bio & Media Sosial ⚙️
            </h3>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              Ubah link Instagram, TikTok bio, banner pengumuman atas, teks headline hero, dan footer website.
            </p>
          </div>
        </Link>
      </div>

      {/* Real-time Visitor Location Snapshot Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141724] via-[#12141F] to-[#141724] border border-white/10 shadow-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold text-base">
              📍
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-sans text-base font-bold text-white">
                  Lokasi Pengunjung Website Terkini
                </h3>
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold animate-pulse">
                  ● LIVE TRACKING
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Pengunjung aktif saat ini tersebar dari berbagai kota di Indonesia.
              </p>
            </div>
          </div>

          <Link
            href="/admin/analytics"
            className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto underline underline-offset-4"
          >
            <span>Buka Pantauan Lokasi Lengkap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Quick Location Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {visitorAnalytics.topCities.slice(0, 4).map((c, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-0.5">
              <span className="text-[10px] text-zinc-400 font-mono block">Kota #{idx + 1}</span>
              <span className="font-bold text-white text-xs block truncate">{c.city}</span>
              <span className="text-[10px] text-emerald-400 font-mono">{c.percentage}% traffic ({c.count}x)</span>
            </div>
          ))}
        </div>

        {/* Recent 3 visits stream */}
        <div className="space-y-1.5 pt-1">
          {visitorAnalytics.recentLogs.slice(0, 3).map((log) => (
            <div
              key={log.id}
              className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/5 text-xs text-zinc-300"
            >
              <div className="flex items-center gap-2 truncate">
                <span>{log.flag}</span>
                <span className="font-bold text-white">{log.city}</span>
                <span className="text-zinc-500 text-[11px] hidden sm:inline">• {log.device}</span>
                <span className="text-zinc-500 text-[11px] truncate max-w-[200px]">sedang melihat {log.page}</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono shrink-0">
                {new Date(log.timestamp).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Clicked Products Table with Bio Spill Numbers */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#12131A] border border-white/10 shadow-2xl space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <h2 className="font-sans text-lg sm:text-xl font-bold text-white">
                Daftar Produk & Ranking Minat Followers
              </h2>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              Urutan berdasarkan klik affiliate keluar ke aplikasi Shopee/TikTok.
            </p>
          </div>

          <Link
            href="/admin/products"
            className="text-xs font-mono font-bold text-zinc-300 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-[#090A0F] hover:bg-white/10 transition-colors w-fit"
          >
            <span>Semua Produk ({allProducts.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 text-zinc-400 font-mono font-bold uppercase tracking-wider">
                <th className="pb-3 pl-2">No. Bio</th>
                <th className="pb-3">Produk</th>
                <th className="pb-3">Marketplace</th>
                <th className="pb-3">Harga</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 text-right">Total Klik</th>
                <th className="pb-3 text-right pr-2">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {previewProducts.map((p, idx) => {
                const mpMeta = getMarketplaceMeta(p.marketplace);
                const cover = p.media?.find((m) => m.is_cover) || p.media?.[0];
                return (
                  <tr key={p.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 pl-2 font-mono font-bold text-white">
                      <span className="px-2 py-0.5 rounded-md bg-white/10 border border-white/20 text-white text-[10px]">
                        #{String(p.spill_number || idx + 1).padStart(2, "0")}
                      </span>
                    </td>
                    <td className="py-3.5 font-bold text-white">
                      <div className="flex items-center gap-2.5 max-w-xs">
                        {cover && (
                          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/10 flex-shrink-0 bg-[#090A0F]">
                            <Image
                              src={cover.public_url}
                              alt={p.name}
                              fill
                              sizes="32px"
                              className="object-cover"
                            />
                          </div>
                        )}
                        <span className="truncate">{p.name}</span>
                      </div>
                    </td>
                    <td className="py-3.5">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${mpMeta.badgeBg} text-white`}
                      >
                        {mpMeta.name}
                      </span>
                    </td>
                    <td className="py-3.5 font-bold font-mono text-zinc-200">
                      {formatRupiah(p.price)}
                    </td>
                    <td className="py-3.5">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                          p.status === "published"
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                            : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                        }`}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td className="py-3.5 text-right font-mono font-extrabold text-white text-sm">
                      {p.click_count}x
                    </td>
                    <td className="py-3.5 text-right pr-2">
                      <Link
                        href={`/admin/products/${p.id}/edit`}
                        className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/20 hover:bg-white hover:text-black font-bold text-[11px] text-white transition-colors"
                      >
                        Edit ✏️
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Checklist Siap Publikasi (Go-Live Guide Box) */}
      <div className="p-6 sm:p-7 rounded-2xl bg-[#12131A] border border-white/10 shadow-2xl space-y-4">
        <div className="flex items-center gap-2.5">
          <Rocket className="w-5 h-5 text-emerald-400" />
          <h3 className="font-sans text-base sm:text-lg font-bold text-white">
            Panduan Cepat Publikasi ke Bio TikTok & Instagram (Go-Live)
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-4 rounded-xl bg-[#090A0F] border border-white/10 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-white">
              <span className="w-5 h-5 rounded-full bg-emerald-500 text-black flex items-center justify-center text-[10px] font-mono font-bold">
                1
              </span>
              <span>Ganti Link Affiliate</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Edit produk di atas dan ganti dengan link affiliate Shopee/TikTok akun kamu sendiri.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#090A0F] border border-white/10 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-white">
              <span className="w-5 h-5 rounded-full bg-emerald-500 text-black flex items-center justify-center text-[10px] font-mono font-bold">
                2
              </span>
              <span>Deploy ke Vercel</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Push kode ke GitHub lalu sambungkan ke Vercel.com (gratis & aktif 24 jam).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#090A0F] border border-white/10 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-white">
              <span className="w-5 h-5 rounded-full bg-emerald-500 text-black flex items-center justify-center text-[10px] font-mono font-bold">
                3
              </span>
              <span>Pasang di Link Bio</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Taruh domain di bio TikTok/IG kamu dan sebutkan <em>&ldquo;Link no. [XX] di bio&rdquo;</em> di video konten!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
