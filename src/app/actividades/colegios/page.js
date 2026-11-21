import activities from '@/data/activities-colegios.json';
import faqsColegios from '@/data/faq-colegios.json';
import site from '@/data/site.json';
import ActivityCard from '@/components/ActivityCard';
import JsonLd from '@/components/JsonLd';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import WhatsAppLink from '@/components/WhatsAppLink';
import { WhatsAppIcon } from '@/components/icons';
import FaqSection from '@/sections/Faq.section';
import { itemListSchema, pageMetadata } from '@/lib/seo';
import { whatsappLink } from '@/lib/whatsapp';

export const metadata = pageMetadata({
  title: "Salidas Educativas para Colegios en Mar del Plata | Somital",
  description:
    "Salidas educativas y excursiones para colegios en Mar del Plata: trekking en las sierras, jornadas en la playa, kayak en Mar Chiquita y viajes a Sierra de la Ventana. Pedí tu propuesta.",
  path: "/actividades/colegios",
  image: "/activities/expSierras/medium/expSierras_1.webp",
});

const PROPOSAL_MESSAGE = "¡Hola Somital! Soy docente y quiero organizar una salida educativa. Colegio: ... / Curso y edad: ... / Cantidad de alumnos: ... / Fecha tentativa: ...";

const reasons = [
  { title: `Desde ${site.foundingYear} con colegios`, text: 'Nuestros comienzos fueron con salidas educativas: conocemos lo que necesita un grupo escolar y lo que necesita el docente.' },
  { title: 'Guías y profesores', text: 'Un guía de alta montaña y profesor de biología y una profesora de educación física coordinan cada propuesta.' },
  { title: 'Seguridad primero', text: 'Recorridos adaptados a la edad, monitoreo del clima y una organización pensada para que el docente esté tranquilo.' },
  { title: 'Aprendizaje real', text: 'La naturaleza es un aula viva: trabajo en equipo, liderazgo, confianza y cuidado del ambiente desde la práctica.' },
];

const steps = [
  { title: 'Nos escribís', text: 'Contanos curso, edad, cantidad de alumnos y qué te gustaría trabajar.' },
  { title: 'Armamos la propuesta', text: 'Te enviamos un programa a medida con actividades, horarios y presupuesto.' },
  { title: 'Coordinamos los detalles', text: 'Fecha, logística y todo lo que el colegio necesita para las autorizaciones.' },
  { title: 'Salimos a la naturaleza', text: 'Guiamos la jornada y los chicos vuelven con una experiencia que no olvidan.' },
];

export default function ActividadesColegiosPage() {
  return (
    <main>
      <JsonLd data={itemListSchema("Salidas educativas para colegios en Mar del Plata - Somital", activities, true)} />
      <PageHeader
        eyebrow="Colegios e instituciones"
        title="Salidas educativas para colegios en Mar del Plata"
        image="/activities/expSierras/medium/expSierras_1.webp"
        imageAlt="Alumnos en una salida educativa de trekking en las sierras de Mar del Plata"
        breadcrumbs={[
          { name: "Inicio", path: "/" },
          { name: "Actividades", path: "/actividades" },
          { name: "Colegios", path: "/actividades/colegios" },
        ]}
      >
        <p>
          Acompañamos a colegios y grupos educativos con propuestas seguras, organizadas y llenas de aprendizaje.
          Creemos que la naturaleza es un aula viva, y <strong>cada salida es una oportunidad para que los chicos descubran, aprendan y compartan</strong>.
        </p>
        <WhatsAppLink href={whatsappLink(PROPOSAL_MESSAGE)} event="colegio_lead" label="colegios_hero" className="btn-whatsapp mt-8">
          <WhatsAppIcon />
          Pedir propuesta para mi curso
        </WhatsAppLink>
      </PageHeader>

      <section className="container-site py-16 md:py-24">
        <SectionHeading eyebrow="Propuestas" title="Excursiones educativas para primaria y secundaria">
          Caminatas guiadas, jornadas de integración, experiencias en la playa, actividades deportivas y talleres
          en contacto con el medio ambiente. Nuestro equipo garantiza <strong>seguridad, diversión y valores educativos</strong> en cada experiencia.
        </SectionHeading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => (
            <ActivityCard key={activity.slug} activity={activity} isColegio />
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Por qué Somital" title="Lo que los docentes valoran de salir con nosotros" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ title, text }) => (
              <div key={title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-secondary/10">
                <h3 className="font-display text-lg font-bold text-secondary">{title}</h3>
                <p className="mt-2 text-secondary/80">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <SectionHeading eyebrow="Cómo funciona" title="Organizar la salida de tu curso es simple" />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, text }, index) => (
            <li key={title} className="relative rounded-3xl border-2 border-dashed border-secondary/15 p-6">
              <span className="font-display text-5xl font-bold text-primary/80">{index + 1}</span>
              <h3 className="mt-2 font-display text-lg font-bold text-secondary">{title}</h3>
              <p className="mt-2 text-secondary/80">{text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 text-center">
          <WhatsAppLink href={whatsappLink(PROPOSAL_MESSAGE)} event="colegio_lead" label="colegios_pasos" className="btn-whatsapp text-lg">
            <WhatsAppIcon className="h-6 w-6" />
            Quiero una propuesta para mi colegio
          </WhatsAppLink>
        </div>
      </section>

      <FaqSection faqs={faqsColegios} title="Preguntas frecuentes de docentes" />
    </main>
  );
}
