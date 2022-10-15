import { Grid } from "@mui/material";
import React from "react";
import BlogsCarouselItem from "../blogs-carousel/BlogsCarouselItem";

const BlogsList = (props) => {
  const content = props.data.map((item) => {
    return (
      <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
        <BlogsCarouselItem
          image={item.image}
          title={item.title}
          desc={item.body}
          view={item.view}
          like={item.like}
          isInBlogsPage={true}
        />
      </Grid>
    );
  });
  return (
    <Grid container columns={{ xl: 6, lg: 5, md: 4, sm: 2, xs: 1 }}>
        {content}
    </Grid>
  );
};

export default BlogsList;
