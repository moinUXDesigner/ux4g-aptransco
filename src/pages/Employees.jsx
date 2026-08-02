import PageHeader from '../components/PageHeader'

const HR_LINKS = [
  { id: 'salary', icon: 'payments', title: 'Salary Information', desc: 'Payslips, pay scales and allowances.' },
  { id: 'leave', icon: 'event_available', title: 'Leave Policies', desc: 'Casual, earned and medical leave rules.' },
  { id: 'promotions', icon: 'trending_up', title: 'Promotions', desc: 'Promotion cycles and eligibility criteria.' },
  { id: 'medical', icon: 'medical_services', title: 'Medical Benefits', desc: 'Health insurance and reimbursement claims.' },
  { id: 'recruitment', icon: 'work', title: 'Recruitment', desc: 'Current vacancies and application status.' },
  { id: 'training', icon: 'school', title: 'Training', desc: 'Technical and safety training schedules.' },
]

export default function Employees() {
  return (
    <main id="main-content">
      <PageHeader
        title="Employees"
        subtitle="HR services and resources for APTRANSCO staff."
      />

      <section className="ux4g-container ux4g-py-xl">
        <div className="ux4g-grid ux4g-gutter-l ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-3">
          {HR_LINKS.map((link) => (
            <div key={link.id} id={link.id} className="ux4g-card ux4g-card-outline ux4g-card-vertical">
              <div className="ux4g-card-body ux4g-d-flex ux4g-inline-gap-m ux4g-ai-center">
                <span className="ux4g-badge-icon-primary" aria-hidden="true">
                  <span className="ux4g-icon-outlined">{link.icon}</span>
                </span>
                <div>
                  <p className="ux4g-label-l-strong ux4g-mb-none">{link.title}</p>
                  <p className="ux4g-body-s-default ux4g-mb-none">{link.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ux4g-container ux4g-py-xl">
        <div className="ux4g-card ux4g-card-solid ux4g-card-vertical">
          <div className="ux4g-card-body ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-flex-wrap ux4g-gap-m">
            <div>
              <p className="ux4g-title-m-strong ux4g-mb-s">Employee Portal</p>
              <p className="ux4g-body-s-default ux4g-mb-none">
                Sign in with your employee credentials to view payslips, apply
                for leave and access internal applications.
              </p>
            </div>
            <button type="button" className="ux4g-btn-primary ux4g-btn-md">
              <span className="ux4g-icon-outlined ux4g-fs-20" aria-hidden="true">login</span>
              Employee Login
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
