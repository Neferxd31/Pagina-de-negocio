import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  // Cambia el fondo del navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "proceso", label: "Proceso" },
    { id: "servicios", label: "Servicios" },
    { id: "tech", label: "Tecnologías" },
    { id: "portfolio", label: "Portfolio" },
    { id: "equipo", label: "Equipo" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) return;
      const sections = navLinks.map((l) => l.id);
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
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
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 text-xl font-bold text-white hover:text-primary transition-colors group"
        >
          <div className="relative">
            <Code2 className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-primary/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </div>
          <span className="tracking-tight">
            Korexal<span className="text-primary">Tech</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium">
          <div className="flex gap-1 text-muted">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 relative ${
                  activeSection === link.id
                    ? "text-primary bg-primary/10"
                    : "hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          <Link
            to="/sobre-nosotros"
            className="px-4 py-2 rounded-lg text-muted hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            Nosotros
          </Link>

          <button
            onClick={() => handleNavClick("contacto")}
            className="relative bg-primary px-6 py-2.5 rounded-xl hover:bg-secondary transition-all text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden group"
          >
            <span className="relative z-10">Cotizar Proyecto</span>
            <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-muted hover:text-white p-2 transition-colors"
          aria-label="Toggle Menu"
        >
          <div className="relative w-7 h-7">
            <X
              size={28}
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
              }`}
            />
            <Menu
              size={28}
              className={`absolute inset-0 transition-all duration-300 ${
                isOpen ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`md:hidden absolute w-full bg-dark-card/95 backdrop-blur-xl border-b border-white/10 transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pt-4 pb-8 space-y-1 flex flex-col">
          {navLinks.map((link, i) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-left text-muted hover:text-primary hover:bg-white/5 px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300"
              style={{
                transitionDelay: isOpen ? `${i * 50}ms` : "0ms",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(-20px)",
              }}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/sobre-nosotros"
            onClick={() => setIsOpen(false)}
            className="text-left text-muted hover:text-primary hover:bg-white/5 px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300"
          >
            Nosotros
          </Link>

          <div className="pt-4">
            <button
              onClick={() => handleNavClick("contacto")}
              className="w-full flex justify-center bg-primary px-6 py-3.5 rounded-xl hover:bg-secondary transition-colors text-white font-semibold shadow-lg shadow-primary/20"
            >
              Cotizar Proyecto
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}