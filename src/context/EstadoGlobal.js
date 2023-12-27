'use client'
import { createContext, useState } from 'react';

export const EstadoGlobalContext = createContext();
import activities from '../data/activities.json';
export const EstadoGlobalProvider = ({ children }) => {
  const [selectedActivity, setSelectedActivity] = useState(activities.find((activity)=> {return (activity.type.includes('institucion') && activity.type.includes('personal'))}));
  
  const setDefaultActivity = () => {
    setSelectedActivity(activities.find((activity)=> {return (activity.type.includes('institucion') && activity.type.includes('personal'))}));
  }
  return (
    <EstadoGlobalContext.Provider value={{ selectedActivity, setSelectedActivity, setDefaultActivity }}>
      {children}
    </EstadoGlobalContext.Provider>
  );
};