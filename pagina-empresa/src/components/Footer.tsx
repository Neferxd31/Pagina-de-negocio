import { Code2, Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-16 bg-dark-card border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">

        <div className="col-span-1 md:col-span-2">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-white mb-6"
          >
            <Code2 className="w-8 h-8 text-primary" strokeWidth={2.5} />
            <span>KorexalTech</span>
          </Link>

          <p className="text-muted max-w-sm mb-6 leading-relaxed">
            Transformamos negocios a través de software de alta calidad,
            innovación constante y alianzas estratégicas a largo plazo.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-muted hover:text-white hover:bg-primary transition-all"
            >
              <Twitter size={20} />
            </a>

            <a
              href="#"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-muted hover:text-white hover:bg-primary transition-all"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="#"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-muted hover:text-white hover:bg-primary transition-all"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6 text-lg">Enlaces Rápidos</h4>
          <ul className="space-y-3 text-muted">
            <li><a href="/#servicios" className="hover:text-primary transition-colors">Servicios</a></li>
            <li><a href="/#proceso" className="hover:text-primary transition-colors">Proceso</a></li>
            <li><a href="/#equipo" className="hover:text-primary transition-colors">Equipo</a></li>
            <li><a href="/#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
            <li><a href="/#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6 text-lg">Legal</h4>
          <ul className="space-y-3 text-muted">
            <li>
              <Link to="/terminos-servicio" className="hover:text-primary transition-colors">
                Términos de Servicio
              </Link>
            </li>
            <li>
              <Link to="/politica-privacidad" className="hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-muted text-sm">
        <p>© 2026 KorexalTech. Todos los derechos reservados.</p>
        <p className="mt-4 md:mt-0">Diseñado con precisión y pasión.</p>
      </div>
    </footer>
  );
}
