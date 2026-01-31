"use client";

import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";
import { Logo } from "../shared/logo";
import { Button } from "../ui/button";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="left">
        <SheetHeader>
          <Logo />
        </SheetHeader>
        <div className="flex flex-col h-full py-8">
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Button asChild className="w-full">
              <Link href="/dashboard/notifications">Dashboard</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
