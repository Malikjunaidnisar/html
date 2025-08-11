import {useState} from 'react'
let steps = [1,2,3] 

const Stepper =()=>{
    const [step,setStep]=useState(1)
    const onStepIncrease=()=>{
        setStep (step+1)
    }
    const onStepDecrease=()=>{
        setStep (step -1)
    }
    console.log(step)
    return(
        <>
        <ul>
            {steps.map((num)=>(
                <li key={num} className={`style ${step >= num && 'bg-red'}`}>{num}</li>
            ))}
            
        </ul>
        <div>
            <button className='border p-1 cursor-pointer ' onClick={onStepDecrease} disabled={!step}>Previous</button>
            <button className='border p-1 cursor-pointer' onClick={onStepIncrease} disabled={step >= steps.length}>Next</button>
        </div>
        </>
    )
}

export default Stepper