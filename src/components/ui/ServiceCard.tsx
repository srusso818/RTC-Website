"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import React from "react";
import { InteractiveCard } from "@/components/ui/InteractiveCard";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  return (
    <Link href={href} className="block h-full">
      <InteractiveCard className="p-6 hover:border-white/20 hover:bg-white/5 transition-colors group h-full flex flex-col relative z-10 hover:z-20">
      <div 
        style={{ transform: "translateZ(30px)" }}
        className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors"
      >
        <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
      </div>
      <h3 style={{ transform: "translateZ(20px)" }} className="text-xl font-bold text-white mb-3 drop-shadow-md">{title}</h3>
      <p style={{ transform: "translateZ(15px)" }} className="text-gray-300 flex-grow mb-4 leading-relaxed drop-shadow-sm">{description}</p>
        <div style={{ transform: "translateZ(25px)" }} className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--color-rtc-blue)] inline-flex items-center opacity-80 group-hover:opacity-100 mt-auto w-fit transition-all duration-300 group-hover:tracking-[0.25em]">
          Learn more <span className="ml-2">→</span>
        </div>
      </InteractiveCard>
    </Link>
  );
}
