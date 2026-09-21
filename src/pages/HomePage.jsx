import { Link } from 'react-router-dom'
import { cities } from '../data/cities'
import { services } from '../data/services'
import FAQ from '../components/FAQ'
import GoogleMap from '../components/GoogleMap'
import FluentEmoji from '../components/FluentEmoji'
import {
  Wrench, Building, ClipboardCheck, HardHat, Flame, Hammer,
  Cog, Home, Camera, Zap, Lightbulb, Plug,
  Shirt, CookingPot, Thermometer, Snowflake, Settings,
  HeartPulse, MapPin, UtensilsCrossed, Cake, Fuel
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
  'oil-furnace': Fuel,
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
  'Water Heater Repair', 'Sewer Camera Inspection', 'Line Locating',
  '24/7 Emergency Response', 'Residential & Commercial', 'Serving Since 1983',
];

const heroServices = [
  { icon: 'zap', title: 'Electrical', desc: 'Troubleshooting & repairs' },
  { icon: 'wrench', title: 'Plumbing', desc: 'Leaks, blockages & repairs' },
  { icon: 'fire', title: 'Gas Fitting', desc: 'Safe, certified gas work' },
  { icon: 'snowflake', title: 'Refrigeration', desc: 'Commercial repair & maintenance' },
  { icon: 'nut', title: 'Sheet Metal', desc: 'Ductwork & ventilation service' },
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
  { label: 'Electrical Services' },
  { label: 'Plumbing & Water' },
  { label: 'Gas Fitting & HVAC' },
  { label: 'Commercial Maintenance' },
];

const processSteps = [
  { num: '01', title: 'Call Our Team', desc: 'Tell us what is wrong and where service is needed. For emergencies, phone our 24/7 line.' },
  { num: '02', title: 'Discuss Scope & Charges', desc: 'Ask about assessment fees, minimum charges, travel and after-hours rates before booking.' },
  { num: '03', title: 'Expert Service', desc: 'Our licensed technicians complete the work to code with quality materials.' },
  { num: '04', title: 'Your Satisfaction', desc: 'Discuss the completed work and any recommended maintenance with our team.' },
];

