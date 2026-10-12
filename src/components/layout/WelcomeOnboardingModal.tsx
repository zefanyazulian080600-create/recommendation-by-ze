"use client";

import React, { useState, useEffect, useRef } from "react";
import { useUser } from "@/context/UserContext";
import { Sparkles, Zap, Flame, X, ArrowRight, User, ShieldCheck } from "lucide-react";
import { triggerConfetti } from "@/lib/confetti";

const VIBE_OPTIONS = [
  { id: "Skena", label: "🎸 Anak Skena & Indie ☕", desc: "Tote bag kanvas, vintage tee, sambas & ngopi" },
  { id: "Kalcer", label: "🛹 Anak Kalcer & Blok M 🎨", desc: "Workwear Detroit jacket, cargo fatigue & vinyl" },
  { id: "Starboy", label: "⚡ Starboy / Night Drip 🕶️", desc: "Heavy streetwear, leather, loafers & santal EDP" },
  { id: "Stargirl", label: "✨ Stargirl / Clean Chic 💅", desc: "European lookbook crop, wide-leg & chic glam" },
  { id: "Gorpcore", label: "🏕️ Gorpcore & Outdoor ⛰️", desc: "Windbreaker, tactical cargo & hiking kicks" },
  { id: "CleanFit", label: "☕ Clean Fit & Old Money 🍸", desc: "Soft linen shirt, knit polo & neutral earth tone" },
  { id: "CewekKue", label: "🍰 Cewek Kue / Pastel Pop 🎀", desc: "Warna pastel playful, crop top & cute accessories" },
  { id: "CewekMamba", label: "🖤 Cewek Mamba / Dark Edgy 🕷️", desc: "All-black misterius, leather boots & oversize fit" },
  { id: "CyberY2K", label: "💿 Cyber Y2K & Baggy 🎮", desc: "Parachute cargo pants, chrome chain & retro look" },
];

export function WelcomeOnboardingModal() {
  const { userName, userVibe, isRegistered, isModalOpen, saveUser, closeModal } = useUser();
  const [inputName, setInputName] = useState("");
  const [selectedVibe, setSelectedVibe] = useState("Starboy");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync existing user data if re-editing
  useEffect(() => {
    if (userName) setInputName(userName);
    if (userVibe) setSelectedVibe(userVibe);
  }, [userName, userVibe, isModalOpen]);

  // Autofocus when modal opens
  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = inputName.trim();
    if (!trimmed) {
      setErrorMsg("Isi nama panggilan kamu dulu yuk! Biar makin akrab ✨");
      return;
    }
    setErrorMsg("");
    triggerConfetti();
    saveUser(trimmed, selectedVibe);
  };

  const handleGuest = () => {
    saveUser("Bestie", selectedVibe);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-espresso/70 backdrop-blur-md animate-fadeIn">
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-lg max-h-[92vh] flex flex-col bg-vanilla rounded-3xl border-3 border-espresso shadow-brutal-lg overflow-hidden animate-scaleUp"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Top Decorative Banner */}
        <div className="bg-coral text-espresso px-6 py-3.5 border-b-3 border-espresso flex items-center justify-between font-black text-xs uppercase tracking-wider flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-vanilla animate-ping" />
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 fill-espresso" /> Welcome to Recommendation by Ze
            </span>
          </div>

          {isRegistered && (
            <button
              onClick={closeModal}
              className="p-1 rounded-full bg-vanilla/30 hover:bg-vanilla text-espresso transition-all border border-espresso/20"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cobalt text-vanilla text-xs font-black uppercase rounded-full border border-espresso tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-coral fill-coral" /> VIP Pass Access
            </div>
            <h2 id="modal-title" className="font-serif text-2xl md:text-3xl font-extrabold text-espresso leading-tight">
              Yo! Spill Nama Panggilan Kamu Dulu Dong ✨
            </h2>
            <p className="text-espresso/75 text-xs md:text-sm max-w-md mx-auto">
              Biar kami tau siapa yang lagi mampir & rekomendasi outfit/gear kurasi Ze disapa khusus buat kamu!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="user-name-input" className="block text-xs font-black uppercase tracking-wider text-espresso">
                Nama Panggilan Kamu <span className="text-coral">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-espresso/60">
                  <User className="w-5 h-5 text-cobalt" />
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
                  className="w-full pl-11 pr-4 py-3 bg-white text-espresso placeholder-espresso/40 font-semibold text-base rounded-2xl border-2 border-espresso focus:outline-none focus:border-cobalt focus:ring-4 focus:ring-cobalt/20 shadow-inner"
                />
              </div>
              {errorMsg && (
                <p className="text-xs font-bold text-coral flex items-center gap-1 mt-1">
                  <Flame className="w-3.5 h-3.5" /> {errorMsg}
                </p>
              )}
            </div>

            {/* Vibe Selection */}
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-wider text-espresso">
                Pilih Vibe / Gaya Favoritmu:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {VIBE_OPTIONS.map((vibe) => {
                  const isSelected = selectedVibe === vibe.id;
                  return (
                    <button
                      key={vibe.id}
                      type="button"
                      onClick={() => setSelectedVibe(vibe.id)}
                      className={`text-left p-2.5 rounded-xl border-2 transition-all flex flex-col gap-0.5 ${
                        isSelected
                          ? "bg-cobalt text-vanilla border-espresso shadow-brutal -translate-y-0.5"
                          : "bg-white text-espresso border-espresso/30 hover:border-espresso hover:bg-vanilla/60"
                      }`}
                    >
                      <span className="font-bold text-xs">{vibe.label}</span>
                      <span className={`text-[10px] ${isSelected ? "text-vanilla/80" : "text-espresso/60"}`}>
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
                className="w-full py-3.5 px-6 bg-coral hover:bg-coral-dark text-espresso font-black text-sm uppercase tracking-wider rounded-2xl border-3 border-espresso shadow-brutal hover:shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Masuk ke Rekomendasi Ze</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-between text-xs pt-1 px-1">
                <button
                  type="button"
                  onClick={handleGuest}
                  className="text-espresso/70 hover:text-espresso font-semibold underline underline-offset-2 transition-colors"
                >
                  Masuk sebagai Guest (Anonim)
                </button>

                <span className="flex items-center gap-1 text-[11px] text-espresso/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-cobalt" /> Tersimpan aman di browser kamu
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
