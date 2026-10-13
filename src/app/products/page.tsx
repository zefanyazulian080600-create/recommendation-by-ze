import React, { Suspense } from "react";
import { Metadata } from "next";
import { FilterSidebar } from "@/components/product/FilterSidebar";
import { ProductCatalogGrid } from "@/components/product/ProductCatalogGrid";
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

function toCardProduct(p: Product): Product {
  return {
    id: p.id,
    name: p.name,
    slug: p.slug,
    short_description: p.short_description || "",
    description: "",
    category_id: p.category_id,
    tags: p.tags?.slice(0, 3) || [],
    marketplace: p.marketplace,
    affiliate_url: p.affiliate_url,
    price: p.price,
    original_price: p.original_price,
    price_note: p.price_note,
    is_featured: p.is_featured,
    is_trending: p.is_trending,
    badge_label: p.badge_label,
    spill_number: p.spill_number,
    gender: p.gender,
    status: p.status,
    sort_order: p.sort_order,
    click_count: p.click_count,
    created_at: p.created_at,
    updated_at: p.updated_at,
    media: p.media?.slice(0, 1) || [],
  };
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
    subCategory: params.subCategory || params.sub,
    marketplace: params.marketplace,
    search: params.search,
    gender: params.gender,
    minPrice,
    maxPrice,
    sort: (params.sort as any) || "newest",
  };

  const rawProducts = await getProducts(filterParams);
  const products = rawProducts.map(toCardProduct);

  const activeSubSlug = (params.subCategory || params.sub)?.toLowerCase();
  let activeSubObj: any = null;
  for (const c of categories) {
    const found = c.subcategories?.find((s) => s.slug === activeSubSlug || s.id === activeSubSlug);
    if (found) {
      activeSubObj = found;
      break;
    }
  }

  // Active category display name
  const activeCategoryObj = categories.find(
    (c) => c.slug.toLowerCase() === params.category?.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-[#090A0F] text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb / Title */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                {activeSubObj ? `Sub-Kategori Terkurasi` : `Katalog Rekomendasi`}
              </span>
              <h1 className="font-sans text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                {activeSubObj
                  ? `${activeSubObj.icon ? activeSubObj.icon + ' ' : ''}${activeSubObj.name}`
                  : activeCategoryObj
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

          <p className="text-xs sm:text-sm text-zinc-400">
            Menampilkan <strong className="text-white font-mono">{products.length}</strong> produk pilihan
            {params.search ? ` untuk kata kunci "${params.search}"` : ""}.
          </p>
        </div>

        {/* Quick Gender Pill Tabs & Bio Spill Search */}
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
            <Suspense fallback={<div className="w-64 h-96 bg-[#12131A] rounded-2xl border border-white/10" />}>
              <FilterSidebar categories={categories} />
            </Suspense>
          </div>

          {/* Product Grid Area with Snappy Pagination */}
          <div className="flex-1 w-full">
            <ProductCatalogGrid products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}
