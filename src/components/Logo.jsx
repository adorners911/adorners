import { Link } from 'react-router-dom'

const HEIGHT_MAP = {
  sm: 52,
  md: 64,
  lg: 80,
}

export default function Logo({ size = 'md', light = false }) {
  const height = HEIGHT_MAP[size]

  return (
    <Link to="/" className="inline-block">
      <img
        src="/dfsd no bg.png"
        alt="Adorners — Architects · Interior · Civil"
        height={height}
        style={{
          height: `${height}px`,
          width: 'auto',
          display: 'block',
          filter: light ? 'brightness(0) invert(1)' : 'none',
        }}
      />
    </Link>
  )
}
