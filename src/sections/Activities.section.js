import dynamic from 'next/dynamic';
import activities from "@/data/activities.json";
import activities_colegios from "@/data/activities-colegios.json";
import { INSTITUCION } from '@/types/activity.type';
const CarouselActivities = dynamic(() => import("../components/CarouselActivities"));

export const ACTIVITIES_CAROUSEL = "actividades-carousel"

const ActivitiesSection = () => {
  return (
    <section id={ACTIVITIES_CAROUSEL} className="max-w-7xl mx-auto flex flex-wrap justify-center mt-16 px-6">
      <div className="w-full ">
        <h2 className="my-heading2 mb-4 text-center">
          Actividades en Mar del Plata
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-8 "></div>
        <p className="max-w-4xl mx-auto text-lg text-secondary mb-3">
          En Somital ofrecemos salidas en contacto directo con la naturaleza.
          Cada experiencia se adapta a grupos de colegios, familias, turistas y amantes del aire libre.
        </p>
      </div>
      <CarouselActivities activities={[...activities.filter(act => act.slug !== "/actividad-rincon-grande"), ...activities_colegios.map(act => { return { ...act, type: INSTITUCION } })]} />
    </section>
  );
};

export default ActivitiesSection;