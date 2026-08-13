import { ShieldCheck } from 'lucide-react'

export default function SHAInfoBar() {
  return (
    <div className="bg-emerald-700 text-white">
      <div className="container py-2">
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-sm">
            <ShieldCheck className="h-4 w-4" />
            <span className="font-semibold">SHA/NHIF Accepted</span>
            <span className="text-emerald-100">• Most services free for registered SHA patients</span>
          </div>
          <div className="text-xs text-emerald-100 md:text-sm">
            Tiko registered members: free HIV counselling/testing • All pills: KES 150
          </div>
        </div>
      </div>
    </div>
  )
}
