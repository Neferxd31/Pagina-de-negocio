export default function Services(){
    return (
        <section id="servicios" className="py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>

    <div className="grid md:grid-cols-2 gap-10">
      <div className="bg-darkCard p-8 rounded-xl border border-darkBorder">
        <i data-lucide="globe" className="text-primary mb-4"></i>
        <h3 className="text-2xl font-bold mb-4">Desarrollo Web Profesional</h3>
        <p className="text-muted mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia arcu eget nulla.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra.
        </p>
        <p className="text-muted">
          Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.
        </p>
      </div>

      <div className="bg-darkCard p-8 rounded-xl border border-darkBorder">
        <i data-lucide="wrench" className="text-secondary mb-4"></i>
        <h3 className="text-2xl font-bold mb-4">Mantenimiento y Soporte IT</h3>
        <p className="text-muted mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante dapibus diam.
          Sed nisi. Nulla quis sem at nibh elementum imperdiet.
        </p>
        <p className="text-muted">
          Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
        </p>
      </div>
    </div>
  </div>
</section>
    );
}