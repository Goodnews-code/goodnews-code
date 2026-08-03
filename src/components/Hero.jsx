import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background orbs */}
      <div className="orb orb-cyan hero__orb-1" />
      <div className="orb orb-purple hero__orb-2" />
      <div className="orb orb-pink hero__orb-3" />

      <div className="container hero__inner">
        {/* Left: Text */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for Freelance Work
          </div>

          <h1 className="hero__title">
            Hi, I'm <span className="gradient-text">Goodnews</span><br />
            <span className="hero__title-sub">Web Developer</span>
          </h1>

          <p className="hero__description">
            I build production web apps — printable merch storefronts, advertisable product
            experiences, logistics platforms, and polished redesigns. Full-stack developer based
            in Osun State, Nigeria.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn-primary">
              View My Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn-outline">
              Let's Talk
            </a>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">8+</span>
              <span className="hero__stat-label">Projects Shipped</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">12+</span>
              <span className="hero__stat-label">Technologies</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">100%</span>
              <span className="hero__stat-label">Passion</span>
            </div>
          </div>
        </div>

        {/* Right: Avatar Card */}
        <div className="hero__visual">
          <div className="hero__avatar-card glass-card">
            <div className="hero__avatar-ring">
              <img
                src="/Image/Goodnews.jpeg"
                alt="Jesutofunmi Egbewale - Web Developer"
                className="hero__avatar-img"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <div className="hero__avatar-fallback">
                <span>JE</span>
              </div>
            </div>

            <div className="hero__avatar-info">
              <h3>Jesutofunmi Egbewale</h3>
              <p>Full-Stack Web Developer</p>
            </div>

            {/* Floating tech badges */}
            <div className="hero__floating-badge hero__floating-badge--1">Next.js ▲</div>
            <div className="hero__floating-badge hero__floating-badge--2">TypeScript</div>
            <div className="hero__floating-badge hero__floating-badge--3">Supabase</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#skills" className="hero__scroll-hint">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll down</span>
      </a>
    </section>
  )
}
