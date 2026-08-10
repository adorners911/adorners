import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-center">
      <p className="font-sans text-xs tracking-[0.22em] uppercase text-brand mb-4">404</p>
      <h1 className="font-display font-light text-5xl md:text-6xl text-dark mb-5">Page Not Found</h1>
      <p className="font-sans text-base text-muted max-w-sm leading-relaxed mb-9">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-7 py-3.5 bg-brand text-white font-sans text-sm font-medium tracking-wide hover:bg-brand/90 transition-colors duration-200"
      >
        Back to Home
      </Link>
    </div>
  )
}
