'use client'

// Link de contacto (WhatsApp, mail o teléfono) que además deja un evento en GTM para medir conversiones
const WhatsAppLink = ({ href, event = "whatsapp_click", label, children, ...props }) => {
  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, label });
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default WhatsAppLink;
