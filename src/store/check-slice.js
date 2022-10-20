import { createSlice } from "@reduxjs/toolkit";

const checkSlice = createSlice({
    name:'check',
    initialState:{check:false},
    reducers:{
        checked(state,action){
            state.check = true 
        },
        unChecked(state,action){
            state.check = false 
        }
    }
})

export const checkActions = checkSlice.actions;
export default checkSlice;
