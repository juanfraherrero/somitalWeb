/* eslint-disable @next/next/no-script-component-in-head */
import "./globals.css";
import { quicksand } from "./fonts";

import { EstadoGlobalProvider } from "../context/EstadoGlobal";

import Head from "next/head";
import Script from "next/script";

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
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
      ></Script>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
            `,
        }}
      />
      <body className={quicksand.className}>
        <EstadoGlobalProvider>{children}</EstadoGlobalProvider>
      </body>
    </html>
  );
}
