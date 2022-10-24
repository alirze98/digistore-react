import React from "react";
import CarouselItem from "./CarouselItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
const CarouselItems = (props) => {
  const items = props.data.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <CarouselItem
          title={item.title}
          price={item.price}
          image={item.image}
          id={item.id}
          count={1}
        />
      </SwiperSlide>
    );
  });
  return (
    <div>
      <Swiper
        slidesPerView={6}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          1200: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 4,
          },
          576: {
            slidesPerView: 3,
          },
          100: {
            slidesPerView: 2,
          },
        }}
      >
        {items}
      </Swiper>
    </div>
  );
};

export default CarouselItems;
