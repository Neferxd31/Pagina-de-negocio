import { Database } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  FaLinux,
} from "react-icons/fa";

import { SiSpringboot, SiTailwindcss } from "react-icons/si";
import { FirebaseIcon } from "../icons/FirebaseIcon";

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
    { name: "Bases de datos", icon: Database, color: "text-purple-400", size: "w-10 h-10" },
    { name: "Firebase", icon: FirebaseIcon, color: "text-yellow-500", size: "w-10 h-10" },
  ];

  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    const speed = window.innerWidth < 768 ? 0.6 : 0.3;

    const autoScroll = () => {
      if (!isDragging) {
        track.scrollLeft += speed;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, [isDragging]);

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    scrollLeft.current = trackRef.current!.scrollLeft;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const walk = (startX.current - e.clientX) * 1.2;
    trackRef.current!.scrollLeft = scrollLeft.current + walk;
  };

  const onPointerUp = () => setIsDragging(false);

  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section
      id="tech"
      className="py-20 bg-dark relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Tecnologías que{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
            Dominamos
          </span>
        </h2>
        <p className="text-muted max-w-2xl mx-auto text-lg">
          Herramientas modernas y probadas en producción
        </p>
      </div>

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className="flex overflow-x-hidden cursor-grab active:cursor-grabbing select-none px-6"
      >
        {duplicatedTechs.map((tech, index) => (
          <div
            key={index}
            className="shrink-0 mx-4"
            style={{ width: "180px" }}
          >
            <div className="bg-dark-card border border-white/10 rounded-2xl p-6 h-44 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20">
              <div className="w-20 h-20 rounded-xl bg-white/5 flex items-center justify-center">
                <tech.icon className={`text-5xl ${tech.color} ${tech.size}`} />
              </div>
              <span className="text-white font-semibold text-sm text-center">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
