'use client'  
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useContext } from 'react';
import { EstadoGlobalContext } from '../context/EstadoGlobal';

import { quicksand } from '../app/fonts'

import data from '../data/list-navbar';

const Navbar = ({path}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setDefaultActivity } = useContext(EstadoGlobalContext);

  const openBurgerList = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="w-full h-1/5 shadow-md mb-5 sticky top-0 z-50 bg-color-white">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-4 px-6">
        {/* BURGER BUTTON */}
        <div className='sm:hidden'>
          <button className={`sm:hidden ${isMenuOpen? "invisible":"visible"} `} onClick={openBurgerList}>
            <Image src="/svgs/burger-list.svg" alt="Menu" width={40} height={40} />
          </button>
        </div>

        {/* LOGO */}
        <Link href="/"> 
          <Image src="/logo.svg" alt="Logo" width={120} height={120} className="mr-4" />
        </Link>
        
        {/* LIST MENU FOR LAPTOP */}

        <div className={`${quicksand.className} hidden sm:flex text-color-primary font-bold text-2xl sm:items-center space-x-4`}>
          {data.map((item, index) => (
            <Link key={index} href={(item.toId? path : "") + item.href} onClick={setDefaultActivity}>
              <div className="nav-item border-transparent hover:border-b-2 hover:border-color-primary transition duration-300">
                {item.nombre}
              </div>
            </Link>  
          ))}
        </div>
      </div>
      
      {/* MENU DESPLEGABLE */}

      <div className={`top-0 ${isMenuOpen? "absolute" : "hidden" } h-screen w-2/5 bg-color-secondary bg-opacity-95 z-50 animate-open-menu `}>

        <div className='m-8'>
          <button className="" onClick={openBurgerList}>
            <Image src="/svgs/cross.svg" alt="Menu" width={30} height={30} />
          </button>
        </div>
        {data.map((item, index) => (
            <Link key={index} href={(item.toId? path : "") + item.href} onClick={() => {setDefaultActivity(); setTimeout(openBurgerList(), 300)}}>
              <div className="nav-item mx-auto text-center py-4 font-bold border-transparent hover:border-b-2 hover:border-color-primary hover:shadow-sm transition duration-300">
                {item.nombre}
              </div>
            </Link>  
          ))}
      </div>
    </div>
  );
};

export default Navbar;