"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function MarketplaceSection() {
  const marketplaces = [
    {
      name: "Shopee Finds",
      desc: "Flash sale harian, fashion lokal, outfit korea, & voucher gratis ongkir.",
      slug: "shopee",
      borderColor: "border-[#EE4D2D]/30 hover:border-[#EE4D2D] hover:shadow-[0_0_25px_rgba(238,77,45,0.15)]",
      tagColor: "bg-[#EE4D2D]/15 text-[#EE4D2D] border border-[#EE4D2D]/30",
      textColor: "text-[#EE4D2D]",
    },
    {
      name: "Tokopedia Finds",
      desc: "Official store, gadget setup, skincare original, & perlengkapan kamar estetik.",
      slug: "tokopedia",
      borderColor: "border-[#03AC0E]/30 hover:border-[#03AC0E] hover:shadow-[0_0_25px_rgba(3,172,14,0.15)]",
      tagColor: "bg-[#03AC0E]/15 text-[#03AC0E] border border-[#03AC0E]/30",
      textColor: "text-[#03AC0E]",
    },
    {
      name: "TikTok Shop Finds",
      desc: "Barang viral FYP, racun live streaming, outfit kekinian, & aksesoris lucu.",
      slug: "tiktok",
      borderColor: "border-white/20 hover:border-white/50 hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]",
      tagColor: "bg-white/10 text-white border border-white/20",
      textColor: "text-white",
    },
    {
      name: "Lazada Finds",
      desc: "LazMall terpercaya, diskon brand ternama, makeup, dan kebutuhan harian.",
      slug: "lazada",
      borderColor: "border-[#38BDF8]/30 hover:border-[#38BDF8] hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]",
      tagColor: "bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30",
      textColor: "text-[#38BDF8]",
    },
  ];

  return (
    <section className="py-14 border-t border-white/10 bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            Marketplace Discovery
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
            Belanja di Platform Pilihanmu
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2">
            Punya voucher atau koin di marketplace tertentu? Langsung telusuri kurasi Ze berdasarkan
            marketplace tempat kamu biasa checkout.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {marketplaces.map((mp) => (
            <Link
              key={mp.slug}
              href={`/products?marketplace=${mp.slug}`}
              className={`group p-6 rounded-2xl border bg-[#12131A] ${mp.borderColor} shadow-2xl transition-all duration-300 flex flex-col justify-between tap-bounce`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${mp.tagColor}`}>
                    {mp.name}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:scale-110 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-sans text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {mp.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  {mp.desc}
                </p>
              </div>

              <div className="pt-6">
                <span className={`text-xs font-bold ${mp.textColor} group-hover:underline flex items-center gap-1`}>
                  <span>Telusuri Produk</span>
                  <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
