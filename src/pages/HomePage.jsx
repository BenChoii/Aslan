import { Link } from 'react-router-dom'
import { cities } from '../data/cities'
import { services, serviceCategories } from '../data/services'
import FAQ from '../components/FAQ'
import GoogleMap from '../components/GoogleMap'

const heroServices = [
  { icon: '⚡', title: 'Electrical', desc: 'Licensed electrical services' },
  { icon: '🔧', title: 'Plumbing', desc: 'Residential & commercial' },
  { icon: '🔥', title: 'Gas Fitting', desc: 'Safe, certified gas work' },
  { icon: '❄️', title: 'Refrigeration', desc: 'Commercial cooling systems' },
  { icon: '🔩', title: 'Sheet Metal', desc: 'Custom fabrication & HVAC' },
  { icon: '🌡️', title: 'Heating', desc: '24/7 emergency repair' },
];

const testimonials = [
  { text: "We have used Aslan for many years for any plumbing, electrical, and HVAC issues in both personal residences and rental properties. The service has always been quick and easy to arrange even on short notice and the techs are knowledgeable, efficient, and friendly.", author: "Sheila Carpenter", role: "Verified Google Review ★★★★★" },
  { text: "Aslan serviced our system at our chalet at Silver Star Mountain in Vernon. Excellent service: on time, very personable, explained the system, completed repairs and service and at a very reasonable price. I feel in good hands! Highly recommended!", author: "Terry Pearson", role: "Verified Google Review ★★★★★" },
  { text: "Aslan shows up when they said they will, gets the job done right the first time and the costs are more than fair. I have used them over 20 times over the years for my business and home.", author: "Chris Goodrich", role: "Verified Google Review ★★★★★" },
  { text: "Very quick Emergency call out service to replace septic pump failure, Very Professional and knowledgeable Tradesman.", author: "Stephen Truscott", role: "Verified Google Review ★★★★★" },
  { text: "Have called Aslan for several work and home emergencies. From the friendly office staff to the technicians I have always received great compassionate service. They care, know their stuff and are never trying to take advantage.", author: "Tamara Farac", role: "Verified Google Review ★★★★★" },
  { text: "We have used Aslan's services for 16 years and have had excellent service! They inspect our furnace and hot water tank annually. They have done some major plumbing repairs. Their new plumber Jeremy is fantastic.", author: "Pamela Ades", role: "Verified Google Review ★★★★★" },
];

const homeFaqs = [
  { q: 'What areas does Aslan Services cover?', a: 'We serve Vernon, Coldstream, Armstrong, Enderby, Lumby, Lake Country, Salmon Arm, Kelowna, West Kelowna, Penticton, Revelstoke, Kamloops, and Spallumcheen — the entire Okanagan and beyond.' },
  { q: 'Do you offer 24-hour emergency service?', a: 'Yes! Call 250-549-4444 anytime for plumbing, electrical, heating, and gas emergencies. We respond day or night, weekends and holidays.' },
  { q: 'Are you licensed and insured?', a: 'Absolutely. We hold Gas CL #LGA0002702, Electrical CL #LEL0011310, and Boiler Class Reference #LBP0046269. We are fully bonded, licensed, and insured.' },
  { q: 'How long has Aslan Services been in business?', a: 'Since 1983 — over 40 years of trusted service in the Okanagan region.' },
  { q: 'Do you offer free estimates?', a: 'Yes, we provide free quotes for most projects. Call us or fill out our contact form to get started.' },
];

