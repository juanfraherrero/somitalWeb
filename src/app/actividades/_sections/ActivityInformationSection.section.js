import React from 'react';
import Image from 'next/image';
import { CalendarIcon, ClockIcon, MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import CalendarDays from '@/components/CalendarDays';
import WhatsAppLink from '@/components/WhatsAppLink';
import { WhatsAppIcon } from '@/components/icons';
import { whatsappLink } from '@/lib/whatsapp';

const DetailItem = ({ icon: Icon, label, children }) => (
  <div className="flex items-start gap-3">
    <Icon className="h-6 w-6 flex-shrink-0 text-primary" />
    <div>
      <div className="text-xs font-bold uppercase tracking-widest text-secondary/80">{label}</div>
      <div className="mt-1 text-secondary">{children}</div>
    </div>
  </div>
);

const ActivityInformationSection = ({ activity, isColegio }) => {
  const calendar = activity.details.find(d => d.icon === 'calendar');
  const time = activity.details.find(d => d.icon === 'time');
  const location = activity.details.find(d => d.icon === 'location');

  return (
    <section className="container-site py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-3">
        {/* Descripción de la Actividad */}
        <div className="lg:col-span-2">
          {activity.description?.map(({ title, paragraphs }) => (
            <div key={title} className="mb-10">
              <h2 className="my-heading3">{title}</h2>
              <div className="mt-4 space-y-4">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-lg text-secondary/80">{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Detalles de la Actividad */}
        <aside className="lg:sticky lg:top-28 h-fit rounded-3xl bg-surface p-6 md:p-8">
          <h2 className="font-display text-xl font-bold text-secondary">Detalles de la actividad</h2>
          <div className="mt-6 space-y-5">
            {calendar && (
              <DetailItem icon={CalendarIcon} label="Días">
                <CalendarDays availableDays={calendar.value} />
              </DetailItem>
            )}
            {time && <DetailItem icon={ClockIcon} label="Duración">{time.value}</DetailItem>}
            {location && <DetailItem icon={MapPinIcon} label="Ubicación">{location.value}</DetailItem>}
            <DetailItem icon={CurrencyDollarIcon} label="Precio">{activity.price}</DetailItem>
          </div>
          <WhatsAppLink
            href={whatsappLink(`¡Hola Somital! Quiero consultar por "${activity.name}".`)}
            event={isColegio ? 'colegio_lead' : 'whatsapp_click'}
            label={`detalle${activity.slug}`}
            className="btn-whatsapp mt-8 w-full"
          >
            <WhatsAppIcon />
            {isColegio ? 'Pedir propuesta' : 'Reservar o consultar'}
          </WhatsAppLink>
        </aside>
      </div>

      {/* Galería de imágenes */}
      {activity.imageSrc?.length > 0 && (
        <div className="mt-8">
          <h2 className="my-heading3">Galería de imágenes</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {activity.imageSrc.map((image, index) => (
              <div key={image} className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  alt={`${activity.name} en ${location?.value} - foto ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ActivityInformationSection;
