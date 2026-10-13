"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  UploadCloud,
  FileText,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  RotateCcw,
  ExternalLink,
  Trash2,
  Package,
  Layers,
  Database,
  Check,
  Eye,
} from "lucide-react";
import { Product } from "@/types";
import { parseCsvRows, convertRowsToProducts } from "@/lib/importer/csv-parser";
import { formatRupiah } from "@/lib/utils";
import { useToast } from "@/context/ToastContext";
import { triggerConfetti } from "@/lib/confetti";

export default function AdminImportPage() {
  const router = useRouter();
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState<"file" | "paste">("file");
  const [rawText, setRawText] = useState<string>("");
  const [parsedProducts, setParsedProducts] = useState<Product[]>([]);
  const [isParsing, setIsParsing] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [importStats, setImportStats] = useState<{ added: number; total: number } | null>(null);

  // Sample CSV data from Shopee Affiliate export
  const sampleShopeeCsv = `40806211663,"Piyama Wanita Baju Tidur Perempuan Kekinian Enak Dipakai Seharian Adem Gak Panas 003","75,7RB","3RB+","WSCOLL","10%","Rp7.568","https://shopee.co.id/product/1200549879/40806211663","https://s.shopee.co.id/3qNpzCN5IV"
43419133580,"Atasan wanita grey polos rib lengan panjang renda bergelombang korean t shirt slim fit cewek","50,0RB","8RB+","Herz_Store","5%","Rp2.498","https://shopee.co.id/product/1058355927/43419133580","https://s.shopee.co.id/40hGBVMRxY"
27083617922,"KEMEJA DENA Mix Brokat MALIKA","33,9RB","10RB+","MANISA Fhaison","5%","Rp1.693","https://shopee.co.id/product/1518701843/27083617922","https://s.shopee.co.id/4B0gNoLocb"
48365682767,"Kaos lengan pendek dan panjang The Stone Roses motif band unisex casual","35,0RB","1RB+","KIDS-MONSTA","7%","Rp2.450","https://shopee.co.id/product/1172151192/48365682767","https://s.shopee.co.id/gQoA4YQHJ"`;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsParsing(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      processCsvContent(content);
    };
    reader.readAsText(file);
  };

  const processCsvContent = (text: string) => {
    try {
      setIsParsing(true);
      const rows = parseCsvRows(text);
      const products = convertRowsToProducts(rows);

      if (products.length === 0) {
        showToast("Tidak ada produk valid yang berhasil diekstrak.", "error");
      } else {
        setParsedProducts(products);
        showToast(`Berhasil membaca ${products.length} produk dari data! ✨`, "info");
      }
    } catch (err: any) {
      showToast(`Error saat membaca CSV: ${err?.message || "Format tidak sesuai"}`, "error");
    } finally {
      setIsParsing(false);
    }
  };

  const handlePasteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rawText.trim()) return;
    processCsvContent(rawText);
  };

  const handleLoadSample = () => {
    setRawText(sampleShopeeCsv);
    processCsvContent(sampleShopeeCsv);
    showToast("Contoh format CSV Shopee Affiliate dimuat!", "info");
  };

  const handleRemoveItem = (index: number) => {
    setParsedProducts((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCommitImport = async () => {
    if (parsedProducts.length === 0) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/admin/import-products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ products: parsedProducts }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal mengimpor produk");

      triggerConfetti(window.innerWidth / 2, window.innerHeight / 2);
      setImportStats({ added: data.added, total: data.total });
      showToast(`Sukses! ${data.added} produk telah ditambahkan ke database! 🎉`, "link");
      setParsedProducts([]);
      setRawText("");
    } catch (err: any) {
      showToast(`Gagal impor: ${err?.message}`, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 text-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AUTO PRODUCT IMPORTER • CSV / EXCEL</span>
          </div>
          <h1 className="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Import Otomatis Produk Shopee Affiliate
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl leading-relaxed">
            Upload file CSV atau paste data tabel Shopee Affiliate. Sistem secara otomatis mendeteksi nama produk, merapikan deskripsi (tanpa simbol markdown * atau #), menentukan kategori yang pas, dan memasang link affiliate resmi kamu.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/products"
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-bold text-white transition-colors"
          >
            Kembali ke Katalog
          </Link>
        </div>
      </div>

      {/* Success Notification Banner */}
      {importStats && (
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-sky-500/20 border border-emerald-500/40 space-y-3 animate-fadeIn">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500 text-black flex items-center justify-center font-bold text-lg">
              ✓
            </div>
            <div>
              <h3 className="font-sans text-lg font-bold text-white">
                Import Berhasil Ditambahkan!
              </h3>
              <p className="text-xs text-zinc-300">
                Berhasil menambahkan <strong>{importStats.added} produk baru</strong>. Total produk aktif di website sekarang: <strong>{importStats.total} produk</strong>.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <Link
              href="/admin/products"
              className="px-5 py-2.5 rounded-xl bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors shadow-lg"
            >
              Lihat di Daftar Produk Admin
            </Link>
            <Link
              href="/products"
              target="_blank"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/10 transition-colors flex items-center gap-1.5"
            >
              <span>Lihat di Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}

      {/* Input Mode Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Input Card (2 Cols) */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-[#12131A] border border-white/10 space-y-6 shadow-xl">
          {/* Tabs */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("file")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "file"
                    ? "bg-white text-black shadow-md"
                    : "bg-white/5 text-zinc-400 hover:text-white"
                }`}
              >
                Upload File (.csv / .txt)
              </button>
              <button
                onClick={() => setActiveTab("paste")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "paste"
                    ? "bg-white text-black shadow-md"
                    : "bg-white/5 text-zinc-400 hover:text-white"
                }`}
              >
                Copy-Paste Teks CSV
              </button>
            </div>

            <button
              onClick={handleLoadSample}
              className="text-xs text-emerald-400 hover:text-emerald-300 font-mono font-medium underline flex items-center gap-1"
            >
              <span>Muat Contoh Data</span>
            </button>
          </div>

          {/* Mode 1: File Upload */}
          {activeTab === "file" && (
            <div className="space-y-4">
              <label
                htmlFor="csv-upload"
                className="border-2 border-dashed border-white/20 hover:border-emerald-500/50 rounded-2xl p-8 sm:p-12 text-center flex flex-col items-center justify-center cursor-pointer transition-colors bg-white/5 hover:bg-white/10 group"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-7 h-7" />
                </div>
                <h4 className="font-sans text-base font-bold text-white mb-1">
                  Pilih atau Drag File CSV / Excel kamu ke sini
                </h4>
                <p className="text-xs text-zinc-400 max-w-sm mb-4 leading-relaxed">
                  Mendukung file export Shopee Affiliate (.csv, .tsv, atau export Excel CSV).
                </p>
                <span className="px-5 py-2.5 rounded-xl bg-white text-black text-xs font-bold shadow-md hover:bg-zinc-200 transition-colors">
                  Pilih File Dari Komputer
                </span>
                <input
                  id="csv-upload"
                  type="file"
                  accept=".csv,.txt,.tsv"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
          )}

          {/* Mode 2: Copy-Paste Area */}
          {activeTab === "paste" && (
            <form onSubmit={handlePasteSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase text-zinc-400">
                  Paste Isi CSV / Excel di Bawah:
                </label>
                <textarea
                  value={rawText}
                  onChange={(e) => setRawText(e.target.value)}
                  placeholder={`Contoh:\n40806211663,"Piyama Wanita Baju Tidur Adem","75,7RB","3RB+","WSCOLL","10%","Rp7.568","https://shopee.co.id/product/1200549879/40806211663","https://s.shopee.co.id/3qNpzCN5IV"`}
                  rows={8}
                  className="w-full p-4 rounded-xl bg-zinc-950 border border-white/10 text-xs font-mono text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setRawText("")}
                  className="text-xs text-zinc-400 hover:text-white"
                >
                  Bersihkan Teks
                </button>
                <button
                  type="submit"
                  disabled={!rawText.trim() || isParsing}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 text-black text-xs font-bold hover:bg-emerald-400 transition-all disabled:opacity-50 shadow-lg active:scale-95"
                >
                  {isParsing ? "Sedang Membaca..." : "Proses & Preview Data"}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right: How It Works & Smart Features */}
        <div className="p-6 rounded-2xl bg-[#12131A] border border-white/10 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="font-sans text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Otomatisasi Pintar Ze</span>
            </h3>

            <div className="space-y-3 text-xs text-zinc-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Auto Category Classifier:</strong> Otomatis mengelompokkan ke 8 kategori pas (Piyama, Gamis, Skincare, Parfum, Streetwear, Sepatu, dll).
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Auto-Clean Markdown:</strong> Otomatis menghapus karakter asterisks (*) dan hashtags (#) yang berantakan dari nama maupun ulasan.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Harga & Diskon:</strong> Mengonversi format rupiah/RB menjadi angka murni dan membuat harga coret diskon otomatis.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Link Affiliate Utuh:</strong> Mempertahankan shortlink resmi (<code className="text-emerald-400">s.shopee.co.id/...</code>) agar komisi tetap masuk.
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-[11px] text-zinc-400 space-y-1">
            <span className="text-white font-bold block">💡 Tips Shopee Affiliate:</span>
            <span>
              Di dashboard Shopee Affiliate Web, pilih <em>Custom Link</em> atau <em>Produk Terlaris</em> lalu klik tombol <em>Export ke CSV</em> untuk mendapatkan file tabel langsung.
            </span>
          </div>
        </div>
      </div>

      {/* Preview Section */}
      {parsedProducts.length > 0 && (
        <div className="space-y-4 pt-4 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#12131A] border border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold text-xs">
                {parsedProducts.length}
              </span>
              <div>
                <h3 className="font-sans text-base font-bold text-white">
                  Preview Produk Terbaca ({parsedProducts.length} Item)
                </h3>
                <p className="text-xs text-zinc-400">
                  Periksa data di bawah sebelum menyimpan ke database.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setParsedProducts([])}
                className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white text-xs font-semibold transition-colors"
              >
                Reset Preview
              </button>
              <button
                onClick={handleCommitImport}
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-all shadow-lg active:scale-95 flex items-center gap-2"
              >
                <span>{isSubmitting ? "Sedang Mengimpor..." : `Import ${parsedProducts.length} Produk`}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#12131A] shadow-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 font-mono uppercase text-zinc-400 text-[11px]">
                  <th className="p-3.5">No</th>
                  <th className="p-3.5">Foto</th>
                  <th className="p-3.5">Nama Produk</th>
                  <th className="p-3.5">Kategori</th>
                  <th className="p-3.5">Harga</th>
                  <th className="p-3.5">Terjual & Toko</th>
                  <th className="p-3.5">Badge</th>
                  <th className="p-3.5">Link Affiliate</th>
                  <th className="p-3.5 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-zinc-300">
                {parsedProducts.slice(0, 50).map((prod, idx) => (
                  <tr key={prod.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-3.5 font-mono text-zinc-500">{idx + 1}</td>
                    <td className="p-3.5">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-zinc-950 border border-white/10 shrink-0">
                        <Image
                          src={prod.media[0]?.public_url || "https://down-id.img.susercontent.com/file/id-11134207-7rbke-ma7vs1c79of1c0"}
                          alt={prod.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                    </td>
                    <td className="p-3.5 max-w-xs">
                      <p className="font-semibold text-white line-clamp-2" title={prod.name}>
                        {prod.name}
                      </p>
                      <span className="text-[10px] text-zinc-500 font-mono">ID: {prod.id}</span>
                    </td>
                    <td className="p-3.5">
                      <span className="px-2.5 py-1 rounded-md bg-white/10 text-emerald-400 font-mono text-[10px] whitespace-nowrap">
                        {prod.category_id.replace("cat-", "")}
                      </span>
                    </td>
                    <td className="p-3.5 font-mono font-bold text-white whitespace-nowrap">
                      {formatRupiah(prod.price)}
                    </td>
                    <td className="p-3.5 text-[11px] whitespace-nowrap">
                      <div>{prod.price_note}</div>
                    </td>
                    <td className="p-3.5 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                        {prod.badge_label}
                      </span>
                    </td>
                    <td className="p-3.5 max-w-[150px] truncate">
                      <a
                        href={prod.affiliate_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline flex items-center gap-1 font-mono text-[10px] truncate"
                        title={prod.affiliate_url}
                      >
                        <span className="truncate">{prod.affiliate_url}</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    </td>
                    <td className="p-3.5 text-right whitespace-nowrap">
                      <button
                        onClick={() => handleRemoveItem(idx)}
                        className="p-1.5 rounded-lg text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors"
                        title="Hapus dari preview"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {parsedProducts.length > 50 && (
            <p className="text-xs text-zinc-500 text-center font-mono">
              Menampilkan 50 dari {parsedProducts.length} produk di preview tabel. Semua {parsedProducts.length} produk akan tetap diimpor saat menekan tombol import di atas.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
