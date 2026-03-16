import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react";
import { useInView } from "../hooks/useInView";

export default function Process() {
  const { ref, isVisible } = useInView(0.1);

  const steps = [
    { icon: MessageSquare, title: "Consulta Inicial", desc: "Conversamos sobre tus necesidades, objetivos y el tipo de solución que mejor se adapta a tu negocio." },
    { icon: PenTool, title: "Planificación y Diseño", desc: "Diseñamos la estructura de tu proyecto web o planificamos el servicio técnico requerido." },
    { icon: Code2, title: "Desarrollo e Implementación", desc: "Construimos tu sitio web, e-commerce o aplicación, o realizamos la instalación y configuración de equipos." },
    { icon: Rocket, title: "Entrega y Soporte", desc: "Lanzamos tu proyecto y brindamos mantenimiento continuo para asegurar su óptimo funcionamiento." }
  ];

  return (
    <section id="proceso" className="py-32 bg-dark px-6 relative border-y border-white/5 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div ref={ref}>
        <div className={`max-w-6xl mx-auto text-center mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-primary text-sm font-semibold mb-6">
            Metodología
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Nuestro Proceso de Trabajo</h2>
          <p className="text-muted max-w-3xl mx-auto text-lg">
            Un enfoque claro y personalizado para cada proyecto, desde el primer contacto hasta el soporte continuo.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Animated connector line */}
            <div className="hidden md:block absolute top-14 left-0 w-full h-0.5 bg-white/5 z-0">
              <div className={`h-full bg-linear-to-r from-primary to-secondary transition-all duration-1500 ease-out ${isVisible ? 'w-full' : 'w-0'}`}
                   style={{ transitionDelay: '500ms' }}></div>
            </div>

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative z-10 text-center group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: isVisible ? `${index * 200}ms` : '0ms' }}
              >
                <div className="w-28 h-28 mx-auto bg-dark-card border-4 border-dark rounded-full flex items-center justify-center mb-8 group-hover:border-primary transition-all duration-500 relative group-hover:shadow-xl group-hover:shadow-primary/20">
                  <div className="absolute inset-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300"></div>
                  <step.icon className="w-10 h-10 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute -bottom-4 -right-2 text-6xl font-black text-white/5 select-none z-0 group-hover:text-primary/10 transition-colors duration-300">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-muted leading-relaxed px-4">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
