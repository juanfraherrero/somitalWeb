'use client'
import Card from '@/components/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CarouselActivities = ({ activities }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    lazyLoad: true,
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    centerMode: true,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '20px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '20px'
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '20px'
        }
      }
    ]
  };
  return (
    <Slider {...settings} className='w-full min-h-fit'>
      {activities.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </Slider>
  );
}

export default CarouselActivities;
