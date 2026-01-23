import { FileText, Shield, AlertCircle, CheckCircle } from 'lucide-react';

export default function TerminosServicio() {
  return (
    <div className="bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 bg-dark relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-primary text-sm font-semibold mb-6 backdrop-blur-md">
            <FileText size={16} /> Información Legal
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">
            Términos de <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Servicio</span>
          </h1>
          <p className="text-muted text-lg mb-4">
            Última actualización: Enero 2026
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 px-6 bg-dark-lighter">
        <div className="max-w-4xl mx-auto">
          
          {/* Sección 1 */}
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Shield className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Aceptación de los Términos</h2>
                <p className="text-muted leading-relaxed mb-4">
                  Al acceder y utilizar los servicios de KorexalTech, usted acepta cumplir con estos términos y condiciones. 
                  Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
                </p>
                <p className="text-muted leading-relaxed">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                  Los cambios entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
                </p>
              </div>
            </div>
          </div>

          {/* Sección 2 */}
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <CheckCircle className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">2. Servicios Ofrecidos</h2>
                <p className="text-muted leading-relaxed mb-4">
                  KorexalTech ofrece servicios de desarrollo de software web que incluyen:
                </p>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Desarrollo de sitios web personalizados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Implementación de sistemas e-commerce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Creación de aplicaciones web modernas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mantenimiento y soporte técnico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Venta de periféricos e instalación de equipos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sección 3 */}
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <AlertCircle className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">3. Responsabilidades del Cliente</h2>
                <p className="text-muted leading-relaxed mb-4">
                  El cliente se compromete a:
                </p>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Proporcionar información precisa y completa para el desarrollo del proyecto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Realizar los pagos acordados en los plazos establecidos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Respetar los derechos de propiedad intelectual del software desarrollado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mantener la confidencialidad de credenciales y accesos proporcionados</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sección 4 */}
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">4. Propiedad Intelectual</h2>
            <p className="text-muted leading-relaxed mb-4">
              Todo el contenido, diseño, código y materiales desarrollados por KorexalTech son propiedad 
              de la empresa, salvo acuerdo específico en contrario. Una vez completado el pago total del proyecto, 
              el cliente recibe los derechos de uso del producto final.
            </p>
            <p className="text-muted leading-relaxed">
              KorexalTech se reserva el derecho de utilizar el proyecto como parte de su portfolio, 
              salvo que se especifique lo contrario en el contrato.
            </p>
          </div>

          {/* Sección 5 */}
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">5. Limitación de Responsabilidad</h2>
            <p className="text-muted leading-relaxed mb-4">
              KorexalTech no será responsable por daños indirectos, incidentales o consecuentes 
              derivados del uso de nuestros servicios, incluyendo pero no limitado a:
            </p>
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Pérdida de datos o información</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Interrupciones en el servicio por causas fuera de nuestro control</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Daños causados por modificaciones no autorizadas del software</span>
              </li>
            </ul>
          </div>

          {/* Sección 6 */}
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">6. Contacto</h2>
            <p className="text-muted leading-relaxed mb-4">
              Si tiene preguntas sobre estos términos de servicio, puede contactarnos a través de:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-white mb-2">
                <span className="text-primary font-semibold">Email:</span> contacto@korexaltech.com
              </p>
              <p className="text-white">
                <span className="text-primary font-semibold">Redes Sociales:</span> @korexaltech
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}