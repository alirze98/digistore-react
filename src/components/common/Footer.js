import { Grid } from "@mui/material";
import React from "react";
import classes from "./Footer.module.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Grid container>
        <Grid item lg={3} className={classes['right-logo-container']}>
          <img src={logo} alt="logo" className={classes['right-logo']} />
        </Grid>
        <Grid item lg={9}>
          <div className={classes['title-container']}>
          <h3 className={classes.title}>فروشگاه اینترنتی دیجی استور</h3>
          </div>
          <p className={classes.desc}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
        </Grid>
      </Grid>
        <div className={classes['centered-logo-container']}>
        <img src={logo} alt="logo" className={classes['centered-logo']} />
        </div>
    </div>
  );
};

export default Footer;
