import { PlugZap, Zap } from "lucide-react";
import { useMemo } from "react";

import solarPanel from "@/assets/solar-panel.png";

import WCACEEE001 from "@/assets/WCACEEE001.png";
import WCDCSHE001 from "@/assets/WCDCSHE001.png";
import WCACAAE001 from "@/assets/WCACAAE001.png";
import WCACSFE001 from "@/assets/WCACSFE001.png";
import WCACBCE001 from "@/assets/WCACBCE001.png";
import WCACCBE001 from "@/assets/WCACCBE001.png";
import WCACDDE001 from "@/assets/WCACDDE001.png";

import WCACOAE001 from "@/assets/WCACOAE001.png";
import WCACOAE001_indicator from "@/assets/WCACOAE001_indicator.png";
import WCACODE001 from "@/assets/WCACODE001.png";
import WCACOBE001 from "@/assets/WCACOBE001.png";
import WCACOEE001 from "@/assets/WCACOEE001.png";
import WCACOFE001 from "@/assets/WCACOFE001.png";
import WCACOGE001 from "@/assets/WCACOGE001.png";
import WCACOHE001 from "@/assets/WCACOHE001.png";

import fuseLq1 from "@/assets/fuse_connector_lq1.png";
import fuseLq1d from "@/assets/fuse_connector_lq1d.png";

import branchLq1 from "@/assets/Branch_connector_LQ1.png";
import branchLq1t from "@/assets/Branch_connector_LQ1t.png";
import branchLq1t3 from "@/assets/Branch_connector_LQ1t3.png";
import branchLq1t4 from "@/assets/Branch_Connector_LQ1t4.png";
import branchLq1t5 from "@/assets/Branch_Connector_LQ1t5.png";
import branchLq1y from "@/assets/Branch_connector_lq1y.png";
import branchLq1x from "@/assets/Branch_connector_LQ-1x.png";
import bracnLq1y3 from "@/assets/Bracn_connector_LQ-1y3.png";

import d1 from "@/assets/d1.png";
import d2 from "@/assets/d2.png";
import d3 from "@/assets/d3.png";
import d4 from "@/assets/d4.png";
import d5 from "@/assets/d5.png";
import d6 from "@/assets/d6.png";
import d7 from "@/assets/d7.png";
import d8 from "@/assets/d8.png";
import d9 from "@/assets/d9.png";
import d10 from "@/assets/d10.png";
import d11 from "@/assets/d11.png";
import d12 from "@/assets/d12.png";
import d13 from "@/assets/d13.png";
import d14 from "@/assets/d14.png";
import d15 from "@/assets/d15.png";
import d16 from "@/assets/d16.png";
import d17 from "@/assets/d17.png";
import d18 from "@/assets/d18.png";
import d19 from "@/assets/d19.png";
import d20 from "@/assets/d20.png";
import d21 from "@/assets/d21.png";
import d22 from "@/assets/d22.png";


const productCategories = [
  { id: "products-panels", label: "Panels" },
  { id: "products-fuse-connectors", label: "Fuse Connectors" },
  { id: "products-wiring", label: "Wiring & Cables" },
  { id: "products-acdb", label: "ACDB" },
  { id: "products-acdb-elmex", label: "ACDB - Elmex & Havells" },
  { id: "products-dcdb", label: "DCDB" },
];

const panels = [
  {
    img: solarPanel,
    name: "Waaree ELITE Bifacial N-type TOPCon",
    power: "560–600 W",
    desc: "High-efficiency utility and commercial panels. N-type TOPCon, 144 half-cut cells (bifacial). Efficiency: ~23%. Bifacial rear: 15–30% extra power.",
    tags: ["23% efficiency", "Bifacial 15-30%", "Warranty-backed support"],
  },
  {
    img: solarPanel,
    name: "Waaree ELITE SERIES BiN-17 N-type",
    power: "615–645 W",
    desc: "Framed dual-glass bifacial TOPCon. 23.07% eff. Bifaciality 80%+10%, gain ~30%. 1500V, IP68.",
    tags: ["23.07% eff", "Bifacial 30%", "Warranty-backed support"],
  },
  {
    img: solarPanel,
    name: "Waaree ELITE BiN-08 N-type TOPCon",
    power: "560–590 W",
    desc: "N-type TOPCon bifacial dual-glass. 144 half-cut cells, ~22-23% eff. Bifacial gain 15-30%.",
    tags: ["22-23% eff", "Bifacial", "Warranty-backed support"],
  },
];



