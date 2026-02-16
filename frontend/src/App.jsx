import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header.jsx";
import Home from "./components/frontend/Home.jsx";
import ContactModal from "./components/common/ContactModal.jsx";
import Footer from "./components/common/Footer.jsx";
import About from "./components/pages/About.jsx";
import Services from "./components/pages/Services.jsx";
import Demolition from "./components/pages/Demolition.jsx";
import Earthmoving from  "./components/pages/Earthmoving.jsx"
import Civil from "./components/pages/Civil.jsx"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/services/demolition' element={<Demolition/>}/>
        <Route path='/services/earthmoving' element={<Earthmoving/>}/>
        <Route path='/services/civil' element={<Civil/>}/>
      </Routes>
      <ContactModal/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
