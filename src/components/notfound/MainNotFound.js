import React from 'react';
import Footer from '../common/Footer';
import classes from './MainNotFound.module.css'
const MainNotFound = () => {
    return (
        <div>
            <h4 className={classes.title}>صفحه مورد نظر شما یافت نشد</h4>
            <Footer />
        </div>
    );
};

export default MainNotFound;