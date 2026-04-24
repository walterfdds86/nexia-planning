interface CtaButtonProps {
  href: string
  label: string
  size?: 'sm' | 'lg'
  className?: string
}

export default function CtaButton({ href, label, size = 'lg', className = '' }: CtaButtonProps) {
  const padding = size === 'lg' ? 'px-8 py-4 text-lg' : 'px-5 py-2.5 text-sm'
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white font-bold transition-all duration-200 shadow-lg shadow-violet-900/40 hover:shadow-violet-700/50 hover:scale-[1.03] active:scale-[0.98] ${padding} ${className}`}
    >
      {label} →
    </a>
  )
}
