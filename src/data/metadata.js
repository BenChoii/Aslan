import { getIndustry } from './industries.js'
import { cities } from './cities.js'
import { services } from './services.js'

export function getMetadata(pathname) {
    const [citySlug, serviceSlug] = pathname.split('/').filter(Boolean)
    const city = cities.find(c => c.slug === citySlug)
    const service = services.find(s => s.slug === serviceSlug)
    let title = 'Repairs & Maintenance in Vernon, BC | Aslan Services'
    let description = 'Electrical, plumbing, heating and refrigeration repairs and maintenance in Vernon and the Okanagan. Contractor referrals welcome. Call 250-549-4444.'
    const industry = citySlug === 'industries' ? getIndustry(serviceSlug) : null
    if (industry) {
      title = `${industry.name} | Vernon & Okanagan | Aslan Services`
      description = industry.intro
    } else if (pathname === '/industries') {
      title = 'Commercial Equipment Repairs by Industry | Aslan Services'
      description = 'Repair and maintenance for grocery, bakery, restaurant, laundry, dry-cleaning and hospitality equipment. Based in Vernon. Call to discuss service availability.'
    } else if (city) {
      title = `${service ? service.name : 'Repairs & Maintenance'} in ${city.name}, BC | Aslan Services`
      description = `Call Aslan Services for ${service ? service.name.toLowerCase() : 'electrical, plumbing, heating and refrigeration repairs and maintenance'} in ${city.name} and surrounding areas. Discuss service availability: 250-549-4444.`
    } else if (pathname === '/contractor-referrals') {
      title = 'Contractor Repair & Maintenance Referrals | Aslan Services, Vernon'
      description = 'Busy with installations? Refer repair and maintenance enquiries to Aslan Services in Vernon and the Okanagan. Call to discuss availability and the handoff.'
    } else if (pathname === '/contact') title = 'Book a Repair or Refer a Service Call | Aslan Services'
    else if (pathname === '/about') title = 'About Our Repair & Maintenance Team | Aslan Services'
    else if (pathname === '/gallery') title = 'Our Work | Aslan Services, Vernon'
    return { title, description, canonical: `https://aslanserviceslimited.ca${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}` }
}