const fuseConnectors = [
  {
    img: fuseLq1,


    name: "LQ-1TC",

    power: "30A • 1500V",
    desc: "Rated current 30A, rated voltage 1500V DC. Temperature range -40°C to +85°C. Protection IP67. Cable size 2.5 to 6 mm². Material: Copper with tin-plated surface.",
    tags: ["30A", "1500V", "-40°C to +85°C", "IP67", "2.5–6 mm²", "Tin-plated copper"],
  },
  {
    img: branchLq1y,
    name: "LQ-1Y",

    power: "30A • 1500V",
    desc: "Rated current 30A, rated voltage 1500V DC. Temperature range -40°C to +85°C. Protection IP67. Cable size 2.5 to 6 mm². Material: Copper with tin-plated surface.",
    tags: ["30A", "1500V", "-40°C to +85°C", "IP67", "2.5–6 mm²", "Tin-plated copper"],
  },
  {
    img: bracnLq1y3,
    name: "LQ-1Y3",

    power: "30A • 1500V",
    desc: "Rated current 30A, rated voltage 1500V DC. Temperature range -40°C to +85°C. Protection IP67. Cable size 2.5 to 6 mm². Material: Copper with tin-plated surface.",
    tags: ["30A", "1500V", "-40°C to +85°C", "IP67", "2.5–6 mm²", "Tin-plated copper"],
  },
  {
    img: branchLq1t4,
    name: "LQ-1Y4",

    power: "30A • 1500V",
    desc: "Rated current 30A, rated voltage 1500V DC. Temperature range -40°C to +85°C. Protection IP67. Cable size 2.5 to 6 mm². Material: Copper with tin-plated surface.",
    tags: ["30A", "1500V", "-40°C to +85°C", "IP67", "2.5–6 mm²", "Tin-plated copper"],
  },
  {
    img: branchLq1x,
    name: "LQ-1X",

    power: "30A • 1500V",
    desc: "Rated current 30A, rated voltage 1500V DC. Temperature range -40°C to +85°C. Protection IP67. Cable size 2.5 to 6 mm². Material: Copper with tin-plated surface.",
    tags: ["30A", "1500V", "-40°C to +85°C", "IP67", "2.5–6 mm²", "Tin-plated copper"],
  },
  {
    img: branchLq1,
    name: "LQ-1",

    power: "30A • 1500V",
    desc: "Rated current 30A, rated voltage 1500V DC. Temperature range -40°C to +85°C. Protection IP67. Cable size 2.5 to 6 mm². Material: Copper with tin-plated surface.",
    tags: ["30A", "1500V", "-40°C to +85°C", "IP67", "2.5–6 mm²", "Tin-plated copper"],
  },
  {
    img: branchLq1t3,
    name: "LQ-1T3",

    power: "50A • 1500V",
    desc: "Rated current 50A, rated voltage 1500V DC. Temperature range -40°C to +85°C. Protection IP67. Cable size 2.5 to 6 mm². Material: Copper with tin-plated surface.",
    tags: ["50A", "1500V", "-40°C to +85°C", "IP67", "2.5–6 mm²", "Tin-plated copper"],
  },
  {
    img: branchLq1t,
    name: "LQ-1T4",

    power: "50A • 1500V",
    desc: "Rated current 50A, rated voltage 1500V DC. Temperature range -40°C to +85°C. Protection IP67. Cable size 2.5 to 6 mm². Material: Copper with tin-plated surface.",
    tags: ["50A", "1500V", "-40°C to +85°C", "IP67", "2.5–6 mm²", "Tin-plated copper"],
  },
  {
    img: branchLq1t5,
    name: "LQ-1T5",

    power: "50A • 1500V",
    desc: "Rated current 50A, rated voltage 1500V DC. Temperature range -40°C to +85°C. Protection IP67. Cable size 2.5 to 6 mm². Material: Copper with tin-plated surface.",
    tags: ["50A", "1500V", "-40°C to +85°C", "IP67", "2.5–6 mm²", "Tin-plated copper"],
  },
  {
    img: branchLq1t,
    name: "LQ-1T",
    power: "50A • 1500V",
    desc: "Rated current 50A, rated voltage 1500V DC. Temperature range -40°C to +85°C. Protection IP67. Cable size 2.5 to 6 mm². Material: Copper with tin-plated surface.",
    tags: ["50A", "1500V", "-40°C to +85°C", "IP67", "2.5–6 mm²", "Tin-plated copper"],
  },
];


