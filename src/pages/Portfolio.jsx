import { useState } from 'react'
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
      '/saloon/08298a6b-e9ed-4343-bfb0-e03913cace35.jpeg',
      '/saloon/6b04b915-3140-463f-867f-0bc60df55935.jpeg',
      '/saloon/30bc01c5-c86e-41a9-982a-90c8e026bc0e.jpeg',
      '/saloon/342e8aa1-fe9d-4a38-809d-29efb69f6d06.jpeg',
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
      '/sm garments/623259867_1391300766124145_3753457068510481627_n.jpg',
      '/sm garments/623900253_1391300266124195_6523579509969916865_n.jpg',
      '/sm garments/624583077_1391300686124153_4097672179650292389_n.jpg',
      '/sm garments/625000757_1391299836124238_2691684960122771318_n.jpg',
    ],
  },
]

const FILTERS = ['All', 'Bungalow', 'Bedroom', 'Interior', 'Office', 'Commercial']

function ProjectCard({ project }) {
  const [ref, inView] = useInView()
  const [activeImg, setActiveImg] = useState(0)

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
        <img
          src={project.images[activeImg]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
          <div>
            <span className="block font-sans text-xs text-brand uppercase tracking-widest mb-1">{project.category}</span>
            <span className="block font-display text-xl text-white">{project.title}</span>
          </div>
        </div>
      </div>

      {project.images.length > 1 && (
        <div className="flex gap-2 mt-2">
          {project.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`flex-1 h-1 transition-colors duration-200 ${i === activeImg ? 'bg-brand' : 'bg-gray-200 hover:bg-gray-300'}`}
            />
          ))}
        </div>
      )}

      <div className="mt-3">
        <span className="font-sans text-xs text-brand uppercase tracking-widest">{project.category}</span>
        <h3 className="font-display text-lg text-dark mt-0.5">{project.title}</h3>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [heroRef, heroInView] = useInView()

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter)

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section
        ref={heroRef}
        className="py-16 md:py-24 px-6 bg-stone-50"
      >
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
        <div className="max-w-7xl mx-auto flex gap-1 overflow-x-auto py-3 scrollbar-hide">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`flex-shrink-0 px-5 py-2 font-sans text-sm transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-brand text-white'
                  : 'text-dark/60 hover:text-brand hover:bg-brand/5'
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
              <ProjectCard key={project.id} project={project} />
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
