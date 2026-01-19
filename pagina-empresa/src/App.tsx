import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";

function App() {
  

  return (
    <BrowserRouter>
    <div>
      <Inicio/>
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App
