import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const groups = [
  { title: 'Provider approval', links: [
    { href: 'https://altacpe.com/provider-approval', label: 'Free provider approval' },
    { href: 'https://altacpe.com/provider-eligibility', label: 'Provider eligibility' },
    { href: 'https://altacpe.com/evidence-checklist', label: 'Evidence checklist' },
    { href: 'https://altacpe.com/provider-responsibilities', label: 'Provider responsibilities' },
  ] },
  { title: 'CPE accreditation', links: [
    { href: 'https://altacpe.com/program-accreditation', label: 'Program accreditation' },
    { href: 'https://altacpe.com/certificate-recognition', label: 'Certificate recognition' },
    { href: 'https://altacpe.com/organization-accreditation', label: 'Organization accreditation' },
    { href: 'https://altacpe.com/professional-recognition', label: 'Professional recognition' },
  ] },
  { title: 'Standards', links: [
    { href: 'https://altacpe.com/standards', label: 'CPE quality framework' },
    { href: 'https://altacpe.com/learning-outcomes', label: 'Learning outcomes' },
    { href: 'https://altacpe.com/assessment-standards', label: 'Assessment standards' },
    { href: 'https://altacpe.com/monitoring-renewal', label: 'Monitoring and renewal' },
  ] },
  { title: 'About', links: [
    { href: 'https://altacpe.com/purpose', label: 'Our purpose' },
    { href: 'https://altacpe.com/independence', label: 'Independence' },
    { href: 'https://altacpe.com/governance', label: 'Governance' },
    { href: 'https://altacpe.com/reviewers', label: 'Accreditation reviewers' },
  ] },
  { title: 'Support', links: [
    { href: 'https://altacpe.com/application-guidance', label: 'Application guidance' },
    { href: 'https://altacpe.com/provider-questions', label: 'Provider questions' },
    { href: 'https://altacpe.com/renewals', label: 'Renewals' },
    { href: 'https://altacpe.com/countries', label: 'Country directory A–Z' },
  ] },
  { title: 'Policies', links: [
    { href: 'https://altacpe.com/terms', label: 'Provider terms' },
    { href: 'https://altacpe.com/privacy', label: 'Privacy and data' },
    { href: 'https://altacpe.com/accessibility', label: 'Accessibility' },
    { href: 'https://altacpe.com/complaints-appeals', label: 'Complaints and appeals' },
  ] },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
      <nav className="footer-navigation" aria-label="Footer navigation">
        {groups.map((group) => (
          <section className="footer-navigation-group" key={group.title}>
            <h2>{group.title}</h2>
            <div className="footer-links">
              {group.links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            </div>
          </section>
        ))}
      </nav>
      <nav className="footer-accordions" aria-label="Footer navigation">
        {groups.map((group) => (
          <details key={group.title}>
            <summary>{group.title}<ChevronDown className="footer-chevron" aria-hidden="true" /></summary>
            <div className="footer-links">
              {group.links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            </div>
          </details>
        ))}
      </nav>
      <div className="footer-brand">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3A3E0E46-0426-4EDF-AC8F-CA8B2F7C05B4-tI1IJvQICyfqpm0QuX0L8K2t3XcM8j.png" alt="Alta Professional Accreditation" />
        <p>Alta Professional Accreditation is a private accreditation body for continuing professional education (CPE). We assess training institutions and education providers against standards covering learning quality, governance, learner support, and programme delivery. Our work aims to strengthen confidence in professional education and help providers demonstrate their commitment to relevant, well-structured learning.</p>
        <p>This website provides general information about our role, accreditation services, and assessment approach. For guidance on your institution’s eligibility, application requirements, or the scope of accreditation, please <Link href="/contact">contact our team</Link>.</p>
      </div>
      </div>
    </footer>
  )
}
