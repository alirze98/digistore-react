import React, { useEffect, useState } from "react";
import classes from "./SingleProduct.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import plusIcon from "../../assets/plus.svg";
import subtractionIcon from "../../assets/subtraction.svg";
import trashIcon from "../../assets/trash.svg";
import Filter from "../common/Filter";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import changeNumberToPersian from "../common/Functions";
import Footer from "../common/Footer";

const SingleProduct = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const cartArr = useSelector((state) => state.cart.cart);
  const itemInCart = data && cartArr.find((item) => item.id === data.id);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    axios
      .get(`https://digistore.glitch.me/products/${params.productId}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(true);
      });
  }, [params.productId]);

  const incrementHandler = () => {
    dispatch(
      cartActions.incrementItem({
        image: data.image,
        title: data.title,
        count: 1,
        price: data.price,
        id: data.id,
      })
    );
  };
  const decrementHandler = () => {
    dispatch(cartActions.decrementItem(data.id));
  };
  const trashClickHandler = () => {
    dispatch(cartActions.removeItem(data.id));
  };
  return (
    <>
      <div className={classes.container}>
        <Filter title={"خانه/ محصولات / گوشی موبایل"} isInSingleProduct={true} />
        <div className={classes["single-product"]}>
          <img src={data ? data.image : ""} alt="Phone image" />
          <div className={classes["left-side"]}>
            <h4 className={classes.title}>{data ? data.title : ""}</h4>
            <div className={classes.price}>
              {data ? changeNumberToPersian(data.price.toLocaleString()) : ""}{" "}
              تومان
            </div>
            <div className={classes.actions}>
              <div className={classes.btns}>
                <button onClick={incrementHandler}>
                  <img src={plusIcon} alt="Plus icon" />
                </button>
                <span>{itemInCart ? itemInCart.count : 0}</span>
                <button onClick={decrementHandler}>
                  <img src={subtractionIcon} alt="subtraction icon" />
                </button>
              </div>
              <button onClick={trashClickHandler}>
                <img
                  src={trashIcon}
                  alt="trashIcon"
                  className={classes.trash}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={classes.desc}>توضیحات</div>
        <div className={classes.passage}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SingleProduct;
