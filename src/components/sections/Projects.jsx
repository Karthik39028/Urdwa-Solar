import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  { img: p1, title: "Residential Rooftop", loc: "Vijayawada" },
  { img: p2, title: "Industrial Warehouse", loc: "Visakhapatnam" },
  { img: p3, title: "Solar Farm", loc: "Anantapur" },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center reveal max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-wide uppercase text-brand-green">Our Work</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">Recent solar projects across Andhra Pradesh</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="reveal group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-card transition">
              <img src={p.img} alt={`${p.title} in ${p.loc}`} loading="lazy" className="w-full h-64 object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 text-white">
                <div className="font-semibold">{p.title}</div>
                <div className="text-xs opacity-80">{p.loc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
