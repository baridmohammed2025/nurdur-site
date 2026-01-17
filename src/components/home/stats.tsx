import { Counter } from "@/components/ui/Counter";
import { useLanguage, translations } from "@/lib/i18n";

export function Stats() {
  const { language } = useLanguage();
  const t = translations[language].stats;

  const stats = [
    // Keep it numeric so we can animate it.
    { label: t.capital, to: 1, suffix: "B+" },
    { label: t.projectsCompleted, to: 25, suffix: "+" },
    { label: t.machineryFleet, to: 50, suffix: "+" },
    { label: t.expertEngineers, to: 100, suffix: "+" },
  ];

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-white/20">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2 flex justify-center items-baseline gap-1">
                <Counter to={stat.to} durationMs={1200} />
                <span className="text-2xl text-white/70">{stat.suffix}</span>
              </div>
              <p className="text-sm md:text-base font-medium text-white/80 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
