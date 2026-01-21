import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import TerminosServicio from "./pages/TerminosServicio";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      {/* bg-dark aplica el color #1a2533 definido en el CSS */}
      <div className="bg-dark min-h-screen">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/terminos-servicio" element={<TerminosServicio/>} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;