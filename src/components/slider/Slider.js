import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";
// images
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";
import supportIcon from "../../assets/support.svg";
import truckIcon from "../../assets/truck.svg";
import creditcardIcon from "../../assets/credit-card.svg";
// classes
import classes from "./Slider.module.css";

const Slider = () => {
  const banners = [banner2, banner3, banner4];
  const swiperContent = banners.map((banner, index) => {
    return (
      <SwiperSlide className={classes["slider-item"]} key={index}>
        <img
          src={banner}
          alt="banner"
          className={classes["slider-item__image"]}
        />
      </SwiperSlide>
    );
  });
  return (
    <>
      <div className={classes["swiper-container"]}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={
            //   {
            //   delay: 3000,
            //   disableOnInteraction: false,
            //  }
            true
          }
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {swiperContent}
        </Swiper>
        <div className={classes.access}>
          <div className={classes["access-item"]}>
            <div className={classes.logo}>
              <img
                src={truckIcon}
                alt="truckIcon"
                className={classes["logo-image"]}
              />
            </div>
            <div>
              <div className={classes.title}>حمل و نقل سریع</div>
              <div className={classes.desc}>
                حمل و نقل سریع و به صرفه به سراسر کشور
              </div>
            </div>
          </div>
          <div className={classes["access-item"]}>
            <div className={`${classes.logo} ${classes.purpleColor}`}>
              <img
                src={supportIcon}
                alt="supportIcon"
                className={classes["logo-image"]}
              />
            </div>
            <div>
              <div className={classes.title}>پشتیبانی 24 ساعته</div>
              <div className={classes.desc}>در هر زمان پشتیبان شما هستیم</div>
            </div>
          </div>
          <div className={classes["access-item"]}>
            <div className={`${classes.logo} ${classes.blueColor}`}>
              <img
                src={creditcardIcon}
                alt="creditCardIcon"
                className={classes["logo-image"]}
              />
            </div>
            <div>
              <div className={classes.title}>پرداخت آسان</div>
              <div className={classes.desc}>امکان پرداخت حضوری در محل</div>
            </div>
          </div>
          <div className={classes["access-item"]}>
            <div className={`${classes.logo} ${classes.lightBlueColor}`}>
              <img src={truckIcon} alt="" className={classes["logo-image"]} />
            </div>
            <div>
              <div className={classes.title}>حمل و نقل سریع</div>
              <div className={classes.desc}>
                حمل و نقل سریع و به صرفه به سراسر کشور
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
