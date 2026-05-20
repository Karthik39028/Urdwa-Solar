import godown1 from "@/assets/godown-1.jpeg";
import godown2 from "@/assets/godown-2.jpeg";
import godown3 from "@/assets/godown-3.jpeg";
import godown4 from "@/assets/godown-4.jpeg";
import waaree1 from "@/assets/waaree-1.jpeg";
import waaree2 from "@/assets/waaree-2.jpeg";
import waaree3 from "@/assets/waaree-3.jpeg";
import waareeInaug from "@/assets/waaree-inaug.jpeg";
import solarPanel from "@/assets/solar-panel.png";
import panelInstallation1 from "@/assets/Panel_Installation.png";
import panelInstallation2 from "@/assets/Panel-installation (1).png";
import panelInstallation3 from "@/assets/Panel-installation (2).png";

const photos = [
  { img: godown1, alt: "Godown setup", caption: "Material handling setup for smooth deliveries" },
  { img: godown2, alt: "Warehouse stock", caption: "Reliable module stock for timely project execution" },
  { img: godown3, alt: "Dispatch area", caption: "Organized dispatch for faster project planning" },
  { img: godown4, alt: "Quality checks", caption: "Basic incoming checks to support genuine modules" },
  { img: waaree1, alt: "Waaree partnership", caption: "Authorized channel partner collaboration" },
  { img: waaree2, alt: "Product showcase", caption: "IEC-compliant module presentation" },
  { img: waaree3, alt: "Site readiness", caption: "Project readiness with dependable supply" },
  { img: waareeInaug, alt: "Inauguration", caption: "Milestones that strengthen customer trust" },
  { img: panelInstallation1, alt: "Panel installation 1", caption: "Installation at a residential rooftop" },
  { img: panelInstallation2, alt: "Panel installation 2", caption: "Solar panel mounting and wiring in progress" },
  { img: panelInstallation3, alt: "Panel installation 3", caption: "Completed solar installation ready for commissioning" },
  { img: solarPanel, alt: "Solar panel", caption: "Solar panel product highlights" },
];


export function Photos() {
  return (
    <section id="photos" className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center reveal max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wide uppercase text-brand-green">Photos</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">Photo Gallery</h2>
          <p className="mt-4 text-muted-foreground text-lg">Browse our collection of images.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((p) => (
            <div key={p.alt} className="reveal group">
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm font-semibold text-brand-navy">{p.alt}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.caption}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
