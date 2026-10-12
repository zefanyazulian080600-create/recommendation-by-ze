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
  const [gender, setGender] = useState<"all" | "men" | "women" | "unisex">(
    initialProduct?.gender || "unisex"
  );
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

  // URL input helper for adding media quickly
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

  // File upload simulation & local preview (reader)
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
    if (!slug.trim()) {
      setErrorMsg("Slug URL wajib diisi.");
      return;
    }
    if (price === "" || Number(price) < 0) {
      setErrorMsg("Harga harus bernilai angka positif.");
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
    if (mediaList.length === 0) {
      setErrorMsg("Harap unggah minimal 1 foto atau video cover produk.");
      return;
    }

    setIsSubmitting(true);

    const tagsArray = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const payload = {
      name: name.trim(),
      slug: slug.trim(),
      short_description: shortDesc.trim(),
      description: desc.trim(),
      category_id: categoryId,
      gender,
      tags: tagsArray,
      marketplace,
      affiliate_url: affiliateUrl.trim(),
      price: Number(price),
      original_price: originalPrice ? Number(originalPrice) : undefined,
      price_note: priceNote.trim(),
      variants,
      size_notes: sizeNotes.trim(),
      is_featured: isFeatured,
      is_trending: isTrending,
      badge_label: badgeLabel.trim() || undefined,
      status,
      sort_order: Number(sortOrder) || 0,
      seo_title: seoTitle.trim(),
      seo_description: seoDesc.trim(),
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
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Top Bar Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-softgray-border">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/products"
            className="p-2 rounded-xl border border-softgray-border bg-white text-charcoal hover:bg-softgray transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose">
              {isEdit ? "Edit Rekomendasi" : "Form Tambah Rekomendasi"}
            </span>
            <h1 className="font-editorial text-2xl sm:text-3xl font-medium text-charcoal">
              {isEdit ? `Edit: ${name || initialProduct?.name}` : "Tambah Produk Baru"}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/products"
            className="px-4 py-2.5 rounded-full border border-softgray-border text-xs font-semibold text-charcoal hover:bg-softgray"
          >
            Batal
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2.5 rounded-full bg-charcoal text-white text-xs sm:text-sm font-semibold hover:bg-rose transition-all shadow-md disabled:opacity-50 flex items-center gap-2"
          >
            {isSubmitting ? "Menyimpan..." : isEdit ? "Perbarui Produk" : "Terbitkan Produk"}
          </button>
        </div>
      </div>

      {errorMsg && (
        <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {successMsg && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
          <Check className="w-4 h-4 flex-shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Main Grid: Left Form (8 cols), Right Live Card Preview (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: FORM FIELDS (8 cols on lg) */}
        <div className="lg:col-span-8 space-y-6">
          {/* AI Local Co-Pilot Generator */}
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

          {/* Card 1: Informasi Dasar */}
          <div className="p-6 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-4">
            <h2 className="font-editorial text-lg font-semibold text-charcoal">
              1. Informasi Utama Produk
            </h2>

            {/* Nama Produk */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-100">
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
                      `${name} - Boxy Streetwear Cut`,
                    ];
                    const chosen = styles[Math.floor(Math.random() * styles.length)];
                    setName(chosen);
                    if (!isSlugManual) setSlug(slugify(chosen));
                  }}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#F2765E] hover:underline"
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
                placeholder="misal: Oversized Soft Linen Shirt - Ivory Off-White"
                className="w-full px-4 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-rose/30 focus:border-rose"
              />
            </div>

            {/* Slug URL */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-100">
                  Slug URL <span className="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  onClick={() => setIsSlugManual(!isSlugManual)}
                  className="text-[10px] text-rose hover:underline"
                >
                  {isSlugManual ? "Otomatisasi Slug" : "Edit Manual"}
                </button>
              </div>
              <div className="flex items-center">
                <span className="px-3 py-2.5 rounded-l-xl bg-softgray border border-r-0 border-softgray-border text-[11px] text-charcoal-50">
                  /product/
                </span>
                <input
                  type="text"
                  required
                  value={slug}
                  onChange={(e) => {
                    setIsSlugManual(true);
                    setSlug(slugify(e.target.value));
                  }}
                  className="w-full px-3 py-2.5 rounded-r-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-rose/30"
                />
              </div>
            </div>

            {/* Kategori, Marketplace, & Target Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-100">
                  Kategori <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-rose/30"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-100">
                  Marketplace Asal <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={marketplace}
                  onChange={(e) => setMarketplace(e.target.value as Marketplace)}
                  className="w-full px-3 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-rose/30"
                >
                  <option value="shopee">Shopee</option>
                  <option value="tokopedia">Tokopedia</option>
                  <option value="tiktok">TikTok Shop</option>
                  <option value="lazada">Lazada</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-100">
                  Target Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value as any)}
                  className="w-full px-3 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-rose/30"
                >
                  <option value="unisex">Unisex (Semua)</option>
                  <option value="men">Pria / Cowok</option>
                  <option value="women">Wanita / Cewek</option>
                  <option value="all">Netral / All</option>
                </select>
              </div>
            </div>

            {/* Deskripsi Singkat */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-100">
                  Deskripsi Singkat (Ringkasan 1-2 Kalimat)
                </label>
                <button
                  type="button"
                  onClick={() => {
                    const hook = generateShortHook(name || "Item ini", "skena");
                    setShortDesc(hook);
                  }}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#F2765E] hover:underline"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>✨ AI Bikin Hook</span>
                </button>
              </div>
              <input
                type="text"
                value={shortDesc}
                onChange={(e) => setShortDesc(e.target.value)}
                placeholder="misal: Kemeja linen adem potongan santai oversized, cocok untuk outfit kuliah."
                className="w-full px-4 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-rose/30"
              />
            </div>

            {/* Deskripsi Lengkap */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-100">
                  Deskripsi Lengkap / Catatan Kurasi Ze
                </label>
                <button
                  type="button"
                  onClick={() => {
                    const rev = generateFullReview(name || "Item Kurasi Ze", categoryId, "skena");
                    setDesc(rev);
                  }}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#F2765E] hover:underline"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>✨ AI Tulis Ulasan Stylist</span>
                </button>
              </div>
              <textarea
                rows={6}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Tuliskan ulasan bahan, cara styling, kelebihan, atau tips pemakaian..."
                className="w-full px-4 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-rose/30"
              />
            </div>
          </div>

          {/* Card 2: Harga & Tautan Affiliate */}
          <div className="p-6 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-4">
            <h2 className="font-editorial text-lg font-semibold text-charcoal">
              2. Harga & Tautan Affiliate
            </h2>

            {/* Tautan Affiliate */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-100">
                Tautan Affiliate Resmi <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                required
                value={affiliateUrl}
                onChange={(e) => setAffiliateUrl(e.target.value)}
                placeholder="https://shope.ee/... atau https://tokopedia.link/... atau https://shop.tiktok.com/..."
                className="w-full px-4 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-rose/30"
              />
              <span className="text-[10px] text-charcoal-50 block">
                Harus diawali https://. Pastikan link langsung menuju produk di program affiliatemu.
              </span>
            </div>

            {/* Harga & Harga Asli */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-100">
                  Harga Saat Ini (IDR) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  min="0"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="99000"
                  className="w-full px-4 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-rose/30"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-100">
                  Harga Coret / Asli (Opsional)
                </label>
                <input
                  type="number"
                  min="0"
                  value={originalPrice}
                  onChange={(e) =>
                    setOriginalPrice(e.target.value === "" ? "" : Number(e.target.value))
                  }
                  placeholder="149000"
                  className="w-full px-4 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-rose/30"
                />
              </div>
            </div>

            {/* Catatan Harga */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-100">
                Catatan Harga
              </label>
              <input
                type="text"
                value={priceNote}
                onChange={(e) => setPriceNote(e.target.value)}
                placeholder="misal: Harga flash sale sewaktu-waktu bisa berubah"
                className="w-full px-4 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-rose/30"
              />
            </div>
          </div>

          {/* Card 3: Media & Video Upload */}
          <div className="p-6 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="font-editorial text-lg font-semibold text-charcoal">
                3. Galeri Foto & Video
              </h2>
              <span className="text-[11px] text-charcoal-50">
                {mediaList.length} media tersimpan
              </span>
            </div>

            {/* Device File Upload Picker */}
            <div className="p-6 border-2 border-dashed border-softgray-border rounded-2xl text-center bg-ivory-50/50 hover:bg-blush-50/40 transition-colors">
              <label className="cursor-pointer block space-y-2">
                <div className="w-12 h-12 rounded-full bg-blush-200 text-rose flex items-center justify-center mx-auto">
                  <Upload className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold text-charcoal">
                  Pilih Foto atau Video Dari Perangkat (HP / Laptop)
                </div>
                <p className="text-[10px] text-charcoal-50">
                  Mendukung JPG, PNG, WEBP, dan MP4 video.
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*,video/mp4"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Or add via URL */}
            <div className="pt-2 flex items-center gap-2">
              <select
                value={newMediaType}
                onChange={(e) => setNewMediaType(e.target.value as any)}
                className="px-3 py-2 rounded-xl bg-ivory-50 border border-softgray-border text-xs text-charcoal"
              >
                <option value="image">Gambar URL</option>
                <option value="video">Video URL (MP4)</option>
              </select>
              <input
                type="url"
                value={newMediaUrl}
                onChange={(e) => setNewMediaUrl(e.target.value)}
                placeholder="Atau tempel URL gambar / video online..."
                className="flex-1 px-3 py-2 rounded-xl bg-ivory-50 border border-softgray-border text-xs text-charcoal"
              />
              <button
                type="button"
                onClick={handleAddMediaUrl}
                className="px-4 py-2 rounded-xl bg-charcoal text-white text-xs font-medium hover:bg-rose"
              >
                Tambah
              </button>
            </div>

            {/* Media Items List & Reorder */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {mediaList.map((m, idx) => (
                <div
                  key={m.id || idx}
                  className={`relative aspect-square rounded-2xl overflow-hidden border-2 bg-softgray group ${
                    m.is_cover ? "border-rose ring-2 ring-rose/20" : "border-softgray-border"
                  }`}
                >
                  <Image
                    src={m.media_type === "video" ? m.thumbnail_url || m.public_url : m.public_url}
                    alt={m.alt_text || `Media ${idx + 1}`}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                  {m.media_type === "video" && (
                    <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded-full bg-black/70 text-[9px] text-white flex items-center gap-1">
                      <Video className="w-2.5 h-2.5" />
                      <span>Video</span>
                    </div>
                  )}

                  {/* Actions overlay */}
                  <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                    <button
                      type="button"
                      onClick={() => handleDeleteMedia(m.id)}
                      className="self-end p-1 rounded-full bg-red-600 text-white hover:bg-red-700"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSetCover(m.id)}
                      className={`text-[10px] font-semibold py-1 rounded-md text-center transition-colors ${
                        m.is_cover
                          ? "bg-rose text-white"
                          : "bg-white/90 text-charcoal hover:bg-white"
                      }`}
                    >
                      {m.is_cover ? "Cover Utama" : "Jadikan Cover"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4: Variasi, Spesifikasi, & Tag */}
          <div className="p-6 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-4">
            <h2 className="font-editorial text-lg font-semibold text-charcoal">
              4. Spesifikasi & Tag
            </h2>

            {/* Tags */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-100">
                  Tag Produk (Pisahkan dengan koma)
                </label>
                <button
                  type="button"
                  onClick={() => {
                    const tags = generateViralTagsList(name || "fashion", categoryId, "skena");
                    setTagsInput(tags.join(", "));
                  }}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#F2765E] hover:underline"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>✨ AI Auto-Tags</span>
                </button>
              </div>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="misal: outfit kuliah, linen, korean look, oversized"
                className="w-full px-4 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-rose/30"
              />
            </div>

            {/* Size notes */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-100">
                  Catatan Ukuran / Dimensi
                </label>
                <button
                  type="button"
                  onClick={() => {
                    const advice = generateSizeAdvice(categoryId);
                    setSizeNotes(advice);
                  }}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#F2765E] hover:underline"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>✨ AI Saran TB/BB</span>
                </button>
              </div>
              <input
                type="text"
                value={sizeNotes}
                onChange={(e) => setSizeNotes(e.target.value)}
                placeholder="misal: Lingkar Dada: 120 cm | Panjang: 70 cm"
                className="w-full px-4 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-rose/30"
              />
            </div>
          </div>

          {/* Card 5: Visibilitas & Status */}
          <div className="p-6 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-4">
            <h2 className="font-editorial text-lg font-semibold text-charcoal">
              5. Visibilitas & Status Publikasi
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-100">
                  Status Publikasi
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as ProductStatus)}
                  className="w-full px-3 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal"
                >
                  <option value="published">Published (Tampil di Toko)</option>
                  <option value="draft">Draft (Disembunyikan)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-100">
                  Badge Label Editorial
                </label>
                <input
                  type="text"
                  value={badgeLabel}
                  onChange={(e) => setBadgeLabel(e.target.value)}
                  placeholder="Ze's Pick / Viral / Under 50k"
                  className="w-full px-3 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal"
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
                          ? "bg-[#F2765E] text-white border-[#F2765E]"
                          : "bg-white text-charcoal border-softgray-border hover:bg-softgray"
                      }`}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-100">
                  Urutan Tampil (Sort Order)
                </label>
                <input
                  type="number"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(Number(e.target.value))}
                  className="w-full px-3 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm text-charcoal"
                />
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
        </div>

        {/* RIGHT COLUMN: LIVE PRODUCT CARD PREVIEW (4 cols on lg) */}
        <div className="lg:col-span-4 sticky top-24 space-y-4">
          <div className="p-4 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-softgray">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-rose" />
                <h3 className="font-editorial text-sm font-semibold text-charcoal">
                  Live Card Preview
                </h3>
              </div>
              <span className="text-[10px] text-charcoal-50">Tampilan Pengunjung</span>
            </div>

            {/* Renders the actual ProductCard with current form inputs */}
            <div className="max-w-[280px] mx-auto pt-2">
              <ProductCard product={previewProduct} />
            </div>

            <p className="text-[10px] text-center text-charcoal-50 pt-2">
              Kartu di atas merender data formulirmu secara real-time.
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
