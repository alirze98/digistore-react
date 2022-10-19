import React, { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./MainCart.module.css";
import useChangeNumberToPersian from "../../hooks/use-change-number-to-persian";
import CartItem from "./CartItem";
import { Divider, Grid } from "@mui/material";
import Filter from "../common/Filter";
import factorIcon from "../../assets/factor.svg";
import cartIcon from "../../assets/cart.svg";
import productIcon from '../../assets/product-icon.svg'
import listIcon from '../../assets/list.svg';
import checkOutIcon from '../../assets/checkout-cart.svg';
import emptyCart from '../../assets/empty-cart.jpg';
import okImage from '../../assets/ok3d.jpg';
import arrowIcon from '../../assets/b-l-arrow.svg';


const MainCart = (props) => {
  const [checked,setChecked] = useState(false);
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
  const totalLength = useChangeNumberToPersian(cart.length);
  const totalItemsContent = useChangeNumberToPersian(totalItems)
  const checkBtnHandler = () => {
    setChecked(true)

  }

  return (
    !checked ? <div className={classes["main-cart"]}>
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
            <div className={classes['icon-container']}><img src={productIcon} alt="icon" /></div>
            <span>مجموع اقلام: {totalLength}</span>
          </div>
          <div className={classes.item}>
            <div className={classes['icon-container']}><img src={cartIcon} alt="icon" /></div>
            <span>مجموع آیتم ها: {totalItemsContent}</span>
          </div>
          <div className={classes.item}>
            <div><img src={factorIcon} alt="icon" /></div>
            <span> جمع کل سبد خرید : {totalPricePersian} تومان</span>
          </div>
          </div>
          <Divider sx={{ bgcolor: "lightgray",marginBottom:'10px' }}  />
          <span className={classes.total}>مجموع پرداختی : {totalPricePersian} تومان</span>
          <div className={classes.check}>
            <button className={classes['check-out']} onClick={checkBtnHandler}>
                <img src={checkOutIcon} alt="icon" />
                <span>تسویه حساب</span>
            </button>
            <button className={classes.remove}>
              حذف همه
            </button>
          </div>
        </div>
      </Grid>
    </Grid>
  </div>:
    <div className={classes['checked-container']}>
      <img src={okImage} alt="image" className={classes['checked-image']} />
      <div className={classes.done}>تسویه حساب با موفقیت انجام شد</div>
      <button onClick={checkBtnHandler}>
        <span>محصولات بیشتر</span>
        <img src={arrowIcon} alt="icon" />
        </button>
    </div>
  );
};

export default MainCart;
