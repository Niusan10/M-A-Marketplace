const services = [
  {
    title: 'Valoración precisa',
    text: 'Analizamos finanzas, oportunidad de mercado y potencial de crecimiento para fijar un precio real.',
  },
  {
    title: 'Negociación estratégica',
    text: 'Guiamos cada etapa del proceso para proteger tus intereses y cerrar acuerdos con mayor confianza.',
  },
  {
    title: 'Due diligence integral',
    text: 'Revisamos contratos, operaciones, clientes y riesgos para asegurar una transacción segura y transparente.',
  },
]

const steps = ['Definición del objetivo', 'Valoración y preparación', 'Búsqueda de compradores o vendedores', 'Cierre y transferencia']

function App() {
  return (
    <div className="min-h-screen bg-[#f4f6f8] text-[#14213d]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="text-lg font-semibold tracking-[0.2em] text-[#0f4c81]">M&A MARKETPLACE</div>
        <a
          href="#contacto"
          className="rounded-full border border-[#0f4c81]/20 bg-white px-4 py-2 text-sm font-medium text-[#0f4c81] shadow-sm transition hover:border-[#0f4c81]/40 hover:bg-[#eef6fb]"
        >
          Solicitar asesoría
        </a>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <section className="grid gap-10 rounded-[2rem] border border-[#0f4c81]/10 bg-white p-8 shadow-[0_20px_60px_rgba(15,76,129,0.12)] lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-[#0f4c81]/15 bg-[#eef6fb] px-3 py-1 text-sm font-medium text-[#0f4c81]">
              Compra y venta de empresas con confianza
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl">
                Conectamos compradores y vendedores para cerrar acuerdos que impulsan el futuro.
              </h1>
              <p className="max-w-2xl text-lg text-[#475569]">
                Ayudamos a empresarios, inversionistas y fondos a encontrar oportunidades reales, negociar con estrategia y completar transacciones inteligentes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#servicios"
                className="rounded-full bg-[#0f4c81] px-5 py-3 font-medium text-white transition hover:bg-[#0b3d67]"
              >
                Ver servicios
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-[#0f4c81]/20 px-5 py-3 font-medium text-[#0f4c81] transition hover:bg-[#eef6fb]"
              >
                Hablar con un experto
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-[#0f4c81]/10 bg-[#0f172a] p-6 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-[#7dd3fc]">Resultados clave</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-3xl font-semibold">+300</p>
                <p className="mt-1 text-sm text-slate-300">Transacciones asesoradas</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-3xl font-semibold">98%</p>
                <p className="mt-1 text-sm text-slate-300">Satisfacción de clientes</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-[#7dd3fc]/20 bg-[#0f4c81]/30 p-4 text-sm text-slate-200">
              Desde la valoración hasta el cierre, acompañamos a cada parte con criterio, confidencialidad y foco en el valor real del negocio.
            </div>
          </div>
        </section>

        <section id="servicios" className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-[1.5rem] border border-[#0f4c81]/10 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#0f172a]">{service.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#475569]">{service.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-16 grid gap-8 rounded-[2rem] border border-[#0f4c81]/10 bg-white p-8 shadow-sm lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#0f4c81]">Nuestro proceso</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#0f172a]">Un camino claro para comprar o vender una empresa.</h2>
            <p className="mt-4 text-[#475569]">
              Diseñamos cada operación con rigor financiero y visión comercial para que el proceso sea más ágil, seguro y rentable.
            </p>
          </div>
          <div className="grid gap-3">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-3 rounded-2xl border border-[#0f4c81]/10 bg-[#f8fbfd] p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f4c81]/10 text-sm font-semibold text-[#0f4c81]">
                  {index + 1}
                </div>
                <span className="text-[#334155]">{step}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="mt-16 rounded-[2rem] border border-[#0f4c81]/15 bg-[#0f4c81] p-8 text-center text-white">
          <h2 className="text-3xl font-semibold">¿Listo para dar el siguiente paso?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-200">
            Si buscas vender tu empresa por su valor real o encontrar una oportunidad de crecimiento, podemos ayudarte a hacerlo con estrategia y seguridad.
          </p>
          <a
            href="mailto:contacto@bizmarket.com"
            className="mt-6 inline-flex rounded-full bg-white px-5 py-3 font-medium text-[#0f4c81] transition hover:bg-slate-100"
          >
            contacto@bizmarket.com
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
