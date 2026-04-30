import { Link } from 'react-router-dom'
import { cities } from '../data/cities'
import { services, serviceCategories } from '../data/services'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="header-logo" style={{ marginBottom: '8px' }}>
              <img src="/logo.png" alt="Aslan Services Ltd" style={{ height: '50px' }} />
            </Link>
            <p>Since 1983, Aslan Services Ltd has provided top-of-the-line electrical, plumbing, gas fitting, refrigeration, and sheet metal services for residential, commercial, and industrial clients in Vernon, BC and the greater Okanagan region.</p>
            <div style={{ marginTop: '20px' }}>
              <a href="tel:2505494444" className="btn btn-primary" style={{ marginBottom: '8px' }}>📞 250-549-4444</a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              {serviceCategories.map(cat => (
                <li key={cat}><Link to={`/vernon/${services.find(s => s.category === cat).slug}`}>{cat}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Service Areas</h4>
            <ul className="footer-links">
              {cities.map(c => (
                <li key={c.slug}><Link to={`/${c.slug}`}>{c.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>📍 2210 11 Avenue<br />Vernon, BC V1T 7X8</li>
              <li style={{ marginTop: '12px' }}><a href="tel:2505494444">📞 250-549-4444</a></li>
              <li style={{ marginTop: '12px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                🕐 Mon-Fri: 7:30 AM – 5:00 PM<br />
                Weekends & After Hours: Emergency Service
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Aslan Services Ltd. All rights reserved.</span>
          <div className="footer-licences">
            <span>Gas CL #LGA0002702</span>
            <span>Electrical CL #LEL0011310</span>
            <span>Boiler #LBP0046269</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
