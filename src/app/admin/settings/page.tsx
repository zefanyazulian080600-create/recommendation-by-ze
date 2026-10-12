"use client";

import React, { useState, useEffect } from "react";
import { Check, Settings, Save, AlertCircle } from "lucide-react";
import { SiteSettings } from "@/types";
import { getSiteSettings, updateSiteSettings } from "@/lib/data/store";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    getSiteSettings().then(setSettings);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!settings) return;

    setIsSaving(true);
    setSuccessMsg("");
    await updateSiteSettings(settings);
    setIsSaving(false);
    setSuccessMsg("Pengaturan situs berhasil disimpan dan diterapkan!");
    setTimeout(() => setSuccessMsg(""), 4000);
  };

  if (!settings) {
    return <div className="p-8 text-center text-xs text-white/50">Memuat pengaturan...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
          Konfigurasi Web
        </span>
        <h1 className="font-editorial text-2xl sm:text-4xl font-semibold text-white tracking-tight">
          Pengaturan Situs
        </h1>
        <p className="text-xs sm:text-sm text-white/50 mt-1">
          Sesuaikan teks pengumuman, hero headline, teks transparansi affiliate, dan sosial media.
        </p>
      </div>

      {successMsg && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 flex items-center gap-2">
          <Check className="w-4 h-4 flex-shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Card 1: Pengumuman Atas (Announcement Bar) */}
        <div className="p-6 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl space-y-4">
          <h2 className="font-editorial text-lg font-semibold text-white">
            1. Announcement Strip (Banner Atas)
          </h2>

          <div className="space-y-3 text-xs">
            <label className="flex items-center gap-2 cursor-pointer font-medium text-white/80">
              <input
                type="checkbox"
                checked={settings.announcement_active}
                onChange={(e) =>
                  setSettings({ ...settings, announcement_active: e.target.checked })
                }
                className="w-4 h-4 text-emerald-500 rounded border-white/20 bg-[#090A0F] focus:ring-emerald-500"
              />
              <span>Aktifkan Banner Pengumuman di Atas Website</span>
            </label>

            <div className="space-y-1">
              <label className="font-mono uppercase text-[11px] font-bold text-white/70">Teks Pengumuman</label>
              <input
                type="text"
                value={settings.announcement_text}
                onChange={(e) =>
                  setSettings({ ...settings, announcement_text: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-xs sm:text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50"
              />
            </div>
          </div>
        </div>

        {/* Card 2: Hero Section */}
        <div className="p-6 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl space-y-4">
          <h2 className="font-editorial text-lg font-semibold text-white">
            2. Hero Section Beranda
          </h2>

          <div className="space-y-3 text-xs">
            <div className="space-y-1">
              <label className="font-mono uppercase text-[11px] font-bold text-white/70">Hero Headline</label>
              <input
                type="text"
                value={settings.hero_headline}
                onChange={(e) =>
                  setSettings({ ...settings, hero_headline: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-xs sm:text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono uppercase text-[11px] font-bold text-white/70">Hero Subheadline</label>
              <textarea
                rows={3}
                value={settings.hero_subheadline}
                onChange={(e) =>
                  setSettings({ ...settings, hero_subheadline: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-xs sm:text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono uppercase text-[11px] font-bold text-white/70">URL Foto Hero Cover</label>
              <input
                type="url"
                value={settings.hero_image}
                onChange={(e) =>
                  setSettings({ ...settings, hero_image: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-xs sm:text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50"
              />
            </div>
          </div>
        </div>

        {/* Card 3: Affiliate Disclosure */}
        <div className="p-6 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl space-y-4">
          <h2 className="font-editorial text-lg font-semibold text-white">
            3. Transparansi Affiliate Disclosure
          </h2>

          <div className="space-y-1 text-xs">
            <label className="font-mono uppercase text-[11px] font-bold text-white/70">Teks Pemberitahuan Resmi</label>
            <textarea
              rows={4}
              value={settings.affiliate_disclosure}
              onChange={(e) =>
                setSettings({ ...settings, affiliate_disclosure: e.target.value })
              }
              className="w-full px-4 py-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-xs sm:text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50"
            />
          </div>
        </div>

        {/* Card 4: Media Sosial */}
        <div className="p-6 rounded-2xl bg-[#12131A] border border-white/10 shadow-xl space-y-4">
          <h2 className="font-editorial text-lg font-semibold text-white">
            4. Tautan Media Sosial
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="space-y-1">
              <label className="font-mono uppercase text-[11px] font-bold text-white/70">Instagram URL</label>
              <input
                type="url"
                value={settings.social_instagram}
                onChange={(e) =>
                  setSettings({ ...settings, social_instagram: e.target.value })
                }
                className="w-full px-3 py-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono uppercase text-[11px] font-bold text-white/70">TikTok URL</label>
              <input
                type="url"
                value={settings.social_tiktok}
                onChange={(e) =>
                  setSettings({ ...settings, social_tiktok: e.target.value })
                }
                className="w-full px-3 py-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono uppercase text-[11px] font-bold text-white/70">Telegram URL</label>
              <input
                type="url"
                value={settings.social_telegram}
                onChange={(e) =>
                  setSettings({ ...settings, social_telegram: e.target.value })
                }
                className="w-full px-3 py-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-emerald-500/50"
              />
            </div>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSaving}
            className="px-8 py-3.5 rounded-full bg-white text-black hover:bg-emerald-400 hover:text-black text-xs sm:text-sm font-bold transition-all shadow-md disabled:opacity-50 flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>{isSaving ? "Menyimpan..." : "Simpan Perubahan Pengaturan"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
