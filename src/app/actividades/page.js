import Link from 'next/link';
import Image from 'next/image';
import activities from '@/data/activities.json';
import Head from 'next/head';

export const metadata = {
  title: "Actividades de Turismo Aventura en Mar del Plata | Somital",
  description:
    "Explorá todas nuestras actividades en la naturaleza: trekking, escalada, parapente, kayak y programas educativos en Mar del Plata y alrededores.",
  alternates: {
    canonical: "https://www.somital.com.ar/actividades",
  },
};

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Actividades en Mar del Plata - Somital",
  "description": "Explora las actividades de aventura, educación y turismo en Mar del Plata y alrededores. Trekking, kayak, mountain bike, visitas educativas y más.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": activities.filter((activity) => activity.type.includes("personal")).length,
  "itemListElement": activities.filter((activity) => activity.type.includes("personal")).map((activity, index) => {
    return {
      "@type": "ListItem",
      "position": index + 1,
      "url": "https://somital.com.ar/actividades/" + activity.slug,
      "name": activity.name
    }
  })
}

export default function ActividadesColegiosPage() {
  return (
    <main className="min-h-screen pt-24">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </Head>
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="my-heading2  text-center mb-4">Actividades en Mar del Plata y alrededores con Somital</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            En Somital diseñamos experiencias únicas de turismo aventura y <strong>actividades al aire libre en Mar del Plata </strong> y la región.
            <br />
            Si buscás <strong>desconectarte de la rutina</strong>, disfrutar de la naturaleza y vivir experiencias auténticas, llegaste al lugar indicado.
            <br />
            Desde trekking en sierras, salidas en kayak, hasta jornadas de integración para grupos. Contamos con un catálogo diverso pensado para todas las edades y niveles.
            <br />
            Explorá nuestras propuestas y encontrá la actividad ideal para vos, tu familia o tu equipo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.filter((activity) => activity.type.includes("personal")).map((activity) => (
            <Link
              key={activity.slug}
              href={`/actividades/colegios${activity.slug}`}
              className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={activity.imageThumbnail}
                  alt={activity.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                  <div className="p-4 w-full bg-gradient-to-t from-black to-transparent">
                    <h2 className="text-xl font-bold text-white">{activity.name}</h2>
                    <p className="text-gray-200">{activity.price}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mt-2">
                  {activity.chips.slice(0, 3).map((detail, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {activity.details.length} detalles disponibles
                  </span>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Ver más
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
