{/*<Outlet />*/}
import { children } from "react"
import Navbar from "./Navbar"
import { Outlet } from "react-router"

const Layout=({children}:{children:React.ReactElement})=>{
    return(
        <div>
        <Navbar />
        {children}
        </div>
    )
}

export default Layout