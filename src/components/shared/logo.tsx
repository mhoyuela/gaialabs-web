import Link from "next/link";

interface LogoProps {
  scrolled?: boolean;
}

export function Logo({ scrolled }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
        scrolled ? "text-black" : "text-white"
      }`}>
        Ga<span className="text-primary">ia</span>Labs
      </span>
    </Link>
  );
}
