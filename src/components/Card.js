  import React from 'react';
  import Image from 'next/image';
  import Link from 'next/link';

  const Card = ({ data }) => {
    const { imageSrc, name, price, details } = data;
    
    return (
      <div className="mx-auto my-6 rounded overflow-hidden shadow-lg min-h-[350] max-w-[800px] max-h-[600px] mx-[30px] bg-white w-[250px] md:w-[250px] lg:w-[338px]  "  >
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
          
        <div className="px-6 py-4 ">
          <Link href="/product">
            <div className="font-bold text-xl mb-2 text-center rounded hover:text-color-primary hover:bg-color-primary/[.06]  transition duration-300 min-h-[60px] flex items-center justify-center" >{name}</div>
          </Link>  
          <p className="text-gray-700 text-base">{price}</p>
          <hr className="my-2" />
          <div className="grid grid-cols-2 gap-4 min-h-[140px] ">
            {details.map((detail, index) => (
              <div key={index} className="flex items-center">
                <Image src={detail.icon} alt={detail.label} width={10} height={10} className="h-6 w-6 mr-2" />
                <span className="text-sm">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Card;