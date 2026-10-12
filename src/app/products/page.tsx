import React, { Suspense } from "react";
import { Metadata } from "next";
import { FilterSidebar } from "@/components/product/FilterSidebar";
import { ProductCard } from "@/components/product/ProductCard";
import { RetroCatalogHeader } from "@/components/product/RetroCatalogHeader";
import { MobileFilterButton } from "./MobileFilterButton";
import { getCategories, getProducts } from "@/lib/data/store";
import { ProductFilterParams } from "@/types";

export const metadata: Metadata = {
  title: "Katalog Lengkap Rekomendasi Online Shop",
  description:
    "Eksplorasi seluruh kurasi outfit, skincare, aesthetic room, dan gadget online shop pilihan Ze.",
};

interface ProductsPageProps {
  searchParams: Promise<{
    category?: string;
    marketplace?: string;
    search?: string;
    gender?: string;
    sort?: string;
    price?: string;
  }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const categories = await getCategories();

  let minPrice: number | undefined;
  let maxPrice: number | undefined;

  if (params.price === "under-50k") {
    maxPrice = 50000;
  } else if (params.price === "50k-100k") {
    minPrice = 50000;
    maxPrice = 100000;
  } else if (params.price === "100k-250k") {
    minPrice = 100000;
    maxPrice = 250000;
  } else if (params.price === "above-250k") {
    minPrice = 250000;
  }

  const filterParams: ProductFilterParams = {
    category: params.category,
    marketplace: params.marketplace,
    search: params.search,
    gender: params.gender,
    minPrice,
    maxPrice,
    sort: (params.sort as any) || "newest",
  };

  const products = await getProducts(filterParams);

  // Active category display name
  const activeCategoryObj = categories.find(
    (c) => c.slug.toLowerCase() === params.category?.toLowerCase()
  );

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb / Title */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-matcha-600">
                Katalog Rekomendasi
              </span>
              <h1 className="font-editorial text-2xl sm:text-4xl font-medium text-espresso">
                {activeCategoryObj
                  ? activeCategoryObj.name
                  : params.gender === "men"
                  ? "Koleksi & Outfit Cowok 🛹"
                  : params.gender === "women"
                  ? "Koleksi & Outfit Cewek 👗"
                  : params.gender === "unisex"
                  ? "Koleksi Unisex & Streetwear 🧢"
                  : params.marketplace
                  ? `Koleksi ${params.marketplace.toUpperCase()}`
                  : params.search
                  ? `Hasil Pencarian "${params.search}"`
                  : "Semua Rekomendasi Online Shop"}
              </h1>
            </div>

            {/* Mobile Filter Trigger Button */}
            <Suspense fallback={null}>
              <MobileFilterButton categories={categories} />
            </Suspense>
          </div>

          <p className="text-xs sm:text-sm text-charcoal-50">
            Menampilkan <strong className="text-charcoal">{products.length}</strong> produk pilihan
            {params.search ? ` untuk kata kunci "${params.search}"` : ""}.
          </p>
        </div>

        {/* Quick Gender Pill Tabs & Bio Spill Search (Retro Style) */}
        <Suspense fallback={null}>
          <RetroCatalogHeader
            currentGender={params.gender}
            currentSearch={params.search}
            totalProducts={products.length}
          />
        </Suspense>

        {/* Layout: Sidebar + Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block">
            <Suspense fallback={<div className="w-64 h-96 bg-white/50 rounded-3xl" />}>
              <FilterSidebar categories={categories} />
            </Suspense>
          </div>

          {/* Product Grid Area */}
          <div className="flex-1 w-full">
            {products.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-3xl border border-softgray-border space-y-4">
                <div className="w-16 h-16 rounded-full bg-blush-100 text-rose flex items-center justify-center mx-auto text-2xl">
                  🔍
                </div>
                <h3 className="font-editorial text-xl font-semibold text-charcoal">
                  Tidak Ada Produk Yang Cocok
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-50 max-w-sm mx-auto">
                  Coba ubah kata kunci pencarian atau sesuaikan filter marketplace dan kategori yang
                  kamu pilih.
                </p>
                <div className="pt-2">
                  <a
                    href="/products"
                    className="inline-block px-5 py-2.5 rounded-full bg-charcoal text-white text-xs font-semibold hover:bg-rose transition-colors"
                  >
                    Reset Semua Filter
                  </a>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
