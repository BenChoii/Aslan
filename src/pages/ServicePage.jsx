import { useParams, Link, Navigate } from 'react-router-dom'
import { getCityBySlug, cities } from '../data/cities'
import { getServiceBySlug, services } from '../data/services'
import FAQ from '../components/FAQ'
import GoogleMap from '../components/GoogleMap'
import CTA from '../components/CTA'

export default function ServicePage() {
  const { citySlug, serviceSlug } = useParams();
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) return <Navigate to="/" replace />;

  const relatedServices = services.filter(s => s.category === service.category && s.slug !== service.slug);
  const otherCities = cities.filter(c => c.slug !== city.slug).slice(0, 6);

  const cityServiceFaqs = service.faqs.map(f => ({
    q: f.q.includes(city.name) ? f.q : f.q.replace('?', ` in ${city.name}?`),
    a: f.a
  }));
  cityServiceFaqs.push(
    { q: `Why choose Aslan for ${service.name.toLowerCase()} in ${city.name}?`, a: `Aslan Services has been serving ${city.name} and the Okanagan since 1983. We are fully licensed, bonded, and insured with 24-hour emergency response. Our experienced team delivers code-compliant work with fair, transparent pricing.` },
    { q: `Do you offer free quotes for ${service.name.toLowerCase()} in ${city.name}?`, a: `Yes! Contact us for a free, no-obligation quote for any ${service.name.toLowerCase()} project in ${city.name}. Call 250-549-4444 or fill out our online form.` }
  );

  return (
    <div style={{ paddingTop: '40px' }}>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span>
            <Link to={`/${city.slug}`}>{city.name}</Link><span>/</span>
            <span className="current">{service.name}</span>
          </div>
          <h1>{service.name} in <span style={{ color: 'var(--accent)' }}>{city.name}, BC</span></h1>
          <p className="page-hero-subtitle">Professional {service.name.toLowerCase()} services for residential, commercial, and industrial clients in {city.name} and the surrounding area. Licensed, bonded, and insured — with 24/7 emergency response.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              {/* Description */}
              <h2>{service.name} Services in {city.name}</h2>
              <p>{service.description}</p>
              <p>Aslan Services has been the trusted choice for {service.name.toLowerCase()} in {city.name} and throughout the Okanagan since 1983. {city.climate}</p>

              {/* Why Choose Section */}
              <h2>Why Choose Aslan for {service.name} in {city.name}?</h2>
              <p>When you need reliable {service.name.toLowerCase()} in {city.name}, Aslan Services delivers. Here's what sets us apart:</p>
              <ul className="tips-list">
                <li><strong>40+ Years of Experience</strong> — Serving the Okanagan since 1983 with proven expertise.</li>
                <li><strong>Licensed & Insured</strong> — Fully bonded, licensed, and insured for complete peace of mind.</li>
                <li><strong>24/7 Emergency Response</strong> — Day or night, weekends and holidays — we're there when you need us.</li>
                <li><strong>Fair, Transparent Pricing</strong> — Free quotes and no hidden fees on every project.</li>
                <li><strong>Bryant Authorized</strong> — We use top-quality Bryant products for reliable, long-lasting results.</li>
                <li><strong>Local Knowledge</strong> — We understand {city.name}'s unique climate and building requirements.</li>
              </ul>

              {/* Tips */}
              <h2>Helpful {service.name} Tips for {city.name} Property Owners</h2>
              <p>Our experienced team shares these professional tips to help {city.name} homeowners and business owners maintain their {service.category.toLowerCase()} systems:</p>
              <ul className="tips-list">
                {service.tips.map((tip, i) => <li key={i}>{tip}</li>)}
              </ul>

              {/* Guide */}
              <h2>When to Call a Professional for {service.name} in {city.name}</h2>
              <p>While some maintenance tasks can be handled by homeowners, many {service.name.toLowerCase()} issues require professional expertise, tools, and licensing. Here's when you should call Aslan Services:</p>
              <ul className="tips-list">
                <li><strong>Emergency Situations</strong> — Burst pipes, gas leaks, power outages, no heat in winter, or flooding require immediate professional response. Call 250-549-4444.</li>
                <li><strong>Code-Required Work</strong> — Any work involving gas lines, electrical panels, or plumbing modifications typically requires a licensed professional and permits in BC.</li>
                <li><strong>New Installations</strong> — Installing new equipment, fixtures, or systems should always be done by a certified technician to ensure safety and warranty coverage.</li>
                <li><strong>Recurring Problems</strong> — If you've been dealing with the same issue repeatedly, a professional diagnosis can identify and fix the root cause.</li>
                <li><strong>Annual Maintenance</strong> — Scheduling yearly professional inspections extends equipment life and catches problems before they become expensive emergencies.</li>
              </ul>

              {/* Map */}
              <h2>{service.name} in {city.name} — Service Area Map</h2>
              <p>We serve all of {city.name} and surrounding areas. Our team knows the local streets, neighbourhoods, and building types — so we arrive prepared and work efficiently.</p>
              <GoogleMap embedUrl={city.mapEmbed} title={`${service.name} in ${city.name}, BC — Aslan Services`} />

              {/* Local Context */}
              <h2>Serving the {city.name} Community</h2>
              <p>{city.description}</p>
              <p>Whether you're near {city.landmarks.slice(0, 3).join(', ')}, or anywhere else in {city.name}, our team provides prompt, professional {service.name.toLowerCase()} service you can depend on.</p>
              <div className="landmarks-grid">
                {city.landmarks.map((l, i) => <div key={i} className="landmark-tag">📍 {l}</div>)}
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <>
                  <h2>Related {service.category} Services in {city.name}</h2>
                  <div className="related-grid">
                    {relatedServices.map(s => (
                      <Link key={s.slug} to={`/${city.slug}/${s.slug}`} className="service-card" style={{ padding: '20px' }}>
                        <span className="service-card-icon" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{s.icon}</span>
                        <div className="service-card-title" style={{ fontSize: '0.95rem' }}>{s.name}</div>
                        <div className="service-card-arrow" style={{ marginTop: '8px', fontSize: '0.82rem' }}>Details →</div>
                      </Link>
                    ))}
                  </div>
                </>
              )}

              {/* Other Cities */}
              <h2>{service.name} in Other Cities</h2>
              <p>We also provide {service.name.toLowerCase()} across the Okanagan:</p>
              <div className="cities-grid" style={{ marginTop: '16px' }}>
                {otherCities.map(c => (
                  <Link key={c.slug} to={`/${c.slug}/${service.slug}`} className="city-card">
                    <div className="city-card-name">📍 {c.name}</div>
                  </Link>
                ))}
              </div>

              {/* FAQs */}
              <h2 style={{ marginTop: '48px' }}>{service.name} FAQ — {city.name}</h2>
              <FAQ items={cityServiceFaqs} />
            </div>

            <div>
              <CTA cityName={city.name} />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '16px' }}>Need {service.name} in {city.name}?</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 32px', fontSize: '1.1rem' }}>
            Get a free quote or call us 24/7 for emergency service. Licensed, bonded, and insured since 1983.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:2505494444" className="btn btn-emergency">🚨 Call 250-549-4444</a>
            <a href="tel:2505494444" className="btn btn-outline">Request a Quote</a>
          </div>
        </div>
      </section>
    </div>
  )
}
