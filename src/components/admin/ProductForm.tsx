"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Upload,
  Image as ImageIcon,
  Video,
  X,
  Plus,
  Check,
  Sparkles,
  ArrowLeft,
  ExternalLink,
  Eye,
  AlertCircle,
  Zap,
  Layers,
  ShoppingBag,
  FileText,
  Sliders,
  ChevronRight,
  EyeOff,
  Wand2,
} from "lucide-react";
import {
  Product,
  Category,
  Marketplace,
  ProductStatus,
  ProductMedia,
  ProductVariant,
} from "@/types";
import { slugify, formatRupiah, isValidAffiliateUrl } from "@/lib/utils";
import { createProduct, updateProduct, getCategories } from "@/lib/data/store";
import { ProductCard } from "@/components/product/ProductCard";
import { AiFormAssistant } from "@/components/admin/AiFormAssistant";
import {
  generateShortHook,
  generateFullReview,
  generateViralTagsList,
  generateSizeAdvice,
} from "@/lib/ai/local-copywriter";

interface ProductFormProps {
  initialProduct?: Product;
  isEdit?: boolean;
}

export function ProductForm({ initialProduct, isEdit = false }: ProductFormProps) {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Mode View: Quick (simple 4 fields) vs Detailed (3 structured tabs)
  const [formMode, setFormMode] = useState<"quick" | "detailed">(isEdit ? "detailed" : "quick");
  const [detailedTab, setDetailedTab] = useState<"info" | "content" | "settings">("info");
  const [showLivePreview, setShowLivePreview] = useState(false);

  // Form Fields
  const [name, setName] = useState(initialProduct?.name || "");
  const [slug, setSlug] = useState(initialProduct?.slug || "");
  const [isSlugManual, setIsSlugManual] = useState(Boolean(initialProduct?.slug));
  const [shortDesc, setShortDesc] = useState(initialProduct?.short_description || "");
  const [desc, setDesc] = useState(initialProduct?.description || "");
  const [categoryId, setCategoryId] = useState(initialProduct?.category_id || "");
  const [tagsInput, setTagsInput] = useState(initialProduct?.tags.join(", ") || "");
  const [marketplace, setMarketplace] = useState<Marketplace>(
    initialProduct?.marketplace || "shopee"
  );
  const [gender, setGender] = useState<"all" | "men" | "women" | "unisex">(
    initialProduct?.gender || "unisex"
  );
  const [affiliateUrl, setAffiliateUrl] = useState(initialProduct?.affiliate_url || "");
  const [price, setPrice] = useState<number | "">(initialProduct?.price ?? 99000);
  const [originalPrice, setOriginalPrice] = useState<number | "">(
    initialProduct?.original_price ?? ""
  );
  const [priceNote, setPriceNote] = useState(
    initialProduct?.price_note || "Harga saat promo toko online shop"
  );
  const [sizeNotes, setSizeNotes] = useState(initialProduct?.size_notes || "");
  const [badgeLabel, setBadgeLabel] = useState(initialProduct?.badge_label || "Ze's Pick");
  const [isFeatured, setIsFeatured] = useState(initialProduct?.is_featured ?? true);
  const [isTrending, setIsTrending] = useState(initialProduct?.is_trending ?? false);
  const [status, setStatus] = useState<ProductStatus>(initialProduct?.status || "published");
  const [sortOrder, setSortOrder] = useState<number>(initialProduct?.sort_order ?? 0);
  const [seoTitle, setSeoTitle] = useState(initialProduct?.seo_title || "");
  const [seoDesc, setSeoDesc] = useState(initialProduct?.seo_description || "");

  // Variants state
  const [variants, setVariants] = useState<ProductVariant[]>(
    initialProduct?.variants || [{ name: "Pilihan", options: ["Default"] }]
  );

  // Media state
  const [mediaList, setMediaList] = useState<ProductMedia[]>(
    initialProduct?.media || [
      {
        id: "media-default",
        media_type: "image",
        public_url:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop",
        alt_text: "Cover produk",
        is_cover: true,
        sort_order: 1,
      },
    ]
  );

  const [newMediaUrl, setNewMediaUrl] = useState("");
  const [newMediaType, setNewMediaType] = useState<"image" | "video">("image");

  useEffect(() => {
    getCategories().then((cats) => {
      setCategories(cats);
      if (!categoryId && cats.length > 0) {
        setCategoryId(cats[0].id);
      }
    });
  }, [categoryId]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setName(val);
    if (!isSlugManual) {
      setSlug(slugify(val));
    }
    if (!seoTitle) {
      setSeoTitle(`${val} • Recommendation by Ze`);
    }
  };

  // Check if there is an AI draft passed from AI Studio
  useEffect(() => {
    if (typeof window !== "undefined" && !initialProduct) {
      const savedDraft = sessionStorage.getItem("ze_ai_pending_draft");
      if (savedDraft) {
        try {
          const parsed = JSON.parse(savedDraft);
          handleApplyAiDraft(parsed);
          sessionStorage.removeItem("ze_ai_pending_draft");
        } catch (e) {
          console.error("Failed to parse pending draft", e);
        }
      }
    }
  }, [initialProduct]);

  // AI Draft Auto-fill Handler
  const handleApplyAiDraft = (draft: any) => {
    if (draft.name) {
      setName(draft.name);
      if (!isSlugManual) {
        setSlug(draft.slug || slugify(draft.name));
      }
    }
    if (draft.shortDescription) setShortDesc(draft.shortDescription);
    if (draft.description) setDesc(draft.description);
    if (draft.categoryId) setCategoryId(draft.categoryId);
    if (draft.tags) {
      setTagsInput(Array.isArray(draft.tags) ? draft.tags.join(", ") : draft.tags);
    }
    if (draft.price) setPrice(draft.price);
    if (draft.originalPrice) setOriginalPrice(draft.originalPrice);
    if (draft.priceNote) setPriceNote(draft.priceNote);
    if (draft.sizeNotes) setSizeNotes(draft.sizeNotes);
    if (draft.badgeLabel) setBadgeLabel(draft.badgeLabel);
    if (draft.seoTitle) setSeoTitle(draft.seoTitle);
    if (draft.seoDescription) setSeoDesc(draft.seoDescription);
    if (draft.suggestedVariants) setVariants(draft.suggestedVariants);

    if (draft.suggestedImageUrl) {
      const isDefaultOnly =
        mediaList.length === 1 &&
        mediaList[0].public_url.includes("photo-1515886657613");

      const newMedia: ProductMedia = {
        id: `media-ai-${Date.now()}`,
        media_type: "image",
        public_url: draft.suggestedImageUrl,
        alt_text: draft.name || "Foto produk",
        is_cover: true,
        sort_order: 1,
      };

      if (isDefaultOnly || mediaList.length === 0) {
        setMediaList([newMedia]);
      } else {
        setMediaList([newMedia, ...mediaList.map((m) => ({ ...m, is_cover: false }))]);
      }
    }
  };

  // File upload simulation
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const isVid = file.type.startsWith("video/");
      const reader = new FileReader();

      reader.onload = (loadEvent) => {
        const resultUrl = loadEvent.target?.result as string;
        if (resultUrl) {
          const newMedia: ProductMedia = {
            id: `media-${Date.now()}-${i}`,
            media_type: isVid ? "video" : "image",
            public_url: resultUrl,
            alt_text: file.name,
            is_cover: mediaList.length === 0,
            sort_order: mediaList.length + 1,
          };
          setMediaList((prev) => [...prev, newMedia]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddMediaUrl = () => {
    if (!newMediaUrl.trim()) return;
    const newMedia: ProductMedia = {
      id: `media-${Date.now()}`,
      media_type: newMediaType,
      public_url: newMediaUrl.trim(),
      alt_text: name || "Media produk",
      is_cover: mediaList.length === 0,
      sort_order: mediaList.length + 1,
    };
    setMediaList([...mediaList, newMedia]);
    setNewMediaUrl("");
  };

  const handleSetCover = (id: string) => {
    setMediaList((prev) =>
      prev.map((m) => ({
        ...m,
        is_cover: m.id === id,
      }))
    );
  };

  const handleDeleteMedia = (id: string) => {
    setMediaList((prev) => prev.filter((m) => m.id !== id));
  };

  // Preview dummy product for live card render
  const previewCategory = categories.find((c) => c.id === categoryId);
  const previewProduct: Product = {
    id: initialProduct?.id || "preview-id",
    name: name || "Judul Rekomendasi Produk Ol Shop",
    slug: slug || "judul-rekomendasi-produk",
    short_description: shortDesc || "Deskripsi singkat tampilan produk...",
    description: desc || "Deskripsi lengkap...",
    category_id: categoryId,
    category: previewCategory,
    tags: tagsInput ? tagsInput.split(",").map((t) => t.trim()) : [],
    marketplace,
    affiliate_url: affiliateUrl || "https://shopee.co.id",
    price: Number(price) || 0,
    original_price: originalPrice ? Number(originalPrice) : undefined,
    price_note: priceNote,
    badge_label: badgeLabel,
    gender,
    is_featured: isFeatured,
    is_trending: isTrending,
    status,
    sort_order: sortOrder,
    click_count: initialProduct?.click_count || 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    media: mediaList,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!name.trim()) {
      setErrorMsg("Nama produk wajib diisi.");
      return;
    }
    if (!affiliateUrl.trim()) {
      setErrorMsg("Tautan affiliate marketplace wajib diisi.");
      return;
    }
    if (!isValidAffiliateUrl(affiliateUrl.trim())) {
      setErrorMsg("Tautan affiliate harus diawali dengan https:// atau http:// yang valid.");
      return;
    }
    if (price === "" || Number(price) < 0) {
      setErrorMsg("Harga produk harus bernilai angka valid.");
      return;
    }

    setIsSubmitting(true);

    // If submitted in Quick Mode and secondary fields are empty, auto-generate them!
    const effectiveSlug = slug.trim() || slugify(name);
    const effectiveShortDesc =
      shortDesc.trim() || generateShortHook(name, "skena");
    const effectiveDesc =
      desc.trim() || generateFullReview(name, categoryId, "skena");
    const effectiveTags =
      tagsInput.trim()
        ? tagsInput.split(",").map((t) => t.trim()).filter(Boolean)
        : generateViralTagsList(name, categoryId, "skena");
    const effectiveSizeNotes =
      sizeNotes.trim() || generateSizeAdvice(categoryId);

    const payload = {
      name: name.trim(),
      slug: effectiveSlug,
      short_description: effectiveShortDesc,
      description: effectiveDesc,
      category_id: categoryId,
      gender,
      tags: effectiveTags,
      marketplace,
      affiliate_url: affiliateUrl.trim(),
      price: Number(price),
      original_price: originalPrice ? Number(originalPrice) : undefined,
      price_note: priceNote.trim(),
      variants,
      size_notes: effectiveSizeNotes,
      is_featured: isFeatured,
      is_trending: isTrending,
      badge_label: badgeLabel.trim() || "Ze's Pick",
      status,
      sort_order: Number(sortOrder) || 0,
      seo_title: seoTitle.trim() || `${name} • Recommendation by Ze`,
      seo_description: seoDesc.trim() || effectiveShortDesc,
      media: mediaList,
    };

    try {
      if (isEdit && initialProduct) {
        await updateProduct(initialProduct.id, payload);
        setSuccessMsg("Produk berhasil diperbarui!");
      } else {
        await createProduct(payload);
        setSuccessMsg("Produk baru berhasil disimpan dan diterbitkan!");
      }
      setTimeout(() => {
        router.push("/admin/products");
      }, 1000);
    } catch (err: any) {
      setErrorMsg(err.message || "Gagal menyimpan data ke database.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-5xl mx-auto">
      {/* TOP HEADER & CONTROLS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-softgray-border">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/products"
            className="p-2.5 rounded-2xl border border-softgray-border bg-white text-charcoal hover:bg-softgray transition-colors"
            title="Kembali ke daftar produk"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose block">
              {isEdit ? "Mode Edit Rekomendasi" : "Form Kurasi Ze"}
            </span>
            <h1 className="font-editorial text-2xl sm:text-3xl font-bold text-charcoal">
              {isEdit ? `Edit: ${name || initialProduct?.name}` : "Tambah Produk Baru"}
            </h1>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          <button
            type="button"
            onClick={() => setShowLivePreview(!showLivePreview)}
            className={`px-3.5 py-2.5 rounded-2xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
              showLivePreview
                ? "bg-rose text-white border-rose shadow-sm"
                : "bg-white border-softgray-border text-charcoal hover:bg-softgray"
            }`}
          >
            {showLivePreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4 text-rose" />}
            <span>{showLivePreview ? "Tutup Preview" : "Lihat Preview"}</span>
          </button>

          <Link
            href="/admin/products"
            className="px-4 py-2.5 rounded-2xl border border-softgray-border bg-white text-xs font-semibold text-charcoal hover:bg-softgray"
          >
            Batal
          </Link>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2.5 rounded-2xl bg-charcoal hover:bg-rose text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all disabled:opacity-50 flex items-center gap-2"
          >
            <Check className="w-4 h-4" />
            <span>{isSubmitting ? "Menyimpan..." : isEdit ? "Simpan Perubahan" : "Terbitkan Produk 🚀"}</span>
          </button>
        </div>
      </div>

      {/* Alerts */}
      {errorMsg && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2 animate-fadeIn">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {successMsg && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2 animate-fadeIn">
          <Check className="w-4 h-4 flex-shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* MODE SELECTOR PILL: Quick Mode vs Detailed Mode */}
      <div className="p-1.5 bg-softgray rounded-2xl border border-softgray-border inline-flex items-center gap-1">
        <button
          type="button"
          onClick={() => setFormMode("quick")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            formMode === "quick"
              ? "bg-white text-charcoal shadow-sm border border-softgray-border/60"
              : "text-charcoal-50 hover:text-charcoal"
          }`}
        >
          <Zap className={`w-3.5 h-3.5 ${formMode === "quick" ? "text-amber-500" : ""}`} />
          <span>Mode Cepat (4 Kolom Utama)</span>
          <span className="px-1.5 py-0.2 rounded-md bg-amber-100 text-amber-800 text-[9px] font-black">
            Mudah
          </span>
        </button>

        <button
          type="button"
          onClick={() => setFormMode("detailed")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            formMode === "detailed"
              ? "bg-white text-charcoal shadow-sm border border-softgray-border/60"
              : "text-charcoal-50 hover:text-charcoal"
          }`}
        >
          <Layers className={`w-3.5 h-3.5 ${formMode === "detailed" ? "text-rose" : ""}`} />
          <span>Mode Lengkap (Atur Kata & Tag)</span>
        </button>
      </div>

      {/* LIVE PREVIEW DRAWER (When toggled) */}
      {showLivePreview && (
        <div className="p-5 rounded-3xl bg-ivory border-2 border-rose/30 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 animate-fadeIn">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose">
              <Eye className="w-4 h-4" />
              <span>Preview Tampilan Pengunjung Toko:</span>
            </div>
            <p className="text-xs text-charcoal-50">
              Beginilah produkmu akan terlihat di halaman katalog utama.
            </p>
          </div>
          <div className="w-full max-w-[280px]">
            <ProductCard product={previewProduct} />
          </div>
        </div>
      )}

      {/* AI ASSISTANT CO-PILOT CARD */}
      <AiFormAssistant
        onApplyProductDraft={handleApplyAiDraft}
        currentProductData={{
          name,
          price: Number(price) || 0,
          originalPrice: originalPrice ? Number(originalPrice) : undefined,
          shortDesc,
          badgeLabel,
          affiliateUrl,
        }}
      />

      {/* ========================================================================= */}
      {/* MODE 1: QUICK & SIMPLE MODE (HANYA 4 KOLOM UTAMA) */}
      {/* ========================================================================= */}
      {formMode === "quick" && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-6">
          <div className="border-b border-softgray pb-3">
            <h2 className="font-editorial text-xl font-bold text-charcoal">
              Pengisian Rekomendasi Cepat
            </h2>
            <p className="text-xs text-charcoal-50 mt-1">
              Cukup isi 4 kolom ini. Deskripsi, ulasan stylist, tags viral, dan panduan ukuran akan otomatis dilengkapi oleh AI!
            </p>
          </div>

          <div className="space-y-5">
            {/* 1. Nama Produk */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  1. Nama Produk <span className="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  onClick={() => {
                    if (!name.trim()) return;
                    const styles = [
                      `${name} (Skena Kalcer Approved)`,
                      `${name} - Minimalist Luxury Fit`,
                      `${name} (Smart Budget Alternative)`,
                      `Vintage Washed ${name} Unisex`,
                    ];
                    setName(styles[Math.floor(Math.random() * styles.length)]);
                  }}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose hover:underline"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>✨ Bikin Lebih Gaul</span>
                </button>
              </div>
              <input
                type="text"
                required
                value={name}
                onChange={handleNameChange}
                placeholder="misal: Oversized Soft Linen Shirt - Ivory"
                className="w-full px-4 py-3 rounded-2xl bg-ivory-50 border border-softgray-border text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-rose/30"
              />
            </div>

            {/* 2. Link Affiliate Shopee/TikTok */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                2. Tautan Affiliate Resmi <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                required
                value={affiliateUrl}
                onChange={(e) => setAffiliateUrl(e.target.value)}
                placeholder="https://shope.ee/... atau https://shop.tiktok.com/..."
                className="w-full px-4 py-3 rounded-2xl bg-ivory-50 border border-softgray-border text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-rose/30"
              />
              <span className="text-[10px] text-charcoal-50 block">
                Tautan per-produk yang langsung mengarahkan ke toko checkout affiliate.
              </span>
            </div>

            {/* 3. Harga & Kategori & Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  3. Harga Saat Ini (IDR) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  min="0"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="99000"
                  className="w-full px-4 py-3 rounded-2xl bg-ivory-50 border border-softgray-border text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-rose/30 font-semibold"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  Kategori Produk <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="w-full px-3 py-3 rounded-2xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  Target Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value as any)}
                  className="w-full px-3 py-3 rounded-2xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal"
                >
                  <option value="unisex">Unisex (Semua)</option>
                  <option value="men">Pria / Cowok</option>
                  <option value="women">Wanita / Cewek</option>
                  <option value="all">Netral / All</option>
                </select>
              </div>
            </div>

            {/* 4. Foto Cover Produk */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-charcoal block">
                4. Foto Cover Produk
              </label>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <label className="cursor-pointer w-full sm:w-auto px-5 py-3 rounded-2xl bg-ivory-50 border-2 border-dashed border-softgray-border hover:border-rose text-center text-xs font-semibold text-charcoal transition-colors flex items-center justify-center gap-2">
                  <Upload className="w-4 h-4 text-rose" />
                  <span>Pilih dari HP / Laptop</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>

                <div className="flex-1 w-full flex items-center gap-2">
                  <input
                    type="url"
                    value={newMediaUrl}
                    onChange={(e) => setNewMediaUrl(e.target.value)}
                    placeholder="Atau tempel URL gambar..."
                    className="w-full px-4 py-2.5 rounded-2xl bg-ivory-50 border border-softgray-border text-xs text-charcoal"
                  />
                  <button
                    type="button"
                    onClick={handleAddMediaUrl}
                    className="px-4 py-2.5 rounded-2xl bg-charcoal text-white text-xs font-bold flex-shrink-0"
                  >
                    Tambah
                  </button>
                </div>
              </div>

              {/* Cover Preview Mini */}
              {mediaList.length > 0 && (
                <div className="flex items-center gap-3 pt-2">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-rose shadow-xs">
                    <Image
                      src={mediaList[0].public_url}
                      alt="Cover"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs text-charcoal-50">
                    Foto cover aktif siap diterbitkan.
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Quick Submit Card Footer */}
          <div className="pt-4 border-t border-softgray flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-[11px] text-charcoal-50">
              💡 Deskripsi, tags, dan panduan ukuran otomatis diatur dengan gaya kurasi Ze.
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-rose to-[#d95d46] hover:from-[#d95d46] hover:to-[#be4b37] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <span>{isSubmitting ? "Menerbitkan..." : "Terbitkan Produk Sekarang 🚀"}</span>
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 2: DETAILED MODE (TERSTRUKTUR 3 TAB RAPI) */}
      {/* ========================================================================= */}
      {formMode === "detailed" && (
        <div className="space-y-6">
          {/* Step Tabs Navigation */}
          <div className="flex border-b border-softgray-border gap-2 sm:gap-6 overflow-x-auto pb-1">
            <button
              type="button"
              onClick={() => setDetailedTab("info")}
              className={`pb-3 px-3 text-xs sm:text-sm font-bold transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
                detailedTab === "info"
                  ? "border-rose text-rose"
                  : "border-transparent text-charcoal-50 hover:text-charcoal"
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>1. Info & Affiliate Link</span>
            </button>

            <button
              type="button"
              onClick={() => setDetailedTab("content")}
              className={`pb-3 px-3 text-xs sm:text-sm font-bold transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
                detailedTab === "content"
                  ? "border-rose text-rose"
                  : "border-transparent text-charcoal-50 hover:text-charcoal"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>2. Ulasan & Copywriting AI</span>
            </button>

            <button
              type="button"
              onClick={() => setDetailedTab("settings")}
              className={`pb-3 px-3 text-xs sm:text-sm font-bold transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${
                detailedTab === "settings"
                  ? "border-rose text-rose"
                  : "border-transparent text-charcoal-50 hover:text-charcoal"
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>3. Visibilitas & Badge</span>
            </button>
          </div>

          {/* TAB 1: INFO & AFFILIATE */}
          {detailedTab === "info" && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-6">
              <h2 className="font-editorial text-lg font-bold text-charcoal">
                1. Informasi Dasar Produk & Link Toko
              </h2>

              <div className="space-y-4">
                {/* Nama Produk */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      Nama Produk <span className="text-red-500">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        if (!name.trim()) return;
                        const styles = [
                          `${name} (Skena Kalcer Approved)`,
                          `${name} - Minimalist Luxury Fit`,
                          `${name} (Smart Budget Alternative)`,
                          `Vintage Washed ${name} Unisex`,
                        ];
                        setName(styles[Math.floor(Math.random() * styles.length)]);
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose hover:underline"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>✨ AI Polish Nama</span>
                    </button>
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={handleNameChange}
                    placeholder="misal: Heavyweight Boxy Tee 24s"
                    className="w-full px-4 py-2.5 rounded-2xl bg-ivory-50 border border-softgray-border text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-rose/30"
                  />
                </div>

                {/* Slug */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-charcoal-50">
                      Slug URL (/product/...)
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsSlugManual(!isSlugManual)}
                      className="text-[10px] text-rose hover:underline"
                    >
                      {isSlugManual ? "Otomatisasi" : "Edit Manual"}
                    </button>
                  </div>
                  <input
                    type="text"
                    required
                    value={slug}
                    onChange={(e) => {
                      setIsSlugManual(true);
                      setSlug(slugify(e.target.value));
                    }}
                    className="w-full px-4 py-2 rounded-2xl bg-ivory-50 border border-softgray-border text-xs text-charcoal"
                  />
                </div>

                {/* Link & Marketplace */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                  <div className="sm:col-span-8 space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      Tautan Affiliate Resmi <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="url"
                      required
                      value={affiliateUrl}
                      onChange={(e) => setAffiliateUrl(e.target.value)}
                      placeholder="https://shope.ee/... atau https://shop.tiktok.com/..."
                      className="w-full px-4 py-2.5 rounded-2xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-rose/30"
                    />
                  </div>

                  <div className="sm:col-span-4 space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      Marketplace
                    </label>
                    <select
                      value={marketplace}
                      onChange={(e) => setMarketplace(e.target.value as Marketplace)}
                      className="w-full px-3 py-2.5 rounded-2xl bg-ivory-50 border border-softgray-border text-xs text-charcoal"
                    >
                      <option value="shopee">Shopee</option>
                      <option value="tiktok">TikTok Shop</option>
                      <option value="tokopedia">Tokopedia</option>
                      <option value="lazada">Lazada</option>
                    </select>
                  </div>
                </div>

                {/* Harga & Kategori */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      Harga Promo (IDR) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      required
                      value={price}
                      onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
                      placeholder="99000"
                      className="w-full px-4 py-2.5 rounded-2xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal font-semibold"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-charcoal-50">
                      Harga Asli / Coret (Opsional)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={originalPrice}
                      onChange={(e) =>
                        setOriginalPrice(e.target.value === "" ? "" : Number(e.target.value))
                      }
                      placeholder="149000"
                      className="w-full px-4 py-2.5 rounded-2xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      Kategori
                    </label>
                    <select
                      value={categoryId}
                      onChange={(e) => setCategoryId(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-2xl bg-ivory-50 border border-softgray-border text-xs text-charcoal"
                    >
                      {categories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Galeri Media */}
                <div className="space-y-3 pt-3 border-t border-softgray">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      Foto & Video Produk ({mediaList.length})
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-2">
                    <label className="cursor-pointer px-4 py-2 rounded-xl bg-ivory-50 border border-softgray-border hover:border-rose text-xs font-semibold text-charcoal flex items-center gap-2">
                      <Upload className="w-3.5 h-3.5 text-rose" />
                      <span>Upload File</span>
                      <input
                        type="file"
                        multiple
                        accept="image/*,video/mp4"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>

                    <input
                      type="url"
                      value={newMediaUrl}
                      onChange={(e) => setNewMediaUrl(e.target.value)}
                      placeholder="Atau tempel URL gambar online..."
                      className="flex-1 px-3 py-2 rounded-xl bg-ivory-50 border border-softgray-border text-xs text-charcoal"
                    />
                    <button
                      type="button"
                      onClick={handleAddMediaUrl}
                      className="px-4 py-2 rounded-xl bg-charcoal text-white text-xs font-semibold"
                    >
                      Tambah
                    </button>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-1">
                    {mediaList.map((m, idx) => (
                      <div
                        key={m.id || idx}
                        className={`relative aspect-square rounded-xl overflow-hidden border-2 group ${
                          m.is_cover ? "border-rose ring-2 ring-rose/20" : "border-softgray-border"
                        }`}
                      >
                        <Image
                          src={m.public_url}
                          alt="Media"
                          fill
                          className="object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => handleDeleteMedia(m.id)}
                          className="absolute top-1 right-1 p-1 rounded-full bg-red-600 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-3 h-3" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSetCover(m.id)}
                          className="absolute bottom-1 inset-x-1 py-0.5 rounded text-[9px] font-bold text-center bg-white/90 text-charcoal opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {m.is_cover ? "Cover" : "Set Cover"}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setDetailedTab("content")}
                  className="px-5 py-2.5 rounded-xl bg-charcoal text-white text-xs font-bold flex items-center gap-1.5"
                >
                  <span>Lanjut: Ulasan & Copywriting</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: COPYWRITING & CONTENT */}
          {detailedTab === "content" && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-6">
              <h2 className="font-editorial text-lg font-bold text-charcoal">
                2. Ulasan & Copywriting Editorial
              </h2>

              <div className="space-y-4">
                {/* Deskripsi Singkat */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      Deskripsi Singkat (Hook 1-2 Kalimat)
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        const hook = generateShortHook(name || "Item ini", "skena");
                        setShortDesc(hook);
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose hover:underline"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>✨ AI Bikin Hook</span>
                    </button>
                  </div>
                  <input
                    type="text"
                    value={shortDesc}
                    onChange={(e) => setShortDesc(e.target.value)}
                    placeholder="misal: Kaos boxy katun tebal 24s kerah rapat, auto naikin aura nongkrong di Blok M."
                    className="w-full px-4 py-2.5 rounded-2xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal"
                  />
                </div>

                {/* Deskripsi Lengkap */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      Ulasan Lengkap / Catatan Kurasi Ze
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        const rev = generateFullReview(name || "Item Kurasi", categoryId, "skena");
                        setDesc(rev);
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose hover:underline"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>✨ AI Tulis Ulasan Stylist</span>
                    </button>
                  </div>
                  <textarea
                    rows={6}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Tulis ulasan bahan, cara styling, kelebihan, tips mix & match..."
                    className="w-full px-4 py-2.5 rounded-2xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal leading-relaxed"
                  />
                </div>

                {/* Tags */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      Tags Viral (Pisahkan koma)
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        const tags = generateViralTagsList(name || "fashion", categoryId, "skena");
                        setTagsInput(tags.join(", "));
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose hover:underline"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>✨ AI Auto-Tags</span>
                    </button>
                  </div>
                  <input
                    type="text"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder="skena, kalcer, oversized, ootdindo, shopeehaul"
                    className="w-full px-4 py-2.5 rounded-2xl bg-ivory-50 border border-softgray-border text-xs text-charcoal"
                  />
                </div>

                {/* Catatan Ukuran */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      Panduan Ukuran (TB / BB)
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        const advice = generateSizeAdvice(categoryId);
                        setSizeNotes(advice);
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose hover:underline"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>✨ AI Saran TB/BB</span>
                    </button>
                  </div>
                  <input
                    type="text"
                    value={sizeNotes}
                    onChange={(e) => setSizeNotes(e.target.value)}
                    placeholder="Model TB 173cm BB 63kg pakai size L untuk look relaxed boxy."
                    className="w-full px-4 py-2.5 rounded-2xl bg-ivory-50 border border-softgray-border text-xs text-charcoal"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setDetailedTab("info")}
                  className="px-4 py-2 rounded-xl border border-softgray-border text-xs text-charcoal hover:bg-softgray"
                >
                  Kembali
                </button>
                <button
                  type="button"
                  onClick={() => setDetailedTab("settings")}
                  className="px-5 py-2.5 rounded-xl bg-charcoal text-white text-xs font-bold flex items-center gap-1.5"
                >
                  <span>Lanjut: Pengaturan & Badge</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: SETTINGS & VISIBILITY */}
          {detailedTab === "settings" && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-6">
              <h2 className="font-editorial text-lg font-bold text-charcoal">
                3. Visibilitas & Badge Editorial
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      Status Publikasi
                    </label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value as ProductStatus)}
                      className="w-full px-3 py-2.5 rounded-2xl bg-ivory-50 border border-softgray-border text-xs text-charcoal"
                    >
                      <option value="published">Published (Tampil di Toko)</option>
                      <option value="draft">Draft (Disembunyikan)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                      Badge Label Editorial
                    </label>
                    <input
                      type="text"
                      value={badgeLabel}
                      onChange={(e) => setBadgeLabel(e.target.value)}
                      placeholder="Ze's Pick / Skena Approved / Dupe Alert"
                      className="w-full px-4 py-2.5 rounded-2xl bg-ivory-50 border border-softgray-border text-xs text-charcoal"
                    />
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {[
                        "Ze's Pick",
                        "Skena Approved",
                        "Starboy Essential",
                        "Dupe Alert ⚡",
                        "Viral TikTok 🔥",
                        "Steal Deal",
                      ].map((chip) => (
                        <button
                          key={chip}
                          type="button"
                          onClick={() => setBadgeLabel(chip)}
                          className={`text-[10px] px-2 py-0.5 rounded-full border transition-colors ${
                            badgeLabel === chip
                              ? "bg-rose text-white border-rose"
                              : "bg-white text-charcoal border-softgray-border hover:bg-softgray"
                          }`}
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-charcoal">
                    <input
                      type="checkbox"
                      checked={isFeatured}
                      onChange={(e) => setIsFeatured(e.target.checked)}
                      className="w-4 h-4 text-rose rounded border-softgray-border focus:ring-rose"
                    />
                    <span>Tampilkan di Bagian Ze&apos;s Picks (Featured)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-charcoal">
                    <input
                      type="checkbox"
                      checked={isTrending}
                      onChange={(e) => setIsTrending(e.target.checked)}
                      className="w-4 h-4 text-rose rounded border-softgray-border focus:ring-rose"
                    />
                    <span>Tandai Sebagai Trending / Viral</span>
                  </label>
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center border-t border-softgray">
                <button
                  type="button"
                  onClick={() => setDetailedTab("content")}
                  className="px-4 py-2 rounded-xl border border-softgray-border text-xs text-charcoal hover:bg-softgray"
                >
                  Kembali
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-2xl bg-charcoal hover:bg-rose text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all disabled:opacity-50 flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>{isSubmitting ? "Menyimpan..." : isEdit ? "Perbarui Produk" : "Terbitkan Produk 🚀"}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </form>
  );
}
