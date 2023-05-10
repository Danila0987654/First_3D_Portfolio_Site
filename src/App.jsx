import { BrowserRouter } from "react-router-dom";

import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components"

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <div className="navbarElements">
                    <Navbar/>
                    <Hero/>
                </div>
                <About/>
                <Experience/>
                <Tech/>
                <Works/>
                <Feedbacks/>
                <div className="star_section">
                    <Contact/>
                    <StarsCanvas/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
