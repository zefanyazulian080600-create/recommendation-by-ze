import {
  Category,
  Collection,
  Product,
  ProductFilterParams,
  SiteSettings,
  Marketplace,
} from "@/types";
import {
  initialCategories,
  initialCollections,
  initialProducts,
  initialSiteSettings,
} from "./initial-data";
import { isSupabaseConfigured, createClient } from "../supabase/client";

// In-memory runtime cache for demonstration / offline fallback
let localProducts: Product[] = [...initialProducts];
let localCategories: Category[] = [...initialCategories];
let localCollections: Collection[] = [...initialCollections];
let localSettings: SiteSettings = { ...initialSiteSettings };
let localClickCounts: Record<string, number> = {};

// Initialize click counts from products
initialProducts.forEach((p) => {
  localClickCounts[p.id] = p.click_count || 0;
});

export async function getSiteSettings(): Promise<SiteSettings> {
  if (isSupabaseConfigured()) {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("site_settings")
        .select("*")
        .limit(1)
        .single();
      if (!error && data) {
        return data as SiteSettings;
      }
    } catch (e) {
      console.warn("Supabase settings query fallback:", e);
    }
  }
  return localSettings;
}

export async function updateSiteSettings(settings: Partial<SiteSettings>): Promise<SiteSettings> {
  if (isSupabaseConfigured()) {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("site_settings")
        .update(settings)
        .select()
        .single();
      if (!error && data) {
        return data as SiteSettings;
      }
    } catch (e) {
      console.warn("Supabase settings update fallback:", e);
    }
  }
  localSettings = { ...localSettings, ...settings };
  return localSettings;
}

export async function getCategories(): Promise<Category[]> {
  if (isSupabaseConfigured()) {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .eq("is_active", true)
        .order("sort_order", { ascending: true });
      if (!error && data && data.length > 0) {
        return data as Category[];
      }
    } catch (e) {
      console.warn("Supabase categories query fallback:", e);
    }
  }
  // Attach product counts
  return localCategories.map((cat) => ({
    ...cat,
    product_count: localProducts.filter(
      (p) => p.category_id === cat.id && p.status === "published"
    ).length,
  }));
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const cats = await getCategories();
  return cats.find((c) => c.slug === slug) || null;
}

export async function getCollections(): Promise<Collection[]> {
  if (isSupabaseConfigured()) {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("collections")
        .select("*")
        .eq("is_published", true)
        .order("sort_order", { ascending: true });
      if (!error && data && data.length > 0) {
        return data as Collection[];
      }
    } catch (e) {
      console.warn("Supabase collections query fallback:", e);
    }
  }
  return localCollections.filter((c) => c.is_published);
}

export async function getCollectionBySlug(slug: string): Promise<Collection | null> {
  const colls = await getCollections();
  return colls.find((c) => c.slug === slug) || null;
}

export async function getProducts(
  params: ProductFilterParams = {},
  includeDrafts: boolean = false
): Promise<Product[]> {
  let list = [...localProducts];

  if (isSupabaseConfigured()) {
    try {
      const supabase = createClient();
      let query = supabase
        .from("products")
        .select(`
          *,
          category:categories(*),
          media:product_media(*)
        `);

      if (!includeDrafts) {
        query = query.eq("status", "published").is("deleted_at", null);
      }

      const { data, error } = await query;
      if (!error && data && data.length > 0) {
        list = data.map((item: any) => ({
          ...item,
          tags: Array.isArray(item.tags) ? item.tags : [],
          media: item.media || [],
        }));
      }
    } catch (e) {
      console.warn("Supabase products query fallback:", e);
    }
  }

  // Filter drafts unless specified
  if (!includeDrafts) {
    list = list.filter((p) => p.status === "published");
  }

  // Populate category references
  list = list.map((prod) => {
    const category = localCategories.find((c) => c.id === prod.category_id);
    return {
      ...prod,
      category,
      click_count: localClickCounts[prod.id] || prod.click_count || 0,
    };
  });

  // Category filter
  if (params.category) {
    const catSlug = params.category.toLowerCase();
    const cat = localCategories.find((c) => c.slug === catSlug || c.id === catSlug);
    if (cat) {
      list = list.filter((p) => p.category_id === cat.id);
    }
  }

  // Marketplace filter
  if (params.marketplace && params.marketplace !== "all") {
    list = list.filter((p) => p.marketplace.toLowerCase() === params.marketplace?.toLowerCase());
  }

  // Search filter
  if (params.search && params.search.trim() !== "") {
    const term = params.search.toLowerCase().trim();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.short_description.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.tags.some((t) => t.toLowerCase().includes(term)) ||
        p.marketplace.toLowerCase().includes(term)
    );
  }

  // Price range filter
  if (params.minPrice !== undefined && params.minPrice > 0) {
    list = list.filter((p) => p.price >= params.minPrice!);
  }
  if (params.maxPrice !== undefined && params.maxPrice > 0) {
    list = list.filter((p) => p.price <= params.maxPrice!);
  }

  // Featured only
  if (params.featuredOnly) {
    list = list.filter((p) => p.is_featured);
  }

  // Sorting
  switch (params.sort) {
    case "price_asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price_desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "featured":
      list.sort((a, b) => (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0));
      break;
    case "trending":
      list.sort((a, b) => (b.is_trending ? 1 : 0) - (a.is_trending ? 1 : 0));
      break;
    case "newest":
    default:
      list.sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      break;
  }

  return list;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getProducts({}, true);
  return products.find((p) => p.slug === slug) || null;
}

