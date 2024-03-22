import { configureStore } from "@reduxjs/toolkit";
import BasketSlice from "./slice/BasketSlice";


export const Store=configureStore({
    reducer:{
        basket:BasketSlice
    }
})