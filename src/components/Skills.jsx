import './Skills.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const skills = [
  { name: 'HTML5', icon: '🌐', color: '#e34c26', level: 95 },
  { name: 'CSS3', icon: '🎨', color: '#264de4', level: 90 },
  { name: 'JavaScript', icon: '⚡', color: '#f7df1e', level: 80 },
  { name: 'React', icon: '⚛️', color: '#61dafb', level: 70 },
  { name: 'Python', icon: '🐍', color: '#3776ab', level: 75 },
  { name: 'Git & GitHub', icon: '🔧', color: '#f05032', level: 85 },
  { name: 'Web Design', icon: '✦', color: '#8b5cf6', level: 92 },
  { name: 'Responsive UI', icon: '📱', color: '#00d4ff', level: 88 },
]

export default function Skills() {
  const headerRef = useScrollReveal()
  const gridRef = useScrollReveal({ threshold: 0.08 })

  return (
    <section id="skills" className="skills">
      <div className="orb orb-purple skills__orb" />
      <div className="container">
        <div ref={headerRef} className="skills__header reveal">
          <div className="section-tag">✦ My Arsenal</div>
          <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
          <p className="section-subtitle">
            A curated set of tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div ref={gridRef} className="skills__grid reveal-stagger">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-card glass-card"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="skill-card__icon" style={{ '--skill-color': skill.color }}>
                {skill.icon}
              </div>
              <div className="skill-card__content">
                <div className="skill-card__top">
                  <span className="skill-card__name">{skill.name}</span>
                  <span className="skill-card__level">{skill.level}%</span>
                </div>
                <div className="skill-card__bar">
                  <div
                    className="skill-card__bar-fill"
                    style={{ '--width': `${skill.level}%`, '--color': skill.color }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
