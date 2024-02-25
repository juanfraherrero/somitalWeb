import "./globals.css";
import { quicksand } from "./fonts";

import { EstadoGlobalProvider } from "../context/EstadoGlobal";

import Head from "next/head";

export const metadata = {
  title: "Somital Aventuras",
  description:
    "Empresa de turismo en mar del plata. Especializada en trekking, senderismo, mountain bike (mtb), y actividades al aire libre.",
  keywords:
    "turismo aventura, Mar del Plata, trekking, senderismo, caminata, mountain bike, ciclismo, bici, bicileta, actividades al aire libre, excursiones, turismo costero, turismo sierras",
  author: "Somital Aventuras",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="fu978mignKAkmu0uVbqpawI7qVdGBpo3eWQDjQxhW_U"
        />
      </Head>
      <body className={quicksand.className}>
        <EstadoGlobalProvider>{children}</EstadoGlobalProvider>
      </body>
    </html>
  );
}
