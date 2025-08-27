import { useActionState, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleSubmit=(prev,formData)=>{
    const name =formData.get('name')
    const email =formData.get('email')
    return({name,email})
  }
  /*const initialState ={
    name:'',
    email:""
  }*/
  const [state,formAction,isPending]=useActionState(handleSubmit,{
    name:"",
    email:""
  })


 

  return (
    <>
      <h1>UseActionState hook</h1>
      <form action={formAction}>
        <label htmlFor="name">Enter your name</label>
        <input type='text' name='name' id='name' />
        <label htmlFor="email">Enter your email</label>
        <input type='email' name='email' id='email' />
        <button>click</button>
      </form>
    </>
  )
}

export default App
