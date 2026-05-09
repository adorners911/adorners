import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

const PROJECTS = [
  {
    id: 1,
    category: 'Bungalow',
    title: 'Modern Bungalow',
    images: [
      '/banglow/bc17ae0f-7cfb-40f0-b4f2-8ec12a8256eb.jpeg',
      '/banglow/05e19157-b18e-4568-8ab3-ddfd78ca8c2d.jpeg',
      '/banglow/feef6995-8df2-4b65-96bb-9898be76de6f.jpeg',
      '/banglow/33ae5271-e507-46a3-b571-169e963ceef9.jpeg',
      '/banglow/7a1c2298-d39d-43a8-910a-85f63b7dc54e.jpeg',
    ],
  },
  {
    id: 2,
    category: 'Bedroom',
    title: 'Luxury Bedroom Suite',
    images: [
      '/bedroom/39798130-9b9a-45cd-8a8c-5220af576d38.jpeg',
      '/bedroom/1a400eed-4e0d-4320-addd-f3619d22b5c2.jpeg',
      '/bedroom/6712d20b-d678-4d70-9e12-32f7e6dba6fc.jpeg',
      '/bedroom/6bc2e3b6-6af9-4b93-9324-c4de7c680054.jpeg',
      '/bedroom/e5a21ac8-dc5e-4994-b9e4-81a15e8e054e.jpeg',
    ],
  },
  {
    id: 3,
    category: 'Interior',
    title: 'Modern Kitchen & Interior',
    images: [
      '/interior/1f79eee1-4f70-493d-9d1e-0a211469f981.jpeg',
      '/interior/2a70e09a-2c97-41ee-8ec0-b4ad56bbba41.jpeg',
      '/interior/44faa8b3-ee6e-47e9-a19f-b2c4b4611944.jpeg',
      '/interior/4e8ffa4d-7ee8-4ecc-9901-55635502343a.jpeg',
    ],
  },
  {
    id: 4,
    category: 'Commercial',
    title: 'Beauty Saloon',
    images: [
      '/saloon/30bc01c5-c86e-41a9-982a-90c8e026bc0e.jpeg',
      '/saloon/57ecf808-7110-43c5-a9db-78eea4ce6eec.jpeg',
      '/saloon/376b084d-5782-4bf3-a7df-060671c97d94.jpeg',
      '/saloon/82390fb0-d629-4b75-83a8-956a74547f69.jpeg',
      '/saloon/08298a6b-e9ed-4343-bfb0-e03913cace35.jpeg',
      '/saloon/6b04b915-3140-463f-867f-0bc60df55935.jpeg',
      '/saloon/342e8aa1-fe9d-4a38-809d-29efb69f6d06.jpeg',
      '/saloon/38e7a213-27b3-4d36-bafa-d3a16db3ee80.jpeg',
    ],
  },
  {
    id: 5,
    category: 'Office',
    title: 'Traditional Executive Office',
    images: [
      '/tradational office/14998486-66d4-4724-8515-a587c917d30e.jpeg',
      '/tradational office/4bea625a-1021-4519-8b11-ea6f4ac919c0.jpeg',
      '/tradational office/84d84e8b-90db-400b-a7b6-402b1401b05f.jpeg',
      '/tradational office/8c6bb37a-2a20-49fd-84e1-07eb9572f85c.jpeg',
    ],
  },
  {
    id: 6,
    category: 'Commercial',
    title: 'Travel Agency',
    images: [
      '/travel agency/298ed607-c7ab-4bed-b8f9-0646a798e4a9.jpeg',
      '/travel agency/59917b89-1d2a-4971-abea-ba38e5e9a4cb.jpeg',
      '/travel agency/9d6429a9-5d4e-4fb8-94a4-f9702ef4ba1a.jpeg',
      '/travel agency/b0aad390-c38f-4188-bbb9-605083ff6184.jpeg',
      '/travel agency/e1545baa-78ab-4c8d-802b-7747c8a321d6.jpeg',
    ],
  },
  {
    id: 7,
    category: 'Commercial',
    title: 'SM Garments Showroom',
    images: [
      '/sm garments/4bf28366-fab7-4706-8e7e-f05d0cab3a13.jpeg',
      '/sm garments/20ee703a-7858-400e-9f8e-84861151d90d.jpeg',
      '/sm garments/02d44263-c554-4aa8-bd18-b399a80c0490.jpeg',
      '/sm garments/5986ec96-7bdf-49f5-8b50-845c1fad1d91.jpeg',
      '/sm garments/09659062-e8d2-4e3b-8c77-f4817f3d60bc.jpeg',
    ],
  },
]

