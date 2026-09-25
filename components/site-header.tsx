'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronDown, LockKeyhole, Menu, Search, X } from 'lucide-react'

const navigation = [
  { id: 'cpe', label: 'Understanding CPE', links: [
    { href: '/cpe', label: 'What is continuing education?', description: 'Understand CPE and its role in professional learning.' },
    { href: '/cpe#professionals', label: 'CPE for professionals', description: 'Keep knowledge and skills relevant to your work.' },
    { href: '/accreditation#quality', label: 'Recognising learning quality', description: 'Understand the value of provider accreditation.' },
  ] },
  { id: 'accreditation', label: 'Accreditation', links: [
    { href: '/accreditation', label: 'Provider accreditation', description: 'Accreditation for institutions and education providers.' },
    { href: '/standards', label: 'What we assess', description: 'Explore the four areas of provider assessment.' },
    { href: '/apply', label: 'Start an application enquiry', description: 'Discuss your institution and programmes with our team.' },
  ] },
  { id: 'providers', label: 'Training providers', links: [
    { href: '/accreditation', label: 'Institutions & education providers', description: 'Find out who our accreditation is for.' },
    { href: '/standards', label: 'Assessment requirements', description: 'See the areas considered during assessment.' },
    { href: '/apply', label: 'Discuss your programmes', description: 'Take the first step towards provider accreditation.' },
    { href: '/faq', label: 'Provider FAQs', description: 'Answers to common accreditation questions.' },
  ] },
  { id: 'standards', label: 'Standards & quality', links: [
    { href: '/standards#learning-quality', label: 'Learning quality', description: 'The quality of continuing professional education.' },
    { href: '/standards#governance', label: 'Provider governance', description: 'The governance of training institutions and providers.' },
    { href: '/standards#learner-support', label: 'Learner support', description: 'Support for the people taking part in learning.' },
    { href: '/standards#education-delivery', label: 'Education delivery', description: 'How providers deliver professional education.' },
  ] },
  { id: 'support', label: 'Help & support', links: [
    { href: '/faq', label: 'Frequently asked questions', description: 'Find answers about accreditation and getting started.' },
    { href: '/about', label: 'About us', description: 'Learn about Alta Professional Accreditation.' },
    { href: '/contact', label: 'Contact our team', description: 'Ask a question or discuss your next step.' },
  ] },
]

export default function Header() {
  const [openPanel, setOpenPanel] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpenPanel(null)
    }
    document.addEventListener('pointerdown', closeOutside)
    return () => document.removeEventListener('pointerdown', closeOutside)
  }, [])

  return (
    <header className="site-header" ref={headerRef}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && openPanel) {
          document.getElementById(`nav-toggle-${openPanel}`)?.focus()
          setOpenPanel(null)
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpenPanel(null)
      }}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('a')) setOpenPanel(null)
      }}>
      <div className="header-top">
        <a className="brand-wrap" href="/" aria-label="Alta Professional Accreditation home">
          <div className="brand-mark">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3A3E0E46-0426-4EDF-AC8F-CA8B2F7C05B4-tI1IJvQICyfqpm0QuX0L8K2t3XcM8j.png" alt="Alta Professional Accreditation" />
          </div>
        </a>
        <nav className="audience-nav" aria-label="Top navigation">
          <a href="/accreditation">For training providers</a>
          <a href="/cpe#professionals">For professionals</a>
          <a href="/about">About us</a>
          <a href="/faq">FAQ</a>
        </nav>
        <div className="header-actions">
          <button aria-label="Search"><span className="desktop-action-label">Search</span><Search /></button>
          <button aria-label="Secure login"><span className="desktop-action-label">Log in</span><LockKeyhole /></button>
          <button id="nav-toggle-all" className="menu-button" aria-label={openPanel === 'all' ? 'Close menu' : 'Open menu'} aria-expanded={openPanel === 'all'} aria-controls="all-navigation" onClick={() => setOpenPanel(openPanel === 'all' ? null : 'all')}>
            {openPanel === 'all' ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <nav className="desktop-nav" aria-label="Main navigation">
        <div className="desktop-nav-inner">
          <a href="/">Home</a>
          {navigation.map((group) => (
            <div className="nav-group" key={group.id}>
              <button id={`nav-toggle-${group.id}`} className="nav-trigger" aria-expanded={openPanel === group.id} aria-controls={`nav-panel-${group.id}`} onClick={() => setOpenPanel(openPanel === group.id ? null : group.id)}>
                {group.label}<ChevronDown aria-hidden="true" />
              </button>
              <div className="nav-dropdown" id={`nav-panel-${group.id}`} hidden={openPanel !== group.id}>
                <ul>
                  {group.links.map((link) => <li key={link.href}><a href={link.href}><strong>{link.label}</strong><span>{link.description}</span></a></li>)}
                </ul>
              </div>
            </div>
          ))}
          <a className="nav-apply" href="/apply">Apply for accreditation <ArrowRight aria-hidden="true" /></a>
        </div>
      </nav>
      <nav className="all-navigation" id="all-navigation" aria-label="All navigation" hidden={openPanel !== 'all'}>
        <div className="all-navigation-inner">
          {navigation.map((group) => <section key={group.id}><h2>{group.label}</h2><ul>{group.links.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul></section>)}
          <a className="all-navigation-apply" href="/apply">Apply for accreditation <ArrowRight aria-hidden="true" /></a>
        </div>
      </nav>
    </header>
  )
}
