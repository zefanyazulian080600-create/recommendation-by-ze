import { Product, Marketplace, Category } from "@/types";

export type AiVibeTone =
  | "skena"
  | "starboy"
  | "kalcer"
  | "clean"
  | "dupe"
  | "viral";

export interface AiProductPromptInput {
  rawKeyword: string;
  categoryHint?: string;
  vibe?: AiVibeTone;
  gender?: "all" | "men" | "women" | "unisex";
  priceEstimate?: number;
  marketplace?: Marketplace;
}

export interface AiGeneratedProductDraft {
  name: string;
  slug: string;
  categoryId: string;
  shortDescription: string;
  description: string;
  tags: string[];
  price: number;
  originalPrice?: number;
  priceNote: string;
  sizeNotes: string;
  badgeLabel: string;
  seoTitle: string;
  seoDescription: string;
  suggestedImageUrl: string;
  suggestedVariants: { name: string; options: string[] }[];
}

export interface SocialCaptionBundle {
  tiktokScript: string;
  igStory: string;
  telegramBroadcast: string;
  twitterHook: string;
}

// Koleksi preset produk siap pakai 1-klik untuk Admin Ze
export const READY_MADE_PRESETS: {
  id: string;
  label: string;
  category: string;
  badge: string;
  data: Partial<AiGeneratedProductDraft>;
}[] = [
  {
    id: "preset-boxy-tee",
    label: "👕 Heavyweight Boxy Tee (Skena Kalcer)",
    category: "cat-outfit-unisex",
    badge: "Skena Approved",
    data: {
      name: "Heavyweight Boxy Tee 24s - Washed Charcoal (Unisex)",
      slug: "heavyweight-boxy-tee-washed-charcoal",
      categoryId: "cat-outfit-unisex",
      shortDescription:
        "Kaos katun tebal 24s dengan potongan boxy cropped. Kerah rapat anti kendor, auto bikin siluet pundak tegap dan aesthetic.",
      description: `### Kenapa Ze Rekomendasiin Ini?
Buat yang bosen sama kaos tipis yang gampang melar sehabis dicuci, ini nemu alternatif local pride yang fitting-nya beneran setara brand streetwear luar negeri.

### 🧵 Material & Detail
* **Bahan:** 100% Heavy Cotton 24s (210–220 GSM), adem tapi berstruktur tegas
* **Fitting:** Boxy Fit with Drop Shoulder (bahu jatuh proporsional)
* **Kerah:** Rib tebal 3 cm yang rapat, tahan cuci berkali-kali tanpa keriting
* **Finishing:** Washed vintage texture yang gak gampang luntur

### 🕶️ Formula Styling OOTD
* **Skena Look:** Padukan dengan Carpenter Pants lecek, sneakers retro, dan sling bag mini.
* **Clean Look:** Masukkan sebagian (front-tuck) ke dalam celana bahan pleats warna cream/khaki.`,
      tags: ["skena", "kalcer", "boxytee", "heavycotton", "streetwear", "unisex", "shopeehaul", "outfitkuliah"],
      price: 119000,
      originalPrice: 179000,
      priceNote: "Harga promo flash sale toko, klaim voucher gratis ongkir",
      sizeNotes: "Model TB 173cm BB 63kg pakai size L untuk look boxy santai. Ambil true size buat fit pas.",
      badgeLabel: "Skena Approved",
      seoTitle: "Heavyweight Boxy Tee 24s Washed Charcoal Unisex • Rekomendasi Ze",
      seoDescription: "Rekomendasi kaos boxy heavyweight katun 24s anti melar untuk cowok & cewek. Cocok buat outfit skena dan nongkrong harian.",
      suggestedImageUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=900&auto=format&fit=crop",
      suggestedVariants: [{ name: "Ukuran", options: ["S", "M", "L", "XL"] }],
    },
  },
  {
    id: "preset-camp-linen",
    label: "👔 Camp Collar Linen Shirt (Kalcer Santa)",
    category: "cat-outfit-pria",
    badge: "Ze's Pick",
    data: {
      name: "Camp Collar Relaxed Linen Shirt - Oatmeal Sage",
      slug: "camp-collar-relaxed-linen-shirt-oatmeal-sage",
      categoryId: "cat-outfit-pria",
      shortDescription:
        "Kemeja santai bahan linen blend breathable dengan kerah liburan retro. Jatuh bahan flowy, adem parah buat WFC atau ngopi sore.",
      description: `### Kenapa Ze Rekomendasiin Ini?
Kemeja wajib punya buat cuaca tropis Jakarta. Potongan camp collar bikin leher keliatan jenjang dan ngasih kesan effortless chic tanpa keliatan kaku.

### 🧵 Material & Detail
* **Bahan:** Premium Linen Cotton Blend (breathable, tekstur serat alami estetik)
* **Fitting:** Relaxed Casual Cut (bisa dipakai kancing terbuka sebagai outer)
* **Kancing:** Shell finish tone-on-tone yang minimalis berkelas

### 🕶️ Formula Styling OOTD
* **Ngopi Santa:** Buka 2 kancing atas, pakai tanktop/inner putih, padukan celana corduroy pendek & loafers kulit.
* **Semi Formal:** Kancingkan penuh dengan trousers hitam bahan jatuh untuk dinner santai.`,
      tags: ["kalcer", "linenshirt", "campcollar", "outfitnongkrong", "oldmoney", "wfc", "shopeefinds"],
      price: 165000,
      originalPrice: 245000,
      priceNote: "Diskon payday sale toko, stok warna earth tone cepat habis",
      sizeNotes: "Model TB 175cm BB 67kg pakai size L. Fitting cenderung santai (loose).",
      badgeLabel: "Ze's Pick",
      seoTitle: "Camp Collar Relaxed Linen Shirt Oatmeal Sage • Rekomendasi Ze",
      seoDescription: "Kemeja linen santai model kerah retro adem dan flowy. Pilihan terbaik buat outfit ngopi dan nongkrong kalcer.",
      suggestedImageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=900&auto=format&fit=crop",
      suggestedVariants: [{ name: "Ukuran", options: ["M", "L", "XL"] }],
    },
  },
  {
    id: "preset-carpenter-pants",
    label: "👖 Wide Leg Carpenter Denim (Unisex Drip)",
    category: "cat-outfit-unisex",
    badge: "Viral TikTok",
    data: {
      name: "Vintage Washed Carpenter Wide Leg Denim - Ash Grey",
      slug: "vintage-washed-carpenter-wide-leg-denim-ash-grey",
      categoryId: "cat-outfit-unisex",
      shortDescription:
        "Celana denim potongan lebar dengan detail hammer loop & kantong utility kerja. Warna washed pudar natural yang auto bikin jenjang.",
      description: `### Kenapa Ze Rekomendasiin Ini?
Alternatif celana Carhartt jutaan rupiah. Potongan celana lurus lebar (wide leg) dengan rise pas di pinggang bikin ilusi kaki jenjang dan nutupi proporsi paha.

### 🧵 Material & Detail
* **Bahan:** 13.5 oz Non-stretch Denim (kokoh bertekstur, gak kaku dan gak tipis)
* **Finishing:** Stone wash vintage yang pudar estetik di area paha dan lutut
* **Detail:** Kantong samping ganda dan hammer loop khas celana tukang kayu workwear

### 🕶️ Formula Styling OOTD
* **Starboy/Skena:** Padukan dengan cropped sweater hitam dan sepatu sol tebal (chunky sneakers atau Docmart).`,
      tags: ["carpenterpants", "wideleg", "denimvintage", "streetwear", "unisex", "dupealert", "ootd"],
      price: 219000,
      originalPrice: 320000,
      priceNote: "Dapat gratis sabuk minimalis selama periode promo toko",
      sizeNotes: "Panjang celana 105 cm. TB 160-168cm disarankan pakai sepatu bersol tebal atau roll-up 1 lipatan.",
      badgeLabel: "Viral TikTok",
      seoTitle: "Vintage Washed Carpenter Wide Leg Denim Ash Grey • Rekomendasi Ze",
      seoDescription: "Celana jeans carpenter lebar kekinian model vintage workwear unisex. Bikin kaki kelihatan jenjang dan proporsional.",
      suggestedImageUrl: "https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=900&auto=format&fit=crop",
      suggestedVariants: [{ name: "Size Celana", options: ["28", "30", "32", "34"] }],
    },
  },
  {
    id: "preset-detroit-jacket",
    label: "🧥 Cropped Canvas Work Jacket (Dupe Carhartt)",
    category: "cat-outfit-unisex",
    badge: "Dupe Alert",
    data: {
      name: "Heavy Canvas Detroit Work Jacket - Vintage Tan Khaki",
      slug: "heavy-canvas-detroit-work-jacket-vintage-tan",
      categoryId: "cat-outfit-unisex",
      shortDescription:
        "Jaket kanvas potongan boxy cropped dengan kerah corduroy cokelat kontras. Look Carhartt Detroit Rp 3.5M dengan budget cuma 200 ribuan.",
      description: `### Kenapa Ze Rekomendasiin Ini?
Dupe Carhartt Detroit paling worth-it di marketplace. Siluet boxy sedikit di atas pinggang bikin postur tubuh keliatan lebih atletis dan gak tenggelam.

### 🧵 Material & Detail
* **Bahan Luar:** Heavy Cotton Canvas 12 oz kokoh
* **Kerah:** Corduroy tebal warna cokelat tua bertekstur
* **Furing:** Poliester adem yang nyaman dipakai siang maupun malam
* **Zipper:** Metal zipper kuningan vintage kokoh anti seret`,
      tags: ["dupealert", "carharttdetroit", "canvasjacket", "workwear", "skena", "starboy", "outerwear"],
      price: 239000,
      originalPrice: 380000,
      priceNote: "Hemat hingga 92% dibanding harga retail Carhartt original",
      sizeNotes: "Potongan cropped boxy. Jika ingin pakai hoodie tebal di dalam, disarankan naik 1 size.",
      badgeLabel: "Dupe Alert",
      seoTitle: "Heavy Canvas Detroit Work Jacket Vintage Tan • Rekomendasi Ze",
      seoDescription: "Jaket kanvas boxy vintage dupe Carhartt Detroit. Look workwear mewah dengan harga ramah kantong mahasiswa.",
      suggestedImageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=900&auto=format&fit=crop",
      suggestedVariants: [{ name: "Ukuran", options: ["M", "L", "XL"] }],
    },
  },
  {
    id: "preset-parfum-santal",
    label: "🧴 Extrait de Parfum Woody Santal (Aroma Skena)",
    category: "cat-skincare-makeup",
    badge: "Starboy Essential",
    data: {
      name: "Extrait de Parfum Santal & Smoked Papyrus 50ml (Unisex)",
      slug: "extrait-de-parfum-santal-smoked-papyrus-50ml",
      categoryId: "cat-skincare-makeup",
      shortDescription:
        "Parfum lokal konsentrasi extrait dengan aroma kayu cendana hangat, cardamom, dan kulit mewah. Tahan 10-12 jam, aroma khas anak Senopati & SCBD.",
      description: `### Kenapa Ze Rekomendasiin Ini?
Dupe dari Le Labo Santal 33 yang legendaris. Aromanya mahal, misterius, dan unisex banget. Gak manis eneg, melainkan clean woody spicy yang langsung naikin aura seketika.

### 🪵 Piramida Aroma (Fragrance Notes)
* **Top Notes:** Violet Leaves, Cardamom, Australian Papyrus
* **Heart Notes:** Cedarwood Virginia, Iris, Smoked Amber
* **Base Notes:** Creamy Sandalwood, Cashmere Wood, Warm Leather

### ⏳ Performa & Ketahanan
* **Longevity:** 10–12 jam di kulit, 24 jam di pakaian
* **Sillage / Jejak Aroma:** Medium to Strong (meninggalkan aroma harum lembut saat kamu lewat)`,
      tags: ["parfumviral", "santal33", "lelabodupe", "starboy", "skena", "scent", "unisexperfume"],
      price: 189000,
      originalPrice: 285000,
      priceNote: "Konsentrasi 35% Extrait de Parfum, bukan sekadar EDP biasa",
      sizeNotes: "Botol kaca tebal 50ml travel friendly dengan spray atomiser halus.",
      badgeLabel: "Starboy Essential",
      seoTitle: "Extrait de Parfum Santal Smoked Papyrus 50ml Unisex • Rekomendasi Ze",
      seoDescription: "Parfum aroma kayu cendana mewah dupe Le Labo Santal 33. Tahan hingga 12 jam untuk cowok dan cewek.",
      suggestedImageUrl: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=900&auto=format&fit=crop",
      suggestedVariants: [{ name: "Isi", options: ["50ml Full Bottle", "10ml Travel Decant"] }],
    },
  },
  {
    id: "preset-retro-sneakers",
    label: "👟 Gum Sole Retro Terrace Sneakers (Samba Look)",
    category: "cat-sepatu-sandal",
    badge: "Steal Deal",
    data: {
      name: "Retro Terrace Gum Sole Leather Sneakers - White Core Black",
      slug: "retro-terrace-gum-sole-leather-sneakers-white-black",
      categoryId: "cat-sepatu-sandal",
      shortDescription:
        "Sneakers retro siluet rendah dengan sol karet mentah (gum sole) dan aksen suede abu-abu di ujung jari. Versatile dipadukan celana apa pun.",
      description: `### Kenapa Ze Rekomendasiin Ini?
Solusi buat yang pengen siluet Adidas Samba OG tapi gak mau keluar budget Rp 2.2 juta. Insole-nya empuk dengan busa cloudfoam lokal yang gak bikin lecet di tumit sehabis jalan seharian.

### 👟 Spesifikasi
* **Upper:** Faux Leather lembut dikombinasikan Suede toe cap
* **Outsole:** 100% Karet mentah (Vulcanized Gum Sole) anti licin
* **Insole:** Eva sponge empuk berpori udara`,
      tags: ["sambadupe", "retrosneakers", "gumsole", "sepatukalcer", "unisexshoes", "shopeefinds"],
      price: 219000,
      originalPrice: 349000,
      priceNote: "Gratis kaos kaki retro rib putih selama persediaan masih ada",
      sizeNotes: "True to size. Jika kaki lebar (wide feet), disarankan naik 1 size (up-size) agar jari leluasa.",
      badgeLabel: "Steal Deal",
      seoTitle: "Retro Terrace Gum Sole Leather Sneakers White Black • Rekomendasi Ze",
      seoDescription: "Sneakers retro gum sole alternatif Adidas Samba dengan sol karet mentah dan insole empuk untuk cowok dan cewek.",
      suggestedImageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=900&auto=format&fit=crop",
      suggestedVariants: [{ name: "Ukuran", options: ["38", "39", "40", "41", "42", "43", "44"] }],
    },
  },
];

