import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import companyLogo from "@/assets/Companylogo.png";
import waareeLogo from "@/assets/Waaree-logo.png";


const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/partner", label: "Partners & Collaborations" },
  {
    href: "/products",
    label: "Products",
    subItems: [
      { href: "/products#products-panels", label: "Panels" },
      { href: "/products#products-fuse-connectors", label: "Fuse Connectors" },
      { href: "/products#products-wiring", label: "Wiring & Cables" },
      { href: "/products#products-acdb", label: "ACDB" },
      { href: "/products#products-acdb-elmex", label: "ACDB - Elmex & Havells" },
      { href: "/products#products-dcdb", label: "DCDB" },
    ],
  },
  { href: "/photos", label: "Photos" },
  { href: "/contact", label: "Connect" },
];




export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const productMenuTimer = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (productMenuTimer.current) {
        window.clearTimeout(productMenuTimer.current);
      }
    };
  }, []);

  const openProductMenu = () => {
    if (productMenuTimer.current) {
      window.clearTimeout(productMenuTimer.current);
    }
    productMenuTimer.current = window.setTimeout(() => setProductMenuOpen(true), 120);
  };

  const closeProductMenu = () => {
    if (productMenuTimer.current) {
      window.clearTimeout(productMenuTimer.current);
    }
    productMenuTimer.current = window.setTimeout(() => setProductMenuOpen(false), 240);
  };

  return (
    <header
      className={`navbar fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-white/70 backdrop-blur"
      }`}
    >
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 min-h-[68px] md:min-h-[96px] flex items-center justify-between gap-4">
        <a href="/" className="logo flex items-center font-bold text-brand-navy">
          <div className="logo-box flex items-center shrink-0">
            <img
              src={companyLogo}
alt="Urdwa Solar logo"
              className="max-h-full max-w-full h-auto w-auto object-contain block"
            />
          </div>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-foreground/80 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <li
              key={l.href}
              className={l.subItems ? "relative" : undefined}
              onMouseEnter={l.subItems ? openProductMenu : undefined}
              onMouseLeave={l.subItems ? closeProductMenu : undefined}
            >
              <a href={l.href} className="hover:text-brand-green transition-colors inline-flex items-center gap-1">
                {l.label}
              </a>
              {l.subItems ? (
                <div
                  onMouseEnter={openProductMenu}
                  onMouseLeave={closeProductMenu}
                  className={`absolute left-0 top-full z-50 mt-3 min-w-[220px] rounded-3xl border border-border/70 bg-white p-3 shadow-soft transition-all duration-200 ${
                    productMenuOpen
                      ? "visible opacity-100"
                      : "invisible opacity-0 pointer-events-none"
                  }`}
                >
                  {l.subItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block rounded-2xl px-3 py-2 text-sm text-foreground/80 hover:bg-brand-green/10 hover:text-brand-green transition"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
        <div className="flex md:ml-6 flex-col items-center justify-center text-center w-[120px] sm:w-[180px]">
          <img
            src={waareeLogo}
            alt="Waaree logo"
            className="h-10 sm:h-16 w-auto object-contain block"
          />
          <span className="mt-1 hidden sm:block text-sm font-semibold text-brand-green uppercase tracking-wide">
            Channel Partner
          </span>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t bg-white">
          <ul className="px-4 py-3 flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-1 text-foreground/80">
                  {l.label}
                </a>
                {l.subItems ? (
                  <div className="mt-2 flex flex-col gap-1 pl-4">
                    {l.subItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-2xl px-3 py-2 text-sm text-foreground/80 hover:bg-brand-green/10 hover:text-brand-green"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
