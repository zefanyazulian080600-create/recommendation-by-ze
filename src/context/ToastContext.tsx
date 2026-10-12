"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { Sparkles, Check, Heart, Link as LinkIcon, Info } from "lucide-react";

interface Toast {
  id: string;
  message: string;
  type?: "success" | "wishlist" | "link" | "info";
  duration?: number;
}

interface ToastContextType {
  showToast: (message: string, type?: Toast["type"]) => void;
}

const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
});

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: Toast["type"] = "success") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2800);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Floating Toast Container */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-charcoal text-white shadow-2xl border border-white/10 backdrop-blur-md animate-slideUp pointer-events-auto"
          >
            <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
              {toast.type === "wishlist" ? (
                <Heart className="w-4 h-4 text-rose fill-rose" />
              ) : toast.type === "link" ? (
                <LinkIcon className="w-4 h-4 text-[#EE4D2D]" />
              ) : toast.type === "info" ? (
                <Info className="w-4 h-4 text-blush-200" />
              ) : (
                <Sparkles className="w-4 h-4 text-blush-300" />
              )}
            </div>
            <p className="text-xs sm:text-sm font-medium tracking-wide">{toast.message}</p>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
