import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Reveal, Label } from '../components/Reveal'

const SERVICES = [
  {
    title: 'Residential Interior Design',
    description:
      'Bedrooms, living and dining areas, kitchens, and full-home interiors. We plan the layout, select every material and finish, and style the space down to the last detail.',
    points: ['Full-home and room-by-room design', 'Custom furniture and joinery', 'Lighting and finish selection'],
  },
  {
    title: 'Office & Workspace Interiors',
    description:
      'Executive offices, workstations, meeting rooms, and reception areas designed around how your team actually works — and how you want clients to see you.',
    points: ['Executive and staff workspaces', 'Reception and meeting rooms', 'Storage and cable planning'],
  },
  {
    title: 'Commercial & Retail Interiors',
    description:
      'Showrooms, salons, agencies, and customer-facing spaces built to hold attention. Layouts that guide footfall and finishes that survive daily use.',
    points: ['Showrooms and retail floors', 'Salons and service spaces', 'Branding built into the space'],
  },
]

const INCLUDED = [
  'Site visit and measurement',
  'Space planning and layout drawings',
  '3D visualization before work starts',
  'Material, finish, and colour selection',
  'Custom furniture and joinery design',
  'Lighting and electrical planning',
  'Execution with our own civil team',
  'Site supervision through to handover',
]

const PROCESS = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We visit the space, take measurements, and understand how you want to use it — and what budget you are working with.',
  },
  {
    step: '02',
    title: 'Design & 3D',
    description: 'Layouts, material boards, and 3D renders so you can see and approve the finished space before anything is built.',
  },
  {
    step: '03',
    title: 'Execution',
    description: 'Our own civil and finishing team builds it. One team, one standard — no handing you off to an outside contractor.',
  },
  {
    step: '04',
    title: 'Handover',
    description: 'Final styling, snag list, and a clean handover. You get the keys to a space that matches the render.',
  },
]

const WORK = [
  {
    image: '/bedroom/e5a21ac8-dc5e-4994-b9e4-81a15e8e054e.jpeg',
    title: 'Luxury Bedroom Suite',
    alt: 'Luxury bedroom interior design in Karachi by Adorners',
  },
  {
    image: '/tradational office/14998486-66d4-4724-8515-a587c917d30e.jpeg',
    title: 'Executive Office',
    alt: 'Traditional executive office interior design in Karachi by Adorners',
  },
  {
    image: '/saloon/30bc01c5-c86e-41a9-982a-90c8e026bc0e.jpeg',
    title: 'Beauty Salon',
    alt: 'Beauty salon commercial interior design in Karachi by Adorners',
  },
  {
    image: '/sm garments/4bf28366-fab7-4706-8e7e-f05d0cab3a13.jpeg',
    title: 'Retail Showroom',
    alt: 'Retail garments showroom interior design in Karachi by Adorners',
  },
]

// Service schema — tells Google exactly what service is offered and where.
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Interior Design',
  name: 'Interior Design in Karachi',
  description:
    'Professional interior design in Karachi by Adorners — residential, office, and commercial interiors, from space planning and 3D visualization through to execution and handover.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Adorners',
    telephone: '+923273273667',
    email: 'hello@adorners.pk',
    url: 'https://adorners.pk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hallmark Tower 2, Plot No. 96, Suit No 301, Midway Commercial-B',
      addressLocality: 'Bahria Town',
      addressRegion: 'Karachi',
      addressCountry: 'PK',
    },
  },
  areaServed: { '@type': 'City', name: 'Karachi' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Interior Design Services in Karachi',
    itemListElement: SERVICES.map(({ title, description }) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: title, description },
    })),
  },
}

