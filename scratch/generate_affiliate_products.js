const fs = require('fs');
const path = require('path');

// Image pools by keywords for realistic visual presentation
const imagePool = {
  gorpcore: [
    "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=900&auto=format&fit=crop"
  ],
  workshirt: [
    "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620012253295-c15c429f60cb?q=80&w=900&auto=format&fit=crop"
  ],
  batik: [
    "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=900&auto=format&fit=crop"
  ],
  sweater: [
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=900&auto=format&fit=crop"
  ],
  hoodie: [
    "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=900&auto=format&fit=crop"
  ],
  varsity: [
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=900&auto=format&fit=crop"
  ],
  jeans: [
    "https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=900&auto=format&fit=crop"
  ],
  cargo: [
    "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=900&auto=format&fit=crop"
  ],
  kaos: [
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=900&auto=format&fit=crop"
  ],
  jersey: [
    "https://images.unsplash.com/photo-1577210897949-1f56f9435024?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?q=80&w=900&auto=format&fit=crop"
  ],
  sneakers: [
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=900&auto=format&fit=crop"
  ],
  sandal: [
    "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?q=80&w=900&auto=format&fit=crop"
  ],
  tumbler: [
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=900&auto=format&fit=crop"
  ],
  parfum: [
    "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=900&auto=format&fit=crop"
  ],
  gamis: [
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=900&auto=format&fit=crop"
  ],
  cardigan: [
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=900&auto=format&fit=crop"
  ],
  default: [
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=900&auto=format&fit=crop"
  ]
};

function pickImage(name, idx) {
  const lower = name.toLowerCase();
  let pool = imagePool.default;

  if (lower.includes('gorpcore') || lower.includes('gunung') || lower.includes('outdoor')) pool = imagePool.gorpcore;
  else if (lower.includes('workshirt') || lower.includes('work jacket') || lower.includes('workhiet')) pool = imagePool.workshirt;
  else if (lower.includes('batik')) pool = imagePool.batik;
  else if (lower.includes('cardigan') || lower.includes('knitwear')) pool = imagePool.cardigan;
  else if (lower.includes('sweater') || lower.includes('crewneck') || lower.includes('rugby')) pool = imagePool.sweater;
  else if (lower.includes('hoodie')) pool = imagePool.hoodie;
  else if (lower.includes('varsity') || lower.includes('baseball')) pool = imagePool.varsity;
  else if (lower.includes('jeans') || lower.includes('denim')) pool = imagePool.jeans;
  else if (lower.includes('cargo') || lower.includes('loose pants') || lower.includes('sweatpants') || lower.includes('chino') || lower.includes('boardshort') || lower.includes('boarshort')) pool = imagePool.cargo;
  else if (lower.includes('jersey')) pool = imagePool.jersey;
  else if (lower.includes('sneaker') || lower.includes('sepatu')) pool = imagePool.sneakers;
  else if (lower.includes('sandal') || lower.includes('slip-on')) pool = imagePool.sandal;
  else if (lower.includes('tumbler') || lower.includes('botol') || lower.includes('termos')) pool = imagePool.tumbler;
  else if (lower.includes('perfume') || lower.includes('parfum')) pool = imagePool.parfum;
  else if (lower.includes('gamis') || lower.includes('dress') || lower.includes('jilbab')) pool = imagePool.gamis;
  else if (lower.includes('kaos') || lower.includes('t-shirt') || lower.includes('tshirt') || lower.includes('polo')) pool = imagePool.kaos;
  else if (lower.includes('jaket') || lower.includes('jacket') || lower.includes('tracksuit') || lower.includes('trecktop')) pool = imagePool.gorpcore;

  return pool[idx % pool.length];
}

function parsePrice(str) {
  if (!str) return 50000;
  // e.g. "35,0RB" -> 35000, "210,6RB" -> 210600, "1,1RB" -> 1100
  const clean = str.replace(/"/g, '').replace('RB', '').trim().replace(',', '.');
  const num = parseFloat(clean);
  if (isNaN(num)) return 50000;
  return Math.round(num * 1000);
}

function slugify(name, id) {
  let s = name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 45);
  return `${s}-${id.slice(-4)}`;
}

function detectCategory(name) {
  const lower = name.toLowerCase();
  if (lower.includes('tumbler') || lower.includes('botol') || lower.includes('termos')) return 'cat-aesthetic-room';
  if (lower.includes('perfume') || lower.includes('parfum') || lower.includes('skincare')) return 'cat-skincare-grooming';
  if (lower.includes('sneaker') || lower.includes('sepatu') || lower.includes('sandal') || lower.includes('tas')) return 'cat-bags-shoes';
  if (lower.includes('gamis') || lower.includes('dress') || lower.includes('jilbab')) return 'cat-hijab-friendly';
  if (lower.includes('batik')) return 'cat-outfit-pria';
  if (lower.includes('cardigan') || lower.includes('korean')) return 'cat-korean-style';
  if (lower.includes('wanita') && !lower.includes('pria')) return 'cat-outfit-wanita';
  if (lower.includes('pria') && !lower.includes('wanita')) return 'cat-outfit-pria';
  return 'cat-outfit-unisex';
}

