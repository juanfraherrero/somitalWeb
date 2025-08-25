import React from 'react';
import Image from 'next/image';

const HeroActivitySection = ({ activity }) => {
  return (
    <section className="relative h-96 w-full">
      <Image
        src={activity.imageSrc?.[0] || activity.imageThumbnail}
        alt={activity.name}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-background mb-4">{activity.name}</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroActivitySection;