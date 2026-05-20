import { Hero } from "@/components/sections/Hero.jsx";
import { About } from "@/components/sections/About.jsx";
import { DCDB } from "@/components/sections/DCDB.jsx";
import { Benefits } from "@/components/sections/Benefits.jsx";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs.jsx";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Benefits />
      <DCDB />
      <WhyChooseUs />
    </main>
  );
}




