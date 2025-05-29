import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"


import "./App.css"
import Footer from "./components/footer/Footer"
import { Route,  Routes } from "react-router-dom"
import About from "./pages/about/About"
import Service from "./pages/service/Service"
import Contact from "./pages/contact/Contact"
import Home from "./pages/home/Home"
import Frontend from "./pages/home/Frontend"
import Fullstack from "./pages/home/Fullstack"
import Backend from "./pages/home/Backend"

function App() {
 


  return (<div  >
    <div className="app">
    
    <Navbar/>

    <Header/>
    </div>
    <Routes>
    <Route path="/" exact  element={<Home/>}  >
    <Route path="frontend"   element={<Frontend/>}  />
    <Route path="fullstack"   element={<Fullstack/>}  />
    <Route path="backend"   element={<Backend/>}  />
    </Route>
      <Route path="/about"   element={<About/>}  />
      <Route path="/service"   element={<Service/>}  />
      <Route path="/contact"   element={<Contact/>}  />
      
      </Routes>
  
    <div className="footer__fin">
      <Footer/>
    </div>
  </div>)
}

export default App