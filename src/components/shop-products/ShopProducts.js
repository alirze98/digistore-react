import React, { useEffect, useState } from 'react';
import classes from './ShopProducts.module.css';
import homeIcon from '../../assets/home.svg'
import arrowIcon from '../../assets/aria-left.svg'
import { Divider, Grid } from '@mui/material';
import axios from 'axios';
import ShopProductsList from './ShopProductsList';
import Footer from '../common/Footer';
const ShopProducts = () => {
    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [errors,setErrors] = useState(false);
    useEffect(()=>{
        axios.get('https://digistore.glitch.me/products').then(response =>{
            setProducts(response.data)
        }).catch(error =>{
            setErrors(true)
        })
    },[])
    return (
        <div className={classes['shop-products']}>
            <Divider className={`${classes.divider} ${classes['divider-top']}`}   />
            <div className={classes['sub-heading']}>
                <div className={classes['icons']}>
                    <img src={homeIcon} alt="icon" className={classes['home-icon']} />
                    <img src={arrowIcon} alt="icon" className={classes['arrow-icon']} />
                    <span>فروشگاه</span>
                </div>
                <h4 className={classes.title}>فروشگاه</h4>
            </div>
            <Divider className={`${classes.divider} ${classes['divider-bottom']}`}   />
            <div className={classes['products-count']}>
                <span className={classes['products-count__all']}>همه کالا ها</span>
                <span className={classes['products-count__amount']}>۱۴ کالا</span>
            </div>
            <Grid container columns={{xl:7,lg:5,md:3,sm:2,xs:1}} rowSpacing={{xl:1}} className={classes.products}>
                <ShopProductsList data={products} />
            </Grid>
            <Footer />
        </div>
    );
};

export default ShopProducts;