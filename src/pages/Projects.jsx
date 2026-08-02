import PageHeader from '../components/PageHeader'
import projects from '../data/projects.json'

const VOLTAGE_TAG = {
  '400kV': 'ux4g-tag-filled-primary',
  '220kV': 'ux4g-tag-filled-info',
  '132kV': 'ux4g-tag-filled-success',
}

const STATUS_TAG = {
  'In Progress': 'ux4g-tag-outline-primary',
  Planning: 'ux4g-tag-outline-neutral',
}

export default function Projects() {
  return (
    <main id="main-content">
      <PageHeader
        title="Projects"
        subtitle="Transmission network expansion and modernisation projects across Andhra Pradesh."
      />

      <section className="ux4g-container ux4g-py-xl">
        <div className="ux4g-row ux4g-gutter-m ux4g-mb-xl">
          <div className="ux4g-col-12 ux4g-col-sm-6 ux4g-col-lg-4 ux4g-card ux4g-card-solid ux4g-card-vertical">
            <div className="ux4g-card-body">
              <p className="ux4g-label-m-strong ux4g-mb-none">400kV Network</p>
              <p className="ux4g-heading-m-strong ux4g-mb-none">1,842 km</p>
            </div>
          </div>
          <div className="ux4g-col-12 ux4g-col-sm-6 ux4g-col-lg-4 ux4g-card ux4g-card-solid ux4g-card-vertical">
            <div className="ux4g-card-body">
              <p className="ux4g-label-m-strong ux4g-mb-none">220kV Network</p>
              <p className="ux4g-heading-m-strong ux4g-mb-none">4,916 km</p>
            </div>
          </div>
          <div className="ux4g-col-12 ux4g-col-sm-6 ux4g-col-lg-4 ux4g-card ux4g-card-solid ux4g-card-vertical">
            <div className="ux4g-card-body">
              <p className="ux4g-label-m-strong ux4g-mb-none">132kV Network</p>
              <p className="ux4g-heading-m-strong ux4g-mb-none">7,203 km</p>
            </div>
          </div>
        </div>

        <h2 className="ux4g-heading-s-strong ux4g-mb-m">Active Projects</h2>
        <ul className="ux4g-list ux4g-list-default ux4g-list-l">
          {projects.map((project) => (
            <li className="ux4g-list-item" key={project.id}>
              <div className="ux4g-list-item-row">
                <span className="ux4g-list-item-start">
                  <span className="ux4g-d-flex ux4g-flex-column ux4g-gap-none">
                    <span className="ux4g-label-l-strong">{project.title}</span>
                    <span className="ux4g-body-s-default">{project.district} district</span>
                  </span>
                </span>
                <span className="ux4g-list-item-end ux4g-d-flex ux4g-inline-gap-s">
                  <span className={`${VOLTAGE_TAG[project.voltage]} ux4g-tag-s`}>{project.voltage}</span>
                  <span className={`${STATUS_TAG[project.status]} ux4g-tag-s`}>{project.status}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
