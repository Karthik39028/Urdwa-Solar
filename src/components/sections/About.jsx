import { Leaf, IndianRupee, Wrench } from "lucide-react";
import urdhwaWaareeImg from "@/assets/urdhwa-waaree.jpeg";
import waareeInaugImg from "@/assets/waaree-inaug.jpeg";


export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-secondary/40">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-start justify-items-start">
        <div className="reveal flex flex-col md:order-2">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-card p-2 shadow-soft border border-border/50">
            <img
              src={urdhwaWaareeImg}
              alt="Urdwa Waaree rooftop solar"
              className="w-full h-80 sm:h-[36rem] lg:h-[18rem] object-cover object-[50%_100%] rounded-[1.5rem]"
              loading="lazy"
            />
          </div>

          <div className="mt-14 relative overflow-hidden rounded-[1.75rem] bg-card p-2 shadow-soft border border-border/50">
            <img
              src={waareeInaugImg}
              alt="Waaree inauguration"
              className="w-full h-56 sm:h-96 lg:h-[16rem] object-cover object-[50%_30%] bg-card rounded-[1.5rem]"
              loading="lazy"
            />
          </div>
        </div>
        <div className="reveal md:col-start-1 flex flex-col md:order-1 items-start">
          <p className="text-sm font-semibold tracking-wide uppercase text-brand-green">Urdwa Solar Company</p>
          <h3 className="mt-3 text-2xl font-bold text-brand-navy">Rooftop solar made for real homes</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Urdwa Solar is committed to bringing clean, reliable solar power to every household in and around Kakinada.
            We guide you from the first site visit to system design, installation, and after-sales support—so you can go solar with confidence.
          </p>

          <span className="mt-6 text-sm font-semibold tracking-wide uppercase text-brand-green">About Us</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">Clean energy, made simple for every home</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Urdwa Solar is a fast-growing solar company focused on rooftop solar in and around Kakinada.
            We help homeowners move to clean energy with clear guidance, transparent execution, and reliable after-sales support.
            From Waaree solar modules to ready-to-install Solar Kits (Radiance), we keep the planning and installation smooth—so you can reduce electricity bills and get long-term performance.
          </p>


          <div className="mt-4 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-card p-5 shadow-soft border border-border/50">
                <div className="text-sm font-semibold tracking-wide uppercase text-brand-green">What we sell</div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• Waaree solar rooftop panels (modules)</li>
                  <li>• Solar Kits (Radiance) for easy home installation</li>
                  <li>• Solar panel configurations & sizing guidance for your roof & usage</li>
                  <li>• Protection and safety components to complete the rooftop system</li>
                  <li>• Warranty-backed support for Waaree products</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <div className="rounded-xl bg-card p-5 shadow-soft border border-border/50">
                  <div className="text-sm font-semibold tracking-wide uppercase text-brand-green">Our focus</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Urdwa Solar focuses only on solar panels from WAAREE. We help you choose the right module capacity and ensure you get accurate guidance so you can install with confidence.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}