// Helper Generator Utama: Otomatis mengisi seluruh field formulir dengan AI lokal
export function generateProductFromPrompt(
  input: AiProductPromptInput
): AiGeneratedProductDraft {
  const kw = input.rawKeyword.trim().toLowerCase();
  const vibe = input.vibe || "skena";

  // Cek kategori berdasarkan kata kunci
  let categoryId = input.categoryHint || "cat-outfit-unisex";
  if (kw.includes("sepatu") || kw.includes("sneaker") || kw.includes("sandal") || kw.includes("loafer") || kw.includes("boots")) {
    categoryId = "cat-sepatu-sandal";
  } else if (kw.includes("celana") || kw.includes("pants") || kw.includes("jeans") || kw.includes("trouser") || kw.includes("shorts")) {
    categoryId = "cat-outfit-unisex";
  } else if (kw.includes("parfum") || kw.includes("scent") || kw.includes("fragrance") || kw.includes("skincare")) {
    categoryId = "cat-skincare-makeup";
  } else if (kw.includes("tas") || kw.includes("tote") || kw.includes("bag") || kw.includes("kacamata") || kw.includes("topi") || kw.includes("aksesoris")) {
    categoryId = "cat-tas-aksesoris";
  } else if (kw.includes("kemeja") || kw.includes("shirt") || kw.includes("jaket") || kw.includes("jacket") || kw.includes("outer") || kw.includes("kaos") || kw.includes("tee")) {
    categoryId = input.gender === "men" ? "cat-outfit-pria" : input.gender === "women" ? "cat-outfit-wanita" : "cat-outfit-unisex";
  }

  // Bersihkan dan format nama produk
  const cleanTitle = formatProductTitle(input.rawKeyword, vibe, categoryId);
  const slug = cleanTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  // Generate deskripsi singkat
  const shortDescription = generateShortHook(cleanTitle, vibe);

  // Generate ulasan komprehensif
  const description = generateFullReview(cleanTitle, categoryId, vibe);

  // Generate tags viral
  const tags = generateViralTagsList(cleanTitle, categoryId, vibe);

  // Harga estimasi
  const price = input.priceEstimate || guessPrice(kw, categoryId);
  const originalPrice = Math.round(price * 1.45 / 1000) * 1000;

  // Catatan harga & size
  const priceNote = generatePriceNote(vibe);
  const sizeNotes = generateSizeAdvice(categoryId);

  // Badge label
  const badgeLabel = generateBadge(vibe);

  // SEO
  const seoTitle = `${cleanTitle} • Rekomendasi Ze`;
  const seoDescription = `${shortDescription} Temukan kurasi produk fashion & lifestyle unisex pilihan Ze dengan harga ramah kantong.`;

  // Gambar representatif
  const suggestedImageUrl = getFallbackImageByCategory(categoryId);

  return {
    name: cleanTitle,
    slug,
    categoryId,
    shortDescription,
    description,
    tags,
    price,
    originalPrice,
    priceNote,
    sizeNotes,
    badgeLabel,
    seoTitle,
    seoDescription,
    suggestedImageUrl,
    suggestedVariants: getVariantsByCategory(categoryId),
  };
}

