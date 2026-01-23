import { ArrowRight, Cpu, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-40 pb-32 px-6 bg-dark relative overflow-hidden">
      {/* Efectos de Fondo (Glows) */}
      <div className="absolute top-[-20%] left-[-10%] w-200 h-200 bg-primary/20 blur-[120px] rounded-full pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 bg-secondary/15 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="animate-fade-in-up text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-primary text-sm font-semibold mb-8 backdrop-blur-md mx-auto lg:mx-0">
            <Sparkles size={16} className="animate-pulse" /> Soluciones Digitales a la Medida
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 leading-tight">
            Desarrollo de Software Web y <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-[#4facfe] to-primary bg-size[length:200%_auto] animate-gradient">Soporte Tecnológico</span>
          </h1>
          <p className="text-xl text-muted mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Creamos sitios web, sistemas e-commerce y aplicaciones modernas. Además, brindamos mantenimiento, venta de periféricos e instalación de equipos.
          </p>
          <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
            <a href="#contacto" className="bg-primary px-8 py-4 rounded-xl hover:bg-secondary text-white font-bold flex items-center gap-3 transition-all shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 group">
              Iniciar Proyecto <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </a>
            <a href="#servicios" className="px-8 py-4 rounded-xl text-white font-semibold border-2 border-white/10 hover:border-primary hover:bg-white/5 transition-all flex items-center gap-3">
              Nuestros Servicios
            </a>
          </div>
        </div>

       {/* Ilustración Tecnológica */}
        <div className="relative lg:h-150 flex items-center justify-center animate-fade-in delay-200 group perspective-1000">
          <div className="relative z-10 bg-linear-to-br from-dark-card/80 to-dark/80 border border-white/10 rounded-4xl p-12 flex justify-center items-center shadow-2xl shadow-primary/10 backdrop-blur-sm hover:-translate-y-2 hover:rotate-y-2 transition-all duration-500">
            <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]"></div>
            {/* Icono Central Animado */}
            <div className="relative animate-float">
                <Cpu className="text-white w-48 h-48 drop-shadow-[0_0_30px_rgba(0,75,173,0.5)]" strokeWidth={1} />
                 {/* Elementos flotantes decorativos */}
                 <div className="absolute -top-8 -right-8 w-16 h-16 bg-secondary/40 rounded-lg rotate-12 blur-sm animate-pulse-slow"></div>
                 <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-tertiary/60 rounded-full blur-sm animate-bounce delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}