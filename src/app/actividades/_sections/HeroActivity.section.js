import React from 'react';
import PageHeader from '@/components/PageHeader';
import WhatsAppLink from '@/components/WhatsAppLink';
import { WhatsAppIcon } from '@/components/icons';
import { whatsappLink } from '@/lib/whatsapp';
import { activityPath } from '@/lib/seo';

const HeroActivitySection = ({ activity, isColegio }) => {
  const breadcrumbs = [
    { name: 'Inicio', path: '/' },
    { name: 'Actividades', path: '/actividades' },
    ...(isColegio ? [{ name: 'Colegios', path: '/actividades/colegios' }] : []),
    { name: activity.name, path: activityPath(activity, isColegio) },
  ];
  const message = isColegio
    ? `¡Hola Somital! Soy docente y quiero una propuesta para "${activity.name}".`
    : `¡Hola Somital! Quiero consultar por "${activity.name}".`;

  return (
    <PageHeader
      eyebrow={isColegio ? 'Salida educativa para colegios' : 'Actividad abierta a todos'}
      title={activity.name}
      image={activity.imageSrc?.[0] || activity.imageThumbnail}
      imageAlt={`${activity.name} - Somital Aventuras`}
      breadcrumbs={breadcrumbs}
    >
      <div className="flex flex-wrap gap-2">
        {activity.chips.map((chip) => (
          <span key={chip} className="rounded-full bg-white/15 px-3 py-1 text-sm font-bold backdrop-blur">{chip}</span>
        ))}
      </div>
      <WhatsAppLink href={whatsappLink(message)} label={`hero${activity.slug}`} className="btn-whatsapp mt-8">
        <WhatsAppIcon />
        {isColegio ? 'Pedir propuesta para mi curso' : 'Consultar por WhatsApp'}
      </WhatsAppLink>
    </PageHeader>
  );
};

export default HeroActivitySection;
