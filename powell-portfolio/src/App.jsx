import Contacts from "./components/Contacts"
import Hero from "./components/Hero"
import Mission from "./components/Mission"

import Nav from "./components/Nav"
import Services from "./components/Services"
import Vision from "./components/Vision"


const App = () => {
  return (
    <div className="pr-20 pl-20 space-x-10">
      <Nav/>
      <Hero/>
      <Services/>
      <Mission/>
      <Vision/>
      <Contacts/>


    </div>
  )
}

export default App