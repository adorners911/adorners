import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand col */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block">
              <img
                src="/dfsd no bg.png"
                alt="Adorners"
                style={{ height: '64px', width: 'auto', filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="mt-3 font-sans text-xs text-white/40 tracking-[0.18em] uppercase">
              Architects · Interior · Civil
            </p>
            <p className="mt-5 font-sans text-sm text-white/55 leading-relaxed max-w-xs">
              Bahria Town's all-in-one design-build firm. We handle architecture, interior design, and civil construction — from concept to key handover.
            </p>
            <a
              href="https://wa.me/923219232302?text=Hi+Adorners!+I'm+interested+in+your+services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-brand text-white text-sm font-sans font-medium hover:bg-brand/90 transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Nav col */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-white/35 mb-5">Navigation</h3>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="font-sans text-sm text-white/60 hover:text-brand transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact col */}
          <div className="md:col-span-4 md:col-start-10">
            <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-white/35 mb-5">Contact</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/923219232302"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-white/60 hover:text-brand transition-colors duration-200"
              >
                WhatsApp: 0321 9232302
              </a>
              <a
                href="tel:+923219232302"
                className="font-sans text-sm text-white/60 hover:text-brand transition-colors duration-200"
              >
                Phone: 0321 9232302
              </a>
              <a
                href="mailto:adornersaic@gmail.com"
                className="font-sans text-sm text-white/60 hover:text-brand transition-colors duration-200"
              >
                adornersaic@gmail.com
              </a>
              <address className="font-sans text-sm text-white/40 not-italic leading-relaxed mt-1">
                Hallmark Tower 2, Plot No. 96<br />
                Suit No 301, Midway Commercial-B<br />
                Bahria Town, Karachi
              </address>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/25">
            © {new Date().getFullYear()} Adorners. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/25 tracking-wide">
            Architects · Interior Design · Civil Work
          </p>
        </div>
      </div>
    </footer>
  )
}
