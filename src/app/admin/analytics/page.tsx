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
        <span className="text-xs font-bold uppercase tracking-wider text-rose">
          Metrik & Performa
        </span>
        <h1 className="font-editorial text-2xl sm:text-4xl font-medium text-charcoal">
          Analitik Klik Outbound
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-50 mt-1">
          Pantau produk dan marketplace yang paling banyak memicu rasa penasaran pengunjung.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-softgray-border shadow-card space-y-1">
          <span className="text-[11px] font-semibold text-charcoal-50">Total Klik Keluar</span>
          <div className="text-3xl font-bold font-editorial text-charcoal">
            {analytics.totalClicks}
          </div>
          <p className="text-[10px] text-charcoal-50">Menuju Shopee, Tokopedia, Lazada, & TikTok</p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-softgray-border shadow-card space-y-1">
          <span className="text-[11px] font-semibold text-charcoal-50">Produk Terpopuler</span>
          <div className="text-base font-bold text-rose truncate">
            {analytics.topProducts[0]?.name || "-"}
          </div>
          <p className="text-[10px] text-charcoal-50">
            {analytics.topProducts[0]?.click_count || 0}x klik tercatat
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-softgray-border shadow-card space-y-1">
          <span className="text-[11px] font-semibold text-charcoal-50">Status Katalog</span>
          <div className="text-base font-bold text-charcoal">
            {analytics.publishedProducts} Terbit / {analytics.draftProducts} Draft
          </div>
          <p className="text-[10px] text-charcoal-50">Siap dieksplorasi pembeli</p>
        </div>
      </div>

      {/* Table */}
      <div className="p-6 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-4">
        <h2 className="font-editorial text-lg font-semibold text-charcoal">
          Daftar Minat Produk Berdasarkan Klik
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-softgray text-charcoal-50 font-semibold uppercase tracking-wider">
                <th className="pb-3 pl-1">Produk</th>
                <th className="pb-3">Marketplace</th>
                <th className="pb-3">Harga</th>
                <th className="pb-3 text-right pr-1">Total Klik</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-softgray">
              {analytics.topProducts.map((p) => {
                const mpMeta = getMarketplaceMeta(p.marketplace);
                return (
                  <tr key={p.id} className="hover:bg-ivory-50/50 transition-colors">
                    <td className="py-3 pl-1 font-medium text-charcoal">
                      <Link
                        href={`/admin/products/${p.id}/edit`}
                        className="hover:text-rose hover:underline"
                      >
                        {p.name}
                      </Link>
                    </td>
                    <td className="py-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${mpMeta.badgeBg} text-white`}>
                        {mpMeta.name}
                      </span>
                    </td>
                    <td className="py-3 font-semibold text-charcoal">
                      {formatRupiah(p.price)}
                    </td>
                    <td className="py-3 text-right pr-1 font-bold text-rose text-sm">
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
      <div className="p-4 rounded-2xl bg-ivory-100 border border-softgray-border flex items-start gap-3 text-xs text-charcoal-200">
        <ShieldCheck className="w-5 h-5 text-rose flex-shrink-0 mt-0.5" />
        <p>
          <strong>Catatan Analitik:</strong> Angka klik di atas merupakan indikator aktivitas minat
          pengunjung yang membuka tautan marketplace, bukan konfirmasi transaksi pembelian atau
          nominal komisi yang diterima.
        </p>
      </div>
    </div>
  );
}
