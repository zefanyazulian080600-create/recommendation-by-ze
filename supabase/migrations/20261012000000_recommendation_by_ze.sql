-- =========================================================================
-- DATABASE MIGRATION: RECOMMENDATION BY ZE (Curated Online Shop Finds)
-- =========================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS public.categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    icon_name TEXT DEFAULT 'ShoppingBag',
    cover_image TEXT,
    sort_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. COLLECTIONS TABLE (Editorial curation groups)
CREATE TABLE IF NOT EXISTS public.collections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    badge_text TEXT,
    cover_image TEXT,
    is_published BOOLEAN DEFAULT true,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    short_description TEXT NOT NULL,
    description TEXT NOT NULL,
    category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    tags TEXT[] DEFAULT '{}',
    marketplace TEXT NOT NULL CHECK (marketplace IN ('shopee', 'tokopedia', 'lazada', 'tiktok')),
    affiliate_url TEXT NOT NULL,
    price NUMERIC NOT NULL CHECK (price >= 0),
    original_price NUMERIC CHECK (original_price >= 0),
    price_note TEXT,
    variants JSONB DEFAULT '[]'::jsonb,
    size_notes TEXT,
    is_featured BOOLEAN DEFAULT false,
    is_trending BOOLEAN DEFAULT false,
    badge_label TEXT,
    status TEXT NOT NULL DEFAULT 'published' CHECK (status IN ('draft', 'published')),
    sort_order INT DEFAULT 0,
    seo_title TEXT,
    seo_description TEXT,
    click_count INT DEFAULT 0,
    price_updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()),
    published_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()),
    deleted_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. PRODUCT MEDIA TABLE
