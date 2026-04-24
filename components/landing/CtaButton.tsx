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
      className={`inline-block rounded-xl bg-gradient-to-r from-[#C9A84C] to-[#B8962E] hover:from-[#D4B85C] hover:to-[#C9A84C] text-[#1a1000] font-bold transition-all duration-200 shadow-lg shadow-[#2C1A00]/40 hover:shadow-[#7A5C20]/50 hover:scale-[1.03] active:scale-[0.98] ${padding} ${className}`}
    >
      {label} →
    </a>
  )
}
