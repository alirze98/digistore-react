import React, { useEffect, useState } from 'react';
import classes from './ShopProducts.module.css';
import { Divider, Grid } from '@mui/material';
import axios from 'axios';
import ShopProductsList from './ShopProductsList';
import Footer from '../common/Footer';
import Filter from '../common/Filter';
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
            <Filter />
            <Grid container columns={{xl:7,lg:5,md:3,sm:2,xs:1}} rowSpacing={{xl:1}} className={classes.products}>
                <ShopProductsList data={products} />
            </Grid>
            <Footer />
        </div>
    );
};

export default ShopProducts;