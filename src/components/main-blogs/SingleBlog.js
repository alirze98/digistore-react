import React from "react";
import classes from "./SingleBlog.module.css";
import Filter from "../common/Filter";
import Footer from "../common/Footer";
const SingleBlog = ({ image, title, description }) => {
  return (
    <>
      <div className={classes["single-blog"]}>
      <Filter title={"خانه / مقالات "} />
        <img src={image} alt="Blog image" className={classes.image} />
        <h3 className={classes.title}>{title}</h3>
        <div className={classes.desc}>{description}</div>
        <Footer />
      </div>
    </>
  );
};

export default SingleBlog;
