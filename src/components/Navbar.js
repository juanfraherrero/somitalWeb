'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = ({ path }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Match this with animation duration
    } else {
      // Open menu
      setIsMenuOpen(true);
    }
  }

  return (
    <div className="fixed w-full top-4 left-0 z-50">
      <div className="max-w-6xl flex items-center justify-between bg-background/90 backdrop-blur-sm rounded-nav shadow-lg hover:shadow-xl transition-all duration-300 mx-4 sm:mx-6 md:mx-8 lg:mx-auto py-3 px-4 sm:px-6">
        {/* BURGER BUTTON */}
        <div className='sm:hidden'>
          <button
            className={`sm:hidden ${isMenuOpen ? "invisible" : "visible"}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Image src="/svgs/burger-list.svg" alt="Menu" width={40} height={40} />
          </button>
        </div>

        {/* LOGO */}
        <Link href="/">
          <Image src="/logo.svg" alt="Logo Somital" width={240} height={100} className="mr-4 w-[40vw] md:w-[240px] " />
        </Link>

        {/* LIST MENU FOR LAPTOP */}

        <div className={`hidden sm:flex text-primary font-bold text-lg md:text-xl lg:text-2xl sm:items-center space-x-4`}>
          <Link key="actividades" href="/actividades"
            className='nav-item border-transparent text-secondary hover:border-b-2 hover:border-secondary transition duration-300'>
            Actividades
          </Link>
          <Link key="colegios" href="/actividades/colegios"
            className='nav-item border-transparent text-secondary hover:border-b-2 hover:border-secondary transition duration-300'>
            Colegios
          </Link>
          <Link key="mapa" href="/#mapa"
            className='nav-item border-transparent text-secondary hover:border-b-2 hover:border-secondary transition duration-300'>
            Mapa
          </Link>
          <Link key="contacto" href={path + "#contacto"}
            className='nav-item border-transparent text-secondary hover:border-b-2 hover:border-secondary transition duration-300'>
            Contacto
          </Link>
        </div>
      </div>

      {/* LIST MENU FOR MOBILE */}
      <div
        className={`fixed top-0 left-0 px-4 h-screen w-2/5 bg-background/90 backdrop-blur-sm rounded-menu shadow-lg z-50 ${isMenuOpen
          ? 'slide-in-left'
          : isAnimating
            ? 'slide-out-left'
            : 'hidden'
          }`}
      // onAnimationEnd={() => {
      //   if (isAnimating && !isMenuOpen) {
      //     setIsMenuOpen(false);
      //     setIsAnimating(false);
      //   }
      // }}
      >
        <div className='my-8'>
          <button
            onClick={toggleMenu}
            className="p-2"
            aria-label="Close menu"
          >
            <Image src="/svgs/cross.svg" alt="Close menu" width={30} height={30} />
          </button>
        </div>
        <div className="flex flex-col space-y-2 items-start">
          <Link key="actividades" href="/actividades" onClick={() => { setTimeout(toggleMenu(), 300) }}
            className='nav-item text-left py-4 font-bold border-transparent text-secondary hover:border-b-2 hover:border-secondary transition duration-300'>
            Actividades
          </Link>
          <Link key="colegios" href="/actividades/colegios" onClick={() => { setTimeout(toggleMenu(), 300) }}
            className='nav-item text-left py-4 font-bold border-transparent text-secondary hover:border-b-2 hover:border-secondary transition duration-300'>
            Colegios
          </Link>
          <Link key="mapa" href="/#mapa" onClick={() => { setTimeout(toggleMenu(), 300) }}
            className='nav-item text-left py-4 font-bold border-transparent text-secondary hover:border-b-2 hover:border-secondary transition duration-300'>
            Mapa
          </Link>
          <Link key="contacto" href={path + "#contacto"} onClick={() => { setTimeout(toggleMenu(), 300) }}
            className='nav-item text-left py-4 font-bold border-transparent text-secondary hover:border-b-2 hover:border-secondary transition duration-300'>
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;