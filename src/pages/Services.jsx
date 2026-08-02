import PageHeader from '../components/PageHeader'

const SERVICES = [
  {
    id: 'open-access',
    icon: 'lock_open',
    title: 'Open Access',
    description:
      'Apply for short-term or long-term open access to the transmission network for power procurement.',
  },
  {
    id: 'bulk-load',
    icon: 'power',
    title: 'Bulk Load Connectivity',
    description:
      'Request connectivity for bulk industrial or institutional loads to the transmission grid.',
  },
  {
    id: 'generator',
    icon: 'bolt',
    title: 'Generator Connectivity',
    description:
      'Apply for evacuation connectivity for new generation capacity, including renewable projects.',
  },
  {
    id: 'vendor',
    icon: 'groups',
    title: 'Vendor Registration',
    description:
      'Register as an approved vendor or contractor to participate in APTRANSCO procurement.',
  },
  {
    id: 'complaints',
    icon: 'feedback',
    title: 'Complaint Redressal',
    description: 'Raise and track grievances related to transmission services.',
  },
  {
    id: 'training',
    icon: 'school',
    title: 'Training Programmes',
    description: 'Technical and safety training programmes for staff and contractors.',
  },
]

export default function Services() {
  return (
    <main id="main-content">
      <PageHeader
        title="Services"
        subtitle="Open access, connectivity, vendor and support services offered by APTRANSCO."
      />

      <section className="ux4g-container ux4g-py-xl">
        <div className="ux4g-grid ux4g-gutter-l ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-3">
          {SERVICES.map((service) => (
            <div key={service.id} id={service.id} className="ux4g-card ux4g-card-outline ux4g-card-vertical">
              <div className="ux4g-card-body">
                <span className="ux4g-badge-icon-primary ux4g-mb-s" aria-hidden="true">
                  <span className="ux4g-icon-outlined">{service.icon}</span>
                </span>
                <p className="ux4g-title-m-strong ux4g-mb-s">{service.title}</p>
                <p className="ux4g-body-s-default ux4g-mb-m">{service.description}</p>
              </div>
              <div className="ux4g-card-footer">
                <button type="button" className="ux4g-btn-outline-primary ux4g-btn-sm">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
