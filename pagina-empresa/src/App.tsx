import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  

  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App