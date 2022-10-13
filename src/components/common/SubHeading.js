import React from 'react';
import classes from './SubHeading.module.css';


const SubHeading = (props) => {
    return (
        <div className={classes.title}>
        <img src={props.icon} alt="productIcon" />
        <span>{props.title}</span>
      </div>
    );
};

export default SubHeading;