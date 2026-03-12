import { Link } from 'react-router-dom'
import { cities } from '../data/cities'
import { services, serviceCategories } from '../data/services'
import FAQ from '../components/FAQ'
import GoogleMap from '../components/GoogleMap'
import FluentEmoji from '../components/FluentEmoji'
import {
  Wrench, Building, ClipboardCheck, HardHat, Flame, Hammer,
  Cog, Home, Camera, Zap, Lightbulb, Plug,
  Shirt, CookingPot, Thermometer, Snowflake, Settings,
  HeartPulse, MapPin, UtensilsCrossed, Cake
} from 'lucide-react'

// Map each service slug to a Lucide icon component
const SERVICE_ICONS = {
  'residential-plumber': Wrench,
  'commercial-plumber': Building,
  'licensed-plumber': ClipboardCheck,
  'plumbing-contractor': HardHat,
  'water-heaters': Flame,
  'water-heater-repair': Hammer,
  'pumps-septic': Cog,
  'septic-tank-service': Home,
  'sewer-camera': Camera,
  'electrical': Zap,
  'electrician': Lightbulb,
  'wiring-installation': Plug,
  'wiring-repair': Wrench,
  'gas-fitting': Flame,
  'gas-dryer': Shirt,
  'gas-range': CookingPot,
  'gas-furnace-repair': Thermometer,
  'refrigeration': Snowflake,
  'sheet-metal': Settings,
  'heating-repair': HeartPulse,
  'residential-heating': Flame,
  'line-locating': MapPin,
  'restaurant-equipment-repair': UtensilsCrossed,
  'bakery-equipment-repair': Cake,
};

const marqueeServices = [
  'Licensed Electricians', 'Emergency Plumbing', 'Gas Fitting & Repair',
  'Commercial Refrigeration', 'Sheet Metal Fabrication', 'Heating Systems',
  'Water Heater Installation', 'Sewer Camera Inspection', 'Line Locating',
  '24/7 Emergency Response', 'Residential & Commercial', 'Serving Since 1983',
];

const heroServices = [
  { icon: 'zap', title: 'Electrical', desc: 'Licensed electrical services' },
  { icon: 'wrench', title: 'Plumbing', desc: 'Residential & commercial' },
  { icon: 'fire', title: 'Gas Fitting', desc: 'Safe, certified gas work' },
  { icon: 'snowflake', title: 'Refrigeration', desc: 'Commercial cooling systems' },
  { icon: 'nut', title: 'Sheet Metal', desc: 'Custom fabrication & HVAC' },
  { icon: 'thermometer', title: 'Heating', desc: '24/7 emergency repair' },
];

const testimonials = [
  { text: "We have used Aslan for many years for any plumbing, electrical, and HVAC issues in both personal residences and rental properties. The service has always been quick and easy to arrange even on short notice and the techs are knowledgeable, efficient, and friendly.", author: "Sheila Carpenter", role: "Verified Google Review ★★★★★" },
  { text: "Aslan serviced our system at our chalet at Silver Star Mountain in Vernon. Excellent service: on time, very personable, explained the system, completed repairs and service and at a very reasonable price. I feel in good hands! Highly recommended!", author: "Terry Pearson", role: "Verified Google Review ★★★★★" },
  { text: "Aslan shows up when they said they will, gets the job done right the first time and the costs are more than fair. I have used them over 20 times over the years for my business and home.", author: "Chris Goodrich", role: "Verified Google Review ★★★★★" },
  { text: "Very quick Emergency call out service to replace septic pump failure, Very Professional and knowledgeable Tradesman.", author: "Stephen Truscott", role: "Verified Google Review ★★★★★" },
  { text: "Have called Aslan for several work and home emergencies. From the friendly office staff to the technicians I have always received great compassionate service. They care, know their stuff and are never trying to take advantage.", author: "Tamara Farac", role: "Verified Google Review ★★★★★" },
  { text: "We have used Aslan's services for 16 years and have had excellent service! They inspect our furnace and hot water tank annually. They have done some major plumbing repairs. Their new plumber Jeremy is fantastic.", author: "Pamela Ades", role: "Verified Google Review ★★★★★" },
];

