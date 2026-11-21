import Image from 'next/image';
import faqsEmpresas from '@/data/faq-empresas.json';
import site from '@/data/site.json';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import WhatsAppLink from '@/components/WhatsAppLink';
import { WhatsAppIcon } from '@/components/icons';
import FaqSection from '@/sections/Faq.section';
import { pageMetadata } from '@/lib/seo';
import { whatsappLink } from '@/lib/whatsapp';

export const metadata = pageMetadata({
  title: "Team Building y Actividades para Empresas en Mar del Plata | Somital",
  description:
    "Jornadas de team building al aire libre para empresas, startups y equipos de software en Mar del Plata: trekking guiado en las sierras, la costa o la laguna para fortalecer la confianza y la unión del equipo.",
  path: "/empresas",
  image: "/activities/trekkingSierras/medium/trekkingSierras_4.webp",
});

const PROPOSAL_MESSAGE = "¡Hola Somital! Quiero organizar una actividad para mi equipo. Empresa: ... / Cantidad de personas: ... / Destino que nos interesa: ... / Fecha tentativa: ...";

const benefits = [
  { title: 'Confianza', text: 'Atravesar un sendero juntos, ayudarse en un paso difícil y llegar a la cima en grupo genera una confianza que no se arma en una reunión.' },
  { title: 'Comunicación', text: 'Fuera de la oficina y lejos de las pantallas, el equipo se escucha distinto. Las dinámicas en la naturaleza abren conversaciones nuevas.' },
  { title: 'Unión del equipo', text: 'Una experiencia compartida que el equipo recuerda y cuenta. Ideal para integrar ingresos nuevos o reunir a equipos remotos.' },
  { title: 'Bienestar', text: 'Aire libre, movimiento y desconexión: una pausa real que se nota en la energía y el clima del equipo al volver.' },
];

const destinations = [
  { title: 'Sierras de Mar del Plata', text: 'Trekking por senderos serranos con vistas abiertas, a pocos minutos de la ciudad. Ideal para una jornada completa.', image: '/activities/trekkingSierras/medium/trekkingSierras_3.webp' },
  { title: 'Costa y acantilados', text: 'Caminata por la costa atlántica con dinámicas de equipo frente al mar.', image: '/activities/expPlaya/medium/expPlaya_1.webp' },
  { title: 'Laguna de Mar Chiquita', text: 'Naturaleza, aves y actividades en la laguna, una reserva de biósfera a minutos de Mar del Plata.', image: '/activities/expLaguna/medium/expLaguna_1.webp' },
  { title: 'Sierra de la Ventana', text: 'Un viaje de más de un día para equipos que quieren un offsite distinto, con trekking en las sierras más altas de la provincia.', image: '/activities/sierraVentana/medium/sierraVentana_1.webp' },
];

const audiences = ['Equipos de software y tecnología', 'Startups', 'Empresas grandes y pymes', 'Equipos remotos e híbridos', 'Offsites y jornadas de planificación', 'Integración de ingresos nuevos'];

export default function EmpresasPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Empresas y equipos"
        title="Team building en la naturaleza para empresas en Mar del Plata"
        image="/activities/trekkingSierras/medium/trekkingSierras_4.webp"
        imageAlt="Equipo de trabajo haciendo trekking en las sierras de Mar del Plata"
        breadcrumbs={[
          { name: "Inicio", path: "/" },
          { name: "Empresas", path: "/empresas" },
        ]}
      >
        <p>
          ¿Querés fortalecer la confianza y la unión de tu equipo? Salí con Somital a la naturaleza.
          Elegís el lugar y nosotros armamos una <strong>jornada guiada con dinámicas pensadas para equipos de trabajo</strong>.
        </p>
        <WhatsAppLink href={whatsappLink(PROPOSAL_MESSAGE)} event="empresa_lead" label="empresas_hero" className="btn-whatsapp mt-8">
          <WhatsAppIcon />
          Pedir propuesta para mi equipo
        </WhatsAppLink>
      </PageHeader>

      <section className="container-site py-16 md:py-24">
        <SectionHeading eyebrow="Por qué salir con el equipo" title="Lo que un equipo se lleva de una salida a la naturaleza">
          Las mejores conexiones de un equipo no pasan en una sala de reuniones. Una actividad al aire libre, guiada y
          sin presiones, es la forma más simple de <strong>generar confianza, mejorar la comunicación y unir al equipo</strong>.
        </SectionHeading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, text }) => (
            <div key={title} className="rounded-3xl bg-surface p-6">
              <h3 className="font-display text-lg font-bold text-secondary">{title}</h3>
              <p className="mt-2 text-secondary/80">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Elegí el destino" title="¿A dónde quiere ir tu equipo?">
            Proponemos distintos lugares y adaptamos el recorrido al grupo, sin importar la experiencia o el estado físico.
          </SectionHeading>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map(({ title, text, image }) => (
              <div key={title} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-secondary/10">
                <div className="relative aspect-[16/10]">
                  <Image src={image} alt={`Actividad para empresas en ${title}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-secondary">{title}</h3>
                  <p className="mt-2 text-secondary/80">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <SectionHeading eyebrow="Para quién es" title="Pensado para equipos que quieren algo distinto">
          Desde {site.foundingYear} guiamos grupos en la naturaleza. Hoy llevamos esa experiencia a los equipos de trabajo.
        </SectionHeading>
        <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
          {audiences.map((audience) => (
            <li key={audience} className="chip !px-4 !py-2 !text-sm">{audience}</li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <WhatsAppLink href={whatsappLink(PROPOSAL_MESSAGE)} event="empresa_lead" label="empresas_para_quien" className="btn-whatsapp text-lg">
            <WhatsAppIcon className="h-6 w-6" />
            Quiero una salida para mi equipo
          </WhatsAppLink>
        </div>
      </section>

      <FaqSection faqs={faqsEmpresas} title="Preguntas frecuentes de empresas" />
    </main>
  );
}