export async function getProductById(id: string): Promise<Product | null> {
  const products = await getProducts({}, true);
  return products.find((p) => p.id === id) || null;
}

export async function getRelatedProducts(product: Product, limit = 4): Promise<Product[]> {
  const products = await getProducts({ category: product.category_id });
  return products.filter((p) => p.id !== product.id).slice(0, limit);
}

export async function createProduct(product: Omit<Product, "id" | "created_at" | "updated_at" | "click_count">): Promise<Product> {
  const newId = `prod-${Date.now()}`;
  const now = new Date().toISOString();
  
  const created: Product = {
    ...product,
    id: newId,
    click_count: 0,
    created_at: now,
    updated_at: now,
  };

  if (isSupabaseConfigured()) {
    try {
      const supabase = createClient();
      const { data, error } = await supabase.from("products").insert([created]).select().single();
      if (!error && data) {
        return data as Product;
      }
    } catch (e) {
      console.warn("Supabase create product fallback:", e);
    }
  }

  localProducts.unshift(created);
  return created;
}

export async function updateProduct(id: string, updates: Partial<Product>): Promise<Product | null> {
  const now = new Date().toISOString();

  if (isSupabaseConfigured()) {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("products")
        .update({ ...updates, updated_at: now })
        .eq("id", id)
        .select()
        .single();
      if (!error && data) {
        return data as Product;
      }
    } catch (e) {
      console.warn("Supabase update product fallback:", e);
    }
  }

  const index = localProducts.findIndex((p) => p.id === id);
  if (index === -1) return null;

  localProducts[index] = {
    ...localProducts[index],
    ...updates,
    updated_at: now,
  };
  return localProducts[index];
}

export async function deleteProduct(id: string): Promise<boolean> {
  if (isSupabaseConfigured()) {
    try {
      const supabase = createClient();
      const { error } = await supabase.from("products").delete().eq("id", id);
      if (!error) return true;
    } catch (e) {
      console.warn("Supabase delete product fallback:", e);
    }
  }

  const initialLen = localProducts.length;
  localProducts = localProducts.filter((p) => p.id !== id);
  return localProducts.length < initialLen;
}

export async function recordAffiliateClick(productId: string, marketplace: Marketplace, referrer?: string) {
  localClickCounts[productId] = (localClickCounts[productId] || 0) + 1;

  if (isSupabaseConfigured()) {
    try {
      const supabase = createClient();
      await supabase.from("click_analytics").insert([
        {
          product_id: productId,
          marketplace,
          referrer: referrer || "web",
          clicked_at: new Date().toISOString(),
        },
      ]);
    } catch (e) {
      // Non-blocking analytics
    }
  }
}

export async function getAnalyticsSummary() {
  const totalProducts = localProducts.length;
  const publishedProducts = localProducts.filter((p) => p.status === "published").length;
  const draftProducts = localProducts.filter((p) => p.status === "draft").length;
  const featuredProducts = localProducts.filter((p) => p.is_featured).length;
  const totalCategories = localCategories.length;

  const totalClicks = Object.values(localClickCounts).reduce((a, b) => a + b, 0);

  const topProducts = [...localProducts]
    .map((p) => ({
      ...p,
      click_count: localClickCounts[p.id] || p.click_count || 0,
    }))
    .sort((a, b) => b.click_count - a.click_count)
    .slice(0, 5);

  return {
    totalProducts,
    publishedProducts,
    draftProducts,
    featuredProducts,
    totalCategories,
    totalClicks,
    topProducts,
  };
}
