import { Phone, Mail, MapPin } from "lucide-react";
import companyLogo from "@/assets/urdwasolarsystemslogo.png";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold">
<div className="logo-box">
              <img
                src={companyLogo}
                alt="Urdwa Solar logo"
                className="footer-logo w-28 sm:w-32 lg:w-40 object-contain"
              />
            </div>
<span className="text-lg">Urdwa Solar</span>
          </div>
          <p className="mt-3 text-sm text-white/70 max-w-xs">
            Affordable, reliable solar solutions for homes and businesses across Andhra Pradesh.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="/" className="hover:text-brand-green">About</a></li>

            <li><a href="/partner" className="hover:text-brand-green">Partners</a></li>
            <li><a href="/services" className="hover:text-brand-green">Services</a></li>
            <li><a href="/products" className="hover:text-brand-green">Products</a></li>
            <li><a href="/photos" className="hover:text-brand-green">Photos</a></li>
            <li><a href="/contact" className="hover:text-brand-green">Contact</a></li>

          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Contact</div>
<ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-green" /> +91 81794 51780</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-green" /> +91 79-81790480</li>

            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-green" /> solarurdwa@gmail.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-green" /> Kakinada, Andhra Pradesh</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 text-xs text-white/60 flex flex-wrap justify-between gap-2">
Urdwa Solar Company
          <span>Channel Partner — Waaree Energies Ltd</span>
        </div>
      </div>
    </footer>
  );
}
