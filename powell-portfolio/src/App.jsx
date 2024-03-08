import Contacts from "./components/Contacts"
import Hero from "./components/Hero"
import Mission from "./components/Mission"

import Nav from "./components/Nav"
import Services from "./components/Services"
import Vision from "./components/Vision"
import {BrowserRouter } from "react-router-dom"


const App = () => {
  return (
    <BrowserRouter>
    <div className="px-2 sm:px-20">
      <Nav/>
    
      <Hero/>
      <Services/>
      <Mission/>
      <Vision/>
      <Contacts/>
      
    </div>
    </BrowserRouter>
  )
}

export default App