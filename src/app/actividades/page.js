import Link from 'next/link';
import activities from '@/data/activities.json';
import activities_colegios from '@/data/activities-colegios.json';
import ActivityCard from '@/components/ActivityCard';
import JsonLd from '@/components/JsonLd';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import CommunitySection from '@/sections/Community.section';
import { itemListSchema, pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "Actividades de Turismo Aventura en Mar del Plata | Somital",
  description:
    "Explorá todas nuestras actividades en la naturaleza: trekking en las sierras, senderismo, mountain bike, parapente, kayak y salidas educativas en Mar del Plata y alrededores.",
  path: "/actividades",
});

export default function ActividadesPage() {
  return (
    <main>
      <JsonLd data={itemListSchema("Actividades en Mar del Plata - Somital", activities)} />
      <PageHeader
        eyebrow="Actividades"
        title="Actividades en Mar del Plata y alrededores"
        image="/activities/trekkingSierras/trekkingSierras_2.jpg"
        imageAlt="Grupo en mountain bike por las sierras de Mar del Plata"
        breadcrumbs={[{ name: "Inicio", path: "/" }, { name: "Actividades", path: "/actividades" }]}
      >
        <p>
          En Somital diseñamos experiencias únicas de turismo aventura y <strong>actividades al aire libre en Mar del Plata</strong> y
          la región. Desde trekking en las sierras y salidas en kayak hasta jornadas de integración para grupos:
          propuestas para todas las edades y niveles.
        </p>
      </PageHeader>

      <section className="container-site py-16 md:py-24">
        <SectionHeading eyebrow="Para vos, tu familia o tu equipo" title="Salidas abiertas a todos" align="left">
          Si buscás <strong>desconectarte de la rutina</strong>, disfrutar de la naturaleza y vivir experiencias auténticas, llegaste al lugar indicado.
        </SectionHeading>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <ActivityCard key={activity.slug} activity={activity} />
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Colegios e instituciones" title="Salidas educativas para colegios" align="left">
            Programas para primaria y secundaria con valor pedagógico.{" "}
            <Link href="/actividades/colegios" className="font-bold text-primary hover:underline">Ver todo para colegios</Link>
          </SectionHeading>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities_colegios.map((activity) => (
              <ActivityCard key={activity.slug} activity={activity} isColegio />
            ))}
          </div>
        </div>
      </section>

      <CommunitySection label="actividades" />
    </main>
  );
}
