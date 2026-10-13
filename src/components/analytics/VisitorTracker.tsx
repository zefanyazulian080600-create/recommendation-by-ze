"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function VisitorTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedPathRef = useRef<string>("");

  useEffect(() => {
    // Do not track admin back-office navigation to keep visitor data focused on shoppers
    if (!pathname || pathname.startsWith("/admin")) return;

    const fullPath = searchParams?.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname;

    // Avoid duplicate tracking for identical consecutive paths
    if (lastTrackedPathRef.current === fullPath) return;
    lastTrackedPathRef.current = fullPath;

    // Debounce slightly to ensure title is rendered
    const timer = setTimeout(() => {
      try {
        let userName: string | undefined;
        let userVibe: string | undefined;

        if (typeof window !== "undefined") {
          userName = localStorage.getItem("ze_user_name") || undefined;
          userVibe = localStorage.getItem("ze_user_vibe") || undefined;
        }

        const payload = {
          page: fullPath,
          page_title: typeof document !== "undefined" ? document.title : "Rekomendasi by Ze",
          referrer: typeof document !== "undefined" && document.referrer ? document.referrer : "Direct / Link Bio",
          timezone: typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "Asia/Jakarta",
          user_name: userName,
          user_vibe: userVibe,
        };

        fetch("/api/track-visit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }).catch(() => {
          // Never block user execution
        });
      } catch {
        // Ignored
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return null;
}
