import React from "react";
import Link from "next/link";
import { BarChart3, TrendingUp, ShieldCheck, ArrowRight, MousePointerClick } from "lucide-react";
import { getAnalyticsSummary } from "@/lib/data/store";
import { getVisitorAnalytics } from "@/lib/data/visitor-store";
import { formatRupiah, getMarketplaceMeta } from "@/lib/utils";
import { VisitorAnalyticsView } from "@/components/admin/VisitorAnalyticsView";

export default async function AdminAnalyticsPage() {
  const [analytics, visitorAnalytics] = await Promise.all([
    getAnalyticsSummary(),
    getVisitorAnalytics(),
  ]);

  return (
    <div className="space-y-8">
      {/* 1. Live Visitor & Location Tracker Component */}
      <VisitorAnalyticsView initialAnalytics={visitorAnalytics} />

      {/* 2. Outbound Affiliate Clicks Performance Section */}
      <div className="space-y-4 pt-4 border-t border-white/10">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
            Performa Konversi
          </span>
          <h2 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight">
            Analitik Klik Outbound Shopee & Marketplace
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Total {analytics.totalClicks}x klik keluar menuju Shopee, Tokopedia, dan TikTok Shop dari pengunjung website.
          </p>
        </div>

        {/* Top Products Table */}
        <div className="p-6 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl space-y-4">
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
            <strong className="text-white">Catatan Analitik:</strong> Data lokasi pengunjung dan klik outbound dicatat secara real-time untuk memberikan gambaran akurat sebaran kota dan minat pembeli potensial di website rekomendasi Ze.
          </p>
        </div>
      </div>
    </div>
  );
}
