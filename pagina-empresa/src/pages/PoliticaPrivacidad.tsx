import { Lock, Eye, Database, Shield, FileText, Mail } from 'lucide-react';

export default function PoliticaPrivacidad() {
  return (
    <div className="bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 bg-dark relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-primary text-sm font-semibold mb-6 backdrop-blur-md">
            <Lock size={16} /> Privacidad y Seguridad
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">
            Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Privacidad</span>
          </h1>
          <p className="text-muted text-lg mb-4">
            Última actualización: Enero 2026
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 px-6 bg-dark-lighter">
        <div className="max-w-4xl mx-auto">
          
          {/* Introducción */}
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Introducción</h2>
                <p className="text-muted leading-relaxed mb-4">
                  En KorexalTech, respetamos su privacidad y nos comprometemos a proteger sus datos personales. 
                  Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos su información.
                </p>
              </div>
            </div>
          </div>

          {/* Sección 1 */}
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Database className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Información que Recopilamos</h2>
                <p className="text-muted leading-relaxed mb-4">
                  Recopilamos los siguientes tipos de información:
                </p>
                <ul className="space-y-3 text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong className="text-white">Información de contacto:</strong> Nombre, dirección de correo electrónico, 
                      número de teléfono y dirección física cuando nos contacta o solicita nuestros servicios.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong className="text-white">Información del proyecto:</strong> Detalles sobre sus requerimientos, 
                      objetivos de negocio y especificaciones técnicas.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong className="text-white">Información técnica:</strong> Dirección IP, tipo de navegador, 
                      sistema operativo y datos de uso del sitio web.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sección 2 */}
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">2. Cómo Usamos su Información</h2>
                <p className="text-muted leading-relaxed mb-4">
                  Utilizamos la información recopilada para:
                </p>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Proporcionar y mejorar nuestros servicios de desarrollo web</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Comunicarnos con usted sobre proyectos y actualizaciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Procesar pagos y gestionar transacciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Enviar información relevante sobre nuestros servicios (con su consentimiento)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cumplir con obligaciones legales y regulatorias</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sección 3 */}
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">3. Protección de Datos</h2>
                <p className="text-muted leading-relaxed mb-4">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales, incluyendo:
                </p>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cifrado de datos sensibles mediante SSL/TLS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Acceso restringido a información personal solo a personal autorizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Copias de seguridad regulares y almacenamiento seguro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Auditorías de seguridad periódicas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sección 4 */}
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 mb-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">4. Sus Derechos</h2>
                <p className="text-muted leading-relaxed mb-4">
                  Usted tiene derecho a:
                </p>
                <ul className="space-y-2 text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-white">Acceder</strong> a sus datos personales que almacenamos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-white">Rectificar</strong> información incorrecta o incompleta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-white">Eliminar</strong> sus datos personales (derecho al olvido)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-white">Oponerse</strong> al procesamiento de sus datos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-white">Portabilidad</strong> de datos a otro proveedor</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sección 5 */}
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">5. Cookies y Tecnologías Similares</h2>
            <p className="text-muted leading-relaxed mb-4">
              Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. 
              Las cookies nos ayudan a:
            </p>
            <ul className="space-y-2 text-muted mb-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Recordar sus preferencias y configuraciones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Analizar el tráfico y el uso del sitio web</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Personalizar el contenido según sus intereses</span>
              </li>
            </ul>
            <p className="text-muted leading-relaxed">
              Puede configurar su navegador para rechazar cookies, pero esto puede afectar la funcionalidad del sitio.
            </p>
          </div>

          {/* Sección 6 */}
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8 mb-6">
            <h2 className="text-2xl font-bold mb-4">6. Compartir Información con Terceros</h2>
            <p className="text-muted leading-relaxed mb-4">
              No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en los siguientes casos:
            </p>
            <ul className="space-y-2 text-muted">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Proveedores de servicios que nos ayudan a operar nuestro negocio (hosting, procesamiento de pagos)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Cuando sea requerido por ley o para cumplir con procesos legales</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Con su consentimiento explícito</span>
              </li>
            </ul>
          </div>

          {/* Sección 7 */}
          <div className="bg-dark-card border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">7. Contacto</h2>
                <p className="text-muted leading-relaxed mb-4">
                  Si tiene preguntas sobre esta política de privacidad o desea ejercer sus derechos, 
                  puede contactarnos en:
                </p>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white mb-2">
                    <span className="text-primary font-semibold">Email:</span> privacidad@korexaltech.com
                  </p>
                  <p className="text-white">
                    <span className="text-primary font-semibold">Redes Sociales:</span> @korexaltech
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}