import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-slate-950/60 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt={siteConfig.shortName}
              width={240}
              height={80}
              className="h-16 md:h-20 w-auto object-contain scale-[2.0] origin-left brightness-0 invert"
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white hover:text-[var(--color-rtc-blue)] transition-colors"
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
