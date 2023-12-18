'use client'
import CardForSelection from './CardForSelection';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ActivitiesSelector = ({ activities, handleSelectedActivity }) => {
    
    return (
        <div className='ml-6 w-fit max-w-[30%] flex flex-col flex-wrap items-start content-start justify-start justify-items-start h-[85vh] '>
          {activities.map((item, index) => (
              <CardForSelection key={index} data={item} handleSelectedActivity={(activity) => handleSelectedActivity(activity)}/>
          ))}
        </div>
              
    );
}

export default ActivitiesSelector;
