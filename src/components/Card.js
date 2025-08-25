"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapIcon, ClockIcon, CalendarIcon } from "@heroicons/react/24/outline";
import CalendarDays from './CalendarDays';

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
            <div className="text-xs text-secondary/70">Duración</div>
            <div className="text-sm text-secondary">{detail.value}</div>
          </div>
        </div>
      );
    case 'location':
      return (
        <div className="flex items-start col-span-2">
          <MapIcon {...iconProps} />
          <div>
            <div className="text-xs text-secondary/70">Ubicación</div>
            <div className="text-sm text-secondary">{detail.value}</div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const Card = ({ data }) => {
  const { href, name, price, details, imageThumbnail } = data;
  return (
    <div className="flex flex-col mx-auto my-6 rounded overflow-hidden shadow-lg bg-foreground w-[250px] md:w-[280px] lg:w-[320px] h-full">
      {/* Image Section - Unchanged */}
      <div className="aspect-[16/9] w-full">
        <Image
          src={imageThumbnail}
          alt={name}
          width={350}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-4 bg-background">
        {/* Title */}
        <h3 className="text-lg font-semibold text-secondary mb-3 px-2">
          {name}
        </h3>

        {/* Details Grid */}
        <div className="space-y-4 mb-4 px-2">
          {details.find(d => d.icon === 'calendar') && getDetailContent(details.find(d => d.icon === 'calendar'))}
          {details.find(d => d.icon === 'time') && getDetailContent(details.find(d => d.icon === 'time'))}
          {details.find(d => d.icon === 'location') && getDetailContent(details.find(d => d.icon === 'location'))}
        </div>

        {/* Button at the bottom */}
        <div className="mt-auto pt-3 px-2">
          <Link
            href={`/actividades${href}`}
            className="w-full block text-center bg-primary hover:bg-primary/90 text-background font-medium py-2 px-4 rounded transition duration-300"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
