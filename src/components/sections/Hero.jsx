import { useEffect, useRef } from "react";
import heroImg from "@/assets/urdhwa-waaree.jpeg";
import heroVideo from "@/assets/hero-bg-video.mp4";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Wrench } from "lucide-react";

export function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    // try to play the background video programmatically (some browsers require this)
    const v = videoRef.current;
    if (!v) return;
    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // autoplay may be blocked; keep poster image as fallback
      });
    }
  }, []);

  return (
    <section id="home" className="relative pt-20 overflow-hidden">
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
        preload="metadata"
        poster={heroImg}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-20 container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-center py-16 sm:py-20">
          {/* Left */}
          <div className="text-left text-white max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/20 px-4 py-2 text-sm font-semibold text-brand-green">
              <ShieldCheck className="h-4 w-4" /> Trusted Solar Partner • Amalapuram •Andhra Pradesh
            </span>
      <div className="mt-5 text-3xl sm:text-6xl font-black text-brand-green leading-tight">
  Urdwa Solar Systems
</div>

<h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-black text-white leading-tight">
  Power Your Home
  <span className="text-white block">
    with Solar Energy
  </span>
</h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
              Clean, reliable solar with local support—built for Indian homes and businesses. Get a quick
              estimate and start your solar journey with confidence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-green text-white rounded-2xl font-bold text-base shadow-2xl hover:shadow-3xl hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
              >
                Get Free Quote <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 py-4 border border-white/40 bg-white/10 backdrop-blur-xl rounded-2xl font-bold text-white hover:bg-white/15 hover:border-white/55 transition-all duration-300 whitespace-nowrap"
              >
                Explore Services
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white/10 border border-white/15 p-4 shadow-soft">
                <div className="h-11 w-11 rounded-2xl bg-brand-green/20 grid place-items-center">
                  <CheckCircle2 className="h-5 w-5 text-brand-green" />
                </div>
                <div className="mt-3 font-semibold text-white">Local Support</div>
                <div className="mt-1 text-sm text-white/80">Quick site guidance and responsive customer support.</div>
              </div>

              <div className="rounded-2xl bg-white/10 border border-white/15 p-4 shadow-soft">
                <div className="h-11 w-11 rounded-2xl bg-brand-green/20 grid place-items-center">
                  <Wrench className="h-5 w-5 text-brand-green" />
                </div>
                <div className="mt-3 font-semibold text-white">Genuine Modules</div>
                <div className="mt-1 text-sm text-white/80">Waaree products with warranty-backed guidance.</div>
              </div>

              <div className="rounded-2xl bg-white/10 border border-white/15 p-4 shadow-soft">
                <div className="h-11 w-11 rounded-2xl bg-brand-green/20 grid place-items-center">
                  <ShieldCheck className="h-5 w-5 text-brand-green" />
                </div>
                <div className="mt-3 font-semibold text-white">Fast Execution</div>
                <div className="mt-1 text-sm text-white/80">Clear planning for smoother project coordination.</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-end">
            <div className="w-full max-w-xl rounded-[2rem] bg-white/10 border border-white/15 p-8 shadow-soft backdrop-blur-xl">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-green">Quick Connect</p>
                  <h2 className="mt-3 text-3xl font-black text-white">WhatsApp support and instant quote</h2>
                  <p className="mt-3 text-sm text-white/80 leading-relaxed">
                    Talk to us directly for pricing, site checks and fast solar estimates.
                  </p>
                </div>

                <div className="grid gap-4">
                  <a
                    href="https://wa.me/8179451780?text=Hi%20Urdwa%20Solar!%20I%27d%20like%20a%20quick%20solar%20quote."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-3xl bg-brand-green px-6 py-5 text-lg font-semibold text-white shadow-2xl transition hover:bg-brand-green/95"
                  >
                    <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-3 rounded-3xl border border-white/15 bg-white/10 px-6 py-5 text-lg font-semibold text-white transition hover:bg-white/15"
                  >
                    Request a Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

