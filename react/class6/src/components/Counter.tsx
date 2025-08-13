import type { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../features/counter/counterSlice";

interface Props {
    value?: number;
  }
  
  const Counter=({ value = 0 }: Props) =>{
    const count = useSelector((state:RootState)=>state.counter.value)
    const dispatch = useDispatch()
    const handleDecrement=()=>{
        
        dispatch(decrement())
    }

    return (
      <section className="counter">
        <h2 className="counter__title">Counter</h2>
  
        <div className="counter__display" aria-live="polite">
          {count}
        </div>
  
        <div className="counter__controls">
          <button className="btn" type="button" aria-label="Decrement" onClick={handleDecrement} disabled={!count}>
           - 
          </button>
          <button className="btn" type="button" aria-label="Increment" onClick={()=>dispatch(increment())}>
            +
          </button>
          <button className="btn btn--muted" type="button" aria-label="Reset" onClick={()=>dispatch(reset())}>
            Reset
          </button>
        </div>
      </section>
    );
  }

  export default Counter