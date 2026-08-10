import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Reveal, Label } from '../components/Reveal'

const PROJECTS = [
  {
    id: 1,
    portfolioId: 1,
    image: '/banglow/bc17ae0f-7cfb-40f0-b4f2-8ec12a8256eb.jpeg',
    category: 'Architecture',
    title: 'Modern Bungalow',
    location: 'Karachi',
    alt: 'Modern bungalow architecture and interior design in Karachi by Adorners',
  },
  {
    id: 2,
    portfolioId: 5,
    image: '/tradational office/14998486-66d4-4724-8515-a587c917d30e.jpeg',
    category: 'Office Design',
    title: 'Traditional Executive Office',
    location: 'Karachi',
    alt: 'Traditional executive office interior design in Karachi by Adorners',
  },
  {
    id: 3,
    portfolioId: 6,
    image: '/travel agency/59917b89-1d2a-4971-abea-ba38e5e9a4cb.jpeg',
    category: 'Commercial',
    title: 'Travel Agency',
    location: 'Karachi',
    alt: 'Travel agency commercial interior design in Karachi by Adorners',
  },
  {
    id: 4,
    portfolioId: 2,
    image: '/bedroom/e5a21ac8-dc5e-4994-b9e4-81a15e8e054e.jpeg',
    category: 'Interior Design',
    title: 'Luxury Bedroom',
    location: 'Karachi',
    alt: 'Luxury bedroom interior design in Karachi by Adorners',
  },
]

const SERVICES = [
  {
    title: 'Architecture',
    description:
      'Residential and commercial design, structural drawings, 3D renders, and regulatory approvals — crafted to your vision and Karachi\'s building codes.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
        <path d="M4 44h40M8 44V22L24 8l16 14v22M18 44V32h12v12" />
        <rect x="20" y="16" width="8" height="8" />
      </svg>
    ),
  },
  {
    title: 'Interior Design',
    // Links to the dedicated Karachi interior design page instead of straight to contact.
    href: '/interior-design-karachi',
    cta: 'Learn More',
    description:
      'Professional interior design in Karachi — space planning, material selection, 3D visualization, and full styling. Every room designed with intention, from concept board to final reveal.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
        <rect x="4" y="4" width="40" height="32" rx="2" />
        <path d="M4 20h40M14 4v32M4 36v8h40v-8" />
        <circle cx="9" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Civil Work',
    description:
      'Full construction, site supervision, finishing, and key handover across Karachi — no second contractor required. We build what we design.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
        <path d="M8 44V16h32v28M4 16l20-12 20 12" />
        <rect x="18" y="28" width="12" height="16" />
        <path d="M14 24h4M30 24h4M14 32h4M30 32h4" />
      </svg>
    ),
  },
]

const STATS = [
  { value: '200+', label: 'Projects Completed' },
  { value: '20+', label: 'Years of Experience' },
  { value: '1', label: 'Team. Everything.' },
]

const FAQS = [
  {
    q: 'What interior design services does Adorners offer in Karachi?',
    a: 'We cover residential interiors (bedrooms, living areas, full homes), office and workspace interiors, and commercial or retail interiors. Every project includes space planning, material and finish selection, 3D visualization, and complete styling.',
  },
  {
    q: 'Do you handle both design and construction?',
    a: 'Yes. Architecture, interior design, and civil work are all done in-house, so we build exactly what we design. You get a single point of contact from the first drawing to key handover — no second contractor to coordinate with.',
  },
  {
    q: 'How much does interior design cost in Karachi?',
    a: 'There is no fixed rate — cost depends on the area, the scope of work, and the level of materials and finishes you choose. Once we understand your requirement and see the space, we share an itemised quote so you know exactly what you are paying for.',
  },
  {
    q: 'Do you provide 3D visualization before work starts?',
    a: 'Yes. 3D renders and visualization are part of both our architecture and interior design service, so you can see and approve the space before any construction begins.',
  },
  {
    q: 'Do you design residential and commercial spaces?',
    a: 'Both. Our completed work in Karachi includes modern bungalows, luxury bedroom suites, executive offices, a beauty salon, a travel agency, and a retail garments showroom.',
  },
  {
    q: 'Is the first consultation free?',
    a: 'Yes, the initial consultation is free. Call or WhatsApp us at 0327 3273667, or send your project details through the contact form and we will get back to you.',
  },
  {
    q: 'Where is Adorners located?',
    a: 'Our office is at Hallmark Tower 2, Plot No. 96, Suit No 301, Midway Commercial-B, Bahria Town, Karachi.',
  },
]

