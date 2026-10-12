import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Marketplace } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format number to Indonesian Rupiah (IDR)
 * e.g. 149000 -> "Rp 149.000"
 */
export function formatRupiah(amount?: number | null): string {
  if (amount === undefined || amount === null || isNaN(amount)) {
    return "Hubungi Penjual";
  }
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Calculate discount percentage
 */
export function calculateDiscount(original?: number, current?: number): number | null {
  if (!original || !current || original <= current) return null;
  return Math.round(((original - current) / original) * 100);
}

/**
 * Generate a clean URL slug from string
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

/**
 * Validate outbound affiliate URLs strictly
 * Rejects javascript:, data:, vbscript: and ensures valid https/http protocol
 */
export function isValidAffiliateUrl(url: string): boolean {
  if (!url || typeof url !== "string") return false;
  try {
    const parsed = new URL(url.trim());
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

/**
 * Returns marketplace metadata (name, badge style, color, action label)
 */
export function getMarketplaceMeta(marketplace: Marketplace) {
  switch (marketplace) {
    case "shopee":
      return {
        name: "Shopee",
        cta: "Cek di Shopee",
        colorClass: "bg-[#EE4D2D] text-white hover:bg-[#D73212]",
        borderClass: "border-[#EE4D2D]/20 text-[#EE4D2D] bg-[#EE4D2D]/5",
        badgeBg: "bg-[#EE4D2D]",
        accentHex: "#EE4D2D",
      };
    case "tokopedia":
      return {
        name: "Tokopedia",
        cta: "Beli di Tokopedia",
        colorClass: "bg-[#03AC0E] text-white hover:bg-[#028A0B]",
        borderClass: "border-[#03AC0E]/20 text-[#03AC0E] bg-[#03AC0E]/5",
        badgeBg: "bg-[#03AC0E]",
        accentHex: "#03AC0E",
      };
    case "lazada":
      return {
        name: "Lazada",
        cta: "Cek di Lazada",
        colorClass: "bg-[#0F146D] text-white hover:bg-[#0A0D47]",
        borderClass: "border-[#0F146D]/20 text-[#0F146D] bg-[#0F146D]/5",
        badgeBg: "bg-[#0F146D]",
        accentHex: "#0F146D",
      };
    case "tiktok":
      return {
        name: "TikTok Shop",
        cta: "Lihat di TikTok Shop",
        colorClass: "bg-[#000000] text-white hover:bg-[#262323]",
        borderClass: "border-black/20 text-black bg-black/5",
        badgeBg: "bg-black",
        accentHex: "#000000",
      };
    default:
      return {
        name: "Marketplace",
        cta: "Lihat Produk",
        colorClass: "bg-charcoal text-white hover:bg-black",
        borderClass: "border-charcoal/20 text-charcoal bg-charcoal/5",
        badgeBg: "bg-charcoal",
        accentHex: "#262323",
      };
  }
}
