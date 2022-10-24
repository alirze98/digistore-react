import React from "react";
import classes from "./CartItem.module.css";
import subtractionIcon from "../../assets/subtraction.svg";
import plusIcon from "../../assets/plus.svg";
import trashIcon from "../../assets/trash.svg";
import useChangeNumberToPersian from "../../hooks/use-change-number-to-persian";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const title = `${props.title.substr(0, 65)}...`;
  const price = useChangeNumberToPersian(props.price.toLocaleString());
  const cartArr = useSelector((state) => state.cart.cart);
  const itemInCart = cartArr.find((item) => item.id === props.id);
  const incrementHandler = () => {
    dispatch(
      cartActions.incrementItem({
        image: props.image,
        title: props.title,
        price: props.price,
        count: props.count,
        id: props.id,
      })
    );
  };
  const decrementHandler = () => {
    dispatch(cartActions.decrementItem(props.id));
  };
  const trashClickHandler = () => {
    dispatch(cartActions.removeItem(props.id));
  };
  return (
    <div className={classes["cart-item"]}>
      <img src={props.image} alt="image" />
      <div className={classes.info}>
        <div className={classes["price-title"]}>
          <h4>{title}</h4>
          <span>{price} تومان</span>
        </div>
        <div className={classes.actions}>
          <div className={classes.btns}>
            <button onClick={incrementHandler} className={classes.btn}>
              <img src={plusIcon} alt="icon" />
            </button>
            <span>{itemInCart ? itemInCart.count : 1}</span>
            <button onClick={decrementHandler} className={classes.btn}>
              <img src={subtractionIcon} alt="icon" />
            </button>
          </div>
          <button onClick={trashClickHandler} className={classes.trash}>
            <img src={trashIcon} alt="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
