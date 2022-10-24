import React from "react";
import classes from "./MainBlogs.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../../components/common/Filter";
import BlogsList from "./BlogsList";
const MainBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://digistore.glitch.me/blogs")
      .then((response) => {
        setBlogs(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrors(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={classes["main-blogs"]}>
      <Filter
        title={"مقالات"}
        subTitle={"بلاگ"}
        info={"همه ی مقالات"}
        subInfo={"۶ مقاله"}
      />
      <BlogsList data={blogs} />
    </div>
  );
};

export default MainBlogs;
