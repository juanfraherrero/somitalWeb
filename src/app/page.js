import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/Hero.section";
import AboutSection from "@/sections/About.section";
import ActivitiesSection from "@/sections/Activities.section";
import LocationSection from "@/sections/Location.section";
import MapSection from "@/sections/Map.section";
import FaqSection from "@/sections/Faq.section";

export const metadata = {
  title: "Somital | Turismo Aventura y Experiencias en la Naturaleza en Mar del Plata",
  description:
    "Vení a vivir turismo aventura en Mar del Plata y alrededores. Trekking, parapente, tirolesa, kayak y actividades para colegios en plena naturaleza. ¡Consultanos!",
  alternates: {
    canonical: "https://www.somital.com.ar",
  },
};



export default function Home() {
  return (
    <>
      <main className="relative">
        {/* TITULO PARA SEO */}
        <h1 className="sr-only">Somital: Experiencias Únicas en la Naturaleza en Mar del Plata, Sierras De Los Padres, Laguna de los Padres</h1>
        {/* Turismo aventura en Mar del Plata y alrededores con Somital */}
        {/* HERO SECTION */}
        <HeroSection />

        {/* ABOUT SECTION */}
        <AboutSection />

        {/* SECCIÓN DEL CARROUSEL DE CARDS */}
        <ActivitiesSection />


        {/* SECCIÓN DE UBICACIONES */}
        <LocationSection />

        {/* SECCIÓN DE MAPA CON POSICIONES */}
        <MapSection />

        {/* SECCIÓN DE Preguntas Frecuentes */}
        <FaqSection />
      </main>
    </>
  );
}
