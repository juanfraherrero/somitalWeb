'use client'
import Card from '../components/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselActivities = ({ activities }) => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        lazyLoad: true,
        speed: 2000,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 510,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0,
              infinite: true,
            }
          }
        ]
      };
    return (
        <Slider {...settings} className='w-full  min-h-fit'>
            {activities.map((item, index) => (
                <Card key={index} data={item} />
            ))}
        </Slider>
    );
}

export default CarouselActivities;
