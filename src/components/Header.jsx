import { NavLink, Link } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/tenders', label: 'Tenders' },
  { to: '/reports', label: 'Reports' },
  { to: '/employees', label: 'Employees' },
  { to: '/rti', label: 'RTI' },
  { to: '/contact', label: 'Contact' },
]

function navLinkClass({ isActive }) {
  return isActive
    ? 'ux4g-text-link-sm ux4g-fw-semibold'
    : 'ux4g-text-link-sm'
}

export default function Header() {
  return (
    <>
      {/* Utility bar — language, accessibility, contact, search */}
      <header className="ux4g-topbar ux4g-topbar-wide" role="banner">
        <div className="ux4g-container">
          <div className="ux4g-topbar__wrap ux4g-d-flex ux4g-jc-between ux4g-ai-center">
            <a
              className="ux4g-label-m-default ux4g-topbar__skip"
              href="#main-content"
            >
              Skip to Main Content
            </a>

            <nav aria-label="Top utilities" className="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
              <div className="ux4g-topbar__select">
                <button
                  aria-expanded="false"
                  aria-haspopup="listbox"
                  aria-label="Select language"
                  className="ux4g-topbar__selectbtn ux4g-d-inline-flex ux4g-ai-center"
                  type="button"
                >
                  <span className="ux4g-icon-outlined ux4g-top-bar-icon">language</span>
                  <span className="ux4g-label-m-default">English</span>
                  <span className="ux4g-icon-outlined">arrow_drop_down</span>
                </button>
              </div>

              <span className="ux4g-bl acc-top-divider" aria-hidden="true"></span>

              <button
                aria-label="Accessibility options"
                className="ux4g-topbar__iconbtn ux4g-d-flex ux4g-jc-center ux4g-ai-center"
                type="button"
              >
                <span className="ux4g-icon-outlined ux4g-top-bar-icon">accessibility_new</span>
                <span className="ux4g-label-m-default">Accessibility</span>
              </button>

              <span className="ux4g-bl acc-top-divider" aria-hidden="true"></span>

              <Link className="ux4g-label-m-default ux4g-topbar__iconbtn ux4g-d-flex ux4g-ai-center" to="/contact">
                <span className="ux4g-icon-outlined ux4g-top-bar-icon">call</span>
                Contact Us
              </Link>

              <span className="ux4g-bl acc-top-divider" aria-hidden="true"></span>

              <button
                aria-label="Search the site"
                className="ux4g-topbar__iconbtn ux4g-d-flex ux4g-jc-center ux4g-ai-center"
                type="button"
              >
                <span className="ux4g-icon-outlined ux4g-top-bar-icon">search</span>
                <span className="ux4g-label-m-default">Search</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Masthead + primary navigation */}
      <nav className="ux4g-navbar" aria-label="Primary">
        <div className="ux4g-container">
          <div className="ux4g-navbar-wrap">
            <Link to="/" className="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
              <span
                aria-hidden="true"
                className="ux4g-icon-outlined ux4g-fs-40"
                style={{ color: 'var(--ux4g-text-brand-primary-default)' }}
              >
                bolt
              </span>
              <div className="ux4g-d-flex ux4g-flex-column">
                <span className="ux4g-heading-xs-strong">APTRANSCO</span>
                <span className="ux4g-body-xs-default">
                  Andhra Pradesh Transmission Corporation Limited
                </span>
              </div>
            </Link>

            <div className="ux4g-navbar-desktop">
              <div className="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-l">
                <ul className="ux4g-navbar-links ux4g-d-flex ux4g-ai-center ux4g-inline-gap-l">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.to}>
                      <NavLink to={item.to} end={item.end} className={navLinkClass}>
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                <div className="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                  <button type="button" className="ux4g-btn-outline-primary ux4g-btn-md">
                    <span className="ux4g-icon-outlined ux4g-fs-20" aria-hidden="true">person</span>
                    Employee Login
                  </button>
                  <button type="button" className="ux4g-btn-outline-neutral ux4g-btn-md">
                    <span className="ux4g-icon-outlined ux4g-fs-20" aria-hidden="true">badge</span>
                    Vendor Login
                  </button>
                </div>
              </div>
            </div>

            <div className="ux4g-navbar-mobile">
              <div className="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-overflow">
                <button
                  aria-label="Open menu"
                  className="ux4g-dropdown-control ux4g-btn-outline-primary ux4g-btn-md"
                  type="button"
                  data-ux-toggle="dropdown"
                >
                  <span className="ux4g-icon-outlined">menu</span>
                </button>
                <div className="ux4g-dropdown-menu" role="menu">
                  <ul className="ux4g-list ux4g-list-default ux4g-list-m">
                    {NAV_ITEMS.map((item) => (
                      <li className="ux4g-list-item" key={item.to}>
                        <NavLink className="ux4g-list-item-row" to={item.to} end={item.end}>
                          <span className="ux4g-list-item-start">{item.label}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                  <div className="ux4g-d-flex ux4g-flex-column ux4g-gap-s ux4g-p-m">
                    <button type="button" className="ux4g-btn-outline-primary ux4g-btn-md">
                      Employee Login
                    </button>
                    <button type="button" className="ux4g-btn-outline-neutral ux4g-btn-md">
                      Vendor Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
