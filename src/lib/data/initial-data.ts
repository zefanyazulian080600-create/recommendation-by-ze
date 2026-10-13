import { Category, Collection, Product, SiteSettings } from "@/types";

export const initialSiteSettings: SiteSettings = {
  "brand_name": "Recommendation by Ze",
  "brand_tagline": "Curated Shopee Finds for Everyone",
  "hero_headline": "Curated Finds for Your Everyday Aesthetic.",
  "hero_subheadline": "Rekomendasi terbaik belanja online shop pilihan Ze: piyama adem, gamis & dress muslimah, skincare glowing, parfum tahan lama, outfit streetwear pria, fashion wanita Korean style, sampai racun viral Shopee terkurasi 100% independen.",
  "hero_image": "https://down-id.img.susercontent.com/file/id-11134207-7rbke-ma7vs1c79of1c0",
  "announcement_text": "Temukan racun Shopee terbaik & wishlist favoritmu hari ini ✨",
  "announcement_active": true,
  "affiliate_disclosure": "Beberapa tautan di website ini merupakan tautan affiliate resmi Shopee. Ze dapat menerima komisi kecil apabila kamu melakukan pembelian melalui tautan tersebut tanpa ada biaya tambahan apapun bagimu. Semua rekomendasi dipilih secara independen.",
  "social_instagram": "https://instagram.com/recommendationbyze",
  "social_tiktok": "https://tiktok.com/@recommendationbyze",
  "social_telegram": "https://t.me/racunbyze",
  "footer_text": "© 2026 Recommendation by Ze. Kurasi barang online shop pilihan & inspirasi belanja pintar."
};

