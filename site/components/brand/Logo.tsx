import Image from "next/image";
import Link from "next/link";

export default function Logo({ light }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="kraftspuren Physiotherapie - zur Startseite"
    >
      {light ? (
        <Image
          src="/logo/kraftspuren-logo-weiss.png"
          alt="kraftspuren Physiotherapie"
          width={350}
          height={380}
          className="h-28 w-auto"
        />
      ) : (
        <Image
          src="/logo/kraftspuren-logo.png"
          alt="kraftspuren Physiotherapie"
          width={768}
          height={512}
          priority
          className="h-20 w-auto"
        />
      )}
    </Link>
  );
}
