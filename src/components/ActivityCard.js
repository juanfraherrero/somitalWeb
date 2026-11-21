import Image from "next/image";
import Link from "next/link";
import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "./icons";
import { activityPath } from "@/lib/seo";

const ActivityCard = ({ activity, isColegio = false }) => {
  const { name, details, imageThumbnail, chips } = activity;
  const location = details.find((d) => d.icon === "location")?.value;
  const time = details.find((d) => d.icon === "time")?.value;

  return (
    <Link
      href={activityPath(activity, isColegio)}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-secondary/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageThumbnail}
          alt={`${name} - ${location}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold text-white ${isColegio ? "bg-primary" : "bg-secondary"}`}>
          {isColegio ? "Colegios" : "Abierta a todos"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-bold text-secondary">{name}</h3>

        <div className="mt-3 space-y-1.5 text-sm text-secondary/80">
          {location && (
            <p className="flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 flex-shrink-0 text-primary" />
              {location}
            </p>
          )}
          {time && (
            <p className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 flex-shrink-0 text-primary" />
              Duración: {time}
            </p>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {chips.slice(0, 3).map((chip) => (
            <span key={chip} className="chip">{chip}</span>
          ))}
        </div>

        <span className="mt-auto inline-flex items-center gap-1 pt-5 font-bold text-primary">
          Ver salida
          <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

export default ActivityCard;
