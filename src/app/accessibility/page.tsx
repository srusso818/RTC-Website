import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
};

export default function AccessibilityPage() {
  return (
    <div className="container mx-auto px-8 py-20 max-w-4xl min-h-screen relative z-10 bg-black/40 backdrop-blur-sm rounded-xl mt-12 mb-12 border-x border-white/5">
      <h1 className="text-4xl font-bold text-white mb-8">Accessibility Statement</h1>
      
      <div className="prose prose-lg text-gray-300 prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-white max-w-none">
        <p>
          Russo Technology Consulting, LLC is committed to making our website accessible to everyone, including individuals with disabilities. We strive to ensure our digital presence complies with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
        </p>
        
        <h2 className="text-2xl font-bold text-[var(--color-rtc-navy)] mt-10 mb-4">Our Commitment</h2>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Keyboard Navigation:</strong> We ensure our website can be navigated using a keyboard.</li>
          <li><strong>Screen Readers:</strong> We use semantic HTML and ARIA labels where appropriate to support screen reader users.</li>
          <li><strong>Contrast:</strong> We aim for sufficient color contrast across all text and interactive elements.</li>
          <li><strong>Reduced Motion:</strong> We respect system preferences for reduced motion by minimizing unnecessary animations.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[var(--color-rtc-navy)] mt-10 mb-4">Feedback</h2>
        <p>
          If you encounter any accessibility barriers on our website, please let us know so we can address the issue. You can reach out to us via the contact form on our website.
        </p>
      </div>
    </div>
  );
}
