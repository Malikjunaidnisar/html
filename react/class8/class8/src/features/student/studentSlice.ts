import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import { API_URI } from '../../config/api'
// import StudentsList from '../../components/StudentList'

const initialState=({
    StudentsList:[],
    error:'',
    loading:false
    
})

export const fetchStudents =createAsyncThunk('test',async()=>{
    const res =await fetch(`${API_URI}/students`)
    const data = await res.json()
    console.log('this',data)
    return data.data.student
})


export const studentSlice = createSlice({
    name:'studentData',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchStudents.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchStudents.fulfilled,(state,action)=>{
            state.StudentsList=action.payload
            state.loading=false
        }) 
        builder.addCase(fetchStudents.rejected,(state)=>{
           
            state.loading=false
            state.error="some error"
        })
    }
})


export const { } = studentSlice.actions

export default studentSlice.reducer