import React, { useEffect, useState } from "react";
import productIcon from "../assets/product-icon.svg";
import classes from "./DraggableCarousel.module.css";
import axios from "axios";
import CarouselItems from "./CarouselItems";

const DraggableCarousel = () => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [errors, setErrors] = useState(null)

  useEffect(() => {
     axios.get("https://digistore.glitch.me/products").then(response =>{
         setCarouselItems(response.data);
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
      <CarouselItems data={carouselItems} />
    </div>
  );
};

export default DraggableCarousel;
