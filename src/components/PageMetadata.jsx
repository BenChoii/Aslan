import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { cities } from '../data/cities'
import { services } from '../data/services'

export default function PageMetadata() {
  const { pathname } = useLocation()
  useEffect(() => {
    const [citySlug, serviceSlug] = pathname.split('/').filter(Boolean)
    const city = cities.find(c => c.slug === citySlug)
    const service = services.find(s => s.slug === serviceSlug)
    let title = 'Repairs & Maintenance in Vernon, BC | Aslan Services'
    let description = 'Electrical, plumbing, heating and refrigeration repairs and maintenance in Vernon and the Okanagan. Contractor referrals welcome. Call 250-549-4444.'
    if (city) {
      title = `${service ? service.name : 'Repairs & Maintenance'} in ${city.name}, BC | Aslan Services`
      description = `Call Aslan Services for ${service ? service.name.toLowerCase() : 'electrical, plumbing, heating and refrigeration repairs and maintenance'} in ${city.name} and surrounding areas. Discuss service availability: 250-549-4444.`
    } else if (pathname === '/contractor-referrals') {
      title = 'Contractor Repair & Maintenance Referrals | Aslan Services, Vernon'
      description = 'Busy with installations? Refer repair and maintenance enquiries to Aslan Services in Vernon and the Okanagan. Call to discuss availability and the handoff.'
    } else if (pathname === '/contact') title = 'Book a Repair or Refer a Service Call | Aslan Services'
    else if (pathname === '/about') title = 'About Our Repair & Maintenance Team | Aslan Services'
    else if (pathname === '/gallery') title = 'Our Work | Aslan Services, Vernon'
    document.title = title
    document.querySelector('meta[name="description"]').setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = `https://aslanserviceslimited.ca${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`
  }, [pathname])
  return null
}
