import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import checkSlice from "./check-slice";
import sidebarSlice from "./sidebar-slice";

const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        check:checkSlice.reducer,
        sidebar:sidebarSlice.reducer
    }
})

export default store;