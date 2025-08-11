
import type { FC } from "react"

interface BlogProps{
    title:string
    image:string
    shortDesc:string
}
const BlogCard:FC<BlogProps>=({title,image,shortDesc})=>{
    return(
        <>
        <h1>{title}</h1>
        <p>{shortDesc}</p>
        <img src={image} />
        </>
    )
}
export default BlogCard