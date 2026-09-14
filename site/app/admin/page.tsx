import type { Metadata } from "next";
import { cookies } from "next/headers";
import { checkAdminToken, ADMIN_COOKIE } from "@/lib/ampel";
import AdminPanel from "./AdminPanel";

export const metadata: Metadata = {
  title: "Admin - Terminampel",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const cookieStore = await cookies();
  const angemeldet = checkAdminToken(cookieStore.get(ADMIN_COOKIE)?.value);
  return <AdminPanel initialEingeloggt={angemeldet} />;
}
