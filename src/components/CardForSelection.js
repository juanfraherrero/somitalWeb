  import React from 'react';
  import Image from 'next/image';
  import Link from 'next/link';

  const CardForSelection = ({ data, handleSelectedActivity }) => {
    const { imageSrc, name, price, details } = data;
    
    return (
      <div className="m-2 rounded overflow-hidden shadow-lg w-[30%] max-w-[800px] max-h-[600px] bg-white "  >
        <div className='aspect-[16/9] w-full' >
          <Image
              src={imageSrc[0]} // Reemplaza con tu ruta de imagen
              alt="Fondo"
              // layout="fill"
              objectFit="cover"
              objectPosition="center"
              // priority={true}
              width={350}
              height={40}
              className='w-full'
            />  
        </div>
          
        <div className="px-4 py-2 ">
          <button 
            className="font-bold text-xs lg:text-md mb-2 text-center rounded hover:text-color-primary hover:bg-color-primary/[.06]  transition duration-300 min-h-[60px] flex items-center justify-center"
            onClick={() => handleSelectedActivity(data)}
            >{name}</button>
        </div>
      </div>
    );
  };

  export default CardForSelection;