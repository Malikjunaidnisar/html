import BlogCard from "./BlogCard"
import { blogData } from "../../appData/blogData"

const BlogList =()=>{
    return(
        <>
        <div>
            {blogData.map(({src,shortDescription,title})=>(
                <BlogCard key={title} image={src} shortDesc={shortDescription} title={title}/>
            ))}
        </div>
        </>
    )
}
export default BlogList
