import React from "react";
import classes from "./BlogsCarouselItem.module.css";
// images
import arrowIcon from "../../assets/b-l-arrow.svg";
import viewIcon from "../../assets/views.svg";
import heartIcon from "../../assets/heart.svg";
import useChangeNumberToPersian from "../../hooks/use-change-number-to-persian";
import { Link } from "react-router-dom";

const BlogsCarouselItem = (props) => {
  const description = `${props.desc.substr(0, 100)} ...`;
  const like = useChangeNumberToPersian(props.like);
  const view = useChangeNumberToPersian(props.view);

  return (
    <div className={classes["blogs-carousel-item"]}>
      <img src={props.image} alt="thumbnail" className={classes.image} />
      <Link to={`/blogs/${props.id}`} className={classes.link}>
        <h4 className={classes.title}>{props.title}</h4>
      </Link>
      <div
        className={`${classes.desc} ${
          props.isInBlogsPage ? classes["blogs-page-desc"] : ""
        }`}
      >
        {description}
      </div>
      <div className={classes.actions}>
        <div className={classes["actions-date"]}>۱۲/ ۵ / ۱۴۰۱</div>
        <div className={classes["actions-view"]}>
          <div>{view}</div>
          <img src={viewIcon} alt="icon" />
        </div>
        <div className={classes["actions-like"]}>
          <div>{like}</div>
          <img src={heartIcon} alt="icon" />
        </div>
        <div className={classes["actions-read-more"]}>
          <Link to={`/blogs/${props.id}`} className={classes.link}>
            <div>ادامه مطلب</div>
          </Link>
          <img src={arrowIcon} alt="arrowIcon" />
        </div>
      </div>
    </div>
  );
};

export default BlogsCarouselItem;
