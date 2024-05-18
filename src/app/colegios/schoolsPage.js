"use client";
import { useContext } from "react";
import { EstadoGlobalContext } from "../../context/EstadoGlobal";
import Navbar from "../../components/Navbar";
import activities from "../../data/activities.json";

import ActivitiesSelector from "../../components/ActivitiesSelector";
import ActivityDescriptor from "../../components/ActivityDescriptor";
import Select from "react-select";

import Footer from "../../components/Footer";

export default function Home() {
  let { selectedActivity, setSelectedActivity } =
    useContext(EstadoGlobalContext);
  const options = activities
    .filter((activity) => activity.type.includes("institucion"))
    .map((activity) => {
      return {
        value: activity.name,
        label: activity.name,
      };
    });
  const customStyles = {
    // Estilo para el contenedor del select
    control: (provided) => ({
      ...provided,
      zIndex: 10, // Establecer el z-index deseado
    }),
    container: (provided) => ({
      ...provided,
      zIndex: 10, // Establecer el z-index deseado
    }),
  };
  return (
    <>
      <Navbar path={"/colegios"}></Navbar>
      <main className="">
        {/* SECCIÓN DEL DESPLIEGUEDE ACTIVIDAD CON DESCRIPCIÓON */}

        <section className="max-w-7xl mx-auto sm:flex flex-row flex-wrap justify-betwwn mb-16 ">
          <div className=" hidden sm:flex m-0 p-0 max-w-[30%] ml-6 mt-12">
            <ActivitiesSelector
              activities={activities.filter((activity) =>
                activity.type.includes("institucion")
              )}
            />
          </div>
          <div className=" sm:hidden max-w-[90%] mx-auto my-12 ">
            <Select
              isSearchable={false}
              options={options}
              autoFocus={true}
              placeholder="Selecciona una actividad"
              defaultValue={selectedActivity.name}
              onChange={(e) => {
                setSelectedActivity(
                  activities.find((activity) => activity.name == e.value)
                );
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#F6F8FB",
                  primary: "#FCBD30",
                },
              })}
              styles={customStyles}
            />
          </div>
          <div className="mx-auto sm:mx-0 max-w-[90%] sm:max-w-[60%]">
            <ActivityDescriptor />
          </div>
        </section>

        {/* SECCIÓN DEL FOOTER */}
        <Footer />
      </main>
    </>
  );
}
