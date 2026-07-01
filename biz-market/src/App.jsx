import { useEffect, useMemo, useState } from 'react'

const initialCompanies = [
  {
    id: 1,
    name: 'Northwind Logistics',
    sector: 'Logística',
    revenue: 3200000,
    price: 6500000,
    status: 'Publicado',
    description: 'Operador regional con contratos recurrentes y alta rentabilidad.',
  },
  {
    id: 2,
    name: 'BluePeak Software',
    sector: 'Tecnología',
    revenue: 1800000,
    price: 4100000,
    status: 'Pendiente',
    description: 'Empresa SaaS B2B con base de clientes consolidada.',
  },
]

const statusStyles = {
  Publicado: 'bg-emerald-100 text-emerald-700',
  Pendiente: 'bg-amber-100 text-amber-700',
  Borrador: 'bg-slate-100 text-slate-700',
  Vendida: 'bg-rose-100 text-rose-700',
}

function App() {
  const [view, setView] = useState('public')
  const [companies, setCompanies] = useState(initialCompanies)
  const [filter, setFilter] = useState('Todos')
  const [form, setForm] = useState({
    name: '',
    sector: '',
    revenue: '',
    price: '',
    status: 'Borrador',
    description: '',
  })

  useEffect(() => {
    const stored = window.localStorage.getItem('marketplace-companies')
    if (stored) {
      setCompanies(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('marketplace-companies', JSON.stringify(companies))
  }, [companies])

  const filteredCompanies = useMemo(() => {
    if (filter === 'Todos') return companies
    return companies.filter((company) => company.status === filter)
  }, [companies, filter])

  const stats = useMemo(() => {
    return {
      total: companies.length,
      publicados: companies.filter((company) => company.status === 'Publicado').length,
      pendientes: companies.filter((company) => company.status === 'Pendiente').length,
      valorTotal: companies.reduce((sum, company) => sum + Number(company.price || 0), 0),
    }
  }, [companies])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name || !form.sector || !form.price) return

    const newCompany = {
      id: Date.now(),
      name: form.name,
      sector: form.sector,
      revenue: Number(form.revenue) || 0,
      price: Number(form.price) || 0,
      status: form.status,
      description: form.description,
    }

    setCompanies((current) => [newCompany, ...current])
    setForm({ name: '', sector: '', revenue: '', price: '', status: 'Borrador', description: '' })
    setView('admin')
  }

  const formatCurrency = (value) =>
    new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(value)

  return (
    <div className="min-h-screen bg-[#f4f6f8] text-[#14213d]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="text-lg font-semibold tracking-[0.2em] text-[#0f4c81]">M&A MARKETPLACE</div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setView('public')}
            className="rounded-full border border-[#0f4c81]/20 bg-white px-4 py-2 text-sm font-medium text-[#0f4c81] shadow-sm transition hover:bg-[#eef6fb]"
          >
            Web pública
          </button>
          <button
            type="button"
            onClick={() => setView('admin')}
            className="rounded-full bg-[#0f4c81] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0b3d67]"
          >
            Intranet
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        {view === 'public' ? (
          <>
            <section className="grid gap-10 rounded-[2rem] border border-[#0f4c81]/10 bg-white p-8 shadow-[0_20px_60px_rgba(15,76,129,0.12)] lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <div className="space-y-6">
                <div className="inline-flex rounded-full border border-[#0f4c81]/15 bg-[#eef6fb] px-3 py-1 text-sm font-medium text-[#0f4c81]">
                  Plataforma para gestionar empresas en venta
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl font-semibold tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl">
                    Una intranet para subir, validar y publicar empresas en tu marketplace.
                  </h1>
                  <p className="max-w-2xl text-lg text-[#475569]">
                    Centraliza el flujo completo: captura de negocio, valoración, revisión de estado y publicación en el marketplace con un panel claro y profesional.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setView('admin')}
                    className="rounded-full bg-[#0f4c81] px-5 py-3 font-medium text-white transition hover:bg-[#0b3d67]"
                  >
                    Abrir intranet
                  </button>
                  <a
                    href="#contacto"
                    className="rounded-full border border-[#0f4c81]/20 px-5 py-3 font-medium text-[#0f4c81] transition hover:bg-[#eef6fb]"
                  >
                    Hablar con un experto
                  </a>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-[#0f4c81]/10 bg-[#0f172a] p-6 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-[#7dd3fc]">Funcionalidades</p>
                <div className="mt-5 space-y-3">
                  <div className="rounded-2xl bg-white/10 p-4">Formulario para registrar nuevas empresas</div>
                  <div className="rounded-2xl bg-white/10 p-4">Panel con estados: borrador, pendiente, publicado y vendida</div>
                  <div className="rounded-2xl bg-white/10 p-4">Seguimiento de oportunidades y valor de venta</div>
                </div>
              </div>
            </section>

            <section id="contacto" className="mt-16 rounded-[2rem] border border-[#0f4c81]/15 bg-[#0f4c81] p-8 text-center text-white">
              <h2 className="text-3xl font-semibold">¿Quieres llevar esta intranet al siguiente nivel?</h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-200">
                Se puede ampliar con autenticación, documentos, historial de operaciones y una vista pública para compradores.
              </p>
              <button
                type="button"
                onClick={() => setView('admin')}
                className="mt-6 inline-flex rounded-full bg-white px-5 py-3 font-medium text-[#0f4c81] transition hover:bg-slate-100"
              >
                Crear primera empresa
              </button>
            </section>
          </>
        ) : (
          <div className="space-y-6">
            <section className="grid gap-4 rounded-[2rem] border border-[#0f4c81]/10 bg-white p-6 shadow-sm md:grid-cols-4">
              <div className="rounded-2xl bg-[#eef6fb] p-4">
                <p className="text-sm text-[#0f4c81]">Empresas registradas</p>
                <p className="mt-2 text-2xl font-semibold">{stats.total}</p>
              </div>
              <div className="rounded-2xl bg-[#eef6fb] p-4">
                <p className="text-sm text-[#0f4c81]">Publicadas</p>
                <p className="mt-2 text-2xl font-semibold">{stats.publicados}</p>
              </div>
              <div className="rounded-2xl bg-[#eef6fb] p-4">
                <p className="text-sm text-[#0f4c81]">Pendientes</p>
                <p className="mt-2 text-2xl font-semibold">{stats.pendientes}</p>
              </div>
              <div className="rounded-2xl bg-[#eef6fb] p-4">
                <p className="text-sm text-[#0f4c81]">Valor total</p>
                <p className="mt-2 text-xl font-semibold">{formatCurrency(stats.valorTotal)}</p>
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[#0f4c81]/10 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-[#0f172a]">Nueva empresa en venta</h2>
                <p className="mt-2 text-sm text-[#475569]">Sube una oportunidad para que pase por revisión y pueda entrar al marketplace.</p>

                <div className="mt-5 space-y-4">
                  <input
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    placeholder="Nombre de la empresa"
                    className="w-full rounded-2xl border border-[#0f4c81]/15 bg-[#f8fbfd] px-4 py-3 outline-none ring-0"
                  />
                  <input
                    value={form.sector}
                    onChange={(event) => setForm({ ...form, sector: event.target.value })}
                    placeholder="Sector"
                    className="w-full rounded-2xl border border-[#0f4c81]/15 bg-[#f8fbfd] px-4 py-3 outline-none ring-0"
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      value={form.revenue}
                      onChange={(event) => setForm({ ...form, revenue: event.target.value })}
                      type="number"
                      placeholder="Facturación anual"
                      className="w-full rounded-2xl border border-[#0f4c81]/15 bg-[#f8fbfd] px-4 py-3 outline-none ring-0"
                    />
                    <input
                      value={form.price}
                      onChange={(event) => setForm({ ...form, price: event.target.value })}
                      type="number"
                      placeholder="Precio de venta"
                      className="w-full rounded-2xl border border-[#0f4c81]/15 bg-[#f8fbfd] px-4 py-3 outline-none ring-0"
                    />
                  </div>
                  <select
                    value={form.status}
                    onChange={(event) => setForm({ ...form, status: event.target.value })}
                    className="w-full rounded-2xl border border-[#0f4c81]/15 bg-[#f8fbfd] px-4 py-3 outline-none ring-0"
                  >
                    <option>Borrador</option>
                    <option>Pendiente</option>
                    <option>Publicado</option>
                    <option>Vendida</option>
                  </select>
                  <textarea
                    value={form.description}
                    onChange={(event) => setForm({ ...form, description: event.target.value })}
                    placeholder="Resumen del negocio, modelo, clientes o potencial"
                    rows="4"
                    className="w-full rounded-2xl border border-[#0f4c81]/15 bg-[#f8fbfd] px-4 py-3 outline-none ring-0"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 rounded-full bg-[#0f4c81] px-5 py-3 font-medium text-white transition hover:bg-[#0b3d67]"
                >
                  Guardar empresa
                </button>
              </form>

              <div className="rounded-[2rem] border border-[#0f4c81]/10 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-[#0f172a]">Listado de oportunidades</h2>
                  <select
                    value={filter}
                    onChange={(event) => setFilter(event.target.value)}
                    className="rounded-full border border-[#0f4c81]/15 bg-[#f8fbfd] px-3 py-2 text-sm outline-none"
                  >
                    <option>Todos</option>
                    <option>Borrador</option>
                    <option>Pendiente</option>
                    <option>Publicado</option>
                    <option>Vendida</option>
                  </select>
                </div>

                <div className="mt-5 space-y-3">
                  {filteredCompanies.map((company) => (
                    <article key={company.id} className="rounded-2xl border border-[#0f4c81]/10 bg-[#f8fbfd] p-4">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-semibold text-[#0f172a]">{company.name}</h3>
                          <p className="text-sm text-[#475569]">{company.sector}</p>
                        </div>
                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[company.status]}`}>
                          {company.status}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-[#475569]">{company.description}</p>
                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-[#334155]">
                        <span>Facturación: {formatCurrency(company.revenue)}</span>
                        <span>Precio: {formatCurrency(company.price)}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
