import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/8179451780?text=${encodeURIComponent(
        "Hello Urdwa Solar! Interested in solar quote."
      )}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-brand-green text-brand-green-foreground grid place-items-center shadow-glow hover:scale-110 transition"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

