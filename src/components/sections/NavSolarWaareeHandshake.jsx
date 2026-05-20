import { ArrowRight, ShieldCheck, Wrench } from "lucide-react";

import partnershipHandshakeImg from "@/assets/handshake2.jpg";

import urdhwaLogo from "@/assets/Companylogo.png";
import waareeLogo from "@/assets/Waaree-logo.png";

export function NavSolarWaareeHandshake() {
  return (
    <section
      id="navsolar-waaree-partner"
      className="py-20 sm:py-24 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-white to-secondary/20 shadow-soft">
          {/* Decorative solar glow */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-brand-navy/10 blur-3xl" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 p-6 sm:p-10">
            {/* Text */}
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex items-center gap-3">
                <img
                  src={waareeLogo}
                  alt="Waaree logo"
                  className="h-16 w-auto max-w-[45%] object-contain"
                />
                <img
                  src={urdhwaLogo}
                  alt="Urdhwa logo"
                  className="h-16 w-auto max-w-[45%] object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-brand-green/10 px-4 py-2 text-sm font-semibold text-brand-green">
                <ShieldCheck className="h-4 w-4" /> Authorized Waaree Channel Partner
              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl font-black text-brand-navy leading-tight">
                Waaree Authorized Channel Partner – Nav Solar Power Pvt. Ltd.
              </h2>

              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                Reliable solar energy solutions with premium technology—delivered with business-ready
                expertise for a trusted partnership across residential, commercial, and industrial needs.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-white/70 p-4 shadow-soft">
                  <div className="text-sm font-semibold text-brand-navy">
                    Premium Solar Technology
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    High-quality modules and trusted project workflows.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/60 bg-white/70 p-4 shadow-soft">
                  <div className="text-sm font-semibold text-brand-navy">
                    Customized Solar Solutions
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tailored designs for residential, commercial, and industrial requirements.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/60 bg-white/70 p-4 shadow-soft">
                  <div className="text-sm font-semibold text-brand-navy">
                    Expert Installation & Support
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Professional installation, maintenance, and after-sales support.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/60 bg-white/70 p-4 shadow-soft">
                  <div className="text-sm font-semibold text-brand-navy">
                    Cost-effective & Sustainable Energy
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Sustainable power that reduces long-term energy costs.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-soft hover:bg-brand-green/90 transition"
                >
                  Request a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-border/70 bg-white px-6 py-3 text-sm sm:text-base font-semibold text-brand-navy shadow-soft hover:bg-secondary/30 transition"
                >
                  Explore Solutions
                  <Wrench className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-xl flex items-center justify-center">
                <div
                  className="absolute -inset-2 rounded-[22px] bg-brand-green/15 blur-xl"
                  aria-hidden="true"
                />

                <div className="relative rounded-[20px] overflow-hidden border border-border/60 bg-white shadow-soft">
                  <img
                    src={partnershipHandshakeImg}

                    data-img={"navsolar-handshake"}

                    alt="Two business professionals shaking hands representing Nav Solar Power Pvt. Ltd. and Waaree Authorized Channel Partner with a solar plant background"
                    width={640}
                    height={420}
                    className="h-[220px] lg:h-[320px] w-full object-cover"
                    loading="lazy"
                  />

                  {/* Quick trust badges */}
                  <div className="absolute left-4 bottom-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-semibold text-brand-navy border border-border/60">
                      Trusted Partnership
                    </span>
                    <span className="rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-semibold text-brand-navy border border-border/60">
                      Premium Technology
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-muted-foreground">
                  Building long-term trust for reliable and sustainable solar outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

