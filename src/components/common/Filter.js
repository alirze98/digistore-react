import React from "react";
import classes from "./Filter.module.css";
import homeIcon from '../../assets/home.svg'
import arrowIcon from '../../assets/aria-left.svg'
import { Divider } from '@mui/material';

const Filter = ({title,subTitle,info,subInfo}) => {
  return (
    <>
      <Divider className={`${classes.divider} ${classes["divider-top"]}`} />
      <div className={classes["sub-heading"]}>
        <div className={classes["icons"]}>
          <img src={homeIcon} alt="icon" className={classes["home-icon"]} />
          <img src={arrowIcon} alt="icon" className={classes["arrow-icon"]} />
          <span>{title}</span>
        </div>
        <h4 className={classes.title}>{subTitle}</h4>
      </div>
      <Divider className={`${classes.divider} ${classes["divider-bottom"]}`} />
      <div className={classes["products-count"]}>
        <span className={classes["products-count__all"]}>{info}</span>
        <span className={classes["products-count__amount"]}>{subInfo}</span>
      </div>
    </>
  );
};

export default Filter;
