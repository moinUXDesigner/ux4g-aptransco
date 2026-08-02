import PageHeader from '../components/PageHeader'

const BOARD = [
  { name: 'Sri K. Vijayanand, IAS', role: 'Chairman & Managing Director' },
  { name: 'Sri M. Ravi Chandra, IAS', role: 'Director (Finance)' },
  { name: 'Sri B. Sankara Rao', role: 'Director (Transmission)' },
]

const AWARDS = [
  { title: 'National Award for Excellence in Transmission Reliability', year: '2025' },
  { title: 'Digital India Award — Grid Monitoring Innovation', year: '2024' },
  { title: 'ISO 9001:2015 Certification — SLDC Operations', year: '2023' },
]

export default function About() {
  return (
    <main id="main-content">
      <PageHeader
        title="About APTRANSCO"
        subtitle="Transmission Corporation of Andhra Pradesh Limited — the backbone of the state's power grid."
      />

      <section className="ux4g-container ux4g-py-xl">
        <h2 className="ux4g-heading-s-strong ux4g-mb-s">Who we are</h2>
        <p className="ux4g-body-m-default">
          APTRANSCO owns and operates the intra-state transmission network of
          Andhra Pradesh — 400kV, 220kV and 132kV lines and substations — that
          carries power from generation sources to the state&apos;s
          distribution companies. Incorporated as a company wholly owned by
          the Government of Andhra Pradesh, it functions as the State
          Transmission Utility (STU) under the Electricity Act, 2003.
        </p>
      </section>

      <section id="vision" className="ux4g-container ux4g-py-xl">
        <div className="ux4g-grid ux4g-gutter-l ux4g-grid-cols-1 ux4g-grid-cols-md-2">
          <div className="ux4g-card ux4g-card-outline ux4g-card-vertical">
            <div className="ux4g-card-body">
              <p className="ux4g-title-m-strong ux4g-mb-s">Vision</p>
              <p className="ux4g-body-m-default ux4g-mb-none">
                To be a world-class transmission utility delivering reliable,
                efficient and quality power transmission across Andhra
                Pradesh.
              </p>
            </div>
          </div>
          <div className="ux4g-card ux4g-card-outline ux4g-card-vertical">
            <div className="ux4g-card-body">
              <p className="ux4g-title-m-strong ux4g-mb-s">Mission</p>
              <p className="ux4g-body-m-default ux4g-mb-none">
                Strengthen and expand the transmission network, ensure grid
                security, and enable open access with transparency and
                accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="board" className="ux4g-container ux4g-py-xl">
        <h2 className="ux4g-heading-s-strong ux4g-mb-m">Board of Directors</h2>
        <ul className="ux4g-list ux4g-list-default ux4g-list-l">
          {BOARD.map((member) => (
            <li className="ux4g-list-item" key={member.name}>
              <div className="ux4g-list-item-row">
                <span className="ux4g-list-item-start">
                  <span className="ux4g-badge-icon-primary" aria-hidden="true">
                    <span className="ux4g-icon-outlined">person</span>
                  </span>
                  <span>
                    <p className="ux4g-label-l-strong ux4g-mb-none">{member.name}</p>
                    <p className="ux4g-body-s-default ux4g-mb-none">{member.role}</p>
                  </span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="awards" className="ux4g-container ux4g-py-xl">
        <h2 className="ux4g-heading-s-strong ux4g-mb-m">Awards &amp; Recognition</h2>
        <div className="ux4g-grid ux4g-gutter-l ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-3">
          {AWARDS.map((award) => (
            <div key={award.title} className="ux4g-card ux4g-card-outline ux4g-card-vertical">
              <div className="ux4g-card-body">
                <span className="ux4g-tag-outline-primary ux4g-tag-s">{award.year}</span>
                <p className="ux4g-body-m-default ux4g-mt-s ux4g-mb-none">{award.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="csr" className="ux4g-container ux4g-py-xl">
        <h2 className="ux4g-heading-s-strong ux4g-mb-s">CSR Initiatives</h2>
        <p className="ux4g-body-m-default ux4g-mb-none">
          APTRANSCO supports rural electrification outreach, skill-development
          programmes for linemen and technicians, and environmental
          stewardship around right-of-way corridors across the state.
        </p>
      </section>
    </main>
  )
}
