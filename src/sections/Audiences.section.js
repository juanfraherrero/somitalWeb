import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { ArrowRightIcon } from '@/components/icons';
import site from '@/data/site.json';

const audiences = [
  {
    title: 'Trekking para todos',
    text: 'Caminatas y trekking guiados por las sierras y la costa de Mar del Plata. Salís con guías, en grupo y a tu ritmo, aunque nunca hayas hecho trekking.',
    href: '/trekking-mar-del-plata',
    cta: 'Ver salidas de trekking',
    image: '/activities/trekkingSierras/medium/trekkingSierras_1.webp',
    alt: 'Grupo caminando por un sendero de las sierras de Mar del Plata',
  },
  {
    title: 'Salidas educativas para colegios',
    text: 'Programas para primaria y secundaria en las sierras, la playa y la laguna. Nos ocupamos de la logística, la seguridad y las dinámicas pedagógicas.',
    href: '/actividades/colegios',
    cta: 'Ver propuestas para colegios',
    image: '/activities/expSierras/medium/expSierras_1.webp',
    alt: 'Alumnos de un colegio en una salida educativa a las sierras',
  },
  {
    title: 'Comunidad de trekking',
    text: 'Sumate al grupo de WhatsApp donde avisamos primero las próximas salidas, compartimos recorridos y armamos grupos para caminar juntos.',
    href: '/comunidad',
    cta: 'Conocé la comunidad',
    image: '/activities/expLaguna/medium/expLaguna_1.webp',
    alt: 'Personas compartiendo una salida en la naturaleza cerca de Mar del Plata',
  },
];

const AudiencesSection = () => (
  <section className="container-site py-20 md:py-28">
    <SectionHeading eyebrow="Elegí tu aventura" title="Salidas a pie para personas, grupos y colegios">
      Desde {site.foundingYear} acercamos la naturaleza a todas las personas. Elegí cómo querés salir con nosotros.
    </SectionHeading>

    <div className="mt-14 grid gap-6 md:grid-cols-3">
      {audiences.map(({ title, text, href, cta, image, alt }) => (
        <Link key={href} href={href} className="group flex flex-col overflow-hidden rounded-3xl bg-surface transition hover:-translate-y-1 hover:shadow-xl">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image src={image} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="my-heading3">{title}</h3>
            <p className="mt-3 text-secondary/80">{text}</p>
            <span className="mt-auto inline-flex items-center gap-1 pt-5 font-bold text-primary">
              {cta}
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default AudiencesSection;
