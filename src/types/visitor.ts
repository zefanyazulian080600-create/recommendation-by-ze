export interface VisitorLog {
  id: string;
  ip: string;
  city: string;
  region: string;
  country: string;
  country_code: string;
  flag: string;
  latitude?: number;
  longitude?: number;
  page: string;
  page_title?: string;
  device: string;
  device_type: "mobile" | "desktop" | "tablet";
  browser: string;
  os: string;
  referrer: string;
  user_name?: string;
  user_vibe?: string;
  timestamp: string;
}

export interface CityStat {
  city: string;
  region: string;
  count: number;
  percentage: number;
}

export interface DeviceStat {
  device: string;
  count: number;
  percentage: number;
}

export interface PageStat {
  path: string;
  count: number;
}

export interface VisitorAnalyticsSummary {
  totalVisits: number;
  todayVisits: number;
  activeNow: number;
  mobilePercentage: number;
  topCities: CityStat[];
  topPages: PageStat[];
  topDevices: DeviceStat[];
  recentLogs: VisitorLog[];
}
