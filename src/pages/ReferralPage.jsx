import { Link } from 'react-router-dom'

export default function ReferralPage() {
  return <>
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Contractor Referrals</span></div>
        <div className="section-badge">Service Support for Trade Companies</div>
        <h1>Focused on installs?<br /><span style={{ color: 'var(--accent)' }}>Refer the repairs to Aslan.</span></h1>
        <p className="page-hero-subtitle">Repair and maintenance work is our specialty. We welcome service calls from contractors whose teams are busy with installations across Vernon and the Okanagan.</p>
        <a className="btn btn-primary" href="tel:2505494444">Call to Refer a Service Job</a>
      </div>
    </section>
    <section className="section">
      <div className="container referral-panel">
        <div><h2>A service team for the work you need to hand off</h2><p>When a customer needs help with an existing system, Aslan can discuss taking on the repair or maintenance request. Call us about the scope and location before arranging the referral.</p><p>Our work includes electrical troubleshooting, plumbing repairs, heating service, water heater repairs, and commercial refrigeration maintenance.</p></div>
        <div className="referral-action"><h3>Start with a quick call</h3><p>Have your company name, the service location, equipment type, reported fault, and urgency ready. We’ll discuss availability and agree on who contacts the customer next.</p><a className="btn btn-primary" href="tel:2505494444">250-549-4444</a><p className="referral-note">For ongoing referral arrangements, ask our team how we can support your service enquiries.</p></div>
      </div>
    </section>
    <section className="section section-dark"><div className="container">
      <div className="section-header"><h2>How to Arrange a Referral</h2></div>
      <div className="referral-steps">
        {[['01', 'Discuss the job', 'Call with the problem, equipment, location, and urgency.'], ['02', 'Confirm the handoff', 'Agree on availability, scope, customer contact, and any communication needed.'], ['03', 'Arrange the service call', 'Confirm booking details and applicable charges before work is scheduled.']].map(([n,t,d])=><div key={n} className="referral-action"><span className="section-badge">{n}</span><h3>{t}</h3><p>{d}</p></div>)}
      </div>
    </div></section>
    <section className="section"><div className="container section-header"><h2>Need a Repair for Your Own Property?</h2><p className="section-subtitle">Homeowners and businesses can call us directly. You do not need a contractor referral.</p><Link className="btn btn-primary" to="/contact" style={{marginTop:24}}>Book a Repair</Link></div></section>
  </>
}
