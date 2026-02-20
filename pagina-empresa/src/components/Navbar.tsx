import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Cambia el fondo del navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierra el menú móvil al cambiar de ruta
  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: "Inicio", page: "/" },
    { name: "Sobre Nosotros", page: "/sobrenosotros" },
    /*{ name: "Aprende", page: "/aprende" },
    { name: "Planes", page: "/planes" },*/
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-dark/80 backdrop-blur-md border-b border-white/10 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-white group"
        >
          <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
            <Code2 className="w-7 h-7 text-primary group-hover:rotate-12 transition-transform" />
          </div>
          <span className="tracking-tight">KorexalTech</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={link.page}
                className={`text-sm font-medium transition-all hover:text-primary relative group ${
                  location.pathname === link.page ? "text-primary" : "text-gray-300"
                }`}
              >
                {link.name}
                {/* Indicador de página activa */}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.page ? "w-full" : ""
                }`} />
              </Link>
            ))}
          </div>

          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
            Cotizar Proyecto
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Móvil */}
      <div
        className={`md:hidden absolute w-full bg-dark-card/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen py-6 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col px-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.page}
              to={link.page}
              className={`text-lg font-medium py-2 ${
                location.pathname === link.page ? "text-primary" : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-white/5 my-2" />
          <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:cursor-pointer">
            Cotizar Proyecto
          </button>
        </div>
      </div>
    </nav>
  );
}