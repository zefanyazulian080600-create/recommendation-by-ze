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
    return <div className="p-8 text-center text-xs text-charcoal-50">Memuat pengaturan...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-rose">
          Konfigurasi Web
        </span>
        <h1 className="font-editorial text-2xl sm:text-4xl font-medium text-charcoal">
          Pengaturan Situs
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-50 mt-1">
          Sesuaikan teks pengumuman, hero headline, teks transparansi affiliate, dan sosial media.
        </p>
      </div>

      {successMsg && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
          <Check className="w-4 h-4 flex-shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Card 1: Pengumuman Atas (Announcement Bar) */}
        <div className="p-6 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-4">
          <h2 className="font-editorial text-lg font-semibold text-charcoal">
            1. Announcement Strip (Banner Atas)
          </h2>

          <div className="space-y-3 text-xs">
            <label className="flex items-center gap-2 cursor-pointer font-medium text-charcoal">
              <input
                type="checkbox"
                checked={settings.announcement_active}
                onChange={(e) =>
                  setSettings({ ...settings, announcement_active: e.target.checked })
                }
                className="w-4 h-4 text-rose rounded border-softgray-border"
              />
              <span>Aktifkan Banner Pengumuman di Atas Website</span>
            </label>

            <div className="space-y-1">
              <label className="font-semibold text-charcoal-100">Teks Pengumuman</label>
              <input
                type="text"
                value={settings.announcement_text}
                onChange={(e) =>
                  setSettings({ ...settings, announcement_text: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Card 2: Hero Section */}
        <div className="p-6 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-4">
          <h2 className="font-editorial text-lg font-semibold text-charcoal">
            2. Hero Section Beranda
          </h2>

          <div className="space-y-3 text-xs">
            <div className="space-y-1">
              <label className="font-semibold text-charcoal-100">Hero Headline</label>
              <input
                type="text"
                value={settings.hero_headline}
                onChange={(e) =>
                  setSettings({ ...settings, hero_headline: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-charcoal-100">Hero Subheadline</label>
              <textarea
                rows={3}
                value={settings.hero_subheadline}
                onChange={(e) =>
                  setSettings({ ...settings, hero_subheadline: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-charcoal-100">URL Foto Hero Cover</label>
              <input
                type="url"
                value={settings.hero_image}
                onChange={(e) =>
                  setSettings({ ...settings, hero_image: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Card 3: Affiliate Disclosure */}
        <div className="p-6 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-4">
          <h2 className="font-editorial text-lg font-semibold text-charcoal">
            3. Transparansi Affiliate Disclosure
          </h2>

          <div className="space-y-1 text-xs">
            <label className="font-semibold text-charcoal-100">Teks Pemberitahuan Resmi</label>
            <textarea
              rows={4}
              value={settings.affiliate_disclosure}
              onChange={(e) =>
                setSettings({ ...settings, affiliate_disclosure: e.target.value })
              }
              className="w-full px-4 py-2.5 rounded-xl bg-ivory-50 border border-softgray-border text-xs sm:text-sm"
            />
          </div>
        </div>

        {/* Card 4: Media Sosial */}
        <div className="p-6 rounded-3xl bg-white border border-softgray-border shadow-soft space-y-4">
          <h2 className="font-editorial text-lg font-semibold text-charcoal">
            4. Tautan Media Sosial
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="space-y-1">
              <label className="font-semibold text-charcoal-100">Instagram URL</label>
              <input
                type="url"
                value={settings.social_instagram}
                onChange={(e) =>
                  setSettings({ ...settings, social_instagram: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl bg-ivory-50 border border-softgray-border"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-charcoal-100">TikTok URL</label>
              <input
                type="url"
                value={settings.social_tiktok}
                onChange={(e) =>
                  setSettings({ ...settings, social_tiktok: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl bg-ivory-50 border border-softgray-border"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-charcoal-100">Telegram URL</label>
              <input
                type="url"
                value={settings.social_telegram}
                onChange={(e) =>
                  setSettings({ ...settings, social_telegram: e.target.value })
                }
                className="w-full px-3 py-2 rounded-xl bg-ivory-50 border border-softgray-border"
              />
            </div>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSaving}
            className="px-8 py-3.5 rounded-full bg-charcoal text-white text-xs sm:text-sm font-semibold hover:bg-rose transition-all shadow-md disabled:opacity-50 flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>{isSaving ? "Menyimpan..." : "Simpan Perubahan Pengaturan"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
