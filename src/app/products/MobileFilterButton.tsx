"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import { FilterSidebar } from "@/components/product/FilterSidebar";
import { Category } from "@/types";

interface MobileFilterButtonProps {
  categories: Category[];
}

export function MobileFilterButton({ categories }: MobileFilterButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();

  let activeCount = 0;
  if (searchParams.get("category")) activeCount++;
  if (searchParams.get("marketplace")) activeCount++;
  if (searchParams.get("price")) activeCount++;
  if (searchParams.get("search")) activeCount++;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-[#12131A] text-xs font-bold text-white hover:bg-white/10 transition-all shadow-md"
      >
        <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" />
        <span>Filter & Urutkan</span>
        {activeCount > 0 && (
          <span className="w-4 h-4 rounded-full bg-emerald-500 text-black text-[10px] font-mono font-bold flex items-center justify-center">
            {activeCount}
          </span>
        )}
      </button>

      <FilterSidebar
        categories={categories}
        isMobileDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
