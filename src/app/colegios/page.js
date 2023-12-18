'use client'
import Navbar from '../../components/Navbar';
import { useState } from 'react';

import activities from '../../data/activities.json';

import ActivitiesSelector from '../../components/ActivitiesSelector'; 
import ActivityDescriptor from '../../components/ActivityDescriptor';

import Footer from '../../components/Footer';

export default function Home() {

  return (
    <>
    <Navbar path={"/colegios"}></Navbar>
    <main className="">      
      {/* SECCIÓN DEL DESPLIEGUEDE ACTIVIDAD CON DESCRIPCIÓON */}

      <section className="max-w-7xl mx-auto flex flex-row flex-wrap justify-betwwn mb-16 ">
        <ActivitiesSelector activities={activities.filter((activity)=>activity.type.includes('institucion'))} />
        <ActivityDescriptor />
      </section>

      {/* SECCIÓN DEL FOOTER */}
      <Footer/>
        
    </main>
    </>
  )
}
