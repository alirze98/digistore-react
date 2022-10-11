import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
// import required modules
import { Pagination } from "swiper";
// images 
import productIcon from '../assets/product-icon.svg' 
// classes
import classes from './DraggableCarousel.module.css';
const DraggableCarousel = () => {
    const [carouselItems,setCarouselItems] = useState([])

    useEffect(()=>{
        
    },[])
    return (
        <div className={classes['draggable-carousel']}>
            <div className={classes.title}>
                <img src={productIcon} alt="productIcon" />
                <span>جدیدترین محصولات</span>
            </div>
            <Swiper
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

        </div>
    );
};

export default DraggableCarousel;