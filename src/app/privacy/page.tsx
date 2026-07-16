import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl min-h-screen">
      <h1 className="text-4xl font-bold text-[var(--color-rtc-navy-dark)] mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg text-gray-700 max-w-none">
        <p>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        
        <h2 className="text-2xl font-bold text-[var(--color-rtc-navy)] mt-10 mb-4">Introduction</h2>
        <p>
          Russo Technology Consulting, LLC ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website ({siteConfig.url}).
        </p>
        
        <h2 className="text-2xl font-bold text-[var(--color-rtc-navy)] mt-10 mb-4">Information We Collect</h2>
        <p>
          When you use our Contact form, we collect the personal information you voluntarily provide, such as your name, email address, phone number, company name, and the contents of your message. 
        </p>

        <h2 className="text-2xl font-bold text-[var(--color-rtc-navy)] mt-10 mb-4">How We Use Your Information</h2>
        <p>
          We use the information you provide solely to:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Respond to your inquiries and consultation requests.</li>
          <li>Communicate with you regarding potential or ongoing technology services.</li>
          <li>Provide customer support.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[var(--color-rtc-navy)] mt-10 mb-4">Information Sharing</h2>
        <p>
          We do not sell, rent, or trade your personal information to third parties. 
          We may share your information with trusted third-party service providers (such as Formspree or Web3Forms) who assist us in operating our website and processing contact forms, so long as those parties agree to keep this information confidential.
        </p>
        
        <h2 className="text-2xl font-bold text-[var(--color-rtc-navy)] mt-10 mb-4">Data Security</h2>
        <p>
          We implement reasonable security measures to maintain the safety of your personal information. However, no data transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-bold text-[var(--color-rtc-navy)] mt-10 mb-4">Your Rights</h2>
        <p>
          You may request to review, update, or delete the personal information we hold about you by contacting us at {siteConfig.contact.email}.
        </p>

        <h2 className="text-2xl font-bold text-[var(--color-rtc-navy)] mt-10 mb-4">Contact Us</h2>
        <p>
          If you have questions regarding this Privacy Policy, please contact us via email at {siteConfig.contact.email} or by mail at {siteConfig.contact.address}.
        </p>
      </div>
    </div>
  );
}
