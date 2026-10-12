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
import { formatRupiah, getMarketplaceMeta } from "@/lib/utils";

export default async function AdminDashboardPage() {
  const analytics = await getAnalyticsSummary();
  const allProducts = await getProducts({}, true);

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
      {/* Top Banner Header - Retro Editorial Style */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border-2 border-espresso shadow-brutal">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-espresso text-vanilla text-[10px] font-mono font-bold tracking-widest uppercase">
              ✦ ZE CMS ARCHIVE ✦
            </span>
            <span className="text-xs font-mono font-bold text-matcha-600">v2.4 READY</span>
          </div>
          <h1 className="font-editorial text-2xl sm:text-4xl font-extrabold text-espresso">
            Dashboard Manajemen Toko
          </h1>
          <p className="text-xs sm:text-sm text-espresso/70">
            Kelola link affiliate, nomor racun bio, dan pantau produk yang paling banyak diklik followers.
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <Link
            href="/admin/products/new"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-espresso text-vanilla text-xs sm:text-sm font-extrabold hover:bg-rose transition-all shadow-brutal hover:translate-y-[-1px] tap-bounce"
          >
            <PlusCircle className="w-4 h-4 text-butter-400" />
            <span>+ Tambah Produk Baru</span>
          </Link>
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-2xl border-2 border-espresso bg-vanilla text-xs sm:text-sm font-bold text-espresso hover:bg-butter-300 transition-colors shadow-sm"
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
              className="p-5 rounded-3xl bg-white border-2 border-espresso shadow-brutal-sm space-y-2 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-matcha-600">
                  {s.badge}
                </span>
                <div className="w-7 h-7 rounded-lg bg-vanilla border border-espresso flex items-center justify-center text-espresso">
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-espresso font-editorial">
                  {s.value}
                </div>
                <div className="text-[11px] font-bold text-espresso/80 mt-0.5">
                  {s.label}
                </div>
                <div className="text-[10px] text-espresso/50">
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
          className="p-5 sm:p-6 rounded-3xl bg-white border-2 border-espresso hover:border-espresso hover:bg-butter-200/40 shadow-brutal transition-all group flex items-start gap-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-espresso text-butter-400 flex items-center justify-center flex-shrink-0 border border-espresso group-hover:scale-105 transition-transform">
            <PlusCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-editorial text-base sm:text-lg font-bold text-espresso group-hover:text-matcha-600 transition-colors">
                Mode Cepat: Tambah Produk Baru ⚡
              </h3>
            </div>
            <p className="text-xs text-espresso/70 mt-1 leading-relaxed">
              Hanya butuh nama produk & link affiliate Shopee/TikTok. Deskripsi dan ulasan stylist akan diisi otomatis oleh AI!
            </p>
          </div>
        </Link>

        <Link
          href="/admin/settings"
          className="p-5 sm:p-6 rounded-3xl bg-white border-2 border-espresso hover:border-espresso hover:bg-butter-200/40 shadow-brutal transition-all group flex items-start gap-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-vanilla text-espresso flex items-center justify-center flex-shrink-0 border-2 border-espresso group-hover:scale-105 transition-transform">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-editorial text-base sm:text-lg font-bold text-espresso group-hover:text-matcha-600 transition-colors">
              Pengaturan Bio & Media Sosial ⚙️
            </h3>
            <p className="text-xs text-espresso/70 mt-1 leading-relaxed">
              Ubah link Instagram, TikTok bio, banner pengumuman atas, teks headline hero, dan footer website.
            </p>
          </div>
        </Link>
      </div>

      {/* Top Clicked Products Table with Bio Spill Numbers */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-espresso shadow-brutal space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-rose" />
              <h2 className="font-editorial text-lg sm:text-xl font-bold text-espresso">
                Daftar Produk & Ranking Minat Followers
              </h2>
            </div>
            <p className="text-xs text-espresso/70 mt-0.5">
              Urutan berdasarkan klik affiliate keluar ke aplikasi Shopee/TikTok.
            </p>
          </div>

          <Link
            href="/admin/products"
            className="text-xs font-bold text-espresso hover:text-matcha-600 flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-espresso/30 bg-vanilla hover:bg-butter-300 transition-colors w-fit"
          >
            <span>Semua Produk ({allProducts.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b-2 border-espresso text-espresso font-mono font-bold uppercase tracking-wider">
                <th className="pb-3 pl-2">No. Bio</th>
                <th className="pb-3">Produk</th>
                <th className="pb-3">Marketplace</th>
                <th className="pb-3">Harga</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 text-right">Total Klik</th>
                <th className="pb-3 text-right pr-2">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-espresso/15">
              {analytics.topProducts.map((p, idx) => {
                const mpMeta = getMarketplaceMeta(p.marketplace);
                const cover = p.media?.find((m) => m.is_cover) || p.media?.[0];
                return (
                  <tr key={p.id} className="hover:bg-vanilla/50 transition-colors">
                    <td className="py-3.5 pl-2 font-mono font-bold text-espresso">
                      <span className="px-2 py-0.5 rounded-md bg-espresso text-vanilla text-[10px]">
                        #{String(p.spill_number || idx + 1).padStart(2, "0")}
                      </span>
                    </td>
                    <td className="py-3.5 font-bold text-espresso">
                      <div className="flex items-center gap-2.5 max-w-xs">
                        {cover && (
                          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-espresso flex-shrink-0 bg-softgray">
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
                    <td className="py-3.5 font-bold text-espresso">
                      {formatRupiah(p.price)}
                    </td>
                    <td className="py-3.5">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                          p.status === "published"
                            ? "bg-matcha-500/15 text-matcha-700 border-matcha-500"
                            : "bg-amber-100 text-amber-800 border-amber-300"
                        }`}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td className="py-3.5 text-right font-mono font-extrabold text-espresso text-sm">
                      {p.click_count}x
                    </td>
                    <td className="py-3.5 text-right pr-2">
                      <Link
                        href={`/admin/products/${p.id}/edit`}
                        className="px-2.5 py-1 rounded-lg bg-vanilla border border-espresso hover:bg-butter-300 font-bold text-[11px] text-espresso transition-colors"
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
      <div className="p-6 sm:p-7 rounded-3xl bg-matcha-500/10 border-2 border-espresso shadow-brutal space-y-4">
        <div className="flex items-center gap-2.5">
          <Rocket className="w-5 h-5 text-matcha-600" />
          <h3 className="font-editorial text-lg font-bold text-espresso">
            Panduan Cepat Publikasi ke Bio TikTok & Instagram (Go-Live)
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-4 rounded-2xl bg-white border border-espresso/20 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-espresso">
              <span className="w-5 h-5 rounded-full bg-espresso text-vanilla flex items-center justify-center text-[10px]">
                1
              </span>
              <span>Ganti Link Affiliate</span>
            </div>
            <p className="text-espresso/70 leading-relaxed">
              Edit produk di atas dan ganti dengan link affiliate Shopee/TikTok akun kamu sendiri.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-espresso/20 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-espresso">
              <span className="w-5 h-5 rounded-full bg-espresso text-vanilla flex items-center justify-center text-[10px]">
                2
              </span>
              <span>Deploy ke Vercel</span>
            </div>
            <p className="text-espresso/70 leading-relaxed">
              Push kode ke GitHub lalu sambungkan ke Vercel.com (gratis & aktif 24 jam).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-espresso/20 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-espresso">
              <span className="w-5 h-5 rounded-full bg-espresso text-vanilla flex items-center justify-center text-[10px]">
                3
              </span>
              <span>Pasang di Link Bio</span>
            </div>
            <p className="text-espresso/70 leading-relaxed">
              Taruh domain di bio TikTok/IG kamu dan sebutkan <em>&ldquo;Link no. [XX] di bio&rdquo;</em> di video konten!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
