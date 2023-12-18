
import Image from 'next/image'
import Navbar from '../components/Navbar';

import data from '../data/activities.json';
import locations from '../data/locationsHome.json';
import CarouselActivities from '../components/CarouselActivities'; 

import MapContainer from '../components/MapContainer';

import Footer from '../components/Footer';

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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image src="/logo.svg" alt="Logo" width={400} height={400} />
        </div>
      </section>
      
      {/* SECCIÓN DEL CARROUSEL DE CARDS */}

      <section className="max-w-7xl mx-auto flex flex-wrap justify-center mb-16">
        <CarouselActivities activities={data} />
      </section>

      {/* SECCIÓN DE MAPA CON POSICIONES */}
      <section id='mapa' className="max-w-7xl mx-auto flex flex-wrap justify-center mb-16">
        <MapContainer locations={locations}/>
      </section>
        
      
      {/* SECCIÓN DEL FOOTER */}
      <Footer/>
        
    </main>
    </>
  )
}
