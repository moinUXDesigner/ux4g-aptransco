import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main id="main-content" className="ux4g-container ux4g-py-xl">
      <div className="ux4g-empty-state">
        <span className="ux4g-empty-state-icon ux4g-icon-outlined" aria-hidden="true">error_outline</span>
        <div className="ux4g-empty-state-content">
          <p className="ux4g-title-m-strong">Page not found</p>
          <p className="ux4g-body-s-default">The page you are looking for does not exist.</p>
        </div>
        <Link className="ux4g-btn-primary ux4g-btn-md" to="/">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
