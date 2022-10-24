import React, { useEffect, useState } from "react";
import classes from "./DraggableCarousel.module.css";
import axios from "axios";
import CarouselItems from "./CarouselItems";
import SubHeading from "../common/SubHeading";
import productIcon from "../../assets/product-icon.svg";
import loaderGif from "../../assets/loader.gif";

const DraggableCarousel = () => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://digistore.glitch.me/products")
      .then((response) => {
        setCarouselItems(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrors(true);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className={classes["draggable-carousel"]}>
      <SubHeading icon={productIcon} title={"جدیدترین محصولات"} />
      {isLoading && (
        <img src={loaderGif} alt="loader" className={classes.loader} />
      )}
      {!isLoading && !errors && <CarouselItems data={carouselItems} />}
      {errors && <div className={classes.error}>something went wrong</div>}
    </div>
  );
};

export default DraggableCarousel;
