import React from "react";
import Link from "next/link";
import {
  Package,
  CheckCircle2,
  FileEdit,
  Sparkles,
  FolderTree,
  MousePointerClick,
  PlusCircle,
  ExternalLink,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { getAnalyticsSummary, getCategories, getProducts } from "@/lib/data/store";
import { formatRupiah, getMarketplaceMeta } from "@/lib/utils";

export default async function AdminDashboardPage() {
  const analytics = await getAnalyticsSummary();
  const allProducts = await getProducts({}, true);

  const stats = [
    {
      label: "Total Produk",
      value: analytics.totalProducts,
      icon: Package,
      color: "bg-charcoal text-white",
    },
    {
      label: "Published (Aktif)",
      value: analytics.publishedProducts,
      icon: CheckCircle2,
      color: "bg-emerald-600 text-white",
    },
    {
      label: "Draft",
      value: analytics.draftProducts,
      icon: FileEdit,
      color: "bg-amber-500 text-white",
    },
    {
      label: "Ze's Pick (Featured)",
      value: analytics.featuredProducts,
      icon: Sparkles,
      color: "bg-rose text-white",
    },
    {
      label: "Total Kategori",
      value: analytics.totalCategories,
      icon: FolderTree,
      color: "bg-indigo-600 text-white",
    },
    {
      label: "Total Klik Outbound",
      value: analytics.totalClicks,
      icon: MousePointerClick,
      color: "bg-purple-600 text-white",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-rose">
            Overview CMS
          </span>
          <h1 className="font-editorial text-2xl sm:text-4xl font-medium text-charcoal">
            Dashboard Manajemen
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-50 mt-1">
            Pantau status katalog rekomendasi, klik affiliate, dan kelola konten secara real-time.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/products/new"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-charcoal text-white text-xs sm:text-sm font-semibold hover:bg-rose transition-colors shadow-sm"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Tambah Produk</span>
          </Link>
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-softgray-border bg-white text-xs sm:text-sm font-semibold text-charcoal hover:bg-softgray transition-colors shadow-sm"
          >
            <ExternalLink className="w-3.5 h-3.5 text-rose" />
            <span>Preview Toko</span>
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-softgray-border shadow-card space-y-2 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-charcoal-50 line-clamp-1">
                  {s.label}
                </span>
                <div className={`w-7 h-7 rounded-lg ${s.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-charcoal font-editorial">
                {s.value}
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/admin/products/new"
          className="p-5 rounded-2xl bg-white border border-softgray-border hover:border-rose shadow-card transition-all group flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-blush-200 text-rose flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <PlusCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-editorial text-base font-semibold text-charcoal group-hover:text-rose transition-colors">
              Tambah Rekomendasi Baru
            </h3>
            <p className="text-xs text-charcoal-50 mt-1">
              Unggah foto/video produk, pasang tautan affiliate, dan tentukan kategori.
            </p>
          </div>
        </Link>

        <Link
          href="/admin/categories"
          className="p-5 rounded-2xl bg-white border border-softgray-border hover:border-rose shadow-card transition-all group flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-blush-200 text-rose flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <FolderTree className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-editorial text-base font-semibold text-charcoal group-hover:text-rose transition-colors">
              Kelola Kategori
            </h3>
            <p className="text-xs text-charcoal-50 mt-1">
              Atur kategori outfit, skincare, dekorasi kamar, atau buat kategori baru.
            </p>
          </div>
        </Link>

        <Link
          href="/admin/settings"
          className="p-5 rounded-2xl bg-white border border-softgray-border hover:border-rose shadow-card transition-all group flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-blush-200 text-rose flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-editorial text-base font-semibold text-charcoal group-hover:text-rose transition-colors">
              Pengaturan Teks & Banner
            </h3>
            <p className="text-xs text-charcoal-50 mt-1">
              Ganti pengumuman atas, teks headline hero, dan tautan sosial media brand.
            </p>
          </div>
        </Link>
      </div>

      {/* Top Clicked Products Table */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-rose" />
              <h2 className="font-editorial text-lg sm:text-xl font-semibold text-charcoal">
                Produk Dengan Minat & Klik Tertinggi
              </h2>
            </div>
            <p className="text-xs text-charcoal-50 mt-0.5">
              Data akumulasi klik pengunjung ke marketplace rujukan.
            </p>
          </div>

          <Link
            href="/admin/products"
            className="text-xs font-semibold text-rose hover:underline flex items-center gap-1"
          >
            <span>Semua Produk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-softgray text-charcoal-50 font-semibold uppercase tracking-wider">
                <th className="pb-3 pl-1">Nama Produk</th>
                <th className="pb-3">Marketplace</th>
                <th className="pb-3">Harga</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 text-right pr-1">Total Klik</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-softgray">
              {analytics.topProducts.map((p) => {
                const mpMeta = getMarketplaceMeta(p.marketplace);
                return (
                  <tr key={p.id} className="hover:bg-ivory-50/50 transition-colors">
                    <td className="py-3.5 pl-1 font-medium text-charcoal">
                      <Link
                        href={`/admin/products/${p.id}/edit`}
                        className="hover:text-rose hover:underline block truncate max-w-xs"
                      >
                        {p.name}
                      </Link>
                    </td>
                    <td className="py-3.5">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${mpMeta.badgeBg} text-white`}>
                        {mpMeta.name}
                      </span>
                    </td>
                    <td className="py-3.5 font-semibold text-charcoal">
                      {formatRupiah(p.price)}
                    </td>
                    <td className="py-3.5">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                          p.status === "published"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td className="py-3.5 text-right pr-1 font-bold text-rose text-sm">
                      {p.click_count}x
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