export const initialCategories: Category[] = [
  {
    "id": "cat-outfit-pria",
    "name": "Streetwear & Fashion Pria",
    "slug": "outfit-pria",
    "description": "Koleksi kemeja boxy, kaos band, jaket gorpcore, & celana cargo kalcer cowok.",
    "icon_name": "Shirt",
    "cover_image": "https://down-id.img.susercontent.com/file/id-11134207-7rbke-ma7vs1c79of1c0",
    "sort_order": 1,
    "is_active": true,
    "subcategories": [
      { "id": "pria-kemeja", "name": "Kemeja Pria", "slug": "pria-kemeja", "parent_category_id": "cat-outfit-pria", "icon": "👔", "description": "Kemeja boxy, flanel, workshirt & batik" },
      { "id": "pria-kaos", "name": "Kaos & T-Shirt", "slug": "pria-kaos", "parent_category_id": "cat-outfit-pria", "icon": "👕", "description": "Kaos oversize, jersey & basic tee" },
      { "id": "pria-jaket", "name": "Jaket & Hoodie", "slug": "pria-jaket", "parent_category_id": "cat-outfit-pria", "icon": "🧥", "description": "Hoodie, windbreaker, varsity & gorpcore" },
      { "id": "pria-celana", "name": "Celana Pria", "slug": "pria-celana", "parent_category_id": "cat-outfit-pria", "icon": "👖", "description": "Celana cargo, chino & jeans kalcer" }
    ]
  },
  {
    "id": "cat-outfit-wanita",
    "name": "Fashion Wanita & Korean Look",
    "slug": "outfit-wanita",
    "description": "Blouse rajut, knitwear, crop top chic, one set Korean style, & rok kekinian.",
    "icon_name": "ShoppingBag",
    "cover_image": "https://down-id.img.susercontent.com/file/id-11134207-81ztg-mffgl05qebk9b1",
    "sort_order": 2,
    "is_active": true,
    "subcategories": [
      { "id": "wanita-blouse", "name": "Blouse & Kemeja", "slug": "wanita-blouse", "parent_category_id": "cat-outfit-wanita", "icon": "👚", "description": "Blouse chic, kemeja linen & top Korea" },
      { "id": "wanita-croptop", "name": "Kaos & Crop Top", "slug": "wanita-croptop", "parent_category_id": "cat-outfit-wanita", "icon": "👕", "description": "Crop tee, baby tee & tank top gemas" },
      { "id": "wanita-knitwear", "name": "Cardigan & Knitwear", "slug": "wanita-knitwear", "parent_category_id": "cat-outfit-wanita", "icon": "🧶", "description": "Cardigan rajut, knit top & sweater adem" },
      { "id": "wanita-rok", "name": "Rok & Skirt Cantik", "slug": "wanita-rok", "parent_category_id": "cat-outfit-wanita", "icon": "👗", "description": "Rok plisket, rok cargo & midi skirt Korea" },
      { "id": "wanita-celana", "name": "Celana & Kulot Wanita", "slug": "wanita-celana", "parent_category_id": "cat-outfit-wanita", "icon": "👖", "description": "Kulot linen, highwaist baggy & jeans santai" }
    ]
  },
  {
    "id": "cat-gamis-muslimah",
    "name": "Gamis & Busana Muslimah",
    "slug": "gamis-muslimah",
    "description": "Gamis maxy, abaya malika, dress brokat kondangan, tunik, & busana muslimah elegan.",
    "icon_name": "Sparkles",
    "cover_image": "https://down-id.img.susercontent.com/file/id-11134207-81ztm-ms2dzsj9dkw62c",
    "sort_order": 3,
    "is_active": true,
    "subcategories": [
      { "id": "muslim-gamis", "name": "Gamis & Abaya", "slug": "muslim-gamis", "parent_category_id": "cat-gamis-muslimah", "icon": "🌙", "description": "Gamis maxy, abaya malika & dress kondangan" },
      { "id": "muslim-hijab", "name": "Hijab & Pashmina", "slug": "muslim-hijab", "parent_category_id": "cat-gamis-muslimah", "icon": "🧕", "description": "Pashmina silk, segi empat & jilbab instan" },
      { "id": "muslim-tunik", "name": "Tunik Muslimah", "slug": "muslim-tunik", "parent_category_id": "cat-gamis-muslimah", "icon": "✨", "description": "Tunik panjang & setelan sopan modis" }
    ]
  },
  {
    "id": "cat-piyama-sleepwear",
    "name": "Piyama & Baju Tidur",
    "slug": "piyama-sleepwear",
    "description": "Koleksi piyama wanita, sleepwear katun rayon adem, & setelan baju tidur santai ternyaman.",
    "icon_name": "Moon",
    "cover_image": "https://down-id.img.susercontent.com/file/91f5d9bd6f645c992910082c5739553c",
    "sort_order": 4,
    "is_active": true,
    "subcategories": [
      { "id": "sleep-piyama", "name": "Piyama Katun Rayon", "slug": "sleep-piyama", "parent_category_id": "cat-piyama-sleepwear", "icon": "😴", "description": "Setelan piyama tidur katun rayon adem" },
      { "id": "sleep-daster", "name": "Daster Santai", "slug": "sleep-daster", "parent_category_id": "cat-piyama-sleepwear", "icon": "🩳", "description": "Daster rayon busui & baju rumah santai" }
    ]
  },
  {
    "id": "cat-tas-dompet",
    "name": "Tas & Dompet",
    "slug": "bags-wallets",
    "description": "Tas ransel laptop, slingbag selempang, totebag kanvas, & dompet kulit elegan.",
    "icon_name": "ShoppingBag",
    "cover_image": "https://down-id.img.susercontent.com/file/id-11134207-8224x-mieiiunmfklge8",
    "sort_order": 5,
    "is_active": true,
    "subcategories": [
      { "id": "tas-ransel", "name": "Tas Ransel & Laptop", "slug": "tas-ransel", "parent_category_id": "cat-tas-dompet", "icon": "🎒", "description": "Ransel kantor, tas laptop kulit & backpack kuliah" },
      { "id": "tas-sling", "name": "Slingbag Selempang", "slug": "tas-sling", "parent_category_id": "cat-tas-dompet", "icon": "👜", "description": "Tas selempang kasual & shoulder bag kekinian" },
      { "id": "tas-totebag", "name": "Totebag & Handbag", "slug": "tas-totebag", "parent_category_id": "cat-tas-dompet", "icon": "🛍️", "description": "Totebag kanvas tebal & handbag pesta eksklusif" },
      { "id": "tas-dompet", "name": "Dompet & Card Holder", "slug": "tas-dompet", "parent_category_id": "cat-tas-dompet", "icon": "👛", "description": "Dompet lipat kulit & dompet kartu tipis praktis" }
    ]
  },
  {
    "id": "cat-sepatu-sandal",
    "name": "Sepatu & Sandal",
    "slug": "shoes-footwear",
    "description": "Sneakers skate retro, slip-on kasual, sandal slop empuk EVA, & sepatu formal kerja.",
    "icon_name": "Footprints",
    "cover_image": "https://down-id.img.susercontent.com/file/id-11134207-8224x-mieiiunmfklge8",
    "sort_order": 6,
    "is_active": true,
    "subcategories": [
      { "id": "sepatu-sneakers", "name": "Sneakers Kasual", "slug": "sepatu-sneakers", "parent_category_id": "cat-sepatu-sandal", "icon": "👟", "description": "Sneakers skate retro & sepatu jalan santai" },
      { "id": "sepatu-sandal", "name": "Sandal & Slip-On Slop", "slug": "sepatu-sandal", "parent_category_id": "cat-sepatu-sandal", "icon": "🩴", "description": "Sandal slop empuk EVA & sandal kasual rumah" },
      { "id": "sepatu-formal", "name": "Sepatu Formal & Loafer", "slug": "sepatu-formal", "parent_category_id": "cat-sepatu-sandal", "icon": "👞", "description": "Loafer pria & pantofel kerja formal" },
      { "id": "sepatu-heels", "name": "Heels & Flat Shoes", "slug": "sepatu-heels", "parent_category_id": "cat-sepatu-sandal", "icon": "👠", "description": "High heels, flat shoes, mules & wedges wanita" }
    ]
  },
  {
    "id": "cat-accessories",
    "name": "Aksesoris & Perhiasan",
    "slug": "accessories-jewelry",
    "description": "Gelang titanium anti karat, cincin couple, kalung liontin, jedai Korea, topi & printilan fashion.",
    "icon_name": "Sparkles",
    "cover_image": "https://down-id.img.susercontent.com/file/6343ef8fa286df4d7c5b1f24194dbcbc",
    "sort_order": 7,
    "is_active": true,
    "subcategories": [
      { "id": "acc-jewelry", "name": "Perhiasan Titanium", "slug": "acc-jewelry", "parent_category_id": "cat-accessories", "icon": "💍", "description": "Gelang titanium anti karat, cincin & kalung" },
      { "id": "acc-fashion", "name": "Aksesoris Fashion", "slug": "acc-fashion", "parent_category_id": "cat-accessories", "icon": "🕶️", "description": "Jedai rambut Korea, topi distro & kacamata" }
    ]
  },
  {
    "id": "cat-skincare-beauty",
    "name": "Skincare & Perawatan Diri",
    "slug": "skincare-beauty",
    "description": "Serum glowing, facial wash, toner, sunscreen, scrub badan, & perawatan harian terpercaya.",
    "icon_name": "Heart",
    "cover_image": "https://down-id.img.susercontent.com/file/id-11134207-81ztg-mq8fw3fafbws46",
    "sort_order": 8,
    "is_active": true,
    "subcategories": [
      { "id": "beauty-wajah", "name": "Skincare Wajah Glowing", "slug": "beauty-wajah", "parent_category_id": "cat-skincare-beauty", "icon": "✨", "description": "Serum glowing, sunscreen, facial wash & toner" },
      { "id": "beauty-badan", "name": "Bodycare & Rambut", "slug": "beauty-badan", "parent_category_id": "cat-skincare-beauty", "icon": "🧴", "description": "Body scrub, lotion mencerahkan, shampoo & pomade" }
    ]
  },
  {
    "id": "cat-parfum-fragrance",
    "name": "Parfum & Fragrance",
    "slug": "parfum-fragrance",
    "description": "Extrait de parfum mewah tahan lama, decant viral, & aroma memikat pilihan Ze.",
    "icon_name": "Flame",
    "cover_image": "https://down-id.img.susercontent.com/file/id-11134207-822wi-mnfy30pupsshee",
    "sort_order": 9,
    "is_active": true,
    "subcategories": [
      { "id": "parfum-extrait", "name": "Extrait & EDP Mewah", "slug": "parfum-extrait", "parent_category_id": "cat-parfum-fragrance", "icon": "🌸", "description": "Parfum tahan lama 24 jam & decant viral" }
    ]
  },
  {
    "id": "cat-aesthetic-room",
    "name": "Perlengkapan Rumah & Kamar",
    "slug": "aesthetic-room",
    "description": "Tumbler stainless tahan dingin 24 jam, botol minum, dekorasi meja kerja, sprei & perlengkapan rumah.",
    "icon_name": "Home",
    "cover_image": "https://down-id.img.susercontent.com/file/id-11134207-822wo-mo56kw6syiva82",
    "sort_order": 10,
    "is_active": true,
    "subcategories": [
      { "id": "home-room", "name": "Tumbler & Dekor Meja", "slug": "home-room", "parent_category_id": "cat-aesthetic-room", "icon": "🏠", "description": "Tumbler tahan dingin 24 jam, botol minum & dekor meja" },
      { "id": "home-sprei", "name": "Sprei & Perlengkapan Tidur", "slug": "home-sprei", "parent_category_id": "cat-aesthetic-room", "icon": "🛏️", "description": "Sprei katun halus, sarung bantal & selimut" }
    ]
  },
  {
    "id": "cat-food-snack",
    "name": "Makanan & Snack Ol Shop",
    "slug": "food-snack",
    "description": "Camilan viral basreng pedas daun jeruk, kerupuk renyah, & kebutuhan sembako promo.",
    "icon_name": "Sparkles",
    "cover_image": "https://down-id.img.susercontent.com/file/id-11134207-7rbke-ma7vs1c79of1c0",
    "sort_order": 11,
    "is_active": true,
    "subcategories": [
      { "id": "snack-pedas", "name": "Camilan Pedas & Basreng", "slug": "snack-pedas", "parent_category_id": "cat-food-snack", "icon": "🍿", "description": "Basreng daun jeruk renyah & kerupuk pedas" },
      { "id": "snack-sembako", "name": "Bahan Dapur & Promo", "slug": "snack-sembako", "parent_category_id": "cat-food-snack", "icon": "🍳", "description": "Minyak goreng promo & bumbu masak ol shop" }
    ]
  }
];

