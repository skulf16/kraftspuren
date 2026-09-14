import { promises as fs } from "fs";
import path from "path";
import { createHmac, timingSafeEqual } from "crypto";

export type AmpelStatus = "gruen" | "gelb" | "rot";

export const AMPEL_STATI: {
  status: AmpelStatus;
  label: string;
  patientText: string;
}[] = [
  {
    status: "gruen",
    label: "Grün - sofort",
    patientText: "Sie können sofort mit Ihrer Behandlungsserie starten.",
  },
  {
    status: "gelb",
    label: "Gelb - bis 4 Wochen",
    patientText:
      "Sie können innerhalb von 4 Wochen mit Ihrer Behandlungsserie starten.",
  },
  {
    status: "rot",
    label: "Rot - über 4 Wochen",
    patientText:
      "Aktuell dauert es mehr als 4 Wochen, bis Sie mit Ihrer Behandlungsserie starten können.",
  },
];

const DATA_FILE = path.join(process.cwd(), "data", "ampel.json");

export async function getAmpelStatus(): Promise<AmpelStatus> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw) as { status?: string };
    if (
      parsed.status === "gruen" ||
      parsed.status === "gelb" ||
      parsed.status === "rot"
    ) {
      return parsed.status;
    }
  } catch {
    // Datei fehlt oder ist defekt: Fallback auf Grün
  }
  return "gruen";
}

export async function setAmpelStatus(status: AmpelStatus): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(
    DATA_FILE,
    JSON.stringify({ status, updatedAt: new Date().toISOString() }, null, 2),
    "utf8"
  );
}

// --- Einfache Admin-Session (Passwort aus env, HMAC-Token im Cookie) ---

export const ADMIN_COOKIE = "kraftspuren_admin";

function getPassword(): string | null {
  return process.env.AMPEL_ADMIN_PASSWORD || null;
}

export function makeAdminToken(): string | null {
  const pw = getPassword();
  if (!pw) return null;
  return createHmac("sha256", pw).update("kraftspuren-admin-session").digest("hex");
}

export function checkPassword(input: string): boolean {
  const pw = getPassword();
  if (!pw) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(pw);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function checkAdminToken(token: string | undefined): boolean {
  const expected = makeAdminToken();
  if (!expected || !token) return false;
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}
