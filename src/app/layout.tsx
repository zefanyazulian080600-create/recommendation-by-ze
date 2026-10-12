import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { WishlistProvider } from "@/context/WishlistContext";
import { ToastProvider } from "@/context/ToastContext";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { LiveSpillTicker } from "@/components/layout/LiveSpillTicker";
import { getCategories, getSiteSettings } from "@/lib/data/store";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://recommendationbyze.com";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${settings.brand_name} • ${settings.brand_tagline}`,
      template: `%s | ${settings.brand_name}`,
    },
    description: settings.hero_subheadline,
    keywords: [
      "recommendation by ze",
      "racun shopee",
      "racun tiktok shop",
      "outfit korea",
      "skincare viral",
      "aesthetic room",
      "desk setup",
      "rekomendasi olshop",
      "fashion wanita",
      "belanja hemat",
    ],
    authors: [{ name: "Ze" }],
    creator: "Recommendation by Ze",
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: siteUrl,
      title: `${settings.brand_name} • ${settings.brand_tagline}`,
      description: settings.hero_subheadline,
      siteName: settings.brand_name,
      images: [
        {
          url: settings.hero_image,
          width: 1200,
          height: 630,
          alt: settings.brand_name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${settings.brand_name} • ${settings.brand_tagline}`,
      description: settings.hero_subheadline,
      images: [settings.hero_image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getCategories();
  const settings = await getSiteSettings();

  return (
    <html lang="id" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory text-charcoal font-sans antialiased selection:bg-blush-300 selection:text-charcoal">
        <ToastProvider>
          <WishlistProvider>
            {settings.announcement_active && (
              <AnnouncementBar message={settings.announcement_text} />
            )}
            <Navbar categories={categories} />
            <main className="flex-1 pb-20 lg:pb-0">{children}</main>
            <Footer />
            <MobileBottomBar />
            <LiveSpillTicker />
          </WishlistProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
