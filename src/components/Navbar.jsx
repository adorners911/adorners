import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/portfolio', label: 'Portfolio', end: true },
  { to: '/contact', label: 'Contact', end: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white border-b border-gray-100 shadow-sm'
            : 'bg-white/90 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Logo size="md" />

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `font-sans text-sm tracking-wide transition-colors duration-200 ${
                      isActive ? 'text-brand' : 'text-dark/60 hover:text-brand'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}

              <span className="w-px h-4 bg-dark/15" />

              <Link
                to="/contact"
                className="px-5 py-2.5 bg-brand text-white text-sm font-sans font-medium tracking-wide hover:bg-brand/90 transition-colors duration-200"
              >
                Get a Quote
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span
                className={`block h-px bg-dark transition-all duration-300 origin-center ${
                  menuOpen ? 'rotate-45 translate-y-[7px] w-6' : 'w-6'
                }`}
              />
              <span
                className={`block h-px bg-dark transition-all duration-300 ${
                  menuOpen ? 'opacity-0 w-6' : 'w-4'
                }`}
              />
              <span
                className={`block h-px bg-dark transition-all duration-300 origin-center ${
                  menuOpen ? '-rotate-45 -translate-y-[7px] w-6' : 'w-6'
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col px-8 pt-24 pb-12 transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-2">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-display font-light text-4xl py-3 border-b border-gray-100 transition-colors ${
                  isActive ? 'text-brand' : 'text-dark'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="mt-auto">
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block px-7 py-3.5 bg-brand text-white font-sans font-medium text-sm mb-8"
          >
            Get a Free Consultation
          </Link>
          <div className="flex flex-col gap-1">
            <a href="https://wa.me/923273273667" className="font-sans text-sm text-muted hover:text-brand transition-colors">
              WhatsApp: 0327 3273667
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=hello@adorners.pk" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-muted hover:text-brand transition-colors">
              hello@adorners.pk
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