export default function HomePage() {
  return (
    <div style={{ paddingTop: '40px' }}>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div>
            <div className="hero-badge fade-in">⚡ Trusted Since 1983 — Over 40 Years of Service</div>
            <h1 className="hero-title fade-in fade-in-delay-1">
              Your Trusted <span className="accent">Electrical, Plumbing</span> & Gas Fitting Experts
            </h1>
            <p className="hero-subtitle fade-in fade-in-delay-2">
              From emergency repairs to full-scale installations, Aslan Services delivers top-of-the-line trade services for residential, commercial, and industrial clients across the Okanagan.
            </p>
            <div className="hero-actions fade-in fade-in-delay-3">
              <Link to="/contact" className="btn btn-primary">Get a Free Quote</Link>
              <a href="tel:2505494444" className="btn btn-emergency">🚨 24/7 Emergency</a>
              <div className="hero-phone">
                <span>Call Now</span>
                <strong>250-549-4444</strong>
              </div>
            </div>
            <div className="hero-stats fade-in fade-in-delay-3">
              <div className="hero-stat">
                <div className="hero-stat-number">40+</div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">24/7</div>
                <div className="hero-stat-label">Emergency Service</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">13+</div>
                <div className="hero-stat-label">Cities Served</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            {heroServices.map((s, i) => (
              <div key={i} className={`hero-card fade-in fade-in-delay-${(i % 3) + 1}`}>
                <div className="hero-card-icon">{s.icon}</div>
                <div className="hero-card-title">{s.title}</div>
                <div className="hero-card-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">🛠️ Our Services</div>
            <h2 className="section-title">Complete Trade Services Under One Roof</h2>
            <p className="section-subtitle">From electrical and plumbing to gas fitting, refrigeration, and sheet metal — we handle it all with over 40 years of expertise.</p>
          </div>
          <div className="services-grid">
            {services.map(s => (
              <Link key={s.slug} to={`/vernon/${s.slug}`} className="service-card">
                <span className="service-card-icon">{s.icon}</span>
                <div className="service-card-title">{s.name}</div>
                <div className="service-card-desc">{s.description}</div>
                <div className="service-card-arrow">Learn More →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section section-dark">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <div className="section-badge">→ About Us</div>
              <h2>A Team of Certified Professionals Serving the Okanagan</h2>
              <p>Since 1983, ASLAN Electrical, Plumbing, Gas Fitting, Refrigeration & Sheet Metal Services Ltd. has provided top-of-the-line service and customer care for residential, commercial, and industrial clients in Vernon BC and beyond.</p>
              <p>Our commitment to quality is demonstrated by our use of Bryant products, known throughout the industry for their reliability and performance. We are fully bonded, licensed, and insured — so you can trust that every job is done right.</p>
              <div className="about-features">
                <div className="about-feature"><span className="about-feature-icon">✓</span><span className="about-feature-text">Bonded, Licensed & Insured</span></div>
                <div className="about-feature"><span className="about-feature-icon">✓</span><span className="about-feature-text">24/7 Emergency Response</span></div>
                <div className="about-feature"><span className="about-feature-icon">✓</span><span className="about-feature-text">Bryant Authorized Dealer</span></div>
                <div className="about-feature"><span className="about-feature-icon">✓</span><span className="about-feature-text">Corporate Rates Available</span></div>
              </div>
            </div>
            <div className="about-visual">
              <div className="about-stat-card">
                <div className="about-stat-number" style={{ color: 'var(--accent)' }}>40+</div>
                <div className="about-stat-label">Years in Business</div>
              </div>
              <div className="about-stat-card">
                <div className="about-stat-number" style={{ color: 'var(--accent)' }}>24/7</div>
                <div className="about-stat-label">Emergency Service</div>
              </div>
              <div className="about-stat-card accent-card">
                <div className="about-stat-number">100%</div>
                <div className="about-stat-label">Licensed & Insured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">📍 Service Areas</div>
            <h2 className="section-title">Serving the Entire Okanagan Region</h2>
            <p className="section-subtitle">From Vernon to Kamloops, Kelowna to Revelstoke — our team covers the communities you call home.</p>
          </div>
          <div className="cities-grid">
            {cities.map(c => (
              <Link key={c.slug} to={`/${c.slug}`} className="city-card">
                <div className="city-card-name">📍 {c.name}</div>
                <div className="city-card-pop">{c.population}</div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: '40px' }}>
            <GoogleMap embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2571.5!2d-119.272!3d50.267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537dd0072a77a7a5%3A0x0!2s2210+11th+Ave%2C+Vernon%2C+BC+V1T+7X8!5e0!3m2!1sen!2sca!4v1710000000000" title="Aslan Services Ltd — 2210 11th Ave, Vernon, BC" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">⭐ Testimonials</div>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">We're proud of our reputation for quality work and excellent customer service across the Okanagan.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">{t.author}</div>
                <div className="testimonial-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">❓ FAQ</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <FAQ items={homeFaqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '16px' }}>Ready to Get Started?</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 32px', fontSize: '1.1rem' }}>
            Whether it's an emergency or a planned project, our team is here for you. Call now or request a free quote.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:2505494444" className="btn btn-emergency">🚨 Call 250-549-4444</a>
            <Link to="/contact" className="btn btn-outline">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
