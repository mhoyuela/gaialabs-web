"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";
import { Logo } from "../shared/logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  const pathname = usePathname();
  const links = NAV_LINKS.filter(
    (link) => !link.href.toLowerCase().includes("dashboard")
  );

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="left" className="w-[85%] sm:max-w-sm">
        <SheetHeader>
          <SheetTitle asChild>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 mt-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium rounded-md px-3 py-3 transition-colors",
                pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
