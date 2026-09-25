import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Page() {
  return (
    <main>
      <section className="hero-section" id="home" aria-labelledby="hero-heading">
        <div className="hero-image">
          <Image src="/images/professional-learning-hero.png" alt="Instructor and adult learners discussing course materials during a professional training session" fill sizes="(max-width: 700px) 100vw, 96vw" priority />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Alta Professional Accreditation</p>
          <h1 id="hero-heading">Raise the standard.<br />Inspire better learning.</h1>
          <p className="lead">Accreditation for institutions and training providers committed to quality continuing professional education.</p>
          <div className="hero-actions">
            <a className="contact-button" href="/apply">Apply for accreditation <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    </main>

  )
}
