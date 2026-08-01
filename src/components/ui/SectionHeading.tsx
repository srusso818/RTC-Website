interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, label, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 flex ${centered ? 'justify-center' : 'justify-start'}`}>
      <div className={`bg-slate-950/60 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/5 inline-block ${centered ? 'text-center' : 'text-left'}`}>
        {label && (
          <div className="font-mono text-xs md:text-sm tracking-widest text-[var(--color-rtc-blue)] uppercase mb-3 opacity-90">
            {label}
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        {subtitle && (
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
        )}
        <div className={`h-1 w-32 mt-6 ${centered ? 'mx-auto bg-gradient-to-r from-transparent via-[var(--color-rtc-blue)] to-transparent' : 'bg-gradient-to-r from-[var(--color-rtc-blue)] to-transparent'}`}></div>
      </div>
    </div>
  );
}