const wiring = [
  {
    name: "Solar Cables",
    power: "PV DC",
    desc: "Solar DC cables made for rooftop PV wiring, compliant with IEC 60228 and EN 50618.",
    tags: ["IEC 60228", "EN 50618"],
  },
  {
    name: "LT Power & Control Cables",
    power: "LT Cables",
    desc: "Low-tension power and control cables for inverters, panels, and distribution boards.",
    tags: ["LT Power", "Control"],
  },
  {
    name: "Welding Cables",
    power: "Welding",
    desc: "Flexible welding cables for dependable current delivery in fabrication work.",
    tags: ["Flexible", "Durable"],
  },
  {
    name: "Shielded / Braided Instrumentation Cables",
    power: "Instrumentation",
    desc: "Shielded instrumentation cables for control circuits and noise protection.",
    tags: ["Shielded", "Instrumentation"],
  },
  {
    name: "Auto Cables",
    power: "Automotive",
    desc: "Automotive-grade cables for vehicle wiring with vibration resistance.",
    tags: ["Automotive", "Robust"],
  },
  {
    name: "House Wires",
    power: "PVC Wiring",
    desc: "WAACAB house wires with annealed copper, PVC insulation, and IS 694 compliance.",
    tags: ["IS 694", "PVC Insulated"],
  },
  {
    name: "Flexible Cables",
    power: "Flexible",
    desc: "Multi-core flexible cables for machinery and mobile equipment.",
    tags: ["Flexible", "Multi-core"],
  },
  {
    name: "Submersible Cables",
    power: "Submersible",
    desc: "1100V PVC submersible cables for pumps and borewell use.",
    tags: ["1100V", "Submersible"],
  },
  {
    name: "Fire Survival Cables",
    power: "Fire Rated",
    desc: "Fire-rated cables to help keep emergency circuits live during heat exposure.",
    tags: ["Fire Rated", "Safety"],
  },
  {
    name: "Heavy Duty Industrial Cables",
    power: "Industrial",
    desc: "Heavy-duty cables for high-load industrial wiring.",
    tags: ["Industrial", "High Current"],
  },
];

const houseWireSizes = [
  { size: "0.75 sq.mm", stranding: "24/0.20", insulation: "0.6 mm", diameter: "2.8 mm", current: "7 A", resistance: "26.0 Ω/km" },
  { size: "1.00 sq.mm", stranding: "14/0.30", insulation: "0.7 mm", diameter: "3.2 mm", current: "12 A", resistance: "18.1 Ω/km" },
  { size: "1.50 sq.mm", stranding: "22/0.30", insulation: "0.7 mm", diameter: "3.5 mm", current: "16 A", resistance: "12.1 Ω/km" },
  { size: "2.50 sq.mm", stranding: "36/0.30", insulation: "0.8 mm", diameter: "4.2 mm", current: "22 A", resistance: "7.41 Ω/km" },
  { size: "4.00 sq.mm", stranding: "56/0.30", insulation: "0.8 mm", diameter: "4.9 mm", current: "29 A", resistance: "4.61 Ω/km" },
  { size: "6.00 sq.mm", stranding: "84/0.30", insulation: "0.8 mm", diameter: "5.5 mm", current: "31 A", resistance: "3.30 Ω/km" },
  { size: "10.00 sq.mm", stranding: "140/0.30", insulation: "1.0 mm", diameter: "6.60 mm", current: "42 A", resistance: "1.91 Ω/km" },
];

const solarCableSizes = [
  { size: "4 sq.mm", stranding: "56/0.3", diameter: "5.9 mm", insulation: "0.7 mm", sheath: "0.8 mm", single: "55 A", adjacent: "52 A" },
  { size: "6 sq.mm", stranding: "84/0.3", diameter: "6.6 mm", insulation: "0.7 mm", sheath: "0.8 mm", single: "70 A", adjacent: "67 A" },
];

const submersibleCableSizes = [
  { size: "1.5 sq.mm", stranding: "30/0.25", current: "14 A", insulation: "0.80 mm", diameter: "3.25 mm", resistance: "12.10 Ω/km" },
  { size: "2.5 sq.mm", stranding: "50/0.25", current: "19 A", insulation: "0.90 mm", diameter: "3.80 mm", resistance: "7.41 Ω/km" },
  { size: "4 sq.mm", stranding: "56/0.30", current: "26 A", insulation: "1.0 mm", diameter: "4.50 mm", resistance: "4.95 Ω/km" },
  { size: "6 sq.mm", stranding: "84/0.30", current: "31 A", insulation: "1.0 mm", diameter: "5.25 mm", resistance: "3.30 Ω/km" },
];

const houseWireFeatures = [
  "Annealed copper conductors with PVC insulation",
  "Single-core wiring rated for 1100V and IS 694 compliance",
  "Available in FR, ZHFR and LFFR constructions",
];

