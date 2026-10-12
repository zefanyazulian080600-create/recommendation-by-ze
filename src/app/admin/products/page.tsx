"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PlusCircle,
  Search,
  Filter,
  Edit,
  Trash2,
  Copy,
  ExternalLink,
  CheckCircle2,
  FileEdit,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
import { Product, Category, Marketplace } from "@/types";
import { formatRupiah, getMarketplaceMeta } from "@/lib/utils";
import {
  getProducts,
  getCategories,
  deleteProduct,
  updateProduct,
  createProduct,
} from "@/lib/data/store";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMarketplace, setSelectedMarketplace] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Delete modal state
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    const [prods, cats] = await Promise.all([
      getProducts({}, true),
      getCategories(),
    ]);
    setProducts(prods);
    setCategories(cats);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async () => {
    if (!productToDelete) return;
    setIsDeleting(true);
    await deleteProduct(productToDelete.id);
    setProductToDelete(null);
    setIsDeleting(false);
    loadData();
  };

  const handleToggleStatus = async (product: Product) => {
    const nextStatus = product.status === "published" ? "draft" : "published";
    await updateProduct(product.id, { status: nextStatus });
    loadData();
  };

  const handleToggleFeatured = async (product: Product) => {
    await updateProduct(product.id, { is_featured: !product.is_featured });
    loadData();
  };

  const handleDuplicate = async (product: Product) => {
    const { id, created_at, updated_at, click_count, ...rest } = product;
    await createProduct({
      ...rest,
      name: `${product.name} (Copy)`,
      slug: `${product.slug}-copy-${Date.now().toString().slice(-4)}`,
      status: "draft",
    });
    loadData();
  };

  // Filter products locally for instant response
  const filteredProducts = products.filter((p) => {
    if (search.trim()) {
      const term = search.toLowerCase();
      const match =
        p.name.toLowerCase().includes(term) ||
        p.slug.toLowerCase().includes(term) ||
        p.tags.some((t) => t.toLowerCase().includes(term));
      if (!match) return false;
    }
    if (selectedCategory && p.category_id !== selectedCategory) {
      return false;
    }
    if (selectedMarketplace && p.marketplace !== selectedMarketplace) {
      return false;
    }
    if (selectedStatus && p.status !== selectedStatus) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
            Katalog Produk
          </span>
          <h1 className="font-editorial text-2xl sm:text-4xl font-semibold text-white tracking-tight">
            Kelola Rekomendasi
          </h1>
          <p className="text-xs sm:text-sm text-white/50 mt-1">
            Total {products.length} produk terdaftar dalam katalog kurasi.
          </p>
        </div>

        <Link
          href="/admin/products/new"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-xs sm:text-sm font-bold hover:bg-emerald-400 hover:text-black transition-all shadow-md self-start sm:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Tambah Produk Baru</span>
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama, tag, atau slug..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50"
          />
          <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {/* Category Select */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="py-2.5 px-3 rounded-xl bg-[#090A0F] border border-white/10 text-xs text-white focus:outline-none focus:border-emerald-500/50"
          >
            <option value="">Semua Kategori</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id} className="bg-[#12131A] text-white">
                {c.name}
              </option>
            ))}
          </select>

          {/* Marketplace Select */}
          <select
            value={selectedMarketplace}
            onChange={(e) => setSelectedMarketplace(e.target.value)}
            className="py-2.5 px-3 rounded-xl bg-[#090A0F] border border-white/10 text-xs text-white focus:outline-none focus:border-emerald-500/50"
          >
            <option value="">Semua Marketplace</option>
            <option value="shopee" className="bg-[#12131A] text-white">Shopee</option>
            <option value="tokopedia" className="bg-[#12131A] text-white">Tokopedia</option>
            <option value="tiktok" className="bg-[#12131A] text-white">TikTok Shop</option>
            <option value="lazada" className="bg-[#12131A] text-white">Lazada</option>
          </select>

          {/* Status Select */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="py-2.5 px-3 rounded-xl bg-[#090A0F] border border-white/10 text-xs text-white focus:outline-none focus:border-emerald-500/50"
          >
            <option value="">Semua Status</option>
            <option value="published" className="bg-[#12131A] text-white">Published</option>
            <option value="draft" className="bg-[#12131A] text-white">Draft</option>
          </select>
        </div>
      </div>

      {/* Product List Table */}
      <div className="bg-[#12131A] rounded-2xl border border-white/10 shadow-xl overflow-hidden">
        {isLoading ? (
          <div className="p-12 text-center text-xs text-white/50">
            <div className="w-6 h-6 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
            <span>Memuat daftar produk...</span>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="p-12 text-center text-xs text-white/50 space-y-2">
            <p>Tidak ada produk yang sesuai dengan filter.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-[#090A0F] border-b border-white/10 text-white/50 font-mono uppercase tracking-wider text-[11px]">
                  <th className="py-3.5 pl-6">Produk</th>
                  <th className="py-3.5 px-3">Kategori</th>
                  <th className="py-3.5 px-3">Marketplace</th>
                  <th className="py-3.5 px-3">Harga</th>
                  <th className="py-3.5 px-3">Status</th>
                  <th className="py-3.5 px-3">Ze&apos;s Pick</th>
                  <th className="py-3.5 pr-6 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredProducts.map((p) => {
                  const mpMeta = getMarketplaceMeta(p.marketplace);
                  const cover = p.media.find((m) => m.is_cover) || p.media[0];
                  const categoryName = categories.find((c) => c.id === p.category_id)?.name || "-";

                  return (
                    <tr key={p.id} className="hover:bg-white/[0.03] transition-colors">
                      {/* Product Thumbnail + Title */}
                      <td className="py-3.5 pl-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-white/5 overflow-hidden relative flex-shrink-0 border border-white/10">
                            {cover ? (
                              <Image
                                src={cover.thumbnail_url || cover.public_url}
                                alt={p.name}
                                fill
                                sizes="48px"
                                className="object-cover"
                              />
                            ) : null}
                          </div>
                          <div className="space-y-0.5 max-w-xs">
                            <Link
                              href={`/admin/products/${p.id}/edit`}
                              className="font-semibold text-white hover:text-emerald-400 transition-colors line-clamp-1"
                            >
                              {p.name}
                            </Link>
                            <span className="text-[10px] text-white/40 block truncate font-mono">
                              /{p.slug}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="py-3.5 px-3 text-white/70">{categoryName}</td>

                      {/* Marketplace */}
                      <td className="py-3.5 px-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${mpMeta.badgeBg} text-white`}>
                          {mpMeta.name}
                        </span>
                      </td>

                      {/* Price */}
                      <td className="py-3.5 px-3 font-semibold text-white font-mono">
                        {formatRupiah(p.price)}
                      </td>

                      {/* Status Toggle Button */}
                      <td className="py-3.5 px-3">
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(p)}
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all border ${
                            p.status === "published"
                              ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/25"
                              : "bg-amber-500/15 text-amber-400 border-amber-500/30 hover:bg-amber-500/25"
                          }`}
                        >
                          {p.status === "published" ? "Published" : "Draft"}
                        </button>
                      </td>

                      {/* Featured Toggle */}
                      <td className="py-3.5 px-3">
                        <button
                          type="button"
                          onClick={() => handleToggleFeatured(p)}
                          className={`p-1.5 rounded-lg transition-colors ${
                            p.is_featured
                              ? "text-emerald-400 bg-emerald-500/20"
                              : "text-white/30 hover:bg-white/10"
                          }`}
                          title="Toggle Featured"
                        >
                          <Sparkles className="w-4 h-4" />
                        </button>
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 pr-6 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <Link
                            href={`/product/${p.slug}`}
                            target="_blank"
                            className="p-1.5 text-white/40 hover:text-white rounded-lg hover:bg-white/10"
                            title="Preview publik"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleDuplicate(p)}
                            className="p-1.5 text-white/40 hover:text-white rounded-lg hover:bg-white/10"
                            title="Duplikasi produk"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                          <Link
                            href={`/admin/products/${p.id}/edit`}
                            className="p-1.5 text-white/40 hover:text-emerald-400 rounded-lg hover:bg-white/10"
                            title="Edit produk"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            type="button"
                            onClick={() => setProductToDelete(p)}
                            className="p-1.5 text-red-400 hover:text-red-300 rounded-lg hover:bg-red-500/10"
                            title="Hapus produk"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {productToDelete && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#12131A] rounded-2xl p-6 max-w-sm w-full space-y-4 shadow-2xl border border-white/15">
            <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mx-auto border border-red-500/20">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="text-center space-y-1">
              <h3 className="font-editorial text-lg font-bold text-white">
                Konfirmasi Hapus Produk
              </h3>
              <p className="text-xs text-white/60">
                Apakah kamu yakin ingin menghapus <strong className="text-white">&quot;{productToDelete.name}&quot;</strong>?
                Tindakan ini akan menghapus produk dari katalog publik.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setProductToDelete(null)}
                className="flex-1 py-2.5 rounded-full border border-white/15 text-xs font-semibold text-white/70 hover:bg-white/10"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleDelete}
                disabled={isDeleting}
                className="flex-1 py-2.5 rounded-full bg-red-600 text-white text-xs font-semibold hover:bg-red-500 disabled:opacity-50"
              >
                {isDeleting ? "Menghapus..." : "Ya, Hapus"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
