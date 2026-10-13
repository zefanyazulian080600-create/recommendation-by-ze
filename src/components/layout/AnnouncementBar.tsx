"use client";

import React, { useState } from "react";
import { Sparkles, X, User } from "lucide-react";
import { useUser } from "@/context/UserContext";

interface AnnouncementBarProps {
  message?: string;
  isActive?: boolean;
}

export function AnnouncementBar({
  message = "Temukan racun online shop terbaik & wishlist favoritmu hari ini ✨",
  isActive = true,
}: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(isActive);
  const { userName, userVibe, openModal } = useUser();

  if (!isVisible || !message) return null;

  return (
    <div className="bg-[#12131A] text-zinc-300 text-xs font-medium py-2 px-4 border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex-1 flex items-center justify-center gap-2 text-center flex-wrap">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse flex-shrink-0" />
          <span className="tracking-wide">
            {userName ? (
              <>
                Yo, <span className="font-bold text-white underline decoration-emerald-400 decoration-2 underline-offset-2">{userName}</span>! {message}
              </>
            ) : (
              message
            )}
          </span>

          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[11px] font-bold border border-white/20 hover:bg-white/20 transition-all shadow-sm ml-1"
            title="Ubah nama atau vibe kamu"
          >
            <User className="w-3 h-3 text-emerald-400" />
            <span>{userName ? `${userName} (${userVibe})` : "Spill Nama ✨"}</span>
          </button>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-zinc-400 hover:text-white p-1 rounded-md transition-colors"
          aria-label="Tutup pengumuman"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
