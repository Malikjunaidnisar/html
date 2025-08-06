import { useState, type ChangeEvent, type FormEvent } from 'react'
import './todo.css'


const Todo =()=>{
    const [btn,setBtn]=useState(false)
    const [index,setIndex]=useState(0)
    const [todos,setTodos]=useState(['work','gym','programming'])
    const [newTask,setNewTask]=useState('')
    const handleNewTask=(e:ChangeEvent<HTMLInputElement>)=>{
       
        setNewTask(e.target.value)
    }
    const onClick=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!newTask.trim()){
            alert('feild cannot be empty')
            return
        }
        
        setTodos([newTask,...todos])
        setNewTask('')

    }
    const handleDelete=(text:string)=>{
        const deleteToDo = todos.filter((todo)=>todo!==text)
        setTodos(deleteToDo)
        
    }
    const handleUpdateTodo=(e:FormEvent,text:string)=>{
        
      
        e.preventDefault()
        todos[index]=text
        setTodos([...Todos])
        //setNewTask(e)
       // const [old,setOld]=useState(e)
        //setOld(newTask)
        //console.log(old)
        setBtn(!btn)


        

        //setTodos()
    }
    const handleUpdate=(e,i)=>{
        
        setBtn(!btn)
       
       
        setNewTask(e)

        setIndex(i)
       
        


        

        //setTodos()
    }
    return(
    
        <section>

        <h1 className='text-center text-3xl'>Todo List</h1>
        <form className='todo-form'>
            <div className='flex gap-6'>

           <label htmlFor='task' className='text-center  '>What do wnat to do</label>
           <input type='text' className="max-w-[10000px]" id='task' value={newTask} onChange={handleNewTask}/>
            </div>
           <button type='submit' onClick={btn?handleUpdateTodo:onClick}>{btn?'Update':'Submit'}</button>
        </form>
        <ul className='todo-list'>
            {todos.map((todo,i)=>(
            <div>
                
            <li key={todo}>{todo}</li>
            <button onClick={()=>handleUpdate(todo,i)} className='mr-3 border border-gray-500 cursor-pointer'>Update</button>
            <button onClick={()=>handleDelete(todo)} className='border border-gray-500 cursor-pointer'>Delete</button>
           
            
            
        
            </div>    
            ))}
             {todos.length ==0 && <p>no task added</p>}
        </ul>
        </section>

        
    )
}

export default Todo