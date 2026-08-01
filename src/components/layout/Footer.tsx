import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--color-rtc-navy)] text-white border-t border-[var(--color-rtc-navy-dark)] mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/">
              <Image 
                src="/logo.png" 
                alt={siteConfig.name} 
                width={240} 
                height={80} 
                className="brightness-0 invert opacity-90 h-16 md:h-20 w-auto object-contain scale-[1.35] origin-left md:origin-left" 
              />
            </Link>
            <p className="text-gray-300 mt-4 max-w-sm">
              {siteConfig.description}
            </p>
            <p className="text-gray-300">
              {siteConfig.contact.address}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[var(--color-rtc-green)]">Navigation</h3>
            <ul className="space-y-2">
              {siteConfig.mainNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[var(--color-rtc-green)]">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="mt-4">
                <Link href="/contact" className="text-[var(--color-rtc-blue)] hover:text-white transition-colors underline underline-offset-4">
                  Request a Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          
          <div className="flex gap-4">
            {siteConfig.footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-xs text-gray-500 text-center md:text-left">
          Website content is for general informational purposes and does not create a professional or contractual relationship.
        </div>
      </div>
    </footer>
  );
}
