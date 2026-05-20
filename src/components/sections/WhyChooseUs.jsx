import { ShieldCheck, Wrench, Smartphone, Truck } from "lucide-react";

const reasons = [
  {
    Icon: ShieldCheck,
    title: "Genuine Waaree Modules",
    desc: "Authorized support for ALMM-listed, IEC-compliant Waaree products with warranty-backed guidance.",
  },
  {
    Icon: Truck,
    title: "Local Availability & Supply",
    desc: "Stock-focused execution designed to reduce delays so your project stays on schedule.",
  },
  {
    Icon: Smartphone,
    title: "Financing & Documentation Help",
    desc: "Assistance with the paperwork and financing flow so you can take the next step faster.",
  },
  {
    Icon: Wrench,
    title: "Fast, End-to-End Coordination",
    desc: "A single team for site readiness, supply planning, and responsive customer support.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-wide uppercase text-brand-green">Why Choose Us</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">
            Stronger execution, clearer support
          </h2>
          <p className="mt-4 text-muted-foreground">
            The right modules are only the start. We focus on practical delivery, helpful documentation, and fast coordination.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="reveal rounded-2xl bg-card p-6 shadow-soft hover:shadow-card transition border border-border/50"
            >
              <div className="h-12 w-12 rounded-xl bg-brand-green/10 grid place-items-center">
                <Icon className="h-6 w-6 text-brand-green" />
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

