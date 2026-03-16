import { Code2, ShoppingCart, Rocket, Wrench, Mouse, Settings } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    title: "Sitios Web",
    description: "Desarrollo de páginas web profesionales y responsivas que destacan tu presencia digital con diseño moderno y funcionalidad óptima.",
    icon: Code2,
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-blue-600/5"
  },
  {
    title: "Sistemas e-commerce",
    description: "Plataformas de comercio electrónico completas y seguras para llevar tu negocio al siguiente nivel con soluciones de pago integradas.",
    icon: ShoppingCart,
    color: "text-indigo-400",
    gradient: "from-indigo-500/20 to-indigo-600/5"
  },
  {
    title: "Apps Web Modernas",
    description: "Aplicaciones web progresivas y escalables utilizando las últimas tecnologías para experiencias de usuario excepcionales.",
    icon: Rocket,
    color: "text-sky-400",
    gradient: "from-sky-500/20 to-sky-600/5"
  },
  {
    title: "Mantenimiento",
    description: "Soporte técnico continuo y mantenimiento preventivo para garantizar el funcionamiento óptimo de tus sistemas y equipos.",
    icon: Wrench,
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 to-emerald-600/5"
  },
  {
    title: "Venta de Periféricos",
    description: "Comercialización de equipos informáticos y periféricos de calidad para potenciar tu infraestructura tecnológica.",
    icon: Mouse,
    color: "text-violet-400",
    gradient: "from-violet-500/20 to-violet-600/5"
  },
  {
    title: "Instalación y Configuración",
    description: "Configuración profesional de equipos y sistemas, asegurando una puesta en marcha eficiente y sin complicaciones.",
    icon: Settings,
    color: "text-blue-500",
    gradient: "from-blue-500/20 to-blue-600/5"
  }
];

export default function Services() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="servicios" className="py-28 px-6 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-primary text-sm font-semibold mb-6">
            Nuestra Expertise
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Servicios de Ingeniería de Software</h3>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas para resolver problemas complejos y acelerar el crecimiento de tu empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className={`group bg-dark-card p-8 rounded-2xl border border-dark-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 shadow-xl relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className={`mb-6 p-4 rounded-xl bg-dark inline-block group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  <s.icon className={`w-8 h-8 ${s.color}`} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                  {s.title}
                </h4>
                <p className="text-muted leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
