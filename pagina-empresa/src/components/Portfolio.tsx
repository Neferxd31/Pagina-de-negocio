import { ExternalLink, ArrowRight } from 'lucide-react';
import { HTML5Icon } from '../icons/HtmlIcon';
import { CSSIcon } from '../icons/CssIcon';
import { JavaScriptIcon } from '../icons/JavaScriptIcon';
import { TailwindCSSIcon } from '../icons/TailwindIcon';
import { FirebaseIcon } from '../icons/FirebaseIcon';
import { AstroIcon } from '../icons/AstroIcon';
import { AngularIcon } from '../icons/AngularIcon';
import { useInView } from '../hooks/useInView';

export default function Portfolio() {
  const { ref, isVisible } = useInView(0.1);

  const tags = {
    Html5: { name: "HTML5", class: "bg-[#E34F26]/10 text-[#E34F26]", icon: <HTML5Icon/> },
    Css: { name: "CSS", class: "bg-[#1572B6]/10 text-[#1572B6]", icon: <CSSIcon/> },
    JavaScript: { name: "JavaScript", class: "bg-[#F7DF1E]/10 text-[#F7DF1E]", icon: <JavaScriptIcon/> },
    TailwindCSSIcon: { name: "TailwindCSS", class: "bg-[#06B6D4]/10 text-[#06B6D4]", icon: <TailwindCSSIcon/> },
    FirebaseIcon: { name: "Firebase", class: "bg-[#FF9100]/10 text-[#FF9100]", icon: <FirebaseIcon/> },
    AstroIcon: { name: "Astro", class: "bg-[#E14D85]/10 text-[#E14D85]", icon: <AstroIcon/> },
    AngularIcon: { name: "Angular", class: "bg-[#F40F57]/10 text-[#F40F57]", icon: <AngularIcon/> }
  };

  const projects = [
    {
      title: "Tymon",
      category: "Landing Page",
      description: "Soluciones legales integrales para todos tus problemas que se presenten relacionados con tránsito y transporte.",
      image: "/projects/Timon.webp",
      tags: [tags.Html5, tags.Css, tags.JavaScript],
      link: "https://tymon.netlify.app/",
    },
    {
      title: "Festival Gastronómico",
      category: "Página Web",
      description: "El festival que reúne a los mejores restaurantes de la ciudad.",
      image: "/projects/festival-gastronomico.webp",
      tags: [tags.AstroIcon, tags.FirebaseIcon, tags.TailwindCSSIcon],
      link: "https://festival-gastronomico-patios.web.app/",
    },
    {
      title: "Jobbing",
      category: "Página Web",
      description: "Comunicación · Inclusión · Marketing.",
      image: "/projects/Jobbing.webp",
      tags: [tags.AngularIcon, tags.TailwindCSSIcon],
      link: "https://jobbing-app.vercel.app/",
    },
  ];

  return (
    <section id="portfolio" className="py-32 bg-dark px-6 relative overflow-hidden">
      <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-5%] w-[300px] h-[300px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-primary text-sm font-semibold mb-6">
            Proyectos Destacados
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nuestro <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Portfolio</span>
          </h2>
          <p className="text-muted max-w-3xl mx-auto text-lg">
            Explora algunos de nuestros proyectos más recientes y descubre cómo transformamos ideas en soluciones digitales exitosas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-dark-card border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              <div className="relative h-56 overflow-hidden bg-dark">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark-card via-dark-card/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                  {project.category}
                </div>

                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={project.link}
                    className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="Ver proyecto"
                    target="_blank" rel="noreferrer"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 font-semibold">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs transition-colors flex items-center gap-2 ${tag.class}`}
                    >
                      {tag.icon && <span className="w-3 h-3 flex items-center">{tag.icon}</span>}
                      {tag.name}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all group/link"
                >
                  Ver proyecto completo
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="#contacto"
            className="relative inline-flex items-center gap-3 bg-primary px-8 py-4 rounded-xl text-white font-bold transition-all shadow-xl shadow-primary/25 hover:shadow-primary/50 hover:-translate-y-1 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              ¿Listo para tu proyecto?
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
