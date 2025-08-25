import React from 'react';
import Image from 'next/image';
import { CalendarIcon, ClockIcon, MapIcon } from '@heroicons/react/24/outline';
import CalendarDays from '@/components/CalendarDays';


const getDetailContent = (detail) => {
  const iconProps = { className: "h-5 w-5 mr-2 text-primary flex-shrink-0" };

  switch (detail.icon) {
    case 'calendar':
      return (
        <div className="flex items-start">
          <CalendarIcon {...iconProps} />
          <CalendarDays availableDays={detail.value} />
        </div>
      );
    case 'time':
      return (
        <div className="flex items-start">
          <ClockIcon {...iconProps} />
          <div>
            <div className="text-sm text-secondary/70">Duración {detail.value}</div>
          </div>
        </div>
      );
    case 'location':
      return (
        <div className="flex items-start col-span-2">
          <MapIcon {...iconProps} />
          <div>
            <div className="text-sm text-secondary/70">Ubicación {detail.value}</div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const ActivityInformationSection = ({ activity }) => {
  return (
    <section
      className="max-w-7xl mx-auto flex flex-nowrap flex-col align-center justify-center mt-16 px-6"
    >
      {/* Detalles de la Actividad */}
      <div className="">
        <h2 className="my-heading2 mb-4">
          Detalles de la Actividad
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-8 "></div>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {activity.details.find(d => d.icon === 'calendar') && (
              <div className="flex justify-center">
                {getDetailContent(activity.details.find(d => d.icon === 'calendar'))}
              </div>
            )}
            {activity.details.find(d => d.icon === 'time') && (
              <div className="flex justify-center">
                {getDetailContent(activity.details.find(d => d.icon === 'time'))}
              </div>
            )}
            {activity.details.find(d => d.icon === 'location') && (
              <div className="flex justify-center">
                {getDetailContent(activity.details.find(d => d.icon === 'location'))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Galería de imágenes */}
      {activity.imageSrc?.length > 0 && (
        <div className="mt-12">
          <div className="mt-12">
            <h3 className="my-heading3 mb-4">
              Galería de imágenes
            </h3>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8 "></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activity.imageSrc.map((image, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${activity.name} - Imagen ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Descripción de la Actividad */}
      {activity.description?.length > 0 && (
        <div className="mt-12">
          {activity.description.map(({ title, paragraphs }, index) => (
            <React.Fragment key={index} >
              <h3 className="my-heading3 mb-4">
                {title}
              </h3>
              <div className="w-20 h-1 bg-secondary mx-auto mb-8 "></div>
              <div className="space-y-6 mb-8">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-secondary">
                    {paragraph}
                  </p>
                ))}

              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </section >
  );
};

export default ActivityInformationSection;