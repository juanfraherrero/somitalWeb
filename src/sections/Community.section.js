import Link from 'next/link';
import WhatsAppLink from '@/components/WhatsAppLink';
import { WhatsAppIcon } from '@/components/icons';
import { communityLink } from '@/lib/whatsapp';

const perks = [
  'Enterate primero de las próximas salidas de trekking',
  'Recorridos, consejos y fotos de las sierras y la costa',
  'Armá grupo para caminar con gente que comparte tu ritmo',
];

// Banda de captación para la comunidad de WhatsApp, reutilizable en todas las páginas
const CommunitySection = ({ label = 'seccion_comunidad' }) => (
  <section className="topo-bg bg-secondary text-white">
    <div className="container-site grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
      <div>
        <span className="eyebrow !text-white/70">Comunidad Somital</span>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
          La comunidad de trekking de Mar del Plata está en WhatsApp
        </h2>
        <p className="mt-5 text-lg text-white/80">
          Cada vez somos más los que salimos a caminar por las sierras y la costa.
          Sumarte es gratis y no tenés que tener experiencia.
        </p>
      </div>

      <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur md:p-8">
        <ul className="space-y-4">
          {perks.map((perk) => (
            <li key={perk} className="flex gap-3">
              <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold">✓</span>
              <span>{perk}</span>
            </li>
          ))}
        </ul>
        <WhatsAppLink href={communityLink()} event="community_click" label={label} className="btn-whatsapp mt-8 w-full text-lg">
          <WhatsAppIcon className="h-6 w-6" />
          Unirme a la comunidad
        </WhatsAppLink>
        <Link href="/comunidad" className="mt-4 block text-center text-sm font-bold text-white/80 underline-offset-4 hover:underline">
          ¿Cómo funciona la comunidad?
        </Link>
      </div>
    </div>
  </section>
);

export default CommunitySection;
