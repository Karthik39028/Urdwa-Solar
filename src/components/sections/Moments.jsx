import srWaareeCover from "@/assets/sr-waaree-cover.jpg";
import group from "@/assets/event-group.jpg";
import launch from "@/assets/event-launch.jpg";
import inauguration from "@/assets/event-inauguration.jpg";

const moments = [
  { img: inauguration, title: "Office Inauguration", caption: "Our official launch in Andhra Pradesh" },
  { img: srWaareeCover, title: "Partnership Signing", caption: "Channel partner agreement with Waaree" },
  { img: group, title: "Team & Partners", caption: "With our manufacturing partners" },
  { img: launch, title: "Product Showcase", caption: "Unveiling our solar panel range" },
];

export function Moments() {
  return (
    <section id="moments" className="py-20 sm:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center reveal max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-wide uppercase text-brand-green">Our Journey</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">Milestones &amp; Collaborations</h2>
          <p className="mt-3 text-muted-foreground">A glimpse into our inauguration, partnerships and the moments that shape Urdwa Solar.</p>

        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {moments.map((m, i) => (
            <div key={m.title} className={`reveal group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-card transition ${i === 0 ? "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2" : ""}`}>
              <img src={m.img} alt={m.title} loading="lazy" className={`w-full object-cover group-hover:scale-105 transition duration-500 ${i === 0 ? "h-72 sm:h-full" : "h-56"}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/20 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <div className="font-semibold">{m.title}</div>
                <div className="text-xs opacity-85 mt-0.5">{m.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