// Format Judul Produk Bergaya Editorial & Catchy
function formatProductTitle(raw: string, vibe: AiVibeTone, catId: string): string {
  let title = raw.trim();
  // Capitalize kata-kata utama
  title = title
    .split(" ")
    .map((w) => (w.length > 2 ? w.charAt(0).toUpperCase() + w.slice(1) : w))
    .join(" ");

  // Tambahkan aksen style jika judul terlalu pendek
  if (title.length < 25) {
    if (vibe === "skena") {
      title += " (Skena Kalcer Approved)";
    } else if (vibe === "starboy") {
      title += " - Minimalist Luxury Fit";
    } else if (vibe === "dupe") {
      title += " (Smart Budget Alternative)";
    } else {
      title += " - Unisex Relaxed Fit";
    }
  }

  return title;
}

// Generate Hook 1 Kalimat
export function generateShortHook(name: string, vibe: AiVibeTone): string {
  const hooksSkena = [
    `Potongan boxy santai dengan material adem yang langsung naikin aura pas diajak nongkrong di Blok M.`,
    `Alternatif fashion kalcer lokal yang jatuhnya proporsional, gak bikin gerah dan anti mati gaya.`,
    `Siluet vintage santai dengan tekstur kain premium, bikin OOTD harian kamu keliatan effortless tapi berkelas.`,
  ];

  const hooksStarboy = [
    `Sentuhan monokrom clean dengan siluet berstruktur tegas, cocok buat dinner date atau hangout malam di SCBD.`,
    `Aksen timeless luxury dengan fitting jatuh sempurna, ngasih kesan cowok/cewek mahal tanpa harus keluar budget jutaan.`,
    `Desain sleek dan versatile yang gampang dipadukan dengan trousers bahan atau aksesoris kulit.`,
  ];

  const hooksDupe = [
    `Look & material 90% mirip brand hype jutaan rupiah, tapi bisa kamu amankan dengan harga di bawah 200 ribu!`,
    `Kenapa harus keluar jutaan kalau alternatif lokal ini punya build quality dan fitting yang sama mewahnya?`,
    `Solusi tampil stylish tanpa bikin saldo rekening boncos, wajib masuk wishlist sebelum sold out.`,
  ];

  const hooksDefault = [
    `Pilihan esensial unisex dengan bahan berkualitas tinggi dan fitting nyaman untuk aktivitas harianmu.`,
    `Item serbaguna yang gampang di-mix and match untuk berbagai kesempatan, dari kuliah sampai WFC santai.`,
  ];

  const pool =
    vibe === "skena" || vibe === "kalcer"
      ? hooksSkena
      : vibe === "starboy"
      ? hooksStarboy
      : vibe === "dupe"
      ? hooksDupe
      : hooksDefault;

  return pool[Math.floor(Math.random() * pool.length)];
}

