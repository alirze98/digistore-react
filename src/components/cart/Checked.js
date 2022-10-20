import React from 'react';
import classes from './Checked.module.css';
import emptyCart from '../../assets/empty-cart.jpg';
import okImage from '../../assets/ok3d.jpg';
import arrowIcon from '../../assets/b-l-arrow.svg';
import { Link } from 'react-router-dom';

const Checked = () => {
    return (
        <div className={classes['checked-container']}>
      <img src={okImage} alt="image" className={classes['checked-image']} />
      <div className={classes.done}>تسویه حساب با موفقیت انجام شد</div>
      <Link to={'/shop'} className={classes.link}>
        <span>محصولات بیشتر</span>
        <img src={arrowIcon} alt="icon" />
        </Link>
    </div>
    );
};

export default Checked;