function WiringSpecsSection() {
  return (
    <section className="mt-16" id="products-wiring-specs">
      <div className="rounded-3xl border border-border/60 bg-white p-6 shadow-soft">
        <div className="grid gap-6">
          <div>
            <h3 className="text-2xl font-bold text-brand-navy">Cable & Wires Technical Specifications</h3>
            <p className="mt-3 text-muted-foreground">
              Detailed product categories and technical datasheet information for house wires, solar cables, and submersible cables.
            </p>
          </div>

          <div className="rounded-3xl border border-border/50 bg-secondary/30 p-6">
            <h4 className="text-xl font-semibold text-brand-navy">House Wires</h4>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              WAACAB house wires are made from annealed bare copper of electrolytic grade with twin coating for superior insulation. These PVC insulated single-core fixed wiring and single-core cables are rated for 1100V and comply with IS 694:1990.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {houseWireFeatures.map((feature) => (
                <div key={feature} className="rounded-2xl border border-border/50 bg-white p-3 text-sm text-muted-foreground">
                  {feature}
                </div>
              ))}
            </div>
            <div className="mt-6 overflow-x-auto rounded-3xl border border-border/50 bg-white p-4 text-sm">
              <table className="min-w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border/60 text-left text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    <th className="py-3 pr-4">Size</th>
                    <th className="py-3 pr-4">Stranding</th>
                    <th className="py-3 pr-4">Insulation</th>
                    <th className="py-3 pr-4">Overall Ø</th>
                    <th className="py-3 pr-4">Current</th>
                    <th className="py-3 pr-4">Resistance</th>
                  </tr>
                </thead>
                <tbody>
                  {houseWireSizes.map((row) => (
                    <tr key={row.size} className="border-b border-border/50 last:border-b-0">
                      <td className="py-3 pr-4 font-semibold text-brand-navy">{row.size}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.stranding}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.insulation}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.diameter}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.current}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.resistance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-3xl border border-border/50 bg-secondary/30 p-6">
            <h4 className="text-xl font-semibold text-brand-navy">Solar DC Cables</h4>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Solar DC cables built for rooftop PV use with weather-resistant XLPO construction.
            </p>
            <div className="mt-6 overflow-x-auto rounded-3xl border border-border/50 bg-white p-4 text-sm">
              <table className="min-w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border/60 text-left text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    <th className="py-3 pr-4">Size</th>
                    <th className="py-3 pr-4">Stranding</th>
                    <th className="py-3 pr-4">Cable Ø</th>
                    <th className="py-3 pr-4">Current</th>
                  </tr>
                </thead>
                <tbody>
                  {solarCableSizes.map((row) => (
                    <tr key={row.size} className="border-b border-border/50 last:border-b-0">
                      <td className="py-3 pr-4 font-semibold text-brand-navy">{row.size}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.stranding}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.diameter}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.single}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-3xl border border-border/50 bg-secondary/30 p-6">
            <h4 className="text-xl font-semibold text-brand-navy">Submersible Cables</h4>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              PVC insulated 3-core round and flat cables for 1100V submersible pumps, compliant with IS 694:2010.
            </p>
            <div className="mt-6 overflow-x-auto rounded-3xl border border-border/50 bg-white p-4 text-sm">
              <table className="min-w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border/60 text-left text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    <th className="py-3 pr-4">Size</th>
                    <th className="py-3 pr-4">Stranding</th>
                    <th className="py-3 pr-4">Current</th>
                    <th className="py-3 pr-4">Insulation</th>
                    <th className="py-3 pr-4">Core Ø</th>
                    <th className="py-3 pr-4">Resistance</th>
                  </tr>
                </thead>
                <tbody>
                  {submersibleCableSizes.map((row) => (
                    <tr key={row.size} className="border-b border-border/50 last:border-b-0">
                      <td className="py-3 pr-4 font-semibold text-brand-navy">{row.size}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.stranding}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.current}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.insulation}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.diameter}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.resistance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const acdb = [
  {
    img: WCACEEE001,
    name: "ACDB 1-6 kW Single Phase",
    power: "1-6 kW",
    desc: "Single phase ACDB with SPD & MCB protection.",
  },
  {
    img: WCDCSHE001,
    name: "ACDB 1-6 kW Single Phase (Indicator)",
    power: "1-6 kW",
    desc: "Single phase ACDB with SPD & MCB protection and indicator.",
  },
  {
    img: WCACAAE001,
    name: "ACDB 6-10 kW Three Phase (RYB Indicator)",
    power: "6-10 kW",
    desc: "Three phase ACDB with SPD & MCB protection with RYB indicator.",
  },
  {
    img: WCACSFE001,
    name: "ACDB 6-10 kW Three Phase (No RYB)",
    power: "6-10 kW",
    desc: "Three phase ACDB with SPD & MCB protection without RYB indicator.",
  },
  {
    img: WCACBCE001,
    name: "ACDB 11-15 kW Three Phase (RYB Indicator)",
    power: "11-15 kW",
    desc: "Three phase ACDB with SPD & MCB protection with RYB indicator.",
  },
  {
    img: WCACCBE001,
    name: "ACDB 11-15 kW Three Phase (NVR + RYB)",
    power: "11-15 kW",
    desc: "Three phase ACDB with SPD & MCB protection with NVR and RYB indicator.",
  },
  {
    img: WCACDDE001,
    name: "ACDB 16-20 kW Three Phase (RYB Indicator)",
    power: "16-20 kW",
    desc: "Three phase ACDB with SPD & MCB protection with RYB indicator.",
  },
];

