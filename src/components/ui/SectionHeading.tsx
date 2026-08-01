interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
      )}
      <div className={`h-1 w-20 bg-[var(--color-rtc-green)] mt-6 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
}
