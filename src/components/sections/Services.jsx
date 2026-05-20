import { Home, Building2, Wrench } from "lucide-react";

const services = [
  { Icon: Home, title: "Residential Solar Supply", desc: "Custom rooftop solar module recommendations and supply support for homes." },
  { Icon: Building2, title: "Commercial Solar Solutions", desc: "Reduce operating costs for offices, factories and shops with high-capacity solar systems." },
  { Icon: Wrench, title: "Maintenance & Support", desc: "Periodic cleaning, performance checks and quick service to keep your panels at peak output." },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center reveal max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-wide uppercase text-brand-green">Our Services</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">Complete solar solutions, one trusted team</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {services.map(({ Icon, title, desc }) => (
            <div key={title} className="reveal group rounded-2xl bg-card p-7 shadow-soft hover:shadow-card hover:-translate-y-1 transition border border-border/50">
              <div className="h-12 w-12 rounded-xl bg-brand-green/10 grid place-items-center group-hover:bg-brand-green transition">
                <Icon className="h-6 w-6 text-brand-green group-hover:text-white transition" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-brand-navy">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