const expertiseAreas = [
  { label: 'Electrical Services', value: 98 },
  { label: 'Plumbing & Water', value: 96 },
  { label: 'Gas Fitting & HVAC', value: 95 },
  { label: 'Commercial Projects', value: 90 },
];

const processSteps = [
  { num: '01', title: 'Call or Request', desc: 'Reach us 24/7 by phone or online. Describe your project or emergency.' },
  { num: '02', title: 'Free Assessment', desc: 'We assess the situation and provide a clear, fair quote — no hidden fees.' },
  { num: '03', title: 'Expert Service', desc: 'Our licensed technicians complete the work to code with quality materials.' },
  { num: '04', title: 'Your Satisfaction', desc: 'We stand behind every job with professional guarantees and follow-up support.' },
];

const homeFaqs = [
  { q: 'What areas does Aslan Services cover?', a: 'We serve Vernon, Coldstream, Armstrong, Enderby, Lumby, Lake Country, Salmon Arm, Kelowna, West Kelowna, Penticton, Revelstoke, Kamloops, and Spallumcheen — the entire Okanagan and beyond.' },
  { q: 'Do you offer 24-hour emergency service?', a: 'Yes! Call 250-549-4444 anytime for plumbing, electrical, heating, and gas emergencies. We respond day or night, weekends and holidays.' },
  { q: 'Are you licensed and insured?', a: 'Absolutely. We hold Gas CL #LGA0002702, Electrical CL #LEL0011310, and Boiler Class Reference #LBP0046269. We are fully bonded, licensed, and insured.' },
  { q: 'How long has Aslan Services been in business?', a: 'Since 1983 — over 40 years of trusted service in the Okanagan region.' },
  { q: 'Do you offer free estimates?', a: 'Yes, we provide free quotes for most projects. Call us or fill out our contact form to get started.' },
];

