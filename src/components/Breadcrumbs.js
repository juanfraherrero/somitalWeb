import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

const Breadcrumbs = ({ items }) => (
  <nav aria-label="Ruta de navegación" className="text-sm text-white/70">
    <JsonLd data={breadcrumbSchema(items)} />
    <ol className="flex flex-wrap items-center gap-2">
      {items.map(({ name, path }, index) => (
        <li key={path} className="flex items-center gap-2">
          {index > 0 && <span aria-hidden="true">/</span>}
          {index < items.length - 1
            ? <Link href={path} className="hover:text-white">{name}</Link>
            : <span aria-current="page" className="text-white">{name}</span>}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
