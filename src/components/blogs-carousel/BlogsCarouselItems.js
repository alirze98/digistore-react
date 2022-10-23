import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import BlogsCarouselItem from "./BlogsCarouselItem";
import classes from "./BlogsCarouselItems.module.css";

const BlogsCarouselItems = (props) => {
    const items = props.data.map((item) => {
        return (
            <SwiperSlide>
          <BlogsCarouselItem
            image={item.image}
            title={item.title}
            desc={item.body}
            like={item.like}
            view={item.views}
            id={item.id}
          />
          </SwiperSlide>
        );
      })
  return (
    <div>
      <Swiper slidesPerView={6}  modules={[Pagination]} className="mySwiper"
      breakpoints={{
        1200:{
          slidesPerView: 5,
        },
        768:{
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        },
        100: {
          slidesPerView: 1,
        },
        
      }}
    
      >
        {items}
      </Swiper>
    </div>
  );
};

export default BlogsCarouselItems;
