"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Collection } from "@/types";

interface CollectionsSectionProps {
  collections: Collection[];
}

export function CollectionsSection({ collections = [] }: CollectionsSectionProps) {
  if (collections.length === 0) return null;

  return (
    <section className="py-14 bg-[#090A0F] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
              Thematic Lookbooks & Guides
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1 tracking-tight">
              Inspirasi & Koleksi Tematik
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
              Paket kombinasi item siap pakai yang sudah disesuaikan dengan tema gaya hidup dan budget harianmu.
            </p>
          </div>
          <Link
            href="/collections"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white transition-colors group"
          >
            <span>Semua Koleksi</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((col) => (
            <Link
              key={col.id}
              href={`/collections#${col.slug}`}
              className="group relative bg-[#12131A] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 shadow-2xl transition-all duration-300 flex flex-col tap-bounce"
            >
              <div className="relative aspect-[16/10] bg-[#090A0F] overflow-hidden border-b border-white/10">
                <Image
                  src={col.cover_image}
                  alt={col.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12131A] via-[#12131A]/30 to-transparent" />
                
                {col.badge_text && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-white text-black text-[10px] font-mono font-bold tracking-tight shadow-md">
                      {col.badge_text}
                    </span>
                  </div>
                )}

                <div className="absolute bottom-3 inset-x-4 text-white">
                  <h3 className="font-sans text-lg font-bold leading-tight group-hover:text-emerald-400 transition-colors">
                    {col.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between bg-[#12131A]">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {col.description}
                </p>
                <div className="pt-4 flex items-center text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
                  <span>Lihat Item Koleksi Ini</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
