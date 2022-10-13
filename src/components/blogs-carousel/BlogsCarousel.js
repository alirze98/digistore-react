import React, { useEffect, useState } from "react";
import classes from "./BlogsCarousel.module.css";
import SubHeading from "../common/SubHeading";
import axios from "axios";
import BlogsCarouselItems from "./BlogsCarouselItems";
import blogIcon from "../../assets/blog-icon.svg";
import loaderGif from "../../assets/loader.gif"

const BlogsCarousel = () => {
  const [blogsItems, setBlogsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://digistore.glitch.me/blogs")
      .then((response) => {
        setBlogsItems(response.data);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrors(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={classes["blogs-carousel"]}>
      <SubHeading icon={blogIcon} title={"جدیدترین مقالات"} />
      {isLoading && <img src={loaderGif} alt='gif' className={classes.loader} />}
      {errors && <h4 className={classes.errors}>some thing went wrong</h4>}
      {!isLoading && !errors && <BlogsCarouselItems data={blogsItems} />}
    </div>
  );
};

export default BlogsCarousel;
