import useReview from "../../hooks/useReview";
import CLoader from "../loader/CLoader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation} from 'swiper/modules';
import {} from 'swiper';

import "swiper/css";
import "swiper/css/navigation";

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [review,loading] = useReview();
    if (loading) return <CLoader/>;

    return (
        <div>
                   <section className="pb-28 max-w-screen-2xl container mx-auto p-2">

<Swiper   modules={[Autoplay, Pagination, Navigation]}   loop={true}
pagination={{
clickable: true,
}}
autoplay={{
delay: 2000,
disableOnInteraction: false,
}}  className="mySwiper">

    {
        review.map(review => <SwiperSlide 
            key={review._id}
        >
            <div className="flex flex-col items-center mx-auto container my-16 ">
                <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                    className="hover:scale-110 scale-100 transition-all duration-500"
                />
                <p className=" text-xl font-normal py-10">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
        </SwiperSlide>)
    }
</Swiper>
</section> 
        </div>
    );
};

export default Testimonial;