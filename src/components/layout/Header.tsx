import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt={siteConfig.shortName}
              width={240}
              height={80}
              className="h-16 md:h-20 w-auto object-contain scale-[1.35] origin-left"
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[var(--color-rtc-charcoal)] hover:text-[var(--color-rtc-blue)] transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Button href="/contact" variant="default">
            Request a Consultation
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
