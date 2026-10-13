import { NextRequest, NextResponse } from "next/server";
import { addBatchProducts } from "@/lib/data/store";
import { Product } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const products: Product[] = body.products || [];

    if (!Array.isArray(products) || products.length === 0) {
      return NextResponse.json(
        { error: "Tidak ada produk yang valid untuk diimpor" },
        { status: 400 }
      );
    }

    const result = await addBatchProducts(products);

    // Persist to disk file if possible
    try {
      const fs = await import("fs");
      const path = await import("path");
      const filePath = path.join(process.cwd(), "src/lib/data/initial-products.json");
      if (fs.existsSync(filePath)) {
        const currentDataRaw = fs.readFileSync(filePath, "utf8");
        const currentList = JSON.parse(currentDataRaw);
        const existingIds = new Set(currentList.map((p: any) => p.id));
        const toAdd = products.filter((p) => !existingIds.has(p.id));
        if (toAdd.length > 0) {
          const updated = [...toAdd, ...currentList];
          fs.writeFileSync(filePath, JSON.stringify(updated, null, 2), "utf8");
        }
      }
    } catch (fsErr) {
      console.warn("Disk persist fallback:", fsErr);
    }

    return NextResponse.json({
      success: true,
      added: result.added,
      total: result.total,
      message: `Berhasil mengimpor ${result.added} produk ke database!`,
    });
  } catch (error: any) {
    console.error("API import error:", error);
    return NextResponse.json(
      { error: error?.message || "Gagal mengimpor produk" },
      { status: 500 }
    );
  }
}
