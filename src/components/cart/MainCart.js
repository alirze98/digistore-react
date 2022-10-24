import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./MainCart.module.css";
import useChangeNumberToPersian from "../../hooks/use-change-number-to-persian";
import CartItem from "./CartItem";
import { Divider, Grid } from "@mui/material";
import Filter from "../common/Filter";
import factorIcon from "../../assets/factor.svg";
import cartIcon from "../../assets/cart.svg";
import productIcon from "../../assets/product-icon.svg";
import listIcon from "../../assets/list.svg";
import checkOutIcon from "../../assets/checkout-cart.svg";

const MainCart = (props) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart);
  const totalItemsArr = cart.map((item) => item.count);
  const totalItems = totalItemsArr.reduce((acc, cv) => {
    return acc + cv;
  }, 0);
  const totalPriceEachItem = cart.map((item) => item.count * item.price);
  const totalPrice = totalPriceEachItem.reduce((acc, cv) => {
    return acc + cv;
  });
  const totalPricePersian = useChangeNumberToPersian(
    totalPrice.toLocaleString()
  );
  const content = cart.map((item) => {
    return (
      <CartItem
        image={item.image}
        title={item.title}
        price={item.price}
        count={item.count}
        id={item.id}
        key={item.id}
      />
    );
  });
  const totalLength = useChangeNumberToPersian(cart.length);
  const totalItemsContent = useChangeNumberToPersian(totalItems);
  const checkBtnHandler = () => {
    props.onEmptyCart();
  };
  const removeAllItemBtnHandler = () => {
    dispatch(cartActions.removeAllItems())
  }

  return (
    <div className={classes["main-cart"]}>
      <Filter title={"سبد خرید"} subTitle={"سبد خرید"} isInCart={true} />
      <Grid container spacing={5}>
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
          {content}
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <div className={classes.factor}>
            <div className={classes.title}>
              <img src={listIcon} alt="icon" />
              <span>پیش فاکتور</span>
            </div>
            <div className={classes.items}>
              <div className={classes.item}>
                <div className={classes["icon-container"]}>
                  <img src={productIcon} alt="icon" />
                </div>
                <span>مجموع اقلام: {totalLength}</span>
              </div>
              <div className={classes.item}>
                <div className={classes["icon-container"]}>
                  <img src={cartIcon} alt="icon" />
                </div>
                <span>مجموع آیتم ها: {totalItemsContent}</span>
              </div>
              <div className={classes.item}>
                <div>
                  <img src={factorIcon} alt="icon" />
                </div>
                <span> جمع کل سبد خرید : {totalPricePersian} تومان</span>
              </div>
            </div>
            <Divider sx={{ bgcolor: "lightgray", marginBottom: "10px" }} />
            <span className={classes.total}>
              مجموع پرداختی : {totalPricePersian} تومان
            </span>
            <div className={classes.check}>
              <button
                className={classes["check-out"]}
                onClick={checkBtnHandler}
              >
                <img src={checkOutIcon} alt="icon" />
                <span>تسویه حساب</span>
              </button>
              <button className={classes.remove} onClick={removeAllItemBtnHandler}>حذف همه</button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainCart;
