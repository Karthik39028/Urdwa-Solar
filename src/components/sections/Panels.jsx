import solarPanel from "@/assets/solar-panel.png";
import { Zap } from "lucide-react";

const panels = [
  { 
    img: solarPanel, 
    name: "Waaree ELITE Bifacial N‑type TOPCon", 
    power: "560–600 W", 
    desc: "High‑efficiency utility and commercial panels. N‑type TOPCon, 144 half‑cut cells (bifacial). Efficiency: ~23%. Bifacial rear: 15–30% extra power. Dimensions: 2278 × 1134 × 30 mm (32 kg). Glass‑glass module, aluminium frame. IP68 junction box. Max 1500 V. Temp coeff: −0.30%/°C.", 
    tags: ["23% efficiency", "Bifacial 15-30%", "Warranty-backed support"]
  },

  { 
    img: solarPanel, 
    name: "Waaree ELITE SERIES BiN-17 N-type", 
    power: "615–645 W", 
    desc: "Framed dual-glass bifacial TOPCon. 23.07% eff. Vmp 47.3–48.2V, Voc 56.5–57.5V. Bifaciality 80%±10%, gain ~30%. Size: 2465×1134×35 mm (34.5 kg), 156 cells. 1500V, IP68. NOCT 43°C. Temp coeffs: Pm -0.30%/°C. 5400Pa snow. IEC/UL certs.",
    tags: ["23.07% eff", "Bifacial 30%", "Warranty-backed support"]
  },
  { 
    img: solarPanel, 
    name: "Waaree ELITE BiN-08 N-type TOPCon", 
    power: "560–590 W", 
    desc: "N-type TOPCon bifacial dual-glass. 144 half-cut cells, ~22-23% eff. Bifacial gain 15-30% (80±5%). Size ~2278x1134x33 mm (32.5 kg). 1500V, IP68, MC4. −0.31%/°C. 5400Pa snow/2400Pa wind. IEC/UL certs.",

    tags: ["22-23% eff", "Bifacial", "Warranty-backed support" ]
  }
];

export function Panels() {
  return (
    <section id="panels" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center reveal max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-wide uppercase text-brand-green">Our Products</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">Solar panels we sell</h2>
          <p className="mt-3 text-muted-foreground">
            Tier-1 modules from Waaree Energies — cleaner specs, easier comparison.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {panels.map((p) => (
            <div
              key={p.name}
              className="reveal group rounded-2xl bg-card overflow-hidden border border-border/50 shadow-soft hover:shadow-card hover:-translate-y-1 transition"
            >
              <div className="p-6 pb-4">
                <div className="flex items-center gap-2 text-brand-green text-sm font-semibold">
                  <Zap className="h-4 w-4" /> {p.power}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-brand-navy">{p.name}</h3>
              </div>

              <div className="px-6">
                <div className="aspect-[4/3] bg-secondary/40 rounded-xl grid place-items-center p-6 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>

              <div className="p-6 pt-4">
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{p.desc}</p>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {p.tags.slice(0, 3).map((t) => (
                    <div
                      key={t}
                      className="text-[11px] rounded-lg bg-brand-green/10 text-brand-green px-2 py-2 font-medium text-center leading-tight"
                      title={t}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

