import React from "react";
import classes from "./SignupForm.module.css";
import loginIcon from "../../assets/login.svg";
const SignupForm = () => {
  return (
    <div className={classes["signup-form"]}>
      <div className={classes.container}>
        <div className={classes.right}>
          <form>
            <div className={classes["form-item"]}>
              <label htmlFor="userName" className={classes.label}>
                نام کاربری
              </label>
              <input type="text" id="userName" className={classes.input} />
              <span className={classes.warn}>نام کاربری الزامیست</span>
            </div>
            <div className={classes["form-item"]}>
              <label htmlFor="email" className={classes.label}>
                ایمیل
              </label>
              <input type="email" id="email" className={classes.input} />
              <span className={classes.warn}>لطفا یک ایمیل وارد کنید</span>
            </div>
            <div className={classes["form-item"]}>
              <label htmlFor="userName" className={classes.label}>
                رمز ورود
              </label>
              <input type="text" id="userName" className={classes.input} />
              <span className={classes.warn}>رمز عبور الزامیست</span>
            </div>
            <div className={classes["form-item"]}>
              <label htmlFor="confirm" className={classes.label}>
                تایید رمز ورود
              </label>
              <input type="text" id="confirm" className={classes.input} />
              <span className={classes.warn}>تایید رمز عبور را وارد کنید</span>
            </div>
            <div className={classes["send-btn-container"]}>
              <button className={classes["send-btn"]}>ارسال</button>
            </div>
            <div className={classes["login"]}>
              <span>قبلا ثبت نام کرده اید ؟</span>
              <button className={classes["login-btn"]}>
                ورود به حساب کاربری
              </button>
            </div>
          </form>
        </div>
        <div className={classes.left}>
          <img src={loginIcon} alt="" />
          <h4>ساخت حساب کاربری</h4>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