function RotatingBadge() {
  return (
    <div className="rotating-badge">
      <div className="rotating-badge-text">
        <svg viewBox="0 0 120 120">
          <defs>
            <path id="circle" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
          </defs>
          <text>
            <textPath href="#circle">• SINCE 1983 • LICENSED • BONDED • INSURED </textPath>
          </text>
        </svg>
      </div>
      <div className="rotating-badge-icon">→</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div>
            <div className="hero-badge fade-in"><FluentEmoji name="zap" size={16} /> Trusted Since 1983 — Over 40 Years of Service</div>
            <h1 className="hero-title fade-in fade-in-delay-1" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-1px' }}>
              Expert<br />
              <span className="accent">Trade Services</span><br />
              You Can Trust
            </h1>
            <p className="hero-subtitle fade-in fade-in-delay-2">
              From emergency repairs to full-scale installations, Aslan Services delivers top-of-the-line electrical, plumbing, gas fitting, refrigeration & sheet metal services across the Okanagan.
            </p>
            <div className="hero-actions fade-in fade-in-delay-3">
              <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>Get a Free Quote</Link>
              <a href="tel:2505494444" className="btn btn-outline" style={{ padding: '16px 36px', fontSize: '1.05rem' }}><FluentEmoji name="phone" size={18} /> 24/7 Emergency</a>
              <RotatingBadge />
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
                <div className="hero-card-icon"><FluentEmoji name={s.icon} size={40} /></div>
                <div className="hero-card-title">{s.title}</div>
                <div className="hero-card-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Marquee */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...marqueeServices, ...marqueeServices].map((s, i) => (
            <div key={i} className="marquee-item">
              <span className="marquee-dot" />{s}
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge"><FluentEmoji name="spark" size={14} /> What We Offer</div>
            <h2 className="section-title">Complete Trade Services Under One Roof</h2>
            <p className="section-subtitle">From electrical and plumbing to gas fitting, refrigeration, and sheet metal — we handle it all with over 40 years of expertise.</p>
          </div>
          <div className="services-grid">
            {services.map(s => {
              const IconComp = SERVICE_ICONS[s.slug];
              return (
                <Link key={s.slug} to={`/vernon/${s.slug}`} className="service-card">
                  <span className="service-card-icon">
                    {IconComp ? <IconComp size={28} strokeWidth={1.5} /> : s.icon}
                  </span>
                  <div className="service-card-title">{s.name}</div>
                  <div className="service-card-desc">{s.description}</div>
                  <div className="service-card-arrow">Learn More →</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise & About */}
      <section className="section section-dark">
        <div className="container">
          <div className="expertise-grid">
            <div>
              <div className="section-badge" style={{ marginBottom: '16px' }}><FluentEmoji name="trophy" size={14} /> For Commercial & Residential Clients</div>
              <h2 style={{ marginBottom: '20px' }}>Trusted Local Experts — <span style={{ color: 'var(--accent)' }}>Fast, Reliable</span></h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.8 }}>
                Aslan is your trusted partner for all residential and commercial trade needs. With years of hands-on experience, a skilled team, and unwavering commitment to quality, we deliver results you can count on.
              </p>
              {expertiseAreas.map((e, i) => (
                <div key={i} className="expertise-bar-group">
                  <div className="expertise-bar-header">
                    <span className="expertise-bar-label">{e.label}</span>
                    <span className="expertise-bar-value">{e.value}%</span>
                  </div>
                  <div className="expertise-bar-track">
                    <div className="expertise-bar-fill" style={{ width: `${e.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div>
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
              <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {['Bonded & Insured', 'Bryant Authorized', 'Corporate Rates', 'Free Estimates'].map((f, i) => (
                  <div key={i} className="about-feature"><span className="about-feature-icon"><FluentEmoji name="check" size={16} /></span><span className="about-feature-text">{f}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge"><FluentEmoji name="gear" size={14} /> How It Works</div>
            <h2 className="section-title">Simple Process, Expert Results</h2>
            <p className="section-subtitle">From first call to project completion — here's how we deliver exceptional service every time.</p>
          </div>
          <div className="process-grid">
            {processSteps.map((s, i) => (
              <div key={i} className="process-step">
                <div className="process-step-number">{s.num}</div>
                <div className="process-step-title">{s.title}</div>
                <div className="process-step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="section-badge"><FluentEmoji name="pin" size={14} /> Service Areas</div>
            <h2 className="section-title">Serving the Entire Okanagan Region</h2>
            <p className="section-subtitle">From Vernon to Kamloops, Kelowna to Revelstoke — our team covers the communities you call home.</p>
          </div>
          <div className="cities-grid">
            {cities.map(c => (
              <Link key={c.slug} to={`/${c.slug}`} className="city-card">
                <div className="city-card-name"><FluentEmoji name="pin" size={16} /> {c.name}</div>
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
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge"><FluentEmoji name="star" size={14} /> Our Real Satisfaction</div>
            <h2 className="section-title">Thousands of Satisfied Clients</h2>
            <p className="section-subtitle">Real 5-star reviews from our Google Business Profile — because trust is earned, not advertised.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card-v2">
                <span className="quote-mark">"</span>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-footer">
                  <div className="testimonial-avatar">{t.author.charAt(0)}</div>
                  <div className="testimonial-meta">
                    <div className="testimonial-author">{t.author}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="section-badge"><FluentEmoji name="question" size={14} /> FAQ</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <FAQ items={homeFaqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '16px', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Ready to Get Started?</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 32px', fontSize: '1.1rem' }}>
            Whether it's an emergency or a planned project, our team is here for you. Call now or request a free quote.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:2505494444" className="btn btn-primary" style={{ padding: '18px 40px', fontSize: '1.1rem' }}><FluentEmoji name="phone" size={20} /> Call 250-549-4444</a>
            <Link to="/contact" className="btn btn-outline" style={{ padding: '18px 40px', fontSize: '1.1rem' }}>Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
