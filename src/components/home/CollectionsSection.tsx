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
    <section className="py-14 bg-blush-50/50 border-t border-softgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-rose">
              Thematic Lookbooks & Guides
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium text-charcoal mt-1">
              Inspirasi & Koleksi Tematik
            </h2>
            <p className="text-sm text-charcoal-50 mt-1 max-w-xl">
              Paket kombinasi item siap pakai yang sudah disesuaikan dengan tema gaya hidup dan budget harianmu.
            </p>
          </div>
          <Link
            href="/collections"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-charcoal hover:text-rose transition-colors group"
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
              className="group relative bg-white rounded-3xl overflow-hidden border border-softgray-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] bg-softgray overflow-hidden">
                <Image
                  src={col.cover_image}
                  alt={col.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
                
                {col.badge_text && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-charcoal shadow-sm">
                      {col.badge_text}
                    </span>
                  </div>
                )}

                <div className="absolute bottom-4 inset-x-4 text-white">
                  <h3 className="font-editorial text-xl font-semibold leading-tight group-hover:text-blush transition-colors">
                    {col.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-charcoal-200 leading-relaxed">
                  {col.description}
                </p>
                <div className="pt-4 flex items-center text-xs font-semibold text-rose group-hover:underline">
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
