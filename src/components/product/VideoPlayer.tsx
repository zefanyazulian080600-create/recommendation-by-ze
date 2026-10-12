"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export function VideoPlayer({ src, poster, className = "" }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen?.();
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    if (duration > 0) {
      setProgress((current / duration) * 100);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative group bg-black rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-square flex items-center justify-center cursor-pointer ${className}`}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        muted={isMuted}
        loop
        onTimeUpdate={handleTimeUpdate}
        className="w-full h-full object-cover"
      />

      {/* Play/Pause Overlay Icon when paused */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-charcoal/30 flex items-center justify-center backdrop-blur-[2px] transition-all">
          <div className="w-16 h-16 rounded-full bg-white/90 text-charcoal flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-7 h-7 ml-1 fill-charcoal text-charcoal" />
          </div>
        </div>
      )}

      {/* Control Bar Overlay on hover */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {/* Progress bar */}
        <div className="w-full bg-white/30 h-1 rounded-full overflow-hidden">
          <div
            className="bg-rose h-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="p-1 hover:text-rose transition-colors"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="p-1 hover:text-rose transition-colors"
              aria-label={isMuted ? "Unmute suara" : "Mute suara"}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-1 hover:text-rose transition-colors"
            aria-label="Layar penuh"
          >
            <Maximize className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
