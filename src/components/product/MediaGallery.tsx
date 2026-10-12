"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, ZoomIn, X, ChevronLeft, ChevronRight, Image as ImageIcon, ArrowLeft } from "lucide-react";
import { ProductMedia } from "@/types";
import { VideoPlayer } from "./VideoPlayer";

interface MediaGalleryProps {
  media: ProductMedia[];
  productName: string;
}

export function MediaGallery({ media = [], productName }: MediaGalleryProps) {
  // Sort media by sort_order
  const sortedMedia = [...media].sort((a, b) => a.sort_order - b.sort_order);
  const initialIndex =
    sortedMedia.findIndex((m) => m.is_cover) !== -1
      ? sortedMedia.findIndex((m) => m.is_cover)
      : 0;

  const [currentIndex, setCurrentIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (sortedMedia.length === 0) {
    return (
      <div className="relative aspect-[4/5] bg-[#12131A] border border-white/10 rounded-2xl flex items-center justify-center text-zinc-500 text-sm">
        Foto tidak tersedia
      </div>
    );
  }

  const currentMedia = sortedMedia[currentIndex] || sortedMedia[0];
  const isCurrentVideo = currentMedia.media_type === "video";

  const handleReturnToPhoto = () => {
    const photoIdx = sortedMedia.findIndex((m) => m.media_type !== "video");
    setCurrentIndex(photoIdx !== -1 ? photoIdx : 0);
  };

  return (
    <div className="space-y-4">
      {/* Main Display Container */}
      <div className="relative rounded-2xl overflow-hidden bg-[#12131A] shadow-2xl border border-white/10 aspect-[4/5] sm:aspect-square flex items-center justify-center group">
        {isCurrentVideo ? (
          <div className="relative w-full h-full">
            <VideoPlayer
              src={currentMedia.public_url}
              poster={currentMedia.thumbnail_url}
              className="w-full h-full"
            />

            {/* Quick Return to Photo Floating Button */}
            <button
              type="button"
              onClick={handleReturnToPhoto}
              className="absolute top-4 left-4 z-30 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-black text-xs font-bold shadow-lg hover:bg-zinc-200 active:scale-95 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Foto</span>
            </button>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={currentMedia.public_url}
              alt={currentMedia.alt_text || productName}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105 cursor-zoom-in"
              onClick={() => setIsLightboxOpen(true)}
            />
            {/* Zoom Icon */}
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="absolute bottom-4 right-4 p-2.5 rounded-full bg-[#090A0F]/80 backdrop-blur-md shadow-lg text-white hover:bg-white hover:text-black transition-all border border-white/20"
              aria-label="Perbesar gambar"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Carousel arrows if more than 1 media */}
        {sortedMedia.length > 1 && (
          <>
            <button
              type="button"
              onClick={() =>
                setCurrentIndex((prev) => (prev > 0 ? prev - 1 : sortedMedia.length - 1))
              }
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-[#090A0F]/80 backdrop-blur-md shadow-lg text-white hover:bg-white hover:text-black border border-white/20 transition-all active:scale-90"
              aria-label="Media sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() =>
                setCurrentIndex((prev) => (prev < sortedMedia.length - 1 ? prev + 1 : 0))
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-[#090A0F]/80 backdrop-blur-md shadow-lg text-white hover:bg-white hover:text-black border border-white/20 transition-all active:scale-90"
              aria-label="Media berikutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Row */}
      {sortedMedia.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
          {sortedMedia.map((item, idx) => {
            const isSelected = idx === currentIndex;
            const isVideo = item.media_type === "video";
            return (
              <button
                key={item.id || idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border transition-all ${
                  isSelected
                    ? "border-white ring-2 ring-emerald-400 scale-105"
                    : "border-white/10 hover:border-white/30 opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={
                    isVideo
                      ? item.thumbnail_url || item.public_url
                      : item.public_url
                  }
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
                {isVideo && (
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white">
                    <Play className="w-4 h-4 fill-white" />
                    <span className="text-[8px] font-mono font-bold mt-0.5">VIDEO</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && currentMedia.media_type === "image" && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsLightboxOpen(false);
          }}
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all shadow-lg border border-white/20"
            aria-label="Tutup preview"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <Image
              src={currentMedia.public_url}
              alt={productName}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
