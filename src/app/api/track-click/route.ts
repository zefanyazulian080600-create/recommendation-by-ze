import { NextRequest, NextResponse } from "next/server";
import { recordAffiliateClick } from "@/lib/data/store";
import { Marketplace } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { product_id, marketplace, referrer } = body;

    if (!product_id || !marketplace) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const validMarketplaces: Marketplace[] = ["shopee", "tokopedia", "lazada", "tiktok"];
    if (!validMarketplaces.includes(marketplace.toLowerCase())) {
      return NextResponse.json({ error: "Invalid marketplace" }, { status: 400 });
    }

    await recordAffiliateClick(product_id, marketplace.toLowerCase() as Marketplace, referrer);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: "Failed to record event" }, { status: 500 });
  }
}
