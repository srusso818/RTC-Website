import { Metadata } from "next";
import { CallToAction } from "@/components/ui/CallToAction";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { Shield, Target, Lightbulb, UserCheck, Handshake, ShieldCheck, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Russo Technology Consulting and our 25+ years of experience delivering practical IT solutions.",
};

const principles = [
  { title: "Practical Solutions", icon: Lightbulb, description: "We solve real operational problems rather than selling unnecessary products." },
  { title: "Honest Guidance", icon: Target, description: "Clear, transparent advice focused on your best interests and long-term success." },
  { title: "Security First", icon: Shield, description: "Enterprise-grade security principles scaled practically for your organization." },
  { title: "Reliability", icon: ShieldCheck, description: "Designing systems focused on maximum uptime and operational continuity." },
  { title: "Accountability", icon: UserCheck, description: "We take ownership of technology challenges and follow through on commitments." },
  { title: "Long-Term Value", icon: Clock, description: "Strategic planning that ensures investments provide lasting returns." },
  { title: "Clear Communication", icon: Handshake, description: "Translating complex technical issues into clear business terms." },
  { title: "Local Service", icon: MapPin, description: "Responsive support based right here in Northwest Arkansas." }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-[var(--color-rtc-navy)] text-white py-20 border-b-4 border-[var(--color-rtc-blue)]">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About {siteConfig.name}</h1>
          <p className="text-xl text-gray-300">
            Providing experienced, practical technology guidance to businesses and public organizations.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading title="Company Overview" />
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="mb-6">
              Russo Technology Consulting was created to provide experienced, practical technology guidance to businesses and public organizations. We combine enterprise-level knowledge with responsive, personalized service.
            </p>
            <p>
              Rather than pushing complex software suites or rigid support tiers, RTC focuses on solving real operational problems. We partner with you to understand your specific needs, minimize risks, and build resilient systems that simply work.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Biography */}
      <section className="py-20 bg-[var(--color-rtc-light)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading title="Founder Biography" />
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-[var(--color-rtc-navy-dark)] mb-2">Stephen Russo</h3>
            <p className="text-[var(--color-rtc-blue)] font-semibold mb-6">Owner & Senior Technology Consultant</p>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Stephen Russo is an information technology professional with more than 25 years of experience across financial services, hedge fund technology, enterprise infrastructure, and county government.
              </p>
              <p>
                His career has included responsibility for secure and reliable technology environments where system availability, cybersecurity, data protection, and business continuity are essential.
              </p>
              <p>
                His experience includes Microsoft enterprise platforms, Active Directory, Exchange, Microsoft 365, VMware virtualization, servers, storage, networking, cybersecurity, backup and disaster recovery, mobile device management, technology modernization, and large-scale project coordination.
              </p>
              <p>
                Through Russo Technology Consulting, Stephen brings this experience directly to businesses, government agencies, nonprofits, campaigns, and professional organizations that need knowledgeable technology leadership and practical solutions. His approach emphasizes honesty, security, reliability, documentation, and long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading title="Our Core Principles" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {principles.map((principle, index) => (
              <div key={index} className="text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto bg-[var(--color-rtc-light)] rounded-full flex items-center justify-center mb-4">
                  <principle.icon className="w-8 h-8 text-[var(--color-rtc-blue)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-rtc-navy-dark)] mb-3">{principle.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
