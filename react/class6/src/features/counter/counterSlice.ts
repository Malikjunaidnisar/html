import { createSlice } from "@reduxjs/toolkit"

interface counterState {
    value:number
}
const initialState:counterState={
    value:0
}

const CounterSlice =createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        reset:(state)=>{
            state.value=0
        }
    }
})

export const {increment,decrement,reset}=CounterSlice.actions
export default CounterSlice.reducer