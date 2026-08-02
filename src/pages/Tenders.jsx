import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader'
import tenders from '../data/tenders.json'

const PAGE_SIZE = 3

export default function Tenders() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return tenders
    return tenders.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.id.toLowerCase().includes(q)
    )
  }, [query])

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, pageCount)
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  return (
    <main id="main-content">
      <PageHeader
        title="Tenders"
        subtitle="Active and closed procurement opportunities from APTRANSCO."
      />

      <section className="ux4g-container ux4g-py-xl">
        <div className="ux4g-search-container ux4g-mb-l" style={{ maxWidth: 480 }}>
          <label className="ux4g-label-m-default" htmlFor="tender-search">
            Search tenders
          </label>
          <div className="ux4g-search">
            <span className="ux4g-icon-outlined ux4g-search-leading-icon" aria-hidden="true">
              search
            </span>
            <input
              id="tender-search"
              className="ux4g-search-input"
              type="search"
              placeholder="Search by title, category or tender ID..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setPage(1)
              }}
            />
          </div>
        </div>

        {pageItems.length === 0 ? (
          <div className="ux4g-empty-state">
            <span className="ux4g-empty-state-icon ux4g-icon-outlined" aria-hidden="true">search_off</span>
            <div className="ux4g-empty-state-content">
              <p className="ux4g-title-m-strong">No tenders found</p>
              <p className="ux4g-body-s-default">Try a different search term.</p>
            </div>
          </div>
        ) : (
          <div className="ux4g-table-responsive ux4g-table-rounded">
            <table className="ux4g-table ux4g-table-m ux4g-table-column-dividers ux4g-table-interactive">
              <thead>
                <tr>
                  <th><div className="ux4g-table-th-content">Tender ID</div></th>
                  <th><div className="ux4g-table-th-content">Title</div></th>
                  <th><div className="ux4g-table-th-content">Category</div></th>
                  <th><div className="ux4g-table-th-content">Closing Date</div></th>
                  <th><div className="ux4g-table-th-content">Status</div></th>
                </tr>
              </thead>
              <tbody>
                {pageItems.map((tender) => (
                  <tr key={tender.id}>
                    <td>{tender.id}</td>
                    <td className="ux4g-fw-semibold">{tender.title}</td>
                    <td>{tender.category}</td>
                    <td>{tender.closing}</td>
                    <td>
                      <span
                        className={`ux4g-tag-filled-${tender.status === 'Open' ? 'success' : 'neutral'} ux4g-tag-s`}
                      >
                        {tender.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="ux4g-pagination-wrapper ux4g-mt-l">
          <div className="ux4g-pagination">
            <button
              type="button"
              className="ux4g-page-nav prev ux4g-icon-outlined"
              disabled={currentPage === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              chevron_left
            </button>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                className={`ux4g-page-number${n === currentPage ? ' active' : ''}`}
                onClick={() => setPage(n)}
              >
                {n}
              </button>
            ))}
            <button
              type="button"
              className="ux4g-page-nav next ux4g-icon-outlined"
              disabled={currentPage === pageCount}
              onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            >
              chevron_right
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
