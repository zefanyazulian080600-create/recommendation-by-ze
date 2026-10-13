"use client";

import React, { useState, useRef, useEffect } from "react";
import { Disc3, Volume2, VolumeX, Sparkles } from "lucide-react";

export function LofiAmbiencePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Soft ambient lo-fi synth chord generator using Web Audio API
  // 100% self-contained, no external mp3 download needed!
  const startLofiSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      // Warm dreamy chords (F#m7, Bm7, E, Amaj7)
      const chordFrequencies = [
        [370, 440, 554], // F#m
        [493, 587, 740], // Bm
        [330, 415, 493], // E
        [440, 554, 659], // A
      ];

      let chordIndex = 0;

      const playChord = () => {
        if (!audioContextRef.current) return;
        const now = ctx.currentTime;
        const freqs = chordFrequencies[chordIndex % chordFrequencies.length];
        chordIndex++;

        freqs.forEach((freq) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now);

          // Gentle ambient attack & long release envelope
          gain.gain.setValueAtTime(0.001, now);
          gain.gain.linearRampToValueAtTime(0.02, now + 1.2);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 3.8);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now);
          osc.stop(now + 4);
        });
      };

      playChord();
      intervalRef.current = setInterval(playChord, 3800);
      setIsPlaying(true);
    } catch (e) {
      console.warn("Audio playback not supported or blocked:", e);
    }
  };

  const stopLofiSound = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopLofiSound();
    } else {
      startLofiSound();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-20 right-4 z-40 hidden sm:block pointer-events-auto">
      <button
        type="button"
        onClick={toggleSound}
        className={`flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/15 text-xs font-bold transition-all shadow-2xl tap-bounce ${
          isPlaying
            ? "bg-emerald-400 text-black scale-105 border-emerald-400 font-extrabold"
            : "bg-[#12131A] text-white hover:bg-white/10"
        }`}
        title={isPlaying ? "Matikan musik santai" : "Putar musik santai Ze's Lofi"}
      >
        <Disc3
          className={`w-4 h-4 ${
            isPlaying ? "text-black animate-spin" : "text-emerald-400"
          }`}
        />
        <span>{isPlaying ? "Lofi Room: On 🎵" : "Lofi Ambience 🎧"}</span>
        {isPlaying ? (
          <Volume2 className="w-3.5 h-3.5 text-black" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
        )}
      </button>
    </div>
  );
}
