import type { ReactNode } from 'react'

interface SectionEyebrowProps {
  children: ReactNode
}

export function SectionEyebrow({ children }: SectionEyebrowProps) {
  return (
    <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#b88f63]">
      <span className="h-px w-10 bg-[#b88f63]" />
      {children}
    </span>
  )
}
