import { Zap } from "lucide-react";

const dcdbVariants = [
  {
    title: "Finder + Mersen",
    subtitle: "SPD Finder & Fuse Mersen",
    summary:
      "Finder DC SPDs and Mersen DC fuses in IP66 ABS enclosures, tailored for solar DC string protection from 1–20 kW.",
    features: [
      "Finder 600/1000 V DC SPD",
      "Mersen DC fuses + holders",
      "IP66 ABS enclosures",
      "4 sqmm WAACAB DC cable",
      "Jigo PG13.5 & PG7 glands",
    ],
    rows: [
      {
        code: "WCDCFIE001",
        capacity: "1–3 kW, 1 in–1 out",
        protection: "1 SPD + 1 fuse",
        components:
          "Finder 600 V DC SPD; Mersen DC fuse + holder; IP66 ABS 180×130×100 mm PC-cover enclosure; 4 sqmm WAACAB DC cable; Jigo PG13.5 & PG7 glands; Connectwell connectors and end clamps.",
      },
      {
        code: "WCDCHJE001",
        capacity: "5 kW, 1 in–1 out",
        protection: "1 SPD + 1 fuse",
        components:
          "Finder 1000 V DC SPD; Mersen DC fuse + holder; ABS 180×130×100 mm enclosure; 4 sqmm WAACAB; Jigo glands; Connectwell terminals.",
      },
      {
        code: "WCDCJKE001",
        capacity: "4–7 kW, 2 in–2 out",
        protection: "2 SPD + 2 fuse",
        components:
          "2× Finder 600 V SPD; 2× Mersen fuse + holder; ABS 180×180×100 mm enclosure; 2 m 4 sqmm WAACAB; PG13.5 & PG7 glands; 7 connectors, end clamps.",
      },
      {
        code: "WCDCMLE001",
        capacity: "7–12 kW, 2 in–2 out",
        protection: "2 SPD + 2 fuse",
        components:
          "2× Finder 1000 V SPD; 2× 15 A 1000 V fuses + holders; ABS 280×190×100 mm enclosure; 2 m 4 sqmm cable; PG13.5 & PG7 glands; 7 connectors.",
      },
      {
        code: "WCDCOME001",
        capacity: "12–15 kW, 3 in–3 out",
        protection: "2 SPD + 3 fuse",
        components:
          "2× Finder 1000 V SPD; 3× 25 A 1000 V fuses + holders; ABS 280×190×130 mm enclosure; 2 m 4 sqmm cable; PG13.5 & PG7 glands; 10 connectors.",
      },
      {
        code: "WCDCPNE001",
        capacity: "16–20 kW, 4 in–4 out",
        protection: "2 SPD + 4 fuse",
        components:
          "2× Finder 1000 V SPD; 4× 20 A 1000 V fuses + holders; ABS 280×280×130 mm enclosure; 2 m 4 sqmm cable; PG13.5 & PG7 glands; 16 connectors + MS mounting plate.",
      },
    ],
  },
  {
    title: "Finder + Schneider",
    subtitle: "SPD Finder & MCB Schneider",
    summary:
      "Finder DC SPDs with Schneider DC MCBs, designed for compact DCDBs with clean string isolation and surge protection.",
    features: [
      "Finder 600/1000 V DC SPD",
      "Schneider DC MCBs",
      "IP66 ABS enclosures",
      "4 sqmm WAACAB DC cable",
      "Jigo / PG glands",
    ],
    rows: [
      {
        code: "WCDCGOE001",
        capacity: "1–3 kW, 1 in–1 out",
        protection: "1 SPD + 1 MCB",
        components:
          "Finder 600 V DC SPD; Schneider 16 A 500 V DC MCB; ABS 180×130×100 mm enclosure; 4 sqmm WAACAB; PG13.5 & PG7 glands; Connectwell connectors.",
      },
      {
        code: "WCDCIRE001",
        capacity: "up to 5 kW, 1 in–1 out",
        protection: "1 SPD + 1 MCB",
        components:
          "Finder 1000 V SPD; Schneider 16 A 500 V DC MCB; ABS 180×130×100 mm enclosure; 4 sqmm cable; Jigo glands; Connectwell terminals.",
      },
      {
        code: "WCDCKPE001",
        capacity: "4–7 kW, 2 in–2 out",
        protection: "2 SPD + 2 MCB",
        components:
          "2× Finder 1000 V SPD; 2× 16 A 800 V DC MCB; ABS 220×190×130 mm enclosure; 4 sqmm cable; PG13.5 & PG7 glands; 5 connectors.",
      },
      {
        code: "WCDCNQE001",
        capacity: "8–12 kW, 2 in–2 out",
        protection: "2 SPD + 2 MCB",
        components:
          "2× Finder 1000 V SPD; 2× DC MCB; ABS 280×190×130 mm enclosure; 4 sqmm cable; PG13.5 & PG7 glands; 5 connectors.",
      },
    ],
  },
  {
    title: "Elmex + Elmex Fuse",
    subtitle: "SPD Elmex & Fuse Elmex",
    summary:
      "Elmex Type-2 SPDs and Elmex fuses in DCDBs for reliable solar string protection with standard terminals and glands.",
    features: [
      "Elmex 600/1000 V Type-2 SPD",
      "Elmex fuses + holders",
      "IP66 ABS enclosures",
      "4 sqmm WAACAB DC cable",
      "PG13.5 & PG9 glands",
    ],
    rows: [
      {
        code: "WCDCOIE001",
        capacity: "1–3 kW, 1 in–1 out",
        protection: "1 SPD + 1 fuse",
        components:
          "Elmex 600 V Type-2 SPD; Elmex 20 A 1000 V fuse + 32 A holder; ABS 180×130×100 mm enclosure; 4 sqmm WAACAB; PG13.5 & PG9 glands; Elmex KUT-6 terminals; Connectwell end clamps.",
      },
      {
        code: "WCDCOJE001",
        capacity: "5 kW, 1 in–1 out",
        protection: "1 SPD + 1 fuse",
        components:
          "Elmex 1000 V Type-2 SPD; Elmex 20 A fuse + holder; ABS 180×130×100 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; KUT-6 terminals.",
      },
      {
        code: "WCDCOKE001",
        capacity: "4–7 kW, 2 in–2 out",
        protection: "2 SPD + 2 fuse",
        components:
          "2× Elmex 600 V Type-2 SPD; 2× 16 A 1000 V fuse + holder; ABS 220×190×130 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; 7 terminals.",
      },
      {
        code: "WCDCOLE001",
        capacity: "7–12 kW, 2 in–2 out",
        protection: "2 SPD + 2 fuse",
        components:
          "2× Elmex 1000 V Type-2 SPD; 2× 30 A 1000 V fuse + holder; ABS 280×190×130 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; 7 terminals.",
      },
      {
        code: "WCDCOME001",
        capacity: "12–15 kW, 3 in–3 out",
        protection: "2 SPD + 3 fuse",
        components:
          "2× Elmex 1000 V Type-2 SPD; 3× 30 A fuse + holder; ABS 180×190×130 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; 16 terminals; 24 end clamps.",
      },
      {
        code: "WCDCONE001",
        capacity: "16–20 kW, 4 in–4 out",
        protection: "2 SPD + 4 fuse",
        components:
          "2× Elmex 1000 V Type-2 SPD; 4× 30 A fuse + holder; ABS 280×280×130 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; 26 terminals; 27 end clamps.",
      },
    ],
  },
  {
    title: "Elmex + Elmex MCB",
    subtitle: "SPD Elmex & MCB Elmex",
    summary:
      "Elmex Type-2 SPDs paired with Elmex DC MCBs for flexible solar DCDB protection and fast disconnection.",
    features: [
      "Elmex 600/1000 V Type-2 SPD",
      "Elmex DC MCBs",
      "IP66 ABS enclosures",
      "4 sqmm WAACAB DC cable",
      "PG13.5 & PG9 glands",
    ],
    rows: [
      {
        code: "WCDCOOE001",
        capacity: "1–3 kW, 1 in–1 out",
        protection: "1 SPD + 1 MCB",
        components:
          "Elmex 600 V Type-2 SPD; Elmex 16 A 500 V DC MCB; ABS 180×130×100 mm enclosure; 4 sqmm WAACAB; PG13.5 & PG9 glands; KUT-6 terminals.",
      },
      {
        code: "WCDCORE001",
        capacity: "5 kW, 1 in–1 out",
        protection: "1 SPD + 1 MCB",
        components:
          "Elmex 1000 V Type-2 SPD; Elmex 16 A 500 V DC MCB; ABS 180×130×100 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; KUT-6 terminals.",
      },
      {
        code: "WCDCOKE001",
        capacity: "4–7 kW, 2 in–2 out",
        protection: "2 SPD + 2 MCB",
        components:
          "2× Elmex 600 V Type-2 SPD; 2× 16 A 500 V MCB; ABS 220×190×100 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; 5 terminals.",
      },
      {
        code: "WCDCOQE001",
        capacity: "7–12 kW, 2 in–2 out",
        protection: "2 SPD + 2 MCB",
        components:
          "2× Elmex 1000 V Type-2 SPD; 2× 16 A 1000 V MCB; ABS 280×280×130 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; 7 terminals.",
      },
      {
        code: "WCDCOME001",
        capacity: "12–15 kW, 3 in–3 out",
        protection: "2 SPD + 3 MCB",
        components:
          "2× Elmex 1000 V Type-2 SPD; 3× 20 A 800 V MCB; ABS 380×280×130 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; 19 terminals.",
      },
      {
        code: "WCDCONE001",
        capacity: "16–20 kW, 4 in–4 out",
        protection: "2 SPD + 4 MCB",
        components:
          "2× Elmex 1000 V Type-2 SPD; 4× 20 A 800 V MCB; ABS 380×280×130 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; 24 terminals.",
      },
    ],
  },
];

