import React, { useEffect, useState } from "react";
import classes from "./SingleProduct.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import plusIcon from "../../assets/plus.svg";
import subtractionIcon from "../../assets/subtraction.svg";
import trashIcon from "../../assets/trash.svg";
import Filter from "../common/Filter";

const SingleProduct = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const params = useParams();
  useEffect(() => {
    axios
      .get(`https://digistore.glitch.me/products/${params.productId}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  return (
    <>
      <Filter />
      <div className={classes["single-product"]}>
        <img src={data.image} alt="Phone image" />
        <div className={classes["left-side"]}>
          <h4 className={classes.title}>{data.title}</h4>
          <div className={classes.price}>{data.price}</div>
          <div className={classes.actions}>
            <div className={classes.btns}>
              <img src={plusIcon} alt="Plus icon" />
              <span>0</span>
              <img src={subtractionIcon} alt="subtraction icon" />
            </div>
            <img src={trashIcon} alt="trashIcon" className={classes.trash} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
