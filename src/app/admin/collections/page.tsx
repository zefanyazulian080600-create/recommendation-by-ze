"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Plus, Trash2, Sparkles, X } from "lucide-react";
import { Collection } from "@/types";
import { getCollections } from "@/lib/data/store";
import { slugify } from "@/lib/utils";

export default function AdminCollectionsPage() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [desc, setDesc] = useState("");
  const [badge, setBadge] = useState("Editorial Curation");
  const [cover, setCover] = useState("");

  useEffect(() => {
    getCollections().then(setCollections);
  }, []);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    setSlug(slugify(val));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newCol: Collection = {
      id: `col-${Date.now()}`,
      title: title.trim(),
      slug: slug.trim() || slugify(title),
      description: desc.trim(),
      badge_text: badge.trim(),
      cover_image:
        cover.trim() ||
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900&auto=format&fit=crop",
      is_published: true,
      sort_order: collections.length + 1,
    };

    setCollections([...collections, newCol]);
    setIsModalOpen(false);
    setTitle("");
    setSlug("");
    setDesc("");
    setBadge("Editorial Curation");
    setCover("");
  };

  const handleDelete = (id: string) => {
    if (confirm("Hapus koleksi ini?")) {
      setCollections(collections.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-rose">
            Editorial Lookbooks
          </span>
          <h1 className="font-editorial text-2xl sm:text-4xl font-medium text-charcoal">
            Kelola Koleksi Tematik
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-50 mt-1">
            Grup tematik yang menghubungkan berbagai rekomendasi produk ke dalam satu tema editorial.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-charcoal text-white text-xs sm:text-sm font-semibold hover:bg-rose transition-colors shadow-md self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Koleksi</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((col) => (
          <div
            key={col.id}
            className="p-5 rounded-3xl bg-white border border-softgray-border shadow-card flex flex-col justify-between space-y-4"
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-softgray">
              <Image src={col.cover_image} alt={col.title} fill className="object-cover" />
              {col.badge_text && (
                <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-white/90 text-[10px] font-bold text-charcoal shadow-sm">
                  {col.badge_text}
                </span>
              )}
            </div>

            <div className="space-y-1">
              <h3 className="font-editorial text-lg font-semibold text-charcoal">{col.title}</h3>
              <p className="text-xs text-charcoal-50 line-clamp-2">{col.description}</p>
            </div>

            <div className="pt-3 border-t border-softgray flex items-center justify-between text-xs">
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                Published
              </span>
              <button
                type="button"
                onClick={() => handleDelete(col.id)}
                className="text-red-500 hover:text-red-700 p-1"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal/50 backdrop-blur-sm flex items-center justify-center p-4">
          <form
            onSubmit={handleSave}
            className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 shadow-xl border border-softgray-border"
          >
            <div className="flex items-center justify-between pb-3 border-b border-softgray">
              <h3 className="font-editorial text-lg font-semibold text-charcoal">
                Tambah Koleksi Tematik
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-charcoal-50 hover:text-charcoal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-charcoal">Judul Koleksi</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="misal: Campus Aesthetic Essentials"
                  className="w-full px-3 py-2 rounded-xl bg-ivory-50 border border-softgray-border"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-charcoal">Badge Text</label>
                <input
                  type="text"
                  value={badge}
                  onChange={(e) => setBadge(e.target.value)}
                  placeholder="Editorial Curation / Budget Pick"
                  className="w-full px-3 py-2 rounded-xl bg-ivory-50 border border-softgray-border"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-charcoal">Deskripsi</label>
                <textarea
                  rows={3}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Deskripsi tema dan kurasi koleksi ini..."
                  className="w-full px-3 py-2 rounded-xl bg-ivory-50 border border-softgray-border"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-charcoal">URL Gambar Banner</label>
                <input
                  type="url"
                  value={cover}
                  onChange={(e) => setCover(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full px-3 py-2 rounded-xl bg-ivory-50 border border-softgray-border"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-2.5 rounded-full border border-softgray-border text-xs font-semibold text-charcoal hover:bg-softgray"
              >
                Batal
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-full bg-charcoal text-white text-xs font-semibold hover:bg-rose"
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
