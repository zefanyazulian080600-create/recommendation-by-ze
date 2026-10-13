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
        "https://down-id.img.susercontent.com/file/id-11134207-7rbke-ma7vs1c79of1c0",
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
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
            Editorial Lookbooks
          </span>
          <h1 className="font-editorial text-2xl sm:text-4xl font-semibold text-white tracking-tight">
            Kelola Koleksi Tematik
          </h1>
          <p className="text-xs sm:text-sm text-white/50 mt-1">
            Grup tematik yang menghubungkan berbagai rekomendasi produk ke dalam satu tema editorial.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-xs sm:text-sm font-bold hover:bg-emerald-400 hover:text-black transition-all shadow-md self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Koleksi</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((col) => (
          <div
            key={col.id}
            className="p-5 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl flex flex-col justify-between space-y-4 hover:border-white/20 transition-all"
          >
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-white/5 border border-white/10">
              <Image src={col.cover_image} alt={col.title} fill className="object-cover" />
              {col.badge_text && (
                <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold text-white border border-white/10 shadow-sm">
                  {col.badge_text}
                </span>
              )}
            </div>

            <div className="space-y-1">
              <h3 className="font-editorial text-lg font-semibold text-white">{col.title}</h3>
              <p className="text-xs text-white/50 line-clamp-2">{col.description}</p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                Published
              </span>
              <button
                type="button"
                onClick={() => handleDelete(col.id)}
                className="text-red-400 hover:text-red-300 p-1 hover:bg-red-500/10 rounded-lg transition-colors"
                title="Hapus"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <form
            onSubmit={handleSave}
            className="bg-[#12131A] rounded-2xl p-6 max-w-md w-full space-y-4 shadow-2xl border border-white/15 text-white"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="font-editorial text-lg font-bold text-white">
                Tambah Koleksi Tematik
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
                <label className="font-mono uppercase text-[11px] font-bold text-white/80">Judul Koleksi</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="misal: Campus Aesthetic Essentials"
                  className="w-full px-3 py-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono uppercase text-[11px] font-bold text-white/80">Badge Text</label>
                <input
                  type="text"
                  value={badge}
                  onChange={(e) => setBadge(e.target.value)}
                  placeholder="Editorial Curation / Budget Pick"
                  className="w-full px-3 py-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono uppercase text-[11px] font-bold text-white/80">Deskripsi</label>
                <textarea
                  rows={3}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Deskripsi tema dan kurasi koleksi ini..."
                  className="w-full px-3 py-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono uppercase text-[11px] font-bold text-white/80">URL Gambar Banner</label>
                <input
                  type="url"
                  value={cover}
                  onChange={(e) => setCover(e.target.value)}
                  placeholder="https://down-id.img.susercontent.com/file/..."
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
