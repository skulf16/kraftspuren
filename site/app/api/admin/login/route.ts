import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { checkPassword, makeAdminToken, ADMIN_COOKIE } from "@/lib/ampel";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as {
    password?: string;
  } | null;

  if (!process.env.AMPEL_ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "AMPEL_ADMIN_PASSWORD ist auf dem Server nicht gesetzt." },
      { status: 500 }
    );
  }

  if (!body?.password || !checkPassword(body.password)) {
    return NextResponse.json({ error: "Falsches Passwort" }, { status: 401 });
  }

  const token = makeAdminToken();
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, token!, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30, // 30 Tage
    path: "/",
  });
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE);
  return NextResponse.json({ ok: true });
}
