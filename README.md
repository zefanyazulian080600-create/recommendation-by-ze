# Recommendation by Ze (Curated Online Shop Storefront & Admin CMS)

Selamat datang di repository resmi **Recommendation by Ze** — platform katalog kurasi belanja online shop, outfit fashion editorial, skincare viral, perintilan aesthetic kamar, dan setup gadget yang siap dimonetisasi melalui program affiliate **Shopee, Tokopedia, TikTok Shop, dan Lazada**.

Aplikasi web ini dibangun dengan arsitektur modern full-stack menggunakan **Next.js (App Router), TypeScript, Tailwind CSS, dan Supabase**, serta dirancang mobile-first dengan estetika modern fashion boutique.

---

## DAFTAR ISI

1. [A. Gambaran Umum Website](#a-gambaran-umum-website)
2. [B. Fitur Yang Telah Diimplementasikan](#b-fitur-yang-telah-diimplementasikan)
3. [C. Teknologi Yang Digunakan](#c-teknologi-yang-digunakan)
4. [D. Prasyarat Instalasi](#d-prasyarat-instalasi)
5. [E. Cara Menjalankan Project Secara Lokal](#e-cara-menjalankan-project-secara-lokal)
6. [F. Panduan Setup Supabase](#f-panduan-setup-supabase)
7. [G. Menjalankan SQL Migration](#g-menjalankan-sql-migration)
8. [H. Menyiapkan Storage Bucket & Kebijakan Keamanan](#h-menyiapkan-storage-bucket--kebijakan-keamanan)
9. [I. Menyiapkan Akun Admin Pertama](#i-menyiapkan-akun-admin-pertama)
10. [J. Konfigurasi Environment Variables](#j-konfigurasi-environment-variables)
11. [K. Menjalankan dan Build Project](#k-menjalankan-dan-build-project)
12. [L. Panduan GitHub](#l-panduan-github)
13. [M. Panduan Deploy ke Vercel](#m-panduan-deploy-ke-vercel)
14. [N. Panduan Penggunaan Admin CMS Bagi Pemula](#n-panduan-penggunaan-admin-cms-bagi-pemula)
15. [O. Transparansi & Biaya Layanan Pihak Ketiga](#o-transparansi--biaya-layanan-pihak-ketiga)
16. [P. Backup Database & Pemulihan Data](#p-backup-database--pemulihan-data)

---

## A. GAMBARAN UMUM WEBSITE

**Recommendation by Ze** dirancang khusus untuk memfasilitasi kreator affiliate di Indonesia yang ingin menyajikan rekomendasi belanja terpercaya kepada audiensnya. Berbeda dari linktree sederhana, website ini memberikan:
- Pengalaman belanja visual layaknya butik fashion editorial digital.
- Kurasi multi-kategori: Outfit Wanita, Korean Style, Skincare & Beauty, Aesthetic Room, Desk Setup & Gadget, Hijab Friendly, dan Racun TikTok.
- Pengalihan langsung ke marketplace tanpa memproses pembayaran sendiri (zero maintenance inventory/shipping).
- Dashboard CMS terproteksi untuk menambah, mengedit, mengunggah foto/video, serta memantau klik affiliate.

---

## B. FITUR YANG TELAH DIIMPLEMENTASIKAN

### 1. Storefront Publik (Mobile-First)
- **Announcement Strip**: Banner pengumuman dinamis di bagian atas dengan tombol dismiss.
- **Header Editorial**: Wordmark *Recommendation by Ze*, drawer mobile responsif, modal pencarian instan, dan indikator jumlah wishlist.
- **Hero Section**: Headline editorial, visual lookbook beresolusi tinggi, dan tautan eksplorasi cepat.
- **Shop by Category**: Grid kategori interaktif lengkap dengan jumlah produk terdaftar.
- **Ze's Picks**: Pilihan produk unggulan yang dikurasi khusus oleh admin.
- **Trending Outfits & Finds**: Bagian produk viral dengan badge diskon akurat dan marketplace asal.
- **Shop by Marketplace**: Segmentasi langsung untuk Shopee Finds, Tokopedia Finds, TikTok Shop, dan Lazada.
- **Thematic Lookbooks**: Koleksi tematik seperti *Clean Aesthetic Starter Pack*, *Under 100K*, dan *Cozy WFH Desk Setup*.
- **Katalog Lengkap (`/products`)**: Filter kategori, filter marketplace, pencarian kata kunci, slider kisaran harga, dan sorting produk (terbaru, termurah, tertinggi, featured).
- **Halaman Detail Produk (`/product/[slug]`)**:
  - Galeri multi-foto dengan zoom lightbox.
  - Video player MP4 responsif dengan kontrol play/pause, mute, dan fullscreen.
  - Format harga Rupiah Indonesia (IDR) disertai harga coret diskon dan catatan update harga.
  - Tombol aksi marketplace aman (`target="_blank" rel="noopener noreferrer"`).
  - Integrasi tracking klik outbound.
  - Rekomendasi produk terkait dalam kategori yang sama.
- **Wishlist Browser**: Penyimpanan produk favorit menggunakan LocalStorage (tanpa wajib login).
- **Share Button**: Mendukung Web Share API untuk perangkat smartphone dengan fallback salin tautan clipboard otomatis.
- **SEO & Feed Mesin Pencari**: Dynamic XML Sitemap (`/sitemap.xml`), Robots.txt (`/robots.txt`), OpenGraph, Twitter Card, dan Canonical URL.
- **Halaman Informasi & Kepatuhan**: Halaman Tentang Ze (`/about`), FAQ (`/faq`), Kebijakan Privasi (`/privacy`), dan Syarat Penggunaan & Affiliate Disclosure (`/terms`).
- **Halaman 404 Branded**: Desain ramah pengguna dengan tombol navigasi kembali.

### 2. Admin CMS Dashboard (`/admin`)
- **Autentikasi Aman**: Login dengan proteksi password, show/hide password, session token, dan proteksi rute.
- **Dashboard Ringkasan**: Statistik real-time total produk, produk published, draft, kategori, total klik outbound, serta tabel 5 produk dengan klik tertinggi.
- **Kelola Produk (`/admin/products`)**: Tabel pencarian, filter status, marketplace, dan kategori, tombol duplikasi produk, toggle status satu-klik, dan dialog konfirmasi hapus.
- **Form Produk 24-Field (`/admin/products/new` & `/admin/products/[id]/edit`)**:
  - Nama produk & auto-slug generator.
  - Deskripsi singkat & ulasan lengkap kurasi.
  - Kategori, tag, variasi, dan catatan ukuran.
  - Pemilihan marketplace (Shopee, Tokopedia, TikTok Shop, Lazada).
  - Validasi ketat tautan affiliate (protokol HTTPS terenkripsi).
  - Input harga numerik Rupiah, harga coret, dan catatan harga.
  - Pengunggah media langsung dari HP/PC dengan pratinjau (preview) lokal dan pemilihan cover utama.
  - Dukungan video produk MP4.
  - **Live Product Card Preview**: Kartu produk interaktif di sisi samping formulir yang merender tampilan hasil akhir secara langsung saat kamu mengetik!
- **Kelola Kategori (`/admin/categories`)**: Tambah, edit, dan hapus kategori serta foto cover.
- **Kelola Koleksi (`/admin/collections`)**: Tambah dan atur lookbook tematik.
- **Pengaturan Situs (`/admin/settings`)**: Ubah teks pengumuman atas, teks hero, disclosure affiliate, dan tautan sosial media tanpa menyentuh kode program.
- **Analitik Klik Outbound (`/admin/analytics`)**: Laporan aktivitas klik rujukan pembeli ke marketplace.

---

## C. TEKNOLOGI YANG DIGUNAKAN

- **Framework**: Next.js 15 (App Router, Server & Client Components)
- **Bahasa**: TypeScript (Strict typing)
- **Styling**: Tailwind CSS (Desain kustom: Warm Ivory `#FAF7F2`, Soft Blush `#F1DDE0`, Muted Rose `#B96F80`, Charcoal `#262323`, Soft Gray `#ECE9E5`)
- **Ikon**: Lucide React
- **Database & Auth**: Supabase PostgreSQL + Row Level Security (RLS) + Supabase Auth + Supabase Storage
- **Optimasi Gambar**: Next/Image dengan remote pattern Unsplash dan Supabase Storage

---

## D. PRASYARAT INSTALASI

Pastikan komputer kamu sudah terpasang:
1. **Node.js** versi 18 ke atas (disarankan versi 20 atau 22 LTS).
2. **Git** untuk version control.
3. Akun gratis di [Supabase.com](https://supabase.com).
4. Akun gratis di [GitHub.com](https://github.com) dan [Vercel.com](https://vercel.com).

---

## E. CARA MENJALANKAN PROJECT SECARA LOKAL

1. Buka terminal di folder project:
   ```bash
   cd C:\Users\ASUS\.gemini\antigravity\scratch\recommendation-by-ze
   ```

2. Install seluruh dependency:
   ```bash
   npm install
   ```

3. Salin file contoh environment:
   ```bash
   copy .env.example .env.local
   ```

4. Jalankan server pengembangan lokal:
   ```bash
   npm run dev
   ```

5. Buka browser di [http://localhost:3000](http://localhost:3000). Website toko dan admin CMS langsung dapat diakses!

> **Catatan:** Jika variabel Supabase belum diisi, aplikasi secara otomatis berjalan dalam mode standby dengan data kurasi siap pakai. Kamu tetap bisa login ke admin dan menguji semua fiturnya!

---

## F. PANDUAN SETUP SUPABASE

Untuk menghubungkan database PostgreSQL permanen:

1. Kunjungi [supabase.com](https://supabase.com) lalu klik **Start your project** (gratis).
2. Buat organisasi dan buat proyek baru dengan nama misalnya: `recommendation-by-ze`.
3. Pilih region terdekat (misal: **Singapore - ap-southeast-1**).
4. Buat dan simpan **Database Password**.
5. Setelah proyek selesai dibuat (sekitar 1-2 menit), buka menu **Project Settings > API**:
   - Salin **Project URL** (masukkan ke `NEXT_PUBLIC_SUPABASE_URL` di file `.env.local`).
   - Salin **anon public key** (masukkan ke `NEXT_PUBLIC_SUPABASE_ANON_KEY` di file `.env.local`).

---

## G. MENJALANKAN SQL MIGRATION

File migrasi database lengkap sudah disediakan di dalam folder:
`supabase/migrations/20261012000000_recommendation_by_ze.sql`

Cara menerapkannya:
1. Buka dashboard proyek Supabase kamu.
2. Di menu sebelah kiri, klik **SQL Editor**.
3. Klik **New query**.
4. Buka file `supabase/migrations/20261012000000_recommendation_by_ze.sql` di editor teks, salin seluruh kodenya, lalu tempelkan ke SQL Editor Supabase.
5. Klik tombol **Run** berwarna hijau di pojok kanan bawah.
6. Seluruh tabel (`products`, `categories`, `collections`, `site_settings`, `click_analytics`, `product_media`), kebijakan Row Level Security (RLS), dan trigger otomatis akan langsung aktif.
7. (Opsional) Buka file `supabase/seed.sql`, salin isinya, lalu jalankan di SQL Editor untuk mengisi kategori awal.

---

## H. MENYIAPKAN STORAGE BUCKET & KEBIJAKAN KEAMANAN

Script migrasi SQL di atas telah otomatis membuat bucket storage bernama `catalog-media`. Jika kamu ingin memastikannya secara visual:
1. Buka menu **Storage** di Supabase Dashboard.
2. Pastikan bucket bernama `catalog-media` berstatus **Public bucket**.
3. Jika belum ada, klik **New bucket**:
   - Bucket name: `catalog-media`
   - Public bucket: Centang **ON**
   - Save.

---

## I. MENYIAPKAN AKUN ADMIN PERTAMA

Untuk login ke dashboard admin menggunakan autentikasi Supabase:
1. Di dashboard Supabase, buka menu **Authentication > Users**.
2. Klik tombol **Add User > Create User**.
3. Masukkan email kamu (misal: `admin@tokomu.com`) dan buat password yang kuat.
4. Pastikan opsi **Auto Confirm User?** dicentang agar kamu bisa langsung login tanpa verifikasi email.
5. Daftarkan UID user tersebut ke tabel `admin_profiles`:
   - Buka **SQL Editor** di Supabase.
   - Jalankan perintah:
     ```sql
     INSERT INTO public.admin_profiles (id, email, role)
     SELECT id, email, 'admin'
     FROM auth.users
     WHERE email = 'admin@tokomu.com';
     ```
6. Sekarang kamu bisa login ke [http://localhost:3000/admin/login](http://localhost:3000/admin/login) dengan email dan password tersebut!

---

## J. KONFIGURASI ENVIRONMENT VARIABLES

Daftar variabel yang digunakan:

| Nama Variabel | Wajib/Opsional | Deskripsi |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Wajib (Produksi) | URL endpoint proyek Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Wajib (Produksi) | Kunci publik aman browser Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Opsional | Kunci server rahasia (jangan disebar) |
| `NEXT_PUBLIC_SITE_URL` | Opsional | URL domain produksi (misal `https://tokomu.vercel.app`) untuk sitemap & canonical SEO |

---

## K. MENJALANKAN DAN BUILD PROJECT

- Menjalankan mode dev:
  ```bash
  npm run dev
  ```
- Melakukan verifikasi build produksi (untuk memastikan tidak ada error TypeScript):
  ```bash
  npm run build
  ```
- Menjalankan hasil build:
  ```bash
  npm run start
  ```

---

## L. PANDUAN GITHUB

1. Buat repository baru di [github.com/new](https://github.com/new) dengan nama `recommendation-by-ze` (atur sebagai **Private** atau **Public**).
2. Di komputer kamu, inisialisasi git dan commit:
   ```bash
   git init
   git add .
   git commit -m "feat: complete storefront and admin cms for Recommendation by Ze"
   git branch -M main
   git remote add origin https://github.com/USERNAME_KAMU/recommendation-by-ze.git
   git push -u origin main
   ```

File `.gitignore` sudah otomatis mengecualikan file `.env.local` dan folder rahasia sehingga kredensialmu tidak akan bocor ke GitHub.

---

## M. PANDUAN DEPLOY KE VERCEL

1. Kunjungi [vercel.com](https://vercel.com) dan login menggunakan akun GitHub kamu.
2. Klik tombol **Add New > Project**.
3. Pilih repository `recommendation-by-ze` lalu klik **Import**.
4. Di bagian **Environment Variables**, tambahkan:
   - `NEXT_PUBLIC_SUPABASE_URL` = (URL Supabase kamu)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (Anon Key Supabase kamu)
   - `NEXT_PUBLIC_SITE_URL` = `https://recommendation-by-ze.vercel.app` (atau nama domainmu)
5. Klik tombol **Deploy**.
6. Vercel akan otomatis melakukan proses build dalam 1-2 menit dan memberikan link website online aktifmu!
7. Setiap kali kamu melakukan update di GitHub, Vercel akan otomatis melakukan deploy ulang tanpa perlu tindakan manual.

---

## N. PANDUAN PENGGUNAAN ADMIN CMS BAGI PEMULA

### 1. Menambahkan Produk Baru
1. Buka `/admin` lalu login.
2. Klik tombol **Tambah Produk**.
3. Ketikkan nama produk (slug URL akan otomatis terbuat).
4. Pilih kategori yang sesuai (misal: *Outfit Wanita* atau *Korean Style*).
5. Pilih marketplace tempat kamu mengambil link affiliate (Shopee, Tokopedia, TikTok Shop, atau Lazada).
6. Tempelkan tautan affiliate resmi kamu di kolom **Tautan Affiliate**.
7. Masukkan harga produk dalam Rupiah (misal: `125000`).
8. Unggah foto atau thumbnail produk langsung dari HP/Laptop.
9. Perhatikan **Live Card Preview** di sebelah kanan untuk melihat hasil tampilannya.
10. Klik **Terbitkan Produk**. Produk langsung tampil di katalog publik!

### 2. Mengubah Banner Pengumuman & Hero
1. Di sidebar admin, klik **Pengaturan Website**.
2. Ubah teks pengumuman atas atau teks judul besar hero.
3. Klik **Simpan Perubahan Pengaturan**.

---

## O. TRANSPARANSI & BIAYA LAYANAN PIHAK KETIGA

- **Vercel**: Paket Hobby gratis mencakup bandwidth 100 GB/bulan (lebih dari cukup untuk puluhan ribu pengunjung awal).
- **Supabase**: Paket gratis mencakup database 500 MB dan penyimpanan storage media 1 GB gratis tanpa biaya bulanan.
- Tidak ada biaya tersembunyi.

---

## P. BACKUP DATABASE & PEMULIHAN DATA

- Di Supabase Dashboard, kamu bisa melakukan backup manual kapan saja melalui menu **Project Settings > Backups** atau mengekspor tabel ke format CSV melalui **Table Editor > Export to CSV**.
- File migrasi `supabase/migrations/20261012000000_recommendation_by_ze.sql` merupakan cetak biru permanen database kamu yang dapat digunakan untuk membuat ulang database kapan saja.

---

*Recommendation by Ze — Curated Online Shop Finds & Fashion Inspiration.*
