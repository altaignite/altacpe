import { ArrowRight } from 'lucide-react'


const heroImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2466-OL1H7q5dUWihwuqs4l94sT9TYXoSQW.jpeg'

export default function Page() {
  return (
    <main>
      <section className="hero-section" id="home" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow">Alta Professional Accreditation</p>
          <h1 id="hero-heading">Set the standard for <span>professional learning.</span></h1>
          <p className="lead">Accreditation for training providers committed to credible, relevant, and measurable continuing professional education.</p>
          <div className="hero-actions">
            <a className="contact-button" href="/apply">Apply for accreditation <ArrowRight aria-hidden="true" /></a>
            <a className="text-link" href="/standards">Explore assessment standards <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Professional learning session" fetchPriority="high" />
        </div>
      </section>
    </main>

  )
}
