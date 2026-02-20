import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import TerminosServicio from "./pages/TerminosServicio";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import Navbar from "./components/Navbar";
import SobreNosotros from "./pages/SobreNosotros";
/*import Aprende from "./pages/Aprende";
import Planes from "./pages/Planes";*/

function App() {
  return (
    <BrowserRouter>
      {/* flex flex-col: Crea una columna flexible.
        min-h-screen: Asegura que el div mida al menos el alto total de la pantalla.
      */}
      <div className="bg-dark min-h-screen flex flex-col">
        <Navbar />
        
        {/* grow: Este contenedor crecerá para ocupar todo el espacio disponible,
          empujando el Footer hacia abajo automáticamente.
        */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobrenosotros" element={<SobreNosotros />} />
            {/*<Route path="/aprende" element={<Aprende />} />
            <Route path="/planes" element={<Planes />} />*/}
            <Route path="/terminos-servicio" element={<TerminosServicio />} />
            <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;