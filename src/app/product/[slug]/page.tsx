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
import { ProductCard } from "@/components/product/ProductCard";
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

export async function generateStaticParams() {
  const products = await getProducts({});
  return products.map((p) => ({ slug: p.slug }));
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
    <div className="py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-charcoal-50 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-charcoal transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-charcoal transition-colors">
            Katalog
          </Link>
          {product.category && (
            <>
              <span>/</span>
              <Link
                href={`/products?category=${product.category.slug}`}
                className="hover:text-charcoal transition-colors"
              >
                {product.category.name}
              </Link>
            </>
          )}
          <span>/</span>
          <span className="text-charcoal font-medium truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>

        {/* Main Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Media Gallery (6 cols on lg) */}
          <div className="lg:col-span-6 sticky top-24">
            <MediaGallery media={product.media} productName={product.name} />
          </div>

          {/* Right: Product Info & Actions (6 cols on lg) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Badges & Meta */}
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${marketplaceMeta.badgeBg} text-white shadow-sm`}
              >
                Tersedia di {marketplaceMeta.name}
              </span>
              {product.badge_label && (
                <span className="px-3 py-1 rounded-full bg-blush-200 text-charcoal text-xs font-semibold shadow-sm">
                  {product.badge_label}
                </span>
              )}
              {discount && (
                <span className="px-2.5 py-1 rounded-full bg-rose text-white text-xs font-bold shadow-sm">
                  Hemat {discount}%
                </span>
              )}
            </div>

            {/* Product Title */}
            <h1 className="font-editorial text-2xl sm:text-4xl font-medium text-charcoal leading-tight">
              {product.name}
            </h1>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-charcoal-200 leading-relaxed font-normal">
              {product.short_description}
            </p>

            {/* Price Box */}
            <div className="p-5 rounded-2xl bg-white border border-softgray-border/80 shadow-soft space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-50">
                Harga Rekomendasi
              </span>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-charcoal">
                  {formatRupiah(product.price)}
                </span>
                {product.original_price && product.original_price > product.price && (
                  <span className="text-base text-charcoal-50 line-through">
                    {formatRupiah(product.original_price)}
                  </span>
                )}
              </div>
              <div className="pt-1 flex items-center gap-1.5 text-xs text-charcoal-50">
                <Clock className="w-3.5 h-3.5 text-rose" />
                <span>
                  {product.price_note ||
                    "Harga saat terakhir diperiksa. Dapat berubah sewaktu-waktu sesuai promo toko."}
                </span>
              </div>
            </div>

            {/* Primary Action Button (Outbound Affiliate) */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <MarketplaceButton
                  productId={product.id}
                  marketplace={product.marketplace}
                  affiliateUrl={product.affiliate_url}
                  size="lg"
                  className="flex-1 py-4 text-base shadow-md hover:shadow-lg"
                />
                <WishlistButton product={product} size="lg" />
                <ShareButton title={product.name} />
              </div>
              <p className="text-[11px] text-center text-charcoal-50">
                Transaksi aman & pembayaran langsung di aplikasi {marketplaceMeta.name}.
              </p>
            </div>

            {/* Variants if present */}
            {product.variants && product.variants.length > 0 && (
              <div className="p-5 rounded-2xl bg-white border border-softgray-border space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal">
                  <Layers className="w-4 h-4 text-rose" />
                  <span>Pilihan Varian & Warna</span>
                </div>
                <div className="space-y-3">
                  {product.variants.map((v, i) => (
                    <div key={i} className="space-y-1.5">
                      <span className="text-xs text-charcoal-50">{v.name}:</span>
                      <div className="flex flex-wrap gap-2">
                        {v.options.map((opt, optIdx) => (
                          <span
                            key={optIdx}
                            className="px-3 py-1 rounded-full bg-softgray text-xs text-charcoal font-medium border border-softgray-border"
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
              <div className="p-5 rounded-2xl bg-white border border-softgray-border space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal">
                  <Ruler className="w-4 h-4 text-rose" />
                  <span>Panduan Ukuran & Dimensi</span>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-200 leading-relaxed">
                  {product.size_notes}
                </p>
              </div>
            )}

            {/* Full Editorial Description */}
            <div className="pt-4 space-y-3 border-t border-softgray">
              <h3 className="font-editorial text-lg font-semibold text-charcoal">
                Ulasan & Catatan Kurasi Ze
              </h3>
              <div className="text-xs sm:text-sm text-charcoal-200 leading-relaxed whitespace-pre-line">
                {product.description}
              </div>
            </div>

            {/* Tags Chips */}
            {product.tags && product.tags.length > 0 && (
              <div className="pt-2 flex flex-wrap gap-1.5">
                {product.tags.map((tag, i) => (
                  <Link
                    key={i}
                    href={`/products?search=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 rounded-full bg-white text-[11px] text-charcoal-100 hover:text-rose border border-softgray-border hover:border-rose transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}

            {/* Affiliate transparency badge */}
            <div className="p-4 rounded-2xl bg-blush-50 border border-blush-200 flex items-start gap-3 text-xs text-charcoal-200">
              <ShieldCheck className="w-5 h-5 text-rose flex-shrink-0 mt-0.5" />
              <p>
                <strong>Catatan Belanja:</strong> Tautan di atas diarahkan ke official atau star
                seller terverifikasi di {marketplaceMeta.name}. Ze dapat memperoleh komisi affiliate
                tanpa biaya tambahan bagi kamu.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="pt-10 border-t border-softgray">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose">
                  Rekomendasi Terkait
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-medium text-charcoal mt-1">
                  Kamu Mungkin Juga Suka
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-charcoal hover:text-rose transition-colors group"
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
    </div>
  );
}