CREATE TABLE IF NOT EXISTS public.product_media (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    media_type TEXT NOT NULL CHECK (media_type IN ('image', 'video')),
    storage_path TEXT,
    public_url TEXT NOT NULL,
    thumbnail_url TEXT,
    alt_text TEXT,
    is_cover BOOLEAN DEFAULT false,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. COLLECTION PRODUCTS (M-to-M junction)
CREATE TABLE IF NOT EXISTS public.collection_products (
    collection_id UUID REFERENCES public.collections(id) ON DELETE CASCADE,
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    sort_order INT DEFAULT 0,
    PRIMARY KEY (collection_id, product_id)
);

-- 6. SITE SETTINGS TABLE
CREATE TABLE IF NOT EXISTS public.site_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    brand_name TEXT DEFAULT 'Recommendation by Ze',
    brand_tagline TEXT DEFAULT 'Curated Online Shop Finds & Inspiration',
    hero_headline TEXT DEFAULT 'Curated Finds for Your Everyday Aesthetic.',
    hero_subheadline TEXT DEFAULT 'Rekomendasi terbaik belanja online shop pilihan Ze: mulai dari fashion & outfit, skincare viral, perintilan aesthetic, sampai gadget setup favorit.',
    hero_image TEXT DEFAULT 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
    announcement_text TEXT DEFAULT 'Temukan racun online shop terbaik & wishlist favoritmu hari ini ✨',
    announcement_active BOOLEAN DEFAULT true,
    affiliate_disclosure TEXT DEFAULT 'Beberapa tautan di website ini merupakan tautan affiliate resmi. Ze dapat menerima komisi kecil apabila kamu melakukan pembelian melalui tautan tersebut tanpa ada biaya tambahan apapun bagimu.',
    social_instagram TEXT DEFAULT 'https://instagram.com/recommendationbyze',
    social_tiktok TEXT DEFAULT 'https://tiktok.com/@recommendationbyze',
    social_telegram TEXT DEFAULT 'https://t.me/racunbyze',
    footer_text TEXT DEFAULT '© 2026 Recommendation by Ze. Kurasi barang online shop pilihan & inspirasi harian.',
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. CLICK ANALYTICS (Outbound affiliate clicks)
CREATE TABLE IF NOT EXISTS public.click_analytics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    marketplace TEXT NOT NULL,
    referrer TEXT,
    user_agent TEXT,
    clicked_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 8. ADMIN PROFILES
CREATE TABLE IF NOT EXISTS public.admin_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    role TEXT DEFAULT 'admin' NOT NULL,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- =========================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =========================================================================

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collection_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.click_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_profiles ENABLE ROW LEVEL SECURITY;

-- Helper function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_profiles
    WHERE id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- CATEGORIES: Public can read active categories, admin has full access
CREATE POLICY "Public categories are viewable by everyone" 
ON public.categories FOR SELECT USING (is_active = true OR public.is_admin());

CREATE POLICY "Admins can manage categories" 
ON public.categories FOR ALL USING (public.is_admin());

-- COLLECTIONS: Public can read published collections
CREATE POLICY "Public collections are viewable by everyone" 
ON public.collections FOR SELECT USING (is_published = true OR public.is_admin());

CREATE POLICY "Admins can manage collections" 
ON public.collections FOR ALL USING (public.is_admin());

-- PRODUCTS: Public can only view published non-deleted products
CREATE POLICY "Public can view published products" 
ON public.products FOR SELECT USING (
    (status = 'published' AND deleted_at IS NULL) OR public.is_admin()
);

CREATE POLICY "Admins can insert products" 
ON public.products FOR INSERT WITH CHECK (public.is_admin());

CREATE POLICY "Admins can update products" 
ON public.products FOR UPDATE USING (public.is_admin());

CREATE POLICY "Admins can delete products" 
ON public.products FOR DELETE USING (public.is_admin());

-- PRODUCT MEDIA: Public can view media for published products
CREATE POLICY "Public can view media" 
ON public.product_media FOR SELECT USING (true);

CREATE POLICY "Admins can manage media" 
ON public.product_media FOR ALL USING (public.is_admin());

-- COLLECTION PRODUCTS:
CREATE POLICY "Public can view collection products" 
ON public.collection_products FOR SELECT USING (true);

CREATE POLICY "Admins can manage collection products" 
ON public.collection_products FOR ALL USING (public.is_admin());

-- SITE SETTINGS:
CREATE POLICY "Public can view site settings" 
ON public.site_settings FOR SELECT USING (true);

CREATE POLICY "Admins can update site settings" 
ON public.site_settings FOR ALL USING (public.is_admin());

-- CLICK ANALYTICS:
CREATE POLICY "Public can log clicks" 
ON public.click_analytics FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view analytics" 
ON public.click_analytics FOR SELECT USING (public.is_admin());

-- ADMIN PROFILES:
CREATE POLICY "Admins can view admin profiles" 
ON public.admin_profiles FOR SELECT USING (public.is_admin());

-- =========================================================================
-- STORAGE BUCKETS SETUP (Run in Supabase SQL editor or Storage UI)
-- =========================================================================

-- Insert storage bucket if not exists
INSERT INTO storage.buckets (id, name, public) 
VALUES ('catalog-media', 'catalog-media', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
CREATE POLICY "Public can view media files"
ON storage.objects FOR SELECT
USING (bucket_id = 'catalog-media');

CREATE POLICY "Admins can upload media files"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'catalog-media' AND auth.role() = 'authenticated');

CREATE POLICY "Admins can update media files"
ON storage.objects FOR UPDATE
USING (bucket_id = 'catalog-media' AND auth.role() = 'authenticated');

CREATE POLICY "Admins can delete media files"
ON storage.objects FOR DELETE
USING (bucket_id = 'catalog-media' AND auth.role() = 'authenticated');

-- =========================================================================
-- INITIAL DEFAULT SITE SETTINGS ROW
-- =========================================================================
INSERT INTO public.site_settings (
    brand_name,
    brand_tagline,
    hero_headline,
    hero_subheadline,
    hero_image,
    announcement_text,
    announcement_active,
    affiliate_disclosure
) VALUES (
    'Recommendation by Ze',
    'Curated Online Shop Finds & Inspiration',
    'Curated Finds for Your Everyday Aesthetic.',
    'Rekomendasi terbaik belanja online shop pilihan Ze: mulai dari fashion & outfit, skincare viral, perintilan aesthetic, sampai gadget setup favorit.',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
    'Temukan racun online shop terbaik & wishlist favoritmu hari ini ✨',
    true,
    'Beberapa tautan di website ini merupakan tautan affiliate resmi. Ze dapat menerima komisi kecil apabila kamu melakukan pembelian melalui tautan tersebut tanpa ada biaya tambahan apapun bagimu.'
) ON CONFLICT DO NOTHING;
