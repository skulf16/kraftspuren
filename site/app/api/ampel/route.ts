import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  getAmpelStatus,
  setAmpelStatus,
  checkAdminToken,
  ADMIN_COOKIE,
} from "@/lib/ampel";

export const dynamic = "force-dynamic";

export async function GET() {
  const status = await getAmpelStatus();
  return NextResponse.json(
    { status },
    { headers: { "Cache-Control": "no-store" } }
  );
}

export async function POST(request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  if (!checkAdminToken(token)) {
    return NextResponse.json({ error: "Nicht angemeldet" }, { status: 401 });
  }

  const body = (await request.json().catch(() => null)) as {
    status?: string;
  } | null;
  const status = body?.status;
  if (status !== "gruen" && status !== "gelb" && status !== "rot") {
    return NextResponse.json({ error: "Ungültiger Status" }, { status: 400 });
  }

  await setAmpelStatus(status);
  return NextResponse.json({ status });
}
