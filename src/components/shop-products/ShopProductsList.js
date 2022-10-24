import { Grid } from "@mui/material";
import React from "react";
import CarouselItem from "../draggable-carousel/CarouselItem";

const ShopProductsList = (props) => {
  const content = props.data.map((item) => {
    return (
      <Grid item xl={1} lg={1} md={1} sm={1} xs={1} key={item.id}>
        <CarouselItem
          image={item.image}
          title={item.title}
          price={item.price}
          isShopItem={true}
          count={1}
          id={item.id}
        />
      </Grid>
    );
  });
  return <>{content}</>;
};

export default ShopProductsList;
