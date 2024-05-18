// app/activities/metadata.js
export const metadata = {
  title: "Actividades de Aventura en Mar del Plata | Somital Aventuras",
  description:
    "Explora variedad de actividades de aventura en Mar del Plata y alrededores. Trekking, parapente, tirolesa y palestra. Experiencias inolvidables",
  alternates: {
    canonical: "https://www.somitalaventuras.com.ar/actividades",
  },
};

import ClientActivities from "./activitiesPage";

export default function Home() {
  return <ClientActivities />;
}
