export default function Navbar(){
    return(
    <nav className="fixed w-full z-50 bg-dark/80 backdrop-blur border-b border-darkBorder">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <span className="text-xl font-bold">KorexalTech</span>
                <div className="hidden md:flex gap-8 text-muted">
                    <a href="#servicios" className="hover:text-primary">Servicios</a>
                    <a href="#portafolio" className="hover:text-primary">Portafolio</a>
                    <a href="#equipo" className="hover:text-primary">Equipo</a>
                    <a href="#contacto" className="hover:text-primary">Contacto</a>
                </div>
            <button className="bg-primary px-6 py-2 rounded-lg hover:bg-secondary">Comenzar</button>
        </div>
    </nav>
    );
}