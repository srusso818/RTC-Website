"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CallToAction } from "@/components/ui/CallToAction";
import { Reveal } from "@/components/ui/Reveal";
import { 
  MonitorSmartphone, ShieldCheck, Mail, Network, Server, 
  DatabaseBackup, Smartphone, Globe, Briefcase, CheckCircle2 
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-transparent text-white pt-24 pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[var(--color-rtc-blue)] opacity-10 blur-3xl mix-blend-screen pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <div className="max-w-4xl bg-slate-950/60 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/5 inline-block">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Technology that <span className="text-[var(--color-rtc-blue)] font-extrabold italic">works</span>.<br />
                Relationships that <span className="text-[var(--color-rtc-blue)] font-extrabold italic">last</span>.
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                We provide enterprise-grade IT solutions with the personal touch of a dedicated partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg" className="text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  Request a Consultation
                </Button>
                <Button href="/services" variant="outline" size="lg" className="text-lg bg-slate-950/40">
                  Explore Our Services
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust and Experience Highlights */}
      <section className="bg-transparent border-y border-white/5 py-8 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <Reveal delay={0.2}>
            <div className="inline-flex flex-wrap justify-center gap-6 md:gap-12 text-white font-medium text-center bg-slate-950/60 backdrop-blur-md px-8 py-4 md:px-12 md:py-6 rounded-full border border-white/5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[var(--color-rtc-green)] w-5 h-5" />
                <span>25+ Years of IT Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[var(--color-rtc-green)] w-5 h-5" />
                <span>Financial & Hedge Fund Tech</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[var(--color-rtc-green)] w-5 h-5" />
                <span>Government IT Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[var(--color-rtc-green)] w-5 h-5" />
                <span>Enterprise Infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[var(--color-rtc-green)] w-5 h-5" />
                <span>Arkansas-Based Consulting</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Introductory Section */}
      <section className="py-24 bg-black/20 border-b border-white/5 relative z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <Reveal>
            <SectionHeading 
              title="Technology Experience That Goes Beyond Basic IT Support" 
              label="OUR APPROACH"
              centered 
            />
            <p className="text-xl text-gray-200 leading-relaxed mb-6 text-balance">
              RTC provides senior-level technology guidance based on decades of experience across financial services, enterprise infrastructure, and government IT. 
            </p>
            <p className="text-lg text-gray-300 leading-relaxed text-balance">
              We believe organizations shouldn't have to navigate complex technology decisions alone. When you partner with RTC, you work directly with an experienced technology professional—not a junior technician or a rotating helpdesk staff. We bring enterprise-level knowledge and practical solutions to organizations that may not have enterprise-level budgets.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-transparent relative z-10">
        <div className="container mx-auto px-4">
          <Reveal>
            <SectionHeading title="Core Capabilities" label="SERVICES" subtitle="Strategic technology consulting and practical engineering solutions for modern organizations." centered />
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <ServiceCard 
                title="IT Consulting and Strategy" 
                description="Technology planning, project guidance, infrastructure assessments, budgeting support, vendor evaluation, and long-term technology roadmaps."
                icon={Briefcase}
                href="/services#consulting"
              />
              <ServiceCard 
                title="Managed IT & Support" 
                description="Practical ongoing support, maintenance, monitoring, troubleshooting, and technology management for organizations that need dependable assistance."
                icon={MonitorSmartphone}
                href="/services#managed-it"
              />
              <ServiceCard 
                title="Cybersecurity" 
                description="Security assessments, endpoint security, identity protection, email security, risk reduction, access controls, and security planning."
                icon={ShieldCheck}
                href="/services#cybersecurity"
              />
              <ServiceCard 
                title="Microsoft 365 & Email" 
                description="Microsoft 365 administration, email migrations, identity management, security configuration, licensing guidance, and ongoing support."
                icon={Mail}
                href="/services#microsoft-365"
              />
              <ServiceCard 
                title="Network Infrastructure" 
                description="Business networking, switching, routing, firewalls, wireless systems, connectivity planning, remote access, and troubleshooting."
                icon={Network}
                href="/services#network"
              />
              <ServiceCard 
                title="Servers & Virtualization" 
                description="Windows Server, Active Directory, VMware, virtualization, server modernization, storage, infrastructure design, and system administration."
                icon={Server}
                href="/services#servers"
              />
              <ServiceCard 
                title="Backup & Disaster Recovery" 
                description="Backup strategy, recovery planning, storage systems, business continuity, off-site protection, recovery testing, and data resilience."
                icon={DatabaseBackup}
                href="/services#backup"
              />
              <ServiceCard 
                title="Mobile Device Management" 
                description="Business and government MDM, Apple Business Manager, supervised devices, enrollment processes, device security, and app deployment."
                icon={Smartphone}
                href="/services#mdm"
              />
              <ServiceCard 
                title="Website & Digital Services" 
                description="Business websites, campaign websites, static website development, domain configuration, DNS, and digital presence consulting."
                icon={Globe}
                href="/services#websites"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose RTC */}
      <section className="py-24 bg-black/20 border-y border-white/5 relative z-10">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-3xl mx-auto mb-16">
              <SectionHeading title="Enterprise Experience Without Enterprise Overhead" label="THE RTC DIFFERENCE" />
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-rtc-blue)]/20 border border-[var(--color-rtc-blue)]/30 flex items-center justify-center">
                    <span className="text-[var(--color-rtc-blue)] font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">More Than 25 Years of Experience</h3>
                  <p className="text-gray-300">Decades of hands-on technology experience across financial services, hedge fund operations, enterprise infrastructure, and government environments.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-rtc-blue)]/20 border border-[var(--color-rtc-blue)]/30 flex items-center justify-center">
                    <span className="text-[var(--color-rtc-blue)] font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Direct Access to Senior Expertise</h3>
                  <p className="text-gray-300">Clients work directly with an experienced systems engineer and technology consultant, avoiding the frustration of tiered support systems.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-rtc-blue)]/20 border border-[var(--color-rtc-blue)]/30 flex items-center justify-center">
                    <span className="text-[var(--color-rtc-blue)] font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Enterprise Knowledge for Smaller Organizations</h3>
                  <p className="text-gray-300">RTC applies enterprise-grade planning and security principles in ways that are practical and affordable for smaller organizations.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-rtc-blue)]/20 border border-[var(--color-rtc-blue)]/30 flex items-center justify-center">
                    <span className="text-[var(--color-rtc-blue)] font-bold">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Practical, Honest Recommendations</h3>
                  <p className="text-gray-300">We recommend technology based on business needs, risk, budget, and long-term value rather than pushing unnecessary complexity.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
