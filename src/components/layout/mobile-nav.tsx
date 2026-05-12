"use client";

import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";
import { Logo } from "../shared/logo";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  // 1. Limpiamos la lista de enlaces de forma manual antes de renderizar
  const filteredLinks = NAV_LINKS.filter(link => {
    const isDashboard = 
      link.href.toLowerCase().includes('dashboard') || 
      link.label.toLowerCase().includes('dashboard');
    return !isDashboard;
  });

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent 
        side="left" 
        className="border-r-slate-800 text-white"
        style={{ backgroundColor: '#020617', color: 'white' }} 
      >
        <SheetHeader>
          <Logo />
        </SheetHeader>
        <div className="flex flex-col h-full py-8">
          <nav className="flex flex-col gap-6">
            {filteredLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium transition-colors"
                style={{ color: '#cbd5e1' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
      
      {/* 2. SOLUCIÓN NUCLEAR: CSS para ocultar CUALQUIER link que vaya a dashboard */}
      <style jsx global>{`
        a[href*="dashboard"] {
          display: none !important;
        }
      `}</style>
    </Sheet>
  );
}