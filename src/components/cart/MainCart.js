import React from "react";
import { useSelector } from "react-redux";
import classes from "./MainCart.module.css";
import useChangeNumberToPersian from "../../hooks/use-change-number-to-persian";
import CartItem from "./CartItem";
import { Grid } from "@mui/material";
import Filter from "../common/Filter";


const MainCart = (props) => {
  const cart = useSelector((state) => state.cart.cart);
  const item = cart.find((item) => item.id === props.id);
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
      />
    );
  });

  return (
    <div className={classes['main-cart']}>
        <Filter title={'سبد خرید'} subTitle={'سبد خرید'} isInCart={true} />
      <Grid container>
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>{content}</Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <div>{cart.length}</div>
          <div>{totalItems}</div>
          <div>{totalPricePersian}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainCart;
