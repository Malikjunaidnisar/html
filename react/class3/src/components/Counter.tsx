import { use, useEffect, useState } from "react";
const Counter = ()=>{
    
    const [count,setCount] = useState(0)
    //let count =0;
    const onIncrement =()=>{
        setCount(count+1)
    }
    const onDecrement =()=>{
        setCount(count-1)
    }
    const onReset =()=>{
        setCount(0)
    }
    useEffect(()=>{
        console.log(count)
    },[count])
    return(
        <>
        <div className="border-solid container border">
        <span className="text-lg border-solid">{count}</span>
        </div>
        <div className="border-solid">

        </div>
        
        <div>

       
        <button className="border p-1 cursor-pointer" onClick={onIncrement}>increment</button>
        <button className="border p-1 cursor-pointer" onClick={onDecrement} disabled={count ===0}>decrement</button>
        <button className="border p-1 cursor-pointer" onClick={onReset}>reset</button>
        </div>
        </>
    )
}
export default Counter