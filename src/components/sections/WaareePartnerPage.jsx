import { useMemo, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe,
  Leaf,
  Loader2,
  Mail,
  Package,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";

import waareeLogo from "@/assets/Waaree-logo.png";
import handshakeImg from "@/assets/handshake.jpg";
import companyLogo from "@/assets/Companylogo.png";

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
      <div className="text-3xl font-black text-brand-navy">{value}</div>
      <div className="mt-2 text-sm font-semibold text-muted-foreground leading-relaxed">{label}</div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <div className="group rounded-2xl border border-border/60 bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-xl">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-green/10">
        <Icon className="h-5 w-5 text-brand-green" />
      </div>
      <div className="mt-3 text-base font-bold text-brand-navy">{title}</div>
      <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{text}</div>
    </div>
  );
}

function ProductCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-green/10">
          <Icon className="h-5 w-5 text-brand-green" />
        </div>
        <div>
          <div className="text-base font-bold text-brand-navy">{title}</div>
          <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{text}</div>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ kicker, title, desc }) {
  return (
    <div className="reveal">
      {kicker ? (
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-2 text-sm font-semibold text-brand-green">
          <ShieldCheck className="h-4 w-4" /> {kicker}
        </div>
      ) : null}
      <h2 className="mt-6 text-3xl sm:text-4xl font-black text-brand-navy leading-tight">{title}</h2>
      {desc ? <p className="mt-3 text-muted-foreground text-base leading-relaxed">{desc}</p> : null}
    </div>
  );
}

