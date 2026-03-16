import { Code2, Twitter, Linkedin, Github, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-dark-card border-t border-white/5 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <Link
            to="/"
            className="flex items-center gap-2.5 text-2xl font-bold text-white mb-6 group"
          >
            <Code2
              className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform"
              strokeWidth={2.5}
            />
            <span>
              Korexal<span className="text-primary">Tech</span>
            </span>
          </Link>

          <p className="text-muted max-w-sm mb-6 leading-relaxed">
            Transformamos negocios a través de software de alta calidad,
            innovación constante y alianzas estratégicas a largo plazo.
          </p>

          <div className="flex gap-3">
            {[
              { icon: Twitter, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Github, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-muted hover:text-white hover:bg-primary hover:-translate-y-1 transition-all duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6 text-lg">
            Enlaces Rápidos
          </h4>
          <ul className="space-y-3 text-muted">
            {[
              { href: "/#servicios", label: "Servicios" },
              { href: "/#proceso", label: "Proceso" },
              { href: "/#equipo", label: "Equipo" },
              { href: "/#portfolio", label: "Portfolio" },
              { href: "/#contacto", label: "Contacto" },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-primary hover:translate-x-1 transition-all inline-block duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/sobre-nosotros"
                className="hover:text-primary hover:translate-x-1 transition-all inline-block duration-300"
              >
                Sobre Nosotros
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6 text-lg">Legal</h4>
          <ul className="space-y-3 text-muted">
            <li>
              <Link
                to="/terminos-servicio"
                className="hover:text-primary hover:translate-x-1 transition-all inline-block duration-300"
              >
                Términos de Servicio
              </Link>
            </li>
            <li>
              <Link
                to="/politica-privacidad"
                className="hover:text-primary hover:translate-x-1 transition-all inline-block duration-300"
              >
                Política de Privacidad
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-muted text-sm">
        <p>&copy; 2026 KorexalTech. Todos los derechos reservados.</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <p>Diseñado con precisión y pasión.</p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-muted hover:text-white hover:bg-primary hover:-translate-y-1 transition-all duration-300"
            aria-label="Volver arriba"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
