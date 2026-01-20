import { Linkedin, Github, Code2, Database } from 'lucide-react';

export default function Team() {
  return (
    <section id="equipo" className="py-32 bg-dark px-6">
      <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in-up">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">El Equipo Principal</h2>
        <p className="text-muted max-w-2xl mx-auto text-lg">
          Ingenieros apasionados por la excelencia técnica y la innovación constante.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto animate-fade-in delay-200">
        {/* Miembro 1 */}
        <div className="bg-dark-card p-10 rounded-3xl border border-white/5 text-center hover:border-primary/40 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-primary/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          <div className="mb-8 relative inline-block">
             <div className="w-32 h-32 bg-dark-lighter rounded-full flex items-center justify-center border-2 border-white/10 group-hover:border-primary transition-colors mx-auto">
               <Code2 className="text-primary w-14 h-14" strokeWidth={1.5} />
             </div>
          </div>
          <h3 className="font-bold text-2xl mb-1">Alejandro R.</h3>
          <p className="text-primary font-medium mb-4">Lead Solutions Architect</p>
          <p className="text-muted mb-8">
            Especialista en diseño de sistemas distribuidos, escalabilidad y arquitecturas Cloud-Native (AWS). 10+ años de experiencia.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="text-muted hover:text-primary transition-colors"><Linkedin size={22} /></a>
            <a href="#" className="text-muted hover:text-primary transition-colors"><Github size={22} /></a>
          </div>
        </div>

        {/* Miembro 2 */}
        <div className="bg-dark-card p-10 rounded-3xl border border-white/5 text-center hover:border-secondary/40 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/5 group relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-secondary/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          <div className="mb-8 relative inline-block">
             <div className="w-32 h-32 bg-dark-lighter rounded-full flex items-center justify-center border-2 border-white/10 group-hover:border-secondary transition-colors mx-auto">
               <Database className="text-secondary w-14 h-14" strokeWidth={1.5} />
             </div>
          </div>
          <h3 className="font-bold text-2xl mb-1">Mariana V.</h3>
          <p className="text-secondary font-medium mb-4">Head of Data & DevOps</p>
          <p className="text-muted mb-8">
            Experta en pipelines de datos, automatización de infraestructura (Terraform/K8s) y optimización de bases de datos.
          </p>
           <div className="flex justify-center gap-4">
            <a href="#" className="text-muted hover:text-secondary transition-colors"><Linkedin size={22} /></a>
            <a href="#" className="text-muted hover:text-secondary transition-colors"><Github size={22} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}