import React from "react";
import Image from "next/image";
import Link from "next/link";

import data from "../data/infoFooter.json";

import FormFooter from "./FormFooter";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-color-primary py-8 text-white">
      <h2 className="sr-only">Contactar</h2>
      <div className="container mx-auto flex flex-col justify-center items-center xmd:flex-row xmd:items-start max-w-7xl mx-auto ">
        {data.map((column, index) => (
          <div
            key={index}
            className="w-4/5 xmd:w-1/3 px-2 flex justify-center items-start mb-8 xmd:mb-0"
          >
            <div className="mx-auto w-4/5">
              <h4 className="text-2xl font-semibold mb-4">{column.column}</h4>
              {column.rows.map((row, index) => (
                <div key={index} className="mb-2 flex items-center">
                  <Link href={row.link ? row.link : ""}>
                    <Image
                      src={row.icon}
                      alt={`icono-${row.type}`}
                      width={30}
                      height={30}
                      className="mr-4"
                    />
                  </Link>
                  <Link
                    href={row.link ? row.link : ""}
                    target={row.target ? row.target : "_self"}
                  >
                    <p className="text-sm xmd:text-lg">
                      {column.column == "Redes" ? row.type : row.value}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="w-4/5 xmd:w-1/3 px-2 flex justify-center items-start">
          <div className="w-4/5 mx-auto">
            <h4 className="text-2xl font-semibold mb-4 w-4/5 ">Preguntar</h4>
            <div className="mb-2 flex items-center">
              <FormFooter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
