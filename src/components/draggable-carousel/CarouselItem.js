import React, { useState } from "react";
import classes from "./CarouselItem.module.css";
// images
import subtractionIcon from "../../assets/subtraction.svg";
import plusIcon from "../../assets/plus.svg";
import trashIcon from "../../assets/trash.svg";
import heartIcon from "../../assets/heart.svg";
// custom hook
import useChangeNumberToPersian from "../../hooks/use-change-number-to-persian.js";
// redux
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { checkActions } from "../../store/check-slice";

const CarouselItem = (props) => {
  const dispatch = useDispatch();
  const title = `${props.title.substr(0, 45)}...`;
  const persianNumber = useChangeNumberToPersian(props.price.toLocaleString());
  const cartArr = useSelector(state => state.cart.cart);
  const itemInCart = cartArr.find(item => item.id === props.id);
  
  const incrementBtnHandler = () => {
    dispatch(
      cartActions.incrementItem({
        image: props.image,
        title: props.title,
        price: props.price,
        count: props.count,
        id: props.id,
      })
    );
    dispatch(checkActions.unChecked())
  
  };
  const decrementBtnHandler = () => {
    dispatch(cartActions.decrementItem(props.id));
  };
  const deleteBtnHandler = () => {
    dispatch(cartActions.removeItem(props.id));
  };
  return (
    <div
      className={`${classes["carousel-item"]} ${
        props.isShopItem ? classes.shopItem : ""
      }`}
    >
      <img src={props.image} alt="image" className={classes["phone-image"]} />
      <div>
        <div className={classes.title}>{title}</div>
        <div className={classes.price}>{persianNumber}</div>
        <div
          className={`${classes.actions} ${
            props.isShopItem ? classes.shopItem : ""
          }`}
        >
          <div
            className={`${classes.btns} ${
              props.isShopItem ? classes.shopItem : ""
            }`}
          >
            <button className={classes.button} onClick={incrementBtnHandler}>
              <img src={plusIcon} alt="icon" className={classes["plus-icon"]} />
            </button>
            <span className={classes.count}>{itemInCart? itemInCart.count: 0}</span>
            <button className={classes.button} onClick={decrementBtnHandler}>
              {" "}
              <img
                src={subtractionIcon}
                alt="icon"
                className={classes["sub-icon"]}
              />
            </button>
          </div>
          <button className={classes.button} onClick={deleteBtnHandler}>
            <img src={trashIcon} alt="icon" className={classes["trash-icon"]} />
          </button>
          <img src={heartIcon} alt="icon" className={classes["heart-icon"]} />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
