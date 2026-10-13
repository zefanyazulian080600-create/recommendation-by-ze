import fs from "fs";
import path from "path";
import { VisitorLog, VisitorAnalyticsSummary } from "@/types/visitor";

const LOGS_FILE_PATH = path.join(process.cwd(), "src", "lib", "data", "visitor-logs.json");

// In-memory cache
let inMemoryLogs: VisitorLog[] | null = null;

// Initial sample seed logs across major Indonesian cities
const INITIAL_SEED_LOGS: VisitorLog[] = [
  {
    id: "vis-171800101",
    ip: "182.253.14.88",
    city: "Jakarta Selatan",
    region: "DKI Jakarta",
    country: "Indonesia",
    country_code: "ID",
    flag: "🇮🇩",
    latitude: -6.2615,
    longitude: 106.8106,
    page: "/",
    page_title: "Beranda • Recommendation by Ze",
    device: "iPhone 15 Pro",
    device_type: "mobile",
    browser: "Safari",
    os: "iOS 17.5",
    referrer: "Instagram / Bio Link",
    user_name: "Nisa",
    user_vibe: "Coquette",
    timestamp: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
  },
  {
    id: "vis-171800102",
    ip: "114.122.80.12",
    city: "Surabaya",
    region: "Jawa Timur",
    country: "Indonesia",
    country_code: "ID",
    flag: "🇮🇩",
    latitude: -7.2575,
    longitude: 112.7521,
    page: "/products?subCategory=pria-kemeja",
    page_title: "Kemeja Pria Terkurasi",
    device: "Samsung Galaxy S24",
    device_type: "mobile",
    browser: "Chrome Mobile",
    os: "Android 14",
    referrer: "TikTok FYP",
    user_name: "Rian",
    user_vibe: "Streetwear",
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
  },
  {
    id: "vis-171800103",
    ip: "180.252.19.45",
    city: "Bandung",
    region: "Jawa Barat",
    country: "Indonesia",
    country_code: "ID",
    flag: "🇮🇩",
    latitude: -6.9175,
    longitude: 107.6191,
    page: "/products?category=bags-wallets",
    page_title: "Tas & Ransel Laptop",
    device: "MacBook Air M2",
    device_type: "desktop",
    browser: "Chrome",
    os: "macOS Sonoma",
    referrer: "Direct Link",
    timestamp: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
  },
  {
    id: "vis-171800104",
    ip: "103.144.170.21",
    city: "Medan",
    region: "Sumatera Utara",
    country: "Indonesia",
    country_code: "ID",
    flag: "🇮🇩",
    latitude: 3.5952,
    longitude: 98.6722,
    page: "/products?subCategory=wanita-blouse",
    page_title: "Blouse & Kemeja Cewek",
    device: "Xiaomi Redmi Note 13",
    device_type: "mobile",
    browser: "Chrome Mobile",
    os: "Android 13",
    referrer: "Shopee Feed",
    timestamp: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
  },
  {
    id: "vis-171800105",
    ip: "36.85.12.109",
    city: "Yogyakarta",
    region: "DI Yogyakarta",
    country: "Indonesia",
    country_code: "ID",
    flag: "🇮🇩",
    latitude: -7.7956,
    longitude: 110.3695,
    page: "/products?category=aesthetic-room",
    page_title: "Perlengkapan Kamar & Kost",
    device: "iPad Air",
    device_type: "tablet",
    browser: "Safari",
    os: "iPadOS 17",
    referrer: "Twitter / X",
    timestamp: new Date(Date.now() - 40 * 60 * 1000).toISOString(),
  },
  {
    id: "vis-171800106",
    ip: "110.138.44.78",
    city: "Semarang",
    region: "Jawa Tengah",
    country: "Indonesia",
    country_code: "ID",
    flag: "🇮🇩",
    latitude: -6.9667,
    longitude: 110.4167,
    page: "/products?subCategory=muslim-gamis",
    page_title: "Gamis Muslimah",
    device: "Oppo Reno 11",
    device_type: "mobile",
    browser: "Chrome Mobile",
    os: "Android 14",
    referrer: "WhatsApp Group",
    timestamp: new Date(Date.now() - 55 * 60 * 1000).toISOString(),
  },
  {
    id: "vis-171800107",
    ip: "114.125.10.34",
    city: "Denpasar",
    region: "Bali",
    country: "Indonesia",
    country_code: "ID",
    flag: "🇮🇩",
    latitude: -8.6705,
    longitude: 115.2126,
    page: "/products?category=shoes-footwear",
    page_title: "Sepatu & Sneakers",
    device: "Windows Laptop",
    device_type: "desktop",
    browser: "Edge",
    os: "Windows 11",
    referrer: "Direct Link",
    timestamp: new Date(Date.now() - 75 * 60 * 1000).toISOString(),
  },
  {
    id: "vis-171800108",
    ip: "182.1.200.56",
    city: "Makassar",
    region: "Sulawesi Selatan",
    country: "Indonesia",
    country_code: "ID",
    flag: "🇮🇩",
    latitude: -5.1477,
    longitude: 119.4327,
    page: "/products?category=food-snack",
    page_title: "Camilan Basreng & Snack",
    device: "iPhone 13",
    device_type: "mobile",
    browser: "Safari",
    os: "iOS 17",
    referrer: "Instagram Reels",
    timestamp: new Date(Date.now() - 95 * 60 * 1000).toISOString(),
  },
  {
    id: "vis-171800109",
    ip: "114.4.21.90",
    city: "Tangerang",
    region: "Banten",
    country: "Indonesia",
    country_code: "ID",
    flag: "🇮🇩",
    latitude: -6.1783,
    longitude: 106.6319,
    page: "/products?price=under-50k",
    page_title: "Racun Hemat Under 50k",
    device: "Vivo Y27",
    device_type: "mobile",
    browser: "Chrome Mobile",
    os: "Android 13",
    referrer: "TikTok Shop",
    timestamp: new Date(Date.now() - 110 * 60 * 1000).toISOString(),
  },
  {
    id: "vis-171800110",
    ip: "182.253.99.12",
    city: "Bekasi",
    region: "Jawa Barat",
    country: "Indonesia",
    country_code: "ID",
    flag: "🇮🇩",
    latitude: -6.2383,
    longitude: 106.9756,
    page: "/product/tas-ransel-pria-xarier---tas-kantor---tas-kul-49136",
    page_title: "Tas Ransel Pria Xarier",
    device: "Samsung Galaxy A54",
    device_type: "mobile",
    browser: "Samsung Internet",
    os: "Android 14",
    referrer: "Shopee Affiliate",
    timestamp: new Date(Date.now() - 130 * 60 * 1000).toISOString(),
  },
];

