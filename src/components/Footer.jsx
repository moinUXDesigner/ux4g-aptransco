import { Link } from 'react-router-dom'

const FOOTER_COLUMNS = [
  {
    title: 'About',
    links: [
      { label: 'About APTRANSCO', to: '/about' },
      { label: 'Board of Directors', to: '/about#board' },
      { label: 'Vision & Mission', to: '/about#vision' },
      { label: 'Awards & Recognition', to: '/about#awards' },
      { label: 'CSR Initiatives', to: '/about#csr' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Open Access', to: '/services#open-access' },
      { label: 'Bulk Load', to: '/services#bulk-load' },
      { label: 'Vendor Registration', to: '/services#vendor' },
      { label: 'Tenders', to: '/tenders' },
      { label: 'Training', to: '/employees#training' },
    ],
  },
  {
    title: 'Employees',
    links: [
      { label: 'Salary Information', to: '/employees#salary' },
      { label: 'Leave Policies', to: '/employees#leave' },
      { label: 'Promotions', to: '/employees#promotions' },
      { label: 'Medical Benefits', to: '/employees#medical' },
      { label: 'Recruitment', to: '/employees#recruitment' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'APERC', href: 'https://www.aperc.gov.in/' },
      { label: 'APSLDC', href: 'https://www.apsldc.in/' },
      { label: 'APGENCO', href: 'https://apgenco.gov.in/' },
      { label: 'Right to Information', to: '/rti' },
      { label: 'Reports & Documents', to: '/reports' },
    ],
  },
]

/*
 * Material Symbols (the icon font backing ux4g-icon-outlined) has no brand
 * logos, so there is no valid ligature for "Facebook" or "LinkedIn" — UX4G's
 * own README hits the same wall and substitutes generic icons for social
 * links (`share` for Twitter, `link` for LinkedIn). Following that
 * precedent here rather than inventing/guessing brand ligature names.
 */
const SOCIAL_LINKS = [
  { label: 'Facebook', icon: 'groups', href: 'https://facebook.com/' },
  { label: 'X (Twitter)', icon: 'share', href: 'https://x.com/' },
  { label: 'YouTube', icon: 'smart_display', href: 'https://youtube.com/' },
  { label: 'LinkedIn', icon: 'link', href: 'https://linkedin.com/' },
]

function FooterLink({ link }) {
  if (link.href) {
    return (
      <a className="ux4g-text-link-neutral-sm" href={link.href} target="_blank" rel="noopener noreferrer">
        {link.label}
      </a>
    )
  }
  return (
    <Link className="ux4g-text-link-neutral-sm" to={link.to}>
      {link.label}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="ux4g-footer ux4g-footer-primary">
      <div className="ux4g-footer-wrapper">
        <div className="ux4g-footer-row ux4g-my-xl ux4g-gap-2xl">
          <div className="ux4g-dept-wrapper">
            <div className="ux4g-dept-header ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
              <span className="ux4g-icon-outlined ux4g-fs-32 ux4g-text-white" aria-hidden="true">bolt</span>
              <div>
                <p className="ux4g-heading-xs-strong ux4g-text-white ux4g-mb-none">APTRANSCO</p>
                <p className="ux4g-body-xs-default ux4g-text-white ux4g-mb-none">
                  Transmission Corporation of Andhra Pradesh Limited
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ux4g-divider-horizontal" />

        <div className="ux4g-f-links ux4g-w-100 ux4g-py-2xl ux4g-d-grid">
          {FOOTER_COLUMNS.map((col) => (
            <div className="ux4g-col" key={col.title}>
              <p className="ux4g-label-l-strong ux4g-text-white">{col.title}</p>
              <ul className="ux4g-f-link-list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="ux4g-col">
            <p className="ux4g-label-l-strong ux4g-text-white">Contact</p>
            <ul className="ux4g-f-link-list">
              <li className="ux4g-body-xs-default">Toll Free: 1800 4252 3334</li>
              <li className="ux4g-body-xs-default">info@aptransco.gov.in</li>
              <li className="ux4g-body-xs-default">
                APTRANSCO, Vidyut Soudha, Hyderabad, Telangana – 500082
              </li>
            </ul>
            <div className="ux4g-d-flex ux4g-inline-gap-s ux4g-mt-m">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  aria-label={social.label}
                  className="ux4g-icon-btn ux4g-icon-btn-text-primary ux4g-icon-btn-sm ux4g-icon-btn-pill"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="ux4g-icon-outlined" aria-hidden="true">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="ux4g-fbs-t1">
          <p className="ux4g-body-xs-default ux4g-text-white">
            © {new Date().getFullYear()} APTRANSCO. All rights reserved.
          </p>
          <div className="ux4g-fbs-links ux4g-d-flex ux4g-inline-gap-l ux4g-flex-wrap">
            <Link className="ux4g-text-link-neutral-sm" to="/sitemap">Sitemap</Link>
            <Link className="ux4g-text-link-neutral-sm" to="/privacy-policy">Privacy Policy</Link>
            <Link className="ux4g-text-link-neutral-sm" to="/disclaimer">Disclaimer</Link>
            <Link className="ux4g-text-link-neutral-sm" to="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
