import React from 'react';
import classes from './CarouselItem.module.css';
// images 
import subtractionIcon from '../../assets/subtraction.svg'
import plusIcon from '../../assets/plus.svg';
import trashIcon from '../../assets/trash.svg';
import heartIcon from '../../assets/heart.svg';
// custom hook
import useChangeNumberToPersian from '../../hooks/use-change-number-to-persian.js';



const CarouselItem = (props) => {
    const title = `${props.title.substr(0,45)}...`;
    const persianNumber = useChangeNumberToPersian(props.price.toLocaleString())
    return (
        <div className={`${classes['carousel-item']} ${props.isShopItem ? classes.shopItem :''}`}>
            <img src={props.image} alt="image" className={classes['phone-image']} />
            <div>
            <div className={classes.title}>{title}</div>
            <div className={classes.price}>{persianNumber}</div>
            <div className={`${classes.actions} ${props.isShopItem?classes.shopItem:''}`}>
                <div className={`${classes.btns} ${props.isShopItem?classes.shopItem:''}`}>
                  <img src={plusIcon} alt="icon" className={classes['plus-icon']} />
                  <span className={classes.count}>۰</span>
                  <img src={subtractionIcon} alt="icon" className={classes['sub-icon']} />
                </div>
                <img src={trashIcon} alt="icon" className={classes['trash-icon']} />
                <img src={heartIcon} alt="icon" className={classes['heart-icon']} />
            </div>
            </div>
        </div>
            
    );
};

export default CarouselItem;