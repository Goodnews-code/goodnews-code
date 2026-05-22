import './About.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const highlights = [
  { icon: '🎓', label: 'Education', value: 'OAU — Surveying & Geoinformatics' },
  { icon: '🚀', label: 'Program', value: 'Power Learn Project — Aug Cohort' },
  { icon: '📍', label: 'Location', value: 'Osun State, Nigeria' },
  { icon: '💼', label: 'Focus', value: 'Frontend & Backend Development' },
]

export default function About() {
  const imgRef = useScrollReveal()
  const contentRef = useScrollReveal()

  return (
    <section id="about" className="about">
      <div className="orb orb-cyan about__orb" />
      <div className="container about__inner">

        {/* Image side */}
        <div ref={imgRef} className="about__visual reveal-left">
          <div className="about__img-wrapper">
            <div className="about__img-glow" />
            <img
              src="/Image/Goodnews.jpeg"
              alt="Jesutofunmi Egbewale"
              className="about__img"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="about__img-fallback">JE</div>
          </div>

          {/* Experience badge */}
          <div className="about__exp-badge glass-card">
            <span className="about__exp-num gradient-text">2024</span>
            <span className="about__exp-text">Started Coding</span>
          </div>
        </div>

        {/* Text side */}
        <div ref={contentRef} className="about__content reveal-right">
          <div className="section-tag">✦ About Me</div>
          <h2 className="section-title">
            Passionate about building the <span className="gradient-text">digital future</span>
          </h2>

          <p className="about__bio">
            Hi, I'm <strong>Jesutofunmi Egbewale</strong> — a passionate Web Developer with a focus on
            crafting seamless frontend and backend experiences. I'm currently an undergraduate at 
            <strong> Obafemi Awolowo University (OAU)</strong>, studying Surveying and Geoinformatics,
            and a proud participant of the <strong>Power Learn Project</strong> August Cohort.
          </p>

          <p className="about__bio">
            I'm driven by the intersection of design and technology — building things that not only 
            work flawlessly, but look and feel incredible. I'm always eager to take on new challenges 
            and work with passionate people ready to bring their ideas to life.
          </p>

          {/* Highlights */}
          <div className="about__highlights">
            {highlights.map((h) => (
              <div key={h.label} className="about__highlight">
                <span className="about__highlight-icon">{h.icon}</span>
                <div>
                  <span className="about__highlight-label">{h.label}</span>
                  <span className="about__highlight-value">{h.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="about__actions">
            <a
              href="mailto:goodnewscode@gmail.com"
              className="btn-primary"
            >
              Download CV
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </a>
            <a href="https://github.com/Goodnews-code" target="_blank" rel="noopener noreferrer" className="btn-outline">
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
