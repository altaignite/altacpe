import { ArrowRight, Menu, Search, LockKeyhole, ShieldCheck, GraduationCap, Building2, BadgeCheck } from 'lucide-react'

const heroImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2466-OL1H7q5dUWihwuqs4l94sT9TYXoSQW.jpeg'

function BrandMark() {
  return (
    <div className="brand-mark">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3A3E0E46-0426-4EDF-AC8F-CA8B2F7C05B4-tI1IJvQICyfqpm0QuX0L8K2t3XcM8j.png"
        alt="Alta Professional Accreditation"
      />
    </div>
  )
}

function Header() {
  return (
    <header className="site-header">
      <div className="brand-wrap">
        <BrandMark />
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
      <section className="hero-image" aria-label="Alta Professional Accreditation">
        <img src={heroImage} alt="Professional learning session" />
      </section>
      <section className="intro-section">
        <p className="eyebrow">Private continuing professional education body</p>
        <h1>Raise the standard<br />of professional learning.</h1>
        <p className="lead">Alta Professional Accreditation accredits training institutions and providers that deliver credible, relevant, and measurable continuing professional education.</p>
        <a className="text-link" href="#about">Discover Alta <ArrowRight aria-hidden="true" /></a>
        <a className="contact-button" href="#contact">Become accredited</a>
      </section>
      <section className="benefits-section" id="about">
        <p className="eyebrow eyebrow-dark">What we do</p>
        <h2>Trusted learning.<br />Recognised standards.</h2>
        <div className="benefit-grid">
          <Benefit title="Accredit providers" icon={<Building2 aria-hidden="true" />}>
            We evaluate training institutions and providers against clear standards for quality, governance, learner support, and delivery.
          </Benefit>
          <Benefit title="Support professionals" icon={<GraduationCap aria-hidden="true" />}>
            We help organisations offer continuing professional education that keeps people current, capable, and ready for what is next.
          </Benefit>
          <Benefit title="Recognise quality" icon={<BadgeCheck aria-hidden="true" />}>
            Our accreditation gives learners and employers confidence in the value and integrity of approved learning experiences.
          </Benefit>
        </div>
      </section>
      <section className="standards-section" id="contact">
        <div className="standards-icon"><ShieldCheck aria-hidden="true" /></div>
        <div>
          <p className="eyebrow">For training institutions &amp; providers</p>
          <h2>Build trust through accreditation.</h2>
          <p>Start a conversation about your organisation, your programmes, and the standard you want to set.</p>
          <a className="contact-button contact-button-dark" href="mailto:hello@alta.ac">Talk to Alta <ArrowRight aria-hidden="true" /></a>
        </div>
      </section>
      <footer className="site-footer"><span>Alta Professional Accreditation</span><span>Continuing professional education</span></footer>
    </main>
  )
}
