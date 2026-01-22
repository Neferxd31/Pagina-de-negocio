import { useState } from "react";
import { WhatsApp } from "../icons/Whatsapp";

export default function Burble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      
      {/* Menú Desplegable */}
      {isOpen && (
        <div className="flex flex-col gap-2 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Opción 1: Ventas */}
          <a
            href="https://wa.me/573147844269?text=Hola,%20busco%20información%20sobre%20desarrollo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-xl hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <span className="text-sm font-medium">Desarrollo</span>
            <div className="bg-[#25D366] p-1 rounded-full">
                <WhatsApp className="h-4 w-4 text-white" />
            </div>
          </a>

          {/* Opción 2: Soporte */}
          <a
            href="https://wa.me/573148548544?text=Hola,%20necesito%20soporte%20técnico"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-xl hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <span className="text-sm font-medium">Soporte Técnico</span>
            <div className="bg-[#25D366] p-1 rounded-full">
                <WhatsApp className="h-4 w-4 text-white" />
            </div>
          </a>
          
        </div>
      )}

      {/* Botón Principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-16 w-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:cursor-pointer ${
          isOpen ? "rotate-90 bg-gray-800" : "bg-[#25D366] hover:scale-110"
        }`}
      >
        {isOpen ? (
          <span className="text-white text-2xl font-bold">✕</span>
        ) : (
          <WhatsApp className="h-10 w-10 text-white fill-current" />
        )}
      </button>
    </div>
  );
}