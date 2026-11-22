import "./globals.css";

import { agrandir, raleway, chivo } from "./fonts";

import Script from "next/script";
import Navbar from "@/components/Navbar";
import FooterSection from "@/sections/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationSchema } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Trekking y Senderismo en Mar del Plata | Somital Aventuras",
    template: "%s",
  },
  description:
    "Trekking, senderismo y turismo aventura en Mar del Plata y sus sierras. Salidas guiadas para todos los niveles, salidas educativas para colegios y una comunidad de WhatsApp para caminar juntos.",
  keywords: [
    "trekking Mar del Plata",
    "senderismo Mar del Plata",
    "caminatas Mar del Plata",
    "trekking Sierra de los Padres",
    "salidas educativas colegios Mar del Plata",
    "excursiones para colegios",
    "team building Mar del Plata",
    "actividades para empresas Mar del Plata",
    "turismo aventura Mar del Plata",
    "mountain bike Mar del Plata",
  ],
  authors: [{ name: "Somital" }],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    siteName: "Somital Aventuras",
    locale: "es_AR",
    type: "website",
    images: [{ url: "/foto-nosotros.jpg", width: 1200, height: 675 }],
  },
  twitter: { card: "summary_large_image" },
  // verification: { google: "fu978mignKAkmu0uVbqpawI7qVdGBpo3eWQDjQxhW_U" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TLLB3VT7');
        `}
      </Script>
      {/* Google Ads Tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-879179377"
        strategy="afterInteractive"
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-879179377');
        `}
      </Script>
      <body className={`${agrandir.variable} ${raleway.variable} ${chivo.variable} font-sans`}>
        <JsonLd data={organizationSchema()} />

        <Navbar />

        {children}

        {/* SECCIÓN DEL FOOTER */}
        <FooterSection />

        <FloatingWhatsApp />

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TLLB3VT7"
          height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>

      </body>
    </html>
  );
}
