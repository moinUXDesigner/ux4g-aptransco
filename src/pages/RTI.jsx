import PageHeader from '../components/PageHeader'

const OFFICERS = [
  { role: 'Public Information Officer', name: 'Sri N. Ramesh', email: 'pio@aptransco.gov.in' },
  { role: 'Appellate Authority', name: 'Smt. K. Lalitha', email: 'appellate@aptransco.gov.in' },
]

export default function RTI() {
  return (
    <main id="main-content">
      <PageHeader
        title="Right to Information"
        subtitle="Access information under the Right to Information Act, 2005."
      />

      <section className="ux4g-container ux4g-py-xl">
        <p className="ux4g-body-m-default ux4g-mb-l">
          Under the Right to Information Act, 2005, citizens can request
          information about APTRANSCO&apos;s functioning, projects and
          decisions. Applications can be submitted online or in writing to the
          designated Public Information Officer.
        </p>

        <h2 className="ux4g-heading-s-strong ux4g-mb-m">RTI Officers</h2>
        <ul className="ux4g-list ux4g-list-default ux4g-list-l ux4g-mb-l">
          {OFFICERS.map((officer) => (
            <li className="ux4g-list-item" key={officer.role}>
              <div className="ux4g-list-item-row">
                <span className="ux4g-list-item-start">
                  <span className="ux4g-badge-icon-neutral" aria-hidden="true">
                    <span className="ux4g-icon-outlined">badge</span>
                  </span>
                  <span>
                    <p className="ux4g-label-l-strong ux4g-mb-none">{officer.name}</p>
                    <p className="ux4g-body-s-default ux4g-mb-none">
                      {officer.role} · {officer.email}
                    </p>
                  </span>
                </span>
              </div>
            </li>
          ))}
        </ul>

        <button type="button" className="ux4g-btn-primary ux4g-btn-md">
          <span className="ux4g-icon-outlined ux4g-fs-20" aria-hidden="true">description</span>
          File an RTI Application
        </button>
      </section>
    </main>
  )
}
