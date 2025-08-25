import Image from 'next/image';

const LocationSection = () => {
    return (
        <section
            className="max-w-7xl mx-auto flex flex-wrap justify-center mt-16 px-6 "
        >

            <div className="text-center">
                <h2 className="my-heading2 mb-4">
                    Ubicaciones y zonas donde trabajamos en Somital
                </h2>
                <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
                <p className="max-w-4xl text-left mx-auto text-lg text-secondary">
                    Trabajamos principalmente en Mar del Plata, pero también realizamos excursiones en la Sierra de los Difuntos, Sierra de la Ventana y la Laguna de Mar Chiquita.
                    <br className='mb-2' />
                    Estamos abiertos a nuevas propuestas para llevar nuestras actividades a más destinos.
                    <br className='mb-2' />
                    Nos especializamos en organizar trekking, escalada, y camping en áreas naturales, siempre con la seguridad y profesionalismo que nos caracteriza.
                </p>
            </div>

            <div className="text-center mt-8">
                <h3 className="my-heading3 mb-4">
                    Principales ubicaciones
                    de nuestras actividades
                </h3>
                <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>

                <ul className="max-w-4xl text-left mx-auto text-lg text-secondary">
                    <li className="flex items-start">
                        <span className="text-2xl mr-3">🏔️</span>
                        <div className='text-left'>
                            <strong className="font-semibold">Sierra de los Difuntos</strong> – ideal para trekking y escalada, con paisajes naturales únicos.
                        </div>
                    </li>
                    <li className="flex items-start mt-4">
                        <span className="text-2xl mr-3">🏞️</span>
                        <div className='text-left'>
                            <strong className="font-semibold">Sierra de la Ventana</strong> – uno de los clásicos destinos de aventura en la provincia de Buenos Aires.
                        </div>
                    </li>
                    <li className="flex items-start mt-4">
                        <span className="text-2xl mr-3">🌊</span>
                        <div className='text-left'>
                            <strong className="font-semibold">Laguna de Mar Chiquita</strong> – perfecta para actividades acuáticas, camping y experiencias al aire libre.
                        </div>
                    </li>
                    <li className="flex items-start mt-4">
                        <span className="text-2xl mr-3">🌄</span>
                        <div className='text-left'>
                            <strong className="font-semibold">Sierra de los Padres</strong> – alternativa cercana a Mar del Plata, muy elegida por quienes buscan naturaleza sin alejarse demasiado.
                        </div>
                    </li>
                    <li className="flex items-start mt-4">
                        <span className="text-2xl mr-3">📍</span>
                        <div className='text-left'>
                            <span className="font-semibold">Otras ubicaciones</span> – En somital estamos abiertos a escuchar nuevas propuestas para llevar nuestras actividades a más destinos.
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default LocationSection;
