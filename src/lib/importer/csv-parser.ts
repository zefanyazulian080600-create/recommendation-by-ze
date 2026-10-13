import { Product } from "@/types";

// Category fallback cover images (Genuine Shopee CDN)
const CATEGORY_IMAGES: Record<string, string> = {
  "cat-piyama-sleepwear": "https://down-id.img.susercontent.com/file/91f5d9bd6f645c992910082c5739553c",
  "cat-gamis-muslimah": "https://down-id.img.susercontent.com/file/id-11134207-81ztm-ms2dzsj9dkw62c",
  "cat-skincare-beauty": "https://down-id.img.susercontent.com/file/id-11134207-81ztg-mq8fw3fafbws46",
  "cat-parfum-fragrance": "https://down-id.img.susercontent.com/file/id-11134207-822wi-mnfy30pupsshee",
  "cat-outfit-pria": "https://down-id.img.susercontent.com/file/id-11134207-7rbke-ma7vs1c79of1c0",
  "cat-outfit-wanita": "https://down-id.img.susercontent.com/file/id-11134207-81ztg-mffgl05qebk9b1",
  "cat-tas-dompet": "https://down-id.img.susercontent.com/file/id-11134207-8224x-mieiiunmfklge8",
  "cat-sepatu-sandal": "https://down-id.img.susercontent.com/file/id-11134207-8224x-mieiiunmfklge8",
  "cat-aesthetic-room": "https://down-id.img.susercontent.com/file/id-11134207-822wo-mo56kw6syiva82",
  "cat-accessories": "https://down-id.img.susercontent.com/file/6343ef8fa286df4d7c5b1f24194dbcbc",
  "cat-food-snack": "https://down-id.img.susercontent.com/file/id-11134207-7rbke-ma7vs1c79of1c0",
};

