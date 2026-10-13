"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, X, User, ArrowRight, ShieldCheck, Zap, Flame } from "lucide-react";
import { useUser, UserVibe } from "@/context/UserContext";

const VIBE_OPTIONS: { id: UserVibe; label: string; desc: string }[] = [
  { id: "Skena & Kalcer", label: "🛹 Streetwear & Kalcer", desc: "Kaos boxy, cargo, sneakers, tote bag" },
  { id: "Minimalist & Clean", label: "✨ Minimalist & Clean", desc: "Kemeja linen, celana pleats, warna netral" },
  { id: "Starboy & Dark Drip", label: "🖤 Tech & Desk Setup", desc: "Keyboard, gadget, TWS, audio & lightbar" },
  { id: "Cozy & Soft Vintage", label: "🪴 Kamar Estetik & Kost", desc: "Lampu ambient, diffuser, dekorasi kamar" },
  { id: "Chic & Clean Girl", label: "🧴 Skincare & Beauty", desc: "Sunscreen viral, parfum, lip care, grooming" },
  { id: "Casual Daily", label: "⚡ Racun Viral Ol Shop", desc: "Barang unik, perintilan lucu & hemat under 50k" },
];

export function WelcomeOnboardingModal() {
  const { userName, userVibe, setProfile, isModalOpen, closeModal } = useUser();
  const [inputName, setInputName] = useState("");
  const [selectedVibe, setSelectedVibe] = useState<UserVibe>("Skena & Kalcer");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const isRegistered = Boolean(userName);

  useEffect(() => {
    if (isModalOpen) {
      setInputName(userName || "");
      setSelectedVibe(userVibe || "Skena & Kalcer");
      setErrorMsg("");
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isModalOpen, userName, userVibe]);

  if (!isModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputName.trim();
    if (!trimmed) {
      setErrorMsg("Isi nama panggilan kamu dulu ya!");
      return;
    }
    if (trimmed.length > 25) {
      setErrorMsg("Nama maksimal 25 karakter!");
      return;
    }
    setProfile(trimmed, selectedVibe);
    closeModal();
  };

  const handleGuest = () => {
    if (!userName) {
      setProfile("Bestie", selectedVibe);
    }
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-lg max-h-[92vh] flex flex-col bg-[#12131A] rounded-2xl border border-white/15 shadow-2xl overflow-hidden animate-scaleUp text-white"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Top Decorative Banner */}
        <div className="bg-white/5 border-b border-white/10 px-6 py-3.5 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider flex-shrink-0">
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 fill-emerald-400 text-emerald-400" /> Welcome to Recommendation by Ze
            </span>
          </div>

          {isRegistered && (
            <button
              onClick={closeModal}
              className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20"
              aria-label="Tutup modal"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6 overflow-y-auto">
          {/* Header */}
          <div className="space-y-2 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 text-emerald-400 text-[11px] font-mono font-bold uppercase rounded-full border border-white/10 tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> VIP ACCESS PASS
            </div>
            <h2 id="modal-title" className="font-sans text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight">
              Yo! Spill Nama Panggilan Kamu Dulu ✨
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
              Biar kurasi produk ol shop (gadget, dekorasi kamar, skincare & outfit) disapa khusus buat kamu!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="user-name-input" className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
                Nama Panggilan Kamu <span className="text-emerald-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                  <User className="w-4 h-4 text-emerald-400" />
                </div>
                <input
                  ref={inputRef}
                  id="user-name-input"
                  type="text"
                  maxLength={30}
                  placeholder="Contoh: Daffa, Alex, Sarah, Vina..."
                  value={inputName}
                  onChange={(e) => {
                    setInputName(e.target.value);
                    if (errorMsg) setErrorMsg("");
                  }}
                  className="w-full pl-10 pr-4 py-3 bg-[#090A0F] text-white placeholder:text-zinc-500 font-semibold text-sm rounded-xl border border-white/20 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                />
              </div>
              {errorMsg && (
                <p className="text-xs font-bold text-rose-400 flex items-center gap-1 mt-1">
                  <Flame className="w-3.5 h-3.5" /> {errorMsg}
                </p>
              )}
            </div>

            {/* Vibe Selection */}
            <div className="space-y-2">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-300">
                Pilih Kategori / Minat Utama Kamu:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {VIBE_OPTIONS.map((vibe) => {
                  const isSelected = selectedVibe === vibe.id;
                  return (
                    <button
                      key={vibe.id}
                      type="button"
                      onClick={() => setSelectedVibe(vibe.id)}
                      className={`text-left p-3 rounded-xl border transition-all flex flex-col gap-0.5 ${
                        isSelected
                          ? "bg-white text-black border-white shadow-lg font-bold"
                          : "bg-[#090A0F] text-zinc-300 border-white/10 hover:border-white/25 hover:text-white"
                      }`}
                    >
                      <span className="font-bold text-xs">{vibe.label}</span>
                      <span className={`text-[10px] ${isSelected ? "text-zinc-600 font-medium" : "text-zinc-500"}`}>
                        {vibe.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2 space-y-3">
              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-white text-black font-extrabold text-sm uppercase tracking-wider rounded-xl hover:bg-zinc-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group shadow-xl"
              >
                <span>Masuk ke Rekomendasi Ze 🛍️</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-between text-xs pt-1 px-1">
                <button
                  type="button"
                  onClick={handleGuest}
                  className="text-zinc-400 hover:text-white font-medium underline underline-offset-2 transition-colors"
                >
                  Masuk sebagai Guest (Anonim)
                </button>

                <span className="flex items-center gap-1 text-[11px] text-zinc-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Tersimpan aman di browser kamu
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WelcomeOnboardingModal;
