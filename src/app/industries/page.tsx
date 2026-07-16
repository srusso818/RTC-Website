import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CallToAction } from "@/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "Industries Served",
  description: "Russo Technology Consulting supports local government, small businesses, financial services, and nonprofits with enterprise-grade IT.",
};

const industries = [
  {
    title: "Local Government",
    description: "Municipalities and county agencies require infrastructure modernization, cybersecurity, and budget-conscious planning. RTC provides public accountability, mobile device management, backup and disaster recovery, vendor coordination, and long-term technology planning tailored for the public sector."
  },
  {
    title: "Small and Medium-Sized Businesses",
    description: "SMBs need reliable day-to-day technology without the overhead of a full internal IT department. We deliver ongoing support, cybersecurity, Microsoft 365 administration, networking, backup solutions, websites, and strategic technology planning to keep your business running smoothly."
  },
  {
    title: "Financial and Professional Services",
    description: "Drawing on the founder’s background in financial services and hedge fund IT operations, RTC builds secure, reliable environments where business continuity is paramount. We focus on identity management, secure infrastructure, data protection, and professional communications."
  },
  {
    title: "Nonprofits",
    description: "Nonprofits must maximize the value of every dollar. We provide cost-conscious technology guidance, Microsoft 365 implementation, security improvements, reliable systems, and vendor guidance to support your mission securely."
  },
  {
    title: "Political Campaigns",
    description: "Modern campaigns move fast and need professional digital infrastructure. RTC provides campaign websites, domain management, professional email, reliable hosting, and digital asset coordination to ensure a secure online presence."
  },
  {
    title: "Public Safety and Public Sector",
    description: "First responders and public sector organizations demand high reliability and strict security. We provide device management, robust infrastructure, operational support, documentation, and continuity planning to keep critical systems online."
  },
  {
    title: "Professional Service Firms",
    description: "Legal, accounting, engineering, and consulting firms handle sensitive client data and need secure communications. We provide generalized technology contexts that support security, secure remote access, and resilient infrastructure."
  }
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-[var(--color-rtc-navy)] text-white py-20 border-b-4 border-[var(--color-rtc-blue)] relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-gray-300">
            RTC applies enterprise-grade planning and security principles in ways that are practical and affordable across diverse sectors.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-[var(--color-rtc-light)]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-1 bg-[var(--color-rtc-green)] mb-6"></div>
                <h2 className="text-2xl font-bold text-[var(--color-rtc-navy-dark)] mb-4">{industry.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
