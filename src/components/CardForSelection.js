"use client";
import { useContext } from "react";
import { EstadoGlobalContext } from "@/context/EstadoGlobal";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardForSelection = ({ data }) => {
  const { imageSrc, name, price, details } = data;
  let { selectedActivity, setSelectedActivity } =
    useContext(EstadoGlobalContext);

  return (
    <div className="m-2 rounded overflow-hidden shadow-lg w-[75%] lg:w-[65%] max-w-[800px] max-h-[600px] bg-foreground ">
      <div className="aspect-[16/9] w-full">
        <Image
          src={imageSrc[0]} // Reemplaza con tu ruta de imagen
          alt="Fondo"
          // layout="fill"
          objectFit="cover"
          objectPosition="center"
          // priority={true}
          width={350}
          height={40}
          className="w-full"
        />
      </div>

      <div className="px-4 py-2 flex flex-row jsutify-center">
        <button
          className="w-[100%] font-bold text-xs lg:text-md mb-2 text-center rounded hover:text-primary hover:bg-primary/[.06]  transition duration-300 min-h-[60px] flex items-center justify-center"
          onClick={() => {
            setSelectedActivity(data);
            window.scrollTo({
              top: 0,
              behavior: "smooth", // Esto hace que el scroll sea suave
            });
          }}
        >
          {name}
        </button>
      </div>
    </div>
  );
};

export default CardForSelection;
