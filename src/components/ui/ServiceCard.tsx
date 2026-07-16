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
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[var(--color-rtc-blue)] transition-all group h-full flex flex-col">
      <div className="w-12 h-12 rounded-lg bg-[var(--color-rtc-light)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-rtc-blue)] transition-colors">
        <Icon className="w-6 h-6 text-[var(--color-rtc-blue)] group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-[var(--color-rtc-navy-dark)] mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow mb-4 leading-relaxed">{description}</p>
      <Link href={href} className="text-[var(--color-rtc-blue)] font-medium inline-flex items-center group-hover:underline mt-auto w-fit">
        Learn more <span className="ml-1">→</span>
      </Link>
    </div>
  );
}
