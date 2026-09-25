import { ArrowRight, ChevronDown, Menu, Search, LockKeyhole, Globe2, HandCoins } from 'lucide-react'

const heroImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2466-OL1H7q5dUWihwuqs4l94sT9TYXoSQW.jpeg'

function BrandMark() {
  return (
    <div className="brand-mark" aria-label="Nedbank Wealth">
      <svg viewBox="0 0 88 88" aria-hidden="true">
        <path d="M14 25 36 10l19 14 18-14v42L51 67 34 55 14 68V25Z" />
        <path d="M14 25 36 40l19-16 18 14M34 55V39M51 67V48" />
      </svg>
    </div>
  )
}

function Header() {
  return (
    <header className="site-header">
      <div className="brand-wrap">
        <BrandMark />
        <div className="brand-name">WEALTH <ChevronDown aria-hidden="true" /></div>
      </div>
      <div className="header-actions">
        <button aria-label="Search"><Search /></button>
        <button aria-label="Secure login"><LockKeyhole /></button>
        <button className="menu-button" aria-label="Open menu"><Menu /></button>
      </div>
    </header>
  )
}

function Benefit({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <article className="benefit">
      <div className="benefit-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  )
}

export default function Page() {
  return (
    <main className="page-shell">
      <Header />
      <section className="hero-image" aria-label="International Focus Solution">
        <img src={heroImage} alt="Businessman seated in a private aircraft using his phone" />
      </section>
      <section className="intro-section">
        <h1>International Focus<br />Solution</h1>
        <p className="lead">A fully integrated, multicurrency international banking and investment solution with digital access, a debit card, and jurisdictional reach in the Isle of Man, London, and Jersey.</p>
        <p className="minimum-label">Minimum investment</p>
        <p className="minimum-value">R500 000</p>
        <a className="text-link" href="#rates">View rates &amp; fees <ArrowRight aria-hidden="true" /></a>
        <a className="contact-button" href="#contact">Get in touch</a>
      </section>
      <section className="benefits-section" id="contact">
        <h2>What you get</h2>
        <Benefit title="Global banking" icon={<Globe2 aria-hidden="true" />}>
          Get an optional Visa debit card that is widely accepted worldwide. Once your Focus Solution is open you will be able to transact via the Nedbank Private Wealth International app.
        </Benefit>
        <Benefit title="International lending" icon={<HandCoins aria-hidden="true" />}>
          Portfolio backed lending in GBP, USD, or EUR. As well as UK property mortgages available in a range of repayment options, offering fixed and variable interest rates.
        </Benefit>
      </section>
      <span id="rates" className="anchor-target" />
    </main>
  )
}
