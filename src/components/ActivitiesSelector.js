'use client'

import CardForSelection from './CardForSelection';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ActivitiesSelector = ({ activities }) => {
    return (
        <div className='ml-6 w-fit max-w-[30%] flex flex-col flex-nowrap lg:flex-wrap items-start content-start justify-start justify-items-start h-fit md-h-[85vh] '>
          {activities.map((item, index) => (
              <CardForSelection key={index} data={item}/>
          ))}
        </div>
              
    );
}

export default ActivitiesSelector;
