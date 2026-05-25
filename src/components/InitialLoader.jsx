import { useEffect, useState } from "react";
import companyLogo from "@/assets/urdwasolarsystemslogo.png";

export function InitialLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const finish = () => {
      if (cancelled) return;
      setVisible(false);
    };

    // Hide loader only after the full window load (as requested), but keep it
    // visible for a minimum duration so it doesn't flash on fast loads.
    const MIN_VISIBLE_MS = 2500;
    const start = Date.now();

    const finishWithMinDelay = () => {
      const elapsed = Date.now() - start;
      const remaining = MIN_VISIBLE_MS - elapsed;
      window.setTimeout(finish, Math.max(0, remaining));
    };

    if (document.readyState === "complete") {
      finishWithMinDelay();
      return;
    }

    window.addEventListener("load", finishWithMinDelay, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", finish);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-white"
      style={{
        transition: "opacity 600ms ease",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
      role="status"


      aria-live="polite"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center">
        <img
          src={companyLogo}
          alt="Urdwa Solar logo"
          className="w-40 sm:w-48 md:w-56 object-contain"
        />

        {/* loading line (animated underline) */}
        <div className="mt-6 w-[220px] max-w-[70vw] h-[3px] bg-black/10 rounded-full overflow-hidden">
          <div
            className="h-full w-full bg-brand-green origin-left"
            style={{ animation: "ldr 1.1s ease-in-out 1 forwards" }}
          />
        </div>

        <style>{`
          @keyframes ldr {
            0% { transform: scaleX(0); opacity: 0.5; }
            60% { transform: scaleX(1); opacity: 1; }
            100% { transform: scaleX(1); opacity: 1; }
          }
        `}</style>


        <div className="mt-3 text-sm font-semibold text-brand-navy/80">Loading...</div>
      </div>
    </div>
  );
}

