"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "../shared/logo";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { Menu } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDashboard = pathname.startsWith("/dashboard");
  if (isDashboard) {
    return null; // El dashboard tiene su propio layout con sidebar
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container mx-auto px-4 h-20 flex items-center">
          <div className="flex-1 flex justify-start">
            <Logo inverted={!scrolled} />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.filter(
              (link) => link.href !== "/dashboard" && link.label !== "Dashboard"
            ).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
                  pathname === link.href
                    ? "text-primary"
                    : scrolled
                    ? "text-foreground"
                    : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex flex-1 justify-end" />

          <div className="md:hidden ml-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menú"
              className={scrolled ? "text-foreground" : "text-white hover:bg-white/10 hover:text-white"}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </header>
      <MobileNav isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
    </>
  );
}
