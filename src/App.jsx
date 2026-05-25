import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/sections/Hero.jsx";
import { About } from "./components/sections/About.jsx";
import { WhyChooseUs } from "./components/sections/WhyChooseUs.jsx";
import { WaareePartnerPage } from "./components/sections/WaareePartnerPage.jsx";
import { Panels } from "./components/sections/Panels.jsx";
import { Photos } from "./components/sections/Photos.jsx";
import { Services } from "./components/sections/Services.jsx";
import { SolarInfo } from "./components/sections/SolarInfo.jsx";
import { Contact } from "./components/sections/Contact.jsx";
import { Products } from "./components/sections/Products.jsx";
import { Footer } from "./components/sections/Footer.jsx";
import { WhatsAppFab } from "./components/WhatsAppFab.jsx";
import { useReveal } from "./hooks/useReveal.js";
import { Seo } from "./components/Seo.jsx";

import { InitialLoader } from "./components/InitialLoader.jsx";

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo />
      <InitialLoader />
      <Navbar />


      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <About />
              <WhyChooseUs />
              <WaareePartnerPage />

              <Photos />

              <Services />
              <SolarInfo />
              <Contact />
            </main>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/partner" element={<WaareePartnerPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
      <WhatsAppFab />
      <Toaster position="top-center" />
    </div>
  );
}




