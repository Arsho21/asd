import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

let store = configureStore({
    reducer:{
        product: productReducer,
    }
})

export default store