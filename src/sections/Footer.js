import React from "react";
import Image from "next/image";
import Link from "next/link";

import data from "@/data/infoFooter.json";
import activities from "@/data/activities.json";
import activities_colegios from "@/data/activities-colegios.json";
import { activityPath } from "@/lib/seo";

import FormFooter from "../components/FormFooter";

const exploreLinks = [
  { href: "/trekking-mar-del-plata", label: "Trekking en Mar del Plata" },
  { href: "/actividades", label: "Todas las actividades" },
  { href: "/actividades/colegios", label: "Salidas para colegios" },
  { href: "/comunidad", label: "Comunidad de WhatsApp" },
];

const FooterSection = () => {
  return (
    <footer id="contacto" className="topo-bg bg-secondary text-white/85">
      <h2 className="sr-only">Contactar</h2>
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 text-white">
            <Image src="/logo.svg" alt="Logo Somital" width={44} height={44} />
            <span className="font-display text-2xl font-bold">Somital</span>
          </Link>
          <p className="mt-4 text-sm">
            Trekking, senderismo y turismo aventura en Mar del Plata. Salidas educativas para colegios desde 2005.
          </p>

          {data.map((column) => (
            <div key={column.column} className="mt-6">
              <h3 className="font-display text-lg font-bold text-white">{column.column}</h3>
              <ul className="mt-3 space-y-2">
                {column.rows.map((row) => (
                  <li key={row.type}>
                    <Link
                      href={row.link || ""}
                      target={row.target || "_self"}
                      className="flex items-center gap-3 text-sm hover:text-white"
                    >
                      <Image src={row.icon} alt="" width={20} height={20} className="invert" />
                      {column.column == "Redes" ? row.type : row.value}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <nav aria-label="Explorar">
          <h3 className="font-display text-lg font-bold text-white">Explorar</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {exploreLinks.map(({ href, label }) => (
              <li key={href}><Link href={href} className="hover:text-white">{label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Actividades">
          <h3 className="font-display text-lg font-bold text-white">Actividades</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {activities.map((activity) => (
              <li key={activity.slug}><Link href={activityPath(activity)} className="hover:text-white">{activity.name}</Link></li>
            ))}
            {activities_colegios.map((activity) => (
              <li key={activity.slug}><Link href={activityPath(activity, true)} className="hover:text-white">{activity.name} (colegios)</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-lg font-bold text-white">Escribinos</h3>
          <div className="mt-3">
            <FormFooter />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-site py-6 text-xs text-white/60">
          © {new Date().getFullYear()} Somital Aventuras · Mar del Plata, Buenos Aires, Argentina
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