const acdbElmex = [
  {
    img: WCACOAE001,
    name: "ACDB (1–6 kW) Single Phase SPD & MCB (WCACOAE001)",
    power: "1–6 kW",
    desc: "Single phase ACDB with Elmex SPD & Havells MCB protection.",
  },
  {
    img: WCACOAE001_indicator,
    name: "ACDB (1–6 kW) Single Phase SPD & MCB With Indicator (WCACOAE001 – indicator variant)",
    power: "1–6 kW",
    desc: "Single phase ACDB with Elmex SPD & Havells MCB protection and indicator.",
  },
  {
    img: WCACODE001,
    name: "ACDB (6–10 kW) Three Phase SPD & MCB With RYB Indicator (WCACODE001)",
    power: "6–10 kW",
    desc: "Three phase ACDB with Elmex SPD & Havells MCB protection with RYB indicator.",
  },
  {
    img: WCACOBE001,
    name: "ACDB (6–10 kW) Three Phase SPD & MCB Without RYB Indicator (WCACOBE001)",
    power: "6–10 kW",
    desc: "Three phase ACDB with Elmex SPD & Havells MCB protection without RYB indicator.",
  },
  {
    img: WCACOEE001,
    name: "ACDB (11–15 kW) Three Phase SPD & MCB With RYB Indicator (WCACOEE001)",
    power: "11–15 kW",
    desc: "Three phase ACDB with Elmex SPD & Havells MCB protection with RYB indicator.",
  },
  {
    img: WCACOFE001,
    name: "ACDB (11–15 kW) Three Phase SPD & MCB With NVR & RYB Indicator (WCACOFE001)",
    power: "11–15 kW",
    desc: "Three phase ACDB with Elmex SPD & Havells MCB protection with NVR and RYB indicator.",
  },
  {
    img: WCACOGE001,
    name: "ACDB (16–20 kW) Three Phase SPD & MCB With RYB Indicator (WCACOGE001)",
    power: "16–20 kW",
    desc: "Three phase ACDB with Elmex SPD & Havells MCB protection with RYB indicator.",
  },
  {
    img: WCACOHE001,
    name: "ACDB (16–20 kW) Three Phase SPD & MCB With NVR & RYB Indicator (WCACOHE001)",
    power: "16–20 kW",
    desc: "Three phase ACDB with Elmex SPD & Havells MCB protection with NVR and RYB indicator.",
  },
];