export default function InteriorDesignKarachi() {
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Interior Design in Karachi | Professional Interior Designers — Adorners</title>
        <meta name="description" content="Professional interior design in Karachi. Adorners designs and builds residential, office, and commercial interiors — space planning, 3D visualization, and execution by one in-house team. Free consultation." />
        <meta name="keywords" content="interior design in Karachi, professional interior design in Karachi, best interior design experts in Karachi, interior designers in Karachi, top interior design company in Karachi, home interior design Karachi, office interior design Karachi, commercial interior design Karachi, interior design Bahria Town Karachi, residential interior designer Karachi" />
        <link rel="canonical" href="https://adorners.pk/interior-design-karachi" />
        <meta property="og:title" content="Interior Design in Karachi | Adorners" />
        <meta property="og:description" content="Professional interior design in Karachi — residential, office, and commercial interiors designed and built by one in-house team." />
        <meta property="og:url" content="https://adorners.pk/interior-design-karachi" />
        <meta name="twitter:title" content="Interior Design in Karachi | Adorners" />
        <meta name="twitter:description" content="Professional interior design in Karachi — residential, office, and commercial interiors designed and built by one in-house team." />
        <script type="application/ld+json">{JSON.stringify(SERVICE_SCHEMA)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="animate-hero-label font-sans text-xs tracking-[0.22em] uppercase text-brand">
            Bahria Town, Karachi
          </p>
          <h1 className="animate-hero-title font-display font-light text-5xl md:text-6xl lg:text-7xl text-dark leading-[1.05] mt-4 max-w-3xl">
            Interior Design
            <br />
            in <em className="not-italic" style={{ color: '#C8185A' }}>Karachi.</em>
          </h1>
          <p className="animate-hero-sub font-sans text-base text-muted mt-6 max-w-xl leading-relaxed">
            Adorners is a professional interior design and design-build firm in Karachi. We plan the space,
            render it in 3D, and then build it with our own civil team — so what you approve is what you get.
          </p>

          <div className="animate-hero-cta flex flex-col sm:flex-row gap-3 mt-9">
            <Link
              to="/contact"
              className="inline-block px-7 py-3.5 bg-brand text-white font-sans text-sm font-medium tracking-wide hover:bg-brand/90 transition-colors duration-200 text-center"
            >
              Get a Free Consultation
            </Link>
            <Link
              to="/portfolio"
              className="inline-block px-7 py-3.5 border border-dark/20 text-dark font-sans text-sm font-medium tracking-wide hover:border-brand hover:text-brand transition-colors duration-200 text-center"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <Label>What We Design</Label>
            <h2 className="font-display font-light text-4xl md:text-5xl text-dark leading-tight mt-1">
              Interior Design Services
            </h2>
            <p className="font-sans text-base text-muted leading-relaxed mt-5 max-w-2xl">
              Whether it's a home, an office, or a customer-facing commercial space, the process is the same —
              understand the space, design it properly, and build it right.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="flex flex-col h-full p-8 border border-gray-100 hover:border-brand-border hover:bg-brand-light transition-all duration-300">
                  <div className="w-8 h-px bg-brand mb-6" />
                  <h3 className="font-display font-medium text-2xl text-dark mb-3">{s.title}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">{s.description}</p>
                  <ul className="mt-5 flex flex-col gap-2">
                    {s.points.map(point => (
                      <li key={point} className="font-sans text-sm text-muted flex items-start gap-2">
                        <span className="text-brand mt-px">·</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20 lg:py-28 bg-brand-light border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <Reveal>
              <Label>Scope of Work</Label>
              <h2 className="font-display font-light text-4xl md:text-5xl text-dark leading-tight mt-1">
                What's included
              </h2>
              <p className="font-sans text-base text-muted leading-relaxed mt-5 max-w-md">
                Most interior design firms in Karachi hand you a drawing and leave the building to someone else.
                We do both — which means no gap between the design you approved and the space you get.
              </p>
              <Link
                to="/contact"
                className="inline-block mt-8 font-sans text-sm text-brand border-b border-brand pb-0.5 hover:text-brand/70 hover:border-brand/70 transition-colors"
              >
                Discuss your project →
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {INCLUDED.map(item => (
                  <li key={item} className="font-sans text-sm text-dark/80 flex items-start gap-3 border-b border-brand-border pb-4">
                    <span className="text-brand">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <Label>How It Works</Label>
            <h2 className="font-display font-light text-4xl md:text-5xl text-dark leading-tight mt-1">
              Our Process
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div className="flex flex-col gap-3">
                  <span className="font-display font-light text-5xl text-brand/25">{p.step}</span>
                  <div className="w-8 h-px bg-brand" />
                  <h3 className="font-display font-medium text-xl text-dark">{p.title}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <Label>Selected Work</Label>
              <h2 className="font-display font-light text-4xl md:text-5xl text-dark leading-tight">
                Interiors We've Built in Karachi
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="font-sans text-sm text-brand border-b border-brand pb-0.5 hover:text-brand/70 hover:border-brand/70 transition-colors whitespace-nowrap self-start md:self-auto"
            >
              View Full Portfolio →
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WORK.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.07}>
                <Link to="/portfolio" className="group block">
                  <div className="relative overflow-hidden aspect-[4/5] bg-gray-50">
                    <img
                      src={w.image}
                      alt={w.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-lg text-dark mt-3 group-hover:text-brand transition-colors">
                    {w.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 bg-dark text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-xs tracking-[0.22em] uppercase text-brand mb-4">Ready to Start?</p>
          <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]">
            Let's design your space.
          </h2>
          <p className="font-sans text-base text-white/55 mt-5 max-w-md mx-auto leading-relaxed">
            Tell us about your project and we'll give you a clear scope, a realistic timeline, and an itemised quote.
            The first consultation is free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-9">
            <a
              href="https://wa.me/923273273667?text=Hi+Adorners!+I'd+like+to+discuss+an+interior+design+project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand text-white font-sans font-medium text-sm hover:bg-brand/90 transition-colors duration-200"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 border border-white/20 text-white font-sans font-medium text-sm hover:border-brand hover:text-brand transition-colors duration-200"
            >
              Send a Message
            </Link>
          </div>
          <p className="font-sans text-xs text-white/30 mt-6">
            Hallmark Tower 2, Midway Commercial-B, Bahria Town Karachi · 0327 3273667
          </p>
        </div>
      </section>
    </div>
  )
}
