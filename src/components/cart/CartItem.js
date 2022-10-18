import React from 'react';
import classes from './CartItem.module.css';
import subtractionIcon from "../../assets/subtraction.svg";
import plusIcon from "../../assets/plus.svg";
import trashIcon from "../../assets/trash.svg";
import useChangeNumberToPersian from '../../hooks/use-change-number-to-persian';

const CartItem = (props) => {
    const title = `${props.title.substr(0,65)}...`
    const price = useChangeNumberToPersian(props.price.toLocaleString())
    return (
        <div className={classes['cart-item']}>
            <img src={props.image} alt="image" />
            <div className={classes.info}>
                <div className={classes['price-title']}>
                <h4>{title}</h4>
                <span>{price} تومان</span>
                </div>
                <div className={classes.actions}>
                    <div className={classes.btns}>
                        <img src={plusIcon} alt="icon" />
                        <span>1</span>
                        <img src={subtractionIcon} alt="icon" />
                    </div>
                    <img src={trashIcon} alt="icon" />
                </div>
            </div>
        </div>
    );
};

export default CartItem;