import './Skills.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const skills = [
  { name: 'Next.js', icon: '▲', color: '#ffffff', level: 88 },
  { name: 'React', icon: '⚛️', color: '#61dafb', level: 90 },
  { name: 'TypeScript', icon: 'TS', color: '#3178c6', level: 82 },
  { name: 'JavaScript', icon: '⚡', color: '#f7df1e', level: 88 },
  { name: 'Tailwind CSS', icon: '🌀', color: '#38bdf8', level: 85 },
  { name: 'Supabase', icon: '⬡', color: '#3ecf8e', level: 78 },
  { name: 'HTML & CSS', icon: '🎨', color: '#e34c26', level: 95 },
  { name: 'Git & GitHub', icon: '🔧', color: '#f05032', level: 88 },
  { name: 'Paystack', icon: '💳', color: '#0ba4db', level: 75 },
  { name: 'Python', icon: '🐍', color: '#3776ab', level: 75 },
  { name: 'UI Design', icon: '✦', color: '#8b5cf6', level: 90 },
  { name: 'Responsive UI', icon: '📱', color: '#00d4ff', level: 92 },
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
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            The stack behind Printiful, AURA, Safetafi, and the rest of the work —
            from polished storefronts to payment-ready backends.
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
                <span className="skill-card__name">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