// Generate Review Lengkap Ala Stylist Ze
export function generateFullReview(
  name: string,
  categoryId: string,
  vibe: AiVibeTone
): string {
  return `### Kenapa Ze Rekomendasiin Produk Ini?
Setelah kurasi beberapa toko online shop lokal, produk ini punya penilaian jahitan, konsistensi bahan, dan siluet fitting paling memuaskan di kelas harganya. Cocok banget buat kamu yang mau upgrade penampilan tanpa ribet.

### 🧵 Material & Detail Finisihing
* **Karakter Bahan:** Kain bertekstur lembut, adem di kulit, dan tidak mudah kusut setelah dicuci.
* **Jahitan & Kerutan:** Jahitan rantai ganda di area krusial, rapi tanpa benang sisa berlebih.
* **Proporsi Potongan:** Dirancang dengan proporsi modern yang menyanjung postur tubuh (mengikuti rumus Rule of Thirds).

### 🕶️ Formula Styling OOTD
* **Casual Nongkrong:** Padukan dengan celana bahan rileks (relaxed trousers) dan sepatu ber-sol datar vintage.
* **Semi Formal / Kuliah:** Padukan dengan inner kaos polos rapi dan tas selempang minimalis.
* **Aksesoris:** Tambahkan kacamata frame tipis atau jam tangan simpel untuk melengkapi aura aesthetic.

### 💡 Tips Perawatan
* Cuci dengan putaran lembut atau cuci tangan untuk menjaga serat kain dan kepekatan warna.
* Hindari jemur di bawah terik matahari langsung agar warna tidak cepat pudar.`;
}

