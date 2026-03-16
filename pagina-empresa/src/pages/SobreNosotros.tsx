import {
  Target,
  Eye,
  Rocket,
  ShieldCheck,
  Lightbulb,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { useInView } from "../hooks/useInView";

const valores = [
  {
    titulo: "Pensamos antes de programar",
    descripcion:
      "Entendemos el problema primero para construir la solución correcta.",
    icon: Lightbulb,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    titulo: "Soluciones reales",
    descripcion:
      "Lo que creamos se usa, no se abandona. Resultados que aportan valor.",
    icon: CheckCircle2,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    titulo: "Trato humano",
    descripcion:
      "Hablamos claro, sin tecnicismos innecesarios. Transparencia total.",
    icon: MessageSquare,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    titulo: "Mejora continua",
    descripcion:
      "Tecnología que evoluciona contigo para mantenerte a la vanguardia.",
    icon: TrendingUp,
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
];

export default function SobreNosotros() {
  const { ref: headerRef, isVisible: headerVisible } = useInView(0.1);
  const { ref: cardsRef, isVisible: cardsVisible } = useInView(0.1);
  const { ref: valoresRef, isVisible: valoresVisible } = useInView(0.1);

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-dark min-h-screen">
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`mb-20 text-center transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-primary text-sm font-semibold mb-6">
            Conócenos
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Sobre <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Nosotros</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            En KorexalTech no solo escribimos código, construimos el motor del
            crecimiento para tu negocio.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Mission Card */}
          <div
            className={`group relative p-8 md:p-12 rounded-3xl bg-dark-card border border-white/5 hover:border-primary/50 transition-all duration-700 shadow-2xl hover:-translate-y-2 hover:shadow-primary/10 overflow-hidden ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
                <Target size={40} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Misión</h2>
              <p className="text-muted leading-relaxed text-lg">
                Desarrollar{" "}
                <span className="text-white font-medium italic">
                  soluciones tecnológicas
                </span>{" "}
                a la medida que ayuden a negocios y personas a
                <span className="text-primary font-semibold">
                  {" "}
                  optimizar procesos
                </span>
                , crecer digitalmente y tomar mejores decisiones, combinando
                software{" "}
                <span className="text-rose-400 font-medium">moderno</span>,
                soporte técnico
                <span className="text-sky-400 font-medium"> confiable</span> y
                un
                <span className="text-lime-400 font-medium">
                  {" "}
                  enfoque humano
                </span>{" "}
                en cada proyecto.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div
            className={`group relative p-8 md:p-12 rounded-3xl bg-dark-card border border-white/5 hover:border-secondary/50 transition-all duration-700 shadow-2xl hover:-translate-y-2 hover:shadow-secondary/10 overflow-hidden ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: cardsVisible ? "150ms" : "0ms" }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-secondary/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-secondary/10 text-secondary group-hover:scale-110 transition-transform duration-500">
                <Eye size={40} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Visión</h2>
              <p className="text-muted leading-relaxed text-lg">
                Ser una empresa{" "}
                <span className="text-white font-medium">reconocida</span> por
                crear software útil, escalable y bien pensado, convirtiéndonos
                en
                <span className="text-secondary font-semibold">
                  {" "}
                  aliados tecnológicos
                </span>{" "}
                de negocios que buscan innovar, mejorar su productividad y
                adaptarse al mundo{" "}
                <span className="text-white underline decoration-secondary/50">
                  digital
                </span>{" "}
                de forma segura y sostenible.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div ref={valoresRef} className="border-t border-white/10 pt-20">
          <div
            className={`text-center mb-16 transition-all duration-700 ${valoresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-primary text-sm font-semibold mb-6">
              Lo que nos define
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Nuestros Valores
            </h2>
            <p className="text-muted max-w-lg mx-auto">
              La brújula que guía cada una de nuestras líneas de código.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-dark-card/50 border border-white/5 hover:border-white/15 hover:bg-dark-card transition-all duration-500 group text-center md:text-left hover:-translate-y-2 hover:shadow-xl ${valoresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{
                  transitionDelay: valoresVisible
                    ? `${index * 100}ms`
                    : "0ms",
                }}
              >
                <div className="mb-4 flex justify-center md:justify-start">
                  <div
                    className={`p-3 rounded-xl ${valor.bg} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <valor.icon className={`w-6 h-6 ${valor.color}`} />
                  </div>
                </div>
                <h3 className="text-white font-bold mb-2">{valor.titulo}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {valor.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA & Footer badges */}
        <div
          className={`mt-20 text-center transition-all duration-700 delay-300 ${valoresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <a
            href="/#contacto"
            className="relative inline-flex items-center gap-3 bg-primary px-8 py-4 rounded-xl text-white font-bold transition-all shadow-xl shadow-primary/25 hover:shadow-primary/50 hover:-translate-y-1 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Trabaja con nosotros
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
            <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>

          <div className="mt-12 flex justify-center gap-12 opacity-40">
            <div className="flex items-center gap-2">
              <Rocket size={16} className="text-primary" />
              <span className="text-xs text-white uppercase tracking-widest">
                Innovación
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-primary" />
              <span className="text-xs text-white uppercase tracking-widest">
                Seguridad
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
