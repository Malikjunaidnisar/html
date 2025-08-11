import { useEffect, useState } from "react"


const Posts=()=>{
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>setPosts(data))
    },[])
    return(
        <>
        <div>{posts.map(({id})=>(
            <h1 key={id}>{id}</h1>
        ))}</div>
        
        </>
    )
}
export default Posts