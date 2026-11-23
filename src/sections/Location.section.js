import MapContainer from '@/components/MapContainer';
import SectionHeading from '@/components/SectionHeading';
import locations from "@/data/locationsHome.json";

const places = [
  {
    icon: '🏔️',
    name: 'Sierras de Mar del Plata y Sierra de los Padres',
    text: 'A minutos de la ciudad: el lugar ideal para trekking, senderismo y mountain bike.',
  },
  {
    icon: '🌊',
    name: 'Costa sur y acantilados',
    text: 'Caminatas frente al mar, trekking de playa y experiencias educativas en el Bosque Energético.',
  },
  {
    icon: '🦩',
    name: 'Laguna de Mar Chiquita',
    text: 'Perfecta para kayak, stand up paddle, senderismo y avistaje de aves.',
  },
  {
    icon: '🏞️',
    name: 'Sierra de la Ventana',
    text: 'Uno de los clásicos destinos de aventura de la provincia de Buenos Aires, ideal para viajes educativos.',
  },
];

const LocationSection = () => {
  return (
    <section id="mapa" className="bg-surface py-20 md:py-28">
      <div className="container-site">
        <SectionHeading eyebrow="Dónde salimos" title="Lugares para hacer trekking cerca de Mar del Plata">
          Trabajamos principalmente en Mar del Plata y sus sierras, y también organizamos excursiones a la
          Laguna de Mar Chiquita y Sierra de la Ventana. Estamos abiertos a nuevas propuestas para llevar
          nuestras actividades a más destinos.
        </SectionHeading>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <ul className="space-y-4 lg:col-span-2">
            {places.map(({ icon, name, text }) => (
              <li key={name} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-secondary/10">
                <span className="text-3xl" aria-hidden="true">{icon}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-secondary">{name}</h3>
                  <p className="mt-1 text-secondary/80">{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="min-h-[420px] overflow-hidden rounded-3xl shadow-sm ring-1 ring-secondary/10 lg:col-span-3">
            <MapContainer locations={locations} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
