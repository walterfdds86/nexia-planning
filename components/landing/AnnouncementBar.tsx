import { Sparkles } from 'lucide-react'

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-gradient-to-r from-[#7A5C20] via-[#C9A84C] to-[#7A5C20] text-white text-center py-2.5 px-4 text-sm font-medium tracking-wide flex items-center justify-center gap-2">
      <Sparkles size={14} strokeWidth={1.5} aria-hidden="true" />
      Acesso demo gratuito — gere seu primeiro dossiê em menos de 30 minutos
    </div>
  )
}
