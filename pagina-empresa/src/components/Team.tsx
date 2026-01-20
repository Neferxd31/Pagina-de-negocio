export default function Team(){
    return(
        <section id="equipo" className="py-24 bg-darkCard/30 px-6">
  <div className="max-w-4xl mx-auto text-center mb-16">
    <h2 className="text-4xl font-bold mb-4">Nuestro Equipo</h2>
    <p className="text-muted max-w-3xl mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante dapibus diam.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
    <div className="bg-darkCard p-8 rounded-xl border border-darkBorder text-center">
      <i data-lucide="code-2" className="text-primary mb-4"></i>
      <h3 className="font-bold text-lg">Profesional Lorem Ipsum</h3>
      <p className="text-muted mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis sem at nibh elementum.
      </p>
    </div>

    <div className="bg-darkCard p-8 rounded-xl border border-darkBorder text-center">
      <i data-lucide="wrench" className="text-secondary mb-4"></i>
      <h3 className="font-bold text-lg">Especialista Dolor Sit</h3>
      <p className="text-muted mt-2">
        Praesent mauris. Fusce nec tellus sed augue semper porta.
      </p>
    </div>
  </div>
</section>

    )
}