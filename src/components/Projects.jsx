import './Projects.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Goodnews Portfolio',
    description: 'A personal portfolio website showcasing my skills, projects, and journey as a web developer. Built with HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/Image/Website.jpg',
    live: 'https://goodnews-code.github.io/Goodnews-portfolio',
    github: 'https://github.com/Goodnews-code',
    featured: true,
  },
  {
    title: 'Legacy Project',
    description: 'An elegantly crafted web experience focusing on legacy content presentation and storytelling through modern design principles.',
    tags: ['HTML', 'CSS', 'Web Design'],
    image: '/Image/website2.jpg',
    live: 'https://goodnews-code.github.io/Legacy',
    github: 'https://github.com/Goodnews-code',
    featured: false,
  },
  {
    title: 'Amanahub',
    description: 'A modern hub platform built to connect communities, featuring clean UI design and intuitive navigation for an exceptional user experience.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/Image/website3.jpg',
    live: 'https://goodnews-code.github.io/amanahub',
    github: 'https://github.com/Goodnews-code',
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
            A selection of projects I've built. Click any to see it live.
          </p>
        </div>

        <div ref={gridRef} className="projects__grid reveal-stagger">
          {projects.map((project) => (
            <article key={project.title} className={`project-card glass-card ${project.featured ? 'project-card--featured' : ''}`}>
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
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-card__live-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                    Live Preview
                  </a>
                </div>
                {project.featured && <div className="project-card__badge">⭐ Featured</div>}
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-card__tag">{tag}</span>
                  ))}
                </div>
                <div className="project-card__links">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary project-card__link-btn">
                    View Live
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline project-card__link-btn">
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