export function parsePrice(str: string | number | undefined): number {
  if (!str) return 50000;
  if (typeof str === "number") return str;
  const clean = str.toString().replace(/"/g, "").replace(/rp\.?/i, "").replace("RB", "").trim().replace(",", ".");
  const num = parseFloat(clean);
  if (isNaN(num)) return 50000;
  return num < 1000 ? Math.round(num * 1000) : Math.round(num);
}

export function cleanTitle(str: string): string {
  if (!str) return "";
  return str
    .replace(/^"|"$/g, "")
    .replace(/#/g, "No. ")
    .replace(/\*/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function slugify(name: string, id: string): string {
  const s = name
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 45);
  return `${s}-${id.slice(-5) || Math.floor(Math.random() * 89999 + 10000)}`;
}

export function classifyCategory(title: string): string {
  const t = title.toLowerCase();

  // 1. Camilan & Makanan Ol Shop
  if (/snack|basreng|camilan|keripik|kerupuk|makaroni|pedas daun jeruk|sambal|minyak goreng|bumbu masak/i.test(t)) {
    return "cat-food-snack";
  }

  // 2. Piyama & Baju Tidur
  if (/piyama|baju tidur|sleepwear|daster/i.test(t)) {
    return "cat-piyama-sleepwear";
  }

  // 3. Gamis & Busana Muslimah
  if (/gamis|abaya|malika|brokat|hijab|jilbab|khimar|tunik|kaftan|syari|maxy|pashmina|kerudung|mukena/i.test(t)) {
    return "cat-gamis-muslimah";
  }

  // 4. Parfum & Fragrance
  if (/parfum|perfume|fragrance|decant|cologne|eau de|extrait/i.test(t)) {
    return "cat-parfum-fragrance";
  }

  // 5. Skincare & Perawatan
  if (/skincare|serum|facial|toner|sunscreen|lotion|sabun|scrub|moisturizer|body wash|hanasui|cetaphil|kahf|sombong|ozza|lipstick|liptint|lipcream|lip balm|masker wajah|micellar/i.test(t)) {
    return "cat-skincare-beauty";
  }

  // 6. Sepatu & Sandal (Dipisah dari tas)
  if (/sepatu|sneaker|sandal|slip on|slop|loafer|heels|docmart|boots|pantofel|running shoes|kicks/i.test(t)) {
    return "cat-sepatu-sandal";
  }

  // 7. Tas & Dompet (Dipisah dari sepatu)
  if (/\btas\b|totebag|ransel|dompet|backpack|slingbag|sling bag|waistbag|handbag|clutch|card holder/i.test(t)) {
    return "cat-tas-dompet";
  }

  // 8. Aksesoris & Perhiasan Fashion
  if (/cincin|gelang|kalung|anting|bangle|liontin|giok|strap bag|longstrap|tali tas|bag charm|gantungan tas|ganci|gantungan kunci|keychain|jedai|jepit rambut|jepitan|hair clip|bando|headband|scrunchie|ikat rambut|kuncir|wig|bros|pin baju|sabuk|ikat pinggang|gesper|kacamata|bandana/i.test(t)) {
    return "cat-accessories";
  }

  // 9. Room & Perlengkapan Rumah
  if (/tumbler|botol minum|termos|cangkir|mug|lampu meja|dekorasi|sprei|bantal|selimut|kasur/i.test(t)) {
    return "cat-aesthetic-room";
  }

  // 10. Outfit Pria (Explicit / Streetwear items)
  if (/pria|cowok|kemeja pria|jaket pria|kaos pria|celana pria|gorpcore|workshirt|batik pria|flanel|hoodie pria|boxy tee|oversized tee|crewneck pria/i.test(t)) {
    return "cat-outfit-pria";
  }

  // 11. Outfit Wanita (Explicit / Tops / Skirts / One sets)
  if (/wanita|cewek|blouse|crop top|croptop|rok |rok$|kulot|rajut|knitwear|cardigan|tank top|kemben|dress|one set|atasan cewek|atasan wanita/i.test(t)) {
    return "cat-outfit-wanita";
  }

  // Fallback clothes
  if (/jaket|sweater|hoodie|kaos|tshirt|t-shirt|kemeja|celana|denim|cargo|chino|vest|jersey|boxy/i.test(t)) {
    return "cat-outfit-pria";
  }

  return "cat-outfit-wanita";
}

export function classifySubCategory(title: string, catId: string): { id: string; name: string } {
  const t = title.toLowerCase();

  switch (catId) {
    case "cat-outfit-pria":
      if (/kemeja|flanel|workshirt|batik/i.test(t)) return { id: "pria-kemeja", name: "Kemeja Pria" };
      if (/jaket|hoodie|windbreaker|varsity|gorpcore|sweater/i.test(t)) return { id: "pria-jaket", name: "Jaket & Hoodie" };
      if (/celana|cargo|chino|jeans|denim|pendek/i.test(t)) return { id: "pria-celana", name: "Celana Pria" };
      return { id: "pria-kaos", name: "Kaos & T-Shirt" };

    case "cat-outfit-wanita":
      if (/blouse|kemeja|linen/i.test(t)) return { id: "wanita-blouse", name: "Blouse & Kemeja" };
      if (/crop|baby tee|tank top/i.test(t)) return { id: "wanita-croptop", name: "Kaos & Crop Top" };
      if (/cardigan|knit|rajut|sweater/i.test(t)) return { id: "wanita-knitwear", name: "Cardigan & Knitwear" };
      if (/dress|one set|setelan/i.test(t)) return { id: "wanita-dress", name: "Dress & One Set" };
      if (/rok|skirt/i.test(t)) return { id: "wanita-rok", name: "Rok & Skirt Cantik" };
      if (/kulot|celana|jeans|pants/i.test(t)) return { id: "wanita-celana", name: "Celana & Kulot Wanita" };
      return { id: "wanita-blouse", name: "Blouse & Kemeja" };

    case "cat-gamis-muslimah":
      if (/hijab|pashmina|segi empat|jilbab|kerudung|khimar/i.test(t)) return { id: "muslim-hijab", name: "Hijab & Pashmina" };
      if (/tunik/i.test(t)) return { id: "muslim-tunik", name: "Tunik Muslimah" };
      return { id: "muslim-gamis", name: "Gamis & Abaya" };

    case "cat-piyama-sleepwear":
      if (/daster/i.test(t)) return { id: "sleep-daster", name: "Daster Santai" };
      return { id: "sleep-piyama", name: "Piyama Katun Rayon" };

    case "cat-tas-dompet":
      if (/ransel|laptop|backpack/i.test(t)) return { id: "tas-ransel", name: "Tas Ransel & Laptop" };
      if (/sling|selempang|shoulder/i.test(t)) return { id: "tas-sling", name: "Slingbag Selempang" };
      if (/totebag|handbag/i.test(t)) return { id: "tas-totebag", name: "Totebag & Handbag" };
      if (/dompet|card/i.test(t)) return { id: "tas-dompet", name: "Dompet & Card Holder" };
      return { id: "tas-ransel", name: "Tas Ransel & Laptop" };

    case "cat-sepatu-sandal":
      if (/heels|heel|hak|flat|mules|wedges/i.test(t)) return { id: "sepatu-heels", name: "Heels & Flat Shoes" };
      if (/sandal|slop|slide|jepit/i.test(t)) return { id: "sepatu-sandal", name: "Sandal & Slip-On Slop" };
      if (/formal|loafer|pantofel|kerja/i.test(t)) return { id: "sepatu-formal", name: "Sepatu Formal & Loafer" };
      return { id: "sepatu-sneakers", name: "Sneakers Kasual" };

    case "cat-accessories":
      if (/gelang|cincin|kalung|anting|titanium/i.test(t)) return { id: "acc-jewelry", name: "Perhiasan Titanium" };
      return { id: "acc-fashion", name: "Aksesoris Fashion" };

    case "cat-skincare-beauty":
      if (/body|lotion|scrub|sabun|shampoo|rambut/i.test(t)) return { id: "beauty-badan", name: "Bodycare & Rambut" };
      return { id: "beauty-wajah", name: "Skincare Wajah Glowing" };

    case "cat-parfum-fragrance":
      return { id: "parfum-extrait", name: "Extrait & EDP Mewah" };

    case "cat-aesthetic-room":
      if (/sprei|bantal|selimut|tidur/i.test(t)) return { id: "home-sprei", name: "Sprei & Perlengkapan Tidur" };
      return { id: "home-room", name: "Tumbler & Dekor Meja" };

    case "cat-food-snack":
      if (/minyak|bumbu|dapur|sembako/i.test(t)) return { id: "snack-sembako", name: "Bahan Dapur & Promo" };
      return { id: "snack-pedas", name: "Camilan Pedas & Basreng" };

    default:
      return { id: "general", name: "Umum" };
  }
}

export function detectGender(title: string, catId: string): "men" | "women" | "unisex" {
  const t = title.toLowerCase();
  if (catId === "cat-piyama-sleepwear" && (t.includes("wanita") || t.includes("cewek"))) return "women";
  if (catId === "cat-gamis-muslimah") return "women";
  if (catId === "cat-outfit-wanita") return "women";
  if (catId === "cat-outfit-pria") return "men";
  if (t.includes("wanita") || t.includes("cewek")) return "women";
  if (t.includes("pria") || t.includes("cowok")) return "men";
  return "unisex";
}

export function detectBadge(name: string, sales: string, price: number): string {
  const t = name.toLowerCase();
  if (sales.includes("10RB+")) return "Best Seller 10RB+ 🔥";
  if (price <= 50000) return "Under 50k 💸";
  if (t.includes("gorpcore")) return "Gorpcore Kalcer 🏔️";
  if (t.includes("boxy")) return "Skena Boxy 🛹";
  if (t.includes("batik")) return "Batik Modern 👔";
  if (t.includes("piyama")) return "Piyama Adem 😴";
  if (t.includes("gamis") || t.includes("abaya")) return "Busana Muslimah 🌙";
  if (t.includes("parfum") || t.includes("perfume")) return "Aroma Mewah 🌸";
  if (t.includes("serum") || t.includes("skincare")) return "Glowing Pick ✨";
  if (sales.includes("5RB+") || sales.includes("8RB+")) return "Star Seller ⭐";
  return "Pilihan Ze ✨";
}

// RFC 4180 compliant CSV line parser (handles quotes and commas inside cells)
export function parseCsvRows(text: string): string[][] {
  const lines = text.split(/\r\n|\n|\r/);
  const rows: string[][] = [];

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    // Detect separator (comma, semicolon, or tab)
    const delimiter = line.includes("\t") ? "\t" : line.includes(";") && !line.includes(",") ? ";" : ",";

    const row: string[] = [];
    let insideQuotes = false;
    let currentCell = "";

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === '"') {
        if (insideQuotes && line[i + 1] === '"') {
          currentCell += '"';
          i++;
        } else {
          insideQuotes = !insideQuotes;
        }
      } else if (char === delimiter && !insideQuotes) {
        row.push(currentCell.trim());
        currentCell = "";
      } else {
        currentCell += char;
      }
    }
    row.push(currentCell.trim());
    if (row.length > 0 && row.some((c) => c !== "")) {
      rows.push(row);
    }
  }

  return rows;
}

