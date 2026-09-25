import { ButtonLink } from '@/components/ui/button'
import Image from 'next/image'
import { ArrowRight, BookOpenCheck, Check } from 'lucide-react'

const APP_URL = 'https://app.altacpe.com'

export default function Page() {
  return (
    <main>
      <section className="hero-section" id="home" aria-labelledby="hero-heading">
        <div className="hero-image">
          <Image src="/images/professional-learning-hero.png" alt="Instructor and adult learners discussing course materials during a professional training session" fill sizes="(max-width: 700px) 100vw, 96vw" priority />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Alta Professional Accreditation</p>
          <h1 id="hero-heading">Become an accredited<br />CPE provider.</h1>
          <p className="lead">Alta Professional Accreditation helps training organisations and providers demonstrate their CPE offer against clear standards, from free provider approval to course accreditation.</p>
          <ul className="hero-offer-details"><li>For training providers</li><li>Free provider approval</li><li>Pay-per-course options</li></ul>
          <div className="hero-actions">
            <ButtonLink variant="inverse" href={APP_URL}>Start free provider approval <ArrowRight aria-hidden="true" /></ButtonLink>
          </div>
        </div>
      </section>

      <section className="provider-proof section-wrap" aria-labelledby="provider-proof-heading">
        <figure className="provider-proof-visual">
          <Image src="/images/provider-accreditation-review.png" alt="Two training professionals reviewing course materials together" fill sizes="(max-width: 700px) 100vw, 42vw" priority />
        </figure>
        <div className="provider-proof-copy">
          <p className="eyebrow">CPE accreditation</p><h2 id="provider-proof-heading">Give your professional learning the recognition it deserves.</h2><p>Alta Professional Accreditation helps turn the quality behind your programmes into a clearer, more confident case for accreditation.</p>
          <ul className="check-list"><li><Check aria-hidden="true" />Show how your learning meets a recognised standard</li><li><Check aria-hidden="true" />Give learners and partners more confidence</li><li><Check aria-hidden="true" />Start with the route that fits your provision</li></ul>
          <ButtonLink href={APP_URL}>Start free provider approval <ArrowRight aria-hidden="true" /></ButtonLink>
        </div>
      </section>

      <section className="route-options section-wrap" aria-labelledby="route-options-heading">
        <figure className="route-visual"><Image src="/images/standards-improvement.png" alt="Training professionals discussing their learning provision" fill sizes="(max-width: 700px) 100vw, 42vw" /></figure>
        <div className="route-copy"><p className="eyebrow">Start with the right route</p><h2 id="route-options-heading">Choose the accreditation route that fits your provision.</h2><p>With Alta Professional Accreditation, whether you are preparing your organisation or a specific course, you can begin with the route that gets you moving.</p><ul><li><span>01</span><div><strong>Free provider approval</strong><small>Begin with your organisation and its learning offer.</small></div></li><li><span>02</span><div><strong>Pay per course</strong><small>Bring forward priority programmes for accreditation.</small></div></li><li><span>03</span><div><strong>Provider support</strong><small>Understand what to prepare before you apply.</small></div></li></ul><ButtonLink href={APP_URL}>Start free provider approval <ArrowRight aria-hidden="true" /></ButtonLink></div>
      </section>

      <section className="standards-overview" aria-labelledby="standards-overview-heading"><div className="section-wrap">
        <div className="standards-overview-heading"><p className="eyebrow">What we look for</p><h2 id="standards-overview-heading">Know what to prepare before you apply.</h2><p>Alta Professional Accreditation assesses the areas that show your organisation can deliver credible professional education.</p></div>
        <div className="standards-framework">
          <div className="standards-capability-grid">
            <article><Image src="/images/standards-learning-quality.png" alt="Trainer leading a professional learning workshop" fill sizes="(max-width: 700px) 100vw, 33vw" /><div><p className="standards-card-label">01</p><h3>Learning quality</h3><p>Relevant programmes with clear learning outcomes.</p></div></article><article><Image src="/images/standards-governance.png" alt="Professionals reviewing governance documents" fill sizes="(max-width: 700px) 100vw, 33vw" /><div><p className="standards-card-label">02</p><h3>Governance</h3><p>Reliable structures and responsible provider practice.</p></div></article><article><Image src="/images/standards-learner-support.png" alt="Professional providing individual learner support" fill sizes="(max-width: 700px) 100vw, 33vw" /><div><p className="standards-card-label">03</p><h3>Learner support</h3><p>Support that helps professionals get value from learning.</p></div></article><article><Image src="/images/standards-delivery.png" alt="Presenter delivering a hybrid learning session" fill sizes="(max-width: 700px) 100vw, 33vw" /><div><p className="standards-card-label">04</p><h3>Delivery</h3><p>Thoughtful learning experiences across every format.</p></div></article><article><Image src="/images/standards-evidence.png" alt="Professional reviewing course evaluation materials" fill sizes="(max-width: 700px) 100vw, 33vw" /><div><p className="standards-card-label">05</p><h3>Evidence</h3><p>A clear view of how your approach works in practice.</p></div></article><article><Image src="/images/standards-improvement.png" alt="Team discussing programme improvements" fill sizes="(max-width: 700px) 100vw, 33vw" /><div><p className="standards-card-label">06</p><h3>Improvement</h3><p>A practical basis for growing your learning offer.</p></div></article>
          </div>
        </div>
        <div className="standards-action"><ButtonLink href={APP_URL}>Start free provider approval <ArrowRight aria-hidden="true" /></ButtonLink></div>
      </div></section>

      <section className="provider-journey section-wrap" aria-labelledby="journey-heading"><div className="journey-panel"><div className="section-intro journey-intro"><p className="eyebrow">A clear next step</p><h2 id="journey-heading">From first conversation to a credible accreditation route.</h2><p>With Alta Professional Accreditation, you will know where to start, what to prepare and how to move your application forward.</p></div><ol><li><span>01</span><div><h3>Tell us about your provision</h3><p>Share your learning offer, audience and accreditation goals.</p></div></li><li><span>02</span><div><h3>Choose your route</h3><p>Start with provider approval or focus on priority courses.</p></div></li><li><span>03</span><div><h3>Prepare with purpose</h3><p>Use the standards to focus your application.</p></div></li><li><span>04</span><div><h3>Submit with confidence</h3><p>Take the next step towards recognised professional learning.</p></div></li></ol><div className="journey-action"><ButtonLink href={APP_URL}>Start free provider approval <ArrowRight aria-hidden="true" /></ButtonLink></div></div></section>

      <section className="provider-cta" aria-labelledby="provider-cta-heading"><div className="provider-cta-inner section-wrap"><div><p className="eyebrow">Ready when you are</p><h2 id="provider-cta-heading">Start your free provider approval today.</h2><p>Take the first practical step with Alta Professional Accreditation towards accreditation for your organisation or priority courses.</p></div><div className="provider-cta-actions"><ul><li><Check aria-hidden="true" />Free provider approval</li><li><Check aria-hidden="true" />Clear accreditation routes</li><li><Check aria-hidden="true" />Support for training providers</li></ul><ButtonLink variant="inverse" href={APP_URL}>Start free provider approval <ArrowRight aria-hidden="true" /></ButtonLink></div></div></section>
    </main>
  )
}
