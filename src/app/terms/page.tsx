import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsOfUsePage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl min-h-screen">
      <h1 className="text-4xl font-bold text-[var(--color-rtc-navy-dark)] mb-8">Terms of Use</h1>
      
      <div className="prose prose-lg text-gray-700 max-w-none">
        <p>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        
        <h2 className="text-2xl font-bold text-[var(--color-rtc-navy)] mt-10 mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the website ({siteConfig.url}) operated by Russo Technology Consulting, LLC, you agree to comply with and be bound by these Terms of Use.
        </p>

        <h2 className="text-2xl font-bold text-[var(--color-rtc-navy)] mt-10 mb-4">2. Informational Purposes Only</h2>
        <p>
          The content on this website is provided for general informational purposes only. It does not constitute professional IT, cybersecurity, or legal advice, nor does your use of this website establish a consultant-client relationship.
        </p>

        <h2 className="text-2xl font-bold text-[var(--color-rtc-navy)] mt-10 mb-4">3. Intellectual Property</h2>
        <p>
          All content, design, graphics, and other materials on this website are the intellectual property of Russo Technology Consulting, LLC unless otherwise noted. You may not reproduce, distribute, or create derivative works without our express written permission.
        </p>

        <h2 className="text-2xl font-bold text-[var(--color-rtc-navy)] mt-10 mb-4">4. Limitation of Liability</h2>
        <p>
          Russo Technology Consulting, LLC shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website or the information contained herein.
        </p>

        <h2 className="text-2xl font-bold text-[var(--color-rtc-navy)] mt-10 mb-4">5. Governing Law</h2>
        <p>
          These Terms of Use are governed by the laws of the State of Arkansas. Any legal action related to these terms shall be brought in the state or federal courts located in or near Prairie Grove, Arkansas.
        </p>
      </div>
    </div>
  );
}
