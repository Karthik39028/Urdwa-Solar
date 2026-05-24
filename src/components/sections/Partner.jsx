import waareeImg from "@/assets/waaree.jpg";
import companyLogo from "@/assets/urdwasolarsystemslogo.png";
import {
  BadgeCheck,
  Building2,
  Globe,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";


const waareePartner = {
  badge: "Waaree Partner",
  name: "Waaree Enterprises",
  title: "Waaree Energies Limited",
  image: waareeImg,
  imageAlt: "Waaree solar modules and partner branding",
  intro:
    "We work with Waaree for genuine solar modules, trusted guidance, and dependable long-term support—so your rooftop plant performs with confidence.",
  highlights: [
    {
      Icon: ShieldCheck,
      label: "Genuine Modules",
      value: "Quality-backed Waaree supply",
    },
    {
      Icon: Truck,
      label: "Smooth Delivery",
      value: "On-time coordination for projects",
    },
    {
      Icon: Sparkles,
      label: "Quality Testing",
      value: "Proven reliability through testing",
    },
    {
      Icon: Globe,
      label: "Global Reach",
      value: "Export-grade manufacturing standards",
    },
    {
      Icon: BadgeCheck,
      label: "Long-term Value",
      value: "ESG-led innovation & performance focus",
    },
    {
      Icon: Building2,
      label: "Business Strength",
      value: "Large-scale capacity & experience",
    },
  ],
  stats: [
    { value: "22.3 GW", label: "Global module manufacturing" },
    { value: "5.4 GW", label: "Cell capacity" },
    { value: "24+", label: "Countries supplied" },
    { value: "35+ yrs", label: "Testing & innovation" },
  ],
};

function Stat({ value, label }) {
  return (
    <div className="rounded-xl bg-card/70 border border-border/50 p-4 text-left">
      <div className="text-2xl font-bold text-brand-navy">{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function PartnerHighlightCard({ Icon, label, value }) {
  return (
    <div className="group rounded-xl bg-card/70 border border-border/50 p-4 shadow-soft">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-green/10">
          <Icon className="h-5 w-5 text-brand-green" />
        </div>
        <div>
          <div className="text-sm font-semibold text-brand-navy">{label}</div>
          <div className="mt-1 text-sm font-medium text-brand-navy/80">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}

function WaareePartnerCard({ badge, name, title, image, imageAlt, intro, highlights, stats }) {
  return (
    <article className="reveal rounded-2xl bg-card p-6 shadow-soft border border-border/50">
      <div className="inline-flex items-center rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">
        {badge}
      </div>
      <h3 className="mt-4 text-2xl font-bold text-brand-navy">{name}</h3>
      <p className="text-sm font-medium text-brand-navy/80">{title}</p>

      <div className="mt-4 overflow-hidden rounded-xl border border-border/50 bg-transparent">
        <div className="relative aspect-[4/3] bg-transparent">

          <img
            src={companyLogo}
            alt="Urdhwa logo"
            className="absolute left-4 sm:left-6 bottom-6 sm:bottom-10 w-16 sm:w-24 object-contain drop-shadow-md"
          />
          <img
            src={image}
            alt={imageAlt}
            className="absolute right-4 sm:right-6 bottom-6 sm:bottom-10 w-20 sm:w-28 object-contain drop-shadow-md"
          />
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {intro}
      </p>

      <div className="mt-5 grid sm:grid-cols-2 gap-3">
        {highlights.map(({ Icon, label, value }) => (
          <PartnerHighlightCard
            key={label}
            Icon={Icon}
            label={label}
            value={value}
          />
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map(({ value, label }) => (
          <Stat key={label} value={value} label={label} />
        ))}
      </div>
    </article>
  );
}


export function Partner() {
  return (
    <section id="partner" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Waaree channel partner story */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-2 text-sm font-semibold text-brand-green">
              <ShieldCheck className="h-4 w-4" /> Waaree Channel Partner
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl font-black text-brand-navy leading-tight">
              Partnering with Waaree for dependable solar solutions
            </h2>

            <p className="mt-4 text-muted-foreground text-base leading-relaxed">
              We collaborate with <span className="font-semibold text-brand-navy">Waaree Energies Limited</span> to deliver
              quality solar modules, trusted guidance, and reliable long-term support for rooftop
              projects across India.
            </p>

            <h3 className="mt-8 text-xl font-bold text-brand-navy">What you get with Waaree</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {[
                {
                  Icon: ShieldCheck,
                  title: "Genuine Modules",
                  text: "Quality-backed Waaree supply built for real-world performance.",
                },
                {
                  Icon: Truck,
                  title: "Smooth Delivery",
                  text: "On-time coordination for projects so timelines stay on track.",
                },
                {
                  Icon: Sparkles,
                  title: "Quality Testing",
                  text: "Proven reliability through testing and validated standards.",
                },
                {
                  Icon: Globe,
                  title: "Global Reach",
                  text: "Export-grade manufacturing standards with consistent output.",
                },
                {
                  Icon: BadgeCheck,
                  title: "Long-Term Value",
                  text: "ESG-led innovation & performance focus for long-lasting returns.",
                },
                {
                  Icon: Building2,
                  title: "Business Strength",
                  text: "Large-scale capacity & experience for dependable supply.",
                },
              ].map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-border/60 bg-card p-5 shadow-soft hover:-translate-y-0.5 hover:shadow-xl transition-all"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-green/10">
                    <Icon className="h-5 w-5 text-brand-green" />
                  </div>
                  <div className="mt-3 font-bold text-brand-navy">{title}</div>
                  <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Waaree brand card */}
          <div className="lg:sticky lg:top-24">
            <WaareePartnerCard {...waareePartner} />
          </div>
        </div>
      </div>
    </section>
  );
}