// Generate Tags Viral
export function generateViralTagsList(
  name: string,
  categoryId: string,
  vibe: AiVibeTone
): string[] {
  const base = ["shopeehaul", "tiktokfinds", "unisex", "ootdindo", "racunshopee"];
  if (vibe === "skena") {
    return [...base, "skena", "kalcer", "blokm", "streetwear", "vintagevibe"];
  } else if (vibe === "starboy") {
    return [...base, "starboy", "scbd", "quietluxury", "cleanfit", "allblack"];
  } else if (vibe === "dupe") {
    return [...base, "dupealert", "stealdeal", "hematbudget", "lokalpride", "alternatifmurah"];
  }
  return [...base, "casualfit", "koreanstyle", "rekomendasize", "minimalist"];
}

// Generate Ukuran & Proporsi
export function generateSizeAdvice(categoryId: string): string {
  if (categoryId === "cat-sepatu-sandal") {
    return "True to size. Jika punggung kaki tebal atau telapak lebar (wide feet), disarankan naik 1 nomor (up-size) agar lebih nyaman.";
  }
  if (categoryId === "cat-outfit-unisex" || categoryId === "cat-outfit-pria") {
    return "Model TB 173cm BB 63kg pakai size L untuk look relaxed boxy. Ambil size normal kamu (true-to-size) jika ingin look pas badan.";
  }
  if (categoryId === "cat-skincare-makeup") {
    return "Ukuran botol ringkas travel-friendly, cocok dibawa di dalam tas harian atau pouch nongkrong.";
  }
  return "Ukuran all-size fleksibel dengan toleransi ukuran jahitan sekitar 1-2 cm.";
}

