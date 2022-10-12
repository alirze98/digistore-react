import React, { useEffect, useState } from "react";
import productIcon from "../assets/product-icon.svg";
import classes from "./DraggableCarousel.module.css";
import axios from "axios";
import CarouselItems from "./CarouselItems";
import loaderGif from "../assets/loader.gif"

const DraggableCarousel = () => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setIsLoading(true)
     axios.get("https://digistore.glitch.me/products").then(response =>{
         setCarouselItems(response.data);
         setIsLoading(false)
     }).catch(error =>{
        setErrors(true)
     })
  }, []);
  return (
    <div className={classes["draggable-carousel"]}>
      <div className={classes.title}>
        <img src={productIcon} alt="productIcon" />
        <span>جدیدترین محصولات</span>
      </div>
      { isLoading &&<img src={loaderGif} alt="loader" className={classes.loader} /> }
      {!isLoading &&<CarouselItems data={carouselItems} />}
    </div>
  );
};

export default DraggableCarousel;
