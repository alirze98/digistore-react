import React from "react";
import classes from "./Navbar.module.css";
// log and images
import logo from "../../assets/logo.svg";
import searchIcon from "../../assets/search.svg";
import userIcon from "../../assets/user.svg";
import cartIcon from "../../assets/cart.svg"
import { Badge, Grid } from "@mui/material";
import Divider from '@mui/material/Divider';
import { FaBars } from "react-icons/fa";
import heartIcon from "../../assets/heart.svg"

const Navbar = () => {
  return (
    <>
    <nav className={classes.nav}>
     <div className={classes['nav-top']}>
        <Grid container>
          <Grid item lg={3.5} md={3.5} sm={3.5} xs={3.5}>
            <img src={logo} className={classes.logo} />
          </Grid>
          <Grid item lg={5} md={5} sm={5} xs={5}>
            <div className={classes.search}>
              <input className={classes.input} placeholder='جستجو ...' />
              <img src={searchIcon} />
            </div>
          </Grid>
          <Grid item lg={3.5} md={3.5} sm={3.5} xs={3.5} className={classes['login-register']}>
            <div className={classes['login-register__btn']}>
              <img src={userIcon} />
              <span>ورود / ثبت نام</span>
            </div>
           <div className={classes.cart}>
           <span className={classes['cart-amoutn']}>۰</span>
            <img src={cartIcon} />
           </div>
          </Grid>
        </Grid>
     </div>
     <div className={classes['nav-bottom']}>
          <ul className={classes.list}>
            <li className={classes['list-item']}>
              صفحه نخست
            </li>
            <li className={classes['list-item']}>
                فروشگاه
            </li>
            <li className={classes['list-item']}>
                سبد خرید
            </li>
            <li className={classes['list-item']}>
                بلاگ
            </li>
            <li className={classes['list-item']}>
                درباره ما
            </li>
            <li className={classes['list-item']}>
                سورس کد
            </li>
          </ul>
     </div>
   
    </nav>
    <nav className={classes['nav-responsive']}>
      <div className={classes['nav-responsive__top']}>
        <FaBars />
        <img src={logo} alt="" className={classes.logo} />
        <div className={classes['nav-responsive__cart']}>
          <span>۰</span>
          <img src={cartIcon} alt=""  />
        </div>
      </div>
      <Divider />
      <div className={classes['nav-responsive__bottom']}>
        <Grid container spacing={{md:10,sm:5,xs:3}}>
          <Grid item md={9} sm={9} xs={9}>
          <div className={classes['nav-responsive__search']}>
          <input type="text" placeholder="جستجو ..." />
          <img src={searchIcon} alt="" />
          </div>
          </Grid>
          <Grid item md={3} sm={3} xs={3} className={classes['nav-responsive__heart']}>
           <img src={heartIcon} alt="" />
            <button>ورود</button>
          </Grid>
        </Grid>
      </div>
      <Divider />
    
    </nav>
    </>
  );
};

export default Navbar;
