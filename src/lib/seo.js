import site from "@/data/site.json";

export const SITE_URL = site.url;
export const ORG_ID = `${SITE_URL}/#organization`;

export const absoluteUrl = (path = "/") => `${SITE_URL}${path}`;

export const activityPath = (activity, isColegio) =>
  `/actividades${isColegio ? "/colegios" : ""}${activity.slug}`;

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  "@id": ORG_ID,
  name: site.name,
  alternateName: site.shortName,
  url: SITE_URL,
  logo: absoluteUrl("/aux/logo.png"),
  image: absoluteUrl("/foto-nosotros.jpg"),
  description:
    "Trekking, senderismo, turismo aventura y salidas educativas para colegios en Mar del Plata y las sierras de la zona.",
  foundingDate: String(site.foundingYear),
  email: site.email,
  telephone: site.phone,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  areaServed: [
    "Mar del Plata",
    "Sierra de los Padres",
    "Mar Chiquita",
    "Sierra de la Ventana",
    "Partido de General Pueyrredon",
  ],
  sameAs: [site.instagram, site.facebook],
});

export const activitySchema = (activity, isColegio) => ({
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: activity.seo.title,
  description: activity.seo.description,
  url: absoluteUrl(activityPath(activity, isColegio)),
  image: activity.imageSrc.map((src) => absoluteUrl(src)),
  touristType: isColegio ? ["Colegios", "Grupos educativos"] : ["Trekking", "Turismo aventura"],
  provider: { "@id": ORG_ID },
  itinerary: {
    "@type": "Place",
    name: activity.details.find((d) => d.icon === "location")?.value,
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "ARS",
    availability: "https://schema.org/InStock",
    url: absoluteUrl(activityPath(activity, isColegio)),
  },
});

export const itemListSchema = (name, activities, isColegio) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name,
  numberOfItems: activities.length,
  itemListElement: activities.map((activity, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: absoluteUrl(activityPath(activity, isColegio)),
    name: activity.name,
  })),
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(({ name, path }, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
    item: absoluteUrl(path),
  })),
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});

// Metadata común para páginas: canonical + Open Graph con la misma info
export const pageMetadata = ({ title, description, path, image = "/foto-nosotros.jpg" }) => ({
  title,
  description,
  alternates: { canonical: absoluteUrl(path) },
  openGraph: {
    title,
    description,
    url: absoluteUrl(path),
    siteName: site.name,
    locale: "es_AR",
    type: "website",
    images: [{ url: absoluteUrl(image) }],
  },
});
