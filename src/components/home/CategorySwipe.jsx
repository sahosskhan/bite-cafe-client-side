import { Swiper, SwiperSlide } from "swiper/react";
import Silder1 from '../../../assets/home/slide1.jpg'
import Silder2 from '../../../assets/home/slide2.jpg'
import Silder3 from '../../../assets/home/slide3.jpg'
import Silder4 from '../../../assets/home/slide4.jpg'
import Silder5 from '../../../assets/home/slide5.jpg'
import Silder6 from '../../../assets/home/slide6.jpg'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { Autoplay, Pagination} from 'swiper/modules';

const CategorySwipe = () => {
    const Silder = [
        {
          slide: Silder1,
          name: 'Biryani'
        },
        {
          slide: Silder2,
          name: 'Steak'
        },
        {
          slide: Silder3,
          name: 'Pizza'
        },
        {
          slide: Silder4,
          name: 'Burger'
        },
        {
          slide: Silder5,
          name: 'Pasta'
        },
        {
          slide: Silder6,
          name: 'Dessert'
        },
      
      ];

    return (
        <>
                 <div className="max-w-screen-2xl container mx-auto p-2">


<Swiper

  slidesPerView={1}
  spaceBetween={2}
  loop={true}
  pagination={{
    clickable: true,
  }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
  breakpoints={{
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }}
  modules={[Autoplay, Pagination]}
  className="w-auto"
>
  {Silder.map((Silder, index) => (
    <SwiperSlide key={index} className="slide container " ><img className="flex  rounded-2xl hover:grayscale transition-all duration-500 mx-auto" src={Silder.slide} alt="" />
      <h1 className="text-overlay text-center mt-2 text-3xl">{Silder.name}</h1></SwiperSlide>
  ))}
</Swiper>
</div>    
        </>
    );
};

export default CategorySwipe;