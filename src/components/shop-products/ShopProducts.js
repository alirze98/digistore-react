import React, { useEffect, useState } from 'react';
import classes from './ShopProducts.module.css';
import { Divider, Grid } from '@mui/material';
import axios from 'axios';
import ShopProductsList from './ShopProductsList';
import Footer from '../common/Footer';
import Filter from '../common/Filter';
import loaderGif from '../../assets/loader.gif'
const ShopProducts = () => {
    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [errors,setErrors] = useState(false);
    useEffect(()=>{
        setIsLoading(true)
        axios.get('https://digistore.glitch.me/products').then(response =>{
            setProducts(response.data)
            setIsLoading(false)
        }).catch(error =>{
            setErrors(true)
            setIsLoading(false)
        })
    },[])
    return (
        <div className={classes['shop-products']}>
            <Filter title={'فروشگاه'} subTitle={'فروشگاه'} info={'همه کالا ها'} subInfo={'۱۴ کالا'} />
           {!isLoading && !errors &&  <Grid container columns={{xl:7,lg:5,md:3,sm:2,xs:1}} rowSpacing={{xl:1}} className={classes.products}>
                <ShopProductsList data={products} />
            </Grid>}
            {isLoading && <img src={loaderGif} className={classes.loader} />}
            {errors && <div className={classes.error}>something went wrong</div>}
            <Footer />
        </div>
    );
};

export default ShopProducts;