import { useLocation } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const PAGES = {
  sitemap: {
    title: 'Sitemap',
    body: 'A structured index of every section of the APTRANSCO website: Home, About, Projects, Services, Tenders, Reports, Employees, RTI and Contact.',
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    body: 'APTRANSCO collects only the information necessary to provide its services and does not share personal data with third parties except as required by law.',
  },
  disclaimer: {
    title: 'Disclaimer',
    body: 'While every effort is made to keep information on this website accurate and up to date, APTRANSCO makes no warranties about the completeness or reliability of this content.',
  },
  terms: {
    title: 'Terms & Conditions',
    body: 'Use of this website constitutes acceptance of these terms. Content is provided for informational purposes and is subject to change without notice.',
  },
}

export default function Legal() {
  const { pathname } = useLocation()
  const page = pathname.replace(/^\//, '')
  const content = PAGES[page] ?? { title: 'Page', body: 'Content not available.' }

  return (
    <main id="main-content">
      <PageHeader title={content.title} />
      <section className="ux4g-container ux4g-py-xl">
        <p className="ux4g-body-m-default ux4g-mb-none">{content.body}</p>
      </section>
    </main>
  )
}
