import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { id: "proceso", label: "Proceso" },
    { id: "servicios", label: "Servicios" }, 
    { id: "tech", label: "Tecnologías" },
    { id: "portfolio", label: "Portfolio" },
    { id: "equipo", label: "Equipo" },
  ];

  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80; // altura del navbar
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  const handleNavClick = (id: string) => {
    if (!isHomePage) {
      navigate("/");
      scrollToSection(id);
    } else {
      scrollToSection(id);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-dark/90 backdrop-blur-xl border-b border-white/5 supports-backdrop-filter:bg-dark/60">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-white hover:text-primary transition-colors group"
        >
          <Code2 className="w-8 h-8 group-hover:rotate-12 transition-transform" />
          <span>KorexalTech</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <div className="flex gap-8 text-muted">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="hover:text-primary transition-colors relative after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick("contacto")}
            className="bg-primary px-6 py-2.5 rounded-lg hover:bg-secondary transition-all text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            Cotizar Proyecto
          </button>
        </div>

        {/* Botón móvil */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-muted hover:text-white p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden absolute w-full bg-dark-card border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pt-4 pb-8 space-y-2 flex flex-col">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-left text-muted hover:text-primary hover:bg-white/5 px-4 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}

          <div className="pt-4">
            <button
              onClick={() => handleNavClick("contacto")}
              className="w-full flex justify-center bg-primary px-6 py-3 rounded-lg hover:bg-secondary transition-colors text-white font-semibold shadow-md"
            >
              Cotizar Proyecto
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
