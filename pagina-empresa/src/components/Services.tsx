import { Code2, ShoppingCart, Rocket, Wrench, Mouse, Settings } from 'lucide-react';

  const services = [
  {
    title: "Sitios Web",
    description: "Desarrollo de páginas web profesionales y responsivas que destacan tu presencia digital con diseño moderno y funcionalidad óptima.",
    icon: Code2,
    color: "text-blue-400"
  },
  {
    title: "Sistemas e-commerce",
    description: "Plataformas de comercio electrónico completas y seguras para llevar tu negocio al siguiente nivel con soluciones de pago integradas.",
    icon: ShoppingCart,
    color: "text-indigo-400"
  },
  {
    title: "Apps Web Modernas",
    description: "Aplicaciones web progresivas y escalables utilizando las últimas tecnologías para experiencias de usuario excepcionales.",
    icon: Rocket,
    color: "text-sky-400"
  },
  {
    title: "Mantenimiento",
    description: "Soporte técnico continuo y mantenimiento preventivo para garantizar el funcionamiento óptimo de tus sistemas y equipos.",
    icon: Wrench,
    color: "text-emerald-400"
  },
  {
    title: "Venta de Periféricos",
    description: "Comercialización de equipos informáticos y periféricos de calidad para potenciar tu infraestructura tecnológica.",
    icon: Mouse,
    color: "text-violet-400"
  },
  {
    title: "Instalación y Configuración",
    description: "Configuración profesional de equipos y sistemas, asegurando una puesta en marcha eficiente y sin complicaciones.",
    icon: Settings,
    color: "text-blue-500"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Nuestra Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Servicios de Ingeniería de Software</h3>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas para resolver problemas complejos y acelerar el crecimiento de tu empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group bg-dark-card p-8 rounded-2xl border border-dark-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 shadow-xl"
            >
              <div className={`mb-6 p-3 rounded-lg bg-dark inline-block group-hover:scale-110 transition-transform`}>
                <s.icon className={`w-10 h-10 ${s.color}`} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                {s.title}
              </h4>
              <p className="text-muted leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}