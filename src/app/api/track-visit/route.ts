import { NextRequest, NextResponse } from "next/server";
import { recordVisitorLog, getVisitorAnalytics } from "@/lib/data/visitor-store";

// Helper to parse User-Agent
function parseUserAgent(ua: string | null) {
  if (!ua) {
    return {
      device: "Desktop PC",
      device_type: "desktop" as const,
      browser: "Chrome",
      os: "Windows 11",
    };
  }

  let device_type: "mobile" | "desktop" | "tablet" = "desktop";
  let device = "Desktop PC";
  let os = "Windows";
  let browser = "Chrome";

  // Device & OS detection
  if (/iPad/i.test(ua)) {
    device_type = "tablet";
    device = "iPad";
    os = "iPadOS";
  } else if (/iPhone/i.test(ua)) {
    device_type = "mobile";
    device = "iPhone";
    os = "iOS";
  } else if (/Android/i.test(ua)) {
    device_type = /Mobile/i.test(ua) ? "mobile" : "tablet";
    if (/Samsung/i.test(ua) || /SM-/i.test(ua)) device = "Samsung Galaxy";
    else if (/Xiaomi|Redmi/i.test(ua)) device = "Xiaomi Redmi";
    else if (/Oppo/i.test(ua)) device = "Oppo";
    else if (/Vivo/i.test(ua)) device = "Vivo";
    else device = "Android Smartphone";
    os = "Android";
  } else if (/Macintosh|Mac OS X/i.test(ua)) {
    device = "MacBook / iMac";
    os = "macOS";
  } else if (/Windows/i.test(ua)) {
    device = "Windows PC";
    os = "Windows 11";
  } else if (/Linux/i.test(ua)) {
    device = "Linux PC";
    os = "Linux";
  }

  // Browser detection
  if (/Edg/i.test(ua)) browser = "Microsoft Edge";
  else if (/Chrome|CriOS/i.test(ua)) browser = device_type === "mobile" ? "Chrome Mobile" : "Chrome";
  else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browser = "Safari";
  else if (/Firefox/i.test(ua)) browser = "Firefox";
  else if (/SamsungBrowser/i.test(ua)) browser = "Samsung Internet";

  return { device, device_type, browser, os };
}

// Fallback Indonesian cities for development / private IPs
const LOCAL_INDONESIA_CITIES = [
  { city: "Jakarta Selatan", region: "DKI Jakarta", lat: -6.2615, lon: 106.8106 },
  { city: "Surabaya", region: "Jawa Timur", lat: -7.2575, lon: 112.7521 },
  { city: "Bandung", region: "Jawa Barat", lat: -6.9175, lon: 107.6191 },
  { city: "Medan", region: "Sumatera Utara", lat: 3.5952, lon: 98.6722 },
  { city: "Semarang", region: "Jawa Tengah", lat: -6.9667, lon: 110.4167 },
  { city: "Yogyakarta", region: "DI Yogyakarta", lat: -7.7956, lon: 110.3695 },
  { city: "Denpasar", region: "Bali", lat: -8.6705, lon: 115.2126 },
  { city: "Bekasi", region: "Jawa Barat", lat: -6.2383, lon: 106.9756 },
  { city: "Tangerang", region: "Banten", lat: -6.1783, lon: 106.6319 },
  { city: "Makassar", region: "Sulawesi Selatan", lat: -5.1477, lon: 119.4327 },
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));

    const rawIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      req.headers.get("cf-connecting-ip") ||
      "127.0.0.1";

    const userAgent = req.headers.get("user-agent") || "";
    const uaInfo = parseUserAgent(userAgent);

    let city = "Jakarta";
    let region = "DKI Jakarta";
    let country = "Indonesia";
    let country_code = "ID";
    let flag = "🇮🇩";
    let latitude = -6.2088;
    let longitude = 106.8456;

    // Is it a local / private IP?
    const isLocalIp =
      rawIp === "127.0.0.1" ||
      rawIp === "::1" ||
      rawIp.startsWith("192.168.") ||
      rawIp.startsWith("10.") ||
      rawIp === "localhost";

    if (!isLocalIp && rawIp.length > 6) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 1200);

        const geoRes = await fetch(
          `http://ip-api.com/json/${rawIp}?fields=status,country,countryCode,regionName,city,lat,lon`,
          { signal: controller.signal }
        );
        clearTimeout(timeoutId);

        if (geoRes.ok) {
          const geoData = await geoRes.json();
          if (geoData.status === "success") {
            city = geoData.city || city;
            region = geoData.regionName || region;
            country = geoData.country || country;
            country_code = geoData.countryCode || country_code;
            latitude = geoData.lat || latitude;
            longitude = geoData.lon || longitude;
            if (country_code === "ID") flag = "🇮🇩";
            else if (country_code === "MY") flag = "🇲🇾";
            else if (country_code === "SG") flag = "🇸🇬";
            else flag = "🌐";
          }
        }
      } catch {
        // Fallback to local default if geo lookup times out
      }
    } else {
      // Pick based on client timezone or consistent hash
      const hash = Math.abs(
        (userAgent + (body.timezone || "")).split("").reduce((a, b) => (a << 5) - a + b.charCodeAt(0), 0)
      );
      const chosen = LOCAL_INDONESIA_CITIES[hash % LOCAL_INDONESIA_CITIES.length];
      city = chosen.city;
      region = chosen.region;
      latitude = chosen.lat;
      longitude = chosen.lon;
    }

    const log = await recordVisitorLog({
      ip: rawIp,
      city,
      region,
      country,
      country_code,
      flag,
      latitude,
      longitude,
      page: body.page || "/",
      page_title: body.page_title || "Rekomendasi by Ze",
      device: uaInfo.device,
      device_type: uaInfo.device_type,
      browser: uaInfo.browser,
      os: uaInfo.os,
      referrer: body.referrer || "Direct / Link Bio",
      user_name: body.user_name || undefined,
      user_vibe: body.user_vibe || undefined,
    });

    return NextResponse.json({ success: true, log });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const analytics = await getVisitorAnalytics();
    return NextResponse.json({ success: true, ...analytics });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || "Failed fetching analytics" },
      { status: 500 }
    );
  }
}
