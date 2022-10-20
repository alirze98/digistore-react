import React from 'react';
import classes from './EmptyCart.module.css';
import arrowIcon from '../../assets/b-l-arrow.svg';
import emptyCartImage from '../../assets/empty-cart.jpg';
import { Link } from 'react-router-dom';
const EmptyCart = () => {
    return (
        <div className={classes['empty-cart']}>
            <img src={emptyCartImage} alt="Empty cart image" />
            <div>سبد خرید شما خالیست!</div>
            <Link className={classes.link} to={'/shop'}>
            <span>بازگشت به فروشگاه</span>
            <img src={arrowIcon} alt="Arrow icon" />
            </Link>
        </div>
    );
};

export default EmptyCart;