import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  return (
    <div className="bg-[#0b1d3a]/60 backdrop-blur-md rounded-lg p-6 shadow-lg border border-white/10 hover:shadow-[0_0_15px_rgba(0,132,200,0.3)] hover:border-[var(--color-rtc-blue)] transition-all group h-full flex flex-col">
      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-rtc-blue)] transition-colors">
        <Icon className="w-6 h-6 text-white group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 flex-grow mb-4 leading-relaxed">{description}</p>
      <Link href={href} className="text-[var(--color-rtc-blue)] font-medium inline-flex items-center group-hover:underline mt-auto w-fit">
        Learn more <span className="ml-1">→</span>
      </Link>
    </div>
  );
}
