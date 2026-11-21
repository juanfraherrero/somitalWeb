import HeroSection from "@/sections/Hero.section";
import AudiencesSection from "@/sections/Audiences.section";
import AboutSection from "@/sections/About.section";
import ActivitiesSection from "@/sections/Activities.section";
import CommunitySection from "@/sections/Community.section";
import LocationSection from "@/sections/Location.section";
import FaqSection from "@/sections/Faq.section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Trekking y Senderismo en Mar del Plata | Somital Aventuras",
  description:
    "Salidas guiadas de trekking y senderismo en las sierras y la costa de Mar del Plata, salidas educativas para colegios y una comunidad de WhatsApp para caminar juntos. ¡Sumate!",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <HeroSection />

      <AudiencesSection />

      <ActivitiesSection />

      <CommunitySection label="home" />

      <AboutSection />

      <LocationSection />

      <FaqSection />
    </main>
  );
}
