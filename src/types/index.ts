export type Marketplace = 'shopee' | 'tokopedia' | 'lazada' | 'tiktok';

export type ProductStatus = 'draft' | 'published';

export type MediaType = 'image' | 'video';

export interface ProductMedia {
  id: string;
  product_id?: string;
  media_type: MediaType;
  public_url: string;
  storage_path?: string;
  thumbnail_url?: string;
  alt_text?: string;
  is_cover?: boolean;
  sort_order: number;
}

export interface SubCategory {
  id: string;
  name: string;
  slug: string;
  parent_category_id: string;
  icon?: string;
  description?: string;
  product_count?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon_name?: string;
  cover_image?: string;
  sort_order: number;
  is_active: boolean;
  product_count?: number;
  subcategories?: SubCategory[];
}

export interface Collection {
  id: string;
  title: string;
  slug: string;
  description: string;
  badge_text?: string;
  cover_image: string;
  is_published: boolean;
  sort_order: number;
  product_ids?: string[];
}

export interface ProductVariant {
  name: string;
  options: string[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  short_description: string;
  description: string;
  category_id: string;
  category?: Category;
  sub_category_id?: string;
  sub_category_name?: string;
  tags: string[];
  marketplace: Marketplace;
  affiliate_url: string;
  price: number;
  original_price?: number;
  price_note?: string;
  variants?: ProductVariant[];
  size_notes?: string;
  is_featured: boolean;
  is_trending: boolean;
  badge_label?: string; // e.g. "Ze's Pick", "Viral TikTok", "Best Budget", "Under 100k"
  spill_number?: number; // Official creator bio spill code number (e.g. #01, #14)
  gender?: 'all' | 'men' | 'women' | 'unisex'; // Target gender/style
  status: ProductStatus;
  sort_order: number;
  seo_title?: string;
  seo_description?: string;
  click_count: number;
  price_updated_at?: string;
  published_at?: string;
  created_at: string;
  updated_at: string;
  media: ProductMedia[];
}

export interface SiteSettings {
  brand_name: string;
  brand_tagline: string;
  hero_headline: string;
  hero_subheadline: string;
  hero_image: string;
  announcement_text: string;
  announcement_active: boolean;
  affiliate_disclosure: string;
  social_instagram: string;
  social_tiktok: string;
  social_telegram: string;
  footer_text: string;
}

export interface ClickEvent {
  product_id: string;
  marketplace: Marketplace;
  referrer?: string;
}

export interface ProductFilterParams {
  category?: string;
  subCategory?: string;
  marketplace?: string;
  search?: string;
  gender?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: 'newest' | 'price_asc' | 'price_desc' | 'featured' | 'trending';
  featuredOnly?: boolean;
}