// Generate Badge
export function generateBadge(vibe: AiVibeTone): string {
  switch (vibe) {
    case "skena":
      return "Skena Approved";
    case "starboy":
      return "Starboy Essential";
    case "dupe":
      return "Dupe Alert ⚡";
    case "kalcer":
      return "Ze's Pick ✨";
    case "viral":
      return "Viral TikTok 🔥";
    default:
      return "Must Have";
  }
}

// Generate Catatan Harga
export function generatePriceNote(vibe: AiVibeTone): string {
  if (vibe === "dupe") {
    return "Hemat ratusan ribu dibanding versi brand luar negeri ternama";
  }
  return "Harga promo saat flash sale toko, klaim voucher toko sebelum kehabisan";
}

// Tebak harga perkiraan awal
function guessPrice(kw: string, catId: string): number {
  if (catId === "cat-sepatu-sandal") return 199000;
  if (catId === "cat-skincare-makeup") return 145000;
  if (catId === "cat-tas-aksesoris") return 89000;
  if (kw.includes("jaket") || kw.includes("jacket") || kw.includes("blazer")) return 229000;
  if (kw.includes("celana") || kw.includes("pants") || kw.includes("jeans")) return 175000;
  if (kw.includes("kemeja") || kw.includes("shirt")) return 149000;
  return 109000;
}

