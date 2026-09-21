import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getMetadata } from '../data/metadata'

export default function PageMetadata() {
  const { pathname } = useLocation()
  useEffect(() => {
    const {title, description} = getMetadata(pathname)
    document.title = title
    document.querySelector('meta[name="description"]').setAttribute('content', description)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = `https://aslanserviceslimited.ca${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`
  }, [pathname])
  return null
}
