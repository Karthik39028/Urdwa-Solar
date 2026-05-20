import { Bolt, DollarSign, Leaf, Home, ShieldCheck, TrendingUp } from "lucide-react";

export function Benefits() {
  const items = [
    {
      icon: <DollarSign className="h-6 w-6 text-white" />,
      title: "Lower Electricity Bills",
      desc: "Cut your monthly energy costs with clean, affordable solar power.",
    },
    {
      icon: <Leaf className="h-6 w-6 text-white" />,
      title: "Environmental Impact",
      desc: "Reduce your carbon footprint by switching to renewable energy.",
    },
    {
      icon: <Home className="h-6 w-6 text-white" />,
      title: "Increase Property Value",
      desc: "Solar installations can boost resale value and curb appeal.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
      title: "Reliable & Low Maintenance",
      desc: "Durable systems backed by warranties and minimal upkeep.",
    },
    {
      icon: <Bolt className="h-6 w-6 text-white" />,
      title: "Energy Independence",
      desc: "Generate your own power and protect against rising tariffs.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      title: "Government Incentives",
      desc: "Avail subsidies and incentives that lower upfront costs.",
    },
  ];

  return (
    <section id="benefits" className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy">Benefits of Solar Energy</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Solar power delivers lasting value for homes and businesses — cost savings, resilience, and cleaner air.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl p-6 bg-white/5 border border-white/10 shadow-soft">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-brand-green/90">
                {it.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-navy">{it.title}</h3>
              <p className="mt-2 text-sm text-foreground/80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
