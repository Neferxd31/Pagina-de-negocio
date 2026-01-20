export default function Companies() {
  const companies = ["TechGlobal", "InnovaCorp", "AlphaSystems", "DataFuture", "CloudNet"];
  return (
    <section className="py-20 bg-dark-lighter/50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center animate-fade-in">
        <p className="text-muted uppercase tracking-widest font-bold mb-10 text-sm">Confían en nuestra ingeniería</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
          {/* En un caso real, aquí irían <img src="/logo.svg" /> */}
          {companies.map((company) => (
            <div key={company} className="text-2xl font-bold text-white/30 hover:text-white/80 transition-colors cursor-default select-none flex items-center gap-2">
                {/* Placeholder de logo */}
                <div className="w-8 h-8 rounded-md bg-white/10"></div>
                {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}