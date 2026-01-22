import { Database } from "lucide-react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaJava,
  FaPython,
  FaPhp,
  FaDocker,
  FaGitAlt,
  FaLinux
} from "react-icons/fa";

import {
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";

export default function TechCarousel() {
  const technologies = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Angular", icon: FaAngular, color: "text-red-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
  { name: "Java", icon: FaJava, color: "text-orange-600" },
  { name: "Spring Boot", icon: SiSpringboot, color: "text-green-600" },
  { name: "Python", icon: FaPython, color: "text-yellow-300" },
  { name: "PHP", icon: FaPhp, color: "text-indigo-500" },
  { name: "Docker", icon: FaDocker, color: "text-blue-400" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "Linux", icon: FaLinux, color: "text-black dark:text-white" },
  { name: "Bases de datos", icon: Database, color: "text-purple-400" },
];

  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        

        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Tecnologías que{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Dominamos
          </span>
        </h2>

        <p className="text-muted max-w-2xl mx-auto text-lg">
          Trabajamos con las herramientas más modernas y probadas de la industria
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />

        <div className="overflow-hidden">
          <div className="flex animate-scroll hover:pause-animation">
            {duplicatedTechs.map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4"
                style={{ width: "180px" }}
              >
                <div className="bg-dark-card border border-white/10 rounded-2xl p-6 h-44 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                  <div className="w-20 h-20 rounded-xl bg-white/5 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
                    <tech.icon className={`text-5xl ${tech.color}`} />
                  </div>

                  <span className="text-white font-semibold text-sm text-center">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
