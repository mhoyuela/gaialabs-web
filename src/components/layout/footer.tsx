"use client";

import Link from "next/link";
import { Logo } from "../shared/logo";
import { NAV_LINKS } from "@/lib/constants";
import { Linkedin } from "lucide-react";

const socialLinks = [
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/company/gaia-labs1/",
    name: "LinkedIn",
  },
];

export function Footer() {
  return (
    <footer className="bg-secondary/40 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Innovación y conocimiento para un futuro tecnológico.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground">Navegación</h3>
              <ul className="mt-4 space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Términos de Servicio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Contacto</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>info@gaialabs.es</li>
                <li>+34 667 755 271</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} GaiaLabs. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
