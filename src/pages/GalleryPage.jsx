import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { galleryPhotos, galleryCategories } from '../data/gallery'
import FluentEmoji from '../components/FluentEmoji'

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const photos = filter === 'All' ? galleryPhotos : galleryPhotos.filter(p => p.category === filter);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = e => { if (e.key === 'Escape') setLightbox(null); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox]);

  return (
    <div style={{ paddingTop: '40px' }}>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span className="current">Our Work</span>
          </div>
          <h1>Our <span style={{ color: 'var(--accent)' }}>Work</span></h1>
          <p className="page-hero-subtitle">A look at recent projects across the Okanagan — from residential heating and electrical to commercial buildouts and equipment service. Real jobs, real craftsmanship, since 1983.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {galleryCategories.map(cat => (
              <button
                key={cat}
                className={`gallery-filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {photos.map((p, i) => (
              <button
                key={p.src}
                className="gallery-tile"
                onClick={() => setLightbox(p)}
                aria-label={`View ${p.title}`}
              >
                <img src={p.src} alt={p.alt} loading="lazy" />
                <div className="gallery-tile-overlay">
                  <div className="gallery-tile-category">{p.category}</div>
                  <div className="gallery-tile-title">{p.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '16px' }}>Want Work Like This for Your Property?</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 32px', fontSize: '1.05rem' }}>
            Whether it's a furnace replacement, an electrical upgrade, or a full commercial buildout, our team brings 44+ years of Okanagan experience to every job.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:2505494444" className="btn btn-primary"><FluentEmoji name="phone" size={18} /> Call 250-549-4444</a>
            <Link to="/contact" className="btn btn-outline">Request a Quote</Link>
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close"><X size={20} /></button>
          <img className="lightbox-img" src={lightbox.src} alt={lightbox.alt} onClick={e => e.stopPropagation()} />
          <div className="lightbox-caption">{lightbox.title}</div>
        </div>
      )}
    </div>
  )
}
