import { Link } from 'react-router-dom'
import { services } from '../data/services'
import GoogleMap from '../components/GoogleMap'
import { cities } from '../data/cities'

export default function ContactPage() {
  const vernon = cities[0];
  return (
    <div style={{ paddingTop: '40px' }}>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span className="current">Contact Us</span>
          </div>
          <h1>Contact <span style={{ color: 'var(--accent)' }}>Aslan Services</span></h1>
          <p className="page-hero-subtitle">Get in touch for a free quote, schedule a service call, or reach us 24/7 for emergencies at 250-549-4444.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 style={{ marginBottom: '24px' }}>Send Us a Message</h2>
              <form onSubmit={e => { e.preventDefault(); alert('Thank you! We will get back to you shortly.'); }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input className="form-input" id="name" type="text" required placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input className="form-input" id="phone" type="tel" required placeholder="250-000-0000" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input className="form-input" id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="service">Service Needed</label>
                  <select className="form-select" id="service">
                    <option value="">Select a service...</option>
                    {services.map(s => <option key={s.slug} value={s.slug}>{s.name}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message *</label>
                  <textarea className="form-textarea" id="message" required placeholder="Describe your project or issue..." />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send Message</button>
              </form>
            </div>

            <div>
              <div className="sidebar-cta" style={{ position: 'static', marginBottom: '24px' }}>
                <h3>Contact Information</h3>
                <div style={{ marginTop: '20px' }}>
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>📍 Address</div>
                    <div style={{ color: 'var(--text-secondary)' }}>2210 11 Avenue<br />Vernon, BC V1T 7X8</div>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>📞 Phone</div>
                    <a href="tel:2505494444" className="phone-big">250-549-4444</a>
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>🕐 Office Hours</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      Monday – Friday: 7:30 AM – 5:00 PM<br />
                      Weekends: Emergency Service<br />
                      After Hours: Emergency Service
                    </div>
                  </div>
                  <a href="tel:2505494444" className="btn btn-emergency" style={{ width: '100%', justifyContent: 'center' }}>🚨 24/7 Emergency Line</a>
                </div>
              </div>
              <GoogleMap embedUrl={vernon.mapEmbed} title="Aslan Services Ltd — Vernon, BC" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