export function DCDB() {
  return (
    <section id="dcdb" className="py-20 sm:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center reveal max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold tracking-wide uppercase text-brand-green">
            DCDB Overview
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">
            DC Distribution Box for solar PV protection and string combining
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
            A DC Distribution Box (DCDB) provides protection and combining on the DC side of a solar PV system,
            between PV modules and the inverter. WAACAB DCDBs are available from 1–20 kW with 1–4 input strings
            and matching outputs, using combinations of branded SPDs (Finder/Elmex), DC fuses (Mersen/Elmex)
            or DC MCBs (Schneider/Elmex), in IP66 ABS enclosures with WAACAB DC cable and Connectwell/Elmex terminals.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {dcdbVariants.map((variant) => (
            <article
              key={variant.title}
              className="reveal rounded-3xl border border-border/60 bg-card p-6 shadow-soft"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-brand-green font-semibold">
                    {variant.subtitle}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-brand-navy">{variant.title}</h3>
                </div>
                <div className="rounded-2xl bg-brand-green/10 p-3 text-brand-green">
                  <Zap className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">{variant.summary}</p>

              <div className="mt-5 space-y-3">
                {variant.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand-green" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 overflow-x-auto rounded-3xl border border-border/50 bg-secondary/30 p-4 text-sm">
                <table className="min-w-full border-collapse text-sm">
                  <thead className="bg-secondary/60 text-left text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3">Code</th>
                      <th className="px-4 py-3">Capacity / I‑O</th>
                      <th className="px-4 py-3">Protection type</th>
                      <th className="px-4 py-3">Key components & enclosure</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    {variant.rows.map((row) => (
                      <tr key={row.code} className="align-top">
                        <td className="px-4 py-3 align-top font-semibold text-brand-navy">{row.code}</td>
                        <td className="px-4 py-3 align-top text-muted-foreground">{row.capacity}</td>
                        <td className="px-4 py-3 align-top text-muted-foreground">{row.protection}</td>
                        <td className="px-4 py-3 align-top text-muted-foreground">{row.components}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
