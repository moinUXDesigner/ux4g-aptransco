import PageHeader from '../components/PageHeader'
import reports from '../data/reports.json'

export default function Reports() {
  return (
    <main id="main-content">
      <PageHeader
        title="Reports & Documents"
        subtitle="Technical manuals, regulatory orders, financial statements and power sector analyses."
      />

      <section className="ux4g-container ux4g-py-xl">
        <ul className="ux4g-list ux4g-list-default ux4g-list-l">
          {reports.map((report) => (
            <li className="ux4g-list-item" key={report.id}>
              <div className="ux4g-list-item-row">
                <span className="ux4g-list-item-start ux4g-d-flex ux4g-inline-gap-m ux4g-ai-center">
                  <span className="ux4g-badge-icon-neutral" aria-hidden="true">
                    <span className="ux4g-icon-outlined">description</span>
                  </span>
                  <span>
                    <p className="ux4g-label-l-strong ux4g-mb-none">{report.title}</p>
                    <p className="ux4g-body-s-default ux4g-mb-none">
                      {report.category} · {report.date} · {report.size}
                    </p>
                  </span>
                </span>
                <span className="ux4g-list-item-end">
                  <button
                    type="button"
                    aria-label={`Download ${report.title}`}
                    className="ux4g-icon-btn ux4g-icon-btn-outline-primary ux4g-icon-btn-sm"
                  >
                    <span className="ux4g-icon-outlined" aria-hidden="true">download</span>
                  </button>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
