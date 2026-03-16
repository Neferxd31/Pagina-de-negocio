import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import { TrendingUp, Users, Clock, Headphones } from 'lucide-react';

function MetricCard({ value, prefix, suffix, label, icon: Icon, delay, isVisible }: { value: number; prefix: string; suffix: string; label: string; icon: React.ElementType; delay: number; isVisible: boolean }) {
  const count = useCountUp(value, 2000, 0, isVisible);

  return (
    <div
      className={`group text-center p-8 rounded-2xl bg-dark-card/50 border border-white/5 hover:border-primary/30 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      <div className="mb-4 flex justify-center">
        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      <h3 className="text-5xl lg:text-6xl font-black mb-3 text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
        {prefix}{count}{suffix}
      </h3>
      <p className="text-muted text-sm font-medium uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}

export default function Metrics() {
  const { ref, isVisible } = useInView(0.2);

  const metrics = [
    { value: 150, prefix: "+", suffix: "", label: "Proyectos Entregados", icon: TrendingUp },
    { value: 98, prefix: "", suffix: "%", label: "Tasa de Retención", icon: Users },
    { value: 8, prefix: "+", suffix: "", label: "Años de Experiencia", icon: Clock },
    { value: 24, prefix: "", suffix: "/7", label: "Soporte y Monitoreo", icon: Headphones }
  ];

  return (
    <section className="py-24 px-6 bg-dark relative border-y border-white/5 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            value={metric.value}
            prefix={metric.prefix}
            suffix={metric.suffix}
            label={metric.label}
            icon={metric.icon}
            delay={index * 150}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
}
