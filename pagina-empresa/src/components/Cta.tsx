import { Send, Mail, Phone, MapPin, Building2 } from 'lucide-react';

export default function Cta() {
  return (
    <section id="contacto" className="py-28 px-6 bg-dark-lighter relative overflow-hidden border-t border-white/5">
       {/* Decoración de Fondo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10 items-center">
        <div className="animate-fade-in-up lg:pr-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>
          <p className="text-muted text-lg mb-12">
            Agenda una consultoría gratuita. Analizaremos tus desafíos tecnológicos y propondremos una hoja de ruta clara para digitalizar tu negocio.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-5 group">
                <div className="bg-dark-card p-4 rounded-xl border border-white/10 group-hover:border-primary/50 transition-colors shadow-lg shadow-black/20"><Mail className="text-primary w-6 h-6"/></div>
                <div>
                    <p className="text-sm font-bold text-white uppercase tracking-wider mb-1">Email Corporativo</p>
                    <p className="text-lg text-muted font-medium">contacto@korexaltech.com</p>
                </div>
            </div>
             <div className="flex items-center gap-5 group">
                <div className="bg-dark-card p-4 rounded-xl border border-white/10 group-hover:border-primary/50 transition-colors shadow-lg shadow-black/20"><Phone className="text-primary w-6 h-6"/></div>
                <div>
                    <p className="text-sm font-bold text-white uppercase tracking-wider mb-1">Línea Directa</p>
                    <p className="text-lg text-muted font-medium">+57 (300) 123-4567</p>
                </div>
            </div>
             <div className="flex items-center gap-5 group">
                <div className="bg-dark-card p-4 rounded-xl border border-white/10 group-hover:border-primary/50 transition-colors shadow-lg shadow-black/20"><MapPin className="text-primary w-6 h-6"/></div>
                <div>
                    <p className="text-sm font-bold text-white uppercase tracking-wider mb-1">Oficina Principal</p>
                    <p className="text-lg text-muted font-medium">Medellín, Colombia - Edificio Ruta N</p>
                </div>
            </div>
          </div>
        </div>

         {/* Formulario Visual */}
        <div className="bg-dark-card p-8 lg:p-10 rounded-3xl border border-white/10 shadow-2xl shadow-black/30 animate-fade-in delay-200 backdrop-blur-sm relative">
           <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
          <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-2"><Building2 className="text-primary"/> Envíanos los detalles</h3>
          
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-muted ml-1">Nombre Completo</label>
                    <input type="text" id="name" placeholder="Tu nombre" className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-muted/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-muted ml-1">Email de Trabajo</label>
                    <input type="email" id="email" placeholder="ejemplo@empresa.com" className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-muted/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all" />
                </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="project" className="text-sm font-semibold text-muted ml-1">Tipo de Servicio</label>
              <select id="project" className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3E%3Cpath stroke=%27%237D90A7%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27m6 8 4 4 4-4%27/%3E%3C/svg%3E')] bg-[length:1.25rem_1.25rem] bg-no-repeat bg-[right_1rem_center] pr-10">
                <option className="bg-dark">Selecciona una opción...</option>
                <option className="bg-dark">Sitio web</option>
                <option className="bg-dark">App web</option>
                <option className="bg-dark">Mantenimiento</option>
                <option className="bg-dark">Venta de periferico</option>
              </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-muted ml-1">Breve descripción del proyecto</label>
                <textarea id="message" rows={4} placeholder="¿Qué quieres construir?" className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-muted/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0 group">
              Enviar Solicitud <Send size={18} className="group-hover:translate-x-1 transition-transform"/>
            </button>
            <p className="text-xs text-muted/60 text-center mt-4">
                * Esto es una demostración visual de la interfaz.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}