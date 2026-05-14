import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const PROJECT_TYPES = [
  'New Home Construction',
  'Home Renovation / Interior Upgrade',
  'Apartment Redesign',
  'Commercial Office Fit-out',
  'Retail / Restaurant / Clinic',
  'Full Design & Build',
  'Architectural Drawings Only',
  'Other',
]

const BUDGET_RANGES = [
  'Under PKR 5 Lakh',
  'PKR 5 – 10 Lakh',
  'PKR 10 – 20 Lakh',
  'PKR 20 – 35 Lakh',
  'PKR 35 – 50 Lakh',
  'PKR 50 Lakh+',
  'Not decided yet',
]

const PRICING_TYPES = [
  'Turnkey / Fixed Price (we handle everything)',
  'Design Only (no construction)',
  'Construction Only (design ready)',
  'Cost + Management Fee',
  'Consultation / Advisory',
  'Not sure — need guidance',
]

function Reveal({ children, delay = 0, className = '' }) {
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

function Label({ children }) {
  return (
    <span className="inline-block font-sans text-xs tracking-[0.2em] uppercase text-brand mb-3">
      {children}
    </span>
  )
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    projectType: '',
    budget: '',
    pricingType: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...form }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', projectType: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="overflow-x-hidden">
      {/* ── PAGE HEADER ── */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="animate-hero-label font-sans text-xs tracking-[0.22em] uppercase text-brand">
            Let's Talk
          </p>
          <h1 className="animate-hero-title font-display font-light text-5xl md:text-6xl lg:text-7xl text-dark leading-[1.05] mt-4">
            Get in Touch
          </h1>
          <p className="animate-hero-sub font-sans text-base text-muted mt-5 max-w-md leading-relaxed">
            Reach out about your project — we offer a free initial consultation for residential and commercial clients across Karachi.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20">
            {/* Left: Contact details */}
            <div className="lg:col-span-2 flex flex-col gap-10">

              {/* WhatsApp — primary CTA */}
              <Reveal>
                <div className="p-7 bg-brand-light border border-brand-border">
                  <Label>Fastest Response</Label>
                  <h2 className="font-display font-medium text-2xl text-dark mb-2">Chat on WhatsApp</h2>
                  <p className="font-sans text-sm text-muted mb-5 leading-relaxed">
                    Most clients prefer WhatsApp — we respond quickly and can share project photos, quotes, and portfolios directly.
                  </p>
                  <a
                    href="https://wa.me/923273273667?text=Hi+Adorners!+I'd+like+to+discuss+a+project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand text-white font-sans text-sm font-medium hover:bg-brand/90 transition-colors duration-200"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    Open WhatsApp
                  </a>
                </div>
              </Reveal>

              {/* Contact details */}
              <Reveal delay={0.1}>
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="font-sans text-xs tracking-[0.18em] uppercase text-muted/50 mb-1">Phone</p>
                    <a href="tel:+923273273667" className="font-sans text-base text-dark hover:text-brand transition-colors">
                      0327 3273667
                    </a>
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-[0.18em] uppercase text-muted/50 mb-1">Email</p>
                    <a href="mailto:hello@adorners.pk" className="font-sans text-base text-dark hover:text-brand transition-colors break-all">
                      hello@adorners.pk
                    </a>
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-[0.18em] uppercase text-muted/50 mb-1">Office</p>
                    <address className="font-sans text-base text-dark not-italic leading-relaxed">
                      Hallmark Tower 2, Plot No. 96<br />
                      Suit No 301, Midway Commercial-B<br />
                      Bahria Town, Karachi
                    </address>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Form */}
            <Reveal delay={0.1} className="lg:col-span-3">
              <div>
                <Label>Send a Message</Label>
                <h2 className="font-display font-light text-3xl text-dark mb-8">Tell us about your project</h2>

                {status === 'success' ? (
                  <div className="p-8 bg-brand-light border border-brand-border text-center">
                    <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl text-dark mb-2">Message Sent!</h3>
                    <p className="font-sans text-sm text-muted">
                      We'll get back to you shortly. For faster response, WhatsApp us at 0327 3273667.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Name */}
                    <div>
                      <label className="block font-sans text-xs tracking-[0.15em] uppercase text-dark/60 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Ahmed Khan"
                        className="w-full px-4 py-3.5 border border-gray-200 font-sans text-sm text-dark placeholder-gray-300 focus:outline-none focus:border-brand transition-colors duration-200 bg-white"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block font-sans text-xs tracking-[0.15em] uppercase text-dark/60 mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g. 0321 1234567"
                        className="w-full px-4 py-3.5 border border-gray-200 font-sans text-sm text-dark placeholder-gray-300 focus:outline-none focus:border-brand transition-colors duration-200 bg-white"
                      />
                    </div>

                    {/* Project type */}
                    <div>
                      <label className="block font-sans text-xs tracking-[0.15em] uppercase text-dark/60 mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-gray-200 font-sans text-sm text-dark focus:outline-none focus:border-brand transition-colors duration-200 bg-white appearance-none"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                      >
                        <option value="">Select a project type</option>
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block font-sans text-xs tracking-[0.15em] uppercase text-dark/60 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-gray-200 font-sans text-sm text-dark focus:outline-none focus:border-brand transition-colors duration-200 bg-white appearance-none"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                      >
                        <option value="">Select your budget</option>
                        {BUDGET_RANGES.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    {/* Pricing Type */}
                    <div>
                      <label className="block font-sans text-xs tracking-[0.15em] uppercase text-dark/60 mb-2">
                        Pricing Preference
                      </label>
                      <select
                        name="pricingType"
                        value={form.pricingType}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-gray-200 font-sans text-sm text-dark focus:outline-none focus:border-brand transition-colors duration-200 bg-white appearance-none"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                      >
                        <option value="">Select pricing type</option>
                        {PRICING_TYPES.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-sans text-xs tracking-[0.15em] uppercase text-dark/60 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your project — location, size, timeline, or anything else on your mind."
                        className="w-full px-4 py-3.5 border border-gray-200 font-sans text-sm text-dark placeholder-gray-300 focus:outline-none focus:border-brand transition-colors duration-200 bg-white resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="font-sans text-sm text-red-500">
                        Something went wrong. Please try WhatsApp at 0327 3273667.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full py-4 bg-brand text-white font-sans font-medium text-sm tracking-wide hover:bg-brand/90 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? 'Sending…' : 'Send Message'}
                    </button>

                    <p className="font-sans text-xs text-muted/50 text-center">
                      Prefer WhatsApp?{' '}
                      <a
                        href="https://wa.me/923273273667"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand hover:underline"
                      >
                        Chat directly →
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── GOOGLE MAP ── */}
      <section className="pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="w-full overflow-hidden border border-gray-100" style={{ height: '420px' }}>
              <iframe
                title="Adorners Office — Bahria Town Karachi"
                src="https://maps.google.com/maps?q=Midway+Commercial,+Bahria+Town,+Karachi&output=embed&z=15"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="font-sans text-xs text-muted/60 mt-3 text-center">
              Hallmark Tower 2, Plot No. 96, Suit No 301, Midway Commercial-B, Bahria Town Karachi
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
