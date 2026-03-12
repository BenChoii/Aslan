import { Link } from 'react-router-dom'
import FAQ from '../components/FAQ'

const aboutFaqs = [
  { q: 'How long has Aslan Services been in business?', a: 'Since 1983 — over 40 years providing top-of-the-line electrical, plumbing, gas fitting, refrigeration, and sheet metal services in Vernon, BC and the greater Okanagan.' },
  { q: 'What licences do you hold?', a: 'Gas CL #LGA0002702, Electrical CL #LEL0011310, and Boiler Class Reference #LBP0046269. We are fully bonded, licensed, and insured.' },
  { q: 'Do you use quality products?', a: 'Yes. We are proud to use Bryant products, known throughout the industry for their quality and reliability.' },
  { q: 'Do you offer corporate or membership rates?', a: 'Yes, we offer corporate and membership rates for businesses requiring ongoing service.' },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '40px' }}>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span className="current">About Us</span>
          </div>
          <h1>About <span style={{ color: 'var(--accent)' }}>Aslan Services</span> Ltd.</h1>
          <p className="page-hero-subtitle">Over 40 years of trusted electrical, plumbing, gas fitting, refrigeration, and sheet metal services in Vernon, BC and the Okanagan region.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Our Story</h2>
              <p>Since 1983, ASLAN Electrical, Plumbing, Gas Fitting, Refrigeration & Sheet Metal Services Ltd. has provided top-of-the-line service and customer care for our residential, commercial, and industrial clients in Vernon BC and beyond.</p>
              <p>Our commitment to quality is demonstrated by our use of Bryant products, known throughout the industry for their quality. From electrical work and plumbing services to 24-hour emergency response, we have you covered.</p>
              <p>To ensure you're dealing with a reputable company, we realize the value of being bonded, licensed and insured. We are confident that our fair prices and superior workmanship will win your loyalty.</p>
              <h2 style={{ marginTop: '40px' }}>Our Certifications</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginTop: '16px' }}>
                {[
                  { label: 'Gas Contractor', num: 'CL #LGA0002702' },
                  { label: 'Electrical Contractor', num: 'CL #LEL0011310' },
                  { label: 'Boiler Class Reference', num: '#LBP0046269' },
                ].map((c, i) => (
                  <div key={i} style={{ padding: '20px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>{c.label}</div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, color: 'var(--accent)' }}>{c.num}</div>
                  </div>
                ))}
              </div>
              <div className="about-features" style={{ marginTop: '40px' }}>
                <div className="about-feature"><span className="about-feature-icon">✓</span><span className="about-feature-text">Bonded & Insured</span></div>
                <div className="about-feature"><span className="about-feature-icon">✓</span><span className="about-feature-text">24/7 Emergency Response</span></div>
                <div className="about-feature"><span className="about-feature-icon">✓</span><span className="about-feature-text">Bryant Authorized Dealer</span></div>
                <div className="about-feature"><span className="about-feature-icon">✓</span><span className="about-feature-text">Corporate Rates Available</span></div>
                <div className="about-feature"><span className="about-feature-icon">✓</span><span className="about-feature-text">Residential & Commercial</span></div>
                <div className="about-feature"><span className="about-feature-icon">✓</span><span className="about-feature-text">Industrial Projects</span></div>
              </div>
            </div>
            <div className="about-visual">
              <div className="about-stat-card">
                <div className="about-stat-number" style={{ color: 'var(--accent)' }}>1983</div>
                <div className="about-stat-label">Founded</div>
              </div>
              <div className="about-stat-card">
                <div className="about-stat-number" style={{ color: 'var(--accent)' }}>40+</div>
                <div className="about-stat-label">Years Experience</div>
              </div>
              <div className="about-stat-card accent-card">
                <div className="about-stat-number">13+</div>
                <div className="about-stat-label">Cities Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <FAQ items={aboutFaqs} />
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '16px' }}>Ready to Work With Us?</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 32px' }}>Contact us today for a free quote or call anytime for emergency service.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:2505494444" className="btn btn-primary">📞 250-549-4444</a>
            <a href="tel:2505494444" className="btn btn-outline">Request a Quote</a>
          </div>
        </div>
      </section>
    </div>
  )
}
