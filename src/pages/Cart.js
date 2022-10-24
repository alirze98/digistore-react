import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checked from "../components/cart/Checked";
import MainCart from "../components/cart/MainCart";
import { cartActions } from "../store/cart-slice";
import { checkActions } from "../store/check-slice";
import EmptyCart from "../components/cart/EmptyCart";

const Cart = () => {
  const isChecked = useSelector((state) => state.check.check);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const emptyCartHandler = () => {
    dispatch(checkActions.checked());
    dispatch(cartActions.removeAllItems());
  };

  return (
    <>
      {!isChecked && cart.length === 0 && <EmptyCart />}
      {!isChecked && cart.length !== 0 && (
        <MainCart onEmptyCart={emptyCartHandler} />
      )}
      {isChecked && cart.length === 0 && <Checked />}
    </>
  );
};

export default Cart;
