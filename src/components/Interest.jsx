import './Interest.css'

const interests = [
  {
    icon: '🌐',
    title: 'Web Development',
    description:
      'Building compelling, accessible web experiences is my core passion. From sleek frontends to powerful APIs, I love the full spectrum.',
    color: '#00d4ff',
  },
  {
    icon: '🤖',
    title: 'Artificial Intelligence',
    description:
      'AI is reshaping our world — from smart recommendation systems to generative models. I am excited to explore and contribute to this space.',
    color: '#8b5cf6',
  },
  {
    icon: '🗺️',
    title: 'Geospatial Technologies',
    description:
      'As a Surveying & Geoinformatics student, I see enormous potential in combining GIS with web technologies to solve real-world problems.',
    color: '#22c55e',
  },
]

export default function Interest() {
  return (
    <section id="interest" className="interest">
      <div className="orb orb-purple interest__orb" />
      <div className="container">
        <div className="interest__header">
          <div className="section-tag">✦ What Drives Me</div>
          <h2 className="section-title">
            My <span className="gradient-text">Interests</span>
          </h2>
          <p className="section-subtitle">
            Fields that fascinate me and shape the way I see technology's role in the world.
          </p>
        </div>

        <div className="interest__grid">
          {interests.map((item) => (
            <div key={item.title} className="interest-card glass-card">
              <div
                className="interest-card__icon"
                style={{ '--int-color': item.color }}
              >
                {item.icon}
              </div>
              <h3 className="interest-card__title">{item.title}</h3>
              <p className="interest-card__desc">{item.description}</p>
              <div className="interest-card__line" style={{ background: item.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
