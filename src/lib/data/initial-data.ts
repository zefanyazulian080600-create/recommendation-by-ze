import { Category, Collection, Product, SiteSettings } from "@/types";

export const initialSiteSettings: SiteSettings = {
  brand_name: "Recommendation by Ze",
  brand_tagline: "Curated Online Shop Finds for Everyone",
  hero_headline: "Curated Finds for Your Everyday Aesthetic.",
  hero_subheadline:
    "Rekomendasi terbaik belanja online shop pilihan Ze untuk cowok & cewek: outfit streetwear & clean, skincare viral, perintilan aesthetic, sampai gadget setup favorit.",
  hero_image:
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop",
  announcement_text: "Temukan racun online shop terbaik & wishlist favoritmu hari ini ✨",
  announcement_active: true,
  affiliate_disclosure:
    "Beberapa tautan di website ini merupakan tautan affiliate resmi. Ze dapat menerima komisi kecil apabila kamu melakukan pembelian melalui tautan tersebut tanpa ada biaya tambahan apapun bagimu. Semua rekomendasi dipilih secara independen.",
  social_instagram: "https://instagram.com/recommendationbyze",
  social_tiktok: "https://tiktok.com/@recommendationbyze",
  social_telegram: "https://t.me/racunbyze",
  footer_text: "© 2026 Recommendation by Ze. Kurasi barang online shop pilihan & inspirasi gaya harian.",
};

export const initialCategories: Category[] = [
  {
    id: "cat-outfit-pria",
    name: "Outfit Pria",
    slug: "outfit-pria",
    description: "Inspirasi outfit cowok: kaos boxy, kemeja corduroy, cargo pants, & streetwear.",
    icon_name: "Shirt",
    cover_image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=800&auto=format&fit=crop",
    sort_order: 1,
    is_active: true,
  },
  {
    id: "cat-outfit-wanita",
    name: "Outfit Wanita",
    slug: "outfit-wanita",
    description: "Koleksi atasan, dress, celana, dan knitwear wanita terkini.",
    icon_name: "Shirt",
    cover_image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    sort_order: 2,
    is_active: true,
  },
  {
    id: "cat-outfit-unisex",
    name: "Unisex & Streetwear",
    slug: "outfit-unisex",
    description: "Fashion netral gender untuk cowok dan cewek: oversized tee, hoodie, & parachute pants.",
    icon_name: "Sparkles",
    cover_image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    sort_order: 3,
    is_active: true,
  },
  {
    id: "cat-korean-style",
    name: "Korean Style",
    slug: "korean-style",
    description: "Inspirasi outfit ala cewek dan cowok Korea yang clean, oversized, & chic.",
    icon_name: "Sparkles",
    cover_image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    sort_order: 4,
    is_active: true,
  },
  {
    id: "cat-skincare-grooming",
    name: "Skincare & Grooming",
    slug: "skincare-grooming",
    description: "Skincare viral, sunscreens, hair styling clay, & grooming favorit cowok-cewek.",
    icon_name: "Heart",
    cover_image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop",
    sort_order: 5,
    is_active: true,
  },
  {
    id: "cat-aesthetic-room",
    name: "Aesthetic Room & Home",
    slug: "aesthetic-room",
    description: "Dekorasi kamar tidur, organizer estetik, lampu tidur, & printilan rumah.",
    icon_name: "Home",
    cover_image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    sort_order: 6,
    is_active: true,
  },
  {
    id: "cat-gadget-setup",
    name: "Desk Setup & Gadget",
    slug: "desk-setup-gadget",
    description: "Aksesoris meja kerja, keyboard, phone case, & kabel organizer.",
    icon_name: "Laptop",
    cover_image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop",
    sort_order: 7,
    is_active: true,
  },
  {
    id: "cat-bags-shoes",
    name: "Bags & Shoes (Unisex)",
    slug: "bags-shoes",
    description: "Tas selempang, tote bag kanvas, retro skate sneakers, & loafers.",
    icon_name: "ShoppingBag",
    cover_image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    sort_order: 8,
    is_active: true,
  },
  {
    id: "cat-hijab-friendly",
    name: "Hijab Friendly",
    slug: "hijab-friendly",
    description: "Pilihan outfit sopan, modest, long tunik, & jilbab pashmina nyaman.",
    icon_name: "Smile",
    cover_image:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop",
    sort_order: 9,
    is_active: true,
  },
  {
    id: "cat-viral-tiktok",
    name: "Viral TikTok Finds",
    slug: "viral-tiktok",
    description: "Barang-barang unik dan viral di FYP yang ternyata sangat berguna.",
    icon_name: "Flame",
    cover_image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    sort_order: 10,
    is_active: true,
  },
];

export const initialCollections: Collection[] = [
  {
    id: "col-bro-streetwear",
    title: "Bro Streetwear Essentials",
    slug: "bro-streetwear-essentials",
    description: "Kombinasi boxy tee tebal 235gsm, jaket corduroy workwear, cargo pants, dan retro skate sneakers.",
    badge_text: "Men's Fit 🛹",
    cover_image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=900&auto=format&fit=crop",
    is_published: true,
    sort_order: 1,
  },
  {
    id: "col-clean-minimalist",
    title: "Clean Minimalist Unisex Pack",
    slug: "clean-minimalist-pack",
    description: "Warna netral stone & olive, parfum santal woody, tote bag laptop, & sneakers klasik.",
    badge_text: "Unisex Fit ✨",
    cover_image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=900&auto=format&fit=crop",
    is_published: true,
    sort_order: 2,
  },
  {
    id: "col-under-100k",
    title: "Best Finds Under 100K",
    slug: "under-100k",
    description: "Murah tapi nggak murahan! Rekomendasi barang berfaedah dengan harga di bawah 100 ribu rupiah.",
    badge_text: "Budget Friendly 💸",
    cover_image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=900&auto=format&fit=crop",
    is_published: true,
    sort_order: 3,
  },
  {
    id: "col-cozy-desk",
    title: "Cozy WFH Desk Setup",
    slug: "cozy-desk-setup",
    description: "Bikin produktif seharian dengan mechanical keyboard, lampu monitor warm, dan organizer aesthetic.",
    badge_text: "Productivity 🎧",
    cover_image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=900&auto=format&fit=crop",
    is_published: true,
    sort_order: 4,
  },
];

// Sample reliable public video asset for product demonstration
const DEMO_VIDEO_URL =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

