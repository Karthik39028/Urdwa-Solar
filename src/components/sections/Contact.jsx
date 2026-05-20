import { useState } from "react";
import { Phone, MapPin, MessageCircle, Mail, Send } from "lucide-react";
import toast from "react-hot-toast";

const PHONE_PRIMARY = "+91 81794 51780";
const PHONE_SECONDARY = "+91 79-81790480";

const WHATSAPP = "8179451780";
const WHATSAPP_PRIMARY = "8179451780";
const WHATSAPP_SECONDARY = "7981790480";


export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", location: "" });

  const onSubmit = (e) => {
    e.preventDefault();

    const phoneDigits = String(form.phone || "").replace(/\D/g, "");
    const isValidPhone = phoneDigits.length === 10 || (phoneDigits.length === 12 && phoneDigits.startsWith("91"));

    if (!form.name || !phoneDigits || !isValidPhone) {
      toast.error("Please enter a valid name and phone number (10 digits).");
      return;
    }

    const displayPhone =
      phoneDigits.length === 12 ? `+${phoneDigits}`.replace("+91", "+91 ") : form.phone;

    const msg = `Hi Urdwa Solar! I'm ${form.name} from ${form.location || "AP"}. Phone: ${displayPhone}. I'd like a free solar quote.`;
    window.open(`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent(msg)}`, "_blank");
    toast.success("Thanks! Redirecting you to WhatsApp.");
    setForm({ name: "", phone: "", location: "" });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center reveal max-w-2xl mx-auto">
          <span className="text-sm font-semibold tracking-wide uppercase text-brand-green">Contact Us</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-navy">Get a free solar quote today</h2>
          <p className="mt-3 text-muted-foreground">Fill the form and our team will reach out within 24 hours.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="reveal rounded-2xl bg-card p-7 sm:p-8 shadow-card border border-border/50 space-y-4">
            <div>
              <label className="text-sm font-medium text-brand-navy">Full Name</label>
              <input
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-brand-navy">Phone Number</label>
              <input
                required
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40"
                placeholder="+91"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-brand-navy">Location</label>
              <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/40" placeholder="City / Town" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-brand-green text-brand-green-foreground px-5 py-3 font-semibold hover:opacity-90 transition shadow-glow">
              Send Enquiry <Send className="h-4 w-4" />
            </button>
          </form>

          <div className="reveal space-y-4">
            <div className="rounded-2xl bg-card p-6 shadow-soft border border-border/50">
              <h3 className="font-semibold text-brand-navy">Reach us directly</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-brand-green" /> {PHONE_PRIMARY}</li>
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-brand-green" /> {PHONE_SECONDARY}</li>

                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand-green" /> solarurdwa@gmail.com</li>
                <li>
                  <button
                    type="button"
                    className="flex items-center gap-3 cursor-pointer hover:text-brand-green transition-colors"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/place/16.997489883824745,82.24859237515611/@16.997489883824745,82.24859237515611,17z",
                        "_blank"
                      )
                    }
                  >
                    <MapPin className="h-4 w-4 text-brand-green" /> Kakinada, Andhra Pradesh
                  </button>
                </li>
              </ul>
<div className="mt-2 text-sm font-medium text-brand-navy">Urdwa Solar</div>
                <button
                    type="button"
                    className="mt-1 flex items-center gap-3 cursor-pointer hover:text-brand-green transition-colors"
                    onClick={() => {
                      const phoneDigits = String(PHONE || "").replace(/\D/g, "");
                      const displayPhone = phoneDigits.length === 12 ? `+${phoneDigits}` : PHONE_PRIMARY;

                      const msg = `Hi Urdwa Solar! I'd like a free solar quote.`;
                      window.open(`https://wa.me/${WHATSAPP_PRIMARY}?text=${encodeURIComponent(msg)}`, "_blank");
                    }}
                  >
                    <MessageCircle className="h-4 w-4 text-brand-green" /> Chat on WhatsApp
                  </button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft border border-border/50">
<iframe
                title="Urdwa Solar Location"
                src="https://www.google.com/maps?q=16.997489883824745,82.24859237515611&z=17&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
