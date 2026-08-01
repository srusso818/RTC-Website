import { Metadata } from "next";
import { CallToAction } from "@/components/ui/CallToAction";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Representative Experience",
  description: "A summary of professional expertise across financial services, government infrastructure, enterprise engineering, and technology leadership.",
};

export default function ExperiencePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-green-950/70 backdrop-blur-md text-white py-20 border-b border-green-500/20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Representative Experience</h1>
          <p className="text-xl text-gray-300">
            More than 25 years of cross-industry technology expertise.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-green-950/70 backdrop-blur-md border-b border-green-500/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-sm text-gray-400 italic text-center">
            Note: This section describes areas of professional experience and expertise. These examples represent capabilities and should not be interpreted as named client endorsements.
          </p>
        </div>
      </section>

      {/* Experience Categories */}
      <section className="py-20 bg-green-950/70 backdrop-blur-md border-b border-green-500/20">
        <div className="container mx-auto px-4 max-w-4xl space-y-24">
          
          <div>
            <SectionHeading title="Financial Services and Hedge Fund Technology" />
            <div className="bg-transparent border-l-4 border-[var(--color-rtc-blue)] pl-6 py-2">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Experience supporting demanding financial technology environments where uptime, security, risk management, data access, and operational continuity matter.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 list-disc list-inside text-gray-400">
                <li>Technology support for financial operations</li>
                <li>Secure enterprise environments</li>
                <li>High-availability systems</li>
                <li>Business continuity</li>
                <li>Risk-sensitive infrastructure</li>
                <li>Data protection</li>
                <li>Systems administration</li>
                <li>Operational reliability</li>
              </ul>
            </div>
          </div>

          <div>
            <SectionHeading title="Government Technology" />
            <div className="bg-transparent border-l-4 border-[var(--color-rtc-green)] pl-6 py-2">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Experience managing and modernizing public-sector technology, emphasizing accountability, security, and public trust.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 list-disc list-inside text-gray-400">
                <li>County government infrastructure</li>
                <li>Enterprise email systems</li>
                <li>Identity and access management</li>
                <li>Cybersecurity initiatives</li>
                <li>Mobile device management</li>
                <li>Infrastructure modernization</li>
                <li>Backup and disaster recovery</li>
                <li>Public-sector technology planning</li>
              </ul>
            </div>
          </div>

          <div>
            <SectionHeading title="Enterprise Infrastructure" />
            <div className="bg-transparent border-l-4 border-[var(--color-rtc-navy-dark)] pl-6 py-2">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Hands-on experience with complex infrastructure and multi-system environments at scale.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 list-disc list-inside text-gray-400">
                <li>Microsoft Active Directory & Group Policy</li>
                <li>Microsoft Exchange & Microsoft 365</li>
                <li>VMware virtualization</li>
                <li>Enterprise storage systems</li>
                <li>Backup platforms</li>
                <li>Network infrastructure</li>
                <li>Server administration</li>
                <li>Monitoring and systems management</li>
              </ul>
            </div>
          </div>

          <div>
            <SectionHeading title="Business Technology & Leadership" />
            <div className="bg-transparent border-l-4 border-gray-400 pl-6 py-2">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Experience planning projects, evaluating products, coordinating vendors, documenting systems, building budgets, and translating technical issues for organizational leadership.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 list-disc list-inside text-gray-400">
                <li>Website development & hosting</li>
                <li>Domain and DNS management</li>
                <li>Cloud services integration</li>
                <li>Technology consulting & planning</li>
                <li>Security improvements</li>
                <li>Business continuity planning</li>
                <li>Vendor coordination</li>
                <li>Large-scale project management</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <CallToAction />
    </div>
  );
}
