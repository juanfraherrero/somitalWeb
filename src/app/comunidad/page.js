import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import WhatsAppLink from '@/components/WhatsAppLink';
import { WhatsAppIcon } from '@/components/icons';
import { communityLink } from '@/lib/whatsapp';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: "Comunidad de Trekking en Mar del Plata por WhatsApp | Somital",
  description:
    "Sumate gratis a la comunidad de trekking y senderismo de Mar del Plata en WhatsApp: próximas salidas, recorridos por las sierras y la costa y gente para caminar juntos.",
  path: "/comunidad",
  image: "/activities/trekkingSierras/medium/trekkingSierras_1.webp",
});

const benefits = [
  { icon: '📅', title: 'Próximas salidas primero', text: 'Avisamos las fechas de trekking y actividades antes que en ningún otro lado, para que reserves tu lugar.' },
  { icon: '🥾', title: 'Gente con tu mismo ritmo', text: 'Encontrá compañeros de caminata, desde quienes recién empiezan hasta quienes buscan desafíos.' },
  { icon: '🗺️', title: 'Recorridos y consejos', text: 'Senderos de las sierras y la costa, qué llevar, cómo prepararte y recomendaciones de nuestros guías.' },
  { icon: '📸', title: 'Fotos y recuerdos', text: 'Compartimos las fotos de cada salida y las historias de la comunidad.' },
];

const rules = [
  'Es gratis y podés salir cuando quieras.',
  'Respeto y buena onda entre todos.',
  'Nada de spam ni publicidad ajena a la comunidad.',
  'Cuidamos la naturaleza: lo que llevamos, lo traemos de vuelta.',
];

export default function ComunidadPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Comunidad Somital"
        title="La comunidad de trekking de Mar del Plata"
        image="/activities/trekkingSierras/medium/trekkingSierras_1.webp"
        imageAlt="Comunidad de senderismo caminando junta por las sierras de Mar del Plata"
        breadcrumbs={[{ name: "Inicio", path: "/" }, { name: "Comunidad", path: "/comunidad" }]}
      >
        <p>
          Un grupo de WhatsApp que no para de crecer, con personas que disfrutan de caminar, del aire libre y de
          descubrir los paisajes naturales de la zona. Sumarte es gratis.
        </p>
        <WhatsAppLink href={communityLink()} event="community_click" label="comunidad_hero" className="btn-whatsapp mt-8 text-lg">
          <WhatsAppIcon className="h-6 w-6" />
          Unirme a la comunidad
        </WhatsAppLink>
      </PageHeader>

      <section className="container-site py-16 md:py-24">
        <SectionHeading eyebrow="Qué vas a encontrar" title="Mucho más que un grupo de WhatsApp" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon, title, text }) => (
            <div key={title} className="rounded-3xl bg-surface p-6">
              <span className="text-4xl" aria-hidden="true">{icon}</span>
              <h3 className="mt-4 font-display text-lg font-bold text-secondary">{title}</h3>
              <p className="mt-2 text-secondary/80">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Cómo funciona</span>
            <h2 className="my-heading2 mt-3">Tres pasos y salís a caminar</h2>
            <ol className="mt-8 space-y-6">
              <li><strong className="text-secondary">1. Te sumás</strong> <span className="text-secondary/80">tocando el botón de WhatsApp.</span></li>
              <li><strong className="text-secondary">2. Mirás las próximas salidas</strong> <span className="text-secondary/80">y elegís la que va con tu nivel.</span></li>
              <li><strong className="text-secondary">3. Reservás tu lugar</strong> <span className="text-secondary/80">y nos vemos en el sendero.</span></li>
            </ol>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-secondary/10">
            <h2 className="font-display text-2xl font-bold text-secondary">Reglas de la comunidad</h2>
            <ul className="mt-6 space-y-3">
              {rules.map((rule) => (
                <li key={rule} className="flex gap-3 text-secondary/80">
                  <span className="text-primary" aria-hidden="true">✓</span>
                  {rule}
                </li>
              ))}
            </ul>
            <WhatsAppLink href={communityLink()} event="community_click" label="comunidad_reglas" className="btn-whatsapp mt-8 w-full">
              <WhatsAppIcon />
              Quiero sumarme
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="container-site py-16 text-center md:py-24">
        <SectionHeading title="¿Primera vez haciendo trekking?">
          Leé nuestra guía de <Link href="/trekking-mar-del-plata" className="font-bold text-primary hover:underline">trekking en Mar del Plata</Link>{" "}
          con los mejores lugares, niveles de dificultad y qué llevar.
        </SectionHeading>
      </section>
    </main>
  );
}
