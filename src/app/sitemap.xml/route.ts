import { NextResponse } from "next/server";
import { getProducts, getCategories } from "@/lib/data/store";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://recommendationbyze.com";
  const [products, categories] = await Promise.all([
    getProducts({}),
    getCategories(),
  ]);

  const staticUrls = [
    "",
    "/products",
    "/collections",
    "/wishlist",
    "/about",
    "/faq",
    "/privacy",
    "/terms",
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls
    .map(
      (path) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <changefreq>daily</changefreq>
      <priority>${path === "" ? "1.0" : "0.8"}</priority>
    </url>
  `
    )
    .join("")}
  ${categories
    .map(
      (cat) => `
    <url>
      <loc>${baseUrl}/products?category=${cat.slug}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>
  `
    )
    .join("")}
  ${products
    .map(
      (prod) => `
    <url>
      <loc>${baseUrl}/product/${prod.slug}</loc>
      <lastmod>${new Date(prod.updated_at || prod.created_at).toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.9</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
