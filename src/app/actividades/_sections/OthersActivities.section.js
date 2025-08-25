import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const OthersActivitiesSection = ({ otherActivities }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h2 className="my-heading2 mb-4">Otras Actividades</h2>
        <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherActivities.slice(0, 6).map((item) => (
          <Link
            key={item.slug}
            href={`/actividades${item.slug}`}
            className="block group"
          >
            <div className="h-full flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
              <div className="flex-shrink-0 h-16 w-16 md:h-20 md:w-20 relative rounded-md overflow-hidden">
                <Image
                  src={item.imageThumbnail}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-base md:text-lg font-medium text-gray-900 group-hover:text-primary transition-colors text-left">
                  {item.name}
                </h4>
              </div>
              <div className="text-primary">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/actividades"
          className="inline-flex items-center text-primary font-medium hover:underline"
        >
          Ver todas las actividades
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default OthersActivitiesSection;