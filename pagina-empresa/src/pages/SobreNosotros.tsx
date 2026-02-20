import { 
  Target, 
  Eye, 
  Rocket, 
  ShieldCheck, 
  Lightbulb, 
  CheckCircle2, 
  MessageSquare, 
  TrendingUp 
} from "lucide-react";

const SobreNosotros = () => {
  const valores = [
    {
      titulo: "Pensamos antes de programar",
      descripcion: "Entendemos el problema primero para construir la solución correcta.",
      icon: <Lightbulb className="text-amber-400" />,
    },
    {
      titulo: "Soluciones reales",
      descripcion: "Lo que creamos se usa, no se abandona. Resultados que aportan valor.",
      icon: <CheckCircle2 className="text-emerald-400" />,
    },
    {
      titulo: "Trato humano",
      descripcion: "Hablamos claro, sin tecnicismos innecesarios. Transparencia total.",
      icon: <MessageSquare className="text-sky-400" />,
    },
    {
      titulo: "Mejora continua",
      descripcion: "Tecnología que evoluciona contigo para mantenerte a la vanguardia.",
      icon: <TrendingUp className="text-rose-400" />,
    },
  ];

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-dark">
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Encabezado Principal */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Sobre <span className="text-primary">Nosotros</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            En KorexalTech no solo escribimos código, construimos el motor del crecimiento para tu negocio.
          </p>
        </div>

        {/* Grid de Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Tarjeta Misión */}
          <div className="group relative p-8 md:p-12 rounded-3xl bg-dark-card border border-white/5 hover:border-primary/50 transition-all duration-500 shadow-2xl">
            <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
              <Target size={40} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Misión</h2>
            <p className="text-gray-400 leading-relaxed text-lg text-pretty">
              Desarrollar <span className="text-white font-medium italic">soluciones tecnológicas</span> a la medida que ayuden a negocios y personas a 
              <span className="text-primary font-semibold"> optimizar procesos</span>, crecer digitalmente y tomar mejores decisiones, combinando 
              software <span className="text-rose-400 font-medium">moderno</span>, soporte técnico 
              <span className="text-sky-400 font-medium"> confiable</span> y un 
              <span className="text-lime-400 font-medium"> enfoque humano</span> en cada proyecto.
            </p>
          </div>

          {/* Tarjeta Visión */}
          <div className="group relative p-8 md:p-12 rounded-3xl bg-dark-card border border-white/5 hover:border-secondary/50 transition-all duration-500 shadow-2xl">
            <div className="mb-6 inline-flex p-4 rounded-2xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform duration-500">
              <Eye size={40} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Visión</h2>
            <p className="text-gray-400 leading-relaxed text-lg text-pretty">
              Ser una empresa <span className="text-white font-medium">reconocida</span> por crear software útil, escalable y bien pensado, convirtiéndonos en 
              <span className="text-secondary font-semibold"> aliados tecnológicos</span> de negocios que buscan innovar, mejorar su productividad y 
              adaptarse al mundo <span className="text-white underline decoration-secondary/50">digital</span> de forma segura y sostenible.
            </p>
          </div>
        </div>

        {/* Sección de Valores */}
        <div className="border-t border-white/10 pt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Nuestros Valores</h2>
            <p className="text-muted-foreground">La brújula que guía cada una de nuestras líneas de código.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group text-center md:text-left"
              >
                <div className="mb-4 flex justify-center md:justify-start">
                  <div className="p-3 rounded-lg bg-dark group-hover:scale-110 transition-transform">
                    {valor.icon}
                  </div>
                </div>
                <h3 className="text-white font-bold mb-2">{valor.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{valor.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer simple de la página */}
        <div className="mt-20 flex justify-center gap-12 opacity-40">
           <div className="flex items-center gap-2">
             <Rocket size={16} className="text-primary"/>
             <span className="text-xs text-white uppercase tracking-widest">Innovación</span>
           </div>
           <div className="flex items-center gap-2">
             <ShieldCheck size={16} className="text-primary"/>
             <span className="text-xs text-white uppercase tracking-widest">Seguridad</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;