const homeFaqs = [
  { q: 'Can another contractor refer repair or maintenance work to Aslan?', a: 'Yes. We welcome service referrals from contractors and installation companies. Call 250-549-4444 to discuss the problem, location, availability, and how to arrange the handoff.' },
  { q: 'What does Aslan specialize in?', a: 'Repairs and maintenance for existing electrical, plumbing, heating, and refrigeration systems. Our focus is service work for homes and businesses, including referrals from other contractors.' },
  { q: 'What areas does Aslan Services cover?', a: 'We serve Vernon, Coldstream, Armstrong, Enderby, Lumby, Cherryville, Lake Country, Salmon Arm, Kelowna, West Kelowna, Peachland, Summerland, Penticton, Revelstoke, Kamloops, and Spallumcheen — the entire Okanagan and beyond.' },
  { q: 'Do you offer 24-hour emergency service?', a: 'Yes! Call 250-549-4444 anytime for plumbing, electrical, heating, and gas emergencies. We respond day or night, weekends and holidays.' },
  { q: 'Are you licensed and insured?', a: 'Absolutely. We hold Gas CL #LGA0002702, Electrical CL #LEL0011310, and Boiler Class Reference #LBP0046269. We are fully bonded, licensed, and insured.' },
  { q: 'How long has Aslan Services been in business?', a: 'Aslan Services has served the Okanagan since 1983.' },
  { q: 'Do you offer free estimates?', a: 'Call 250-549-4444 to discuss your project and confirm whether an estimate or service visit has a charge. Ask about minimum charges, travel and after-hours rates before booking.' },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div>
            <div className="hero-badge fade-in"><FluentEmoji name="zap" size={16} /> Trusted Since 1983 — Serving the Okanagan</div>
            <h1 className="hero-title fade-in fade-in-delay-1">
              Repairs &amp;<br />
              <span className="accent">Maintenance.</span><br />
              It’s What We Do.
            </h1>
            <p className="hero-subtitle fade-in fade-in-delay-2">
              Electrical, plumbing, heating, and refrigeration repairs for homes and businesses in Vernon and the Okanagan. We also handle service calls referred by contractors focused on installations.
            </p>
            <div className="hero-actions fade-in fade-in-delay-3">
              <a href="tel:2505494444" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>Book a Repair</a>
              <a href="tel:2505494444" className="btn btn-outline" style={{ padding: '16px 36px', fontSize: '1.05rem' }}><FluentEmoji name="phone" size={18} /> 24/7 Emergency</a>
              <Link to="/contractor-referrals" className="hero-referral-link">For contractors: refer a service call →</Link>
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
                <div className="hero-stat-number">16+</div>
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

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge"><FluentEmoji name="star" size={14} /> Customer Reviews</div>
            <h2 className="section-title">Trusted for Repairs & Ongoing Service</h2>
            <p className="section-subtitle">Selected Google reviews from customers who turn to Aslan for repairs and regular service.</p>
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

      <section className="section section-dark" aria-labelledby="referrals-heading">
        <div className="container referral-panel">
          <div>
            <div className="section-badge">For Contractors &amp; Installation Teams</div>
            <h2 id="referrals-heading">Focused on installs?<br />Send your service calls our way.</h2>
            <p>When your team is busy with installations, repair and maintenance requests still need attention. Aslan specializes in that work and welcomes referrals from other trade companies.</p>
          </div>
          <div className="referral-action">
            <h3>A clear place to send service enquiries</h3>
            <p>Call to discuss the fault, location, and urgency. We’ll confirm whether we can take on the work and agree on the next step.</p>
            <Link to="/contractor-referrals" className="btn btn-primary">Refer a Service Call →</Link>
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
            <h2 className="section-title">Repair & Maintenance Services</h2>
            <p className="section-subtitle">Help with faults, breakdowns, and ongoing upkeep — backed by trade experience since 1983.</p>
          </div>
          <div className="services-grid">
            {['gas-furnace-repair', 'heating-repair', 'water-heater-repair', 'wiring-repair', 'residential-plumber', 'commercial-plumber', 'refrigeration', 'restaurant-equipment-repair', 'bakery-equipment-repair'].map(slug => services.find(s => s.slug === slug)).map(s => {
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

      <section className="brands-section" id="brands" aria-labelledby="brands-title">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" id="brands-title">Equipment Brands We Service</h2>
            <p className="section-subtitle">Familiar names in heating, cooling, hot water, and comfort controls. Local expertise to keep them working.</p>
          </div>
          <ul className="brands-grid" aria-label="Equipment brands">
            {[
              ['Bryant', 'bryant.svg'], ['A. O. Smith', 'ao-smith.png'],
              ['Fujitsu', 'fujitsu.png'], ['Honeywell', 'honeywell.png'],
              ['Payne', 'payne.png'], ['Raypak', 'raypak.png'], ['Rheem', 'rheem.png'],
            ].map(([name, logo]) => (
              <li className="brand-logo" key={name}>
                <img src={`/brands/${logo}`} alt={name} width="160" height="90" loading="lazy" decoding="async" />
              </li>
            ))}
          </ul>
          <p className="brands-contact">Need help with your equipment? <Link to="/contact">Talk to our team about your make and model →</Link></p>
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
                Repairs and maintenance are our focus. Homeowners, businesses, and referring contractors call Aslan when existing systems need attention — from plumbing and electrical faults to heating and commercial refrigeration service.
              </p>
              {expertiseAreas.map((e, i) => (
                <div key={i} className="expertise-bar-group">
                  <div className="expertise-bar-header">
                    <span className="expertise-bar-label">{e.label}</span>
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
                {['Bonded & Insured', 'Bryant Authorized', 'Residential Service', 'Commercial Service'].map((f, i) => (
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
            <p className="section-subtitle">From your first call to the completed repair — here's how we deliver exceptional service every time.</p>
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
      <section className="section">
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
            Need a repair, routine maintenance, or help with a referred service call? Talk to our team about the problem and availability.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:2505494444" className="btn btn-primary" style={{ padding: '18px 40px', fontSize: '1.1rem' }}><FluentEmoji name="phone" size={20} /> Call 250-549-4444</a>
            <a href="tel:2505494444" className="btn btn-outline" style={{ padding: '18px 40px', fontSize: '1.1rem' }}>Book a Repair</a>
          </div>
        </div>
      </section>
    </div>
  )
}