// FAQPage schema — lets Google show these questions directly in search results.
const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}


export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Interior Design Experts in Karachi | Adorners Architects</title>
        <meta name="description" content="Looking for the best interior design experts in Karachi? Adorners offers professional interior design, architecture, and civil construction from concept to key handover. Get a free consultation." />
        <meta name="keywords" content="best interior design experts in Karachi, professional interior design in Karachi, interior designers in Karachi, top interior design company in Karachi, interior design Bahria Town Karachi, home interior design Karachi, office interior design Karachi, architects in Karachi, civil construction Karachi, design and build firm Karachi" />
        <link rel="canonical" href="https://adorners.pk/" />
        <meta property="og:title" content="Interior Design Experts in Karachi | Adorners Architects" />
        <meta property="og:description" content="Professional interior design in Karachi. Architecture, interior design, and civil construction under one roof — from concept to key handover." />
        <meta property="og:url" content="https://adorners.pk/" />
        <meta name="twitter:title" content="Interior Design Experts in Karachi | Adorners Architects" />
        <meta name="twitter:description" content="Professional interior design in Karachi. Architecture, interior design, and civil construction under one roof — from concept to key handover." />
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="min-h-screen md:h-screen flex flex-col md:flex-row">
        {/* Text panel */}
        <div className="w-full md:w-[42%] flex flex-col justify-center px-8 md:px-14 lg:px-20 pt-28 pb-12 md:pt-0 md:pb-0 bg-white">
          <p className="animate-hero-label font-sans text-xs tracking-[0.22em] uppercase text-brand">
            Bahria Town, Karachi
          </p>

          <h1 className="animate-hero-title font-display font-light text-5xl md:text-6xl lg:text-7xl text-dark leading-[1.05] mt-5">
            Architecture.
            <br />
            <em className="not-italic" style={{ color: '#C8185A' }}>Interior.</em>
            <br />
            Civil.
          </h1>

          <p className="animate-hero-sub font-sans text-base text-muted leading-relaxed mt-6 max-w-xs">
            Interior design, architecture, and civil work in Karachi — one firm from concept to final handover. No coordination headaches, one clear vision.
          </p>

          <div className="animate-hero-cta flex flex-col sm:flex-row gap-3 mt-9">
            <Link
              to="/contact"
              className="inline-block px-7 py-3.5 bg-brand text-white font-sans text-sm font-medium tracking-wide hover:bg-brand/90 transition-colors duration-200 text-center"
            >
              Get a Free Consultation
            </Link>
            <a
              href="#work"
              className="inline-block px-7 py-3.5 border border-dark/20 text-dark font-sans text-sm font-medium tracking-wide hover:border-brand hover:text-brand transition-colors duration-200 text-center"
            >
              See Our Work
            </a>
          </div>

          {/* Tagline strip */}
          <div className="mt-12 pt-8 border-t border-gray-100 hidden md:flex items-center gap-6">
            <p className="font-sans text-xs text-muted/60 tracking-widest uppercase">Architects · Interior · Civil</p>
          </div>
        </div>

        {/* Image panel */}
        <div className="w-full md:w-[58%] h-[50vh] md:h-full relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Modern residential architecture and interior design project in Karachi by Adorners"
            className="w-full h-full object-cover hero-image-reveal visible"
            loading="eager"
          />
          {/* Subtle vertical label */}
          <div className="absolute bottom-10 left-0 hidden md:flex items-center">
            <div
              className="font-sans text-xs tracking-[0.3em] uppercase text-white/70 bg-dark/40 backdrop-blur-sm px-3 py-2"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.3em' }}
            >
              Adorners
            </div>
          </div>
          {/* Scroll hint on mobile */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center md:hidden">
            <div className="w-px h-10 bg-gradient-to-b from-white/0 to-white/60" />
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section id="work" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <Label>Selected Work</Label>
              <h2 className="font-display font-light text-4xl md:text-5xl text-dark leading-tight">
                Recent Projects in Karachi
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="font-sans text-sm text-brand border-b border-brand pb-0.5 hover:text-brand/70 hover:border-brand/70 transition-colors whitespace-nowrap self-start md:self-auto"
            >
              View All Work →
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.07}>
                <div
                  role="button"
                  tabIndex={0}
                  className="group relative overflow-hidden bg-gray-50 aspect-[4/3] cursor-pointer"
                  onClick={() => navigate('/portfolio', { state: { openId: p.portfolioId } })}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate('/portfolio', { state: { openId: p.portfolioId } }) } }}
                  aria-label={`View ${p.title} project`}
                >
                  <img
                    src={p.image}
                    alt={p.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="font-sans text-xs tracking-[0.18em] uppercase text-brand mb-1">{p.category}</p>
                    <p className="font-display font-light text-xl text-white">{p.title}</p>
                    <p className="font-sans text-xs text-white/60 mt-1">{p.location}</p>
                  </div>
                  {/* Static label for mobile */}
                  <div className="absolute top-4 left-4 md:hidden">
                    <span className="font-sans text-xs tracking-[0.15em] uppercase text-white bg-dark/50 backdrop-blur-sm px-2 py-1">
                      {p.category}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATOR ── */}
      <section className="py-20 lg:py-28 bg-brand-light border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <Label>Why Adorners</Label>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-dark leading-[1.1] mt-4">
              One firm. One vision.
              <br />
              <em className="font-light" style={{ color: '#C8185A' }}>No coordination headaches.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-sans text-base text-muted leading-relaxed mt-6 max-w-xl mx-auto">
              Most firms in Karachi hand you off between architects, interior designers, and contractors — with your project caught in the middle. Adorners handles all three disciplines in-house, keeping quality consistent from the first sketch to the final coat of paint.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14 text-left">
              {[
                {
                  title: 'Design & Build',
                  desc: 'We design it, we build it. No miscommunication between teams.',
                },
                {
                  title: 'Single Point of Contact',
                  desc: 'One number, one team — from blueprint to handover.',
                },
                {
                  title: 'Bahria Town Based',
                  desc: 'Deep roots in the community. We know the codes, the vendors, the terrain.',
                },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <div className="w-8 h-px bg-brand" />
                  <h3 className="font-display font-medium text-xl text-dark">{item.title}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <Label>What We Do</Label>
            <h2 className="font-display font-light text-4xl md:text-5xl text-dark leading-tight mt-1">
              Our Services
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="group flex flex-col p-8 border border-gray-100 hover:border-brand-border hover:bg-brand-light transition-all duration-300">
                  <div className="text-brand mb-6">{s.icon}</div>
                  <h3 className="font-display font-medium text-2xl text-dark mb-3">{s.title}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed flex-1">{s.description}</p>
                  <Link
                    to={s.href ?? '/contact'}
                    className="mt-6 font-sans text-xs tracking-[0.15em] uppercase text-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {s.cta ?? 'Enquire'} →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 lg:py-24 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center py-8 sm:py-0 sm:px-12">
                  <span className="font-display font-light text-6xl md:text-7xl text-brand">{s.value}</span>
                  <span className="font-sans text-sm text-white/50 tracking-wide mt-2">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Reveal>
            <Label>Questions</Label>
            <h2 className="font-display font-light text-4xl md:text-5xl text-dark leading-tight mt-1">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <div className="mt-12 divide-y divide-gray-100 border-y border-gray-100">
            {FAQS.map(({ q, a }, i) => (
              <Reveal key={q} delay={i * 0.05}>
                <details className="group py-5">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <h3 className="font-display font-medium text-lg md:text-xl text-dark group-hover:text-brand transition-colors">
                      {q}
                    </h3>
                    <span className="flex-shrink-0 mt-1 text-brand text-xl leading-none transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="font-sans text-sm text-muted leading-relaxed mt-3 pr-10">
                    {a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <p className="font-sans text-xs tracking-[0.22em] uppercase text-brand mb-4">Ready to Start?</p>
            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-dark leading-[1.1]">
              Let's build your vision<br />together.
            </h2>
            <p className="font-sans text-base text-muted mt-5 max-w-md mx-auto leading-relaxed">
              Reach out for a free consultation — we'll understand your project and tell you exactly how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-9">
              <a
                href="https://wa.me/923273273667?text=Hi+Adorners!+I'd+like+a+free+consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand text-white font-sans font-medium text-sm hover:bg-brand/90 transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Chat on WhatsApp
              </a>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 border border-dark/20 text-dark font-sans font-medium text-sm hover:border-brand hover:text-brand transition-colors duration-200"
              >
                Send a Message
              </Link>
            </div>
            <p className="font-sans text-xs text-muted/60 mt-5">
              Office: Hallmark Tower 2, Midway Commercial-B, Bahria Town Karachi
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
