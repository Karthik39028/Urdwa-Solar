# Urdhwa Solar Company — React (JSX) + Vite + Tailwind

A standalone React (JSX) port of the Urdhwa Solar marketing site.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

- `src/App.jsx` — root component, composes all sections
- `src/components/Navbar.jsx`, `WhatsAppFab.jsx`
- `src/components/sections/` — Hero, About, Team, Panels, Partner, Services, Moments, SolarInfo, Projects, Contact, Footer
- `src/hooks/useReveal.js` — IntersectionObserver scroll-reveal animation
- `src/assets/` — all generated images
- `tailwind.config.js` — brand colors (`brand-green: #2ECC71`, `brand-navy: #0F2A4A`) and shadows

## Customize

- **Phone / WhatsApp number**: edit `WHATSAPP` and `PHONE` in `src/components/sections/Contact.jsx` and the link in `src/components/WhatsAppFab.jsx`.
- **Brand colors**: edit `tailwind.config.js` (`brand.green`, `brand.navy`).
- **Team / Panels / Moments / Projects**: edit the data arrays at the top of each section file.
- **Map**: change the `src` of the iframe inside `Contact.jsx` to your Google Maps embed URL.
