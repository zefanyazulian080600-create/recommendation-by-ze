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

// Koleksi preset produk siap pakai 1-klik untuk Admin Ze (Universal Online Shop)
export const READY_MADE_PRESETS: {
  id: string;
  label: string;
  category: string;
  badge: string;
  data: Partial<AiGeneratedProductDraft>;
}[] = [
  {
    id: "preset-wireless-tws",
    label: "🎧 Hybrid ANC Wireless TWS (Gadget Setup)",
    category: "cat-gadget-setup",
    badge: "Best Value Setup",
    data: {
      name: "Hybrid ANC Low Latency Wireless TWS Earbuds - Matte Obsidian",
      slug: "hybrid-anc-wireless-tws-matte-obsidian",
      categoryId: "cat-gadget-setup",
      shortDescription:
        "TWS driver 13mm bass nendang dengan Active Noise Cancelling 35dB. Latency cuma 45ms pas buat gaming & nonton, batre tahan 30 jam.",
      description: `Kenapa Ze Rekomendasiin Ini?
Dupe dari TWS flagship 2 jutaan. ANC-nya beneran kedap untuk harga di bawah 200 ribu, pas banget dipakai saat WFC di cafe bising atau naik KRL.

⚡ Spesifikasi & Keunggulan
• Driver: 13mm Titanium Composite Driver (vokal jernih, sub-bass nendang)
• Konektivitas: Bluetooth 5.3 Low Latency 45ms (anti delay untuk game & video)
• Baterai: 6 jam non-stop earbud + 24 jam charging case (total 30 jam)
• Mikrofon: Quad-mic ENC untuk panggilan telepon jernih anti bising`,
      tags: ["twsmurah", "anc", "gadgetshopee", "desksetup", "audiophile", "racunshopee", "techfinds"],
      price: 189000,
      originalPrice: 320000,
      priceNote: "Garansi resmi toko 12 bulan tukar baru",
      sizeNotes: "Termasuk 3 pasang eartips silikon (S/M/L) & kabel Type-C braided.",
      badgeLabel: "Best Value Setup",
      seoTitle: "Hybrid ANC Low Latency Wireless TWS Earbuds • Rekomendasi Ze",
      seoDescription: "Rekomendasi TWS ANC murah di bawah 200 ribu dengan suara bass nendang dan delay rendah untuk gaming dan daily listening.",
      suggestedImageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=900&auto=format&fit=crop",
      suggestedVariants: [{ name: "Warna", options: ["Matte Obsidian Black", "Oatmeal Milk White"] }],
    },
  },
  {
    id: "preset-sunset-lamp",
    label: "💡 16-Color RGB Sunset Lamp (Kamar Kost Estetik)",
    category: "cat-aesthetic-room",
    badge: "Kamar Estetik",
    data: {
      name: "16 Colors RGB Sunset Projection Lamp with Remote Control",
      slug: "16-colors-rgb-sunset-projection-lamp-remote",
      categoryId: "cat-aesthetic-room",
      shortDescription:
        "Lampu proyektor golden hour sunset rotasi 360 derajat. 16 variasi warna via remote, auto bikin konten TikTok kamar kost jadi sinematik.",
      description: `Kenapa Ze Rekomendasiin Ini?
Printilan wajib buat kamar kost estetik atau backdrop live streaming. Lensa kristal HD menghasilkan gradasi warna matahari terbenam yang pekat dan hangat tanpa silau berlebih.

🏠 Spesifikasi & Detail
• Material: Aluminium alloy kokoh dengan dasar pemberat anti goyang
• Lensa: Lensa kristal optik cembung tebal dengan pancaran cahaya lebar
• Rotasi: Kepala lampu bisa diputar 360 derajat ke dinding maupun plafon
• Daya: Port USB 5V hemat listrik (bisa colok powerbank / laptop)`,
      tags: ["sunsetlamp", "kamarestetik", "kostvibes", "dekorasikamar", "ambientlight", "goldenhour", "tiktokviral"],
      price: 49000,
      originalPrice: 99000,
      priceNote: "Pilihan hemat budget di bawah 50k, include remote control",
      sizeNotes: "Tinggi stand 26cm fleksibel, colokan USB plug-and-play ke powerbank/laptop.",
      badgeLabel: "Kamar Estetik",
      seoTitle: "16 Colors RGB Sunset Projection Lamp Remote • Rekomendasi Ze",
      seoDescription: "Lampu proyektor sunset kamar estetik 16 warna murah meriah di bawah 50 ribu untuk suasana kamar hangat dan estetik.",
      suggestedImageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=900&auto=format&fit=crop",
      suggestedVariants: [{ name: "Tipe", options: ["16 Colors RGB + Remote", "Classic Golden Sunset"] }],
    },
  },
  {
    id: "preset-sunscreen-serum",
    label: "🧴 Ultralight UV Sunscreen Gel SPF50+ (Skincare Viral)",
    category: "cat-skincare-grooming",
    badge: "Holy Grail Skin",
    data: {
      name: "Ultralight Hyaluronic Watery Sunscreen Gel SPF 50+ PA++++ (50ml)",
      slug: "ultralight-hyaluronic-watery-sunscreen-spf50",
      categoryId: "cat-skincare-grooming",
      shortDescription:
        "Sunscreen tekstur gel cair seringan air tanpa whitecast. Cepat meresap, oil control 8 jam, gak bikin kusam atau perih di mata.",
      description: `Kenapa Ze Rekomendasiin Ini?
Sunscreen lokal yang paling nyaman dipakai seharian di cuaca panas. Cowok atau cewek yang benci sunscreen lengket wajib coba, sensasinya seperti pakai moisturizer air yang dingin.

🧴 Formulasi & Kandungan
• Tekstur: Watery gel transparan yang langsung lumer saat diusap
• Perlindungan: Broad spectrum SPF 50+ PA++++ teruji uji in-vitro & in-vivo
• Kandungan Aktif: 5X Hyaluronic Acid, Cica Extract & Niacinamide mencerahkan
• Sertifikasi: BPOM certified, Halal, Non-comedogenic`,
      tags: ["sunscreenviral", "skincareindo", "nowhitecast", "skincarecowok", "skincarecewek", "racuntiktok", "bpom"],
      price: 79000,
      originalPrice: 125000,
      priceNote: "BPOM approved, aman untuk kulit acne-prone & sensitif",
      sizeNotes: "Botol pump higienis 50ml, praktis dibawa dalam tas kuliah/kerja.",
      badgeLabel: "Holy Grail Skin",
      seoTitle: "Ultralight Hyaluronic Watery Sunscreen Gel SPF 50+ • Rekomendasi Ze",
      seoDescription: "Sunscreen gel ringan seringan air tanpa whitecast dan bebas lengket. Pilihan terbaik untuk cuaca terik Indonesia.",
      suggestedImageUrl: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=900&auto=format&fit=crop",
      suggestedVariants: [{ name: "Ukuran", options: ["50ml Reguler Pump", "30ml Travel Tube"] }],
    },
  },
  {
    id: "preset-tumbler-insulated",
    label: "☕ Vacuum Insulated Tumbler 900ml (Viral Ol Shop)",
    category: "cat-aesthetic-room",
    badge: "Viral Ol Shop",
    data: {
      name: "Vacuum Insulated Stainless Steel Tumbler 900ml with Handle & Straw",
      slug: "vacuum-insulated-stainless-tumbler-900ml",
      categoryId: "cat-aesthetic-room",
      shortDescription:
        "Tumbler stainless SUS304 double-wall penahan es dingin hingga 24 jam. Dilengkapi handle ergonomis dan sedotan anti tumpah.",
      description: `Kenapa Ze Rekomendasiin Ini?
Dupe dari tumbler viral Stanley Cup jutaan rupiah. Menjaga es kopi atau infused water tetap dingin seharian saat kerja di kantor atau kuliah tanpa ada kondensasi air di luar botol.

☕ Spesifikasi & Material
• Bahan: Food Grade Stainless Steel SUS304 (anti karat & bebas bau)
• Insulasi: Double-wall vacuum insulation (tahan dingin 24 jam, tahan panas 12 jam)
• Kapasitas: 900 ml (30 oz) pas untuk target hidrasi harian
• Tutup: 3-in-1 lid (bisa pakai sedotan, seruput langsung, atau ditutup rapat)`,
      tags: ["tumblerviral", "stanleydupe", "aestheticmug", "hematminum", "wfcessential", "shopeehaul"],
      price: 89000,
      originalPrice: 175000,
      priceNote: "Hemat hingga 85% dibanding tumbler hype impor",
      sizeNotes: "Kapasitas 900ml (30oz), pas masuk cup holder mobil & meja kerja.",
      badgeLabel: "Viral Ol Shop",
      seoTitle: "Vacuum Insulated Stainless Steel Tumbler 900ml • Rekomendasi Ze",
      seoDescription: "Tumbler stainless tahan dingin 24 jam alternatif Stanley Cup. Hemat dan estetik untuk meja kerja dan kuliah.",
      suggestedImageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=900&auto=format&fit=crop",
      suggestedVariants: [{ name: "Warna", options: ["Cream Ivory", "Charcoal Grey", "Matcha Sage", "Dusty Pink"] }],
    },
  },
  {
    id: "preset-boxy-tee",
    label: "👕 Heavyweight Boxy Tee 24s (Streetwear Kalcer)",
    category: "cat-outfit-unisex",
    badge: "Skena Approved",
    data: {
      name: "Heavyweight Boxy Tee 24s - Washed Charcoal (Unisex)",
      slug: "heavyweight-boxy-tee-washed-charcoal",
      categoryId: "cat-outfit-unisex",
      shortDescription:
        "Kaos katun tebal 24s dengan potongan boxy cropped. Kerah rapat anti kendor, auto bikin siluet pundak tegap dan aesthetic.",
      description: `Kenapa Ze Rekomendasiin Ini?
Buat yang bosen sama kaos tipis yang gampang melar sehabis dicuci, ini nemu alternatif local pride yang fitting-nya beneran setara brand streetwear luar negeri.

🧵 Material & Detail
• Bahan: 100% Heavy Cotton 24s (210–220 GSM), adem tapi berstruktur tegas
• Fitting: Boxy Fit with Drop Shoulder (bahu jatuh proporsional)
• Kerah: Rib tebal 3 cm yang rapat, tahan cuci berkali-kali tanpa keriting
• Finishing: Washed vintage texture yang gak gampang luntur`,
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
    label: "👔 Camp Collar Relaxed Linen Shirt (Kalcer Santa)",
    category: "cat-outfit-pria",
    badge: "Ze's Pick",
    data: {
      name: "Camp Collar Relaxed Linen Shirt - Oatmeal Sage",
      slug: "camp-collar-relaxed-linen-shirt-oatmeal-sage",
      categoryId: "cat-outfit-pria",
      shortDescription:
        "Kemeja santai bahan linen blend breathable dengan kerah liburan retro. Jatuh bahan flowy, adem parah buat WFC atau ngopi sore.",
      description: `Kenapa Ze Rekomendasiin Ini?
Kemeja wajib punya buat cuaca tropis Jakarta. Potongan camp collar bikin leher keliatan jenjang dan ngasih kesan effortless chic tanpa keliatan kaku.

🧵 Material & Detail
• Bahan: Premium Linen Cotton Blend (breathable, tekstur serat alami estetik)
• Fitting: Relaxed Casual Cut (bisa dipakai kancing terbuka sebagai outer)
• Kancing: Shell finish tone-on-tone yang minimalis berkelas`,
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
    id: "preset-parfum-santal",
    label: "🧴 Extrait de Parfum Woody Santal 50ml (Aroma Mahal)",
    category: "cat-skincare-grooming",
    badge: "Starboy Essential",
    data: {
      name: "Extrait de Parfum Santal & Smoked Papyrus 50ml (Unisex)",
      slug: "extrait-de-parfum-santal-smoked-papyrus-50ml",
      categoryId: "cat-skincare-grooming",
      shortDescription:
        "Parfum lokal konsentrasi extrait dengan aroma kayu cendana hangat, cardamom, dan kulit mewah. Tahan 10-12 jam, aroma khas anak Senopati & SCBD.",
      description: `Kenapa Ze Rekomendasiin Ini?
Dupe dari Le Labo Santal 33 yang legendaris. Aromanya mahal, misterius, dan unisex banget. Gak manis eneg, melainkan clean woody spicy yang langsung naikin aura seketika.

🪵 Piramida Aroma (Fragrance Notes)
• Top Notes: Violet Leaves, Cardamom, Australian Papyrus
• Heart Notes: Cedarwood Virginia, Iris, Smoked Amber
• Base Notes: Creamy Sandalwood, Cashmere Wood, Warm Leather`,
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
    category: "cat-bags-shoes",
    badge: "Steal Deal",
    data: {
      name: "Retro Terrace Gum Sole Leather Sneakers - White Core Black",
      slug: "retro-terrace-gum-sole-leather-sneakers-white-black",
      categoryId: "cat-bags-shoes",
      shortDescription:
        "Sneakers retro siluet rendah dengan sol karet mentah (gum sole) dan aksen suede abu-abu di ujung jari. Versatile dipadukan celana apa pun.",
      description: `Kenapa Ze Rekomendasiin Ini?
Solusi buat yang pengen siluet Adidas Samba OG tapi gak mau keluar budget Rp 2.2 juta. Insole-nya empuk dengan busa cloudfoam lokal yang gak bikin lecet di tumit sehabis jalan seharian.

👟 Spesifikasi
• Upper: Faux Leather lembut dikombinasikan Suede toe cap
• Outsole: 100% Karet mentah (Vulcanized Gum Sole) anti licin
• Insole: Eva sponge empuk berpori udara`,
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

  // Cek kategori berdasarkan kata kunci universal online shop
  let categoryId = input.categoryHint || "cat-outfit-unisex";
  if (
    kw.includes("keyboard") ||
    kw.includes("mouse") ||
    kw.includes("tws") ||
    kw.includes("headphone") ||
    kw.includes("earphone") ||
    kw.includes("lightbar") ||
    kw.includes("desk") ||
    kw.includes("gadget") ||
    kw.includes("charger") ||
    kw.includes("kabel") ||
    kw.includes("setup")
  ) {
    categoryId = "cat-gadget-setup";
  } else if (
    kw.includes("lampu") ||
    kw.includes("sunset") ||
    kw.includes("diffuser") ||
    kw.includes("cermin") ||
    kw.includes("sprei") ||
    kw.includes("kamar") ||
    kw.includes("kost") ||
    kw.includes("estetik") ||
    kw.includes("tumbler") ||
    kw.includes("botol") ||
    kw.includes("storage") ||
    kw.includes("organizer") ||
    kw.includes("rak") ||
    kw.includes("home")
  ) {
    categoryId = "cat-aesthetic-room";
  } else if (
    kw.includes("skincare") ||
    kw.includes("sunscreen") ||
    kw.includes("serum") ||
    kw.includes("moisturizer") ||
    kw.includes("cleanser") ||
    kw.includes("toner") ||
    kw.includes("parfum") ||
    kw.includes("scent") ||
    kw.includes("fragrance") ||
    kw.includes("cushion") ||
    kw.includes("lip")
  ) {
    categoryId = "cat-skincare-grooming";
  } else if (
    kw.includes("sepatu") ||
    kw.includes("sneaker") ||
    kw.includes("sandal") ||
    kw.includes("loafer") ||
    kw.includes("boots") ||
    kw.includes("tas") ||
    kw.includes("tote") ||
    kw.includes("bag") ||
    kw.includes("backpack") ||
    kw.includes("kacamata") ||
    kw.includes("topi") ||
    kw.includes("aksesoris")
  ) {
    categoryId = "cat-bags-shoes";
  } else if (
    kw.includes("hijab") ||
    kw.includes("pashmina") ||
    kw.includes("tunik") ||
    kw.includes("gamis")
  ) {
    categoryId = "cat-hijab-friendly";
  } else if (kw.includes("korea") || kw.includes("knit") || kw.includes("cardigan")) {
    categoryId = "cat-korean-style";
  } else if (
    kw.includes("celana") ||
    kw.includes("pants") ||
    kw.includes("jeans") ||
    kw.includes("trouser") ||
    kw.includes("shorts")
  ) {
    categoryId = "cat-outfit-unisex";
  } else if (
    kw.includes("kemeja") ||
    kw.includes("shirt") ||
    kw.includes("jaket") ||
    kw.includes("jacket") ||
    kw.includes("outer") ||
    kw.includes("kaos") ||
    kw.includes("tee")
  ) {
    categoryId =
      input.gender === "men"
        ? "cat-outfit-pria"
        : input.gender === "women"
        ? "cat-outfit-wanita"
        : "cat-outfit-unisex";
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
  const originalPrice = Math.round((price * 1.45) / 1000) * 1000;

  // Catatan harga & size
  const priceNote = generatePriceNote(vibe);
  const sizeNotes = generateSizeAdvice(categoryId);

  // Badge label
  const badgeLabel = generateBadge(vibe);

  // SEO
  const seoTitle = `${cleanTitle} • Rekomendasi Ze`;
  const seoDescription = `${shortDescription} Temukan kurasi produk pilihan online shop terpercaya dengan harga hemat di Rekomendasi by Ze.`;

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
  title = title
    .split(" ")
    .map((w) => (w.length > 2 ? w.charAt(0).toUpperCase() + w.slice(1) : w))
    .join(" ");

  if (title.length < 25) {
    if (vibe === "skena") {
      title += " (Skena Kalcer Approved)";
    } else if (vibe === "starboy") {
      title += " - Minimalist Luxury Fit";
    } else if (vibe === "dupe") {
      title += " (Smart Budget Alternative)";
    } else if (vibe === "viral") {
      title += " 🔥 Viral Ol Shop";
    } else {
      title += " - Rekomendasi Pilihan Ze";
    }
  }

  return title;
}

// Generate Hook 1 Kalimat
export function generateShortHook(name: string, vibe: AiVibeTone): string {
  const hooksSkena = [
    `Potongan boxy santai dengan material adem yang langsung naikin aura pas diajak nongkrong di Blok M.`,
    `Alternatif kalcer lokal yang jatuhnya proporsional, gak bikin gerah dan anti mati gaya.`,
    `Siluet vintage santai dengan tekstur kain premium, bikin OOTD harian kamu keliatan effortless tapi berkelas.`,
  ];

  const hooksStarboy = [
    `Sentuhan monokrom clean dengan siluet berstruktur tegas, cocok buat dinner date atau hangout malam di SCBD.`,
    `Aksen timeless luxury dengan fitting jatuh sempurna, ngasih kesan mahal tanpa harus keluar budget jutaan.`,
    `Desain sleek dan versatile yang gampang dipadukan dengan trousers bahan atau aksesoris kulit.`,
  ];

  const hooksDupe = [
    `Look & build quality 90% mirip brand hype jutaan rupiah, tapi bisa kamu amankan dengan harga ramah kantong!`,
    `Kenapa harus keluar jutaan kalau alternatif online shop ini punya ketahanan dan estetika yang sama mewahnya?`,
    `Solusi belanja cerdas tanpa bikin saldo rekening boncos, wajib masuk wishlist sebelum sold out.`,
  ];

  const hooksDefault = [
    `Pilihan esensial dengan build quality tinggi dan fungsi maksimal untuk menunjang aktivitas harianmu.`,
    `Item serbaguna yang gampang diandalkan untuk berbagai kebutuhan, dari kerja, kuliah, sampai santai di rumah.`,
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

// Generate Review Lengkap Ala Stylist & Curator Ze
export function generateFullReview(
  name: string,
  categoryId: string,
  vibe: AiVibeTone
): string {
  if (categoryId === "cat-gadget-setup") {
    return `Kenapa Ze Rekomendasiin Produk Ini?
Setelah kurasi beberapa aksesoris desk setup di marketplace, item ini punya build quality paling solid di rentang harganya. Desainnya minimalis clean, kabel rapi, dan fungsinya beneran ningkatin kenyamanan kerja atau gaming harian.

⚡ Spesifikasi & Build Quality
• Material & Finishing: Material matte anti-fingerprint dengan build kokoh dan presisi.
• Konektivitas & Performa: Respon cepat minim latency, stabil tanpa gangguan delay.
• Kenyamanan Pemakaian: Ergonomis dan ramah meja kerja, bikin setup keliatan aesthetic ala Pinterest.

🖥️ Setup Inspiration
• Padukan dengan desk mat warna gelap dan lampu ambient warm white untuk vibe WFC malam hari yang fokus dan cozy.`;
  }

  if (categoryId === "cat-aesthetic-room") {
    return `Kenapa Ze Rekomendasiin Produk Ini?
Barang online shop penyelamat kamar kost atau ruang tidur yang membosankan. Bentuknya estetik, gampang dipasang tanpa bor tembok, dan langsung ngubah mood ruangan seketika jadi ala cafe estetik.

🏠 Material & Estetika
• Finishing: Warna netral minimalis yang gampang menyatu dengan dekorasi kayu, putih, atau monokrom.
• Kepraktisan: Mudah dibersihkan, hemat tempat, dan multifungsi.
• Build Quality: Kokoh dan awet untuk pemakaian jangka panjang.

✨ Tips Dekorasi Kamar
• Tempatkan di sudut meja atau samping tempat tidur untuk menciptakan pencahayaan golden hour dan estetika visual yang nyaman.`;
  }

  if (categoryId === "cat-skincare-grooming") {
    return `Kenapa Ze Rekomendasiin Produk Ini?
Formula ringan yang gampang meresap tanpa rasa lengket atau greasy. Sangat cocok buat cuaca tropis Indonesia, baik untuk cowok yang gak suka ribet maupun cewek yang butuh hasil maksimal.

🧴 Tekstur & Bahan Utama
• Tekstur: Ringan, water-based, cepat meresap dan tidak meninggalkan residu putih (no whitecast).
• Kenyamanan Kulit: Tidak menyumbat pori-pori (non-comedogenic) dan aman untuk kulit sensitif.
• Hasil Pemakaian: Kulit terasa terhidrasi sehat, terlindungi, dan tidak mengkilap berlebihan seharian.

💡 Cara Pemakaian
• Aplikasikan secara merata di wajah dan leher setiap pagi sebelum beraktivitas. Ulangi bila banyak terpapar matahari langsung.`;
  }

  return `Kenapa Ze Rekomendasiin Produk Ini?
Setelah kurasi beberapa toko online shop lokal, produk ini punya penilaian jahitan, konsistensi bahan, dan siluet fitting paling memuaskan di kelas harganya. Cocok banget buat kamu yang mau upgrade penampilan tanpa ribet.

🧵 Material & Detail Finishing
• Karakter Bahan: Kain bertekstur lembut, adem di kulit, dan tidak mudah kusut setelah dicuci.
• Jahitan & Kerutan: Jahitan rantai ganda di area krusial, rapi tanpa benang sisa berlebih.
• Proporsi Potongan: Dirancang dengan proporsi modern yang menyanjung postur tubuh (mengikuti rumus Rule of Thirds).

🕶️ Formula Styling OOTD
• Casual Nongkrong: Padukan dengan celana bahan rileks (relaxed trousers) dan sepatu ber-sol datar vintage.
• Semi Formal / Kuliah: Padukan dengan inner kaos polos rapi dan tas selempang minimalis.
• Aksesoris: Tambahkan kacamata frame tipis atau jam tangan simpel untuk melengkapi aura aesthetic.

💡 Tips Perawatan
• Cuci dengan putaran lembut atau cuci tangan untuk menjaga serat kain dan kepekatan warna.
• Hindari jemur di bawah terik matahari langsung agar warna tidak cepat pudar.`;
}

// Generate Tags Viral
export function generateViralTagsList(
  name: string,
  categoryId: string,
  vibe: AiVibeTone
): string[] {
  const base = ["shopeehaul", "tiktokfinds", "olshopfinds", "racunshopee", "racunolshop"];
  if (vibe === "skena") {
    return [...base, "skena", "kalcer", "blokm", "streetwear", "vintagevibe"];
  } else if (vibe === "starboy") {
    return [...base, "starboy", "scbd", "quietluxury", "cleanfit", "allblack"];
  } else if (vibe === "dupe") {
    return [...base, "dupealert", "stealdeal", "hematbudget", "lokalpride", "alternatifmurah"];
  }
  return [...base, "kamarestetik", "desksetup", "rekomendasize", "minimalist"];
}

// Generate Ukuran & Proporsi
export function generateSizeAdvice(categoryId: string): string {
  if (categoryId === "cat-gadget-setup") {
    return "Kompatibel Windows/Mac/iOS/Android via Bluetooth & Type-C kabel fleksibel.";
  }
  if (categoryId === "cat-aesthetic-room") {
    return "Dimensi ringkas hemat ruang, colokan USB plug-and-play mudah ditempatkan di kamar kost.";
  }
  if (categoryId === "cat-skincare-grooming") {
    return "Kemasan travel-friendly, sudah BPOM teruji klinis dan aman untuk semua jenis kulit.";
  }
  if (categoryId === "cat-bags-shoes") {
    return "True to size. Jika kaki lebar (wide feet), disarankan naik 1 nomor (up-size) agar jari leluasa.";
  }
  if (categoryId === "cat-outfit-unisex" || categoryId === "cat-outfit-pria") {
    return "Model TB 173cm BB 63kg pakai size L untuk look relaxed boxy. Ambil size normal kamu jika ingin look pas badan.";
  }
  return "Ukuran standar fleksibel dengan toleransi dimensi sekitar 1-2 cm.";
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
      return "Viral Ol Shop 🔥";
    default:
      return "Must Have";
  }
}

// Generate Catatan Harga
export function generatePriceNote(vibe: AiVibeTone): string {
  if (vibe === "dupe") {
    return "Hemat ratusan ribu dibanding versi brand luar negeri ternama";
  }
  return "Harga promo saat flash sale toko online shop, klaim voucher sebelum kehabisan";
}

// Tebak harga perkiraan awal
function guessPrice(kw: string, catId: string): number {
  if (catId === "cat-gadget-setup") return 189000;
  if (catId === "cat-aesthetic-room") return 65000;
  if (catId === "cat-skincare-grooming") return 89000;
  if (catId === "cat-bags-shoes") return 199000;
  if (kw.includes("jaket") || kw.includes("jacket") || kw.includes("blazer")) return 229000;
  if (kw.includes("celana") || kw.includes("pants") || kw.includes("jeans")) return 175000;
  if (kw.includes("kemeja") || kw.includes("shirt")) return 149000;
  return 99000;
}

function getFallbackImageByCategory(catId: string): string {
  switch (catId) {
    case "cat-gadget-setup":
      return "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=900&auto=format&fit=crop";
    case "cat-aesthetic-room":
      return "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=900&auto=format&fit=crop";
    case "cat-skincare-grooming":
      return "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=900&auto=format&fit=crop";
    case "cat-bags-shoes":
      return "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=900&auto=format&fit=crop";
    case "cat-outfit-pria":
      return "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=900&auto=format&fit=crop";
    case "cat-outfit-wanita":
      return "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop";
    case "cat-korean-style":
      return "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=900&auto=format&fit=crop";
    case "cat-hijab-friendly":
      return "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=900&auto=format&fit=crop";
    default:
      return "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=900&auto=format&fit=crop";
  }
}

function getVariantsByCategory(catId: string) {
  if (catId === "cat-bags-shoes") {
    return [{ name: "Ukuran", options: ["39", "40", "41", "42", "43"] }];
  }
  if (catId === "cat-skincare-grooming") {
    return [{ name: "Varian / Isi", options: ["30ml Travel", "50ml Reguler"] }];
  }
  if (catId === "cat-gadget-setup") {
    return [{ name: "Warna / Switch", options: ["Matte Black", "White Silver"] }];
  }
  if (catId === "cat-aesthetic-room") {
    return [{ name: "Pilihan Warna / Model", options: ["Warm Sunset", "RGB Multi-Mode"] }];
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
  const name = p.name || "Rekomendasi Online Shop Pilihan Ze";
  const priceStr = p.price ? `Rp ${p.price.toLocaleString("id-ID")}` : "Rp 99.000";
  const originalStr = p.originalPrice
    ? `Rp ${p.originalPrice.toLocaleString("id-ID")}`
    : "Rp 189.000";

  const tiktokScript = `[HOOK 3 DETIK PERTAMA]:
"Stop scrolling kalau kamu lagi cari barang online shop yang beneran berguna dan estetik!"

[BODY KONTEN]:
Nemu hidden gem satu ini di toko online shop: ${name}.
Kualitasnya beneran bagus, finishing rapi, dan fungsinya juara. Dari harga normal ${originalStr}, pas promo dapet cuma ${priceStr}!

[CTA PENUTUP]:
Link checkout udah Ze simpen di Bio profil nomor katalog teratas ya. Jangan sampai kehabisan voucher diskonnya! ⚡
#racunshopee #racunolshop #shopeehaul #tiktokfinds #racunze`;

  const igStory = `Spill racun baru yang wajib masuk wishlist kamu hari ini ✨

📦 Item: ${name}
💸 Damage: Cuma ${priceStr} (hemat bgt dari ${originalStr})
Rating Ze: 9.8/10 ⭐ (Kualitas & fungsi juara)

👉 [KETUK STIKER TAUTAN DI ATAS UNTUK CHECKOUT SEBELUM PROMO HABIS]`;

  const telegramBroadcast = `🔥 RACUN AFFILIATE HARI INI • PILIHAN ZE 🔥

${name}
━━━━━━━━━━━━━━━━━━
💰 Harga Promo: ${priceStr} (Coret: ${originalStr})
🏷️ Status: ${p.badgeLabel || "Ze's Pick"}

Kenapa wajib punya:
${p.shortDesc || "Build quality kokoh, fungsi maksimal, dan harga ramah kantong pilihan Ze."}

🛒 LINK BELANJA RESMI:
${p.affiliateUrl || "https://shope.ee/..."}

(Buruan checkout sebelum voucher diskon toko habis ya guys!)`;

  const twitterHook = `nemu racun online shop yang beneran worth it bgt dan kepake sehari-hari 😭✋

${name}
harganya cuma ${priceStr}-an tp build quality-nya mirip brand jutaan. 

link shopee nya gue drop di reply ya 👇👇`;

  return {
    tiktokScript,
    igStory,
    telegramBroadcast,
    twitterHook,
  };
}
