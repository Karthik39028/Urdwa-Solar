import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));

    if (!els.length) return;

    // Accessibility: if user prefers reduced motion, show all content immediately.
    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      {
        threshold: 0.12,
        // trigger a bit before elements fully enter the viewport
        rootMargin: "0px 0px -10% 0px",
      }
    );

    // In case some elements are already in view on load,
    // mark them immediately so content isn't stuck at opacity:0.
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isInViewport = rect.bottom >= 0 && rect.top <= window.innerHeight;
      if (isInViewport) el.classList.add("in-view");
      io.observe(el);
    });

    // Fallback: if IntersectionObserver isn't firing for some reason,
    // ensure content becomes visible after first paint.
    const t = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("in-view"));
    }, 800);

    return () => {
      window.clearTimeout(t);
      io.disconnect();
    };
  }, []);
}

