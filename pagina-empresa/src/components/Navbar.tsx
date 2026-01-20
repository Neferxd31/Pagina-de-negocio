import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#proceso", label: "Proceso" },
    { href: "#equipo", label: "Equipo" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-dark/90 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-dark/60">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-bold text-white hover:text-primary transition-colors group"
        >
          <Code2
            className="w-8 h-8 text-[#ffffff] group-hover:rotate-12 transition-transform"
            strokeWidth={2.5}
          />
          <span>KorexalTech</span>
        </a>
        {/* Navegación Desktop */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <div className="flex gap-8 text-muted">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contacto"
            className="bg-primary px-6 py-2.5 rounded-lg hover:bg-secondary transition-all text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            Cotizar Proyecto
          </a>
        </div>

        {/* Botón Menú Móvil */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-muted hover:text-white focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Desplegable Móvil */}
      <div
        className={`md:hidden absolute w-full bg-dark-card border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pt-4 pb-8 space-y-2 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={toggleMenu}
              className="text-muted hover:text-primary hover:bg-white/5 px-4 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="#contacto"
              onClick={toggleMenu}
              className="w-full flex justify-center bg-primary text-center px-6 py-3 rounded-lg hover:bg-secondary transition-colors text-white font-semibold shadow-md"
            >
              Cotizar Proyecto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
