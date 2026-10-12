import React from "react";
import Link from "next/link";
import { BarChart3, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";
import { getAnalyticsSummary } from "@/lib/data/store";
import { formatRupiah, getMarketplaceMeta } from "@/lib/utils";

export default async function AdminAnalyticsPage() {
  const analytics = await getAnalyticsSummary();

  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
          Metrik & Performa
        </span>
        <h1 className="font-editorial text-2xl sm:text-4xl font-semibold text-white tracking-tight">
          Analitik Klik Outbound
        </h1>
        <p className="text-xs sm:text-sm text-white/50 mt-1">
          Pantau produk dan marketplace yang paling banyak memicu rasa penasaran pengunjung.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl space-y-1">
          <span className="text-[11px] font-mono font-semibold text-white/50">Total Klik Keluar</span>
          <div className="text-3xl font-bold font-editorial text-white">
            {analytics.totalClicks}
          </div>
          <p className="text-[10px] text-white/40">Menuju Shopee, Tokopedia, Lazada, & TikTok</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl space-y-1">
          <span className="text-[11px] font-mono font-semibold text-white/50">Produk Terpopuler</span>
          <div className="text-base font-bold text-emerald-400 truncate">
            {analytics.topProducts[0]?.name || "-"}
          </div>
          <p className="text-[10px] text-white/40 font-mono">
            {analytics.topProducts[0]?.click_count || 0}x klik tercatat
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl space-y-1">
          <span className="text-[11px] font-mono font-semibold text-white/50">Status Katalog</span>
          <div className="text-base font-bold text-white">
            {analytics.publishedProducts} Terbit / {analytics.draftProducts} Draft
          </div>
          <p className="text-[10px] text-white/40">Siap dieksplorasi pembeli</p>
        </div>
      </div>

      {/* Table */}
      <div className="p-6 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl space-y-4">
        <h2 className="font-editorial text-lg font-semibold text-white">
          Daftar Minat Produk Berdasarkan Klik
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 text-white/50 font-mono uppercase tracking-wider text-[11px]">
                <th className="pb-3 pl-1">Produk</th>
                <th className="pb-3">Marketplace</th>
                <th className="pb-3">Harga</th>
                <th className="pb-3 text-right pr-1">Total Klik</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {analytics.topProducts.map((p) => {
                const mpMeta = getMarketplaceMeta(p.marketplace);
                return (
                  <tr key={p.id} className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-3 pl-1 font-medium text-white">
                      <Link
                        href={`/admin/products/${p.id}/edit`}
                        className="hover:text-emerald-400 hover:underline"
                      >
                        {p.name}
                      </Link>
                    </td>
                    <td className="py-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${mpMeta.badgeBg} text-white`}>
                        {mpMeta.name}
                      </span>
                    </td>
                    <td className="py-3 font-semibold text-white font-mono">
                      {formatRupiah(p.price)}
                    </td>
                    <td className="py-3 text-right pr-1 font-bold text-emerald-400 text-sm font-mono">
                      {p.click_count}x
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Transparency Note */}
      <div className="p-4 rounded-2xl bg-[#090A0F] border border-white/10 flex items-start gap-3 text-xs text-white/60">
        <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
        <p>
          <strong className="text-white">Catatan Analitik:</strong> Angka klik di atas merupakan indikator aktivitas minat
          pengunjung yang membuka tautan marketplace, bukan konfirmasi transaksi pembelian atau
          nominal komisi yang diterima.
        </p>
      </div>
    </div>
  );
}
