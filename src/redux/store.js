import { counterSlice } from "./counterslice"
import { configureStore } from "@reduxjs/toolkit";



export const store = configureStore({
    reducer:{
        counterReducer:counterSlice
    }
})