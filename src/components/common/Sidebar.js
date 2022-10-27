import React from "react";
import classes from "./Sidebar.module.css";
import logo from "../../assets/logo.svg";
import { Divider } from "@mui/material";
import homeIcon from "../../assets/home.svg";
import shopIcon from "../../assets/shop.svg";
import cartIcon from "../../assets/cart.svg";
import aboutusIcon from "../../assets/aboutus.svg";
import githubIcon from "../../assets/github.svg";
import searchIcon from "../../assets/search.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sidebarActions } from "../../store/sidebar-slice";
const Sidebar = () => {
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.sidebar.sidebar);
  const toggleSidebarHandler = () => {
    dispatch(sidebarActions.toggleSidebar());
  };
  return (
    <div className={`${classes.sidebar} ${showSidebar ? classes.hidden : ""}`}>
      <img src={logo} alt="Logo" />
      <Divider className={classes.divider} />
      <ul className={classes.list} onClick={toggleSidebarHandler}>
        <li className={classes.item}>
          <Link to={"/"} className={classes.link}>
            <img src={homeIcon} alt="Home icon" />
            <span>صفحه نخست</span>
          </Link>
        </li>
        <li className={classes.item}>
          <Link to={"/shop"} className={classes.link}>
            <img src={shopIcon} alt="Shop icon" />
            <span>فروشگاه</span>
          </Link>
        </li>
        <li className={classes.item}>
          <Link to={"/cart"} className={classes.link}>
            <img src={cartIcon} alt="Cart icon" />
            <span>سبد خرید</span>
          </Link>
        </li>
        <li className={classes.item}>
          <Link to={"/blogs"} className={classes.link}>
            <img src={searchIcon} alt="Blog icon" />
            <span>بلاگ</span>
          </Link>
        </li>
        <li className={classes.item}>
          <Link to={"/"} className={classes.link}>
            <img src={aboutusIcon} alt="About us icon" />
            <span>درباره ما</span>
          </Link>
        </li>
        <li className={classes.item}>
          <Link
            to={"https://github.com/alirze98/digistore-react.git"}
            className={classes.link}
          >
            <img src={githubIcon} alt="Github icon" />
            <span>سورس کد</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
