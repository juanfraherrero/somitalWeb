import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";

// Encabezado con foto para las páginas internas (lleva el único <h1> de la página)
const PageHeader = ({ eyebrow, title, image, imageAlt, breadcrumbs, children }) => (
  <section className="relative isolate overflow-hidden bg-secondary pb-14 pt-28 text-white md:pb-20 md:pt-36">
    {image && (
      <>
        <Image src={image} alt={imageAlt || title} fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-secondary via-secondary/70 to-black/40" />
      </>
    )}
    <div className="container-site">
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      {eyebrow && <span className="eyebrow mt-6 !text-white/75">{eyebrow}</span>}
      <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
      {children && <div className="mt-6 max-w-3xl text-lg text-white/85 md:text-xl">{children}</div>}
    </div>
  </section>
);

export default PageHeader;
