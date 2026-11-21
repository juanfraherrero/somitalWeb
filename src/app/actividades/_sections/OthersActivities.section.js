import React from 'react';
import Link from 'next/link';
import ActivityCard from '@/components/ActivityCard';

const OthersActivitiesSection = ({ otherActivities, isColegio }) => {
  if (otherActivities.length === 0) return null;

  return (
    <section className="container-site py-16 md:py-24">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <h2 className="my-heading2">{isColegio ? 'Otras salidas para colegios' : 'Otras actividades'}</h2>
        <Link href={isColegio ? '/actividades/colegios' : '/actividades'} className="font-bold text-primary hover:underline">
          Ver todas las actividades
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {otherActivities.slice(0, 3).map((item) => (
          <ActivityCard key={item.slug} activity={item} isColegio={isColegio} />
        ))}
      </div>
    </section>
  );
};

export default OthersActivitiesSection;
