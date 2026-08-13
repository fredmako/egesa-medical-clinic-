import { FlaskConical, Clock, Search, X } from 'lucide-react'
import { useState } from 'react'
import { labServices } from '../data/siteData'

export default function Laboratory() {
  const [query, setQuery] = useState('')

  const filtered = labServices.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-4xl font-bold md:text-5xl">Laboratory Services</h1>
              <p className="mt-3 max-w-3xl text-slate-300">
                Fast, reliable diagnostic testing with clear pricing.
              </p>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tests..."
                className="w-full rounded-lg border border-slate-300 bg-white px-9 py-2 text-sm outline-none focus:border-emerald-700"
              />
              {query && (
                <button onClick={() => setQuery('')} className="absolute right-3 top-2.5 text-slate-500">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-12 md:divide-x md:divide-y-0">
              <div className="md:col-span-4 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Test Name</p>
              </div>
              <div className="md:col-span-4 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Cost</p>
              </div>
              <div className="md:col-span-4 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Turnaround Time</p>
              </div>

              {filtered.map((item) => (
                <>
                  <div key={`${item.name}-name`} className="md:col-span-4 p-4 text-sm font-medium text-slate-900">
                    <span className="flex items-center gap-2">
                      <FlaskConical className="h-4 w-4 text-emerald-700" />
                      {item.name}
                    </span>
                  </div>
                  <div key={`${item.name}-cost`} className="md:col-span-4 p-4 text-sm text-slate-700">
                    {item.cost}
                  </div>
                  <div key={`${item.name}-time`} className="md:col-span-4 p-4 text-sm text-slate-700">
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-slate-500" />
                      {item.turnaround}
                    </span>
                  </div>
                </>
              ))}

              {filtered.length === 0 && (
                <div className="md:col-span-12 p-8 text-center text-sm text-slate-500">
                  No tests found matching your search.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
