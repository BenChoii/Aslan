import { Link } from 'react-router-dom'
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
          <p className="page-hero-subtitle">Call to arrange a repair, discuss maintenance, or refer a service call. Reach us 24/7 for emergencies at 250-549-4444.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 style={{ marginBottom: '24px' }}>Call to Book a Repair</h2>
              <p style={{ marginBottom: '24px' }}>For repairs, maintenance, scheduling, and contractor referrals, call our team at 250-549-4444. For urgent problems, use our 24/7 emergency line.</p>
              <a href="tel:2505494444" className="btn btn-primary">Call 250-549-4444</a>
              <div className="contact-referral"><h3>Referring a Customer?</h3><p>Tell us your company name, the service location, equipment type, and what needs attention. We’ll discuss availability and agree on how to arrange contact with the customer.</p><Link to="/contractor-referrals">Contractor referral information →</Link></div>
              <h3 style={{ marginTop: '32px', marginBottom: '16px' }}>Before You Book</h3>
              <p>Have your service address and a description of the problem ready. Ask about availability, assessment fees, minimum charges, travel, and after-hours rates so you know what to expect.</p>

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
