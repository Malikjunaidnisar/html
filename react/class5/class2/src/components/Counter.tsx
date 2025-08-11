import { use, useEffect, useReducer, useState } from "react";

const reducer =(state,action)=>{
    switch (action.type){
        case 'Increment':
            return {count:state.count+1}
        case 'Decrement':
            return {count:state.count-1}
        case 'Reset':
            return {count:0}
        default:
            return state
    }

}
const Counter = ()=>{
    const [state,dispatch] =useReducer(reducer,{count :0})
    
    //const [count,setCount] = useState(0)
    //let count =0;
    const onIncrement =()=>{
        //setCount(count+1)
        dispatch({type:'Increment'})
    }
    const onDecrement =()=>{
        //setCount(count-1)
        dispatch({type:'Decrement'})
    }
    const onReset =()=>{
        dispatch({type:"Reset"})
    }
    /*useEffect(()=>{
        console.log(count)
    },[count])*/
    return(
        <>
        <div className="border-solid container border">
        <span className="text-lg border-solid">{state.count}</span>
        </div>
        <div className="border-solid">

        </div>
        
        <div>

       
        <button className="border p-1 cursor-pointer" onClick={onIncrement}>increment</button>
        <button className="border p-1 cursor-pointer" onClick={onDecrement} disabled={state.count ===0}>decrement</button>
        <button className="border p-1 cursor-pointer" onClick={onReset}>reset</button>
        </div>
        </>
    )
}
export default Counter