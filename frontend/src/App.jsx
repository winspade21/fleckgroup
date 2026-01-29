import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header.jsx";
import Home from "./components/frontend/Home.jsx";
import ContactModal from "./components/common/ContactModal.jsx";
import Footer from "./components/common/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ContactModal/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
