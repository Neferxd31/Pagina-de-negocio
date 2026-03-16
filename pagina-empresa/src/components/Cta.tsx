import { Send, Mail, Phone, MapPin, Building2 } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "../hooks/useInView";

export default function Cta() {
  const { ref, isVisible } = useInView(0.1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        "service_rhyn1kx",
        "template_1h9ift7",
        {
          from_name: formData.name,
          reply_to: formData.email,
          service_type: formData.service,
          message: formData.message,
          to_email: "korexaltech@gmail.com",
        },
        "zT5Dc4Dsnmytuq2d0",
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", service: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error al enviar email:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email Corporativo", value: "korexaltech@gmail.com" },
    { icon: Phone, label: "Números de Contacto", value: "+57 (314) 784-4269 - +57 (314) 854-8544" },
    { icon: MapPin, label: "Oficina Principal", value: "Los Patios, Colombia" },
  ];

  return (
    <section
      id="contacto"
      className="py-28 px-6 bg-dark relative overflow-hidden border-t border-white/5"
      ref={ref}
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10 items-center">
        <div className={`lg:pr-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-primary text-sm font-semibold mb-6">
            Contáctanos
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            ¿Listo para llevar tu negocio al{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              siguiente nivel
            </span>
            ?
          </h2>
          <p className="text-muted text-lg mb-12">
            Agenda una consultoría gratuita. Analizaremos tus desafíos
            tecnológicos y propondremos una hoja de ruta clara para digitalizar
            tu negocio.
          </p>

          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <div key={i} className="flex items-center gap-5 group">
                <div className="bg-dark-card p-4 rounded-xl border border-white/10 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                  <info.icon className="text-primary w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                    {info.label}
                  </p>
                  <p className="text-lg text-muted font-medium">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulario */}
        <div className={`bg-dark-card p-8 lg:p-10 rounded-3xl border border-white/10 shadow-2xl shadow-black/30 backdrop-blur-sm relative overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary to-secondary"></div>

          <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-2 relative z-10">
            <Building2 className="text-primary" /> Envíanos los detalles
          </h3>

          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-muted ml-1"
                >
                  Nombre Completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  minLength={3}
                  className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-muted/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-muted ml-1"
                >
                  Email de Trabajo <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ejemplo@empresa.com"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Por favor ingresa un email válido"
                  className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-muted/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="service"
                className="text-sm font-semibold text-muted ml-1"
              >
                Tipo de Servicio <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer pr-10"
              >
                <option value="">Selecciona una opción...</option>
                <option value="Sitio web">Sitio web</option>
                <option value="App web">App web</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Mantenimiento">Mantenimiento</option>
                <option value="Venta de periférico">Venta de periférico</option>
                <option value="Instalación y configuración">
                  Instalación y configuración
                </option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-muted ml-1"
              >
                Breve descripción del proyecto{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="¿Qué quieres construir?"
                required
                minLength={10}
                maxLength={500}
                className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-muted/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              ></textarea>
              <p className="text-xs text-muted/60 ml-1">
                {formData.message.length}/500 caracteres
              </p>
            </div>

            {submitStatus === "success" && (
              <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-xl text-sm flex items-center gap-2 animate-fade-in-up">
                <span>
                  ¡Mensaje enviado exitosamente! Nos pondremos en contacto
                  pronto.
                </span>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl text-sm flex items-center gap-2 animate-fade-in-up">
                <span>
                  Error al enviar el mensaje. Por favor intenta nuevamente.
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full relative bg-primary text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 overflow-hidden"
            >
              {isSubmitting ? (
                <span className="relative z-10 flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Enviando...
                </span>
              ) : (
                <>
                  <span className="relative z-10 flex items-center gap-2">
                    Enviar Solicitud
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </span>
                  <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </>
              )}
            </button>
            <p className="text-xs text-muted/60 text-center">
              <span className="text-red-500">*</span> Campos obligatorios
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
