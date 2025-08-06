import { useState, type ChangeEvent, type FormEvent } from "react"
import "./newletter.css"

const Newsletter =()=>{
    const [email,setEmail]=useState('')
    const handleEmailChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }
    const onSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(email)
    }
    return(
        <section className="newsletter-section">
            <h1 className="newsletter-heading">Subscribe to my Newsletter</h1>
            <form action="" onSubmit={onSubmit} className="newsletter-form">
                <label htmlFor="">Email</label>
                <input value={email} onChange={handleEmailChange} type="email" placeholder="Enter your Email"/>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Newsletter