const dcdb = [
  {
    img: d1,
    photoName: "d1",
    name: "WCDCFIE001 — DCDB 1–3 kW 1 in–1 out",
    power: "1–3 kW",
    desc: "Finder 600 V DC SPD; Mersen DC fuse + holder; IP66 ABS 180×130×100 mm PC-cover enclosure; 4 sqmm WAACAB DC cable; Jigo PG13.5 & PG7 glands; Connectwell connectors and end clamps.",
    tags: ["1–3 kW", "Finder", "Mersen", "SPD + Fuse", "IP66"],
  },
  {
    img: d2,
    photoName: "d2",
    name: "WCDCHJE001 — DCDB 5 kW 1 in–1 out",
    power: "5 kW",
    desc: "Finder 1000 V DC SPD; Mersen DC fuse + holder; ABS 180×130×100 mm enclosure; 4 sqmm WAACAB; Jigo glands; Connectwell terminals.",
    tags: ["5 kW", "Finder", "Mersen", "SPD + Fuse", "IP66"],
  },
  {
    img: d3,
    photoName: "d3",
    name: "WCDCJKE001 — DCDB 4–7 kW 2 in–2 out",
    power: "4–7 kW",
    desc: "2× Finder 600 V SPD; 2× Mersen fuse + holder; ABS 180×180×100 mm enclosure; 2 m 4 sqmm WAACAB; PG13.5 & PG7 glands; 7 connectors.",
    tags: ["4–7 kW", "Finder", "Mersen", "SPD + Fuse", "2 in–2 out"],
  },
  {
    img: d4,
    photoName: "d4",
    name: "WCDCMLE001 — DCDB 7–12 kW 2 in–2 out",
    power: "7–12 kW",
    desc: "2× Finder 1000 V SPD; 2× 15 A 1000 V fuses + holders; ABS 280×190×100 mm enclosure; 2 m 4 sqmm cable; PG13.5 & PG7 glands; 7 connectors.",
    tags: ["7–12 kW", "Finder", "Mersen", "SPD + Fuse", "2 in–2 out"],
  },
  {
    img: d5,
    photoName: "d5",
    name: "WCDCOME001 — DCDB 12–15 kW 3 in–3 out",
    power: "12–15 kW",
    desc: "2× Finder 1000 V SPD; 3× 25 A 1000 V fuses + holders; ABS 280×190×130 mm enclosure; 2 m 4 sqmm cable; PG13.5 & PG7 glands; 10 connectors.",
    tags: ["12–15 kW", "Finder", "Mersen", "SPD + Fuse", "3 in–3 out"],
  },
  {
    img: d6,
    photoName: "d6",
    name: "WCDCPNE001 — DCDB 16–20 kW 4 in–4 out",
    power: "16–20 kW",
    desc: "2× Finder 1000 V SPD; 4× 20 A 1000 V fuses + holders; ABS 280×280×130 mm enclosure; 2 m 4 sqmm cable; PG13.5 & PG7 glands; 16 connectors + MS mounting plate.",
    tags: ["16–20 kW", "Finder", "Mersen", "SPD + Fuse", "4 in–4 out"],
  },
  {
    img: d7,
    photoName: "d7",
    name: "WCDCGOE001 — DCDB 1–3 kW 1 in–1 out",
    power: "1–3 kW",
    desc: "Finder 600 V DC SPD; Schneider 16 A 500 V DC MCB; ABS 180×130×100 mm enclosure; 4 sqmm WAACAB; PG13.5 & PG7 glands; Connectwell connectors.",
    tags: ["1–3 kW", "Finder", "Schneider", "SPD + MCB", "IP66"],
  },
  {
    img: d8,
    photoName: "d8",
    name: "WCDCIRE001 — DCDB up to 5 kW 1 in–1 out",
    power: "Up to 5 kW",
    desc: "Finder 1000 V SPD; Schneider 16 A 500 V MCB; ABS 180×130×100 mm enclosure; 4 sqmm cable; Jigo glands; Connectwell terminals.",
    tags: ["Up to 5 kW", "Finder", "Schneider", "SPD + MCB", "IP66"],
  },
  {
    img: d9,
    photoName: "d9",
    name: "WCDCKPE001 — DCDB 4–7 kW 2 in–2 out",
    power: "4–7 kW",
    desc: "2× Finder 1000 V SPD; 2× 16 A 800 V DC MCB; ABS 220×190×130 mm enclosure; 4 sqmm cable; PG13.5 & PG7 glands; 5 connectors.",
    tags: ["4–7 kW", "Finder", "Schneider", "SPD + MCB", "2 in–2 out"],
  },
  {
    img: d10,
    photoName: "d10",
    name: "WCDCNQE001 — DCDB 8–12 kW 2 in–2 out",
    power: "8–12 kW",
    desc: "2× Finder 1000 V SPD; 2× DC MCB; ABS 280×190×130 mm enclosure; 4 sqmm cable; PG13.5 & PG7 glands; 5 connectors.",
    tags: ["8–12 kW", "Finder", "Schneider", "SPD + MCB", "2 in–2 out"],
  },
  {
    img: d11,
    photoName: "d11",
    name: "WCDCOIE001 — DCDB 1–3 kW 1 in–1 out",
    power: "1–3 kW",
    desc: "Elmex 600 V Type-2 SPD; Elmex 20 A 1000 V fuse + 32 A holder; ABS 180×130×100 mm enclosure; 4 sqmm WAACAB; PG13.5 & PG9 glands; Elmex KUT-6 terminals; Connectwell end clamps.",
    tags: ["1–3 kW", "Elmex", "SPD + Fuse", "IP66", "ADDB"],
  },
  {
    img: d12,
    photoName: "d12",
    name: "WCDCOJE001 — DCDB 5 kW 1 in–1 out",
    power: "5 kW",
    desc: "Elmex 1000 V Type-2 SPD; Elmex 20 A fuse + holder; ABS 180×130×100 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; KUT-6 terminals.",
    tags: ["5 kW", "Elmex", "SPD + Fuse", "IP66", "ADDB"],
  },
  {
    img: d13,
    photoName: "d13",
    name: "WCDCOKE001 — DCDB 4–7 kW 2 in–2 out",
    power: "4–7 kW",
    desc: "2× Elmex 600 V Type-2 SPD; 2× 16 A 1000 V fuse + holder; ABS 220×190×130 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; 7 terminals.",
    tags: ["4–7 kW", "Elmex", "SPD + Fuse", "IP66", "2 in–2 out"],
  },
  {
    img: d14,
    photoName: "d14",
    name: "WCDCOLE001 — DCDB 7–12 kW 2 in–2 out",
    power: "7–12 kW",
    desc: "2× Elmex 1000 V Type-2 SPD; 2× 30 A 1000 V fuse + holder; ABS 280×190×130 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; 7 terminals.",
    tags: ["7–12 kW", "Elmex", "SPD + Fuse", "IP66", "2 in–2 out"],
  },
  {
    img: d15,
    photoName: "d15",
    name: "WCDCOME001 — DCDB 12–15 kW 3 in–3 out",
    power: "12–15 kW",
    desc: "2× Elmex 1000 V Type-2 SPD; 3× 30 A fuse + holder; ABS 180×190×130 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; 16 terminals; 24 end clamps.",
    tags: ["12–15 kW", "Elmex", "SPD + Fuse", "IP66", "3 in–3 out"],
  },
  {
    img: d16,
    photoName: "d16",
    name: "WCDCONE001 — DCDB 16–20 kW 4 in–4 out",
    power: "16–20 kW",
    desc: "2× Elmex 1000 V Type-2 SPD; 4× 30 A fuse + holder; ABS 280×280×130 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; 26 terminals; 27 end clamps.",
    tags: ["16–20 kW", "Elmex", "SPD + Fuse", "IP66", "4 in–4 out"],
  },
  {
    img: d17,
    photoName: "d17",
    name: "WCDCOOE001 — DCDB 1–3 kW 1 in–1 out",
    power: "1–3 kW",
    desc: "Elmex 600 V Type-2 SPD; Elmex 16 A 500 V DC MCB; ABS 180×130×100 mm enclosure; 4 sqmm WAACAB; PG13.5 & PG9 glands; KUT-6 terminals.",
    tags: ["1–3 kW", "Elmex", "SPD + MCB", "IP66", "ADDB"],
  },
  {
    img: d18,
    photoName: "d18",
    name: "WCDCORE001 — DCDB 5 kW 1 in–1 out",
    power: "5 kW",
    desc: "Elmex 1000 V Type-2 SPD; Elmex 16 A 500 V MCB; ABS 180×130×100 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; KUT-6 terminals.",
    tags: ["5 kW", "Elmex", "SPD + MCB", "IP66", "ADDB"],
  },
  {
    img: d19,
    photoName: "d19",
    name: "WCDCOKE001 — DCDB 4–7 kW 2 in–2 out",
    power: "4–7 kW",
    desc: "2× Elmex 600 V Type-2 SPD; 2× 16 A 500 V MCB; ABS 220×190×100 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; 5 terminals.",
    tags: ["4–7 kW", "Elmex", "SPD + MCB", "IP66", "2 in–2 out"],
  },
  {
    img: d20,
    photoName: "d20",
    name: "WCDCOQE001 — DCDB 7–12 kW 2 in–2 out",
    power: "7–12 kW",
    desc: "2× Elmex 1000 V Type-2 SPD; 2× 16 A 1000 V MCB; ABS 280×280×130 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; 7 terminals.",
    tags: ["7–12 kW", "Elmex", "SPD + MCB", "IP66", "2 in–2 out"],
  },
  {
    img: d21,
    photoName: "d21",
    name: "WCDCOME001 — DCDB 12–15 kW 3 in–3 out",
    power: "12–15 kW",
    desc: "2× Elmex 1000 V Type-2 SPD; 3× 20 A 800 V MCB; ABS 380×280×130 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; 19 terminals.",
    tags: ["12–15 kW", "Elmex", "SPD + MCB", "IP66", "3 in–3 out"],
  },
  {
    img: d22,
    photoName: "d22",
    name: "WCDCONE001 — DCDB 16–20 kW 4 in–4 out",
    power: "16–20 kW",
    desc: "2× Elmex 1000 V Type-2 SPD; 4× 20 A 800 V MCB; ABS 380×280×130 mm enclosure; 4 sqmm cable; PG13.5 & PG9 glands; 24 terminals.",
    tags: ["16–20 kW", "Elmex", "SPD + MCB", "IP66", "4 in–4 out"],
  },
];

