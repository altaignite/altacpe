import Link from 'next/link'

const groups = [
  { title: 'Accreditation', links: [
    { href: '/accreditation', label: 'Provider accreditation' },
    { href: '/standards', label: 'Assessment standards' },
    { href: '/apply', label: 'Apply for accreditation' },
  ] },
  { title: 'For providers', links: [
    { href: '/apply', label: 'Start an accreditation enquiry' },
    { href: '/standards', label: 'What we assess' },
    { href: '/faq', label: 'FAQs' },
  ] },
  { title: 'About us', links: [
    { href: '/about', label: 'Our role' },
    { href: '/cpe', label: 'Continuing professional education' },
    { href: '/contact', label: 'Contact us' },
  ] },
  { title: 'Help & contact', links: [
    { href: '/faq', label: 'Frequently asked questions' },
    { href: '/contact', label: 'Contact our team' },
    { href: 'mailto:hello@alta.ac', label: 'Email us' },
  ] },
]

export default function Footer() {
  return (
    <footer className="site-footer page-shell">
      <nav className="footer-accordions" aria-label="Footer navigation">
        {groups.map((group) => (
          <details key={group.title}>
            <summary>{group.title}</summary>
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
    </footer>
  )
}
