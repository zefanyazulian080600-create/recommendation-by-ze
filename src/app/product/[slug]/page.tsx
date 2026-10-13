import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Clock,
  ArrowRight,
  Layers,
  Ruler,
} from "lucide-react";
import { MediaGallery } from "@/components/product/MediaGallery";
import { MarketplaceButton } from "@/components/product/MarketplaceButton";
import { WishlistButton } from "@/components/product/WishlistButton";
import { ShareButton } from "@/components/product/ShareButton";
import { AskBestieButton } from "@/components/product/AskBestieButton";
import { MobileStickyCheckoutBar } from "@/components/product/MobileStickyCheckoutBar";
import { ProductCard } from "@/components/product/ProductCard";
import { ZeCuratorReview } from "@/components/product/ZeCuratorReview";
import {
  getProductBySlug,
  getRelatedProducts,
  getProducts,
} from "@/lib/data/store";
import { formatRupiah, calculateDiscount, getMarketplaceMeta } from "@/lib/utils";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan",
    };
  }

  const coverMedia = product.media.find((m) => m.is_cover) || product.media[0];
  const imageUrl = coverMedia?.public_url || "";

  return {
    title: product.seo_title || `${product.name} • Recommendation by Ze`,
    description: product.seo_description || product.short_description,
    openGraph: {
      title: product.name,
      description: product.short_description,
      images: imageUrl ? [{ url: imageUrl, alt: product.name }] : [],
    },
  };
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const products = await getProducts({});
  return products.slice(0, 24).map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(product, 4);
  const discount = calculateDiscount(product.original_price, product.price);
  const marketplaceMeta = getMarketplaceMeta(product.marketplace);

  return (
    <div className="min-h-screen bg-[#090A0F] text-white py-8 md:py-14 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-zinc-500 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-white transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-white transition-colors">
            Katalog
          </Link>
          {product.category && (
            <>
              <span>/</span>
              <Link
                href={`/products?category=${product.category.slug}`}
                className="hover:text-white transition-colors"
              >
                {product.category.name}
              </Link>
            </>
          )}
          <span>/</span>
          <span className="text-zinc-300 font-medium truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>

        {/* Main Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Media Gallery (6 cols on lg, only sticky on desktop) */}
          <div className="lg:col-span-6 lg:sticky lg:top-24">
            <MediaGallery media={product.media} productName={product.name} />
          </div>

          {/* Right: Product Info & Actions (6 cols on lg) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Badges & Meta */}
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2">
                {product.spill_number && (
                  <span
                    title={`Nomor Spill TikTok/IG: #${product.spill_number}`}
                    className="px-3 py-1 rounded-xl bg-white/10 text-white font-mono text-xs font-bold tracking-wider shadow-sm border border-white/20 flex items-center gap-1.5"
                  >
                    <span className="text-emerald-400 font-mono">№</span>
                    <span>KODE BIO #{String(product.spill_number).padStart(2, "0")}</span>
                  </span>
                )}
                <span
                  className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${marketplaceMeta.badgeBg} text-white shadow-sm`}
                >
                  Tersedia di {marketplaceMeta.name}
                </span>
                {product.badge_label && (
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                    {product.badge_label}
                  </span>
                )}
                {discount && (
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-black text-xs font-mono font-bold shadow-md">
                    Hemat {discount}%
                  </span>
                )}
              </div>

              {/* Real-time social proof & urgency badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>⚡ <strong>32 orang</strong> lagi kepoin rekomendasi ini hari ini</span>
              </div>
            </div>

            {/* Product Title */}
            <h1 className="font-sans text-2xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
              {product.name}
            </h1>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              {product.short_description}
            </p>

            {/* Price Box */}
            <div className="p-6 rounded-2xl bg-[#12131A] border border-white/10 shadow-2xl space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                Harga Rekomendasi
              </span>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-white">
                  {formatRupiah(product.price)}
                </span>
                {product.original_price && product.original_price > product.price && (
                  <span className="text-base font-mono text-zinc-500 line-through">
                    {formatRupiah(product.original_price)}
                  </span>
                )}
              </div>
              <div className="pt-1 flex items-center gap-1.5 text-xs text-zinc-400">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {product.price_note ||
                    "Harga saat terakhir diperiksa. Dapat berubah sewaktu-waktu sesuai promo toko."}
                </span>
              </div>
            </div>

            {/* Primary Action Button (Outbound Affiliate) & Social Share */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <MarketplaceButton
                  productId={product.id}
                  marketplace={product.marketplace}
                  affiliateUrl={product.affiliate_url}
                  size="lg"
                  className="flex-1 py-4 text-base font-bold shadow-lg hover:brightness-110 active:scale-95"
                />
                <WishlistButton product={product} size="lg" />
                <ShareButton title={product.name} />
              </div>
              <AskBestieButton product={product} className="w-full" />
              <p className="text-[11px] text-center text-zinc-500">
                Transaksi aman & pembayaran langsung di aplikasi {marketplaceMeta.name}. Ze hanya mengurasi official atau seller terpercaya.
              </p>
            </div>

            {/* Variants if present */}
            {product.variants && product.variants.length > 0 && (
              <div className="p-5 rounded-2xl bg-[#12131A] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>Pilihan Varian & Warna</span>
                </div>
                <div className="space-y-3">
                  {product.variants.map((v, i) => (
                    <div key={i} className="space-y-1.5">
                      <span className="text-xs text-zinc-400">{v.name}:</span>
                      <div className="flex flex-wrap gap-2">
                        {v.options.map((opt, optIdx) => (
                          <span
                            key={optIdx}
                            className="px-3 py-1 rounded-lg bg-[#090A0F] text-xs text-zinc-200 font-medium border border-white/10"
                          >
                            {opt}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Size / Dimensions Note if present */}
            {product.size_notes && (
              <div className="p-5 rounded-2xl bg-[#12131A] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white">
                  <Ruler className="w-4 h-4 text-emerald-400" />
                  <span>Panduan Ukuran & Dimensi</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {product.size_notes}
                </p>
              </div>
            )}

            {/* Full Editorial Description & Curator Review */}
            <ZeCuratorReview product={product} />

            {/* Tags Chips */}
            {product.tags && product.tags.length > 0 && (
              <div className="pt-2 flex flex-wrap gap-1.5">
                {product.tags.map((tag, i) => (
                  <Link
                    key={i}
                    href={`/products?search=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 rounded-lg bg-[#12131A] text-[11px] text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}

            {/* Affiliate transparency badge */}
            <div className="p-4 rounded-xl bg-[#12131A] border border-white/10 flex items-start gap-3 text-xs text-zinc-400">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <p>
                <strong className="text-white">Catatan Belanja:</strong> Tautan di atas diarahkan ke official atau star
                seller terverifikasi di {marketplaceMeta.name}. Ze dapat memperoleh komisi affiliate
                tanpa biaya tambahan bagi kamu.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="pt-10 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  Rekomendasi Terkait
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
                  Kamu Mungkin Juga Suka
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white transition-colors group"
              >
                <span>Lihat Katalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Floating Bottom Sticky Checkout Bar for Mobile Screens */}
      <MobileStickyCheckoutBar product={product} />
    </div>
  );
}
