import React from 'react';
import { Grid } from '@mui/material';
import banner1 from '../assets/half-banner1.jpg'
import banner2 from '../assets/half-banner2.jpg'
import classes from './Banners.module.css'

const Banners = () => {
    return (
        <div className={classes['banners-container']}>
        <Grid container spacing={{lg:2,md:2,sm:2}}>
            <Grid item lg={6} md={6} sm={12} xs={12} >
                <img src={banner1} alt="banner" className={classes.banner} />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <img src={banner2} alt="banner" className={classes.banner} />
            </Grid>
        </Grid>
        </div>
    );
};

export default Banners;