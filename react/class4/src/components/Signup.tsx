import { useState, type ChangeEvent, type FormEvent } from "react"

const Signup =()=>{
    const [user,SetUser]=useState({name:'',fatherName:''})
    const handleName=(e:ChangeEvent<HTMLInputElement>)=>{
        SetUser((prevData)=>({
            ...prevData,[e.target.name]:e.target.value
        }))
   

    }
    const onClick=(e:FormEvent<HTMLFormElement>)=>{

        e.preventDefault()
        console.log(user)
       

    }
    return(
        
        <>
        <h1>Login form</h1>
        <form onSubmit={onClick}>
            <label>Name</label>
            <input type="text" placeholder="enter your name" name='name' value={user.name} onChange={handleName}/>
            <label>father name</label>
            <input type="text" placeholder="enter your father name" name='fatherName' value={user.fatherName} onChange={handleName}/>
            <label>email</label>
            <input type="email" placeholder="enter your email" />
            <label>password</label>
            <input type="password" placeholder="password" />
            <label>confirm password</label>
            <input type="password" placeholder="confirm password" />
            <button className="border" type="submit">Submit</button>
        </form>
        </>

    )
}

export default Signup