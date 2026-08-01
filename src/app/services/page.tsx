import { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CallToAction } from "@/components/ui/CallToAction";
import { 
  Briefcase, MonitorSmartphone, ShieldCheck, Mail, Server, 
  Network, DatabaseBackup, Smartphone, Globe, CheckSquare 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive IT consulting, cybersecurity, and infrastructure services for business and government.",
};

const services = [
  {
    id: "consulting",
    title: "IT Consulting and Technology Strategy",
    icon: Briefcase,
    description: "RTC helps clients make informed technology decisions before money is spent.",
    features: [
      "Technology assessments", "Technology roadmaps", "Infrastructure planning", 
      "Budget planning", "Vendor evaluation", "Product selection", 
      "Project planning", "Risk identification", "Lifecycle planning", "Modernization strategy"
    ]
  },
  {
    id: "managed-it",
    title: "Managed IT Services",
    icon: MonitorSmartphone,
    description: "Reliable day-to-day operations and proactive system management.",
    features: [
      "Proactive maintenance", "System monitoring", "Troubleshooting", 
      "User support", "Patch and update planning", "Vendor coordination", 
      "Infrastructure oversight", "Documentation", "Ongoing technical guidance"
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Services",
    icon: ShieldCheck,
    description: "Practical security improvements that protect data and reduce operational risk.",
    features: [
      "Cybersecurity assessments", "Endpoint security", "Identity and access management", 
      "Multifactor authentication", "Email security", "Firewall and network security", 
      "Security policy guidance", "Risk reduction planning", "Backup security", 
      "Security awareness recommendations", "Incident readiness"
    ]
  },
  {
    id: "microsoft-365",
    title: "Microsoft 365 and Email Services",
    icon: Mail,
    description: "Secure, reliable email and collaboration environments.",
    features: [
      "Microsoft 365 tenant setup", "Email migration", "Domain configuration", 
      "User and license administration", "Exchange and email consulting", "Email security", 
      "SPF, DKIM, and DMARC", "Identity management", "Multifactor authentication", 
      "Cloud file collaboration", "Microsoft 365 troubleshooting"
    ]
  },
  {
    id: "servers",
    title: "Server and Infrastructure Services",
    icon: Server,
    description: "Enterprise-grade server and virtualization management.",
    features: [
      "Windows Server", "Active Directory", "Group Policy", 
      "VMware", "Virtualization", "Server upgrades", 
      "Storage systems", "Infrastructure assessments", "Capacity planning", 
      "System monitoring", "Infrastructure documentation"
    ]
  },
  {
    id: "network",
    title: "Network Services",
    icon: Network,
    description: "Secure and resilient connectivity for your organization.",
    features: [
      "Business network design", "Switching", "Routing", 
      "Wireless", "Firewalls", "VPN and remote access", 
      "Network segmentation", "Connectivity troubleshooting", "Network modernization", 
      "Multi-site connectivity", "Network documentation"
    ]
  },
  {
    id: "backup",
    title: "Backup and Disaster Recovery",
    icon: DatabaseBackup,
    description: "Comprehensive data protection and business continuity planning.",
    features: [
      "Backup planning", "On-site backup", "Off-site backup", 
      "Recovery planning", "Backup repository design", "Storage planning", 
      "Disaster recovery documentation", "Recovery testing", "Business continuity", "Ransomware resilience"
    ]
  },
  {
    id: "mdm",
    title: "Mobile Device Management",
    icon: Smartphone,
    description: "Secure control over organizational mobile devices and tablets.",
    features: [
      "Apple Business Manager", "iPhone and iPad management", "Device supervision", 
      "Enrollment planning", "Application deployment", "Device restrictions", 
      "Mobile security", "Certificate-based authentication", "Corporate device configuration", 
      "Existing device migration planning", "Government and business deployments"
    ]
  },
  {
    id: "websites",
    title: "Website and Digital Services",
    icon: Globe,
    description: "Professional online presence and domain management.",
    features: [
      "Business website design", "Political campaign websites", "Static website development", 
      "GitHub Pages hosting", "Domain registration guidance", "DNS configuration", 
      "Microsoft 365 email setup", "Contact forms", "Search engine optimization", 
      "Website maintenance", "Digital signage solutions", "Basic online presence consulting"
    ]
  },
  {
    id: "projects",
    title: "Technology Project Management",
    icon: CheckSquare,
    description: "Experienced coordination for complex technology initiatives.",
    features: [
      "Project planning", "Scope development", "Budget estimates", 
      "Vendor coordination", "Implementation planning", "Migration planning", 
      "Documentation", "Testing", "Deployment oversight", "Stakeholder communication"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-black/20 text-white py-20 border-b border-white/5">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="bg-slate-950/60 backdrop-blur-md inline-block p-8 md:p-12 rounded-2xl border border-white/5">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Professional IT consulting, infrastructure engineering, and technical support designed for organizations that need enterprise-level guidance without enterprise overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-black/20 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className="flex flex-col md:flex-row gap-8 items-start bg-slate-950/60 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/5 shadow-lg shadow-black/20">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center shadow-lg border border-white/10">
                      <service.icon className="w-8 h-8 text-[var(--color-rtc-blue)]" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-300 mb-8 border-l-4 border-[var(--color-rtc-blue)] pl-4 italic">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckSquare className="w-5 h-5 text-[var(--color-rtc-blue)] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {index !== services.length - 1 && (
                  <div className="h-px bg-white/5 mt-24"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
