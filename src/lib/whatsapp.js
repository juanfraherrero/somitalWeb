import site from "@/data/site.json";

// El número se toma de la variable de entorno; si no está definida se usa el del footer
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WTP_NUMBER || site.whatsappNumber;

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

// Mientras no esté cargado el link de invitación de la comunidad, se pide el ingreso por chat
export const communityLink = () =>
  site.whatsappCommunityUrl ||
  whatsappLink("¡Hola Somital! Quiero sumarme a la comunidad de trekking de WhatsApp.");
