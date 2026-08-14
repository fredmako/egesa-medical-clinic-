import { ShieldCheck } from 'lucide-react'

export default function SHAInfoBar() {
  return (
    <div className="bg-primary text-white">
      <div className="container py-2">
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-sm">
            <ShieldCheck className="h-4 w-4" />
            <span className="font-semibold">SHA/NHIF Accepted</span>
            <span className="text-emerald-100">• Most services free for registered SHA patients</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-emerald-100 md:text-sm">
            <span className="flex items-center gap-1.5">
              <img src="/logo.jpg" alt="SHA" className="h-5 w-5 rounded-full object-cover ring-1 ring-white/40" />
              Accredited by SHA
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Open 24 hours — Sunday to Sunday</span>
          </div>
        </div>
      </div>
    </div>
  )
}
