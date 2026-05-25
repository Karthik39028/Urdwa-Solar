import { useEffect } from "react";
import companyLogo from "@/assets/urdwasolarsystemslogo.png";

const TITLE = "Urdwa Solar Systems | Solar Company in Andhra Pradesh";
const DESCRIPTION =
  "Urdwa Solar Systems provides rooftop solar solutions, solar kits, Waaree products, and renewable energy services in Andhra Pradesh.";

const KEYWORDS =
  "solar company Andhra Pradesh, Waaree dealer, rooftop solar, solar panels Amalapuram, Urdwa Solar";


const PHONE = "+91 81794 51780";
const EMAIL = "solarurdwa@gmail.com";

export function Seo() {
  useEffect(() => {
    document.title = TITLE;

    const upsertMeta = ({ selector, createAttrs, content }) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        Object.entries(createAttrs).forEach(([k, v]) => el.setAttribute(k, v));
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    upsertMeta({
      selector: 'meta[name="description"]',
      createAttrs: { name: "description" },
      content: DESCRIPTION,
    });

    upsertMeta({
      selector: 'meta[property="og:title"]',
      createAttrs: { property: "og:title" },
      content: TITLE,
    });
    upsertMeta({
      selector: 'meta[property="og:description"]',
      createAttrs: { property: "og:description" },
      content: DESCRIPTION,
    });
    upsertMeta({
      selector: 'meta[property="og:type"]',
      createAttrs: { property: "og:type" },
      content: "website",
    });
    upsertMeta({
      selector: 'meta[property="og:locale"]',
      createAttrs: { property: "og:locale" },
      content: "en_IN",
    });
    upsertMeta({
      selector: 'meta[name="keywords"]',
      createAttrs: { name: "keywords" },
      content: KEYWORDS,
    });

    upsertMeta({
      selector: 'meta[property="og:url"]',
      createAttrs: { property: "og:url" },
      content: window.location.href,
    });
    upsertMeta({
      selector: 'meta[property="og:image"]',
      createAttrs: { property: "og:image" },
      content: companyLogo,
    });

    upsertMeta({
      selector: 'meta[name="twitter:card"]',
      createAttrs: { name: "twitter:card" },
      content: "summary_large_image",
    });
    upsertMeta({
      selector: 'meta[name="twitter:title"]',
      createAttrs: { name: "twitter:title" },
      content: TITLE,
    });
    upsertMeta({
      selector: 'meta[name="twitter:description"]',
      createAttrs: { name: "twitter:description" },
      content: DESCRIPTION,
    });
    upsertMeta({
      selector: 'meta[name="twitter:image"]',
      createAttrs: { name: "twitter:image" },
      content: companyLogo,
    });

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Urdwa Solar Company",
      url: window.location.href,
      telephone: PHONE,
      email: EMAIL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kakinada",
        addressRegion: "Andhra Pradesh",
        addressCountry: "IN",
      },
      logo: companyLogo,
      areaServed: ["Andhra Pradesh"],
    };

    const existing = document.getElementById("urdwa-localbusiness-ldjson");
    if (existing) {
      existing.textContent = JSON.stringify(jsonLd);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "urdwa-localbusiness-ldjson";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, []);

  return null;
}

