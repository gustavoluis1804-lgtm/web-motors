import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BrandMarquee } from "./components/BrandMarquee";
import { FeaturedCars } from "./components/FeaturedCars";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { SellCTA } from "./components/SellCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-body text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <BrandMarquee />
        <FeaturedCars />
        <Stats />
        <Services />
        <SellCTA />
      </main>
      <Footer />
    </div>
  );
}
