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


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/services/demolition' element={<Demolition/>}/>
      </Routes>
      <ContactModal/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
