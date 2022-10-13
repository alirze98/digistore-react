import React from 'react';
import Banners from '../components/Banners';
import BlogsCarousel from '../components/BlogsCarousel';
import DraggableCarousel from '../components/DraggableCarousel';
import Slider from '../components/Slider';
const Home = () => {
    return (
        <div>
            <Slider />
            <DraggableCarousel />
            <Banners />
            <BlogsCarousel />
        </div>
    );
};

export default Home;