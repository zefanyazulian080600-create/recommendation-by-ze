"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function MarketplaceSection() {
  const discoveryHubs = [
    {
      name: "Shopee Mall & Star Seller",
      badge: "SHOPEE MALL & STAR+",
      desc: "Official brand store, rating tinggi 4.8+, klaim voucher toko & terjamin ori.",
      href: "/products?sort=popular",
      borderColor: "border-[#EE4D2D]/30 hover:border-[#EE4D2D] hover:shadow-[0_0_25px_rgba(238,77,45,0.2)]",
      tagColor: "bg-[#EE4D2D]/15 text-[#EE4D2D] border border-[#EE4D2D]/30",
      textColor: "text-[#EE4D2D]",
    },
    {
      name: "Streetwear & Kalcer Drip",
      badge: "STREETWEAR DROPS",
      desc: "Jaket gorpcore, tracksuit, rugby polo, oversized tee & kemeja boxy hits.",
      href: "/products?category=outfit-pria",
      borderColor: "border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]",
      tagColor: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
      textColor: "text-emerald-400",
    },
    {
      name: "Flash Sale Under 50k",
      badge: "MURAH MERIAH UNDER 50K",
      desc: "Kaos distro 20rb-an, celana pendek parasut, tumbler, & belanja hemat.",
      href: "/products?price=under-50k",
      borderColor: "border-amber-500/30 hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]",
      tagColor: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
      textColor: "text-amber-400",
    },
    {
      name: "Loose Denim & Cargo",
      badge: "BAGGY & CARGO DENIM",
      desc: "Loose denim snow black, cargo outdoor, baggy gombrong skena & celana kulot.",
      href: "/products?category=celana-jeans",
      borderColor: "border-sky-500/30 hover:border-sky-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]",
      tagColor: "bg-sky-500/15 text-sky-400 border border-sky-500/30",
      textColor: "text-sky-400",
    },
  ];

  return (
    <section className="py-14 border-t border-white/10 bg-[#090A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            SHOPEE DISCOVERY HUBS
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
            Kategori & Jalur Belanja Shopee Terpopuler
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2">
            Semua item terhubung langsung ke official seller di Shopee dengan voucher gratis ongkir dan jaminan harga terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {discoveryHubs.map((hub) => (
            <Link
              key={hub.name}
              href={hub.href}
              className={`group p-6 rounded-2xl border bg-[#12131A] ${hub.borderColor} shadow-2xl transition-all duration-300 flex flex-col justify-between tap-bounce`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${hub.tagColor}`}>
                    {hub.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:scale-110 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-sans text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {hub.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  {hub.desc}
                </p>
              </div>

              <div className="pt-6">
                <span className={`text-xs font-bold ${hub.textColor} group-hover:underline flex items-center gap-1`}>
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
