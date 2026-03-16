import { useState } from "react";
import { WhatsAppIcon } from "../icons/WhatsappIcon";
import { X } from "lucide-react";

export default function Burble() {
  const [isOpen, setIsOpen] = useState(false);

  const channels = [
    {
      label: "Desarrollo",
      href: "https://wa.me/573147844269?text=Hola,%20busco%20información%20sobre%20desarrollo",
    },
    {
      label: "Soporte Técnico",
      href: "https://wa.me/573148548544?text=Hola,%20necesito%20soporte%20técnico",
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {/* Dropdown */}
      <div
        className={`flex flex-col gap-2 mb-1 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {channels.map((ch, i) => (
          <a
            key={i}
            href={ch.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-gray-800 px-5 py-3 rounded-xl shadow-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-0.5 group"
            style={{
              transitionDelay: isOpen ? `${i * 75}ms` : "0ms",
            }}
          >
            <span className="text-sm font-semibold">{ch.label}</span>
            <div className="bg-[#25D366] p-1.5 rounded-full group-hover:scale-110 transition-transform">
              <WhatsAppIcon className="h-4 w-4 text-white" />
            </div>
          </a>
        ))}
      </div>

      {/* Main button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-16 w-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:cursor-pointer relative group ${
          isOpen ? "bg-gray-800 rotate-0" : "bg-[#25D366] hover:scale-110"
        }`}
      >
        {/* Ripple effect when closed */}
        {!isOpen && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
            <span className="absolute inset-[-4px] rounded-full border-2 border-[#25D366]/30 animate-pulse"></span>
          </>
        )}

        <span
          className={`absolute transition-all duration-300 ${
            isOpen ? "rotate-0 scale-100" : "rotate-90 scale-0"
          }`}
        >
          <X className="text-white w-6 h-6" />
        </span>
        <span
          className={`absolute transition-all duration-300 ${
            isOpen ? "-rotate-90 scale-0" : "rotate-0 scale-100"
          }`}
        >
          <WhatsAppIcon className="h-9 w-9 text-white fill-current" />
        </span>
      </button>
    </div>
  );
}
