import WhatsAppLink from "./WhatsAppLink";
import { WhatsAppIcon } from "./icons";
import { whatsappLink } from "@/lib/whatsapp";

const FloatingWhatsApp = () => (
  <WhatsAppLink
    href={whatsappLink("¡Hola Somital! Quiero consultar por una salida.")}
    label="boton_flotante"
    aria-label="Escribinos por WhatsApp"
    className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-black/20 transition hover:scale-110"
  >
    <WhatsAppIcon className="h-7 w-7" />
  </WhatsAppLink>
);

export default FloatingWhatsApp;
