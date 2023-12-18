'use client'

import Navbar from '../../components/Navbar';
import { useState } from 'react';
import activities from '../../data/activities.json';

import ActivitiesSelector from '../../components/ActivitiesSelector'; 
import ActivityDescriptor from '../../components/ActivityDescriptor';

import Footer from '../../components/Footer';

export default function Home() {
  const [selectedActivity, setSelectedActivity] = useState(activities[0]);
  
  const handleSelectedActivity = (activity) => {
    setSelectedActivity(activity);
  }

  return (
    <>
    <Navbar path={"/actividades"}></Navbar>
    <main className="">      
      {/* SECCIÓN DEL DESPLIEGUEDE ACTIVIDAD CON DESCRIPCIÓON */}

      <section className="max-w-7xl mx-auto flex flex-row flex-wrap justify-betwwn mb-16 ">
        <ActivitiesSelector activities={activities.filter((activity)=>activity.type.includes('personal'))} handleSelectedActivity={handleSelectedActivity} />
        <ActivityDescriptor activity={selectedActivity} />
      </section>

      {/* SECCIÓN DEL FOOTER */}
      <Footer/>
        
    </main>
    </>
  )
}
