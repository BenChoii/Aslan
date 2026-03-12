import { Link } from 'react-router-dom'

export default function CTA({ cityName }) {
  return (
    <div className="sidebar-cta">
      <h3>Need Help{cityName ? ` in ${cityName}` : ''}?</h3>
      <p>Our licensed, bonded, and insured team is ready to help — 24/7 emergency response available.</p>
      <a href="tel:2505494444" className="phone-big">250-549-4444</a>
      <a href="tel:2505494444" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: '12px' }}>
        📞 Call Now
      </a>
      <a href="tel:2505494444" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
        ✉️ Request a Quote
      </a>
      <div style={{ marginTop: '24px', padding: '16px', background: 'rgba(212,165,69,0.05)', borderRadius: '12px', border: '1px solid var(--border)' }}>
        <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Office Hours</div>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Mon-Fri: 7:30 AM – 5:00 PM</div>
        <div style={{ fontSize: '0.85rem', color: 'var(--accent)', marginTop: '4px', fontWeight: 600 }}>24/7 Emergency Available</div>
      </div>
    </div>
  )
}
