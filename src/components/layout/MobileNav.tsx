"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[var(--color-rtc-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rtc-blue)] rounded-md"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 flex flex-col bg-white border-b border-gray-200 shadow-lg p-4 space-y-4">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-[var(--color-rtc-navy)] hover:text-[var(--color-rtc-blue)]"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <Button href="/contact" variant="default" className="w-full" onClick={() => setIsOpen(false)}>
            Request a Consultation
          </Button>
        </div>
      )}
    </div>
  );
}
