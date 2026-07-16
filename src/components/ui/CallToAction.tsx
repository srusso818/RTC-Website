import { Button } from "./Button";

export function CallToAction() {
  return (
    <section className="bg-[var(--color-rtc-navy)] py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let’s Discuss Your Technology Goals</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed text-balance">
          Whether you are planning an infrastructure upgrade, improving cybersecurity, modernizing outdated systems, launching a website, or simply need experienced guidance, RTC can help you develop a practical path forward.
        </p>
        <Button href="/contact" size="lg" className="bg-[var(--color-rtc-green)] text-[var(--color-rtc-navy-dark)] hover:bg-[#65a322] font-bold tracking-wide">
          Request a Consultation
        </Button>
      </div>
    </section>
  );
}