function CategoryNav() {
  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {productCategories.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="reveal rounded-full border border-border/70 bg-card/60 px-4 py-2 text-sm font-semibold text-foreground hover:bg-brand-green/10 hover:border-brand-green transition"
          >
            {c.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function ProductSectionHeading({ title, description }) {
  return (
    <div className="reveal text-center max-w-3xl mx-auto">
      <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy">
        {title}
      </h3>
      {description ? (
        <p className="mt-2 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

function ProductCard({ product, index }) {
  return (
    <article className="reveal rounded-3xl border border-border/50 bg-card shadow-soft overflow-hidden flex h-full flex-col">
      <div className="flex items-center justify-between gap-3 border-b border-border/40 p-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-green/90">
            #{index + 1}
          </p>
          <h4 className="mt-3 text-base font-semibold text-brand-navy">
            {product.name}
          </h4>
          {product.photoName ? (
            <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Photo {product.photoName}
            </p>
          ) : null}
        </div>
        {product.power ? (
          <span className="rounded-full bg-brand-green/10 px-3 py-1 text-[11px] font-semibold text-brand-green">
            {product.power}
          </span>
        ) : null}
      </div>

      <div className="flex flex-col p-5 flex-1">
        {product.img ? (
          <div className="aspect-[4/3] rounded-3xl bg-secondary/40 overflow-hidden p-4 flex items-center justify-center">
            <img
              src={product.img}
              alt={product.name}
              loading="lazy"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ) : null}

        <div className="flex flex-col flex-1">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {product.desc}
          </p>
          {product.tags?.length ? (
            <div className="mt-auto flex flex-wrap gap-2">
              {product.tags.slice(0, 6).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-green/10 px-3 py-1 text-[11px] font-medium text-brand-green"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ProductCategorySection({ id, title, description, products }) {
  return (
    <section id={id} className="mt-16">
      <ProductSectionHeading title={title} description={description} />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3 items-stretch">
        {products.map((product, index) => (
          <ProductCard key={product.name} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}

export function Products() {
  const categoryData = useMemo(
    () => [
      {
        id: "products-panels",
        title: "Panels",
        description:
          "Tier-1 modules from Waaree Energies — cleaner specs, easier comparison.",
        icon: Zap,
        products: panels,
        pillLabel: "Panels",
      },
      {
        id: "products-fuse-connectors",
        title: "Fuse Connectors",
        description:
          "Fuse holder + connector solutions for safer string protection (add your real models below).",
        icon: PlugZap,
        products: fuseConnectors,
        pillLabel: "Fuse Connectors",
      },
      {
        id: "products-wiring",
        title: "Wiring & Cables",
        description:
          "Reliable solar and electrical cables for clean, safe system wiring.",
        icon: Zap,
        products: wiring,
        pillLabel: "Wiring & Cables",
      },
      {
        id: "products-acdb",
        title: "ACDB",
        description:
          "Solar AC protection & power distribution for inverter output—SPD + MCB for surge and overload/short-circuit protection (single & three phase).",
        icon: Zap,
        products: acdb,
        pillLabel: "ACDB",
      },
      {
        id: "products-acdb-elmex",
        title: "ACDB - Elmex & Havells",
        description:
          "ACDB products with Elmex SPD and Havells MCB components for surge and overload protection.",
        icon: Zap,
        products: acdbElmex,
        pillLabel: "ACDB - Elmex & Havells",
      },
      {
        id: "products-dcdb",
        title: "DCDB",
        description:
          "DC distribution products for solar string protection and string combining, including SPD and DC fuse/MCB protection.",
        icon: Zap,
        products: dcdb,
        pillLabel: "DCDB",
      },
    ],
    []
  );

  return (
    <section id="products" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center reveal max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-wide uppercase text-brand-green">
            Products
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">
            Solar products we supply
          </h2>
          <p className="mt-3 text-muted-foreground">
            Choose a category to explore. All product models are displayed below in a structured list.
            New product categories can be added anytime.
          </p>
        </div>

        <CategoryNav />

        {categoryData.map((c) => (
          <div key={c.id}>
            <ProductCategorySection
              id={c.id}
              title={c.title}
              description={c.description}
              products={c.products}
            />
            {c.id === "products-wiring" ? <WiringSpecsSection /> : null}
          </div>
        ))}
      </div>
    </section>
  );
}



