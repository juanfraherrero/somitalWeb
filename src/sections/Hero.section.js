import Image from 'next/image';
import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import { WhatsAppIcon, ArrowRightIcon } from '@/components/icons';
import { communityLink } from '@/lib/whatsapp';
import site from '@/data/site.json';

const highlights = [
  { value: `Desde ${site.foundingYear}`, label: 'guiando en la naturaleza' },
  { value: 'Todos los niveles', label: 'de principiantes a expertos' },
  { value: 'Colegios', label: 'primaria y secundaria' },
  { value: 'Comunidad', label: 'en WhatsApp para salir juntos' },
];

const HeroSection = () => {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-secondary text-white">
      <Image
        src="/foto-nosotros.jpg"
        alt="Grupo haciendo trekking en las sierras de Mar del Plata con mochilas"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-secondary via-secondary/50 to-black/30" />

      <div className="container-site w-full pb-12 pt-32 md:pb-20">
        <div className="max-w-3xl animate-fade-up">
          <span className="eyebrow !text-white/80">Somital Aventuras · Mar del Plata</span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Trekking y senderismo en Mar del Plata
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
            Salidas guiadas por las sierras, la costa y las lagunas de la zona.
            Para quienes quieren caminar, para grupos y para colegios que buscan
            una salida educativa <strong>segura, divertida y en plena naturaleza</strong>.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/trekking-mar-del-plata" className="btn-ghost text-white">
              Ver salidas de trekking
              <ArrowRightIcon />
            </Link>
            <WhatsAppLink href={communityLink()} event="community_click" label="hero" className="btn-whatsapp">
              <WhatsAppIcon />
              Unite a la comunidad
            </WhatsAppLink>
          </div>
          <Link href="/actividades/colegios" className="mt-5 inline-flex items-center gap-1 font-bold text-white/90 underline-offset-4 hover:underline">
            ¿Sos docente? Mirá las salidas educativas para colegios
            <ArrowRightIcon />
          </Link>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/15 backdrop-blur md:mt-16 md:grid-cols-4">
          {highlights.map(({ value, label }) => (
            <div key={value} className="bg-secondary/60 p-4 md:p-5">
              <dt className="font-display text-lg font-bold md:text-xl">{value}</dt>
              <dd className="text-sm text-white/75">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default HeroSection;
