'use client'

import { useContext } from 'react';
import { EstadoGlobalContext } from '../context/EstadoGlobal';

import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MapContainer from './MapContainer';

const ActivityDescriptor = () => {
  let { selectedActivity, setSelectedActivity } = useContext(EstadoGlobalContext);
  
  function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
        className={className}
          style={{ ...style, scale: '2', right: '12px' }}
          onClick={onClick}
        />
      );
    }
    
  function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, scale: '2', left: '12px', zIndex: '1' }}
          onClick={onClick}
        />
      );
    }
  
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
  const locations = [{
      "lat": selectedActivity.details[1].lat, 
      "lng": selectedActivity.details[1].lng, 
      "name": selectedActivity.details[1].value, 
      "description": selectedActivity.details[1].description
  }]
  return (
      <div className='max-w-[60%]'>
          <h1 className="text-4xl font-bold my-4 mb-8 text-center">{selectedActivity.name}</h1>
          <Slider {...settings} className='w-[100%]  h-[200px] sm:h-[350px] lg:h-[450px]'>
              {selectedActivity.imageSrc.map((image, index) => (
                  <div key={index}>
                      <Image src={image} alt={`actividad-${index + 1}`} width={800} height={500} />
                  </div>
              ))}
          </Slider>
          <div className="flex flex-col justify-start items-start mt-10">
              {selectedActivity.details.map((detail, index) => (
              <div key={index} className="my-2 flex flex-row items-center justify-between">
                  <Image src={detail.icon} alt={detail.label} width={24} height={24}  className='mr-3'/>
                  <p>{detail.value}</p>
              </div>
              ))}
          </div>
          <div>
              <h2 className='text-2xl font-bold my-4 my-4 mt-6'>Descripción</h2>
              {selectedActivity.description.map((desc, index) => (
                  <p key={index} className="my-4">
                      {desc}
                  </p>
              ))}
          </div>
          <div className='flex flex-row justify-center'>
            <MapContainer locations={locations}/>
          </div>
            
      </div>              
  );
}

export default ActivityDescriptor;
