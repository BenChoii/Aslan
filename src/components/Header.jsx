import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { cities } from '../data/cities'
import { services, serviceCategories } from '../data/services'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="header-logo">
            <img src="/logo.png" alt="Aslan Services Ltd Logo" />
          </Link>

          <nav className="header-nav">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/about" className={isActive('/about')}>About</Link>
            
            <div className="dropdown">
              <span className="header-nav-link dropdown-trigger" style={{ padding: '8px 16px', color: '#3a4a5e', fontWeight: 500, fontSize: '0.95rem', cursor: 'pointer' }}>Services</span>
              <div className="dropdown-menu" style={{ minWidth: '280px' }}>
                {serviceCategories.map(cat => (
                  <div key={cat} style={{ marginBottom: '8px' }}>
                    <div style={{ padding: '6px 16px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>{cat}</div>
                    {services.filter(s => s.category === cat).map(s => (
                      <Link key={s.slug} to={`/vernon/${s.slug}`}>{s.name}</Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="dropdown">
              <span className="header-nav-link dropdown-trigger" style={{ padding: '8px 16px', color: '#3a4a5e', fontWeight: 500, fontSize: '0.95rem', cursor: 'pointer' }}>Service Areas</span>
              <div className="dropdown-menu">
                {cities.map(c => (
                  <Link key={c.slug} to={`/${c.slug}`}>{c.name}</Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </nav>

          <a href="tel:2505494444" className="header-phone" style={{ display: 'flex' }}>
            <Phone size={18} />
            <span>250-549-4444</span>
          </a>

          <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
        <div style={{ padding: '14px 0', color: 'var(--accent-dark)', fontWeight: 700, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>Services</div>
        {services.map(s => (
          <Link key={s.slug} to={`/vernon/${s.slug}`} onClick={() => setMobileOpen(false)} style={{ paddingLeft: '20px', fontSize: '0.95rem' }}>{s.name}</Link>
        ))}
        <div style={{ padding: '14px 0', color: 'var(--accent-dark)', fontWeight: 700, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>Service Areas</div>
        {cities.map(c => (
          <Link key={c.slug} to={`/${c.slug}`} onClick={() => setMobileOpen(false)} style={{ paddingLeft: '20px' }}>{c.name}</Link>
        ))}
        <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact Us</Link>
        <a href="tel:2505494444" style={{ color: 'var(--accent-dark)', fontWeight: 700, fontSize: '1.2rem', marginTop: '20px', display: 'block', textAlign: 'center', padding: '16px', background: 'rgba(27,45,91,0.08)', borderRadius: '12px' }}>📞 250-549-4444</a>
      </div>
    </>
  )
}