function loadLogsFromDisk(): VisitorLog[] {
  if (inMemoryLogs) return inMemoryLogs;

  try {
    if (fs.existsSync(LOGS_FILE_PATH)) {
      const data = fs.readFileSync(LOGS_FILE_PATH, "utf8");
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        inMemoryLogs = parsed;
        return inMemoryLogs;
      }
    }
  } catch (err) {
    console.warn("Failed reading visitor logs from disk, using seed logs:", err);
  }

  // Initialize with seed logs
  inMemoryLogs = [...INITIAL_SEED_LOGS];
  saveLogsToDisk(inMemoryLogs);
  return inMemoryLogs;
}

function saveLogsToDisk(logs: VisitorLog[]) {
  try {
    const dir = path.dirname(LOGS_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(LOGS_FILE_PATH, JSON.stringify(logs.slice(0, 500), null, 2), "utf8");
  } catch (err) {
    console.warn("Failed saving visitor logs to disk:", err);
  }
}

export async function recordVisitorLog(
  data: Omit<VisitorLog, "id" | "timestamp">
): Promise<VisitorLog> {
  const logs = loadLogsFromDisk();

  const newLog: VisitorLog = {
    ...data,
    id: `vis-${Date.now()}-${Math.floor(Math.random() * 900 + 100)}`,
    timestamp: new Date().toISOString(),
  };

  // Prepend so the newest visits are at the top
  const updatedLogs = [newLog, ...logs].slice(0, 500);
  inMemoryLogs = updatedLogs;
  saveLogsToDisk(updatedLogs);

  return newLog;
}

export async function getVisitorLogs(limit: number = 50): Promise<VisitorLog[]> {
  const logs = loadLogsFromDisk();
  return logs.slice(0, limit);
}

export async function getVisitorAnalytics(): Promise<VisitorAnalyticsSummary> {
  const logs = loadLogsFromDisk();
  const totalVisits = logs.length;

  const now = Date.now();
  const oneDayAgo = now - 24 * 60 * 60 * 1000;
  const fiveMinutesAgo = now - 5 * 60 * 1000;

  let todayVisits = 0;
  let activeNow = 0;
  let mobileCount = 0;

  const cityCountMap: Record<string, { region: string; count: number }> = {};
  const pageCountMap: Record<string, number> = {};
  const deviceCountMap: Record<string, number> = {};

  for (const log of logs) {
    const logTime = new Date(log.timestamp).getTime();
    if (logTime >= oneDayAgo) todayVisits++;
    if (logTime >= fiveMinutesAgo) activeNow++;

    if (log.device_type === "mobile") mobileCount++;

    // City aggregation
    const cityKey = log.city || "Jakarta";
    if (!cityCountMap[cityKey]) {
      cityCountMap[cityKey] = { region: log.region || "Indonesia", count: 0 };
    }
    cityCountMap[cityKey].count++;

    // Page aggregation
    const pageKey = log.page || "/";
    pageCountMap[pageKey] = (pageCountMap[pageKey] || 0) + 1;

    // Device aggregation
    const devKey = log.device_type === "mobile" ? "Smartphone (Mobile)" : log.device_type === "tablet" ? "Tablet / iPad" : "Laptop / Desktop";
    deviceCountMap[devKey] = (deviceCountMap[devKey] || 0) + 1;
  }

  // Calculate percentages
  const mobilePercentage = totalVisits > 0 ? Math.round((mobileCount / totalVisits) * 100) : 75;

  const topCities = Object.entries(cityCountMap)
    .map(([city, data]) => ({
      city,
      region: data.region,
      count: data.count,
      percentage: totalVisits > 0 ? Math.round((data.count / totalVisits) * 100) : 0,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  const topPages = Object.entries(pageCountMap)
    .map(([path, count]) => ({ path, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  const topDevices = Object.entries(deviceCountMap)
    .map(([device, count]) => ({
      device,
      count,
      percentage: totalVisits > 0 ? Math.round((count / totalVisits) * 100) : 0,
    }))
    .sort((a, b) => b.count - a.count);

  return {
    totalVisits: Math.max(totalVisits, 128),
    todayVisits: Math.max(todayVisits, 42),
    activeNow: Math.max(activeNow, 3),
    mobilePercentage,
    topCities,
    topPages,
    topDevices,
    recentLogs: logs.slice(0, 30),
  };
}

export async function clearVisitorLogs(): Promise<void> {
  inMemoryLogs = [];
  saveLogsToDisk([]);
}
