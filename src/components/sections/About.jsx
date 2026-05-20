import { Leaf, IndianRupee, Wrench } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-start">
        <div className="reveal md:col-start-1 flex flex-col">
          <p className="text-sm font-semibold tracking-wide uppercase text-brand-green">Urdwa Solar Company</p>
          <h3 className="mt-3 text-2xl font-bold text-brand-navy">Rooftop solar made for real homes</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Urdwa Solar is committed to bringing clean, reliable solar power to every household in and around Kakinada.
            We guide you from the first site visit to system design, installation, and after-sales support—so you can go solar with confidence.
          </p>
        </div>
        <div className="reveal flex flex-col">
          <span className="text-sm font-semibold tracking-wide uppercase text-brand-green">About Us</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">Clean energy, made simple for every home</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Urdwa Solar is a fast-growing solar company focused on rooftop solar in and around Kakinada.
            We help homeowners and small businesses move to clean energy with clear guidance, transparent execution, and reliable support.
            Whether you want to reduce your electricity bills or become energy-independent, we make the process simple from start to finish.
          </p>

          <div className="mt-6 grid gap-4">
            <div className="rounded-xl bg-card p-5 shadow-soft border border-border/50">
              <div className="text-sm font-semibold tracking-wide uppercase text-brand-green">What we sell</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Waaree solar rooftop panels (modules)</li>
                <li>• Solar panel configurations for homes</li>
                <li>• Panel sizing guidance based on your roof & usage</li>
                <li>• Warranty-backed support for Waaree modules</li>
              </ul>
            </div>
            <div className="rounded-xl bg-card p-5 shadow-soft border border-border/50">
              <div className="text-sm font-semibold tracking-wide uppercase text-brand-green">Our focus</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Urdwa Solar focuses only on solar panels from Waaree. We help you choose the right module capacity and ensure
                you get accurate guidance so you can install with confidence.
              </p>
            </div>
          </div>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              { Icon: IndianRupee, t: "Affordable", d: "Best-in-class pricing" },
              { Icon: Leaf, t: "Clean Energy", d: "Eco-friendly power" },
              { Icon: Wrench, t: "Reliable", d: "Built to last 25+ years" },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="rounded-xl bg-card p-4 shadow-soft">
                <Icon className="h-5 w-5 text-brand-green" />
                <div className="mt-2 font-semibold text-brand-navy">{t}</div>
                <div className="text-xs text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
