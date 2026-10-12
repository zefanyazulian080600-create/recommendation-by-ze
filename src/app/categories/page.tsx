import React from "react";
import { Metadata } from "next";
import { CategorySlider } from "@/components/home/CategorySlider";
import { getCategories } from "@/lib/data/store";

export const metadata: Metadata = {
  title: "Daftar Kategori Pilihan",
  description: "Jelajahi seluruh kategori rekomendasi online shop pilihan Ze.",
};

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="py-8 md:py-14">
      <CategorySlider categories={categories} />
    </div>
  );
}
