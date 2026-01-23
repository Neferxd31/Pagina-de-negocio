import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    { icon: MessageSquare, title: "1. Consulta Inicial", desc: "Conversamos sobre tus necesidades, objetivos y el tipo de solución que mejor se adapta a tu negocio." },
    { icon: PenTool, title: "2. Planificación y Diseño", desc: "Diseñamos la estructura de tu proyecto web o planificamos el servicio técnico requerido." },
    { icon: Code2, title: "3. Desarrollo e Implementación", desc: "Construimos tu sitio web, e-commerce o aplicación, o realizamos la instalación y configuración de equipos." },
    { icon: Rocket, title: "4. Entrega y Soporte", desc: "Lanzamos tu proyecto y brindamos mantenimiento continuo para asegurar su óptimo funcionamiento." }
  ];

  return (
    <section id="proceso" className="py-32 bg-dark-lighter px-6 relative border-y border-white/5">
      <div className="max-w-6xl mx-auto text-center mb-24 animate-fade-in-up">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Nuestro Proceso de Trabajo</h2>
        <p className="text-muted max-w-3xl mx-auto text-lg">
          Un enfoque claro y personalizado para cada proyecto, desde el primer contacto hasta el soporte continuo.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Línea conectora para desktop */}
          <div className="hidden md:block absolute top-14 left-0 w-full h-0.5 bg-white/10 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 text-center group animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
              <div className="w-28 h-28 mx-auto bg-dark-card border-4 border-dark-lighter rounded-full flex items-center justify-center mb-8 group-hover:border-primary transition-colors relative">
                <div className="absolute inset-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors"></div>
                 <step.icon className="w-10 h-10 text-primary relative z-10" />
                 {/* Número de fondo */}
                 <span className="absolute -bottom-4 -right-2 text-6xl font-black text-white/5 select-none z-0 group-hover:text-primary/10 transition-colors">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted leading-relaxed px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}