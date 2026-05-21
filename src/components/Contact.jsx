import { useState } from 'react'
import './Contact.css'

const contactLinks = [
  {
    name: 'GitHub',
    handle: '@Goodnews-code',
    href: 'https://github.com/Goodnews-code',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    color: '#fff',
    bg: 'rgba(255,255,255,0.08)',
  },
  {
    name: 'Email',
    handle: 'goodnewscode@gmail.com',
    href: 'mailto:goodnewscode@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    color: '#ea4335',
    bg: 'rgba(234,67,53,0.1)',
  },
  {
    name: 'Twitter / X',
    handle: '@Goodnews_tofs',
    href: 'https://twitter.com/Goodnews_tofs',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    color: '#1d9bf0',
    bg: 'rgba(29,155,240,0.1)',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('goodnewscode@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="contact">
      <div className="orb orb-cyan contact__orb-1" />
      <div className="orb orb-pink contact__orb-2" />
      <div className="container">
        {/* Header */}
        <div className="contact__header">
          <div className="section-tag">✦ Get In Touch</div>
          <h2 className="section-title">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, want to collaborate, or just want to say hi?
            I'd love to hear from you!
          </p>
        </div>

        <div className="contact__body">
          {/* Left: CTA card */}
          <div className="contact__cta glass-card">
            <div className="contact__cta-emoji">👋</div>
            <h3 className="contact__cta-title">Ready to build something amazing?</h3>
            <p className="contact__cta-text">
              I'm currently available for freelance work and collaborations.
              Whether it's a full website, a landing page, or a web app — let's make it happen.
            </p>

            <button className="contact__copy-btn" onClick={copyEmail}>
              {copied ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                  </svg>
                  Copy Email Address
                </>
              )}
            </button>
          </div>

          {/* Right: Links */}
          <div className="contact__links">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="contact-link glass-card"
              >
                <div
                  className="contact-link__icon"
                  style={{ color: link.color, background: link.bg }}
                >
                  {link.icon}
                </div>
                <div className="contact-link__info">
                  <span className="contact-link__name">{link.name}</span>
                  <span className="contact-link__handle">{link.handle}</span>
                </div>
                <svg className="contact-link__arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
