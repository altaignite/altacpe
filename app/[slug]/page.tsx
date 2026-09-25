import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ChevronDown } from 'lucide-react'

const pages = {
  accreditation: {
    title: 'Provider accreditation',
    description: 'Accreditation for training institutions and providers delivering continuing professional education.',
    content: <>
      <p>Alta Professional Accreditation assesses training institutions and education providers with a focus on learning quality, governance, learner support, and delivery.</p>
      <section id="quality"><h2>Recognising learning quality</h2><p>Provider accreditation helps learners and employers understand a provider’s commitment to credible, relevant, and measurable continuing professional education.</p></section>
      <Link className="text-link" href="/standards">Explore assessment standards <ArrowRight aria-hidden="true" /></Link>
    </>,
  },
  standards: {
    title: 'Assessment standards',
    description: 'Explore the four areas of provider assessment.',
    content: <>
      <p>Our provider assessment focuses on the following areas. Contact our team to discuss the requirements relevant to your institution and programmes.</p>
      <section id="learning-quality"><h2>Learning quality</h2><p>The quality and relevance of continuing professional education.</p></section>
      <section id="governance"><h2>Provider governance</h2><p>The governance of training institutions and education providers.</p></section>
      <section id="learner-support"><h2>Learner support</h2><p>Support for the people taking part in professional learning.</p></section>
      <section id="education-delivery"><h2>Education delivery</h2><p>How providers deliver their professional education programmes.</p></section>
      <Link className="text-link" href="/apply">Discuss your institution <ArrowRight aria-hidden="true" /></Link>
    </>,
  },
  apply: {
    title: 'Start an accreditation enquiry',
    description: 'Discuss provider accreditation with Alta Professional Accreditation.',
    content: <>
      <p>Tell us about your institution and the programmes you deliver. Our team can discuss assessment requirements and how to begin an application.</p>
      <p>In your enquiry, include your organisation’s name, a brief description of your programmes, and the best way to contact you.</p>
      <a className="text-link" href="mailto:hello@alta.ac?subject=Provider%20accreditation%20enquiry">Email your accreditation enquiry <ArrowRight aria-hidden="true" /></a>
    </>,
  },
  faq: {
    title: 'Frequently asked questions',
    description: 'Answers to common questions about provider accreditation and getting started.',
    content: <div className="faq-section info-faq">
      <details><summary>Who is our accreditation for?<ChevronDown aria-hidden="true" /></summary><p>Alta Professional Accreditation accredits training institutions and providers delivering continuing professional education.</p></details>
      <details><summary>What do we assess?<ChevronDown aria-hidden="true" /></summary><p>Our assessment covers learning quality, provider governance, learner support, and education delivery. <Link href="/standards">Explore assessment standards.</Link></p></details>
      <details><summary>How do I start an accreditation enquiry?<ChevronDown aria-hidden="true" /></summary><p><Link href="/apply">Start an enquiry</Link> to discuss your organisation, your programmes, and how to begin an application.</p></details>
    </div>,
  },
  about: {
    title: 'About Alta Professional Accreditation',
    description: 'Our role in continuing professional education.',
    content: <>
      <p>Alta Professional Accreditation is a private continuing professional education body focused on accrediting training institutions and providers.</p>
      <p>We assess providers against standards for quality, governance, learner support, and delivery, helping organisations offer credible, relevant, and measurable professional education.</p>
      <Link className="text-link" href="/accreditation">Learn about provider accreditation <ArrowRight aria-hidden="true" /></Link>
    </>,
  },
  cpe: {
    title: 'Continuing professional education',
    description: 'Understand CPE and its role in professional learning.',
    content: <>
      <p>Continuing professional education (CPE) is learning that helps people maintain and develop the knowledge and skills they use in their work. It can include courses, workshops, and other structured learning activities.</p>
      <section id="professionals"><h2>CPE for professionals</h2><p>Professional learning helps people keep their knowledge and skills relevant to their work. Alta Professional Accreditation focuses on the institutions and providers delivering that learning.</p></section>
      <Link className="text-link" href="/accreditation">Understand provider accreditation <ArrowRight aria-hidden="true" /></Link>
    </>,
  },
  contact: {
    title: 'Contact our team',
    description: 'Speak to Alta Professional Accreditation.',
    content: <>
      <p>For questions about Alta Professional Accreditation, provider assessment, or continuing professional education, email our team.</p>
      <a className="text-link" href="mailto:hello@alta.ac">hello@alta.ac <ArrowRight aria-hidden="true" /></a>
      <section><h2>Accreditation enquiries</h2><p>Interested in accreditation for your institution? <Link href="/apply">Find out how to start an enquiry.</Link></p></section>
    </>,
  },
}

type PageSlug = keyof typeof pages
type Props = { params: Promise<{ slug: string }> }

function getPage(slug: string) {
  if (!Object.hasOwn(pages, slug)) notFound()
  return pages[slug as PageSlug]
}

export const dynamicParams = false
export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getPage((await params).slug)
  return { title: `${page.title} | Alta Professional Accreditation`, description: page.description }
}

export default async function InformationPage({ params }: Props) {
  const page = getPage((await params).slug)
  return <main className="info-page page-shell">
    <Link className="info-back" href="/">Home</Link>
    <p className="eyebrow">Alta Professional Accreditation</p>
    <h1>{page.title}</h1>
    <div className="info-content">{page.content}</div>
  </main>
}
