/* eslint-disable @next/next/no-script-component-in-head */
import "./globals.css";

import { agrandir, raleway, chivo } from "./fonts";

import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import FooterSection from "@/sections/Footer";

export const metadata = {
  // title: "Somital Aventuras",
  // description:
  //   "Empresa de turismo en mar del plata. Especializada en trekking, senderismo, mountain bike (mtb), y actividades al aire libre.",
  keywords:
    "turismo aventura, Mar del Plata, trekking, senderismo, caminata, mountain bike, ciclismo, bici, bicileta, actividades al aire libre, excursiones, turismo costero, turismo sierras",
  author: "Somital Aventuras",
  "google-site-verification": "fu978mignKAkmu0uVbqpawI7qVdGBpo3eWQDjQxhW_U",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {/* Google Tag Manager */}
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TLLB3VT7');
            `,
          }}
        />
      </Head>
      <body className={`${agrandir.variable} ${raleway.variable} ${chivo.variable} font-sans`}>
        <Navbar />

        {children}

        {/* SECCIÓN DEL FOOTER */}
        <FooterSection />

        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TLLB3VT7"
          height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>

      </body>
    </html>
  );
}