const FILTERS = ['All', 'Bungalow', 'Bedroom', 'Interior', 'Office', 'Commercial']

function Lightbox({ project, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setCurrent(c => (c + 1) % project.images.length)
      if (e.key === 'ArrowLeft') setCurrent(c => (c - 1 + project.images.length) % project.images.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project.images.length, onClose])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-5 text-white/70 hover:text-white text-3xl font-light"
      >
        ×
      </button>

      <div
        className="relative w-full max-w-4xl"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={project.images[current]}
          alt={project.title}
          className="w-full max-h-[75vh] object-contain"
        />

        {project.images.length > 1 && (
          <>
            <button
              onClick={() => setCurrent(c => (c - 1 + project.images.length) % project.images.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white/70 hover:text-white text-4xl px-3"
            >
              ‹
            </button>
            <button
              onClick={() => setCurrent(c => (c + 1) % project.images.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white/70 hover:text-white text-4xl px-3"
            >
              ›
            </button>
          </>
        )}
      </div>

      <div className="flex gap-2 mt-4">
        {project.images.map((img, i) => (
          <button
            key={i}
            onClick={e => { e.stopPropagation(); setCurrent(i) }}
            className={`w-14 h-10 overflow-hidden border-2 transition-all ${i === current ? 'border-brand' : 'border-transparent opacity-50 hover:opacity-75'}`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      <p className="font-sans text-white/50 text-sm mt-3">
        {current + 1} / {project.images.length} — {project.title}
      </p>
    </div>
  )
}

function ProjectCard({ project, onOpen }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`group cursor-pointer transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      onClick={() => onOpen(project, 0)}
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
          <div>
            <span className="block font-sans text-xs text-brand uppercase tracking-widest mb-1">{project.category}</span>
            <span className="block font-display text-xl text-white">{project.title}</span>
            <span className="block font-sans text-xs text-white/70 mt-1">{project.images.length} photos — click to view</span>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div>
          <span className="font-sans text-xs text-brand uppercase tracking-widest">{project.category}</span>
          <h3 className="font-display text-lg text-dark mt-0.5">{project.title}</h3>
        </div>
        <span className="font-sans text-xs text-muted">{project.images.length} photos</span>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const [heroRef, heroInView] = useInView()

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter)

  return (
    <div className="pt-20 md:pt-24">
      {lightbox && (
        <Lightbox
          project={lightbox.project}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}

      {/* Hero */}
      <section ref={heroRef} className="py-16 md:py-24 px-6 bg-stone-50">
        <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="font-sans text-xs text-brand uppercase tracking-[0.2em]">Our Work</span>
          <h1 className="font-display text-4xl md:text-6xl text-dark font-light mt-3 mb-5">
            Spaces We've Crafted
          </h1>
          <p className="font-sans text-base text-muted max-w-xl mx-auto leading-relaxed">
            From concept to completion — every project reflects our commitment to precision, beauty, and function.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 md:top-20 z-30 bg-white border-b border-gray-100 px-6">
        <div className="max-w-7xl mx-auto flex gap-1 overflow-x-auto py-3">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`flex-shrink-0 px-5 py-2 font-sans text-sm transition-all duration-200 ${
                activeFilter === f ? 'bg-brand text-white' : 'text-dark/60 hover:text-brand hover:bg-brand/5'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={(p, i) => setLightbox({ project: p, index: i })}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-dark text-center">
        <span className="font-sans text-xs text-brand uppercase tracking-[0.2em]">Start Your Project</span>
        <h2 className="font-display text-3xl md:text-5xl text-white font-light mt-3 mb-6">
          Let's Build Something Beautiful
        </h2>
        <Link
          to="/contact"
          className="inline-block px-8 py-4 bg-brand text-white font-sans text-sm tracking-wide hover:bg-brand/90 transition-colors duration-200"
        >
          Get a Free Consultation
        </Link>
      </section>
    </div>
  )
}
