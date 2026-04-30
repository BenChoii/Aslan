import { useParams, Link, Navigate } from 'react-router-dom'
import { getCityBySlug, cities } from '../data/cities'
import { services, serviceCategories } from '../data/services'
import FAQ from '../components/FAQ'
import GoogleMap from '../components/GoogleMap'
import CTA from '../components/CTA'

export default function CityPage() {
  const { citySlug } = useParams();
  const city = getCityBySlug(citySlug);
  if (!city) return <Navigate to="/" replace />;

  const cityFaqs = [
    { q: `What services does Aslan offer in ${city.name}?`, a: `We provide all 25 of our trade services in ${city.name}, including plumbing, electrical, gas fitting, refrigeration, sheet metal, heating repair, water heaters, sewer camera inspection, line locating, and more. Call 250-549-4444 for any project.` },
    { q: `Do you charge extra for service calls to ${city.name}?`, a: `We serve ${city.name} as part of our regular service area. Contact us for a free quote — our pricing is competitive and transparent.` },
    { q: `How fast can you respond to emergencies in ${city.name}?`, a: `We provide 24-hour emergency response across the Okanagan. Response times to ${city.name} depend on current demand, but we prioritize emergencies and dispatch as quickly as possible.` },
    { q: `Are you licensed to work in ${city.name}?`, a: `Yes. Our licences (Gas CL #LGA0002702, Electrical CL #LEL0011310, Boiler #LBP0046269) cover all of British Columbia. We are fully bonded and insured.` },
    { q: `What makes ${city.name} properties unique for trade services?`, a: city.climate },
  ];

  return (
    <div style={{ paddingTop: '40px' }}>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span className="current">{city.name}</span>
          </div>
          <h1>Electrical, Plumbing & Trade Services in <span style={{ color: 'var(--accent)' }}>{city.name}, BC</span></h1>
          <p className="page-hero-subtitle">{city.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>Professional Trade Services in {city.name}</h2>
              <p>Aslan Services Ltd has been proudly serving {city.name} and the greater Okanagan since 1983. Whether you need emergency plumbing repair, electrical upgrades, gas fitting, refrigeration service, or custom sheet metal work, our licensed and insured team delivers exceptional results every time.</p>
              <p>{city.climate}</p>

              <h2>All Services Available in {city.name}</h2>
              {serviceCategories.map(cat => (
                <div key={cat} style={{ marginBottom: '32px' }}>
                  <h3 style={{ color: 'var(--accent)', marginBottom: '12px', marginTop: '24px' }}>{cat}</h3>
                  <div className="related-grid">
                    {services.filter(s => s.category === cat).map(s => (
                      <Link key={s.slug} to={`/${city.slug}/${s.slug}`} className="service-card" style={{ padding: '20px' }}>
                        <span className="service-card-icon" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{s.icon}</span>
                        <div className="service-card-title" style={{ fontSize: '0.95rem' }}>{s.name}</div>
                        <div className="service-card-arrow" style={{ marginTop: '8px', fontSize: '0.82rem' }}>Details →</div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <h2>Local Landmarks Near {city.name}</h2>
              <p>We're proud to serve the community around these well-known {city.name} landmarks and destinations:</p>
              <div className="landmarks-grid">
                {city.landmarks.map((l, i) => <div key={i} className="landmark-tag">📍 {l}</div>)}
              </div>

              <h2>Did You Know?</h2>
              <ul className="tips-list">
                {city.funFacts.map((f, i) => <li key={i}>{f}</li>)}
              </ul>

              <h2 style={{ marginTop: '48px' }}>Find Us in {city.name}</h2>
              <GoogleMap embedUrl={city.mapEmbed} title={`Aslan Services — ${city.name}, BC`} />

              {city.nearbyAreas && city.nearbyAreas.length > 0 && (
                <>
                  <h2>Nearby Service Areas</h2>
                  <div className="cities-grid" style={{ marginTop: '16px' }}>
                    {city.nearbyAreas.map(n => {
                      const nearby = cities.find(c => c.name === n);
                      return nearby ? (
                        <Link key={nearby.slug} to={`/${nearby.slug}`} className="city-card">
                          <div className="city-card-name">📍 {nearby.name}</div>
                        </Link>
                      ) : null;
                    })}
                  </div>
                </>
              )}

              <h2 style={{ marginTop: '48px' }}>Frequently Asked Questions — {city.name}</h2>
              <FAQ items={cityFaqs} />
            </div>

            <div>
              <CTA cityName={city.name} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
