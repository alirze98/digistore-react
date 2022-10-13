import React from "react";
import Banners from "../components/banners/Banners";
import BlogsCarousel from "../components/blogs-carousel/BlogsCarousel";
import Footer from "../components/common/Footer";
import DraggableCarousel from "../components/draggable-carousel/DraggableCarousel";
import Slider from "../components/slider/Slider";
const Home = () => {
  return (
    <div>
      <Slider />
      <DraggableCarousel />
      <Banners />
      <BlogsCarousel />
      <Footer />
    </div>
  );
};

export default Home;
