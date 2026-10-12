"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { ProductMedia } from "@/types";
import { VideoPlayer } from "./VideoPlayer";

interface MediaGalleryProps {
  media: ProductMedia[];
  productName: string;
}

export function MediaGallery({ media = [], productName }: MediaGalleryProps) {
  // Sort media by sort_order
  const sortedMedia = [...media].sort((a, b) => a.sort_order - b.sort_order);
  const initialIndex = sortedMedia.findIndex((m) => m.is_cover) !== -1
    ? sortedMedia.findIndex((m) => m.is_cover)
    : 0;

  const [currentIndex, setCurrentIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (sortedMedia.length === 0) {
    return (
      <div className="relative aspect-[4/5] bg-softgray rounded-3xl flex items-center justify-center text-charcoal-50 text-sm">
        Foto tidak tersedia
      </div>
    );
  }

  const currentMedia = sortedMedia[currentIndex] || sortedMedia[0];

  return (
    <div className="space-y-4">
      {/* Main Display Container */}
      <div className="relative rounded-3xl overflow-hidden bg-white shadow-soft border border-softgray-border aspect-[4/5] sm:aspect-square flex items-center justify-center group">
        {currentMedia.media_type === "video" ? (
          <VideoPlayer
            src={currentMedia.public_url}
            poster={currentMedia.thumbnail_url}
            className="w-full h-full"
          />
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
              className="absolute bottom-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-card text-charcoal hover:bg-white hover:text-rose transition-all opacity-0 group-hover:opacity-100"
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
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-md shadow-card text-charcoal hover:bg-white hover:text-rose transition-all opacity-0 group-hover:opacity-100"
              aria-label="Media sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() =>
                setCurrentIndex((prev) => (prev < sortedMedia.length - 1 ? prev + 1 : 0))
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-md shadow-card text-charcoal hover:bg-white hover:text-rose transition-all opacity-0 group-hover:opacity-100"
              aria-label="Media berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Row */}
      {sortedMedia.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
          {sortedMedia.map((item, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <button
                key={item.id || idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                  isSelected
                    ? "border-rose ring-2 ring-rose/20 scale-105"
                    : "border-softgray-border hover:border-charcoal-50 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={
                    item.media_type === "video"
                      ? item.thumbnail_url || item.public_url
                      : item.public_url
                  }
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
                {item.media_type === "video" && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="w-5 h-5 fill-white text-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && currentMedia.media_type === "image" && (
        <div className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/20 text-white hover:bg-white hover:text-charcoal transition-all"
            aria-label="Tutup preview"
          >
            <X className="w-6 h-6" />
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
