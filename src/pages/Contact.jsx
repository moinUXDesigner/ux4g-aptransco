import { useState } from 'react'
import PageHeader from '../components/PageHeader'

const CONTACT_CARDS = [
  { icon: 'call', title: 'Toll Free', value: '1800 4252 3334', sub: '24x7 Power System Support' },
  { icon: 'mail', title: 'Email', value: 'info@aptransco.gov.in', sub: 'General Enquiries' },
  { icon: 'location_on', title: 'Address', value: 'APTRANSCO, Vidyut Soudha', sub: 'Hyderabad, Telangana – 500082' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main id="main-content">
      <PageHeader title="Contact Us" subtitle="Get in touch with APTRANSCO." />

      <section className="ux4g-container ux4g-py-xl">
        <div className="ux4g-row ux4g-gutter-m ux4g-mb-xl">
          {CONTACT_CARDS.map((card) => (
            <div key={card.title} className="ux4g-col-12 ux4g-col-sm-6 ux4g-col-lg-4 ux4g-card ux4g-card-outline ux4g-card-vertical">
              <div className="ux4g-card-body ux4g-d-flex ux4g-inline-gap-m ux4g-ai-center">
                <span className="ux4g-badge-icon-primary" aria-hidden="true">
                  <span className="ux4g-icon-outlined">{card.icon}</span>
                </span>
                <div>
                  <p className="ux4g-label-m-strong ux4g-mb-none">{card.title}</p>
                  <p className="ux4g-body-m-default ux4g-mb-none">{card.value}</p>
                  <p className="ux4g-body-xs-default ux4g-mb-none">{card.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ux4g-card ux4g-card-outline ux4g-card-vertical" style={{ maxWidth: 640 }}>
          <div className="ux4g-card-body">
            <p className="ux4g-title-m-strong ux4g-mb-m">Send us a message</p>

            {submitted ? (
              <p className="ux4g-tag-filled-success ux4g-tag-s">
                Thank you — your message has been recorded.
              </p>
            ) : (
              <form className="ux4g-d-flex ux4g-flex-column ux4g-gap-m" onSubmit={handleSubmit}>
                <div className="ux4g-input-container ux4g-input-md">
                  <label className="ux4g-label-m-default" htmlFor="name">Full name</label>
                  <div className="ux4g-input">
                    <input className="ux4g-input-input" id="name" type="text" required placeholder="Your name" />
                  </div>
                </div>

                <div className="ux4g-input-container ux4g-input-md">
                  <label className="ux4g-label-m-default" htmlFor="email">Email address</label>
                  <div className="ux4g-input">
                    <input className="ux4g-input-input" id="email" type="email" required placeholder="you@example.com" />
                  </div>
                </div>

                <div className="ux4g-textarea-container ux4g-textarea-md ux4g-textarea-default">
                  <label className="ux4g-label-m-default" htmlFor="message">Message</label>
                  <div className="ux4g-textarea">
                    <textarea
                      className="ux4g-textarea-input"
                      id="message"
                      required
                      maxLength={500}
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <button type="submit" className="ux4g-btn-primary ux4g-btn-md">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