export const initialCollections: Collection[] = [
  {
    "id": "col-best-seller",
    "title": "Best Seller 10RB+ Terjual",
    "slug": "best-seller-shopee",
    "description": "Produk-produk terlaris yang sudah dibuktikan ribuan pembeli di Shopee dengan rating tinggi.",
    "badge_text": "Terlaris 🔥",
    "cover_image": "https://down-id.img.susercontent.com/file/id-11134207-7rbke-ma7vs1c79of1c0",
    "is_published": true,
    "sort_order": 1
  },
  {
    "id": "col-under-50k",
    "title": "Pilihan Under 50k",
    "slug": "pilihan-under-50k",
    "description": "Koleksi barang berkualitas harga super hemat ramah kantong di bawah Rp 50.000.",
    "badge_text": "Hemat 💸",
    "cover_image": "https://down-id.img.susercontent.com/file/id-11134207-81zte-mrmobyywim0x8d",
    "is_published": true,
    "sort_order": 2
  },
  {
    "id": "col-piyama-adem",
    "title": "Baju Tidur & Piyama Santai",
    "slug": "baju-tidur-piyama-adem",
    "description": "Setelan piyama katun rayon super adem dan enak dipakai seharian di rumah.",
    "badge_text": "Comfy 😴",
    "cover_image": "https://down-id.img.susercontent.com/file/91f5d9bd6f645c992910082c5739553c",
    "is_published": true,
    "sort_order": 3
  },
  {
    "id": "col-gamis-kondangan",
    "title": "Gamis & Abaya Kondangan",
    "slug": "gamis-abaya-kondangan",
    "description": "Inspirasi gamis brokat, abaya malika, dan dress muslimah anggun untuk acara spesial.",
    "badge_text": "Elegan 🌙",
    "cover_image": "https://down-id.img.susercontent.com/file/id-11134207-81ztm-ms2dzsj9dkw62c",
    "is_published": true,
    "sort_order": 4
  },
  {
    "id": "col-skincare-glowing",
    "title": "Perawatan Kulit & Skincare",
    "slug": "perawatan-kulit-skincare",
    "description": "Pilihan serum pencerah, sunscreen, dan perawatan tubuh terpercaya.",
    "badge_text": "Glowing ✨",
    "cover_image": "https://down-id.img.susercontent.com/file/id-11134207-81ztg-mq8fw3fafbws46",
    "is_published": true,
    "sort_order": 5
  },
  {
    "id": "col-parfum-mewah",
    "title": "Parfum & Wangi Tahan Lama",
    "slug": "parfum-wangi-tahan-lama",
    "description": "Aroma parfum extrait mewah dan decant viral yang tahan seharian.",
    "badge_text": "Fragrance 🌸",
    "cover_image": "https://down-id.img.susercontent.com/file/id-11134207-822wi-mnfy30pupsshee",
    "is_published": true,
    "sort_order": 6
  }
];

import initialProductsJson from "./initial-products.json";

export const initialProducts: Product[] = initialProductsJson as unknown as Product[];
