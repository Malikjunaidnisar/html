import React, { use } from 'react'
import StudentCard from './StudentCard'
import {useState,useEffect} from 'react'
import { set } from 'mongoose'
import { Loader2 } from 'lucide-react'
import {API_URI} from "../config/api"
import { useDispatch, useSelector } from 'react-redux'
import { fetchStudents } from '../features/student/studentSlice'
import type { AppDispatch, RootState } from '../store/store'

/*const students = [
  {
    id: 1,
    name: 'Alice Johnson',
    age: 21,
    major: 'Computer Science',
    courses: [
      { courseName: 'Algorithms', grade: 'A' },
      { courseName: 'Data Structures', grade: 'B+' },
    ],
  },
  {
    id: 2,
    name: 'Bob Smith',
    age: 22,
    major: 'Mathematics',
    courses: [
      { courseName: 'Linear Algebra', grade: 'A-' },
      { courseName: 'Calculus III', grade: 'B' },
    ],
  },
  {
    id: 3,
    name: 'Catherine Lee',
    age: 20,
    major: 'Physics',
    courses: [
      { courseName: 'Quantum Mechanics', grade: 'A+' },
      { courseName: 'Thermodynamics', grade: 'A' },
    ],
  },
  {
    id: 4,
    name: 'David Kim',
    age: 23,
    major: 'Chemistry',
    courses: [
      { courseName: 'Organic Chemistry', grade: 'B+' },
      { courseName: 'Physical Chemistry', grade: 'A-' },
    ],
  },
  {
    id: 5,
    name: 'Eva Brown',
    age: 21,
    major: 'Biology',
    courses: [
      { courseName: 'Genetics', grade: 'A' },
      { courseName: 'Microbiology', grade: 'A-' },
    ],
  },
  {
    id: 6,
    name: 'Frank White',
    age: 22,
    major: 'English Literature',
    courses: [
      { courseName: 'Shakespearean Literature', grade: 'B' },
      { courseName: 'Modernist Literature', grade: 'A' },
    ],
  },
  {
    id: 7,
    name: 'Grace Martinez',
    age: 20,
    major: 'History',
    courses: [
      { courseName: 'Medieval History', grade: 'A-' },
      { courseName: 'American History', grade: 'B+' },
    ],
  },
]*/


const StudentsList: React.FC = () => {
  // const value=useSelector(state=>state.student)
  // console.log(value)
  const {StudentsList,error,loading} =useSelector((state:RootState)=>state.student)
  console.log('student',StudentsList)
  const dispatch =useDispatch<AppDispatch>()
  //const [test,setTest] = useState({})
  //const [loading,setLoading] = useState(true)
 // const [error,setError] = useState("")
  /*const studentList=async()=>{
    try {
      
        const res =await fetch(`${API_URI}/students`)
         if(!res.ok){
             throw new Error("fail")
         }
        const data = await res.json()
        setTest(data.data.students)
    
      
    } catch (error) {
     setError(error.message)
    }
    finally{
      setLoading(false)
    }
    
  }*/
  useEffect(()=>{
  dispatch(fetchStudents())
},[])
if(loading){
  return <div>
    <span className="spin"><Loader2 /></span>
  </div>
}
  //console.log(test)
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Students Result</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {StudentsList.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  )
}

export default StudentsList