export function WaareePartnerPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    enquiryType: "Solar Modules",
    details: "",
  });
  const [status, setStatus] = useState({ loading: false });

  const meta = useMemo(
    () => ({
      title: "Urdwa Solar Company | Channel Partner with Waaree",
      description:
        "Explore Urdwa Solar Company’s trusted channel partnership with Waaree—premium solar modules, inverters, kits, turnkey EPC and sustainable energy solutions.",
    }),
    []
  );

  const onSubmit = async (e) => {
    e.preventDefault();

    const emailOk = !form.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    const phoneDigits = String(form.phone || "").replace(/\D/g, "");
    const pincodeDigits = String(form.pincode || "").replace(/\D/g, "");

    if (!form.name.trim() || phoneDigits.length < 10) return alert("Please enter your name and a valid phone number.");
    if (!emailOk) return alert("Please enter a valid email address.");
    if (pincodeDigits && pincodeDigits.length !== 6) return alert("Pincode should be 6 digits.");

    setStatus({ loading: true });

    const message = [
      "Hello Urdwa Solar!",
      `Enquiry Type: ${form.enquiryType}`,
      `Name: ${form.name}`,
      form.email ? `Email: ${form.email}` : "",
      `Phone: ${form.phone}`,
      form.pincode ? `Pincode: ${form.pincode}` : "",
      `Requirements: ${form.details || "N/A"}`,
      "\n\nSent from the Waaree Channel Partner page.",
    ]
      .filter(Boolean)
      .join("\n");

    const WHATSAPP = "8179451780";
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setStatus({ loading: false });
  };

  const stats = [
    { value: "22.3 GW", label: "Solar Module Manufacturing Capacity" },
    { value: "5.4 GW", label: "Solar Cell Manufacturing" },
    { value: "24+", label: "Countries Supplied" },
    { value: "35+ yrs", label: "Innovation Leadership" },
  ];

  const productCards = [
    {
      icon: Package,
      title: "Solar PV Modules",
      text: "Efficient solar panels designed for reliable energy output and performance assurance.",
    },
    {
      icon: Sparkles,
      title: "Inverters",
      text: "Advanced and efficient inverters for optimized energy performance and steady conversion.",
    },
    {
      icon: CheckCircle2,
      title: "Solar Kits",
      text: "Pre-configured, scalable solar kits for homes and businesses—easy to deploy and expand.",
    },
    {
      icon: Building2,
      title: "Turnkey EPC",
      text: "End-to-end engineering, procurement, and construction services for solar projects.",
    },
    {
      icon: Leaf,
      title: "Green Hydrogen Solutions",
      text: "Solutions supporting industrial decarbonization and sustainable energy progress.",
    },
    {
      icon: Globe,
      title: "Energy Storage",
      text: "Scalable storage systems for reliable power use and optimized energy management.",
    },
  ];

  const manufacturing = [
    {
      icon: Truck,
      title: "Manufacturing Excellence",
      text: "Automated production lines and a performance-driven engineering approach.",
    },
    {
      icon: Wrench,
      title: "Quality Testing",
      text: "In-house NABL-accredited labs with rigorous quality checks and validation.",
    },
    {
      icon: Sparkles,
      title: "R&D-led Innovation",
      text: "Continuous research and innovation for dependable product performance.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Product Engineering",
      text: "Durable product design with smart energy integration and long-term focus.",
    },
  ];

  const sustainability = [
    {
      icon: Leaf,
      title: "ESG & Sustainability",
      text: "Sustainability-focused initiatives aligned with long-term community value.",
    },
    {
      icon: Globe,
      title: "Community Empowerment",
      text: "CSR efforts supporting sustainable development and responsible growth.",
    },
    {
      icon: CheckCircle2,
      title: "Planet-first Thinking",
      text: "A credible clean-energy approach that helps preserve the planet for future generations.",
    },
  ];

  const whyUs = [
    {
      icon: ShieldCheck,
      title: "Trusted Channel Partner Support",
      text: "Urdwa works with Waaree to ensure clarity, reliability, and strong execution support.",
    },
    {
      icon: Package,
      title: "Quality-backed Solar Products",
      text: "Premium modules and solutions aligned with dependable performance requirements.",
    },
    {
      icon: Building2,
      title: "Scalable for Residential, Commercial & Industrial",
      text: "Solutions that fit different needs, from homes to large projects.",
    },
    {
      icon: Wrench,
      title: "Professional Consultation & Execution",
      text: "Structured guidance to help your customers move forward with confidence.",
    },
    {
      icon: Sparkles,
      title: "Efficiency, Savings & Sustainability",
      text: "A clean-energy roadmap focused on outcomes—performance, value, and long-term impact.",
    },
  ];

  return (
    <div>
      <div className="sr-only" aria-hidden="true">
        {meta.title} {meta.description}
      </div>

     <section className="relative pt-24 pb-14 overflow-hidden bg-white">
  <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 to-transparent" />

  {/* FULL WIDTH CONTAINER */}
  <div className="relative w-full px-4 sm:px-6 lg:px-10">

    <div className="grid gap-10 items-center">

      {/* LEFT CONTENT */}
      <div className="reveal text-left w-full">

        {/* WIDE WAAREE CARD */}
        <div className="flex w-full items-center justify-between gap-8 rounded-[36px] border border-border/60 bg-white/95 px-8 lg:px-14 py-8 lg:py-10 shadow-soft backdrop-blur">

          {/* LEFT SIDE */}
<div className="flex flex-col lg:flex-row items-center justify-center gap-6 flex-1 text-center lg:text-left"> 
            
<div className="flex-1 text-center">

  {/* MAIN BRAND NAME */}
 <div className="text-5xl sm:text-7xl font-black tracking-tight leading-none text-brand-green">
  Urdwa
  <span className="block mt-1">
    Solar Systems
  </span>
</div>

  {/* SUBTITLE */}
  <div className="mt-6 inline-flex flex-col items-center">

   <span className="text-lg sm:text-2xl font-black uppercase tracking-[0.3em] text-brand-navy">
    Authorized Channel Partner
   </span>

    <div className="mt-4 flex items-center justify-center rounded-full border border-brand-green/20 bg-brand-green/10 px-8 py-4">

  <img
    src={waareeLogo}
    alt="Waaree Logo"
    className="h-12 sm:h-16 w-auto object-contain"
  />

</div>
  </div>
                            
                </div>
                  </div>
                    </div>


              <h1 className="mt-6 text-4xl sm:text-5xl font-black text-brand-navy leading-tight">Powered by Trusted Solar Innovation</h1>

              <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                Urdwa Company is proud to be associated with Waaree, a leading clean energy company delivering advanced solar modules, inverters, storage, EPC, and sustainable energy solutions.
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {[{ icon: ShieldCheck, label: "Quality Focus" }, { icon: Sparkles, label: "Innovation" }, { icon: Globe, label: "Global Standards" }].map(
                  ({ icon: Icon, label }) => (
                    <div key={label} className="rounded-2xl bg-card border border-border/60 p-4 shadow-soft">
                      <Icon className="h-5 w-5 text-brand-green" />
                      <div className="mt-2 text-sm font-semibold text-brand-navy">{label}</div>
                      <div className="mt-1 text-xs text-muted-foreground">Trusted collaboration for dependable outcomes.</div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="reveal">
              <div className="rounded-3xl border border-border/60 bg-card shadow-soft p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green/10">
                    <ShieldCheck className="h-6 w-6 text-brand-green" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wide text-brand-green">Our Commitment</div>
                    <div className="mt-2 text-xl font-black text-brand-navy">High-trust execution with Waaree</div>
                    <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      From modules to solutions, we align with Waaree’s manufacturing strength, quality testing, and performance-focused engineering.
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  {[{ icon: Truck, label: "Project coordination" }, { icon: Wrench, label: "System guidance" }, { icon: Package, label: "Solution fit" }, { icon: Sparkles, label: "Quality validation" }].map(
                    ({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2 rounded-2xl border border-border/50 bg-white/60 p-3">
                        <Icon className="h-4 w-4 text-brand-green" />
                        <span className="text-sm font-semibold text-brand-navy">{label}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" id="partner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            kicker="Our Channel Partner: Waaree"
            title="Reliability at every step of the solar journey"
            desc="Urdwa Company works with Waaree to deliver reliable, high-performance solar and renewable energy solutions—supported by large-scale manufacturing, quality assurance, and innovation leadership."
          />

          <div className="mt-8 flex justify-center">
            <div className="relative w-full max-w-2xl rounded-xl overflow-hidden border border-border/50 bg-gray-100">
              <img src={handshakeImg} alt="Handshake" className="w-full h-48 sm:h-56 object-cover" />
              <div className="absolute inset-x-0 top-0 flex justify-between px-4 py-4">
                <div className="flex items-start rounded-2xl bg-white/95 p-2 shadow-soft">
                  <img src={companyLogo} alt="Urdhwa logo" className="w-24 sm:w-32 object-contain" />
                </div>
                <div className="flex items-start rounded-2xl bg-white/95 p-2 shadow-soft">
                  <img src={waareeLogo} alt="Waaree logo" className="w-28 sm:w-36 object-contain" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {[
              { Icon: ShieldCheck, title: "Large-scale manufacturing", text: "22.3 GW module manufacturing and 5.4 GW cell capacity for dependable supply." },
              { Icon: Sparkles, title: "In-house quality focus", text: "Rigorous quality testing and validation to support reliable product performance." },
              { Icon: Leaf, title: "ESG-led approach", text: "Sustainability and community empowerment aligned with long-term value." },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
                <Icon className="h-6 w-6 text-brand-green" />
                <div className="mt-3 text-base font-bold text-brand-navy">{title}</div>
                <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="reveal text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-2 text-sm font-semibold text-brand-green">
              <Globe className="h-4 w-4" /> Waaree at a glance
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl font-black text-brand-navy">Manufacturing strength & global reach</h2>
            <p className="mt-3 text-muted-foreground text-base leading-relaxed">A premium collaboration grounded in measurable capabilities.</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            kicker="Products & Solutions"
            title="Solutions built for different needs and project scales"
            desc="From solar PV modules to inverters, kits, turnkey EPC, and sustainable energy initiatives, Waaree supports a full renewable energy pathway."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {productCards.map((c) => (
              <ProductCard key={c.title} icon={c.icon} title={c.title} text={c.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            kicker="Manufacturing & Quality"
            title="Excellence engineered through testing and performance focus"
            desc="Waaree emphasizes manufacturing excellence, automated production lines, NABL-accredited in-house labs, quality testing, and R&D-driven innovation."
          />

          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {manufacturing.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} text={f.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            kicker="Sustainability"
            title="ESG and CSR focus for long-term community impact"
            desc="Waaree’s sustainability mindset supports community empowerment and responsible growth—helping preserve the planet while enabling cleaner energy adoption."
          />

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {sustainability.map((s) => (
              <FeatureCard key={s.title} icon={s.icon} title={s.title} text={s.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            kicker="Why choose Urdwa + Waaree"
            title="A trusted collaboration for performance you can rely on"
            desc="Choose a partner ecosystem designed for clarity, quality, and outcomes across residential, commercial, and industrial projects."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((w) => (
              <FeatureCard key={w.title} icon={w.icon} title={w.title} text={w.text} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

