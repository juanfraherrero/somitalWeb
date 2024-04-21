import Image from "next/image";
import Navbar from "../components/Navbar";

import data from "../data/activities.json";
import infoHome from "../data/info-home.json";
import locations from "../data/locationsHome.json";
import CarouselActivities from "../components/CarouselActivities";

import MapContainer from "../components/MapContainer";

import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar path={"/"}></Navbar>
      <main className="">
        {/* SECIÓN DE LA IMAGEN CON LE LOGO ARRIBA */}
        <section className="max-w-7xl mx-auto flex justify-center items-center relative mb-16">
          <div className="absolute inset-0 bg-white opacity-30"></div>
          <Image
            src="/foto-nosotros.jpg" // Reemplaza con tu ruta de imagen
            alt="Fondo"
            // layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority={true}
            width={1280}
            height={720}
          />
          {/* <div className="flex justify-center items-center h-full absolute top-0 left-0 w-full">
          <Image src="/ruta-de-tu-logo.svg" alt="Logo" width={100} height={100} />
        </div> */}
          {/* Título oculto para SEO y accesibilidad */}
          <h1 className="sr-only">Somital Aventuras</h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image src="/logo.svg" alt="Logo" width={400} height={400} />
          </div>
        </section>

        {/* SECCIÓN ABOUT US */}

        <section className="max-w-7xl mx-auto flex justify-center items-center mb-16">
          <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
            <div className="flex flex-wrap ">
              <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                <div className="relative lg:max-w-md">
                  <Image
                    src="/logo.svg"
                    alt="aboutimage"
                    width={500}
                    height={500}
                    className="relative z-10 object-fit w-full rounded h-96"
                  />
                  {/* <div
                            className="absolute bottom-0 right-0 z-10 p-4  border-4 border-color-secondary rounded shadow lg:-mb-8 lg:-mr-11 backdrop-opacity-15">
                            <p className="text-lg font-semibold md:w-72">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="black"
                                    className="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                    </path>
                                </svg> Generando nuevas experiencias desde hace 20 años
                            </p>
                        </div> */}
                </div>
              </div>
              <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                <div className="pl-4 mb-6 border-l-4 border-color-primary ">
                  <h2 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                    {infoHome.sobreNosotros}
                  </h2>
                  <h3 className="text-sm text-gray-600 uppercase dark:text-gray-400">
                    {infoHome.quienesSomos}
                  </h3>
                </div>
                {infoHome.content.map((item, index) => (
                  <p
                    key={index}
                    className={`text-lg text-gray-600 dark:text-gray-400 ${
                      index === infoHome.content.length - 1 ? "mb-7 " : "mb-3"
                    }`}
                  >
                    {item}
                  </p>
                ))}
                <Link
                  href="/#contacto"
                  className="mt-6 px-4 py-2 text-white font-bold bg-color-primary/[.9]  rounded hover:bg-color-primary  transition duration-300 "
                >
                  {infoHome.contactanos}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN DEL CARROUSEL DE CARDS */}

        <section className="max-w-7xl mx-auto flex flex-wrap justify-center mb-16">
          <div className="w-full px-6 mb-10  lg:mb-0 ">
            <h2 className=" text-center mt-7 mb-5 text-2xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
              Actividades en Mar del Plata y alrededores
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">
                Descubre la emoción del{" "}
                <strong>trekking en Mar del Plata</strong>, donde ofrecemos
                senderos enfocados para principiantes y para expertos. Nuestros
                senderos de trekking son perfectos para disfrutar de la belleza
                natural de la sierra.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">
                Experimenta la aventura del <strong>parapente</strong> en las
                alturas de la sierra Los Difuntos, despegando desde los puntos
                más altos para una experiencia única en un entorno de montaña.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Ofrecemos emocionantes actividades como{" "}
                <strong>tirolesa</strong> y <strong>palestra</strong>, una
                actividad favorita para los niños, siendo una opción popular
                para excursiones con colegios. Estas actividades están diseñadas
                para maximizar el contacto con la naturaleza y ofrecer momentos
                inolvidables.
              </p>
            </div>
          </div>
          <CarouselActivities activities={data} />
        </section>

        {/* SECCIÓN DE MAPA CON POSICIONES */}
        <section
          id="mapa"
          className="max-w-7xl mx-auto flex flex-wrap justify-center mb-16"
        >
          <MapContainer locations={locations} />
        </section>

        {/* SECCIÓN DEL FOOTER */}
        <Footer />
      </main>
    </>
  );
}
