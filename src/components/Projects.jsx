import './Projects.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Printiful Brand',
    description:
      'Premium custom-wear and high-fidelity printing storefront with catalog store, admin dashboard, color/size variants, Paystack checkout, delivery tracking, Telegram alerts, and Resend receipts. Built for printable merch and brand campaigns.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Paystack', 'Tailwind'],
    image: '/Image/projects/printiful.jpg',
    live: 'https://shopprintiful.com',
    github: 'https://github.com/Goodnews-code/Printifulbrand',
    featured: true,
    badge: '✦ Favorite',
  },
  {
    title: 'AURA — Essential Objects',
    description:
      'Minimalist luxury e-commerce for curated essential objects. Real-time search and filters, persistent cart, JWT auth, order flow, and dark/light themes — designed as a quiet, advertisable product experience.',
    tags: ['Next.js', 'TypeScript', 'SQLite', 'Tailwind', 'JWT'],
    image: '/Image/projects/aura.jpg',
    live: 'https://e-commerce-self-chi-98.vercel.app',
    github: 'https://github.com/Goodnews-code/e-commerce',
    featured: false,
    badge: '✦ Favorite',
  },
  {
    title: 'Safetafi Logistics',
    description:
      'End-to-end transport and logistics platform for Nigeria — service booking, Paystack payments, admin transaction ledger, and webhook-backed payment verification.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Paystack'],
    image: '/Image/projects/safetafi.jpg',
    live: 'https://safetafi.netlify.app/',
    github: 'https://github.com/Goodnews-code/Safetafi',
    featured: false,
  },
  {
    title: 'Website Redesign',
    description:
      'Before/after modernization of legacy Christian ministry sites (Joyful Heart & JesusWalk) into mobile-first, accessible, high-performance experiences with content migration.',
    tags: ['HTML5', 'CSS3', 'Responsive', 'Accessibility'],
    image: '/Image/projects/redesign.jpg',
    live: 'https://joyheart.netlify.app/',
    github: 'https://github.com/Goodnews-code/website-redesign',
    featured: false,
  },
  {
    title: 'Project Portal',
    description:
      'Curated collection of UI implementations and internship work — including Chuks Kitchen (Trueminds), Amanahub, and HNG challenges — in one deployable showcase.',
    tags: ['HTML', 'CSS', 'UI/UX'],
    image: '/Image/website3.jpg',
    live: 'https://variety-projects.vercel.app/',
    github: 'https://github.com/Goodnews-code/Projects',
    featured: false,
  },
  {
    title: 'Goodnews Portfolio',
    description:
      'This site — a glassmorphism React portfolio with scroll-reveal motion, showcasing the full stack of products and experiments shipped so far.',
    tags: ['React', 'Vite', 'CSS'],
    image: '/Image/Website.jpg',
    live: 'https://goodnews-code.vercel.app/',
    github: 'https://github.com/Goodnews-code/goodnews-code',
    featured: false,
  },
]

export default function Projects() {
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal({ threshold: 0.06 })

  return (
    <section id="projects" className="projects">
      <div className="orb orb-pink projects__orb" />
      <div className="container">
        <div ref={headerRef} className="projects__header reveal">
          <div className="section-tag">✦ My Work</div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            From printable merch storefronts to advertisable product experiences —
            production apps with payments, admin tools, and polished UI.
          </p>
        </div>

        <div ref={gridRef} className="projects__grid reveal-stagger">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`project-card glass-card ${project.featured ? 'project-card--featured' : ''}`}
            >
              <div className="project-card__img-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__img"
                  onError={(e) => {
                    e.target.parentElement.classList.add('project-card__img-wrapper--fallback')
                    e.target.style.display = 'none'
                  }}
                />
                <div className="project-card__img-overlay">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__live-btn"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                    Live Preview
                  </a>
                </div>
                {(project.featured || project.badge) && (
                  <div className="project-card__badge">{project.badge || '⭐ Featured'}</div>
                )}
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-card__links">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary project-card__link-btn"
                  >
                    View Live
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline project-card__link-btn"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
