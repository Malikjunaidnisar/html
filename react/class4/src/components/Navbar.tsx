import { Link, NavLink } from "react-router"


const Navbar=()=>{
    return(
        <>
        <div>
            <ul>
                <li>
                    <NavLink to="/" className={({isActive})=>(isActive?'text-xl':"")}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Navbar