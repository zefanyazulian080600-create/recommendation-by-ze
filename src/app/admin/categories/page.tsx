"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Plus, Edit, Trash2, FolderTree, Check, X } from "lucide-react";
import { Category } from "@/types";
import { getCategories } from "@/lib/data/store";
import { slugify } from "@/lib/utils";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Form modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [desc, setDesc] = useState("");
  const [cover, setCover] = useState("");

  const loadData = async () => {
    setIsLoading(true);
    const data = await getCategories();
    setCategories(data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleNameChange = (val: string) => {
    setName(val);
    setSlug(slugify(val));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newCat: Category = {
      id: `cat-${Date.now()}`,
      name: name.trim(),
      slug: slug.trim() || slugify(name),
      description: desc.trim(),
      cover_image:
        cover.trim() ||
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
      sort_order: categories.length + 1,
      is_active: true,
      product_count: 0,
    };

    setCategories([...categories, newCat]);
    setIsModalOpen(false);
    setName("");
    setSlug("");
    setDesc("");
    setCover("");
  };

  const handleDelete = (id: string) => {
    if (confirm("Hapus kategori ini?")) {
      setCategories(categories.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
            Taksonomi
          </span>
          <h1 className="font-editorial text-2xl sm:text-4xl font-semibold text-white tracking-tight">
            Kelola Kategori
          </h1>
          <p className="text-xs sm:text-sm text-white/50 mt-1">
            Kategori membagi katalog menjadi bagian yang terstruktur di seluruh website.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-xs sm:text-sm font-bold hover:bg-emerald-400 hover:text-black transition-all shadow-md self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Kategori</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((c) => (
          <div
            key={c.id}
            className="p-5 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl flex flex-col justify-between space-y-4 hover:border-white/20 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-white/5 overflow-hidden relative flex-shrink-0 border border-white/10">
                {c.cover_image && (
                  <Image
                    src={c.cover_image}
                    alt={c.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                )}
              </div>
              <div>
                <h3 className="font-editorial text-base font-semibold text-white">
                  {c.name}
                </h3>
                <span className="text-[10px] text-white/40 block font-mono">/{c.slug}</span>
                <span className="text-[11px] font-mono font-medium text-emerald-400 mt-1 block">
                  {c.product_count || 0} produk aktif
                </span>
              </div>
            </div>

            {c.description && (
              <p className="text-xs text-white/60 line-clamp-2">{c.description}</p>
            )}

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
                Aktif
              </span>
              <button
                type="button"
                onClick={() => handleDelete(c.id)}
                className="text-red-400 hover:text-red-300 p-1 hover:bg-red-500/10 rounded-lg transition-colors"
                title="Hapus"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <form
            onSubmit={handleSave}
            className="bg-[#12131A] rounded-2xl p-6 max-w-md w-full space-y-4 shadow-2xl border border-white/15 text-white"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="font-editorial text-lg font-bold text-white">
                Tambah Kategori Baru
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-white/40 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="font-mono uppercase text-[11px] font-bold text-white/80">Nama Kategori</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  placeholder="misal: Aksesoris & Perhiasan"
                  className="w-full px-3 py-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono uppercase text-[11px] font-bold text-white/80">Slug URL</label>
                <input
                  type="text"
                  required
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50 font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono uppercase text-[11px] font-bold text-white/80">Deskripsi Singkat</label>
                <input
                  type="text"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Koleksi perhiasan dan aksesoris harian..."
                  className="w-full px-3 py-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono uppercase text-[11px] font-bold text-white/80">URL Gambar Cover</label>
                <input
                  type="url"
                  value={cover}
                  onChange={(e) => setCover(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3 py-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-2.5 rounded-full border border-white/15 text-xs font-semibold text-white/70 hover:bg-white/10"
              >
                Batal
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-emerald-400 hover:text-black transition-colors"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
