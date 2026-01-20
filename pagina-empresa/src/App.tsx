import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      {/* bg-dark aplica el color #1a2533 definido en el CSS */}
      <div className="bg-dark min-h-screen">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Inicio/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;