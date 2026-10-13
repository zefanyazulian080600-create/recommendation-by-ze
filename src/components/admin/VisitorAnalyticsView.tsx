"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Smartphone,
  Laptop,
  Globe,
  RefreshCw,
  Search,
  Eye,
  Clock,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  User,
  ExternalLink,
} from "lucide-react";
import { VisitorAnalyticsSummary, VisitorLog } from "@/types/visitor";

interface VisitorAnalyticsViewProps {
  initialAnalytics?: VisitorAnalyticsSummary;
}

export function VisitorAnalyticsView({ initialAnalytics }: VisitorAnalyticsViewProps) {
  const [analytics, setAnalytics] = useState<VisitorAnalyticsSummary | null>(initialAnalytics || null);
  const [isLoading, setIsLoading] = useState(!initialAnalytics);
  const [cityFilter, setCityFilter] = useState("");
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchData = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch("/api/track-visit");
      if (res.ok) {
        const data = await res.json();
        setAnalytics(data);
        setLastRefreshed(new Date());
      }
    } catch (err) {
      console.warn("Failed fetching visitor analytics:", err);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    if (!initialAnalytics) {
      fetchData();
    }
    // Auto refresh every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatTimeAgo = (isoString: string) => {
    const diff = Date.now() - new Date(isoString).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return "Barusan";
    if (minutes < 60) return `${minutes} mnt lalu`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} jam lalu`;
    return `${Math.floor(hours / 24)} hari lalu`;
  };

  const filteredLogs = analytics?.recentLogs.filter((log) => {
    if (!cityFilter) return true;
    const term = cityFilter.toLowerCase();
    return (
      log.city.toLowerCase().includes(term) ||
      log.region.toLowerCase().includes(term) ||
      log.page.toLowerCase().includes(term) ||
      log.device.toLowerCase().includes(term) ||
      (log.user_name && log.user_name.toLowerCase().includes(term))
    );
  }) || [];

  return (
    <div className="space-y-6 text-white">
      {/* Realtime Live Header Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-ping absolute" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 relative" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-sans text-lg font-bold text-white">
                Live Visitor & Location Tracker
              </h2>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30">
                REALTIME
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              Melacak kota, perangkat, dan halaman yang sedang dilihat pengunjung website kamu secara live.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-[11px] text-zinc-500 font-mono hidden md:inline">
            Update: {lastRefreshed.toLocaleTimeString("id-ID")}
          </span>
          <button
            type="button"
            onClick={fetchData}
            disabled={isRefreshing}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white transition-all disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin text-emerald-400" : ""}`} />
            <span>{isRefreshing ? "Memperbarui..." : "Refresh Data"}</span>
          </button>
        </div>
      </div>

      {/* 4 Stat Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Card 1: Active Now */}
        <div className="p-5 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
              Aktif 5 Mnt Terakhir
            </span>
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
              ⚡
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
            {analytics?.activeNow || 1} Pengunjung
          </div>
          <p className="text-[10px] text-zinc-400">Sedang menjelajah website</p>
        </div>

        {/* Card 2: Today Visits */}
        <div className="p-5 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-400">
              Kunjungan Hari Ini
            </span>
            <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center text-xs">
              📅
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
            {analytics?.todayVisits || 0} Sesi
          </div>
          <p className="text-[10px] text-zinc-400">Dalam 24 jam terakhir</p>
        </div>

        {/* Card 3: Top City */}
        <div className="p-5 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400">
              Kota Terbanyak
            </span>
            <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs">
              📍
            </div>
          </div>
          <div className="text-base sm:text-xl font-bold text-white truncate">
            {analytics?.topCities[0]?.city || "Jakarta"}
          </div>
          <p className="text-[10px] text-zinc-400 font-mono">
            {analytics?.topCities[0]?.percentage || 35}% dari total traffic
          </p>
        </div>

        {/* Card 4: Mobile Percentage */}
        <div className="p-5 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-pink-400">
              Pengguna Smartphone
            </span>
            <div className="w-7 h-7 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center text-xs">
              📱
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
            {analytics?.mobilePercentage || 80}%
          </div>
          <p className="text-[10px] text-zinc-400">Dominan belanja via HP</p>
        </div>
      </div>

      {/* Two Column Grid: Top Cities Distribution & Top Viewed Pages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Top Cities */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <h3 className="font-sans text-base font-bold text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Distribusi Lokasi Pengunjung (Top Kota)</span>
            </h3>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
              Indonesia 🇮🇩
            </span>
          </div>

          <div className="space-y-3">
            {analytics?.topCities.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-zinc-300">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-white">{item.city}</span>
                    <span className="text-[11px] text-zinc-400 font-normal">({item.region})</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-zinc-300 font-bold">{item.count} kunjungan</span>
                    <span className="text-[11px] text-emerald-400 font-bold w-9 text-right">
                      {item.percentage}%
                    </span>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-[#090A0F] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
                    style={{ width: `${Math.max(item.percentage, 5)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Pages Viewed */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <h3 className="font-sans text-base font-bold text-white flex items-center gap-2">
              <Eye className="w-4 h-4 text-sky-400" />
              <span>Halaman Paling Banyak Dikunjungi</span>
            </h3>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
              Halaman Aktif
            </span>
          </div>

          <div className="space-y-2.5">
            {analytics?.topPages.map((page, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all text-xs"
              >
                <div className="flex items-center gap-2 truncate max-w-[280px] sm:max-w-[340px]">
                  <span className="text-zinc-500 font-mono">/{idx + 1}</span>
                  <Link
                    href={page.path}
                    target="_blank"
                    className="font-mono text-zinc-200 hover:text-emerald-300 truncate transition-colors flex items-center gap-1"
                  >
                    <span>{page.path === "/" ? "/ (Beranda Utama)" : page.path}</span>
                    <ExternalLink className="w-3 h-3 text-zinc-500 shrink-0" />
                  </Link>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono font-bold text-[11px] shrink-0">
                  {page.count} views
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real-time Visitor Stream Table */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
          <div>
            <h3 className="font-sans text-base font-bold text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>Riwayat Pengunjung Terkini (Live Feed)</span>
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              Menampilkan {filteredLogs.length} data kunjungan terbaru dengan detail lokasi kota dan perangkat.
            </p>
          </div>

          {/* Search/Filter by City */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              placeholder="Filter kota, perangkat, atau page..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-[#090A0F] border border-white/15 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-400"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-white/10 text-zinc-400 font-mono uppercase tracking-wider text-[10px]">
                <th className="pb-3 pl-1">Lokasi Pengunjung</th>
                <th className="pb-3">Halaman yang Dilihat</th>
                <th className="pb-3">Perangkat & OS</th>
                <th className="pb-3">Browser</th>
                <th className="pb-3">Sumber / Referrer</th>
                <th className="pb-3 text-right pr-1">Waktu Kunjungan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-white/[0.03] transition-colors">
                  {/* Location Column */}
                  <td className="py-3 pl-1">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{log.flag || "🇮🇩"}</span>
                      <div>
                        <div className="font-bold text-white flex items-center gap-1.5">
                          <span>{log.city}</span>
                          {log.user_name && (
                            <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                              VIP: {log.user_name}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-zinc-400 block font-mono">
                          {log.region}, {log.country}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Page Visited */}
                  <td className="py-3">
                    <div className="max-w-[220px]">
                      <Link
                        href={log.page}
                        target="_blank"
                        className="font-mono text-xs text-emerald-400 hover:underline block truncate"
                        title={log.page}
                      >
                        {log.page === "/" ? "/ (Beranda)" : log.page}
                      </Link>
                      {log.page_title && (
                        <span className="text-[10px] text-zinc-400 block truncate">
                          {log.page_title}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Device & OS */}
                  <td className="py-3">
                    <div className="flex items-center gap-1.5">
                      {log.device_type === "mobile" ? (
                        <Smartphone className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                      ) : (
                        <Laptop className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      )}
                      <div>
                        <span className="font-medium text-white block text-xs">{log.device}</span>
                        <span className="text-[10px] text-zinc-500 block font-mono">{log.os}</span>
                      </div>
                    </div>
                  </td>

                  {/* Browser */}
                  <td className="py-3">
                    <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 font-mono text-[10px]">
                      {log.browser}
                    </span>
                  </td>

                  {/* Referrer */}
                  <td className="py-3">
                    <span className="text-zinc-400 text-[11px] block truncate max-w-[140px]">
                      {log.referrer || "Direct Link"}
                    </span>
                  </td>

                  {/* Timestamp */}
                  <td className="py-3 text-right pr-1 font-mono text-zinc-300">
                    <span className="font-bold text-emerald-400 block text-xs">
                      {formatTimeAgo(log.timestamp)}
                    </span>
                    <span className="text-[10px] text-zinc-500 block">
                      {new Date(log.timestamp).toLocaleTimeString("id-ID", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
