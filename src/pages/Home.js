import React from 'react';
import Banners from '../components/Banners';
import DraggableCarousel from '../components/DraggableCarousel';
import Slider from '../components/Slider';
const Home = () => {
    return (
        <div>
            <Slider />
            <DraggableCarousel />
            <Banners />
        </div>
    );
};

export default Home;