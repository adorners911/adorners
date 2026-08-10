import { useInView } from '../hooks/useInView'

export function Reveal({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

export function Label({ children }) {
  return (
    <span className="inline-block font-sans text-xs tracking-[0.2em] uppercase text-brand mb-3">
      {children}
    </span>
  )
}
