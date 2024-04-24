/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import OrderCard from "../template/OrderCard";


const OrderTabData = ({items}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div >

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=' grid md:grid-cols-3 gap-10 place-items-center md:w-10/12 md:mx-auto py-24 px-2'>
                        {
                            items.map(item => <OrderCard
                                key={item._id}
                                item={item}
                            />)
                        }
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default OrderTabData;