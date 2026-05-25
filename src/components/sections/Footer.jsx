import { Phone, Mail, MapPin } from "lucide-react";
import companyLogo from "@/assets/urdwasolarsystemslogo.png";

export function Footer() {
  return (
<footer className="bg-[#0A0A0A] text-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-8">

        {/* LEFT SECTION */}
        <div>

          <div className="flex flex-col items-start">

            {/* LARGE LOGO */}
<div className="flex items-center justify-start w-full -mt-10">              <img
  src={companyLogo}
  alt="Urdwa Solar logo"
  style={{ width: "200px", maxWidth: "none" }}
  className="object-contain h-auto"
/>

            </div>

            {/* BRAND NAME */}
            <span className="mt-2 text-2xl font-black text-white">
              Urdwa Solar
            </span>

          </div>

          {/* DESCRIPTION */}
          <p className="mt-4 text-sm text-white/70 max-w-sm leading-relaxed">
            Affordable, reliable solar solutions for homes and businesses
            across Andhra Pradesh.
          </p>

        </div>

        {/* QUICK LINKS */}
        <div>

          <div className="font-semibold mb-3 text-lg">
            Quick Links
          </div>

          <ul className="space-y-2 text-sm text-white/70">

            <li>
              <a href="/" className="hover:text-brand-green">
                About
              </a>
            </li>

            <li>
              <a href="/partner" className="hover:text-brand-green">
                Partners
              </a>
            </li>

            <li>
              <a href="/services" className="hover:text-brand-green">
                Services
              </a>
            </li>

            <li>
              <a href="/products" className="hover:text-brand-green">
                Products
              </a>
            </li>

            <li>
              <a href="/photos" className="hover:text-brand-green">
                Photos
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-brand-green">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* CONTACT */}
        <div>

          <div className="font-semibold mb-3 text-lg">
            Contact
          </div>

          <ul className="space-y-3 text-sm text-white/70">

            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-green" />
              +91 81794 51780
            </li>

            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-green" />
              +91 79-81790480
            </li>

            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-green" />
              solarurdwa@gmail.com
            </li>

            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-green" />
              Kakinada, Andhra Pradesh
            </li>

          </ul>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 text-xs text-white/60 flex flex-wrap justify-between gap-2">

          <span>Urdwa Solar Company</span>

          <span>
            Channel Partner — Waaree Energies Ltd
          </span>

        </div>

      </div>

    </footer>
  );
}