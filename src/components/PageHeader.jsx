export default function PageHeader({ title, subtitle }) {
  return (
    <section className="ux4g-bg-primary ux4g-py-xl">
      <div className="ux4g-container">
        <h1 className="ux4g-heading-xl-strong ux4g-mb-s">{title}</h1>
        {subtitle && <p className="ux4g-body-l-default ux4g-mb-none">{subtitle}</p>}
      </div>
    </section>
  )
}
