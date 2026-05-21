import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container footer__inner">
        {/* Logo + tagline */}
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <span className="logo__go">Go</span>
            <span className="logo__accent">odne</span>
            <span className="logo__ws">ws</span>
          </a>
          <p className="footer__tagline">
            Building beautiful digital experiences, one line of code at a time.
          </p>
        </div>

        {/* Quick links */}
        <nav className="footer__nav">
          <h4 className="footer__nav-title">Quick Links</h4>
          <ul className="footer__nav-list">
            {['Home', 'Skills', 'About', 'Projects', 'Interest', 'Contact'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="footer__nav-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social links */}
        <div className="footer__social">
          <h4 className="footer__nav-title">Connect</h4>
          <div className="footer__social-links">
            <a href="https://github.com/Goodnews-code" target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a href="https://twitter.com/Goodnews_tofs" target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="mailto:goodnewscode@gmail.com" className="footer__social-btn" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
          <p className="footer__available">
            <span className="footer__available-dot" />
            Open to opportunities
          </p>
        </div>
      </div>

      {/* Divider + copyright */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            &copy; {year} <span className="gradient-text">Goodnews</span>. All rights reserved.
          </p>
          <p className="footer__made-with">
            Made with ❤️ in Nigeria
          </p>
        </div>
      </div>
    </footer>
  )
}
