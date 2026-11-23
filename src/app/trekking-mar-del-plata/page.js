import Image from 'next/image';
import Link from 'next/link';
import activities from '@/data/activities.json';
import activities_colegios from '@/data/activities-colegios.json';
import faqsTrekking from '@/data/faq-trekking.json';
import ActivityCard from '@/components/ActivityCard';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import WhatsAppLink from '@/components/WhatsAppLink';
import { WhatsAppIcon } from '@/components/icons';
import CommunitySection from '@/sections/Community.section';
import FaqSection from '@/sections/Faq.section';
import { pageMetadata } from '@/lib/seo';
import { whatsappLink } from '@/lib/whatsapp';

export const metadata = pageMetadata({
  title: "Trekking en Mar del Plata: Salidas Guiadas de Senderismo | Somital",
  description:
    "Trekking y senderismo guiado en Mar del Plata: salidas a las sierras, la costa y Mar Chiquita para todos los niveles. Qué llevar, dificultad, mejores lugares y próximas salidas.",
  path: "/trekking-mar-del-plata",
});

const zones = [
  {
    title: 'Sierras de Mar del Plata',
    text: 'La zona de Sierra de los Padres y La Peregrina, a pocos minutos de la ciudad, es el clásico para trekking: senderos entre roca, pastizal serrano y vistas panorámicas. También es ideal para mountain bike.',
    image: '/activities/trekkingSierras/medium/trekkingSierras_3.webp',
    alt: 'Cerro de las sierras de Mar del Plata ideal para trekking',
    href: '/actividades/trekking-en-sierras-de-mar-del-plata',
  },
  {
    title: 'Costa sur y acantilados',
    text: 'Caminatas frente al mar con acantilados, playas extensas y médanos. Un trekking de playa distinto, perfecto para principiantes y familias.',
    image: '/activities/expPlaya/medium/expPlaya_2.webp',
    alt: 'Trekking por la costa y los médanos al sur de Mar del Plata',
    href: '/actividades/colegios/actividad-en-la-playa',
  },
  {
    title: 'Laguna de Mar Chiquita',
    text: 'Senderos llanos junto a la albufera, avistaje de aves y la posibilidad de combinar la caminata con kayak o stand up paddle.',
    image: '/activities/expLaguna/medium/expLaguna_2.webp',
    alt: 'Senderismo junto a la Laguna de Mar Chiquita',
    href: '/actividades/colegios/actividad-en-la-laguna-mar-chiquita',
  },
];

const levels = [
  { name: 'Inicial', text: 'Recorridos cortos y sin grandes desniveles. Para quienes caminan por primera vez, familias y chicos.' },
  { name: 'Intermedio', text: 'Varias horas de caminata con subidas y terreno irregular. Para quienes ya hacen actividad física.' },
  { name: 'Avanzado', text: 'Jornadas largas, mayor desnivel y tramos de roca. Para quienes quieren un desafío.' },
];

const checklist = [
  'Calzado de trekking o zapatillas con buena suela',
  'Mochila chica con al menos 1,5 litros de agua',
  'Ropa cómoda en capas y un rompevientos',
  'Gorro, anteojos de sol y protector solar',
  'Comida liviana: frutas, frutos secos, sándwich',
  'Medicación personal y documento',
];

const trekkingActivities = [
  ...activities.filter((a) => a.chips.includes('Trekking')).map((a) => ({ activity: a, isColegio: false })),
  ...activities_colegios.filter((a) => a.chips.some((c) => c.includes('Trekking'))).map((a) => ({ activity: a, isColegio: true })),
];

export default function TrekkingPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Trekking · Senderismo · Caminatas"
        title="Trekking en Mar del Plata"
        image="/foto-nosotros.jpg"
        imageAlt="Grupo de trekking caminando hacia las sierras cerca de Mar del Plata"
        breadcrumbs={[{ name: "Inicio", path: "/" }, { name: "Trekking en Mar del Plata", path: "/trekking-mar-del-plata" }]}
      >
        <p>
          Salidas guiadas de trekking y senderismo por las sierras, la costa y las lagunas de Mar del Plata.
          Para todos los niveles, en grupo y con guías que conocen cada sendero.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsAppLink href={whatsappLink("¡Hola Somital! Quiero saber cuándo es la próxima salida de trekking.")} label="trekking_hero" className="btn-whatsapp">
            <WhatsAppIcon />
            Consultar próxima salida
          </WhatsAppLink>
          <a href="#salidas" className="btn-ghost text-white">Ver salidas</a>
        </div>
      </PageHeader>

      <section className="container-site py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Senderismo cerca de la ciudad</span>
            <h2 className="my-heading2 mt-3">Caminar la naturaleza de Mar del Plata, más allá de la playa</h2>
            <div className="mt-6 space-y-4 text-lg text-secondary/80">
              <p>
                Mar del Plata no es solo mar: a menos de media hora del centro empiezan unas de las sierras más antiguas del mundo,
                con senderos de roca, arroyos y vistas que sorprenden incluso a quienes viven acá hace años.
              </p>
              <p>
                En Somital organizamos <strong>salidas de trekking guiadas</strong> para quienes quieren empezar a caminar,
                para grupos de amigos, familias, empresas y <Link href="/actividades/colegios" className="font-bold text-primary hover:underline">colegios</Link>.
                Nos ocupamos del recorrido, la seguridad y el ritmo del grupo; vos solo tenés que disfrutar.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/activities/trekkingSierras/medium/trekkingSierras_1.webp" alt="Salida de senderismo guiada en las sierras de Mar del Plata" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Dónde caminamos" title="Los mejores lugares para hacer trekking cerca de Mar del Plata" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {zones.map(({ title, text, image, alt, href }) => (
              <Link key={title} href={href} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-secondary/10 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={image} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="my-heading3 !text-2xl">{title}</h3>
                  <p className="mt-3 text-secondary/80">{text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="salidas" className="container-site scroll-mt-24 py-16 md:py-24">
        <SectionHeading eyebrow="Salidas" title="Salidas de trekking y senderismo">
          Elegí la salida que más te guste. Si no encontrás fecha, escribinos y te avisamos de la próxima.
        </SectionHeading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trekkingActivities.map(({ activity, isColegio }) => (
            <ActivityCard key={activity.slug} activity={activity} isColegio={isColegio} />
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Dificultad</span>
            <h2 className="my-heading2 mt-3">Un trekking para cada nivel</h2>
            <ul className="mt-8 space-y-4">
              {levels.map(({ name, text }) => (
                <li key={name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-secondary/10">
                  <h3 className="font-display text-lg font-bold text-secondary">{name}</h3>
                  <p className="mt-1 text-secondary/80">{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="eyebrow">Preparación</span>
            <h2 className="my-heading2 mt-3">Qué llevar a un trekking</h2>
            <ul className="mt-8 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex gap-3 text-lg text-secondary/80">
                  <span className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-secondary/80">Para cada salida te enviamos una lista detallada de lo necesario.</p>
          </div>
        </div>
      </section>

      <CommunitySection label="trekking" />

      <FaqSection faqs={faqsTrekking} title="Preguntas frecuentes sobre trekking en Mar del Plata" />
    </main>
  );
}
