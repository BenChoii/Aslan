import { Link, useParams, Navigate } from 'react-router-dom'
import { industries, getIndustry, cityIndustries } from '../data/industries'
import { cities } from '../data/cities'
import { services } from '../data/services'

export default function IndustryPage() {
  const { industrySlug } = useParams()
  const industry = getIndustry(industrySlug)
  if (industrySlug && !industry) return <Navigate to="/industries" replace />
  if (!industry) return <>
    <section className="page-hero"><div className="container"><div className="section-badge">Commercial Repairs &amp; Maintenance</div><h1>Equipment Service for Your Business</h1><p className="page-hero-subtitle">Find help by industry, equipment, and the problem you are seeing. Based in Vernon, Aslan takes repair and maintenance enquiries across the Okanagan.</p><a className="btn btn-primary" href="tel:2505494444">Discuss an Equipment Repair</a></div></section>
    <section className="section"><div className="container"><div className="industry-grid">{industries.map(i=><Link className="service-card" to={`/industries/${i.slug}`} key={i.slug}><h2 className="service-card-title">{i.name}</h2><p>{i.equipment.join(' · ')}</p><span className="service-card-arrow">Equipment &amp; repair questions →</span></Link>)}</div></div></section>
  </>
  const associated = cities.filter(c=>cityIndustries[c.slug]?.slugs.some(n=>industries[n].slug===industry.slug))
  return <>
    <section className="page-hero"><div className="container"><div className="breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/industries">Industries</Link><span>/</span><span>{industry.shortName}</span></div><h1>{industry.name}</h1><p className="page-hero-subtitle">{industry.intro}</p><a className="btn btn-primary" href="tel:2505494444">Call About Your Equipment</a></div></section>
    <section className="section"><div className="container content-grid"><div className="content-main">
      <h2>Equipment We Can Discuss</h2><ul className="tips-list">{industry.equipment.map(e=><li key={e}>{e}</li>)}</ul>
      <h2>Repair Questions</h2><div className="industry-questions">{industry.questions.map((q,n)=><article id={`question-${n+1}`} key={q.q}><h3>{q.q}</h3><p>{q.a}</p></article>)}</div>
      <h2>Arrange Service from Vernon</h2><p>Call with your location to confirm availability, travel charges, and whether your equipment is within the service scope. Find local service information for your community below.</p><div className="industry-city-links">{associated.map(c=><Link key={c.slug} to={`/${c.slug}#business-repairs`}>{c.name} →</Link>)}</div>
      <h2>Related Trade Services</h2><div className="industry-city-links">{industry.services.map(slug=><Link key={slug} to={`/vernon/${slug}`}>{services.find(s=>s.slug===slug)?.name} →</Link>)}</div>
    </div><aside><div className="sidebar-cta"><h3>Help Us Plan the Service Call</h3><p>Have your equipment make, model, serial number, fault or error message, service location, and operating hours ready.</p><a href="tel:2505494444" className="btn btn-primary">250-549-4444</a><p>Ask about assessment fees, minimum charges, travel, and after-hours rates before booking.</p><Link to="/contractor-referrals">Referring a customer? →</Link></div></aside></div></section>
  </>
}
