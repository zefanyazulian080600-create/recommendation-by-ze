import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { password } = body;

    if (!password) {
      return NextResponse.json(
        { success: false, error: "Kata sandi wajib diisi" },
        { status: 400 }
      );
    }

    // Passwords accepted on the server
    const validPasswords = [
      process.env.ADMIN_PASSWORD,
      process.env.NEXT_PUBLIC_ADMIN_PASSWORD,
      "zeowner2026",
      "adminze2026",
      "ze2026",
    ].filter(Boolean) as string[];

    if (validPasswords.includes(password.trim())) {
      return NextResponse.json({
        success: true,
        user: {
          email: "ze@recommendationbyze.com",
          role: "owner",
        },
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: "Kata sandi salah. Area ini diproteksi khusus untuk pemilik Recommendation by Ze.",
      },
      { status: 401 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Terjadi kendala pada server" },
      { status: 500 }
    );
  }
}
