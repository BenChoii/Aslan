export default function GoogleMap({ embedUrl, title }) {
  return (
    <div className="map-container">
      <iframe
        src={embedUrl}
        title={title || 'Google Map'}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
