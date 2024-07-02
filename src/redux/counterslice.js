import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({
    name :"counter",
    //initial value of the state
    initialState :{
        value:0
    },
    // actions
    reducers:{
        increament:(state)=>{
            //logic
            state.value +=1
        },
        decrement:(state)=>{
            //logic
            state.vlaue+ -+1
        },
        reset:(state)=>{
            state.value =0
        }
    }
})
//actions are for components
export const {increament, decrement, reset} = counterSlice.actions

//reducer is the store
export default counterSlice.reducer