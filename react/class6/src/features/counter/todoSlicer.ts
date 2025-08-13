import { createSlice } from "@reduxjs/toolkit"

interface todo {
    id:string
    text:string
    completed:boolean
}
interface todoListProps{
    todoList:[]
}
const initialState:todoListProps={
    todoList:[{}]
}

const todoSlice =createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todoList.push({
                id:Date.now().toString,
                text:action.payload,
                completed:false
            })
        },
        /*decrement:(state)=>{
            state.value-=1
        },
        reset:(state)=>{
            state.value=0
        }*/
    }
})

export const {addTodo}=todoSlice.actions
export default todoSlice.reducer