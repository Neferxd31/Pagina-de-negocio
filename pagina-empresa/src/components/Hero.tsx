export default function Hero(){
    return(
        <section className="pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
                <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Soluciones Tecnológicas Integrales para Empresas Modernas
                </h1>
                <p className="text-xl text-muted mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="flex gap-4 flex-wrap">
                    <button className="bg-primary px-8 py-3 rounded-lg hover:bg-secondary flex items-center gap-2">
                        Solicitar Información <i data-lucide="arrow-right"></i>
                    </button>
                    <button className="border border-darkBorder px-8 py-3 rounded-lg text-muted hover:border-primary hover:text-primary">
                        Conocer Más
                    </button>
                </div>
            </div>

            <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary blur-3xl opacity-20"></div>
                    <div className="relative bg-darkCard border border-darkBorder rounded-2xl p-10 flex justify-center">
                        <i data-lucide="cpu" className="text-primary w-55 h-55"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}