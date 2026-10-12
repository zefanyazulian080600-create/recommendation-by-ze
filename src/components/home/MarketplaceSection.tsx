"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShoppingBag } from "lucide-react";

export function MarketplaceSection() {
  const marketplaces = [
    {
      name: "Shopee Finds",
      desc: "Flash sale harian, fashion lokal, outfit korea, & voucher gratis ongkir.",
      slug: "shopee",
      bgClass: "from-[#FFF5F2] to-white border-[#EE4D2D]/20 hover:border-[#EE4D2D]",
      tagColor: "bg-[#EE4D2D] text-white",
      textColor: "text-[#EE4D2D]",
    },
    {
      name: "Tokopedia Finds",
      desc: "Official store, gadget setup, skincare original, & perlengkapan kamar estetik.",
      slug: "tokopedia",
      bgClass: "from-[#F2FBF4] to-white border-[#03AC0E]/20 hover:border-[#03AC0E]",
      tagColor: "bg-[#03AC0E] text-white",
      textColor: "text-[#03AC0E]",
    },
    {
      name: "TikTok Shop Finds",
      desc: "Barang viral FYP, racun live streaming, outfit kekinian, & aksesoris lucu.",
      slug: "tiktok",
      bgClass: "from-[#F6F6F6] to-white border-black/20 hover:border-black",
      tagColor: "bg-black text-white",
      textColor: "text-black",
    },
    {
      name: "Lazada Finds",
      desc: "LazMall terpercaya, diskon brand ternama, makeup, dan kebutuhan harian.",
      slug: "lazada",
      bgClass: "from-[#F2F4FD] to-white border-[#0F146D]/20 hover:border-[#0F146D]",
      tagColor: "bg-[#0F146D] text-white",
      textColor: "text-[#0F146D]",
    },
  ];

  return (
    <section className="py-14 border-t border-softgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-rose">
            Marketplace Discovery
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium text-charcoal mt-1">
            Belanja di Platform Pilihanmu
          </h2>
          <p className="text-sm text-charcoal-50 mt-2">
            Punya voucher atau koin di marketplace tertentu? Langsung telusuri kurasi Ze berdasarkan
            marketplace tempat kamu biasa berbelanja.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {marketplaces.map((mp) => (
            <Link
              key={mp.slug}
              href={`/products?marketplace=${mp.slug}`}
              className={`group p-6 rounded-3xl border bg-gradient-to-b ${mp.bgClass} shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${mp.tagColor}`}>
                    {mp.name}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-charcoal group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-editorial text-lg font-semibold text-charcoal group-hover:text-rose transition-colors">
                  {mp.name}
                </h3>
                <p className="text-xs text-charcoal-50 mt-2 leading-relaxed">
                  {mp.desc}
                </p>
              </div>

              <div className="pt-6">
                <span className={`text-xs font-semibold ${mp.textColor} group-hover:underline flex items-center gap-1`}>
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
