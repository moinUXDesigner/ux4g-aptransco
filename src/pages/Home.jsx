import { Link } from 'react-router-dom'
import notices from '../data/notices.json'

const QUICK_ACTIONS = [
  { icon: 'description', title: 'Tenders', subtitle: 'Latest tenders and notices', to: '/tenders' },
  { icon: 'work', title: 'Jobs', subtitle: 'Careers and opportunities', to: '/employees#recruitment' },
  { icon: 'groups', title: 'Employees', subtitle: 'HR services and information', to: '/employees' },
  { icon: 'lock_open', title: 'Open Access', subtitle: 'Apply for open access', to: '/services#open-access' },
  { icon: 'gavel', title: 'RTI', subtitle: 'Right to Information Act', to: '/rti' },
  { icon: 'support_agent', title: 'Contact', subtitle: 'Get in touch with us', to: '/contact' },
]

const STATS = [
  { icon: 'trending_up', label: 'Grid Availability', value: '99.72%', sub: 'All Systems Normal', tone: 'primary' },
  { icon: 'bar_chart', label: 'Peak Demand', value: '15,842 MW', sub: 'As of today, 10:30 AM', tone: 'success' },
  { icon: 'apartment', label: 'Active Projects', value: '126', sub: 'Across Andhra Pradesh', tone: 'tertiary' },
  { icon: 'electrical_services', label: 'Substations', value: '287', sub: 'Operational', tone: 'warning' },
]

const STAT_BADGE = {
  primary: 'ux4g-badge-icon-primary',
  success: 'ux4g-badge-icon-success',
  tertiary: 'ux4g-badge-icon-tertiary',
  warning: 'ux4g-badge-icon-warning',
}

const I_NEED = [
  { icon: 'bolt', title: 'Generator', subtitle: 'Apply / Info', to: '/services#generator' },
  { icon: 'power', title: 'Bulk Load', subtitle: 'Apply / Info', to: '/services#bulk-load' },
  { icon: 'groups', title: 'Vendor', subtitle: 'Registration', to: '/services#vendor' },
  { icon: 'support_agent', title: 'Customer Services', subtitle: 'Support & Help', to: '/contact' },
]

export default function Home() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="ux4g-bg-primary ux4g-py-2xl">
        <div className="ux4g-container ux4g-py-xl">
          <h1 className="ux4g-display-xs-strong ux4g-mb-s">
            Powering Andhra Pradesh with Reliable Transmission
          </h1>
          <p className="ux4g-body-l-default ux4g-mb-l">
            Delivering reliable electricity for a stronger and brighter tomorrow.
          </p>

          <form
            className="ux4g-search-container"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="ux4g-search ux4g-search-lg">
              <span className="ux4g-icon-outlined ux4g-search-leading-icon" aria-hidden="true">
                search
              </span>
              <input
                className="ux4g-search-input"
                type="search"
                placeholder="Search services, tenders, documents..."
                aria-label="Search services, tenders, documents"
              />
              <button className="ux4g-search-btn" type="submit" aria-label="Search">
                <span className="ux4g-icon-outlined" aria-hidden="true">search</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="ux4g-container ux4g-py-xl">
        <div className="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-mb-m">
          <h2 className="ux4g-heading-s-strong ux4g-mb-none">Quick Actions</h2>
          <Link className="ux4g-text-link-sm" to="/services">View All</Link>
        </div>
        <div className="ux4g-row ux4g-gutter-m">
          {QUICK_ACTIONS.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="ux4g-col-12 ux4g-col-sm-6 ux4g-col-lg-4 ux4g-card ux4g-card-outline ux4g-card-vertical"
            >
              <div className="ux4g-card-body ux4g-d-flex ux4g-inline-gap-m ux4g-ai-center">
                <span
                  className="ux4g-badge-icon-primary"
                  aria-hidden="true"
                >
                  <span className="ux4g-icon-outlined">{item.icon}</span>
                </span>
                <div>
                  <p className="ux4g-label-l-strong ux4g-mb-none">{item.title}</p>
                  <p className="ux4g-body-s-default ux4g-mb-none">{item.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* At a Glance */}
      <section className="ux4g-container ux4g-py-xl">
        <h2 className="ux4g-heading-s-strong ux4g-mb-m">At a Glance</h2>
        <div className="ux4g-row ux4g-gutter-m">
          {STATS.map((stat) => (
            <div key={stat.label} className="ux4g-col-12 ux4g-col-sm-6 ux4g-col-lg-3 ux4g-card ux4g-card-outline ux4g-card-vertical">
              <div className="ux4g-card-body ux4g-d-flex ux4g-inline-gap-m ux4g-ai-center">
                <span className={STAT_BADGE[stat.tone]} aria-hidden="true">
                  <span className="ux4g-icon-outlined">{stat.icon}</span>
                </span>
                <div>
                  <p className="ux4g-label-m-strong ux4g-mb-none">{stat.label}</p>
                  <p className="ux4g-heading-m-strong ux4g-mb-none">{stat.value}</p>
                  <p className="ux4g-body-xs-default ux4g-mb-none">{stat.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's New */}
      <section className="ux4g-container ux4g-py-xl">
        <div className="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-mb-m">
          <h2 className="ux4g-heading-s-strong ux4g-mb-none">What&apos;s New</h2>
          <Link className="ux4g-text-link-sm" to="/tenders">View All</Link>
        </div>
        <ul className="ux4g-list ux4g-list-default ux4g-list-l">
          {notices.map((notice) => (
            <li className="ux4g-list-item" key={notice.id}>
              <Link className="ux4g-list-item-row" to="/tenders">
                <span className="ux4g-list-item-start ux4g-d-flex ux4g-inline-gap-m ux4g-ai-center">
                  <span className="ux4g-d-flex ux4g-flex-column ux4g-ai-center">
                    <span className="ux4g-label-l-strong">
                      {new Date(notice.date).getDate()}
                    </span>
                    <span className="ux4g-body-xs-default">
                      {new Date(notice.date).toLocaleString('en-US', { month: 'short' }).toUpperCase()}
                    </span>
                  </span>
                  <span className={`ux4g-tag-filled-${notice.tag} ux4g-tag-s`}>{notice.type}</span>
                  <span className="ux4g-body-m-default">{notice.title}</span>
                </span>
                <span className="ux4g-list-item-end ux4g-icon-outlined" aria-hidden="true">
                  chevron_right
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* I Need */}
      <section className="ux4g-container ux4g-py-xl">
        <h2 className="ux4g-heading-s-strong ux4g-mb-m">I Need</h2>
        <div className="ux4g-row ux4g-gutter-m">
          {I_NEED.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="ux4g-col-12 ux4g-col-sm-6 ux4g-col-lg-3 ux4g-card ux4g-card-outline ux4g-card-vertical"
            >
              <div className="ux4g-card-body ux4g-d-flex ux4g-inline-gap-m ux4g-ai-center">
                <span className="ux4g-icon-outlined ux4g-fs-32 ux4g-text-primary" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <p className="ux4g-label-l-strong ux4g-mb-none">{item.title}</p>
                  <p className="ux4g-body-s-default ux4g-mb-none">{item.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
