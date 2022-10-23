import React from 'react';
import  ReactDOM  from 'react-dom';
import classes from './Sidebar.module.css';
import logo from '../../assets/logo.svg'
import { Divider } from '@mui/material';
import homeIcon from '../../assets/home.svg';
import shopIcon from '../../assets/shop.svg';
import cartIcon from '../../assets/cart.svg';
import blogIcon from '../../assets/blog-icon.svg';
import aboutusIcon from '../../assets/aboutus.svg';
import githubIcon from '../../assets/github.svg';

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
                <img src={logo} alt="Logo" />
                <Divider className={classes.divider} />
                <ul className={classes.list}>
                    <li className={classes.item}>
                        <img src={homeIcon} alt="Home icon" />
                        <span>صفحه نخست</span>
                    </li>
                    <li className={classes.item}>
                        <img src={shopIcon} alt="Shop icon" />
                        <span>فروشگاه</span>
                    </li>
                    <li className={classes.item}>
                        <img src={cartIcon} alt="Cart icon" />
                        <span>سبد خرید</span>
                    </li>
                    <li className={classes.item}>
                        <img src={blogIcon} alt="Blog icon" />
                        <span>بلاگ</span>
                    </li>
                    <li className={classes.item}>
                        <img src={aboutusIcon} alt="About us icon" />
                        <span>درباره ما</span>
                    </li>
                    <li className={classes.item}>
                        <img src={githubIcon} alt="Github icon" />
                        <span>سورس کد</span>
                    </li>
                </ul>
            </div>
            
      
    );
};

export default Sidebar;