import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Navbar from "./components/Navbar";

function App() {
  

  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Inicio/>} />
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  );
  
}

export default App
