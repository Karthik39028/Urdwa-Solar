import { useMemo, useState } from "react";
import { Sun, IndianRupee, Leaf, Wrench, Home, Store, Building2, Zap } from "lucide-react";

const usageProfiles = [
  {
    id: "home",
    label: "Home Usage",
    Icon: Home,
    title: "Solar for homes",
    desc: "Power fans, lights, TV, fridge, and daytime appliances with cleaner, lower-cost electricity.",
    points: [
      "Best for reducing monthly household electricity bills.",
      "Useful for families with consistent daytime usage.",
      "Scales from compact rooftops to larger independent homes.",
    ],
  },
  {
    id: "shop",
    label: "Shops & Small Business",
    Icon: Store,
    title: "Solar for shops",
    desc: "Support lighting, billing systems, and cooling equipment while controlling daily power costs.",
    points: [
      "Improves cost predictability for small businesses.",
      "Great for stores with long daytime operating hours.",
      "Helps improve business margins over time.",
    ],
  },
  {
    id: "office",
    label: "Office & Commercial",
    Icon: Building2,
    title: "Solar for offices",
    desc: "Run office loads more efficiently and reduce reliance on expensive grid power during peak hours.",
    points: [
      "Supports heavier loads in commercial environments.",
      "Useful for long-term operational savings.",
      "Can be planned phase-wise based on budget and roof space.",
    ],
  },
];

export function SolarInfo() {
  const [activeProfileId, setActiveProfileId] = useState(usageProfiles[0].id);

  const activeProfile = useMemo(
    () => usageProfiles.find((profile) => profile.id === activeProfileId) ?? usageProfiles[0],
    [activeProfileId],
  );

  return (
    <section className="py-20 sm:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/*
          Full-section centering:
          - wrapper is centered
          - on lg, columns are centered as a group
        */}
        <div className="grid lg:grid-cols-2 gap-12 items-start lg:place-items-center">
          {/* Left / Content */}
          <div className="w-full lg:max-w-xl mr-auto">
            <div className="reveal space-y-6">
              <span className="inline-flex w-fit items-center text-sm font-semibold tracking-wide uppercase text-brand-green">
                Solar 101
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">
                How does solar energy work?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Solar panels capture sunlight and convert it directly into electricity using photovoltaic
                cells. That power runs your appliances during the day, and any extra energy can be sent back
                to the grid — earning you credits and lowering your bill.
              </p>

              <div className="rounded-2xl bg-card p-5 shadow-soft border border-border/50">
                <div className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-brand-green mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-brand-navy">How solar panels are used daily</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      During daytime, generated electricity can directly run your load like lighting, fans,
                      motors, computers, and cooling units. This lowers dependence on grid power and improves
                      long-term savings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-soft">
                <Sun className="h-8 w-8 text-brand-green shrink-0" />
                <p className="text-sm text-foreground/80">
                  A typical home in Andhra Pradesh can save{' '}
                  <span className="font-semibold text-brand-navy">₹1,500–₹4,000</span> per month on electricity
                  bills based on usage and roof conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Right / Cards */}
          <div className="w-full lg:max-w-xl reveal space-y-5">
            <div className="rounded-2xl bg-card p-5 shadow-soft border border-border/50">
              <h3 className="text-lg font-semibold text-brand-navy">Choose your usage type</h3>
              <p className="mt-1 text-sm text-muted-foreground">Click a category to see how solar panels are commonly used.</p>

              <div className="mt-4 grid sm:grid-cols-3 gap-3">
                {usageProfiles.map(({ id, label, Icon }) => {
                  const active = activeProfileId === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setActiveProfileId(id)}
                      className={`rounded-xl border p-3 text-left transition ${
                        active
                          ? "border-brand-green bg-brand-green/10"
                          : "border-border/60 bg-secondary/30 hover:bg-secondary/50"
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${active ? "text-brand-green" : "text-muted-foreground"}`} />
                      <div className="mt-2 text-sm font-semibold text-brand-navy">{label}</div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 rounded-xl border border-border/60 bg-secondary/30 p-4">
                <h4 className="font-semibold text-brand-navy">{activeProfile.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{activeProfile.desc}</p>
                <ul className="mt-3 space-y-2">
                  {activeProfile.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-foreground/90">
                      <span
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-green flex-none"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Eco-friendly / Solar 101 cards centered */}
            <div className="grid sm:grid-cols-2 gap-4 place-content-center place-items-center">
              {[
                { Icon: Leaf, t: "Eco-Friendly", d: "Zero emissions and cleaner local energy use." },
                { Icon: Wrench, t: "Low Maintenance", d: "Simple cleaning and periodic checks keep output stable." },
                { Icon: Sun, t: "Long Lifespan", d: "Panels are built for dependable long-term performance." },
                {
                  Icon: IndianRupee,
                  t: "Value Focus",
                  d: "Right sizing helps optimize cost, usage, and savings.",
                },
              ].map(({ Icon, t, d }) => (
                <div
                  key={t}
                  className="w-full max-w-[320px] rounded-2xl bg-card p-6 shadow-soft hover:shadow-card transition"
                >
                  <Icon className="h-6 w-6 text-brand-green" />
                  <h3 className="mt-3 font-semibold text-brand-navy">{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

