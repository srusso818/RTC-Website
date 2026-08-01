export const siteConfig = {
  name: "Russo Technology Consulting, LLC",
  shortName: "RTC",
  description: "25+ Years of IT Experience Serving Business and Government in Northwest Arkansas and nationwide.",
  url: "https://russotc.com",
  contact: {
    name: "Stephen Russo",
    title: "Owner & Senior Technology Consultant",
    phone: "(479) 957-0455",
    email: "stephen@russotc.com",
    address: "Prairie Grove, Arkansas",
    serviceArea: "Serving Northwest Arkansas and nationwide",
    hours: "Monday - Friday, 8:00 AM - 5:00 PM", // Placeholder, adjust as needed
  },
  form: {
    // Document how to set up the form, e.g., Formspree or Web3Forms
    endpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "https://api.web3forms.com/submit",
    web3formsKey: "431bc8cc-1e07-4195-9cb8-1d41508a8121",
  },
  social: {
    // Add placeholders for future use
    linkedin: "",
    twitter: "",
  },
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Industries", href: "/industries" },
    { title: "About", href: "/about" },
    { title: "Experience", href: "/experience" },
    { title: "Contact", href: "/contact" },
  ],
  footerLinks: {
    legal: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Use", href: "/terms" },
      { title: "Accessibility", href: "/accessibility" },
    ],
  },
};
