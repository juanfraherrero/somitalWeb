import Link from 'next/link';
import activities from "@/data/activities.json";
import activities_colegios from "@/data/activities-colegios.json";
import ActivityCard from '@/components/ActivityCard';
import SectionHeading from '@/components/SectionHeading';

export const ACTIVITIES_SECTION = "actividades"

const ActivitiesSection = () => {
  return (
    <section id={ACTIVITIES_SECTION} className="bg-surface py-20 md:py-28">
      <div className="container-site">
        <SectionHeading eyebrow="Próximas aventuras" title="Actividades en Mar del Plata y alrededores">
          Salidas en contacto directo con la naturaleza: trekking en las sierras, caminatas por la costa,
          kayak en la laguna y viajes educativos. Cada experiencia se adapta a colegios, familias, turistas
          y amantes del aire libre.
        </SectionHeading>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <ActivityCard key={activity.slug} activity={activity} />
          ))}
          {activities_colegios.map((activity) => (
            <ActivityCard key={activity.slug} activity={activity} isColegio />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/actividades" className="btn-primary">Ver todas las actividades</Link>
          <Link href="/actividades/colegios" className="btn-ghost text-secondary">Actividades para colegios</Link>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
