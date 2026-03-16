import { Linkedin, Github } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const members = [
  {
    name: "Nefer Sneyder Rojas",
    role: "Desarrollador y Diseñador",
    desc: "Ingeniero de Sistemas en Formación y Desarrollador Web Junior.",
    image: "/img/Nefer.webp",
    accent: "primary",
    linkedin: "https://www.linkedin.com/in/nefer-sneyder-rojas-a7ba17280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/Neferxd31"
  },
  {
    name: "Johan Sebastián López Ortega",
    role: "Desarrollador Full Stack",
    desc: "Ingeniero de Sistemas en Formación y Desarrollador Web Full Stack y de software Junior.",
    image: "/img/Sebastian.webp",
    accent: "secondary",
    linkedin: "https://www.linkedin.com/in/sebaslopezofi/",
    github: "https://github.com/SebsMusicLive"
  }
];

export default function Team() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="equipo" className="py-32 bg-dark px-6 relative overflow-hidden">
      <div className="absolute top-[30%] left-[-5%] w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div ref={ref}>
        <div className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-primary text-sm font-semibold mb-6">
            Nuestro Equipo
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">El Equipo Principal</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Personas apasionadas por la excelencia técnica y la innovación constante.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {members.map((member, i) => (
            <div
              key={i}
              className={`bg-dark-card p-10 rounded-3xl border border-white/5 text-center hover:border-${member.accent}/40 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-${member.accent}/10 group relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: isVisible ? `${i * 200}ms` : '0ms' }}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-${member.accent}/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

              {/* Hover glow */}
              <div className={`absolute inset-0 bg-${member.accent}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="mb-8 relative inline-block">
                <div className={`w-56 h-56 lg:w-64 lg:h-64 bg-dark rounded-full flex items-center justify-center border-4 border-white/10 group-hover:border-${member.accent} transition-all duration-500 mx-auto overflow-hidden relative`}>
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"/>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="font-bold text-2xl mb-1">{member.name}</h3>
                <p className={`text-${member.accent} font-medium mb-4`}>{member.role}</p>
                <p className="text-muted mb-8">{member.desc}</p>
                <div className="flex justify-center gap-3">
                  <a href={member.linkedin} className={`w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-muted hover:text-white hover:bg-${member.accent} transition-all duration-300`} target="_blank" rel="noreferrer">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.github} className={`w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-muted hover:text-white hover:bg-${member.accent} transition-all duration-300`} target="_blank" rel="noreferrer">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
