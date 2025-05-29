
import { Link, NavLink } from "react-router-dom"
import navbares from "./navbar.module.css"
function Navbar() {
  return (
    <div  className=" ">
           <div className="container">
             <div className="row">
             
             <div className="col-9 mx-auto " >
             <nav className="navbar navbar-expand-lg   p-3">
           
               <Link className={`navbar-brand ${navbares.title__logo}`} to="#">Nader </Link>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
             </button>
               <div className={`collapse navbar-collapse navbares.text__ul`} id="navbarSupportedContent">
                 <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                   <li className="nav-item">
                     <NavLink className={`${navbares.navlink} nav-link active text-white`} aria-current="page" to="/">Home</NavLink>
                   </li>
                   <li className="nav-item">
                     <NavLink className={` ${navbares.navlink} nav-link text-white`} to="/about">About</NavLink>
                   </li>
                   <li className="nav-item">
                     <NavLink className={` ${navbares.navlink} nav-link text-white`} to="/service">Service</NavLink>
                   </li>
                   <li className="nav-item">
                     <NavLink  className={` ${navbares.navlink} nav-link text-white`}  to="/contact">Contact </NavLink>
                   </li>
            
                 
                 </ul>
                
               </div>
           
           </nav> 
             </div>
             </div>
           
           </div>

    
    
    </div>
  )
}

export default Navbar