function getFallbackImageByCategory(catId: string): string {
  switch (catId) {
    case "cat-sepatu-sandal":
      return "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=900&auto=format&fit=crop";
    case "cat-skincare-makeup":
      return "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=900&auto=format&fit=crop";
    case "cat-tas-aksesoris":
      return "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=900&auto=format&fit=crop";
    case "cat-outfit-pria":
      return "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=900&auto=format&fit=crop";
    case "cat-outfit-wanita":
      return "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop";
    default:
      return "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=900&auto=format&fit=crop";
  }
}

function getVariantsByCategory(catId: string) {
  if (catId === "cat-sepatu-sandal") {
    return [{ name: "Ukuran Sepatu", options: ["39", "40", "41", "42", "43"] }];
  }
  if (catId === "cat-skincare-makeup") {
    return [{ name: "Varian / Isi", options: ["30ml", "50ml"] }];
  }
  return [{ name: "Ukuran", options: ["M", "L", "XL"] }];
}

// Generate Social Media Captions untuk TikTok, Instagram, Twitter, & Telegram
export function generateSocialCaptions(p: {
  name: string;
  price?: number;
  originalPrice?: number;
  shortDesc?: string;
  badgeLabel?: string;
  affiliateUrl?: string;
}): SocialCaptionBundle {
  const name = p.name || "Outfit Rekomendasi Ze";
  const priceStr = p.price ? `Rp ${p.price.toLocaleString("id-ID")}` : "Rp 99.000";
  const originalStr = p.originalPrice ? `Rp ${p.originalPrice.toLocaleString("id-ID")}` : "Rp 189.000";

  const tiktokScript = `[HOOK 3 DETIK PERTAMA]:
"Stop scrolling kalau kamu masih bingung cari outfit yang jatuhnya rapi dan gak bikin keliatan bantet!"

[BODY KONTEN]:
Nemu hidden gem satu ini di toko oren/ijo: ${name}.
Bahannya beneran adem, jahitannya rapat, dan potongannya auto naikin aura. Dari harga normal ${originalStr}, pas promo dapet cuma ${priceStr}!

[CTA PENUTUP]:
Link checkout udah Ze simpen di Bio profil nomor katalog teratas ya. Jangan sampai kehabisan ukuran! ⚡
#racunshopee #ootdindo #skenastyle #fashionhack #racunze`;

  const igStory = `Spill racun baru yang wajib masuk wishlist kamu hari ini ✨

📦 Item: ${name}
💸 Damage: Cuma ${priceStr} (hemat bgt dari ${originalStr})
Rating Ze: 9.8/10 ⭐ (Bahan adem & fitting juara)

👉 [KETUK STIKER TAUTAN DI ATAS UNTUK CO SEBELUM SOLD OUT]`;

  const telegramBroadcast = `🔥 RACUN AFFILIATE HARI INI • PILIHAN ZE 🔥

${name}
━━━━━━━━━━━━━━━━━━
💰 Harga Promo: ${priceStr} (Coret: ${originalStr})
🏷️ Status: ${p.badgeLabel || "Ze's Pick"}

Kenapa wajib punya:
${p.shortDesc || "Bahan premium adem, jahitan kokoh, fitting proporsional untuk cowok & cewek."}

🛒 LINK BELANJA RESMI:
${p.affiliateUrl || "https://shope.ee/..."}

(Buruan checkout sebelum voucher diskon toko habis ya guys!)`;

  const twitterHook = `nemu racun outfit yang fitting-nya beneran cakepp bgt buat cowok/cewek 😭✋

${name}
harganya cuma ${priceStr}-an tp looknya mirip brand jutaan. 

link shopee nya gue drop di reply ya 👇👇`;

  return {
    tiktokScript,
    igStory,
    telegramBroadcast,
    twitterHook,
  };
}