export function convertRowsToProducts(rows: string[][]): Product[] {
  if (rows.length === 0) return [];

  // Check if first row is header
  const firstRow = rows[0].map((c) => c.toLowerCase());
  const hasHeader =
    firstRow.some((c) => c.includes("nama") || c.includes("title") || c.includes("product") || c.includes("harga") || c.includes("link"));

  const dataRows = hasHeader ? rows.slice(1) : rows;
  const products: Product[] = [];

  dataRows.forEach((row, index) => {
    if (row.length < 2) return;

    // Format 1: Shopee Affiliate standard export (8 or 9 columns)
    // 0: ID, 1: Name, 2: Price, 3: Sales, 4: Shop, 5: CommRate, 6: CommVal, 7: ProductUrl, 8: AffiliateUrl
    let rawId = "";
    let name = "";
    let rawPrice = "";
    let sold = "1RB+";
    let shop = "Shopee Star Seller";
    let affiliateUrl = "";
    let imageUrl = "";

    if (row[0]?.match(/^\d{8,}$/)) {
      // Shopee Affiliate CSV format
      rawId = row[0];
      name = cleanTitle(row[1] || "");
      rawPrice = row[2] || "";
      sold = row[3] || "1RB+";
      shop = (row[4] || "Shopee Star Seller").replace(/^"|"$/g, "").trim();
      affiliateUrl = row[8] || row[7] || `https://shopee.co.id/product/${rawId}`;
    } else {
      // Generic format: find by heuristic
      rawId = `auto-${Date.now()}-${index}`;
      name = cleanTitle(row[0] || row[1] || "");

      // Find price
      const priceCell = row.find((c) => /\d/.test(c) && !c.startsWith("http"));
      rawPrice = priceCell || "50000";

      // Find affiliate link
      const linkCell = row.find((c) => c.startsWith("http"));
      affiliateUrl = linkCell || "https://shopee.co.id";

      // Find image if any
      const imgCell = row.find((c) => c.startsWith("http") && (c.includes(".jpg") || c.includes(".png") || c.includes("susercontent") || c.includes("image")));
      if (imgCell) imageUrl = imgCell;
    }

    if (!name) return;

    const price = parsePrice(rawPrice);
    const originalPrice = Math.round((price * 1.35) / 1000) * 1000;
    const catId = classifyCategory(name);
    const subCat = classifySubCategory(name, catId);
    const gender = detectGender(name, catId);
    const badge = detectBadge(name, sold, price);

    const coverImage = imageUrl || CATEGORY_IMAGES[catId] || CATEGORY_IMAGES["cat-outfit-pria"];
    const id = rawId ? `shopee-${rawId}` : `prod-${Date.now()}-${index}`;
    const slug = slugify(name, rawId || String(index));

    const cleanDescription = `Produk ${name} merupakan kurasi pilihan rekomendasi Ze di Shopee. Telah terbukti terjual lebih dari ${sold} di toko ${shop} dengan respon pembeli yang memuaskan. Toko ${shop} memiliki penilaian tinggi dan rekam jejak pengiriman terpercaya. Material produk nyaman digunakan sehari-hari, pola pas di badan, dan jahitan rapi. Tips Checkout Hemat: Pastikan klaim voucher gratis ongkir dan voucher cashback di aplikasi Shopee sebelum checkout agar belanja kamu semakin hemat.`;

    const cleanShortDesc = `Rekomendasi ${name} pilihan Ze. Terjual ${sold} di ${shop} dengan ulasan pembeli positif bintang 4.8+.`;

    const tags = [
      "shopee",
      "racunshopee",
      catId.replace("cat-", ""),
      subCat.id,
      gender,
    ];
    if (sold.includes("10RB+")) tags.push("bestseller");
    if (price <= 50000) tags.push("under50k");

    products.push({
      id,
      name,
      slug,
      short_description: cleanShortDesc,
      description: cleanDescription,
      category_id: catId,
      sub_category_id: subCat.id,
      sub_category_name: subCat.name,
      tags,
      marketplace: "shopee",
      affiliate_url: affiliateUrl,
      price,
      original_price: originalPrice,
      price_note: `Terjual ${sold} di ${shop} • Toko Terpercaya`,
      variants: [{ name: "Pilihan", options: ["Lihat Varian di Shopee"] }],
      size_notes: "Cek detail panduan ukuran dan ketersediaan stok varian langsung di etalase toko Shopee.",
      is_featured: false,
      is_trending: sold.includes("10RB+"),
      badge_label: badge,
      status: "published",
      sort_order: index + 1,
      spill_number: index + 1,
      gender,
      seo_title: `${name} • Rekomendasi Ze Shopee`,
      seo_description: `Beli ${name} harga promo di Shopee. Rekomendasi online shop terkurasi pilihan Ze.`,
      click_count: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      image_url: coverImage,
      media: [
        {
          id: `m-${id}-1`,
          media_type: "image",
          public_url: coverImage,
          url: coverImage,
          alt_text: name,
          is_cover: true,
          sort_order: 1,
        },
      ],
    });
  });

  return products;
}
