import Image from 'next/image';
import site from '@/data/site.json';

const team = [
  {
    name: 'Alfredo',
    image: '/alfredo.jpg',
    role: 'Guía de alta montaña y profesor de biología',
    text: 'Apasionado de la montaña, la naturaleza y la educación, combina la técnica y el conocimiento científico para que cada experiencia sea segura y enriquecedora.',
  },
  {
    name: 'Claudia',
    image: '/claudia.jpg',
    role: 'Profesora de educación física y especialista en recreación',
    text: 'Su energía y calidez hacen que cada salida sea dinámica y divertida. Su objetivo es que cada persona descubra de lo que es capaz a través del movimiento y el juego.',
  },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="container-site py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="eyebrow">Quiénes somos</span>
          <h2 className="my-heading2 mt-3">Guías de Mar del Plata, educadores y amantes de la montaña</h2>
          <div className="mt-6 space-y-4 text-lg text-secondary/80">
            <p>
              Somos Alfredo y Claudia, y desde {site.foundingYear} damos vida a Somital con un propósito:
              acercar la naturaleza y la aventura a todas las personas.
            </p>
            <p>
              Nuestros comienzos fueron con salidas educativas junto a colegios, experiencias que nos mostraron
              la fuerza transformadora de la montaña: chicos y chicas que superaban miedos, ganaban confianza y
              descubrían sus capacidades en contacto directo con la naturaleza.
            </p>
            <p>
              Hoy mantenemos intacta esa pasión. Diseñamos experiencias de turismo aventura donde se combinan
              profesionalismo, seguridad y emoción, para que cada salida no sea solo un recorrido, sino un momento
              de aprendizaje, disfrute y conexión profunda con la naturaleza.
            </p>
          </div>

          <blockquote className="mt-8 rounded-2xl border-l-4 border-primary bg-surface p-6">
            <p className="font-display text-xl font-bold text-secondary md:text-2xl">
              &ldquo;Crear experiencias donde las personas puedan conectar con el entorno natural, superar sus miedos y descubrir nuevas fortalezas.&rdquo;
            </p>
            <footer className="mt-3 text-sm font-bold uppercase tracking-widest text-primary">Nuestra visión</footer>
          </blockquote>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {team.map(({ name, image, role, text }) => (
            <article key={name} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-secondary/10">
              <div className="relative aspect-square">
                <Image src={image} alt={`${name}, ${role.toLowerCase()} en Somital`} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-secondary">{name}</h3>
                <p className="mt-1 font-bold text-primary">{role}</p>
                <p className="mt-3 text-secondary/80">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
