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
      className={`inline-block rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold transition-colors ${padding} ${className}`}
    >
      {label} →
    </a>
  )
}
