import { useSelector } from 'react-redux'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import StudentsList from './components/StudentList'
import { store, type RootState } from './store/store'
//import {useSelector} from "react-redux"


function App() {
 
  return (
    <div>
      <Navbar />
      <StudentsList />
      <Footer />
      
    </div>
  )
}

export default App