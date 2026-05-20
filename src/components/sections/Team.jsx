import ceo from "@/assets/team-ceo.jpg";
import eng from "@/assets/team-engineer.jpg";
import tech from "@/assets/team-tech.jpg";

const team = [
  { img: ceo, name: "Ravi Teja", role: "Founder & CEO" },
  { img: eng, name: "Suresh Kumar", role: "Lead Solar Engineer" },
  { img: tech, name: "Mahesh Reddy", role: "Senior Technician" },
];

export function Team() {
  return (
    <section id="team" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center reveal max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-wide uppercase text-brand-green">Our Team</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">Meet the people behind Urdwa Solar</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.name} className="reveal rounded-2xl overflow-hidden bg-card shadow-soft hover:shadow-card transition border border-border/50">
              <div className="aspect-square overflow-hidden bg-secondary">
                <img src={m.img} alt={`${m.name}, ${m.role}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <div className="font-semibold text-brand-navy">{m.name}</div>
                <div className="text-sm text-brand-green">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