function detectGender(name) {
  const lower = name.toLowerCase();
  if (lower.includes('wanita') && !lower.includes('pria')) return 'women';
  if (lower.includes('pria') && !lower.includes('wanita')) return 'men';
  return 'unisex';
}

function detectBadge(name, sales, price) {
  const lower = name.toLowerCase();
  if (lower.includes('gorpcore')) return 'Gorpcore Kalcer';
  if (lower.includes('boxy')) return 'Skena Boxy';
  if (lower.includes('batik')) return 'Batik Modern';
  if (lower.includes('rugby')) return 'Rugby Retro';
  if (lower.includes('tumbler')) return 'Tahan 24 Jam ❄️';
  if (lower.includes('perfume') || lower.includes('parfum')) return 'Aroma Mewah';
  if (price < 50000) return 'Under 50k 💸';
  if (sales.includes('10RB+')) return 'Best Seller 10RB+ 🔥';
  return "Ze's Pick ✨";
}

const parsed = JSON.parse(fs.readFileSync('parsed_shopee.json', 'utf8'));

const products = parsed.map((row, idx) => {
  const id = `shopee-${row[0]}`;
  const name = row[1].replace(/^"|"$/g, '').trim();
  const price = parsePrice(row[2]);
  const originalPrice = Math.round((price * 1.45) / 1000) * 1000;
  const sales = row[3] || '1RB+';
  const shopName = row[4] || 'Shopee Star Seller';
  const commissionRate = row[5] || '10%';
  const commission = row[6] || '';
  const productUrl = row[7] || '';
  const affiliateUrl = row[8] || productUrl; // EXACT USER AFFILIATE SHORTLINK!
  const spillNumber = idx + 1; // #01 to #100

  const catId = detectCategory(name);
  const gender = detectGender(name);
  const badge = detectBadge(name, sales, price);
  const coverImg = pickImage(name, idx);

  // Clean tags
  const tags = [
    'shopee',
    'racunshopee',
    catId.replace('cat-', ''),
    gender,
    sales.includes('10RB+') ? 'bestseller' : 'trending'
  ];
  if (name.toLowerCase().includes('skena')) tags.push('skena');
  if (name.toLowerCase().includes('kalcer')) tags.push('kalcer');
  if (name.toLowerCase().includes('boxy')) tags.push('boxy');
  if (name.toLowerCase().includes('vintage')) tags.push('vintage');
  if (price < 50000) tags.push('under50k');

  return {
    id,
    name,
    slug: slugify(name, row[0]),
    short_description: `Rekomendasi ${name} pilihan Ze di Shopee. Terjual ${sales} di ${shopName} dengan review bintang 4.8+.`,
    description: `### Kenapa Ze Rekomendasiin Produk Ini?
Produk ini sudah terjual lebih dari **${sales}** di toko **${shopName}** dengan rating kepuasan pembeli yang sangat tinggi di Shopee.

### 🧵 Material & Detail
* **Toko Resmi:** ${shopName}
* **Performa Penjualan:** ${sales} terjual di Shopee
* **Karakter:** Nyaman dipakai harian, jahitan rapi, dan look estetik kekinian.

### 💡 Tips Checkout Hemat
* Klaim voucher gratis ongkir dan cashback toko sebelum melakukan checkout di Shopee untuk dapat diskon maksimal.`,
    category_id: catId,
    tags,
    marketplace: 'shopee',
    affiliate_url: affiliateUrl,
    price,
    original_price: originalPrice,
    price_note: `Terjual ${sales} di ${shopName} • Klaim voucher toko`,
    variants: [
      { name: "Pilihan", options: ["Lihat Varian di Shopee"] }
    ],
    size_notes: "Cek detail panduan ukuran dan stok varian langsung di etalase toko Shopee.",
    is_featured: idx < 12,
    is_trending: idx < 20,
    badge_label: badge,
    status: 'published',
    sort_order: idx + 1,
    spill_number: spillNumber,
    seo_title: `${name} • Rekomendasi Ze Shopee`,
    seo_description: `Beli ${name} harga promo di Shopee. Rekomendasi belanja online shop terkurasi pilihan Ze.`,
    click_count: Math.floor(80 + Math.random() * 250),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    media: [
      {
        id: `m-${id}-1`,
        media_type: 'image',
        public_url: coverImg,
        alt_text: name,
        is_cover: true,
        sort_order: 1
      }
    ]
  };
});

fs.writeFileSync('generated_products.json', JSON.stringify(products, null, 2));
console.log('Successfully generated', products.length, 'products with user affiliate links!');
