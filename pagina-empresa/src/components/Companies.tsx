import { useInView } from '../hooks/useInView';

export default function Companies() {
  const { ref, isVisible } = useInView(0.2);
  const companies = ["TechGlobal", "InnovaCorp", "AlphaSystems", "DataFuture", "CloudNet"];

  return (
    <section className="py-20 bg-dark border-b border-white/5 overflow-hidden" ref={ref}>
      <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="text-muted uppercase tracking-widest font-bold text-sm">Confían en nuestra ingeniería</p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-dark to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-dark to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee whitespace-nowrap">
          {[...companies, ...companies, ...companies, ...companies].map((company, i) => (
            <div key={i} className="mx-8 lg:mx-12 flex items-center gap-3 text-2xl font-bold text-white/20 hover:text-white/60 transition-colors duration-500 cursor-default select-none shrink-0">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="text-sm font-black text-white/30">{company[0]}</span>
              </div>
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
