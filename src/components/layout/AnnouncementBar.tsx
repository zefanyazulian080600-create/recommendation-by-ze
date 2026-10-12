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
    <div className="bg-coral text-espresso text-xs sm:text-sm font-bold py-2 px-4 border-b-2 border-espresso/20 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex-1 flex items-center justify-center gap-2 text-center flex-wrap">
          <Sparkles className="w-3.5 h-3.5 text-espresso animate-pulse flex-shrink-0" />
          <span className="tracking-wide">
            {userName ? (
              <>
                Yo, <span className="underline decoration-2 underline-offset-2">{userName}</span>! {message}
              </>
            ) : (
              message
            )}
          </span>

          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-vanilla text-espresso text-[11px] font-black border border-espresso/40 hover:bg-white transition-all shadow-sm ml-1"
            title="Ubah nama atau vibe kamu"
          >
            <User className="w-3 h-3 text-cobalt" />
            <span>{userName ? `${userName} (${userVibe})` : "Spill Nama Kamu ✨"}</span>
          </button>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-espresso/70 hover:text-espresso p-1 rounded-md transition-colors"
          aria-label="Tutup pengumuman"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