export const initialProducts: Product[] = [
  {
    "id": "shopee-48365682767",
    "name": "Kaos lengan pendek dan panjang The Stone Roses motif band unisex casual",
    "slug": "kaos-lengan-pendek-dan-panjang-the-stone-rose-2767",
    "short_description": "Rekomendasi Kaos lengan pendek dan panjang The Stone Roses motif band unisex casual pilihan Ze di Shopee. Terjual 1RB+ di KIDS-MONSTA dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **1RB+** di toko **KIDS-MONSTA** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** KIDS-MONSTA\n* **Performa Penjualan:** 1RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending",
      "under50k"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/gQoA4YQHJ",
    "price": 35000,
    "original_price": 51000,
    "price_note": "Terjual 1RB+ di KIDS-MONSTA • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": true,
    "is_trending": true,
    "badge_label": "Under 50k 💸",
    "status": "published",
    "sort_order": 1,
    "spill_number": 1,
    "seo_title": "Kaos lengan pendek dan panjang The Stone Roses motif band unisex casual • Rekomendasi Ze Shopee",
    "seo_description": "Beli Kaos lengan pendek dan panjang The Stone Roses motif band unisex casual harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 305,
    "created_at": "2026-10-13T05:17:48.343Z",
    "updated_at": "2026-10-13T05:17:48.344Z",
    "media": [
      {
        "id": "m-shopee-48365682767-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Kaos lengan pendek dan panjang The Stone Roses motif band unisex casual",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-24428119240",
    "name": "CREDIFOX Jaket Gunung Gorpcore Seri CLIMBER Bahan Taslan JN Premium",
    "slug": "credifox-jaket-gunung-gorpcore-seri-climber-b-9240",
    "short_description": "Rekomendasi CREDIFOX Jaket Gunung Gorpcore Seri CLIMBER Bahan Taslan JN Premium pilihan Ze di Shopee. Terjual 10RB+ di Credifox Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Credifox Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Credifox Official Store\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-bags-shoes",
    "tags": [
      "shopee",
      "racunshopee",
      "bags-shoes",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/1BN4kzWWGQ",
    "price": 210600,
    "original_price": 305000,
    "price_note": "Terjual 10RB+ di Credifox Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": true,
    "is_trending": true,
    "badge_label": "Gorpcore Kalcer",
    "status": "published",
    "sort_order": 2,
    "spill_number": 2,
    "seo_title": "CREDIFOX Jaket Gunung Gorpcore Seri CLIMBER Bahan Taslan JN Premium • Rekomendasi Ze Shopee",
    "seo_description": "Beli CREDIFOX Jaket Gunung Gorpcore Seri CLIMBER Bahan Taslan JN Premium harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 248,
    "created_at": "2026-10-13T05:17:48.351Z",
    "updated_at": "2026-10-13T05:17:48.351Z",
    "media": [
      {
        "id": "m-shopee-24428119240-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=900&auto=format&fit=crop",
        "alt_text": "CREDIFOX Jaket Gunung Gorpcore Seri CLIMBER Bahan Taslan JN Premium",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-5155587192",
    "name": "OVRDZ - Sweater Crewneck Rugby Sweatshirt Bordir Pria Wanita Switer Cowok",
    "slug": "ovrdz---sweater-crewneck-rugby-sweatshirt-bor-7192",
    "short_description": "Rekomendasi OVRDZ - Sweater Crewneck Rugby Sweatshirt Bordir Pria Wanita Switer Cowok pilihan Ze di Shopee. Terjual 10RB+ di OVRDZ Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **OVRDZ Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** OVRDZ Official Store\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/113eYgX9bP",
    "price": 103400,
    "original_price": 150000,
    "price_note": "Terjual 10RB+ di OVRDZ Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": true,
    "is_trending": true,
    "badge_label": "Rugby Retro",
    "status": "published",
    "sort_order": 3,
    "spill_number": 3,
    "seo_title": "OVRDZ - Sweater Crewneck Rugby Sweatshirt Bordir Pria Wanita Switer Cowok • Rekomendasi Ze Shopee",
    "seo_description": "Beli OVRDZ - Sweater Crewneck Rugby Sweatshirt Bordir Pria Wanita Switer Cowok harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 296,
    "created_at": "2026-10-13T05:17:48.351Z",
    "updated_at": "2026-10-13T05:17:48.351Z",
    "media": [
      {
        "id": "m-shopee-5155587192-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=900&auto=format&fit=crop",
        "alt_text": "OVRDZ - Sweater Crewneck Rugby Sweatshirt Bordir Pria Wanita Switer Cowok",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-26762619208",
    "name": "Swipe Up Kemeja Batik Pria Modern Slimfit Katun Lengan Panjang Motif Katsura Navy",
    "slug": "swipe-up-kemeja-batik-pria-modern-slimfit-kat-9208",
    "short_description": "Rekomendasi Swipe Up Kemeja Batik Pria Modern Slimfit Katun Lengan Panjang Motif Katsura Navy pilihan Ze di Shopee. Terjual 10RB+ di Swipe Up Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Swipe Up Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Swipe Up Official Store\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/BUXZ9aKIG",
    "price": 200200,
    "original_price": 290000,
    "price_note": "Terjual 10RB+ di Swipe Up Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": true,
    "is_trending": true,
    "badge_label": "Batik Modern",
    "status": "published",
    "sort_order": 4,
    "spill_number": 4,
    "seo_title": "Swipe Up Kemeja Batik Pria Modern Slimfit Katun Lengan Panjang Motif Katsura Navy • Rekomendasi Ze Shopee",
    "seo_description": "Beli Swipe Up Kemeja Batik Pria Modern Slimfit Katun Lengan Panjang Motif Katsura Navy harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 85,
    "created_at": "2026-10-13T05:17:48.351Z",
    "updated_at": "2026-10-13T05:17:48.351Z",
    "media": [
      {
        "id": "m-shopee-26762619208-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Swipe Up Kemeja Batik Pria Modern Slimfit Katun Lengan Panjang Motif Katsura Navy",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-41055212390",
    "name": "EDINAL kemeja Workshirt Zipper Black boxy DO NOT BE",
    "slug": "edinal-kemeja-workshirt-zipper-black-boxy-do--2390",
    "short_description": "Rekomendasi EDINAL kemeja Workshirt Zipper Black boxy DO NOT BE pilihan Ze di Shopee. Terjual 10RB+ di EDINAL Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **EDINAL Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** EDINAL Official Store\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller",
      "boxy"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/1B7MqaxdF",
    "price": 77500,
    "original_price": 112000,
    "price_note": "Terjual 10RB+ di EDINAL Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": true,
    "is_trending": true,
    "badge_label": "Skena Boxy",
    "status": "published",
    "sort_order": 5,
    "spill_number": 5,
    "seo_title": "EDINAL kemeja Workshirt Zipper Black boxy DO NOT BE • Rekomendasi Ze Shopee",
    "seo_description": "Beli EDINAL kemeja Workshirt Zipper Black boxy DO NOT BE harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 318,
    "created_at": "2026-10-13T05:17:48.351Z",
    "updated_at": "2026-10-13T05:17:48.351Z",
    "media": [
      {
        "id": "m-shopee-41055212390-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=900&auto=format&fit=crop",
        "alt_text": "EDINAL kemeja Workshirt Zipper Black boxy DO NOT BE",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-26113440270",
    "name": "Fairgoods Tracksuit Jacket Line Dune Black",
    "slug": "fairgoods-tracksuit-jacket-line-dune-black-0270",
    "short_description": "Rekomendasi Fairgoods Tracksuit Jacket Line Dune Black pilihan Ze di Shopee. Terjual 1RB+ di Fairgoods Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **1RB+** di toko **Fairgoods Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Fairgoods Official Shop\n* **Performa Penjualan:** 1RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/W7NxlZ3cM",
    "price": 179000,
    "original_price": 260000,
    "price_note": "Terjual 1RB+ di Fairgoods Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": true,
    "is_trending": true,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 6,
    "spill_number": 6,
    "seo_title": "Fairgoods Tracksuit Jacket Line Dune Black • Rekomendasi Ze Shopee",
    "seo_description": "Beli Fairgoods Tracksuit Jacket Line Dune Black harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 187,
    "created_at": "2026-10-13T05:17:48.351Z",
    "updated_at": "2026-10-13T05:17:48.351Z",
    "media": [
      {
        "id": "m-shopee-26113440270-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Fairgoods Tracksuit Jacket Line Dune Black",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-15814680062",
    "name": "HIGHTY Off White Cable-Knit Sweater",
    "slug": "highty-off-white-cable-knit-sweater-0062",
    "short_description": "Rekomendasi HIGHTY Off White Cable-Knit Sweater pilihan Ze di Shopee. Terjual 2RB+ di HIGHTY Menswear Official dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **2RB+** di toko **HIGHTY Menswear Official** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** HIGHTY Menswear Official\n* **Performa Penjualan:** 2RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/LnxlSZgxL",
    "price": 291600,
    "original_price": 423000,
    "price_note": "Terjual 2RB+ di HIGHTY Menswear Official • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": true,
    "is_trending": true,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 7,
    "spill_number": 7,
    "seo_title": "HIGHTY Off White Cable-Knit Sweater • Rekomendasi Ze Shopee",
    "seo_description": "Beli HIGHTY Off White Cable-Knit Sweater harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 322,
    "created_at": "2026-10-13T05:17:48.351Z",
    "updated_at": "2026-10-13T05:17:48.351Z",
    "media": [
      {
        "id": "m-shopee-15814680062-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=900&auto=format&fit=crop",
        "alt_text": "HIGHTY Off White Cable-Knit Sweater",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-28809804438",
    "name": "Celana Jeans Pria Panjang Snow Black - Celana Jeans Korea Style Original Loose Straight - Celana Jeans Oversize",
    "slug": "celana-jeans-pria-panjang-snow-black---celana-4438",
    "short_description": "Rekomendasi Celana Jeans Pria Panjang Snow Black - Celana Jeans Korea Style Original Loose Straight - Celana Jeans Oversize pilihan Ze di Shopee. Terjual 10RB+ di MISTER BENTO dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **MISTER BENTO** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** MISTER BENTO\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/4qGN7jIYpE",
    "price": 59900,
    "original_price": 87000,
    "price_note": "Terjual 10RB+ di MISTER BENTO • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": true,
    "is_trending": true,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 8,
    "spill_number": 8,
    "seo_title": "Celana Jeans Pria Panjang Snow Black - Celana Jeans Korea Style Original Loose Straight - Celana Jeans Oversize • Rekomendasi Ze Shopee",
    "seo_description": "Beli Celana Jeans Pria Panjang Snow Black - Celana Jeans Korea Style Original Loose Straight - Celana Jeans Oversize harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 141,
    "created_at": "2026-10-13T05:17:48.351Z",
    "updated_at": "2026-10-13T05:17:48.351Z",
    "media": [
      {
        "id": "m-shopee-28809804438-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Celana Jeans Pria Panjang Snow Black - Celana Jeans Korea Style Original Loose Straight - Celana Jeans Oversize",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-41950999329",
    "name": "Lawna - Workshirt Boxy Double Zipper with Clark White - Black",
    "slug": "lawna---workshirt-boxy-double-zipper-with-cla-9329",
    "short_description": "Rekomendasi Lawna - Workshirt Boxy Double Zipper with Clark White - Black pilihan Ze di Shopee. Terjual 1RB+ di Lawna Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **1RB+** di toko **Lawna Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Lawna Official Store\n* **Performa Penjualan:** 1RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending",
      "boxy"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/4fwwvQJCAD",
    "price": 147000,
    "original_price": 213000,
    "price_note": "Terjual 1RB+ di Lawna Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": true,
    "is_trending": true,
    "badge_label": "Skena Boxy",
    "status": "published",
    "sort_order": 9,
    "spill_number": 9,
    "seo_title": "Lawna - Workshirt Boxy Double Zipper with Clark White - Black • Rekomendasi Ze Shopee",
    "seo_description": "Beli Lawna - Workshirt Boxy Double Zipper with Clark White - Black harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 208,
    "created_at": "2026-10-13T05:17:48.352Z",
    "updated_at": "2026-10-13T05:17:48.352Z",
    "media": [
      {
        "id": "m-shopee-41950999329-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1620012253295-c15c429f60cb?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Lawna - Workshirt Boxy Double Zipper with Clark White - Black",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-29300680948",
    "name": "DRITTORONZIO Work Jaket  Boxy \"Duck\" unisex - Coklat",
    "slug": "drittoronzio-work-jaket-boxy-duck-unisex---co-0948",
    "short_description": "Rekomendasi DRITTORONZIO Work Jaket  Boxy \"Duck\" unisex - Coklat pilihan Ze di Shopee. Terjual 5RB+ di DRITTORONZIO Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **5RB+** di toko **DRITTORONZIO Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** DRITTORONZIO Official Store\n* **Performa Penjualan:** 5RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending",
      "boxy"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/5AtDWLHI9K",
    "price": 210000,
    "original_price": 305000,
    "price_note": "Terjual 5RB+ di DRITTORONZIO Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": true,
    "is_trending": true,
    "badge_label": "Skena Boxy",
    "status": "published",
    "sort_order": 10,
    "spill_number": 10,
    "seo_title": "DRITTORONZIO Work Jaket  Boxy \"Duck\" unisex - Coklat • Rekomendasi Ze Shopee",
    "seo_description": "Beli DRITTORONZIO Work Jaket  Boxy \"Duck\" unisex - Coklat harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 119,
    "created_at": "2026-10-13T05:17:48.352Z",
    "updated_at": "2026-10-13T05:17:48.352Z",
    "media": [
      {
        "id": "m-shopee-29300680948-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=900&auto=format&fit=crop",
        "alt_text": "DRITTORONZIO Work Jaket  Boxy \"Duck\" unisex - Coklat",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-53513470916",
    "name": "Middlehigh Sweater Rajut Knitwear Cardigan Unisex Tebal Grey Static Roots",
    "slug": "middlehigh-sweater-rajut-knitwear-cardigan-un-0916",
    "short_description": "Rekomendasi Middlehigh Sweater Rajut Knitwear Cardigan Unisex Tebal Grey Static Roots pilihan Ze di Shopee. Terjual 164 di Middlehigh Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **164** di toko **Middlehigh Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Middlehigh Official Store\n* **Performa Penjualan:** 164 terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-korean-style",
    "tags": [
      "shopee",
      "racunshopee",
      "korean-style",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/50ZnK2HvUJ",
    "price": 249000,
    "original_price": 361000,
    "price_note": "Terjual 164 di Middlehigh Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": true,
    "is_trending": true,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 11,
    "spill_number": 11,
    "seo_title": "Middlehigh Sweater Rajut Knitwear Cardigan Unisex Tebal Grey Static Roots • Rekomendasi Ze Shopee",
    "seo_description": "Beli Middlehigh Sweater Rajut Knitwear Cardigan Unisex Tebal Grey Static Roots harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 167,
    "created_at": "2026-10-13T05:17:48.352Z",
    "updated_at": "2026-10-13T05:17:48.352Z",
    "media": [
      {
        "id": "m-shopee-53513470916-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Middlehigh Sweater Rajut Knitwear Cardigan Unisex Tebal Grey Static Roots",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-29638039795",
    "name": "BOARSHORT PARASUT/CELANA PENDEK PARASUT/CELANA PARASUT / CELANA PENDEK/ CELANA PANTAU PARASUT/ BOARDSHORT WATERPROOF/BOARDSHORT  PARASUT/CELANA PARASUT SKENA/ CELANA PENDEK KALCER / CELANA PENDEK PARASUT REFLEKTIF/CELANA SKENA/CELANA KALCER/ (ring d)",
    "slug": "boarshort-parasutcelana-pendek-parasutcelana--9795",
    "short_description": "Rekomendasi BOARSHORT PARASUT/CELANA PENDEK PARASUT/CELANA PARASUT / CELANA PENDEK/ CELANA PANTAU PARASUT/ BOARDSHORT WATERPROOF/BOARDSHORT  PARASUT/CELANA PARASUT SKENA/ CELANA PENDEK KALCER / CELANA PENDEK PARASUT REFLEKTIF/CELANA SKENA/CELANA KALCER/ (ring d) pilihan Ze di Shopee. Terjual 10RB+ di Braviour society dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Braviour society** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Braviour society\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller",
      "skena",
      "kalcer",
      "under50k"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/4B0gKVL6BA",
    "price": 37000,
    "original_price": 54000,
    "price_note": "Terjual 10RB+ di Braviour society • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": true,
    "is_trending": true,
    "badge_label": "Under 50k 💸",
    "status": "published",
    "sort_order": 12,
    "spill_number": 12,
    "seo_title": "BOARSHORT PARASUT/CELANA PENDEK PARASUT/CELANA PARASUT / CELANA PENDEK/ CELANA PANTAU PARASUT/ BOARDSHORT WATERPROOF/BOARDSHORT  PARASUT/CELANA PARASUT SKENA/ CELANA PENDEK KALCER / CELANA PENDEK PARASUT REFLEKTIF/CELANA SKENA/CELANA KALCER/ (ring d) • Rekomendasi Ze Shopee",
    "seo_description": "Beli BOARSHORT PARASUT/CELANA PENDEK PARASUT/CELANA PARASUT / CELANA PENDEK/ CELANA PANTAU PARASUT/ BOARDSHORT WATERPROOF/BOARDSHORT  PARASUT/CELANA PARASUT SKENA/ CELANA PENDEK KALCER / CELANA PENDEK PARASUT REFLEKTIF/CELANA SKENA/CELANA KALCER/ (ring d) harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 261,
    "created_at": "2026-10-13T05:17:48.352Z",
    "updated_at": "2026-10-13T05:17:48.352Z",
    "media": [
      {
        "id": "m-shopee-29638039795-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=900&auto=format&fit=crop",
        "alt_text": "BOARSHORT PARASUT/CELANA PENDEK PARASUT/CELANA PARASUT / CELANA PENDEK/ CELANA PANTAU PARASUT/ BOARDSHORT WATERPROOF/BOARDSHORT  PARASUT/CELANA PARASUT SKENA/ CELANA PENDEK KALCER / CELANA PENDEK PARASUT REFLEKTIF/CELANA SKENA/CELANA KALCER/ (ring d)",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-28220955713",
    "name": "Backheels - Workshirt Zipper Boxy - Deserve - Kemeja kerja Hitam Unisex",
    "slug": "backheels---workshirt-zipper-boxy---deserve---5713",
    "short_description": "Rekomendasi Backheels - Workshirt Zipper Boxy - Deserve - Kemeja kerja Hitam Unisex pilihan Ze di Shopee. Terjual 1RB+ di Backheel Official dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **1RB+** di toko **Backheel Official** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Backheel Official\n* **Performa Penjualan:** 1RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending",
      "boxy"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/40hG8CLjW9",
    "price": 125100,
    "original_price": 181000,
    "price_note": "Terjual 1RB+ di Backheel Official • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": true,
    "badge_label": "Skena Boxy",
    "status": "published",
    "sort_order": 13,
    "spill_number": 13,
    "seo_title": "Backheels - Workshirt Zipper Boxy - Deserve - Kemeja kerja Hitam Unisex • Rekomendasi Ze Shopee",
    "seo_description": "Beli Backheels - Workshirt Zipper Boxy - Deserve - Kemeja kerja Hitam Unisex harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 312,
    "created_at": "2026-10-13T05:17:48.352Z",
    "updated_at": "2026-10-13T05:17:48.352Z",
    "media": [
      {
        "id": "m-shopee-28220955713-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Backheels - Workshirt Zipper Boxy - Deserve - Kemeja kerja Hitam Unisex",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-24129020888",
    "name": "DRITTORONZIO Work Jaket Boxy - Jacket Crop \"LISCIO\" unisex - Abu",
    "slug": "drittoronzio-work-jaket-boxy---jacket-crop-li-0888",
    "short_description": "Rekomendasi DRITTORONZIO Work Jaket Boxy - Jacket Crop \"LISCIO\" unisex - Abu pilihan Ze di Shopee. Terjual 6RB+ di DRITTORONZIO Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **6RB+** di toko **DRITTORONZIO Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** DRITTORONZIO Official Store\n* **Performa Penjualan:** 6RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending",
      "boxy"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/4VdWj7JpVG",
    "price": 210000,
    "original_price": 305000,
    "price_note": "Terjual 6RB+ di DRITTORONZIO Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": true,
    "badge_label": "Skena Boxy",
    "status": "published",
    "sort_order": 14,
    "spill_number": 14,
    "seo_title": "DRITTORONZIO Work Jaket Boxy - Jacket Crop \"LISCIO\" unisex - Abu • Rekomendasi Ze Shopee",
    "seo_description": "Beli DRITTORONZIO Work Jaket Boxy - Jacket Crop \"LISCIO\" unisex - Abu harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 145,
    "created_at": "2026-10-13T05:17:48.352Z",
    "updated_at": "2026-10-13T05:17:48.352Z",
    "media": [
      {
        "id": "m-shopee-24129020888-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=900&auto=format&fit=crop",
        "alt_text": "DRITTORONZIO Work Jaket Boxy - Jacket Crop \"LISCIO\" unisex - Abu",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-22838274808",
    "name": "Baju Batik Pria Lengan Pendek / Baju Batik Pria / Kemeja Batik Pria",
    "slug": "baju-batik-pria-lengan-pendek-baju-batik-pria-4808",
    "short_description": "Rekomendasi Baju Batik Pria Lengan Pendek / Baju Batik Pria / Kemeja Batik Pria pilihan Ze di Shopee. Terjual 10RB+ di Batik Opex Collection dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Batik Opex Collection** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Batik Opex Collection\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "bestseller",
      "under50k"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/4LK6WoKSqF",
    "price": 40500,
    "original_price": 59000,
    "price_note": "Terjual 10RB+ di Batik Opex Collection • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": true,
    "badge_label": "Batik Modern",
    "status": "published",
    "sort_order": 15,
    "spill_number": 15,
    "seo_title": "Baju Batik Pria Lengan Pendek / Baju Batik Pria / Kemeja Batik Pria • Rekomendasi Ze Shopee",
    "seo_description": "Beli Baju Batik Pria Lengan Pendek / Baju Batik Pria / Kemeja Batik Pria harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 168,
    "created_at": "2026-10-13T05:17:48.352Z",
    "updated_at": "2026-10-13T05:17:48.352Z",
    "media": [
      {
        "id": "m-shopee-22838274808-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Baju Batik Pria Lengan Pendek / Baju Batik Pria / Kemeja Batik Pria",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-29139348713",
    "name": "Suyboy Celana Jeans pria Basic Loose Denim Baggy Pants Wide Leg Gombrong Jeans panjang pria",
    "slug": "suyboy-celana-jeans-pria-basic-loose-denim-ba-8713",
    "short_description": "Rekomendasi Suyboy Celana Jeans pria Basic Loose Denim Baggy Pants Wide Leg Gombrong Jeans panjang pria pilihan Ze di Shopee. Terjual 10RB+ di Suyboy Men's Clothing dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Suyboy Men's Clothing** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Suyboy Men's Clothing\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/3VkzXHNdX6",
    "price": 166000,
    "original_price": 241000,
    "price_note": "Terjual 10RB+ di Suyboy Men's Clothing • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": true,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 16,
    "spill_number": 16,
    "seo_title": "Suyboy Celana Jeans pria Basic Loose Denim Baggy Pants Wide Leg Gombrong Jeans panjang pria • Rekomendasi Ze Shopee",
    "seo_description": "Beli Suyboy Celana Jeans pria Basic Loose Denim Baggy Pants Wide Leg Gombrong Jeans panjang pria harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 273,
    "created_at": "2026-10-13T05:17:48.352Z",
    "updated_at": "2026-10-13T05:17:48.352Z",
    "media": [
      {
        "id": "m-shopee-29139348713-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Suyboy Celana Jeans pria Basic Loose Denim Baggy Pants Wide Leg Gombrong Jeans panjang pria",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-29990264994",
    "name": "EDINAL Workshirt Zipper Black boxys Parian warna katun driell",
    "slug": "edinal-workshirt-zipper-black-boxys-parian-wa-4994",
    "short_description": "Rekomendasi EDINAL Workshirt Zipper Black boxys Parian warna katun driell pilihan Ze di Shopee. Terjual 10RB+ di EDINAL Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **EDINAL Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** EDINAL Official Store\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller",
      "boxy"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/3LRZKyOGs5",
    "price": 87300,
    "original_price": 127000,
    "price_note": "Terjual 10RB+ di EDINAL Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": true,
    "badge_label": "Skena Boxy",
    "status": "published",
    "sort_order": 17,
    "spill_number": 17,
    "seo_title": "EDINAL Workshirt Zipper Black boxys Parian warna katun driell • Rekomendasi Ze Shopee",
    "seo_description": "Beli EDINAL Workshirt Zipper Black boxys Parian warna katun driell harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 157,
    "created_at": "2026-10-13T05:17:48.352Z",
    "updated_at": "2026-10-13T05:17:48.352Z",
    "media": [
      {
        "id": "m-shopee-29990264994-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=900&auto=format&fit=crop",
        "alt_text": "EDINAL Workshirt Zipper Black boxys Parian warna katun driell",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-11141799002",
    "name": "X Urband Absolute Jaket Baseball Varsity Full Embroider",
    "slug": "x-urband-absolute-jaket-baseball-varsity-full-9002",
    "short_description": "Rekomendasi X Urband Absolute Jaket Baseball Varsity Full Embroider pilihan Ze di Shopee. Terjual 10RB+ di X Urband Absolute Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **X Urband Absolute Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** X Urband Absolute Official Shop\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/3qNpvtMMrC",
    "price": 112000,
    "original_price": 162000,
    "price_note": "Terjual 10RB+ di X Urband Absolute Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": true,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 18,
    "spill_number": 18,
    "seo_title": "X Urband Absolute Jaket Baseball Varsity Full Embroider • Rekomendasi Ze Shopee",
    "seo_description": "Beli X Urband Absolute Jaket Baseball Varsity Full Embroider harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 123,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-11141799002-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=900&auto=format&fit=crop",
        "alt_text": "X Urband Absolute Jaket Baseball Varsity Full Embroider",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-43127893900",
    "name": "VALANGKIN RAYNER BLW  Sneakers Old Ace Blue Pria Wanita retro Original Lokal",
    "slug": "valangkin-rayner-blw-sneakers-old-ace-blue-pr-3900",
    "short_description": "Rekomendasi VALANGKIN RAYNER BLW  Sneakers Old Ace Blue Pria Wanita retro Original Lokal pilihan Ze di Shopee. Terjual 3RB+ di Valangkin Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **3RB+** di toko **Valangkin Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Valangkin Official Store\n* **Performa Penjualan:** 3RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-bags-shoes",
    "tags": [
      "shopee",
      "racunshopee",
      "bags-shoes",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/3g4PjaN0CB",
    "price": 189000,
    "original_price": 274000,
    "price_note": "Terjual 3RB+ di Valangkin Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": true,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 19,
    "spill_number": 19,
    "seo_title": "VALANGKIN RAYNER BLW  Sneakers Old Ace Blue Pria Wanita retro Original Lokal • Rekomendasi Ze Shopee",
    "seo_description": "Beli VALANGKIN RAYNER BLW  Sneakers Old Ace Blue Pria Wanita retro Original Lokal harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 100,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-43127893900-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=900&auto=format&fit=crop",
        "alt_text": "VALANGKIN RAYNER BLW  Sneakers Old Ace Blue Pria Wanita retro Original Lokal",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-1522714051",
    "name": "SWEATER CREWNECK Kombinasi Switer Crewneck Termurah Kualitas Distro",
    "slug": "sweater-crewneck-kombinasi-switer-crewneck-te-4051",
    "short_description": "Rekomendasi SWEATER CREWNECK Kombinasi Switer Crewneck Termurah Kualitas Distro pilihan Ze di Shopee. Terjual 10RB+ di Bringluck Stuff dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Bringluck Stuff** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Bringluck Stuff\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-bags-shoes",
    "tags": [
      "shopee",
      "racunshopee",
      "bags-shoes",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/2qVIk3QAt2",
    "price": 67500,
    "original_price": 98000,
    "price_note": "Terjual 10RB+ di Bringluck Stuff • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": true,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 20,
    "spill_number": 20,
    "seo_title": "SWEATER CREWNECK Kombinasi Switer Crewneck Termurah Kualitas Distro • Rekomendasi Ze Shopee",
    "seo_description": "Beli SWEATER CREWNECK Kombinasi Switer Crewneck Termurah Kualitas Distro harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 158,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-1522714051-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=900&auto=format&fit=crop",
        "alt_text": "SWEATER CREWNECK Kombinasi Switer Crewneck Termurah Kualitas Distro",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-55650935882",
    "name": "EDINAL workhiet enggineer kemeja kancing sternco",
    "slug": "edinal-workhiet-enggineer-kemeja-kancing-ster-5882",
    "short_description": "Rekomendasi EDINAL workhiet enggineer kemeja kancing sternco pilihan Ze di Shopee. Terjual 1RB+ di EDINAL Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **1RB+** di toko **EDINAL Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** EDINAL Official Store\n* **Performa Penjualan:** 1RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/2gBsXkQoE1",
    "price": 94500,
    "original_price": 137000,
    "price_note": "Terjual 1RB+ di EDINAL Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 21,
    "spill_number": 21,
    "seo_title": "EDINAL workhiet enggineer kemeja kancing sternco • Rekomendasi Ze Shopee",
    "seo_description": "Beli EDINAL workhiet enggineer kemeja kancing sternco harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 242,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-55650935882-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1620012253295-c15c429f60cb?q=80&w=900&auto=format&fit=crop",
        "alt_text": "EDINAL workhiet enggineer kemeja kancing sternco",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-22966636743",
    "name": "WESTGODS - Jacket Retro Vintage Bahan Parasut Pria Wanita size M L XL",
    "slug": "westgods---jacket-retro-vintage-bahan-parasut-6743",
    "short_description": "Rekomendasi WESTGODS - Jacket Retro Vintage Bahan Parasut Pria Wanita size M L XL pilihan Ze di Shopee. Terjual 10RB+ di Westgods Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Westgods Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Westgods Official Store\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller",
      "vintage"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/3B898fOuD8",
    "price": 115000,
    "original_price": 167000,
    "price_note": "Terjual 10RB+ di Westgods Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 22,
    "spill_number": 22,
    "seo_title": "WESTGODS - Jacket Retro Vintage Bahan Parasut Pria Wanita size M L XL • Rekomendasi Ze Shopee",
    "seo_description": "Beli WESTGODS - Jacket Retro Vintage Bahan Parasut Pria Wanita size M L XL harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 94,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-22966636743-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=900&auto=format&fit=crop",
        "alt_text": "WESTGODS - Jacket Retro Vintage Bahan Parasut Pria Wanita size M L XL",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-46400579072",
    "name": "SUYX Celana Cargo Pants pria Loose Reguler Celana untuk Santai & Outdoor Long Celana Panjang pria",
    "slug": "suyx-celana-cargo-pants-pria-loose-reguler-ce-9072",
    "short_description": "Rekomendasi SUYX Celana Cargo Pants pria Loose Reguler Celana untuk Santai & Outdoor Long Celana Panjang pria pilihan Ze di Shopee. Terjual 1RB+ di Suyx Authorized Store Subang dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **1RB+** di toko **Suyx Authorized Store Subang** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Suyx Authorized Store Subang\n* **Performa Penjualan:** 1RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/30oiwMPXY7",
    "price": 166000,
    "original_price": 241000,
    "price_note": "Terjual 1RB+ di Suyx Authorized Store Subang • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 23,
    "spill_number": 23,
    "seo_title": "SUYX Celana Cargo Pants pria Loose Reguler Celana untuk Santai & Outdoor Long Celana Panjang pria • Rekomendasi Ze Shopee",
    "seo_description": "Beli SUYX Celana Cargo Pants pria Loose Reguler Celana untuk Santai & Outdoor Long Celana Panjang pria harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 92,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-46400579072-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=900&auto=format&fit=crop",
        "alt_text": "SUYX Celana Cargo Pants pria Loose Reguler Celana untuk Santai & Outdoor Long Celana Panjang pria",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-56956502851",
    "name": "Vsl Sweater Oversize Pria Wanita Graphic Black Grey -  Streetwear Korea Style Urban  Fleece Unisex Crewneck",
    "slug": "vsl-sweater-oversize-pria-wanita-graphic-blac-2851",
    "short_description": "Rekomendasi Vsl Sweater Oversize Pria Wanita Graphic Black Grey -  Streetwear Korea Style Urban  Fleece Unisex Crewneck pilihan Ze di Shopee. Terjual 10RB+ di Visualclothing dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Visualclothing** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Visualclothing\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/7VH8Id8PQ0",
    "price": 65600,
    "original_price": 95000,
    "price_note": "Terjual 10RB+ di Visualclothing • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 24,
    "spill_number": 24,
    "seo_title": "Vsl Sweater Oversize Pria Wanita Graphic Black Grey -  Streetwear Korea Style Urban  Fleece Unisex Crewneck • Rekomendasi Ze Shopee",
    "seo_description": "Beli Vsl Sweater Oversize Pria Wanita Graphic Black Grey -  Streetwear Korea Style Urban  Fleece Unisex Crewneck harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 191,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-56956502851-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Vsl Sweater Oversize Pria Wanita Graphic Black Grey -  Streetwear Korea Style Urban  Fleece Unisex Crewneck",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-27393547648",
    "name": "Benidson Aerysm Kaos Oversized T-Shirt Polos",
    "slug": "benidson-aerysm-kaos-oversized-t-shirt-polos-7648",
    "short_description": "Rekomendasi Benidson Aerysm Kaos Oversized T-Shirt Polos pilihan Ze di Shopee. Terjual 10RB+ di BENIDSON Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **BENIDSON Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** BENIDSON Official Shop\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/7Kxi6K92kz",
    "price": 79900,
    "original_price": 116000,
    "price_note": "Terjual 10RB+ di BENIDSON Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 25,
    "spill_number": 25,
    "seo_title": "Benidson Aerysm Kaos Oversized T-Shirt Polos • Rekomendasi Ze Shopee",
    "seo_description": "Beli Benidson Aerysm Kaos Oversized T-Shirt Polos harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 245,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-27393547648-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Benidson Aerysm Kaos Oversized T-Shirt Polos",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-28950443474",
    "name": "WESTGODS - Jaket Tracksuit Running Vintage Casual Olahraga Pria Wanita Bahan Parasut",
    "slug": "westgods---jaket-tracksuit-running-vintage-ca-3474",
    "short_description": "Rekomendasi WESTGODS - Jaket Tracksuit Running Vintage Casual Olahraga Pria Wanita Bahan Parasut pilihan Ze di Shopee. Terjual 10RB+ di Westgods Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Westgods Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Westgods Official Store\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller",
      "vintage"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/7ptyhF78k6",
    "price": 110600,
    "original_price": 160000,
    "price_note": "Terjual 10RB+ di Westgods Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 26,
    "spill_number": 26,
    "seo_title": "WESTGODS - Jaket Tracksuit Running Vintage Casual Olahraga Pria Wanita Bahan Parasut • Rekomendasi Ze Shopee",
    "seo_description": "Beli WESTGODS - Jaket Tracksuit Running Vintage Casual Olahraga Pria Wanita Bahan Parasut harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 256,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-28950443474-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=900&auto=format&fit=crop",
        "alt_text": "WESTGODS - Jaket Tracksuit Running Vintage Casual Olahraga Pria Wanita Bahan Parasut",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-50550553635",
    "name": "SUYX Celana Jeans Pria Panjang Korean Stlye Loose Pants Reguler Celana Gombrang Straight Jeans Pria",
    "slug": "suyx-celana-jeans-pria-panjang-korean-stlye-l-3635",
    "short_description": "Rekomendasi SUYX Celana Jeans Pria Panjang Korean Stlye Loose Pants Reguler Celana Gombrang Straight Jeans Pria pilihan Ze di Shopee. Terjual 4RB+ di Suyx Authorized Store Subang dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **4RB+** di toko **Suyx Authorized Store Subang** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Suyx Authorized Store Subang\n* **Performa Penjualan:** 4RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-korean-style",
    "tags": [
      "shopee",
      "racunshopee",
      "korean-style",
      "men",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/7faYUw7m55",
    "price": 166000,
    "original_price": 241000,
    "price_note": "Terjual 4RB+ di Suyx Authorized Store Subang • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 27,
    "spill_number": 27,
    "seo_title": "SUYX Celana Jeans Pria Panjang Korean Stlye Loose Pants Reguler Celana Gombrang Straight Jeans Pria • Rekomendasi Ze Shopee",
    "seo_description": "Beli SUYX Celana Jeans Pria Panjang Korean Stlye Loose Pants Reguler Celana Gombrang Straight Jeans Pria harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 240,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-50550553635-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=900&auto=format&fit=crop",
        "alt_text": "SUYX Celana Jeans Pria Panjang Korean Stlye Loose Pants Reguler Celana Gombrang Straight Jeans Pria",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-40779739883",
    "name": "[ UNISEX ] Celana Baggy Jeans Kulot Tulang Biru Premium Highwaist Loose Lipat Bawah Vintage - Celana Jeans Panjang Wanita Terlaris!",
    "slug": "unisex-celana-baggy-jeans-kulot-tulang-biru-p-9883",
    "short_description": "Rekomendasi [ UNISEX ] Celana Baggy Jeans Kulot Tulang Biru Premium Highwaist Loose Lipat Bawah Vintage - Celana Jeans Panjang Wanita Terlaris! pilihan Ze di Shopee. Terjual 10RB+ di ZeeRJeans Collection dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **ZeeRJeans Collection** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** ZeeRJeans Collection\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-wanita",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-wanita",
      "women",
      "bestseller",
      "vintage"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/6q1RVPAwlw",
    "price": 56400,
    "original_price": 82000,
    "price_note": "Terjual 10RB+ di ZeeRJeans Collection • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 28,
    "spill_number": 28,
    "seo_title": "[ UNISEX ] Celana Baggy Jeans Kulot Tulang Biru Premium Highwaist Loose Lipat Bawah Vintage - Celana Jeans Panjang Wanita Terlaris! • Rekomendasi Ze Shopee",
    "seo_description": "Beli [ UNISEX ] Celana Baggy Jeans Kulot Tulang Biru Premium Highwaist Loose Lipat Bawah Vintage - Celana Jeans Panjang Wanita Terlaris! harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 316,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-40779739883-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=900&auto=format&fit=crop",
        "alt_text": "[ UNISEX ] Celana Baggy Jeans Kulot Tulang Biru Premium Highwaist Loose Lipat Bawah Vintage - Celana Jeans Panjang Wanita Terlaris!",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-57910368043",
    "name": "EDINAL Workhiet kemeja tangan pendek polos581",
    "slug": "edinal-workhiet-kemeja-tangan-pendek-polos581-8043",
    "short_description": "Rekomendasi EDINAL Workhiet kemeja tangan pendek polos581 pilihan Ze di Shopee. Terjual 619 di EDINAL Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **619** di toko **EDINAL Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** EDINAL Official Store\n* **Performa Penjualan:** 619 terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/6fi1J6Ba6v",
    "price": 105000,
    "original_price": 152000,
    "price_note": "Terjual 619 di EDINAL Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 29,
    "spill_number": 29,
    "seo_title": "EDINAL Workhiet kemeja tangan pendek polos581 • Rekomendasi Ze Shopee",
    "seo_description": "Beli EDINAL Workhiet kemeja tangan pendek polos581 harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 266,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-57910368043-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=900&auto=format&fit=crop",
        "alt_text": "EDINAL Workhiet kemeja tangan pendek polos581",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-27801847947",
    "name": "Jacket Trecktop Hand Jaket Vintage Tracksuit Pria Wanita",
    "slug": "jacket-trecktop-hand-jaket-vintage-tracksuit--7947",
    "short_description": "Rekomendasi Jacket Trecktop Hand Jaket Vintage Tracksuit Pria Wanita pilihan Ze di Shopee. Terjual 10RB+ di Zey's Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Zey's Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Zey's Store\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller",
      "vintage"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/7AeHu19g62",
    "price": 117000,
    "original_price": 170000,
    "price_note": "Terjual 10RB+ di Zey's Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 30,
    "spill_number": 30,
    "seo_title": "Jacket Trecktop Hand Jaket Vintage Tracksuit Pria Wanita • Rekomendasi Ze Shopee",
    "seo_description": "Beli Jacket Trecktop Hand Jaket Vintage Tracksuit Pria Wanita harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 80,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-27801847947-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Jacket Trecktop Hand Jaket Vintage Tracksuit Pria Wanita",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-19083436149",
    "name": "Baju Gamis Dress Muslim Wanita Terbaru Busui Jumbo Size S - 3XL Shirin Zein Thalia",
    "slug": "baju-gamis-dress-muslim-wanita-terbaru-busui--6149",
    "short_description": "Rekomendasi Baju Gamis Dress Muslim Wanita Terbaru Busui Jumbo Size S - 3XL Shirin Zein Thalia pilihan Ze di Shopee. Terjual 10RB+ di Shirin Zein Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Shirin Zein Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Shirin Zein Official Store\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-hijab-friendly",
    "tags": [
      "shopee",
      "racunshopee",
      "hijab-friendly",
      "women",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/70KrhiAJR1",
    "price": 128700,
    "original_price": 187000,
    "price_note": "Terjual 10RB+ di Shirin Zein Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 31,
    "spill_number": 31,
    "seo_title": "Baju Gamis Dress Muslim Wanita Terbaru Busui Jumbo Size S - 3XL Shirin Zein Thalia • Rekomendasi Ze Shopee",
    "seo_description": "Beli Baju Gamis Dress Muslim Wanita Terbaru Busui Jumbo Size S - 3XL Shirin Zein Thalia harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 109,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-19083436149-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Baju Gamis Dress Muslim Wanita Terbaru Busui Jumbo Size S - 3XL Shirin Zein Thalia",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-24926295909",
    "name": "Sweater Rugby halfz zipper stripe terbaru sweater kerah CREWNECK Loseangels pria wanita",
    "slug": "sweater-rugby-halfz-zipper-stripe-terbaru-swe-5909",
    "short_description": "Rekomendasi Sweater Rugby halfz zipper stripe terbaru sweater kerah CREWNECK Loseangels pria wanita pilihan Ze di Shopee. Terjual 10RB+ di SUPPLAYER SWEATER dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **SUPPLAYER SWEATER** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** SUPPLAYER SWEATER\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/6AlkiBDU7s",
    "price": 50000,
    "original_price": 73000,
    "price_note": "Terjual 10RB+ di SUPPLAYER SWEATER • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Rugby Retro",
    "status": "published",
    "sort_order": 32,
    "spill_number": 32,
    "seo_title": "Sweater Rugby halfz zipper stripe terbaru sweater kerah CREWNECK Loseangels pria wanita • Rekomendasi Ze Shopee",
    "seo_description": "Beli Sweater Rugby halfz zipper stripe terbaru sweater kerah CREWNECK Loseangels pria wanita harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 214,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-24926295909-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Sweater Rugby halfz zipper stripe terbaru sweater kerah CREWNECK Loseangels pria wanita",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-52208967728",
    "name": "Kemeja Casual Pria Wanita Lengan Pendek Motif SEMN Katun Outfit Santai",
    "slug": "kemeja-casual-pria-wanita-lengan-pendek-motif-7728",
    "short_description": "Rekomendasi Kemeja Casual Pria Wanita Lengan Pendek Motif SEMN Katun Outfit Santai pilihan Ze di Shopee. Terjual 3RB+ di Anti Noda dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **3RB+** di toko **Anti Noda** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Anti Noda\n* **Performa Penjualan:** 3RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/60SKVsE7Sr",
    "price": 54400,
    "original_price": 79000,
    "price_note": "Terjual 3RB+ di Anti Noda • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 33,
    "spill_number": 33,
    "seo_title": "Kemeja Casual Pria Wanita Lengan Pendek Motif SEMN Katun Outfit Santai • Rekomendasi Ze Shopee",
    "seo_description": "Beli Kemeja Casual Pria Wanita Lengan Pendek Motif SEMN Katun Outfit Santai harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 151,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-52208967728-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Kemeja Casual Pria Wanita Lengan Pendek Motif SEMN Katun Outfit Santai",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-26078098410",
    "name": "Sai - Crown Work Jackets Denim Boxy Trucker Jacket Denim",
    "slug": "sai---crown-work-jackets-denim-boxy-trucker-j-8410",
    "short_description": "Rekomendasi Sai - Crown Work Jackets Denim Boxy Trucker Jacket Denim pilihan Ze di Shopee. Terjual 2RB+ di SAI Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **2RB+** di toko **SAI Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** SAI Official Shop\n* **Performa Penjualan:** 2RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending",
      "boxy"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/6VOb6nCDRy",
    "price": 148000,
    "original_price": 215000,
    "price_note": "Terjual 2RB+ di SAI Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Skena Boxy",
    "status": "published",
    "sort_order": 34,
    "spill_number": 34,
    "seo_title": "Sai - Crown Work Jackets Denim Boxy Trucker Jacket Denim • Rekomendasi Ze Shopee",
    "seo_description": "Beli Sai - Crown Work Jackets Denim Boxy Trucker Jacket Denim harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 251,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-26078098410-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Sai - Crown Work Jackets Denim Boxy Trucker Jacket Denim",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-29115404383",
    "name": "SANDAL SLOP NY mlb || sandal slip-on pria&wania KUALITAS PREMIUM ,ENAK DIPAKEK NYAMAN DI KAKI,,!!!!",
    "slug": "sandal-slop-ny-mlb-sandal-slip-on-priawania-k-4383",
    "short_description": "Rekomendasi SANDAL SLOP NY mlb || sandal slip-on pria&wania KUALITAS PREMIUM ,ENAK DIPAKEK NYAMAN DI KAKI,,!!!! pilihan Ze di Shopee. Terjual 10RB+ di SANDAL SLOP 1992 dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **SANDAL SLOP 1992** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** SANDAL SLOP 1992\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-bags-shoes",
    "tags": [
      "shopee",
      "racunshopee",
      "bags-shoes",
      "men",
      "bestseller",
      "under50k"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/6L5AuUCqmx",
    "price": 49000,
    "original_price": 71000,
    "price_note": "Terjual 10RB+ di SANDAL SLOP 1992 • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Under 50k 💸",
    "status": "published",
    "sort_order": 35,
    "spill_number": 35,
    "seo_title": "SANDAL SLOP NY mlb || sandal slip-on pria&wania KUALITAS PREMIUM ,ENAK DIPAKEK NYAMAN DI KAKI,,!!!! • Rekomendasi Ze Shopee",
    "seo_description": "Beli SANDAL SLOP NY mlb || sandal slip-on pria&wania KUALITAS PREMIUM ,ENAK DIPAKEK NYAMAN DI KAKI,,!!!! harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 243,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-29115404383-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=900&auto=format&fit=crop",
        "alt_text": "SANDAL SLOP NY mlb || sandal slip-on pria&wania KUALITAS PREMIUM ,ENAK DIPAKEK NYAMAN DI KAKI,,!!!!",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-21704813154",
    "name": "House of Smith Sweater Hoodie Pria - Lpl Misty #50",
    "slug": "house-of-smith-sweater-hoodie-pria---lpl-mist-3154",
    "short_description": "Rekomendasi House of Smith Sweater Hoodie Pria - Lpl Misty #50 pilihan Ze di Shopee. Terjual 10RB+ di House Of Smith Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **House Of Smith Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** House Of Smith Official Shop\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/5VW3uxG1To",
    "price": 239000,
    "original_price": 347000,
    "price_note": "Terjual 10RB+ di House Of Smith Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 36,
    "spill_number": 36,
    "seo_title": "House of Smith Sweater Hoodie Pria - Lpl Misty #50 • Rekomendasi Ze Shopee",
    "seo_description": "Beli House of Smith Sweater Hoodie Pria - Lpl Misty #50 harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 239,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-21704813154-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=900&auto=format&fit=crop",
        "alt_text": "House of Smith Sweater Hoodie Pria - Lpl Misty #50",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-26974778993",
    "name": "Piliana Kemeja Pria Lengan Pendek Oversize Brown Kemeja Boxy",
    "slug": "piliana-kemeja-pria-lengan-pendek-oversize-br-8993",
    "short_description": "Rekomendasi Piliana Kemeja Pria Lengan Pendek Oversize Brown Kemeja Boxy pilihan Ze di Shopee. Terjual 10RB+ di Piliana. dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Piliana.** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Piliana.\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "bestseller",
      "boxy"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/5LCdieGeon",
    "price": 148800,
    "original_price": 216000,
    "price_note": "Terjual 10RB+ di Piliana. • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Skena Boxy",
    "status": "published",
    "sort_order": 37,
    "spill_number": 37,
    "seo_title": "Piliana Kemeja Pria Lengan Pendek Oversize Brown Kemeja Boxy • Rekomendasi Ze Shopee",
    "seo_description": "Beli Piliana Kemeja Pria Lengan Pendek Oversize Brown Kemeja Boxy harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 209,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-26974778993-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Piliana Kemeja Pria Lengan Pendek Oversize Brown Kemeja Boxy",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-11451261596",
    "name": "X Urband Absolute Jaket Varsity fleece Embroidery",
    "slug": "x-urband-absolute-jaket-varsity-fleece-embroi-1596",
    "short_description": "Rekomendasi X Urband Absolute Jaket Varsity fleece Embroidery pilihan Ze di Shopee. Terjual 7RB+ di X Urband Absolute Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **7RB+** di toko **X Urband Absolute Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** X Urband Absolute Official Shop\n* **Performa Penjualan:** 7RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/5q8uJZEknu",
    "price": 149300,
    "original_price": 216000,
    "price_note": "Terjual 7RB+ di X Urband Absolute Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 38,
    "spill_number": 38,
    "seo_title": "X Urband Absolute Jaket Varsity fleece Embroidery • Rekomendasi Ze Shopee",
    "seo_description": "Beli X Urband Absolute Jaket Varsity fleece Embroidery harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 207,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-11451261596-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=900&auto=format&fit=crop",
        "alt_text": "X Urband Absolute Jaket Varsity fleece Embroidery",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-25155891835",
    "name": "SWEATER SALUR NY BROOKLYN SWEATER RUGBY WANGKI PRIA WANITA",
    "slug": "sweater-salur-ny-brooklyn-sweater-rugby-wangk-1835",
    "short_description": "Rekomendasi SWEATER SALUR NY BROOKLYN SWEATER RUGBY WANGKI PRIA WANITA pilihan Ze di Shopee. Terjual 10RB+ di SHAFIA_ID dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **SHAFIA_ID** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** SHAFIA_ID\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/5fpU7GFO8t",
    "price": 56700,
    "original_price": 82000,
    "price_note": "Terjual 10RB+ di SHAFIA_ID • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Rugby Retro",
    "status": "published",
    "sort_order": 39,
    "spill_number": 39,
    "seo_title": "SWEATER SALUR NY BROOKLYN SWEATER RUGBY WANGKI PRIA WANITA • Rekomendasi Ze Shopee",
    "seo_description": "Beli SWEATER SALUR NY BROOKLYN SWEATER RUGBY WANGKI PRIA WANITA harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 263,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-25155891835-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=900&auto=format&fit=crop",
        "alt_text": "SWEATER SALUR NY BROOKLYN SWEATER RUGBY WANGKI PRIA WANITA",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-42013794434",
    "name": "JOHNJILL - Essential Half-Zip",
    "slug": "johnjill---essential-half-zip-4434",
    "short_description": "Rekomendasi JOHNJILL - Essential Half-Zip pilihan Ze di Shopee. Terjual 1RB+ di JOHN & JILL Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **1RB+** di toko **JOHN & JILL Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** JOHN & JILL Official Store\n* **Performa Penjualan:** 1RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/AAHtTWyG0m",
    "price": 233500,
    "original_price": 339000,
    "price_note": "Terjual 1RB+ di JOHN & JILL Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 40,
    "spill_number": 40,
    "seo_title": "JOHNJILL - Essential Half-Zip • Rekomendasi Ze Shopee",
    "seo_description": "Beli JOHNJILL - Essential Half-Zip harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 278,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-42013794434-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=900&auto=format&fit=crop",
        "alt_text": "JOHNJILL - Essential Half-Zip",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-43607112861",
    "name": "YAZR Kaos Boxy Oversized Hihhoppunks BLURRED PORTRAIT T-Shirt PUTIH Unisex Cotton Combed 24s",
    "slug": "yazr-kaos-boxy-oversized-hihhoppunks-blurred--2861",
    "short_description": "Rekomendasi YAZR Kaos Boxy Oversized Hihhoppunks BLURRED PORTRAIT T-Shirt PUTIH Unisex Cotton Combed 24s pilihan Ze di Shopee. Terjual 4RB+ di YAZR Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **4RB+** di toko **YAZR Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** YAZR Official Store\n* **Performa Penjualan:** 4RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending",
      "boxy"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/9zyTHDytLl",
    "price": 59000,
    "original_price": 86000,
    "price_note": "Terjual 4RB+ di YAZR Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Skena Boxy",
    "status": "published",
    "sort_order": 41,
    "spill_number": 41,
    "seo_title": "YAZR Kaos Boxy Oversized Hihhoppunks BLURRED PORTRAIT T-Shirt PUTIH Unisex Cotton Combed 24s • Rekomendasi Ze Shopee",
    "seo_description": "Beli YAZR Kaos Boxy Oversized Hihhoppunks BLURRED PORTRAIT T-Shirt PUTIH Unisex Cotton Combed 24s harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 124,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-43607112861-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=900&auto=format&fit=crop",
        "alt_text": "YAZR Kaos Boxy Oversized Hihhoppunks BLURRED PORTRAIT T-Shirt PUTIH Unisex Cotton Combed 24s",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-42057615572",
    "name": "Weister Work Jacket Boxy Navy - The Liquid Of Armor",
    "slug": "weister-work-jacket-boxy-navy---the-liquid-of-5572",
    "short_description": "Rekomendasi Weister Work Jacket Boxy Navy - The Liquid Of Armor pilihan Ze di Shopee. Terjual 1RB+ di WEISTER OFFICIAL STORE dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **1RB+** di toko **WEISTER OFFICIAL STORE** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** WEISTER OFFICIAL STORE\n* **Performa Penjualan:** 1RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending",
      "boxy"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/AUujs8wzKs",
    "price": 200000,
    "original_price": 290000,
    "price_note": "Terjual 1RB+ di WEISTER OFFICIAL STORE • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Skena Boxy",
    "status": "published",
    "sort_order": 42,
    "spill_number": 42,
    "seo_title": "Weister Work Jacket Boxy Navy - The Liquid Of Armor • Rekomendasi Ze Shopee",
    "seo_description": "Beli Weister Work Jacket Boxy Navy - The Liquid Of Armor harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 306,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-42057615572-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1620012253295-c15c429f60cb?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Weister Work Jacket Boxy Navy - The Liquid Of Armor",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-57959944366",
    "name": "[KHUSUS PROMO] Minyak Goreng Rose Brand 1L",
    "slug": "khusus-promo-minyak-goreng-rose-brand-1l-4366",
    "short_description": "Rekomendasi [KHUSUS PROMO] Minyak Goreng Rose Brand 1L pilihan Ze di Shopee. Terjual 0 di LOPIW SHOP dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **0** di toko **LOPIW SHOP** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** LOPIW SHOP\n* **Performa Penjualan:** 0 terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending",
      "under50k"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/AKbJfpxcfr",
    "price": 1100,
    "original_price": 2000,
    "price_note": "Terjual 0 di LOPIW SHOP • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Under 50k 💸",
    "status": "published",
    "sort_order": 43,
    "spill_number": 43,
    "seo_title": "[KHUSUS PROMO] Minyak Goreng Rose Brand 1L • Rekomendasi Ze Shopee",
    "seo_description": "Beli [KHUSUS PROMO] Minyak Goreng Rose Brand 1L harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 122,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-57959944366-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=900&auto=format&fit=crop",
        "alt_text": "[KHUSUS PROMO] Minyak Goreng Rose Brand 1L",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-26226227964",
    "name": "Sandal Pantai Wanita Sandal EVA Tebal Anti-Selip Dalam Ruangan 5CM Sandal Pantai Wanita",
    "slug": "sandal-pantai-wanita-sandal-eva-tebal-anti-se-7964",
    "short_description": "Rekomendasi Sandal Pantai Wanita Sandal EVA Tebal Anti-Selip Dalam Ruangan 5CM Sandal Pantai Wanita pilihan Ze di Shopee. Terjual 10RB+ di BDD Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **BDD Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** BDD Official Store\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-bags-shoes",
    "tags": [
      "shopee",
      "racunshopee",
      "bags-shoes",
      "women",
      "bestseller",
      "under50k"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/9V2CgJ0nMi",
    "price": 48000,
    "original_price": 70000,
    "price_note": "Terjual 10RB+ di BDD Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Under 50k 💸",
    "status": "published",
    "sort_order": 44,
    "spill_number": 44,
    "seo_title": "Sandal Pantai Wanita Sandal EVA Tebal Anti-Selip Dalam Ruangan 5CM Sandal Pantai Wanita • Rekomendasi Ze Shopee",
    "seo_description": "Beli Sandal Pantai Wanita Sandal EVA Tebal Anti-Selip Dalam Ruangan 5CM Sandal Pantai Wanita harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 167,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-26226227964-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Sandal Pantai Wanita Sandal EVA Tebal Anti-Selip Dalam Ruangan 5CM Sandal Pantai Wanita",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-29637782631",
    "name": "Kemeja Boxy Lengan Pendek Oversized Bahan Oxford",
    "slug": "kemeja-boxy-lengan-pendek-oversized-bahan-oxf-2631",
    "short_description": "Rekomendasi Kemeja Boxy Lengan Pendek Oversized Bahan Oxford pilihan Ze di Shopee. Terjual 10RB+ di Streetstore27 dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Streetstore27** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Streetstore27\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller",
      "boxy",
      "under50k"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/9KimU01Qhh",
    "price": 36000,
    "original_price": 52000,
    "price_note": "Terjual 10RB+ di Streetstore27 • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Skena Boxy",
    "status": "published",
    "sort_order": 45,
    "spill_number": 45,
    "seo_title": "Kemeja Boxy Lengan Pendek Oversized Bahan Oxford • Rekomendasi Ze Shopee",
    "seo_description": "Beli Kemeja Boxy Lengan Pendek Oversized Bahan Oxford harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 280,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-29637782631-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Kemeja Boxy Lengan Pendek Oversized Bahan Oxford",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-12675925841",
    "name": "ANTARESTAR Official - Jaket Gorpcore Manusela Waterproof Jaket Pria Wanita Hiking Gunung Windbreaker Outdoor",
    "slug": "antarestar-official---jaket-gorpcore-manusela-5841",
    "short_description": "Rekomendasi ANTARESTAR Official - Jaket Gorpcore Manusela Waterproof Jaket Pria Wanita Hiking Gunung Windbreaker Outdoor pilihan Ze di Shopee. Terjual 10RB+ di Antarestar Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Antarestar Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Antarestar Official Shop\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/9pf34uzWgo",
    "price": 385000,
    "original_price": 558000,
    "price_note": "Terjual 10RB+ di Antarestar Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Gorpcore Kalcer",
    "status": "published",
    "sort_order": 46,
    "spill_number": 46,
    "seo_title": "ANTARESTAR Official - Jaket Gorpcore Manusela Waterproof Jaket Pria Wanita Hiking Gunung Windbreaker Outdoor • Rekomendasi Ze Shopee",
    "seo_description": "Beli ANTARESTAR Official - Jaket Gorpcore Manusela Waterproof Jaket Pria Wanita Hiking Gunung Windbreaker Outdoor harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 216,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-12675925841-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=900&auto=format&fit=crop",
        "alt_text": "ANTARESTAR Official - Jaket Gorpcore Manusela Waterproof Jaket Pria Wanita Hiking Gunung Windbreaker Outdoor",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-41830356970",
    "name": "(Buy 1 Get 1) Scarlite Perfume Unisex 30ml",
    "slug": "buy-1-get-1-scarlite-perfume-unisex-30ml-6970",
    "short_description": "Rekomendasi (Buy 1 Get 1) Scarlite Perfume Unisex 30ml pilihan Ze di Shopee. Terjual 10RB+ di Eterna.Id dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Eterna.Id** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Eterna.Id\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-skincare-grooming",
    "tags": [
      "shopee",
      "racunshopee",
      "skincare-grooming",
      "unisex",
      "bestseller",
      "under50k"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/9fLcsc0A1n",
    "price": 13000,
    "original_price": 19000,
    "price_note": "Terjual 10RB+ di Eterna.Id • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Aroma Mewah",
    "status": "published",
    "sort_order": 47,
    "spill_number": 47,
    "seo_title": "(Buy 1 Get 1) Scarlite Perfume Unisex 30ml • Rekomendasi Ze Shopee",
    "seo_description": "Beli (Buy 1 Get 1) Scarlite Perfume Unisex 30ml harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 174,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-41830356970-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=900&auto=format&fit=crop",
        "alt_text": "(Buy 1 Get 1) Scarlite Perfume Unisex 30ml",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-53809619454",
    "name": "CELANA JEANS BAGGY PUTIH UNISEX RETRO BAHAN PREMIUM LOOSE BASIC DENIM TEBAL ANTI MELAR",
    "slug": "celana-jeans-baggy-putih-unisex-retro-bahan-p-9454",
    "short_description": "Rekomendasi CELANA JEANS BAGGY PUTIH UNISEX RETRO BAHAN PREMIUM LOOSE BASIC DENIM TEBAL ANTI MELAR pilihan Ze di Shopee. Terjual 1RB+ di HyLuxe.Id dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **1RB+** di toko **HyLuxe.Id** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** HyLuxe.Id\n* **Performa Penjualan:** 1RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/8pmVt53Kie",
    "price": 60000,
    "original_price": 87000,
    "price_note": "Terjual 1RB+ di HyLuxe.Id • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 48,
    "spill_number": 48,
    "seo_title": "CELANA JEANS BAGGY PUTIH UNISEX RETRO BAHAN PREMIUM LOOSE BASIC DENIM TEBAL ANTI MELAR • Rekomendasi Ze Shopee",
    "seo_description": "Beli CELANA JEANS BAGGY PUTIH UNISEX RETRO BAHAN PREMIUM LOOSE BASIC DENIM TEBAL ANTI MELAR harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 300,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-53809619454-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=900&auto=format&fit=crop",
        "alt_text": "CELANA JEANS BAGGY PUTIH UNISEX RETRO BAHAN PREMIUM LOOSE BASIC DENIM TEBAL ANTI MELAR",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-18266163580",
    "name": "Qwertylife Workshirt Engineers Black",
    "slug": "qwertylife-workshirt-engineers-black-3580",
    "short_description": "Rekomendasi Qwertylife Workshirt Engineers Black pilihan Ze di Shopee. Terjual 10RB+ di Qwertylife Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Qwertylife Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Qwertylife Official Shop\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/8fT5gm3y3d",
    "price": 125100,
    "original_price": 181000,
    "price_note": "Terjual 10RB+ di Qwertylife Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 49,
    "spill_number": 49,
    "seo_title": "Qwertylife Workshirt Engineers Black • Rekomendasi Ze Shopee",
    "seo_description": "Beli Qwertylife Workshirt Engineers Black harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 260,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-18266163580-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Qwertylife Workshirt Engineers Black",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-22270078342",
    "name": "Russ Jaket Zipper Parasut Trois Black",
    "slug": "russ-jaket-zipper-parasut-trois-black-8342",
    "short_description": "Rekomendasi Russ Jaket Zipper Parasut Trois Black pilihan Ze di Shopee. Terjual 3RB+ di Russ & Co Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **3RB+** di toko **Russ & Co Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Russ & Co Official Shop\n* **Performa Penjualan:** 3RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/9APMHh242k",
    "price": 258900,
    "original_price": 375000,
    "price_note": "Terjual 3RB+ di Russ & Co Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 50,
    "spill_number": 50,
    "seo_title": "Russ Jaket Zipper Parasut Trois Black • Rekomendasi Ze Shopee",
    "seo_description": "Beli Russ Jaket Zipper Parasut Trois Black harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 237,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-22270078342-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Russ Jaket Zipper Parasut Trois Black",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-21787596053",
    "name": "HPND - Sweater Hoodie Boxy Fit Original Basic Stars Fleece Limited Edition",
    "slug": "hpnd---sweater-hoodie-boxy-fit-original-basic-6053",
    "short_description": "Rekomendasi HPND - Sweater Hoodie Boxy Fit Original Basic Stars Fleece Limited Edition pilihan Ze di Shopee. Terjual 1RB+ di Happend official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **1RB+** di toko **Happend official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Happend official Store\n* **Performa Penjualan:** 1RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending",
      "boxy"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/905w5O2hNj",
    "price": 117900,
    "original_price": 171000,
    "price_note": "Terjual 1RB+ di Happend official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Skena Boxy",
    "status": "published",
    "sort_order": 51,
    "spill_number": 51,
    "seo_title": "HPND - Sweater Hoodie Boxy Fit Original Basic Stars Fleece Limited Edition • Rekomendasi Ze Shopee",
    "seo_description": "Beli HPND - Sweater Hoodie Boxy Fit Original Basic Stars Fleece Limited Edition harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 313,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-21787596053-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=900&auto=format&fit=crop",
        "alt_text": "HPND - Sweater Hoodie Boxy Fit Original Basic Stars Fleece Limited Edition",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-42552620526",
    "name": "OSANAWEAR Celana Pria Formal Loose Pants Cream",
    "slug": "osanawear-celana-pria-formal-loose-pants-crea-0526",
    "short_description": "Rekomendasi OSANAWEAR Celana Pria Formal Loose Pants Cream pilihan Ze di Shopee. Terjual 10RB+ di OSANAWEAR Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **OSANAWEAR Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** OSANAWEAR Official Store\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/8AWp5r5s4a",
    "price": 119900,
    "original_price": 174000,
    "price_note": "Terjual 10RB+ di OSANAWEAR Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 52,
    "spill_number": 52,
    "seo_title": "OSANAWEAR Celana Pria Formal Loose Pants Cream • Rekomendasi Ze Shopee",
    "seo_description": "Beli OSANAWEAR Celana Pria Formal Loose Pants Cream harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 130,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-42552620526-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=900&auto=format&fit=crop",
        "alt_text": "OSANAWEAR Celana Pria Formal Loose Pants Cream",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-42522774928",
    "name": "kaos polo shirt pria polos zipper kerah Lengan pendek Baju Katun",
    "slug": "kaos-polo-shirt-pria-polos-zipper-kerah-lenga-4928",
    "short_description": "Rekomendasi kaos polo shirt pria polos zipper kerah Lengan pendek Baju Katun pilihan Ze di Shopee. Terjual 10RB+ di bonay_collection dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **bonay_collection** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** bonay_collection\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "bestseller",
      "under50k"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/80DOtY6VPZ",
    "price": 38000,
    "original_price": 55000,
    "price_note": "Terjual 10RB+ di bonay_collection • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Under 50k 💸",
    "status": "published",
    "sort_order": 53,
    "spill_number": 53,
    "seo_title": "kaos polo shirt pria polos zipper kerah Lengan pendek Baju Katun • Rekomendasi Ze Shopee",
    "seo_description": "Beli kaos polo shirt pria polos zipper kerah Lengan pendek Baju Katun harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 317,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-42522774928-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=900&auto=format&fit=crop",
        "alt_text": "kaos polo shirt pria polos zipper kerah Lengan pendek Baju Katun",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-28094594331",
    "name": "Kasual Refine Double Zipper Jaket Mocca",
    "slug": "kasual-refine-double-zipper-jaket-mocca-4331",
    "short_description": "Rekomendasi Kasual Refine Double Zipper Jaket Mocca pilihan Ze di Shopee. Terjual 327 di KASUAL Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **327** di toko **KASUAL Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** KASUAL Official Shop\n* **Performa Penjualan:** 327 terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/8V9fUT4bOg",
    "price": 498900,
    "original_price": 723000,
    "price_note": "Terjual 327 di KASUAL Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 54,
    "spill_number": 54,
    "seo_title": "Kasual Refine Double Zipper Jaket Mocca • Rekomendasi Ze Shopee",
    "seo_description": "Beli Kasual Refine Double Zipper Jaket Mocca harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 258,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-28094594331-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Kasual Refine Double Zipper Jaket Mocca",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-23541522096",
    "name": "Russ Sweater Hoodie Pria Oldskull Black ( Up To Big Size )",
    "slug": "russ-sweater-hoodie-pria-oldskull-black-up-to-2096",
    "short_description": "Rekomendasi Russ Sweater Hoodie Pria Oldskull Black ( Up To Big Size ) pilihan Ze di Shopee. Terjual 10RB+ di Russ & Co Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Russ & Co Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Russ & Co Official Shop\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/8KqFIA5Ejf",
    "price": 229900,
    "original_price": 333000,
    "price_note": "Terjual 10RB+ di Russ & Co Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 55,
    "spill_number": 55,
    "seo_title": "Russ Sweater Hoodie Pria Oldskull Black ( Up To Big Size ) • Rekomendasi Ze Shopee",
    "seo_description": "Beli Russ Sweater Hoodie Pria Oldskull Black ( Up To Big Size ) harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 301,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-23541522096-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Russ Sweater Hoodie Pria Oldskull Black ( Up To Big Size )",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-25781897457",
    "name": "Timebomb Cardigan Knitwear | Knit-Cardigan | CREWNECK MONTANA",
    "slug": "timebomb-cardigan-knitwear-knit-cardigan-crew-7457",
    "short_description": "Rekomendasi Timebomb Cardigan Knitwear | Knit-Cardigan | CREWNECK MONTANA pilihan Ze di Shopee. Terjual 10RB+ di timebomb_official dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **timebomb_official** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** timebomb_official\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-korean-style",
    "tags": [
      "shopee",
      "racunshopee",
      "korean-style",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/20wBkWTLaS",
    "price": 199000,
    "original_price": 289000,
    "price_note": "Terjual 10RB+ di timebomb_official • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 56,
    "spill_number": 56,
    "seo_title": "Timebomb Cardigan Knitwear | Knit-Cardigan | CREWNECK MONTANA • Rekomendasi Ze Shopee",
    "seo_description": "Beli Timebomb Cardigan Knitwear | Knit-Cardigan | CREWNECK MONTANA harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 172,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-25781897457-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Timebomb Cardigan Knitwear | Knit-Cardigan | CREWNECK MONTANA",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-28462403752",
    "name": "Kemeja Boxy Skena | Y2K | Kalcer | Streetwear",
    "slug": "kemeja-boxy-skena-y2k-kalcer-streetwear-3752",
    "short_description": "Rekomendasi Kemeja Boxy Skena | Y2K | Kalcer | Streetwear pilihan Ze di Shopee. Terjual 2RB+ di winkles.stuff dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **2RB+** di toko **winkles.stuff** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** winkles.stuff\n* **Performa Penjualan:** 2RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending",
      "skena",
      "kalcer",
      "boxy"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/2BFbwpSiFV",
    "price": 128000,
    "original_price": 186000,
    "price_note": "Terjual 2RB+ di winkles.stuff • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Skena Boxy",
    "status": "published",
    "sort_order": 57,
    "spill_number": 57,
    "seo_title": "Kemeja Boxy Skena | Y2K | Kalcer | Streetwear • Rekomendasi Ze Shopee",
    "seo_description": "Beli Kemeja Boxy Skena | Y2K | Kalcer | Streetwear harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 158,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-28462403752-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Kemeja Boxy Skena | Y2K | Kalcer | Streetwear",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-8580914011",
    "name": "X Urband Absolute Jacket Leather Sintetis Baseball",
    "slug": "x-urband-absolute-jacket-leather-sintetis-bas-4011",
    "short_description": "Rekomendasi X Urband Absolute Jacket Leather Sintetis Baseball pilihan Ze di Shopee. Terjual 2RB+ di X Urband Absolute Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **2RB+** di toko **X Urband Absolute Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** X Urband Absolute Official Shop\n* **Performa Penjualan:** 2RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/2LZ298S4uY",
    "price": 220800,
    "original_price": 320000,
    "price_note": "Terjual 2RB+ di X Urband Absolute Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 58,
    "spill_number": 58,
    "seo_title": "X Urband Absolute Jacket Leather Sintetis Baseball • Rekomendasi Ze Shopee",
    "seo_description": "Beli X Urband Absolute Jacket Leather Sintetis Baseball harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 252,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-8580914011-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=900&auto=format&fit=crop",
        "alt_text": "X Urband Absolute Jacket Leather Sintetis Baseball",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-25737688855",
    "name": "TORQUEFIT Jersey Streetwear Number 22 / Jersey Hockey / Jersey Rugby / Vintage / Jersey Olahraga Terbaru",
    "slug": "torquefit-jersey-streetwear-number-22-jersey--8855",
    "short_description": "Rekomendasi TORQUEFIT Jersey Streetwear Number 22 / Jersey Hockey / Jersey Rugby / Vintage / Jersey Olahraga Terbaru pilihan Ze di Shopee. Terjual 10RB+ di TORQUEFIT Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **TORQUEFIT Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** TORQUEFIT Official Store\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller",
      "vintage"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/2VsSLRRRZb",
    "price": 67500,
    "original_price": 98000,
    "price_note": "Terjual 10RB+ di TORQUEFIT Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Rugby Retro",
    "status": "published",
    "sort_order": 59,
    "spill_number": 59,
    "seo_title": "TORQUEFIT Jersey Streetwear Number 22 / Jersey Hockey / Jersey Rugby / Vintage / Jersey Olahraga Terbaru • Rekomendasi Ze Shopee",
    "seo_description": "Beli TORQUEFIT Jersey Streetwear Number 22 / Jersey Hockey / Jersey Rugby / Vintage / Jersey Olahraga Terbaru harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 200,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-25737688855-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=900&auto=format&fit=crop",
        "alt_text": "TORQUEFIT Jersey Streetwear Number 22 / Jersey Hockey / Jersey Rugby / Vintage / Jersey Olahraga Terbaru",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-22418362175",
    "name": "Alterous Sweater Crewneck Jaket Rugby Bordir Pria Wanita High Quality",
    "slug": "alterous-sweater-crewneck-jaket-rugby-bordir--2175",
    "short_description": "Rekomendasi Alterous Sweater Crewneck Jaket Rugby Bordir Pria Wanita High Quality pilihan Ze di Shopee. Terjual 10RB+ di ALTEROUS CONCEPT dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **ALTEROUS CONCEPT** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** ALTEROUS CONCEPT\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/1LgUxIVswO",
    "price": 105000,
    "original_price": 152000,
    "price_note": "Terjual 10RB+ di ALTEROUS CONCEPT • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Rugby Retro",
    "status": "published",
    "sort_order": 60,
    "spill_number": 60,
    "seo_title": "Alterous Sweater Crewneck Jaket Rugby Bordir Pria Wanita High Quality • Rekomendasi Ze Shopee",
    "seo_description": "Beli Alterous Sweater Crewneck Jaket Rugby Bordir Pria Wanita High Quality harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 267,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-22418362175-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Alterous Sweater Crewneck Jaket Rugby Bordir Pria Wanita High Quality",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-28916846228",
    "name": "Hemdev Tshirt Longsleeve Attachment White Tees Katun",
    "slug": "hemdev-tshirt-longsleeve-attachment-white-tee-6228",
    "short_description": "Rekomendasi Hemdev Tshirt Longsleeve Attachment White Tees Katun pilihan Ze di Shopee. Terjual 10RB+ di Hemdev Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Hemdev Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Hemdev Official Shop\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/1Vzv9bVFbR",
    "price": 104000,
    "original_price": 151000,
    "price_note": "Terjual 10RB+ di Hemdev Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 61,
    "spill_number": 61,
    "seo_title": "Hemdev Tshirt Longsleeve Attachment White Tees Katun • Rekomendasi Ze Shopee",
    "seo_description": "Beli Hemdev Tshirt Longsleeve Attachment White Tees Katun harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 328,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-28916846228-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Hemdev Tshirt Longsleeve Attachment White Tees Katun",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-19170108115",
    "name": "( COD ) jaket winter kembung tebal musim dingin/ hiking/ motoran",
    "slug": "cod-jaket-winter-kembung-tebal-musim-dingin-h-8115",
    "short_description": "Rekomendasi ( COD ) jaket winter kembung tebal musim dingin/ hiking/ motoran pilihan Ze di Shopee. Terjual 10RB+ di ahmadqllshop02 dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **ahmadqllshop02** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** ahmadqllshop02\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/1gJLLuUcGU",
    "price": 100600,
    "original_price": 146000,
    "price_note": "Terjual 10RB+ di ahmadqllshop02 • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 62,
    "spill_number": 62,
    "seo_title": "( COD ) jaket winter kembung tebal musim dingin/ hiking/ motoran • Rekomendasi Ze Shopee",
    "seo_description": "Beli ( COD ) jaket winter kembung tebal musim dingin/ hiking/ motoran harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 270,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-19170108115-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=900&auto=format&fit=crop",
        "alt_text": "( COD ) jaket winter kembung tebal musim dingin/ hiking/ motoran",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-47358633351",
    "name": "JERSEY \" ENGLAND OASIS\" | UNISEX | JERSEYRETRO | JERSEYCASUAL",
    "slug": "jersey-england-oasis-unisex-jerseyretro-jerse-3351",
    "short_description": "Rekomendasi JERSEY \" ENGLAND OASIS\" | UNISEX | JERSEYRETRO | JERSEYCASUAL pilihan Ze di Shopee. Terjual 498 di terascassual dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **498** di toko **terascassual** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** terascassual\n* **Performa Penjualan:** 498 terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/1qclYDTyvX",
    "price": 174100,
    "original_price": 252000,
    "price_note": "Terjual 498 di terascassual • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 63,
    "spill_number": 63,
    "seo_title": "JERSEY \" ENGLAND OASIS\" | UNISEX | JERSEYRETRO | JERSEYCASUAL • Rekomendasi Ze Shopee",
    "seo_description": "Beli JERSEY \" ENGLAND OASIS\" | UNISEX | JERSEYRETRO | JERSEYCASUAL harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 126,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-47358633351-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1577210897949-1f56f9435024?q=80&w=900&auto=format&fit=crop",
        "alt_text": "JERSEY \" ENGLAND OASIS\" | UNISEX | JERSEYRETRO | JERSEYCASUAL",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-27585175493",
    "name": "Celana Jeans Panjang Pria Baggy Jeans Pria Jumbo Celana Jeans Gombrong Skena",
    "slug": "celana-jeans-panjang-pria-baggy-jeans-pria-ju-5493",
    "short_description": "Rekomendasi Celana Jeans Panjang Pria Baggy Jeans Pria Jumbo Celana Jeans Gombrong Skena pilihan Ze di Shopee. Terjual 10RB+ di Hi.Jeans dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Hi.Jeans** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Hi.Jeans\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "bestseller",
      "skena"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/gQoA4YQIK",
    "price": 54900,
    "original_price": 80000,
    "price_note": "Terjual 10RB+ di Hi.Jeans • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 64,
    "spill_number": 64,
    "seo_title": "Celana Jeans Panjang Pria Baggy Jeans Pria Jumbo Celana Jeans Gombrong Skena • Rekomendasi Ze Shopee",
    "seo_description": "Beli Celana Jeans Panjang Pria Baggy Jeans Pria Jumbo Celana Jeans Gombrong Skena harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 218,
    "created_at": "2026-10-13T05:17:48.353Z",
    "updated_at": "2026-10-13T05:17:48.353Z",
    "media": [
      {
        "id": "m-shopee-27585175493-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Celana Jeans Panjang Pria Baggy Jeans Pria Jumbo Celana Jeans Gombrong Skena",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-42954706801",
    "name": "Rambidend - Polo Shirt Logo Brand Pria Wanita Baju Kerah Santai Rambidend Japan Original",
    "slug": "rambidend---polo-shirt-logo-brand-pria-wanita-6801",
    "short_description": "Rekomendasi Rambidend - Polo Shirt Logo Brand Pria Wanita Baju Kerah Santai Rambidend Japan Original pilihan Ze di Shopee. Terjual 6RB+ di Rambidend Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **6RB+** di toko **Rambidend Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Rambidend Official Store\n* **Performa Penjualan:** 6RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/qkEMNXmxN",
    "price": 58200,
    "original_price": 84000,
    "price_note": "Terjual 6RB+ di Rambidend Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 65,
    "spill_number": 65,
    "seo_title": "Rambidend - Polo Shirt Logo Brand Pria Wanita Baju Kerah Santai Rambidend Japan Original • Rekomendasi Ze Shopee",
    "seo_description": "Beli Rambidend - Polo Shirt Logo Brand Pria Wanita Baju Kerah Santai Rambidend Japan Original harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 183,
    "created_at": "2026-10-13T05:17:48.354Z",
    "updated_at": "2026-10-13T05:17:48.354Z",
    "media": [
      {
        "id": "m-shopee-42954706801-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Rambidend - Polo Shirt Logo Brand Pria Wanita Baju Kerah Santai Rambidend Japan Original",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-45006265189",
    "name": "Celana Sweatpants Loose Baggy Pria Casual Korean Style",
    "slug": "celana-sweatpants-loose-baggy-pria-casual-kor-5189",
    "short_description": "Rekomendasi Celana Sweatpants Loose Baggy Pria Casual Korean Style pilihan Ze di Shopee. Terjual 10RB+ di qwyf5vd13x dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **qwyf5vd13x** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** qwyf5vd13x\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-korean-style",
    "tags": [
      "shopee",
      "racunshopee",
      "korean-style",
      "men",
      "bestseller",
      "under50k"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/113eYgX9cQ",
    "price": 47500,
    "original_price": 69000,
    "price_note": "Terjual 10RB+ di qwyf5vd13x • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Under 50k 💸",
    "status": "published",
    "sort_order": 66,
    "spill_number": 66,
    "seo_title": "Celana Sweatpants Loose Baggy Pria Casual Korean Style • Rekomendasi Ze Shopee",
    "seo_description": "Beli Celana Sweatpants Loose Baggy Pria Casual Korean Style harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 276,
    "created_at": "2026-10-13T05:17:48.354Z",
    "updated_at": "2026-10-13T05:17:48.354Z",
    "media": [
      {
        "id": "m-shopee-45006265189-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Celana Sweatpants Loose Baggy Pria Casual Korean Style",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-28081235149",
    "name": "[ UNISEX ] Celana Jeans Whisker Gombrong Highwaist Baggy Pants Hangover Wid Leg Oversize Korean Style Terlaris!!",
    "slug": "unisex-celana-jeans-whisker-gombrong-highwais-5149",
    "short_description": "Rekomendasi [ UNISEX ] Celana Jeans Whisker Gombrong Highwaist Baggy Pants Hangover Wid Leg Oversize Korean Style Terlaris!! pilihan Ze di Shopee. Terjual 10RB+ di HugoJeans.Id dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **HugoJeans.Id** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** HugoJeans.Id\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-korean-style",
    "tags": [
      "shopee",
      "racunshopee",
      "korean-style",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/1BN4kzWWHT",
    "price": 51200,
    "original_price": 74000,
    "price_note": "Terjual 10RB+ di HugoJeans.Id • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 67,
    "spill_number": 67,
    "seo_title": "[ UNISEX ] Celana Jeans Whisker Gombrong Highwaist Baggy Pants Hangover Wid Leg Oversize Korean Style Terlaris!! • Rekomendasi Ze Shopee",
    "seo_description": "Beli [ UNISEX ] Celana Jeans Whisker Gombrong Highwaist Baggy Pants Hangover Wid Leg Oversize Korean Style Terlaris!! harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 305,
    "created_at": "2026-10-13T05:17:48.354Z",
    "updated_at": "2026-10-13T05:17:48.354Z",
    "media": [
      {
        "id": "m-shopee-28081235149-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=900&auto=format&fit=crop",
        "alt_text": "[ UNISEX ] Celana Jeans Whisker Gombrong Highwaist Baggy Pants Hangover Wid Leg Oversize Korean Style Terlaris!!",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-27069197841",
    "name": "Sepatu Sneakers Import Perempuan Laki-laki Sepatu Running Perempuan Laki-laki Sepatu Sekolah Perempuan Laki-laki Ukuran 38-44",
    "slug": "sepatu-sneakers-import-perempuan-laki-laki-se-7841",
    "short_description": "Rekomendasi Sepatu Sneakers Import Perempuan Laki-laki Sepatu Running Perempuan Laki-laki Sepatu Sekolah Perempuan Laki-laki Ukuran 38-44 pilihan Ze di Shopee. Terjual 2RB+ di SNEAKERSKI dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **2RB+** di toko **SNEAKERSKI** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** SNEAKERSKI\n* **Performa Penjualan:** 2RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-bags-shoes",
    "tags": [
      "shopee",
      "racunshopee",
      "bags-shoes",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/1B7MqaxeG",
    "price": 85000,
    "original_price": 123000,
    "price_note": "Terjual 2RB+ di SNEAKERSKI • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 68,
    "spill_number": 68,
    "seo_title": "Sepatu Sneakers Import Perempuan Laki-laki Sepatu Running Perempuan Laki-laki Sepatu Sekolah Perempuan Laki-laki Ukuran 38-44 • Rekomendasi Ze Shopee",
    "seo_description": "Beli Sepatu Sneakers Import Perempuan Laki-laki Sepatu Running Perempuan Laki-laki Sepatu Sekolah Perempuan Laki-laki Ukuran 38-44 harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 218,
    "created_at": "2026-10-13T05:17:48.354Z",
    "updated_at": "2026-10-13T05:17:48.354Z",
    "media": [
      {
        "id": "m-shopee-27069197841-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Sepatu Sneakers Import Perempuan Laki-laki Sepatu Running Perempuan Laki-laki Sepatu Sekolah Perempuan Laki-laki Ukuran 38-44",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-21774169882",
    "name": "Kiko Ina Kemeja Linen Natural Revere – Embroidery Khas & Adem Dipakai Seharian",
    "slug": "kiko-ina-kemeja-linen-natural-revere-embroide-9882",
    "short_description": "Rekomendasi Kiko Ina Kemeja Linen Natural Revere – Embroidery Khas & Adem Dipakai Seharian pilihan Ze di Shopee. Terjual 2RB+ di KIKOINA Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **2RB+** di toko **KIKOINA Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** KIKOINA Official Shop\n* **Performa Penjualan:** 2RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/BUXZ9aKJJ",
    "price": 99800,
    "original_price": 145000,
    "price_note": "Terjual 2RB+ di KIKOINA Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 69,
    "spill_number": 69,
    "seo_title": "Kiko Ina Kemeja Linen Natural Revere – Embroidery Khas & Adem Dipakai Seharian • Rekomendasi Ze Shopee",
    "seo_description": "Beli Kiko Ina Kemeja Linen Natural Revere – Embroidery Khas & Adem Dipakai Seharian harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 259,
    "created_at": "2026-10-13T05:17:48.383Z",
    "updated_at": "2026-10-13T05:17:48.383Z",
    "media": [
      {
        "id": "m-shopee-21774169882-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Kiko Ina Kemeja Linen Natural Revere – Embroidery Khas & Adem Dipakai Seharian",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-46553238296",
    "name": "PANARYBODY Sepatu Pria Gen Z Casual Fashion Kekinian QNK8012 Sneakers Cowok 3 Warna Ootd Style",
    "slug": "panarybody-sepatu-pria-gen-z-casual-fashion-k-8296",
    "short_description": "Rekomendasi PANARYBODY Sepatu Pria Gen Z Casual Fashion Kekinian QNK8012 Sneakers Cowok 3 Warna Ootd Style pilihan Ze di Shopee. Terjual 2RB+ di Panarybody Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **2RB+** di toko **Panarybody Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Panarybody Official Shop\n* **Performa Penjualan:** 2RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-bags-shoes",
    "tags": [
      "shopee",
      "racunshopee",
      "bags-shoes",
      "men",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/LnxlSZgyM",
    "price": 265000,
    "original_price": 384000,
    "price_note": "Terjual 2RB+ di Panarybody Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 70,
    "spill_number": 70,
    "seo_title": "PANARYBODY Sepatu Pria Gen Z Casual Fashion Kekinian QNK8012 Sneakers Cowok 3 Warna Ootd Style • Rekomendasi Ze Shopee",
    "seo_description": "Beli PANARYBODY Sepatu Pria Gen Z Casual Fashion Kekinian QNK8012 Sneakers Cowok 3 Warna Ootd Style harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 174,
    "created_at": "2026-10-13T05:17:48.383Z",
    "updated_at": "2026-10-13T05:17:48.383Z",
    "media": [
      {
        "id": "m-shopee-46553238296-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=900&auto=format&fit=crop",
        "alt_text": "PANARYBODY Sepatu Pria Gen Z Casual Fashion Kekinian QNK8012 Sneakers Cowok 3 Warna Ootd Style",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-26919981199",
    "name": "Autumn Sweater Rajut Premium Oversized Korean Style Unisex Pria Wanita Kekinian Trendy 3in1",
    "slug": "autumn-sweater-rajut-premium-oversized-korean-1199",
    "short_description": "Rekomendasi Autumn Sweater Rajut Premium Oversized Korean Style Unisex Pria Wanita Kekinian Trendy 3in1 pilihan Ze di Shopee. Terjual 9RB+ di Rumah Rajut 79 dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **9RB+** di toko **Rumah Rajut 79** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Rumah Rajut 79\n* **Performa Penjualan:** 9RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-korean-style",
    "tags": [
      "shopee",
      "racunshopee",
      "korean-style",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/W7NxlZ3dP",
    "price": 163400,
    "original_price": 237000,
    "price_note": "Terjual 9RB+ di Rumah Rajut 79 • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 71,
    "spill_number": 71,
    "seo_title": "Autumn Sweater Rajut Premium Oversized Korean Style Unisex Pria Wanita Kekinian Trendy 3in1 • Rekomendasi Ze Shopee",
    "seo_description": "Beli Autumn Sweater Rajut Premium Oversized Korean Style Unisex Pria Wanita Kekinian Trendy 3in1 harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 224,
    "created_at": "2026-10-13T05:17:48.383Z",
    "updated_at": "2026-10-13T05:17:48.383Z",
    "media": [
      {
        "id": "m-shopee-26919981199-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Autumn Sweater Rajut Premium Oversized Korean Style Unisex Pria Wanita Kekinian Trendy 3in1",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-53755077739",
    "name": "MODOFO Tumbler Stainless 710ml Botol Minum Anak Perempuan Tumblr Tahan Panas Dingin 24 Jam Aesthetic Tambler Termos Air Panas Kopi",
    "slug": "modofo-tumbler-stainless-710ml-botol-minum-an-7739",
    "short_description": "Rekomendasi MODOFO Tumbler Stainless 710ml Botol Minum Anak Perempuan Tumblr Tahan Panas Dingin 24 Jam Aesthetic Tambler Termos Air Panas Kopi pilihan Ze di Shopee. Terjual 10RB+ di MODOFO Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **MODOFO Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** MODOFO Official Store\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-aesthetic-room",
    "tags": [
      "shopee",
      "racunshopee",
      "aesthetic-room",
      "unisex",
      "bestseller",
      "under50k"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/4fwwvQJCBE",
    "price": 49000,
    "original_price": 71000,
    "price_note": "Terjual 10RB+ di MODOFO Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Tahan 24 Jam ❄️",
    "status": "published",
    "sort_order": 72,
    "spill_number": 72,
    "seo_title": "MODOFO Tumbler Stainless 710ml Botol Minum Anak Perempuan Tumblr Tahan Panas Dingin 24 Jam Aesthetic Tambler Termos Air Panas Kopi • Rekomendasi Ze Shopee",
    "seo_description": "Beli MODOFO Tumbler Stainless 710ml Botol Minum Anak Perempuan Tumblr Tahan Panas Dingin 24 Jam Aesthetic Tambler Termos Air Panas Kopi harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 208,
    "created_at": "2026-10-13T05:17:48.383Z",
    "updated_at": "2026-10-13T05:17:48.383Z",
    "media": [
      {
        "id": "m-shopee-53755077739-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=900&auto=format&fit=crop",
        "alt_text": "MODOFO Tumbler Stainless 710ml Botol Minum Anak Perempuan Tumblr Tahan Panas Dingin 24 Jam Aesthetic Tambler Termos Air Panas Kopi",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-57350921072",
    "name": "Kaos Pria Oversize Putih - Desain Vintage The Beatles/kaos pria distro original 100%/T-Shirt PUTIH",
    "slug": "kaos-pria-oversize-putih---desain-vintage-the-1072",
    "short_description": "Rekomendasi Kaos Pria Oversize Putih - Desain Vintage The Beatles/kaos pria distro original 100%/T-Shirt PUTIH pilihan Ze di Shopee. Terjual 10RB+ di SENDIRI Toko Resmi dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **SENDIRI Toko Resmi** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** SENDIRI Toko Resmi\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "bestseller",
      "vintage"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/4qGN7jIYqH",
    "price": 52000,
    "original_price": 75000,
    "price_note": "Terjual 10RB+ di SENDIRI Toko Resmi • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 73,
    "spill_number": 73,
    "seo_title": "Kaos Pria Oversize Putih - Desain Vintage The Beatles/kaos pria distro original 100%/T-Shirt PUTIH • Rekomendasi Ze Shopee",
    "seo_description": "Beli Kaos Pria Oversize Putih - Desain Vintage The Beatles/kaos pria distro original 100%/T-Shirt PUTIH harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 203,
    "created_at": "2026-10-13T05:17:48.383Z",
    "updated_at": "2026-10-13T05:17:48.383Z",
    "media": [
      {
        "id": "m-shopee-57350921072-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Kaos Pria Oversize Putih - Desain Vintage The Beatles/kaos pria distro original 100%/T-Shirt PUTIH",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-22982494523",
    "name": "Hectic - Cardigan Blue - Knitwear - Corsvia",
    "slug": "hectic---cardigan-blue---knitwear---corsvia-4523",
    "short_description": "Rekomendasi Hectic - Cardigan Blue - Knitwear - Corsvia pilihan Ze di Shopee. Terjual 2RB+ di Hectic Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **2RB+** di toko **Hectic Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Hectic Official Store\n* **Performa Penjualan:** 2RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-korean-style",
    "tags": [
      "shopee",
      "racunshopee",
      "korean-style",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/50ZnK2HvVK",
    "price": 269000,
    "original_price": 390000,
    "price_note": "Terjual 2RB+ di Hectic Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 74,
    "spill_number": 74,
    "seo_title": "Hectic - Cardigan Blue - Knitwear - Corsvia • Rekomendasi Ze Shopee",
    "seo_description": "Beli Hectic - Cardigan Blue - Knitwear - Corsvia harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 234,
    "created_at": "2026-10-13T05:17:48.383Z",
    "updated_at": "2026-10-13T05:17:48.383Z",
    "media": [
      {
        "id": "m-shopee-22982494523-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Hectic - Cardigan Blue - Knitwear - Corsvia",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-44000256812",
    "name": "NANA HORSE CARDIGAN RAJUT KANCING POLOS LEMBUT WANITA KOREA PREMIUM",
    "slug": "nana-horse-cardigan-rajut-kancing-polos-lembu-6812",
    "short_description": "Rekomendasi NANA HORSE CARDIGAN RAJUT KANCING POLOS LEMBUT WANITA KOREA PREMIUM pilihan Ze di Shopee. Terjual 2RB+ di DISTRIBUSI RAJUT A474 dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **2RB+** di toko **DISTRIBUSI RAJUT A474** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** DISTRIBUSI RAJUT A474\n* **Performa Penjualan:** 2RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-korean-style",
    "tags": [
      "shopee",
      "racunshopee",
      "korean-style",
      "women",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/5AtDWLHIAN",
    "price": 74000,
    "original_price": 107000,
    "price_note": "Terjual 2RB+ di DISTRIBUSI RAJUT A474 • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 75,
    "spill_number": 75,
    "seo_title": "NANA HORSE CARDIGAN RAJUT KANCING POLOS LEMBUT WANITA KOREA PREMIUM • Rekomendasi Ze Shopee",
    "seo_description": "Beli NANA HORSE CARDIGAN RAJUT KANCING POLOS LEMBUT WANITA KOREA PREMIUM harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 316,
    "created_at": "2026-10-13T05:17:48.383Z",
    "updated_at": "2026-10-13T05:17:48.383Z",
    "media": [
      {
        "id": "m-shopee-44000256812-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=900&auto=format&fit=crop",
        "alt_text": "NANA HORSE CARDIGAN RAJUT KANCING POLOS LEMBUT WANITA KOREA PREMIUM",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-21938425526",
    "name": "Basreng Pedas Daun Jeruk/ Original / Balado 100 Gram",
    "slug": "basreng-pedas-daun-jeruk-original-balado-100--5526",
    "short_description": "Rekomendasi Basreng Pedas Daun Jeruk/ Original / Balado 100 Gram pilihan Ze di Shopee. Terjual 10RB+ di Followers Ku dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Followers Ku** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Followers Ku\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller",
      "under50k"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/40hG8CLjXA",
    "price": 3800,
    "original_price": 6000,
    "price_note": "Terjual 10RB+ di Followers Ku • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Under 50k 💸",
    "status": "published",
    "sort_order": 76,
    "spill_number": 76,
    "seo_title": "Basreng Pedas Daun Jeruk/ Original / Balado 100 Gram • Rekomendasi Ze Shopee",
    "seo_description": "Beli Basreng Pedas Daun Jeruk/ Original / Balado 100 Gram harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 213,
    "created_at": "2026-10-13T05:17:48.383Z",
    "updated_at": "2026-10-13T05:17:48.383Z",
    "media": [
      {
        "id": "m-shopee-21938425526-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Basreng Pedas Daun Jeruk/ Original / Balado 100 Gram",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-25398374993",
    "name": "PARAQUE - Kaos Kerah Zipper Pria Coklat Tua Premium Lengan Pendek Size M L XL XXL Polo Shirt Zipper Pria Dewasa",
    "slug": "paraque---kaos-kerah-zipper-pria-coklat-tua-p-4993",
    "short_description": "Rekomendasi PARAQUE - Kaos Kerah Zipper Pria Coklat Tua Premium Lengan Pendek Size M L XL XXL Polo Shirt Zipper Pria Dewasa pilihan Ze di Shopee. Terjual 47 di PARAQUE dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **47** di toko **PARAQUE** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** PARAQUE\n* **Performa Penjualan:** 47 terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "trending",
      "under50k"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/4B0gKVL6CD",
    "price": 38900,
    "original_price": 56000,
    "price_note": "Terjual 47 di PARAQUE • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Under 50k 💸",
    "status": "published",
    "sort_order": 77,
    "spill_number": 77,
    "seo_title": "PARAQUE - Kaos Kerah Zipper Pria Coklat Tua Premium Lengan Pendek Size M L XL XXL Polo Shirt Zipper Pria Dewasa • Rekomendasi Ze Shopee",
    "seo_description": "Beli PARAQUE - Kaos Kerah Zipper Pria Coklat Tua Premium Lengan Pendek Size M L XL XXL Polo Shirt Zipper Pria Dewasa harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 235,
    "created_at": "2026-10-13T05:17:48.383Z",
    "updated_at": "2026-10-13T05:17:48.383Z",
    "media": [
      {
        "id": "m-shopee-25398374993-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=900&auto=format&fit=crop",
        "alt_text": "PARAQUE - Kaos Kerah Zipper Pria Coklat Tua Premium Lengan Pendek Size M L XL XXL Polo Shirt Zipper Pria Dewasa",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-7156832242",
    "name": "Russ Sweater Crewneck Pria South Black ( Up To Big Size )",
    "slug": "russ-sweater-crewneck-pria-south-black-up-to--2242",
    "short_description": "Rekomendasi Russ Sweater Crewneck Pria South Black ( Up To Big Size ) pilihan Ze di Shopee. Terjual 10RB+ di Russ & Co Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Russ & Co Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Russ & Co Official Shop\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/4LK6WoKSrG",
    "price": 208900,
    "original_price": 303000,
    "price_note": "Terjual 10RB+ di Russ & Co Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 78,
    "spill_number": 78,
    "seo_title": "Russ Sweater Crewneck Pria South Black ( Up To Big Size ) • Rekomendasi Ze Shopee",
    "seo_description": "Beli Russ Sweater Crewneck Pria South Black ( Up To Big Size ) harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 171,
    "created_at": "2026-10-13T05:17:48.383Z",
    "updated_at": "2026-10-13T05:17:48.383Z",
    "media": [
      {
        "id": "m-shopee-7156832242-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Russ Sweater Crewneck Pria South Black ( Up To Big Size )",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-51259374513",
    "name": "Celana Jeans Pria Biru Muda Panjang Baggy Pants Korean Style Premium Denim Unisex Gombrong Straight",
    "slug": "celana-jeans-pria-biru-muda-panjang-baggy-pan-4513",
    "short_description": "Rekomendasi Celana Jeans Pria Biru Muda Panjang Baggy Pants Korean Style Premium Denim Unisex Gombrong Straight pilihan Ze di Shopee. Terjual 340 di JACKPOT639 dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **340** di toko **JACKPOT639** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** JACKPOT639\n* **Performa Penjualan:** 340 terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-korean-style",
    "tags": [
      "shopee",
      "racunshopee",
      "korean-style",
      "men",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/4VdWj7JpWJ",
    "price": 52500,
    "original_price": 76000,
    "price_note": "Terjual 340 di JACKPOT639 • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 79,
    "spill_number": 79,
    "seo_title": "Celana Jeans Pria Biru Muda Panjang Baggy Pants Korean Style Premium Denim Unisex Gombrong Straight • Rekomendasi Ze Shopee",
    "seo_description": "Beli Celana Jeans Pria Biru Muda Panjang Baggy Pants Korean Style Premium Denim Unisex Gombrong Straight harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 148,
    "created_at": "2026-10-13T05:17:48.383Z",
    "updated_at": "2026-10-13T05:17:48.383Z",
    "media": [
      {
        "id": "m-shopee-51259374513-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Celana Jeans Pria Biru Muda Panjang Baggy Pants Korean Style Premium Denim Unisex Gombrong Straight",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-17578363278",
    "name": "House of Smith Jaket Sherpa Pria - Lasket Black #4 - Vintage Sherpa Jacket",
    "slug": "house-of-smith-jaket-sherpa-pria---lasket-bla-3278",
    "short_description": "Rekomendasi House of Smith Jaket Sherpa Pria - Lasket Black #4 - Vintage Sherpa Jacket pilihan Ze di Shopee. Terjual 10RB+ di House Of Smith Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **House Of Smith Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** House Of Smith Official Shop\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "bestseller",
      "vintage"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/3LRZKyOGt6",
    "price": 239000,
    "original_price": 347000,
    "price_note": "Terjual 10RB+ di House Of Smith Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 80,
    "spill_number": 80,
    "seo_title": "House of Smith Jaket Sherpa Pria - Lasket Black #4 - Vintage Sherpa Jacket • Rekomendasi Ze Shopee",
    "seo_description": "Beli House of Smith Jaket Sherpa Pria - Lasket Black #4 - Vintage Sherpa Jacket harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 105,
    "created_at": "2026-10-13T05:17:48.383Z",
    "updated_at": "2026-10-13T05:17:48.383Z",
    "media": [
      {
        "id": "m-shopee-17578363278-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=900&auto=format&fit=crop",
        "alt_text": "House of Smith Jaket Sherpa Pria - Lasket Black #4 - Vintage Sherpa Jacket",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-24186027609",
    "name": "Kaos Distro Pria Premium NY Fulprin Bahan Cotton Combat 30s Original/ Kaos Brendet Pria - Wanita",
    "slug": "kaos-distro-pria-premium-ny-fulprin-bahan-cot-7609",
    "short_description": "Rekomendasi Kaos Distro Pria Premium NY Fulprin Bahan Cotton Combat 30s Original/ Kaos Brendet Pria - Wanita pilihan Ze di Shopee. Terjual 10RB+ di Distro Bandung03 dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Distro Bandung03** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Distro Bandung03\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/3VkzXHNdY9",
    "price": 54400,
    "original_price": 79000,
    "price_note": "Terjual 10RB+ di Distro Bandung03 • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 81,
    "spill_number": 81,
    "seo_title": "Kaos Distro Pria Premium NY Fulprin Bahan Cotton Combat 30s Original/ Kaos Brendet Pria - Wanita • Rekomendasi Ze Shopee",
    "seo_description": "Beli Kaos Distro Pria Premium NY Fulprin Bahan Cotton Combat 30s Original/ Kaos Brendet Pria - Wanita harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 215,
    "created_at": "2026-10-13T05:17:48.383Z",
    "updated_at": "2026-10-13T05:17:48.383Z",
    "media": [
      {
        "id": "m-shopee-24186027609-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Kaos Distro Pria Premium NY Fulprin Bahan Cotton Combat 30s Original/ Kaos Brendet Pria - Wanita",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-26683275078",
    "name": "Loose Pants Pria Celana Training Oversize Bahan Katung Flacee Korean Style",
    "slug": "loose-pants-pria-celana-training-oversize-bah-5078",
    "short_description": "Rekomendasi Loose Pants Pria Celana Training Oversize Bahan Katung Flacee Korean Style pilihan Ze di Shopee. Terjual 10RB+ di qeelaand dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **qeelaand** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** qeelaand\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-korean-style",
    "tags": [
      "shopee",
      "racunshopee",
      "korean-style",
      "men",
      "bestseller",
      "under50k"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/3g4PjaN0DC",
    "price": 31500,
    "original_price": 46000,
    "price_note": "Terjual 10RB+ di qeelaand • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Under 50k 💸",
    "status": "published",
    "sort_order": 82,
    "spill_number": 82,
    "seo_title": "Loose Pants Pria Celana Training Oversize Bahan Katung Flacee Korean Style • Rekomendasi Ze Shopee",
    "seo_description": "Beli Loose Pants Pria Celana Training Oversize Bahan Katung Flacee Korean Style harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 242,
    "created_at": "2026-10-13T05:17:48.383Z",
    "updated_at": "2026-10-13T05:17:48.383Z",
    "media": [
      {
        "id": "m-shopee-26683275078-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Loose Pants Pria Celana Training Oversize Bahan Katung Flacee Korean Style",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-43622520018",
    "name": "HUMANLY.CO - Promo 3 Pcs Celana Corduroy Pendek || Corduroy Cargo Pendek Pria",
    "slug": "humanlyco---promo-3-pcs-celana-corduroy-pende-0018",
    "short_description": "Rekomendasi HUMANLY.CO - Promo 3 Pcs Celana Corduroy Pendek || Corduroy Cargo Pendek Pria pilihan Ze di Shopee. Terjual 10RB+ di Humanly.co Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Humanly.co Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Humanly.co Official Shop\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/3qNpvtMMsF",
    "price": 63300,
    "original_price": 92000,
    "price_note": "Terjual 10RB+ di Humanly.co Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 83,
    "spill_number": 83,
    "seo_title": "HUMANLY.CO - Promo 3 Pcs Celana Corduroy Pendek || Corduroy Cargo Pendek Pria • Rekomendasi Ze Shopee",
    "seo_description": "Beli HUMANLY.CO - Promo 3 Pcs Celana Corduroy Pendek || Corduroy Cargo Pendek Pria harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 317,
    "created_at": "2026-10-13T05:17:48.383Z",
    "updated_at": "2026-10-13T05:17:48.383Z",
    "media": [
      {
        "id": "m-shopee-43622520018-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=900&auto=format&fit=crop",
        "alt_text": "HUMANLY.CO - Promo 3 Pcs Celana Corduroy Pendek || Corduroy Cargo Pendek Pria",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-23451203566",
    "name": "DISAI Sweater Polos Pria Lengan Panjang Distro Motif Print Basic Sweater hoodie sweatshirt W5513",
    "slug": "disai-sweater-polos-pria-lengan-panjang-distr-3566",
    "short_description": "Rekomendasi DISAI Sweater Polos Pria Lengan Panjang Distro Motif Print Basic Sweater hoodie sweatshirt W5513 pilihan Ze di Shopee. Terjual 2RB+ di Disai Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **2RB+** di toko **Disai Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Disai Official Store\n* **Performa Penjualan:** 2RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/2gBsXkQoF2",
    "price": 95000,
    "original_price": 138000,
    "price_note": "Terjual 2RB+ di Disai Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 84,
    "spill_number": 84,
    "seo_title": "DISAI Sweater Polos Pria Lengan Panjang Distro Motif Print Basic Sweater hoodie sweatshirt W5513 • Rekomendasi Ze Shopee",
    "seo_description": "Beli DISAI Sweater Polos Pria Lengan Panjang Distro Motif Print Basic Sweater hoodie sweatshirt W5513 harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 101,
    "created_at": "2026-10-13T05:17:48.383Z",
    "updated_at": "2026-10-13T05:17:48.384Z",
    "media": [
      {
        "id": "m-shopee-23451203566-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=900&auto=format&fit=crop",
        "alt_text": "DISAI Sweater Polos Pria Lengan Panjang Distro Motif Print Basic Sweater hoodie sweatshirt W5513",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-26462665299",
    "name": "Nxdomain Kaos Oversize Rugby Polo Shirt Black White Distro Cotton 24s Premium",
    "slug": "nxdomain-kaos-oversize-rugby-polo-shirt-black-5299",
    "short_description": "Rekomendasi Nxdomain Kaos Oversize Rugby Polo Shirt Black White Distro Cotton 24s Premium pilihan Ze di Shopee. Terjual 10RB+ di NXDOMAIN dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **NXDOMAIN** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** NXDOMAIN\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/2qVIk3QAu5",
    "price": 110000,
    "original_price": 160000,
    "price_note": "Terjual 10RB+ di NXDOMAIN • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Rugby Retro",
    "status": "published",
    "sort_order": 85,
    "spill_number": 85,
    "seo_title": "Nxdomain Kaos Oversize Rugby Polo Shirt Black White Distro Cotton 24s Premium • Rekomendasi Ze Shopee",
    "seo_description": "Beli Nxdomain Kaos Oversize Rugby Polo Shirt Black White Distro Cotton 24s Premium harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 244,
    "created_at": "2026-10-13T05:17:48.384Z",
    "updated_at": "2026-10-13T05:17:48.384Z",
    "media": [
      {
        "id": "m-shopee-26462665299-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Nxdomain Kaos Oversize Rugby Polo Shirt Black White Distro Cotton 24s Premium",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-28681890308",
    "name": "Qeela.Official - Celana Sweatpants Loose Pria Celana Panjang Casual Daily",
    "slug": "qeelaofficial---celana-sweatpants-loose-pria--0308",
    "short_description": "Rekomendasi Qeela.Official - Celana Sweatpants Loose Pria Celana Panjang Casual Daily pilihan Ze di Shopee. Terjual 10RB+ di Qeela.Official dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Qeela.Official** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Qeela.Official\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "bestseller",
      "under50k"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/30oiwMPXZ8",
    "price": 35000,
    "original_price": 51000,
    "price_note": "Terjual 10RB+ di Qeela.Official • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Under 50k 💸",
    "status": "published",
    "sort_order": 86,
    "spill_number": 86,
    "seo_title": "Qeela.Official - Celana Sweatpants Loose Pria Celana Panjang Casual Daily • Rekomendasi Ze Shopee",
    "seo_description": "Beli Qeela.Official - Celana Sweatpants Loose Pria Celana Panjang Casual Daily harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 295,
    "created_at": "2026-10-13T05:17:48.384Z",
    "updated_at": "2026-10-13T05:17:48.384Z",
    "media": [
      {
        "id": "m-shopee-28681890308-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Qeela.Official - Celana Sweatpants Loose Pria Celana Panjang Casual Daily",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-27737088654",
    "name": "One Set 3 in 1 Korean Style ( Blouse Rajut - Oro Pants - Jilbab ) Setelan Wanita Kekinian - SO63",
    "slug": "one-set-3-in-1-korean-style-blouse-rajut---or-8654",
    "short_description": "Rekomendasi One Set 3 in 1 Korean Style ( Blouse Rajut - Oro Pants - Jilbab ) Setelan Wanita Kekinian - SO63 pilihan Ze di Shopee. Terjual 721 di Senina Outfit dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **721** di toko **Senina Outfit** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Senina Outfit\n* **Performa Penjualan:** 721 terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-hijab-friendly",
    "tags": [
      "shopee",
      "racunshopee",
      "hijab-friendly",
      "women",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/3B898fOuEB",
    "price": 188200,
    "original_price": 273000,
    "price_note": "Terjual 721 di Senina Outfit • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 87,
    "spill_number": 87,
    "seo_title": "One Set 3 in 1 Korean Style ( Blouse Rajut - Oro Pants - Jilbab ) Setelan Wanita Kekinian - SO63 • Rekomendasi Ze Shopee",
    "seo_description": "Beli One Set 3 in 1 Korean Style ( Blouse Rajut - Oro Pants - Jilbab ) Setelan Wanita Kekinian - SO63 harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 135,
    "created_at": "2026-10-13T05:17:48.384Z",
    "updated_at": "2026-10-13T05:17:48.384Z",
    "media": [
      {
        "id": "m-shopee-27737088654-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=900&auto=format&fit=crop",
        "alt_text": "One Set 3 in 1 Korean Style ( Blouse Rajut - Oro Pants - Jilbab ) Setelan Wanita Kekinian - SO63",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-7811150840",
    "name": "ONIXE INSIDE Jaket Rugby Pria Wanita Kombinasi  Original High Quality Distro(Bisa COD)",
    "slug": "onixe-inside-jaket-rugby-pria-wanita-kombinas-0840",
    "short_description": "Rekomendasi ONIXE INSIDE Jaket Rugby Pria Wanita Kombinasi  Original High Quality Distro(Bisa COD) pilihan Ze di Shopee. Terjual 10RB+ di onixestore.co dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **onixestore.co** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** onixestore.co\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/7Kxi6K92m0",
    "price": 89000,
    "original_price": 129000,
    "price_note": "Terjual 10RB+ di onixestore.co • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Rugby Retro",
    "status": "published",
    "sort_order": 88,
    "spill_number": 88,
    "seo_title": "ONIXE INSIDE Jaket Rugby Pria Wanita Kombinasi  Original High Quality Distro(Bisa COD) • Rekomendasi Ze Shopee",
    "seo_description": "Beli ONIXE INSIDE Jaket Rugby Pria Wanita Kombinasi  Original High Quality Distro(Bisa COD) harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 329,
    "created_at": "2026-10-13T05:17:48.384Z",
    "updated_at": "2026-10-13T05:17:48.384Z",
    "media": [
      {
        "id": "m-shopee-7811150840-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=900&auto=format&fit=crop",
        "alt_text": "ONIXE INSIDE Jaket Rugby Pria Wanita Kombinasi  Original High Quality Distro(Bisa COD)",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-47207980146",
    "name": "Kemeja Pria Lengan Panjang Kotak Kotak Oversize Kekinian Baju Cowok Casual Fashion Pria Premium",
    "slug": "kemeja-pria-lengan-panjang-kotak-kotak-oversi-0146",
    "short_description": "Rekomendasi Kemeja Pria Lengan Panjang Kotak Kotak Oversize Kekinian Baju Cowok Casual Fashion Pria Premium pilihan Ze di Shopee. Terjual 388 di KUTAS PRIA Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **388** di toko **KUTAS PRIA Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** KUTAS PRIA Official Store\n* **Performa Penjualan:** 388 terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/7VH8Id8PR3",
    "price": 169800,
    "original_price": 246000,
    "price_note": "Terjual 388 di KUTAS PRIA Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 89,
    "spill_number": 89,
    "seo_title": "Kemeja Pria Lengan Panjang Kotak Kotak Oversize Kekinian Baju Cowok Casual Fashion Pria Premium • Rekomendasi Ze Shopee",
    "seo_description": "Beli Kemeja Pria Lengan Panjang Kotak Kotak Oversize Kekinian Baju Cowok Casual Fashion Pria Premium harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 260,
    "created_at": "2026-10-13T05:17:48.384Z",
    "updated_at": "2026-10-13T05:17:48.384Z",
    "media": [
      {
        "id": "m-shopee-47207980146-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Kemeja Pria Lengan Panjang Kotak Kotak Oversize Kekinian Baju Cowok Casual Fashion Pria Premium",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-25093408874",
    "name": "Harven Crema Work Jacket Unisex",
    "slug": "harven-crema-work-jacket-unisex-8874",
    "short_description": "Rekomendasi Harven Crema Work Jacket Unisex pilihan Ze di Shopee. Terjual 4RB+ di Maison Harven dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **4RB+** di toko **Maison Harven** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Maison Harven\n* **Performa Penjualan:** 4RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/7faYUw7m66",
    "price": 236300,
    "original_price": 343000,
    "price_note": "Terjual 4RB+ di Maison Harven • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 90,
    "spill_number": 90,
    "seo_title": "Harven Crema Work Jacket Unisex • Rekomendasi Ze Shopee",
    "seo_description": "Beli Harven Crema Work Jacket Unisex harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 242,
    "created_at": "2026-10-13T05:17:48.384Z",
    "updated_at": "2026-10-13T05:17:48.384Z",
    "media": [
      {
        "id": "m-shopee-25093408874-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1620012253295-c15c429f60cb?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Harven Crema Work Jacket Unisex",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-29587281531",
    "name": "SUYX Celana Cargo Pria Lembut Lurus Celana Panjang Korean Style Oversize Celana Outdoor-3 Warna",
    "slug": "suyx-celana-cargo-pria-lembut-lurus-celana-pa-1531",
    "short_description": "Rekomendasi SUYX Celana Cargo Pria Lembut Lurus Celana Panjang Korean Style Oversize Celana Outdoor-3 Warna pilihan Ze di Shopee. Terjual 9RB+ di Suyx Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **9RB+** di toko **Suyx Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Suyx Official Store\n* **Performa Penjualan:** 9RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-korean-style",
    "tags": [
      "shopee",
      "racunshopee",
      "korean-style",
      "men",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/7ptyhF78l9",
    "price": 143500,
    "original_price": 208000,
    "price_note": "Terjual 9RB+ di Suyx Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 91,
    "spill_number": 91,
    "seo_title": "SUYX Celana Cargo Pria Lembut Lurus Celana Panjang Korean Style Oversize Celana Outdoor-3 Warna • Rekomendasi Ze Shopee",
    "seo_description": "Beli SUYX Celana Cargo Pria Lembut Lurus Celana Panjang Korean Style Oversize Celana Outdoor-3 Warna harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 278,
    "created_at": "2026-10-13T05:17:48.384Z",
    "updated_at": "2026-10-13T05:17:48.384Z",
    "media": [
      {
        "id": "m-shopee-29587281531-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=900&auto=format&fit=crop",
        "alt_text": "SUYX Celana Cargo Pria Lembut Lurus Celana Panjang Korean Style Oversize Celana Outdoor-3 Warna",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-4316439274",
    "name": "Sweater Hoodie Pria Kombinasi - Hoodie Distro Pria Wanita BEST SELLER",
    "slug": "sweater-hoodie-pria-kombinasi---hoodie-distro-9274",
    "short_description": "Rekomendasi Sweater Hoodie Pria Kombinasi - Hoodie Distro Pria Wanita BEST SELLER pilihan Ze di Shopee. Terjual 10RB+ di Grosir Sweater BDG dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Grosir Sweater BDG** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Grosir Sweater BDG\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/6fi1J6Ba7w",
    "price": 81000,
    "original_price": 117000,
    "price_note": "Terjual 10RB+ di Grosir Sweater BDG • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 92,
    "spill_number": 92,
    "seo_title": "Sweater Hoodie Pria Kombinasi - Hoodie Distro Pria Wanita BEST SELLER • Rekomendasi Ze Shopee",
    "seo_description": "Beli Sweater Hoodie Pria Kombinasi - Hoodie Distro Pria Wanita BEST SELLER harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 185,
    "created_at": "2026-10-13T05:17:48.384Z",
    "updated_at": "2026-10-13T05:17:48.384Z",
    "media": [
      {
        "id": "m-shopee-4316439274-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Sweater Hoodie Pria Kombinasi - Hoodie Distro Pria Wanita BEST SELLER",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-27419826523",
    "name": "KAOS DISTRO BETTER DAYS AHEAD SMILE / KAOS PRIA&WANITA LENGAN PENDEK",
    "slug": "kaos-distro-better-days-ahead-smile-kaos-pria-6523",
    "short_description": "Rekomendasi KAOS DISTRO BETTER DAYS AHEAD SMILE / KAOS PRIA&WANITA LENGAN PENDEK pilihan Ze di Shopee. Terjual 10RB+ di Ichigo Label dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Ichigo Label** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Ichigo Label\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller",
      "under50k"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/6q1RVPAwmz",
    "price": 20700,
    "original_price": 30000,
    "price_note": "Terjual 10RB+ di Ichigo Label • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Under 50k 💸",
    "status": "published",
    "sort_order": 93,
    "spill_number": 93,
    "seo_title": "KAOS DISTRO BETTER DAYS AHEAD SMILE / KAOS PRIA&WANITA LENGAN PENDEK • Rekomendasi Ze Shopee",
    "seo_description": "Beli KAOS DISTRO BETTER DAYS AHEAD SMILE / KAOS PRIA&WANITA LENGAN PENDEK harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 164,
    "created_at": "2026-10-13T05:17:48.384Z",
    "updated_at": "2026-10-13T05:17:48.384Z",
    "media": [
      {
        "id": "m-shopee-27419826523-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=900&auto=format&fit=crop",
        "alt_text": "KAOS DISTRO BETTER DAYS AHEAD SMILE / KAOS PRIA&WANITA LENGAN PENDEK",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-8373864628",
    "name": "Jaket Terbaru PRIA WANITA ORIGINAL FCF Bandung Type Everest Elbrus Size M L XL XXL",
    "slug": "jaket-terbaru-pria-wanita-original-fcf-bandun-4628",
    "short_description": "Rekomendasi Jaket Terbaru PRIA WANITA ORIGINAL FCF Bandung Type Everest Elbrus Size M L XL XXL pilihan Ze di Shopee. Terjual 10RB+ di FUTURE MARKET BANDUNG dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **FUTURE MARKET BANDUNG** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** FUTURE MARKET BANDUNG\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/70KrhiAJS2",
    "price": 131100,
    "original_price": 190000,
    "price_note": "Terjual 10RB+ di FUTURE MARKET BANDUNG • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 94,
    "spill_number": 94,
    "seo_title": "Jaket Terbaru PRIA WANITA ORIGINAL FCF Bandung Type Everest Elbrus Size M L XL XXL • Rekomendasi Ze Shopee",
    "seo_description": "Beli Jaket Terbaru PRIA WANITA ORIGINAL FCF Bandung Type Everest Elbrus Size M L XL XXL harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 267,
    "created_at": "2026-10-13T05:17:48.384Z",
    "updated_at": "2026-10-13T05:17:48.384Z",
    "media": [
      {
        "id": "m-shopee-8373864628-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Jaket Terbaru PRIA WANITA ORIGINAL FCF Bandung Type Everest Elbrus Size M L XL XXL",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-41552390856",
    "name": "RAINGEL - Sepatu Lokal - FORT - Maroon",
    "slug": "raingel---sepatu-lokal---fort---maroon-0856",
    "short_description": "Rekomendasi RAINGEL - Sepatu Lokal - FORT - Maroon pilihan Ze di Shopee. Terjual 10RB+ di Raingel Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Raingel Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Raingel Official Shop\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-bags-shoes",
    "tags": [
      "shopee",
      "racunshopee",
      "bags-shoes",
      "unisex",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/7AeHu19g75",
    "price": 245000,
    "original_price": 355000,
    "price_note": "Terjual 10RB+ di Raingel Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 95,
    "spill_number": 95,
    "seo_title": "RAINGEL - Sepatu Lokal - FORT - Maroon • Rekomendasi Ze Shopee",
    "seo_description": "Beli RAINGEL - Sepatu Lokal - FORT - Maroon harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 104,
    "created_at": "2026-10-13T05:17:48.384Z",
    "updated_at": "2026-10-13T05:17:48.384Z",
    "media": [
      {
        "id": "m-shopee-41552390856-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=900&auto=format&fit=crop",
        "alt_text": "RAINGEL - Sepatu Lokal - FORT - Maroon",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-54908613364",
    "name": "JERSEY \" ENGLAND OASIS\" | UNISEX | JERSEYRETRO | JERSEYCASUAL",
    "slug": "jersey-england-oasis-unisex-jerseyretro-jerse-3364",
    "short_description": "Rekomendasi JERSEY \" ENGLAND OASIS\" | UNISEX | JERSEYRETRO | JERSEYCASUAL pilihan Ze di Shopee. Terjual 195 di terascassual dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **195** di toko **terascassual** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** terascassual\n* **Performa Penjualan:** 195 terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/60SKVsE7Ts",
    "price": 161100,
    "original_price": 234000,
    "price_note": "Terjual 195 di terascassual • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 96,
    "spill_number": 96,
    "seo_title": "JERSEY \" ENGLAND OASIS\" | UNISEX | JERSEYRETRO | JERSEYCASUAL • Rekomendasi Ze Shopee",
    "seo_description": "Beli JERSEY \" ENGLAND OASIS\" | UNISEX | JERSEYRETRO | JERSEYCASUAL harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 255,
    "created_at": "2026-10-13T05:17:48.384Z",
    "updated_at": "2026-10-13T05:17:48.384Z",
    "media": [
      {
        "id": "m-shopee-54908613364-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?q=80&w=900&auto=format&fit=crop",
        "alt_text": "JERSEY \" ENGLAND OASIS\" | UNISEX | JERSEYRETRO | JERSEYCASUAL",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-29790441549",
    "name": "YAZR Kaos Boxy Trendy Art Avatar T-Shirt HITAM Unisex - Cotton Combed 24s",
    "slug": "yazr-kaos-boxy-trendy-art-avatar-t-shirt-hita-1549",
    "short_description": "Rekomendasi YAZR Kaos Boxy Trendy Art Avatar T-Shirt HITAM Unisex - Cotton Combed 24s pilihan Ze di Shopee. Terjual 1RB+ di YAZR Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **1RB+** di toko **YAZR Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** YAZR Official Store\n* **Performa Penjualan:** 1RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-unisex",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-unisex",
      "unisex",
      "trending",
      "boxy"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/6AlkiBDU8v",
    "price": 58500,
    "original_price": 85000,
    "price_note": "Terjual 1RB+ di YAZR Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Skena Boxy",
    "status": "published",
    "sort_order": 97,
    "spill_number": 97,
    "seo_title": "YAZR Kaos Boxy Trendy Art Avatar T-Shirt HITAM Unisex - Cotton Combed 24s • Rekomendasi Ze Shopee",
    "seo_description": "Beli YAZR Kaos Boxy Trendy Art Avatar T-Shirt HITAM Unisex - Cotton Combed 24s harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 111,
    "created_at": "2026-10-13T05:17:48.384Z",
    "updated_at": "2026-10-13T05:17:48.384Z",
    "media": [
      {
        "id": "m-shopee-29790441549-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=900&auto=format&fit=crop",
        "alt_text": "YAZR Kaos Boxy Trendy Art Avatar T-Shirt HITAM Unisex - Cotton Combed 24s",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-43925280511",
    "name": "GULPAD JACKET PRIA WINDBREAKERS HOODIE PARASUT OUTDOOR  / JACKET VARSITY MANTEL PRIA / JACKET PRIA WATERPROOF",
    "slug": "gulpad-jacket-pria-windbreakers-hoodie-parasu-0511",
    "short_description": "Rekomendasi GULPAD JACKET PRIA WINDBREAKERS HOODIE PARASUT OUTDOOR  / JACKET VARSITY MANTEL PRIA / JACKET PRIA WATERPROOF pilihan Ze di Shopee. Terjual 5RB+ di GULPAD GALERI STORE dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **5RB+** di toko **GULPAD GALERI STORE** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** GULPAD GALERI STORE\n* **Performa Penjualan:** 5RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "trending"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/6L5AuUCqny",
    "price": 141100,
    "original_price": 205000,
    "price_note": "Terjual 5RB+ di GULPAD GALERI STORE • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Ze's Pick ✨",
    "status": "published",
    "sort_order": 98,
    "spill_number": 98,
    "seo_title": "GULPAD JACKET PRIA WINDBREAKERS HOODIE PARASUT OUTDOOR  / JACKET VARSITY MANTEL PRIA / JACKET PRIA WATERPROOF • Rekomendasi Ze Shopee",
    "seo_description": "Beli GULPAD JACKET PRIA WINDBREAKERS HOODIE PARASUT OUTDOOR  / JACKET VARSITY MANTEL PRIA / JACKET PRIA WATERPROOF harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 245,
    "created_at": "2026-10-13T05:17:48.384Z",
    "updated_at": "2026-10-13T05:17:48.384Z",
    "media": [
      {
        "id": "m-shopee-43925280511-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=900&auto=format&fit=crop",
        "alt_text": "GULPAD JACKET PRIA WINDBREAKERS HOODIE PARASUT OUTDOOR  / JACKET VARSITY MANTEL PRIA / JACKET PRIA WATERPROOF",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-25945248879",
    "name": "Trondheim Celana Denim Pria Loose Jeans Peter Bioblitz Tint",
    "slug": "trondheim-celana-denim-pria-loose-jeans-peter-8879",
    "short_description": "Rekomendasi Trondheim Celana Denim Pria Loose Jeans Peter Bioblitz Tint pilihan Ze di Shopee. Terjual 10RB+ di Trondheim Official Shop dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Trondheim Official Shop** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Trondheim Official Shop\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/6VOb6nCDT1",
    "price": 230000,
    "original_price": 334000,
    "price_note": "Terjual 10RB+ di Trondheim Official Shop • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 99,
    "spill_number": 99,
    "seo_title": "Trondheim Celana Denim Pria Loose Jeans Peter Bioblitz Tint • Rekomendasi Ze Shopee",
    "seo_description": "Beli Trondheim Celana Denim Pria Loose Jeans Peter Bioblitz Tint harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 270,
    "created_at": "2026-10-13T05:17:48.384Z",
    "updated_at": "2026-10-13T05:17:48.384Z",
    "media": [
      {
        "id": "m-shopee-25945248879-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Trondheim Celana Denim Pria Loose Jeans Peter Bioblitz Tint",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  },
  {
    "id": "shopee-22059416896",
    "name": "Mallvose - Celana Pria Chino Premium Panjang 100cm Mocca Slimfit",
    "slug": "mallvose---celana-pria-chino-premium-panjang--6896",
    "short_description": "Rekomendasi Mallvose - Celana Pria Chino Premium Panjang 100cm Mocca Slimfit pilihan Ze di Shopee. Terjual 10RB+ di Mallvose Official Store dengan review bintang 4.8+.",
    "description": "### Kenapa Ze Rekomendasiin Produk Ini?\nProduk ini sudah terjual lebih dari **10RB+** di toko **Mallvose Official Store** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.\n\n### 🧵 Material & Detail\n* **Toko Resmi:** Mallvose Official Store\n* **Performa Penjualan:** 10RB+ terjual di Shopee\n* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.\n\n### 💡 Tips Checkout Hemat\n* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.",
    "category_id": "cat-outfit-pria",
    "tags": [
      "shopee",
      "racunshopee",
      "outfit-pria",
      "men",
      "bestseller"
    ],
    "marketplace": "shopee",
    "affiliate_url": "https://s.shopee.co.id/5LCdieGepo",
    "price": 130000,
    "original_price": 189000,
    "price_note": "Terjual 10RB+ di Mallvose Official Store • Klaim voucher toko",
    "variants": [
      {
        "name": "Pilihan",
        "options": [
          "Lihat Varian di Shopee"
        ]
      }
    ],
    "size_notes": "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    "is_featured": false,
    "is_trending": false,
    "badge_label": "Best Seller 10RB+ 🔥",
    "status": "published",
    "sort_order": 100,
    "spill_number": 100,
    "seo_title": "Mallvose - Celana Pria Chino Premium Panjang 100cm Mocca Slimfit • Rekomendasi Ze Shopee",
    "seo_description": "Beli Mallvose - Celana Pria Chino Premium Panjang 100cm Mocca Slimfit harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.",
    "click_count": 187,
    "created_at": "2026-10-13T05:17:48.384Z",
    "updated_at": "2026-10-13T05:17:48.384Z",
    "media": [
      {
        "id": "m-shopee-22059416896-1",
        "media_type": "image",
        "public_url": "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=900&auto=format&fit=crop",
        "alt_text": "Mallvose - Celana Pria Chino Premium Panjang 100cm Mocca Slimfit",
        "is_cover": true,
        "sort_order": 1
      }
    ]
  }
];
