export default function Metrics() {
    const metrics = [
        { value: "+150", label: "Proyectos Entregados", color: "text-primary" },
        { value: "98%", label: "Tasa de Retención de Clientes", color: "text-secondary" },
        { value: "+8", label: "Años de Experiencia Media", color: "text-primary" },
        { value: "24/7", label: "Soporte y Monitoreo", color: "text-secondary" }
    ];

  return (
    <section className="py-24 px-6 bg-dark relative border-y border-white/5 overflow-hidden animate-fade-in">
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center relative z-10">
        {metrics.map((metric, index) => (
            <div key={index} className="group">
                <h3 className={`text-5xl lg:text-6xl font-black mb-4 ${metric.color} drop-shadow-lg scale-100 group-hover:scale-110 transition-transform duration-300`}>
                    {metric.value}
                </h3>
                <p className="text-muted text-lg font-medium uppercase tracking-wider">
                    {metric.label}
                </p>
            </div>
        ))}
      </div>
    </section>
  );
}