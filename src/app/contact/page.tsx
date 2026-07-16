import { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Request a consultation with Russo Technology Consulting for your IT, cybersecurity, or infrastructure needs.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-[var(--color-rtc-navy)] text-white py-20 border-b-4 border-[var(--color-rtc-blue)]">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Let's discuss how we can support your technology goals.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <SectionHeading title="Get in Touch" />
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you are planning an infrastructure upgrade, improving cybersecurity, or need ongoing guidance, we are here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-rtc-light)] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--color-rtc-blue)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-rtc-navy-dark)]">Location</h4>
                    <p className="text-gray-600">{siteConfig.contact.address}</p>
                    <p className="text-gray-500 text-sm mt-1">{siteConfig.contact.serviceArea}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-rtc-light)] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[var(--color-rtc-blue)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-rtc-navy-dark)]">Phone</h4>
                    <p className="text-gray-600">{siteConfig.contact.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-rtc-light)] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[var(--color-rtc-blue)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-rtc-navy-dark)]">Email</h4>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-[var(--color-rtc-blue)] hover:underline">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-rtc-light)] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[var(--color-rtc-blue)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-rtc-navy-dark)]">Business Hours</h4>
                    <p className="text-gray-600">{siteConfig.contact.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> We do not offer emergency response services to organizations without a prior consulting relationship.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-[var(--color-rtc-navy-dark)] mb-6">Request a Consultation</h2>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
