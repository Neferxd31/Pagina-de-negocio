import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce de Moda",
      category: "Sistema e-commerce",
      description: "Plataforma completa de comercio electrónico con pasarela de pagos, gestión de inventario y panel administrativo.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      title: "Sitio Web Corporativo",
      category: "Sitio Web",
      description: "Página web profesional y responsiva para empresa de servicios con sistema de contacto y blog integrado.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["HTML5", "CSS3", "JavaScript", "WordPress"],
      link: "#",
      github: "#"
    },
    {
      title: "App de Gestión Empresarial",
      category: "App Web Moderna",
      description: "Aplicación web progresiva para gestión de proyectos, tareas y colaboración en tiempo real.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Vue.js", "Firebase", "Tailwind", "PWA"],
      link: "#",
      github: "#"
    },
    {
      title: "Dashboard Analytics",
      category: "App Web Moderna",
      description: "Panel de control interactivo con visualización de datos en tiempo real y reportes personalizados.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["React", "Chart.js", "API REST", "PostgreSQL"],
      link: "#",
      github: "#"
    },
    {
      title: "Tienda Online Multivendedor",
      category: "Sistema e-commerce",
      description: "Marketplace completo que permite a múltiples vendedores gestionar sus productos y ventas de forma independiente.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      tags: ["Next.js", "Stripe", "MySQL", "Docker"],
      link: "#",
      github: "#"
    },
    {
      title: "Landing Page Premium",
      category: "Sitio Web",
      description: "Página de aterrizaje de alto impacto con animaciones modernas y optimización para conversiones.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      tags: ["HTML5", "GSAP", "Tailwind", "Responsive"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-dark px-6 relative overflow-hidden">
      {/* Efectos de Fondo */}
      <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Portfolio</span>
          </h2>
          <p className="text-muted max-w-3xl mx-auto text-lg">
            Explora algunos de nuestros proyectos más recientes y descubre cómo transformamos ideas en soluciones digitales exitosas.
          </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-dark-card border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-up"
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Imagen del Proyecto */}
              <div className="relative h-56 overflow-hidden bg-dark-lighter">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Categoría Badge */}
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                  {project.category}
                </div>

                {/* Enlaces flotantes */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.link} 
                    className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="Ver proyecto"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a 
                    href={project.github} 
                    className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label="Ver código"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tags de Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-muted hover:text-primary hover:border-primary/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Ver más */}
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all group"
                >
                  Ver proyecto completo 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16 animate-fade-in-up">
          <a 
            href="#contacto" 
            className="inline-flex items-center gap-3 bg-primary hover:bg-secondary px-8 py-4 rounded-xl text-white font-bold transition-all shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 group"
          >
            ¿Listo para tu proyecto? 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}