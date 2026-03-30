import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [location])

  const closeMenu = () => setMenuOpen(false)
  const isHome = location.pathname === '/'

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <img src="/images/remina-logo.png" alt="Remina Logo" className="logo-svg" />
      </Link>

      <button
        className={`nav-toggle${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span></span><span></span><span></span>
      </button>

      <div className={`nav-links${menuOpen ? ' open' : ''}`}>
        {isHome ? (
          <a href="#how" onClick={closeMenu}>How it works</a>
        ) : (
          <Link to="/#how" onClick={closeMenu}>How it works</Link>
        )}
        {isHome ? (
          <a href="#roles" onClick={closeMenu}>For your team</a>
        ) : (
          <Link to="/#roles" onClick={closeMenu}>For your team</Link>
        )}
        {isHome ? (
          <a href="#partner" onClick={closeMenu}>Design partner</a>
        ) : (
          <Link to="/#partner" onClick={closeMenu}>Design partner</Link>
        )}
        <Link
          to="/roi"
          className={location.pathname === '/roi' ? 'active' : ''}
          onClick={closeMenu}
        >ROI</Link>
        <Link
          to="/our-story"
          className={location.pathname === '/our-story' ? 'active' : ''}
          onClick={closeMenu}
        >Our Story</Link>
        <Link
          to="/testimonials"
          className={location.pathname === '/testimonials' ? 'active' : ''}
          onClick={closeMenu}
        >Testimonials</Link>
        {isHome ? (
          <a href="#partner" className="btn-demo" onClick={closeMenu}>Book a demo</a>
        ) : (
          <Link to="/#partner" className="btn-demo" onClick={closeMenu}>Book a demo</Link>
        )}
      </div>
    </nav>
  )
}
