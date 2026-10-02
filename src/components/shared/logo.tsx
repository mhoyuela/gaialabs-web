import Link from "next/link";

interface LogoProps {
  /** Usa texto blanco (para fondos oscuros/transparentes como el header sobre el hero) */
  inverted?: boolean;
}

export function Logo({ inverted }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <span
        className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
          inverted ? "text-white" : "text-foreground"
        }`}
      >
        Ga<span className="text-primary">ia</span>Labs
      </span>
    </Link>
  );
}
