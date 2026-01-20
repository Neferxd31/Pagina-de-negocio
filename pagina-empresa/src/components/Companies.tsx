export default function Companies(){
    return(
        <section className="py-20 bg-darkCard/30">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Empresas que confían en nosotros</h2>
                <p className="text-muted mb-10 max-w-3xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                    Sed cursus ante dapibus diam.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 opacity-70">
                <div className="bg-darkCard p-6 rounded">Empresa Lorem</div>
                <div className="bg-darkCard p-6 rounded">Empresa Ipsum</div>
                <div className="bg-darkCard p-6 rounded">Empresa Dolor</div>
                <div className="bg-darkCard p-6 rounded">Empresa Sit</div>
                <div className="bg-darkCard p-6 rounded">Empresa Amet</div>
                </div>
            </div>
        </section>
    );
}
