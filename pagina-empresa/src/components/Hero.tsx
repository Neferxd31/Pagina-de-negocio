import { useState, useEffect } from 'react';
import { ArrowRight, Cpu, Sparkles, Code2, Globe, Zap, } from 'lucide-react';

const words = ["Soporte Tecnológico", "Innovación Digital", "Software a Medida"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 bg-dark relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-secondary/15 blur-[100px] rounded-full pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none animate-morph-blob"></div>

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="absolute top-20 left-[15%] w-2 h-2 bg-primary/40 rounded-full animate-float"></div>
      <div className="absolute top-40 right-[20%] w-3 h-3 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-[25%] w-2 h-2 bg-primary/50 rounded-full animate-float-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-60 left-[60%] w-1.5 h-1.5 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-48 right-[30%] w-2.5 h-2.5 bg-primary/30 rounded-full animate-float-slow" style={{ animationDelay: '1.5s' }}></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="animate-fade-in-up text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-primary text-sm font-semibold mb-8 backdrop-blur-md mx-auto lg:mx-0 hover:bg-white/10 transition-colors">
            <Sparkles size={16} className="animate-pulse" /> Soluciones Digitales a la Medida
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-8 leading-[1.1]">
            Desarrollo de Software Web y{' '}
            <span className={`text-transparent bg-clip-text bg-linear-to-r from-primary via-[#4facfe] to-primary bg-[length:200%_auto] animate-gradient inline-block transition-all duration-400 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              {words[wordIndex]}
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-muted mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Creamos sitios web, sistemas e-commerce y aplicaciones modernas. Además, brindamos mantenimiento, venta de periféricos e instalación de equipos.
          </p>

          <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
            <a href="#contacto" className="relative bg-primary px-8 py-4 rounded-xl text-white font-bold flex items-center gap-3 transition-all shadow-xl shadow-primary/25 hover:shadow-primary/50 hover:-translate-y-1 group overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Iniciar Proyecto <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a href="#servicios" className="px-8 py-4 rounded-xl text-white font-semibold border-2 border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center gap-3 backdrop-blur-sm">
              Nuestros Servicios
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start text-muted text-sm">
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-primary" />
              <span>Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-primary" />
              <span>Soporte 24/7</span>
            </div>
          </div>
        </div>

        <div className="relative lg:h-[600px] flex items-center justify-center group">
          <div className="absolute w-80 h-80 rounded-full border border-primary/20 animate-rotate-glow opacity-50"></div>
          <div className="absolute w-96 h-96 rounded-full border border-secondary/10 animate-rotate-glow opacity-30" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>

          <div className="relative z-10 bg-linear-to-br from-dark-card/80 to-dark/80 border border-white/10 rounded-3xl p-16 flex justify-center items-center shadow-2xl shadow-primary/10 backdrop-blur-sm hover:-translate-y-3 transition-all duration-700">
            <div className="absolute inset-0 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

            <div className="relative animate-float">
              <Cpu className="text-white w-40 h-40 lg:w-48 lg:h-48 drop-shadow-[0_0_40px_rgba(0,75,173,0.5)]" strokeWidth={1} />

              <div className="absolute -top-10 -right-10 bg-dark-card/80 border border-white/10 backdrop-blur-sm p-3 rounded-xl animate-float-slow shadow-lg">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-dark-card/80 border border-white/10 backdrop-blur-sm p-3 rounded-xl animate-float shadow-lg" style={{ animationDelay: '1s' }}>
                <Globe className="w-6 h-6 text-secondary" />
              </div>
              <div className="absolute top-1/2 -right-14 bg-dark-card/80 border border-white/10 backdrop-blur-sm p-3 rounded-xl animate-float-slow shadow-lg" style={{ animationDelay: '2s' }}>
                <Zap className="w-6 h-6 text-[#4facfe]" />
              </div>

              <div className="absolute -top-6 -right-6 w-16 h-16 bg-secondary/30 rounded-lg rotate-12 blur-sm animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/40 rounded-full blur-sm animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:flex flex-col items-center gap-2 text-muted/50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 border-2 border-muted/30 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
