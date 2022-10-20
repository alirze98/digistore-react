import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import checkSlice from "./check-slice";

const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        check:checkSlice.reducer
    }
})

export default store;