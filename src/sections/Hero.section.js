import React from 'react';
import Image from 'next/image';
import ButtonCTA from '@/components/ButtonCTA'

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/foto-nosotros.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 animate-blur-in"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center text-background">
        <div className="max-w-4xl mx-auto">
          {/* Logo with Border and Animation */}
          <div className="mb-8 animate-logo-slide-up">
            <Image
              src="/logo_borde_blanco.png"
              alt="Somital Logo"
              width={2332}
              height={499}
              className="w-[100%] md:w-[80%] lg:w-[60%] mx-auto"
              priority
            />

          </div>

          {/* Description Text with Animation */}
          <div className="mb-8 animate-text-slide-down">
            <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
              Somital ofrece turismo aventura y naturaleza en Mar del Plata, Rincón Grande, Sierra de los Padres, La Serranita, y, Sierras cercanas.
              Con nosotros, cada aventura es <span className="font-bold">segura, divertida y educativa.</span>
              {/* Descubre trekking, camping, escalada y parapente en los paisajes más imponentes de Mar del Plata. */}
            </p>
          </div>

          {/* CTA Button with Animation */}
          <div className="animate-fade-in">
            <ButtonCTA />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;