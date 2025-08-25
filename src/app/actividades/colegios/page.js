import Link from 'next/link';
import Image from 'next/image';
import activities from '@/data/activities.json';
import Head from 'next/head';

export const metadata = {
  title: "Actividades y Programas Educativos para Colegios en Mar del Plata | Somital",
  description:
    "Propuestas educativas en la naturaleza para colegios e instituciones: trekking, tirolesa, kayak, talleres y experiencias al aire libre en Mar del Plata y alrededores.",
  alternates: {
    canonical: "https://www.somital.com.ar/actividades/colegios",
  },
};

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Actividades y Programas Educativos para Colegios en Mar del Plata - Somital",
  "description": "Explora las actividades de aventura, educación y turismo en Mar del Plata y alrededores. Trekking, tirolesa, kayak, mountain bike, visitas educativas y más.",
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "numberOfItems": activities.filter((activity) => activity.type.includes("institucion")).length,
  "itemListElement": activities.filter((activity) => activity.type.includes("institucion")).map((activity, index) => {
    return {
      "@type": "ListItem",
      "position": index + 1,
      "url": "https://somital.com.ar/actividades/colegios" + activity.slug,
      "name": activity.name
    }
  })
}

export default function ActividadesPage() {
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
          <h1 className="my-heading2 text-center  mb-4">Actividades para colegios en Mar del Plata</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            En Somital acompañamos a colegios y grupos educativos con propuestas seguras, organizadas y llenas de aprendizaje.
            <br />
            Creemos que la naturaleza es un aula viva, y <strong>cada salida es una oportunidad para que los chicos descubran, aprendan y compartan</strong>.
            <br />
            Ofrecemos programas adaptados para primaria y secundaria: caminatas guiadas, jornadas de integración, experiencias en la playa, actividades deportivas y talleres en contacto con el medio ambiente.
            <br />
            Nuestro equipo de guías y coordinadores garantiza <strong>seguridad, diversión y valores educativos</strong> en cada experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.filter((activity) => activity.type.includes("institucion")).map((activity) => (
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
                  {activity.details.slice(0, 3).map((detail, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      {detail.value}
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
