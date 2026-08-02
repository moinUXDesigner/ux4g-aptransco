# APTRANSCO Redesign — UX4G-compliant React App

## Context

`d:\ux-4g` currently contains only the two UX4G contract files (`SKILL.md`,
`Design.md`) — no project scaffolding exists yet. The goal is to redesign
`www.aptransco.gov.in` (the Andhra Pradesh Transmission Corporation site)
as a new, greenfield React application, strictly following the UX4G Design
System contract in `Design.md` for every component, token, and interaction.

Reference material gathered:
- **Live site structure** (fetched from aptransco.gov.in): masthead with
  logo/org name, nav (Home, About, Services, Employees, Training, Internal
  Apps), hero banner, "What's New", tenders/notices, district-wise customer
  redirects (Southern/Eastern/Central Power Companies), grid map (400kV/
  220kV/132kV), stats (2,154 employees, ₹1,316 Cr turnover), footer with
  About/Services/Employee/Quick-Link columns, social icons, bottom legal
  links.
- **User-supplied redesign mockup image**: a concrete target layout —
  utility bar (Language, Accessibility, Contact Us, Search) → masthead
  (emblem, "APTRANSCO / Andhra Pradesh Transmission Corporation Limited",
  nav: Home/About/Projects/Services/Tenders/Reports/Employees/RTI/Contact,
  Employee Login / Vendor Login buttons) → hero ("Powering Andhra Pradesh
  with Reliable Transmission" + search bar) → Quick Actions (6 cards) →
  At a Glance (4 stat tiles) → What's New (2 list items with status badges)
  → I Need (4 cards) → multi-column footer with a dark bottom bar.
- **Design.md** (read in full): token tiers, class-composition rules
  (base + variant + size), theme-override mechanism, package selection
  order, accessibility baseline (WCAG 2.1 AA), known contrast failures to
  avoid repeating (`Control/Border/Default`), and the mandatory completion
  report.
- User decisions: (1) brand colours = extracted from the mockup image,
  (2) scope = full site — every top-nav section gets a real page, (3)
  delivery = React app (Vite), no backend yet — mock/static data only.

## Theme — colours extracted from the mockup

| Role | Approx. hex (from image) | Where it appears |
|---|---|---|
| Brand Primary | `#123B73` (deep navy blue) | nav active state, headings, primary buttons, footer band, stat icon (Grid Availability) |
| Brand Secondary | `#1E8A44` (green) | Vendor Login outline button, "Tender" badge, Peak Demand stat |
| Brand Tertiary | `#7C3AED` (purple) | Active Projects stat icon |
| Status / accent | `#D9720B`-ish orange | Substations stat icon |
| Info badge | light blue | "Recruitment" badge |

These are **proposed** values read off the mockup, not pixel-sampled — flag
this to the user again at implementation kickoff and let them correct any
value before the override block is written.

**Token-name resolution is not finished in this plan.** Design.md says to
map approved colours onto *confirmed* semantic tokens and gives the Figma
names (`Background/Brand/Primary/Strong`, etc.) and the CSS prefix rule
(`--ux4g-bg-*`) but not the exact shipped custom-property names. Before
writing the override block, implementation must:
1. Install `ux4g-web-components` and open its shipped `styles.css`.
2. Grep for the real custom properties backing Brand Primary/Secondary/
   Tertiary (background, text, border, focus, action-state variants).
3. Only then write the root override block, `!important`, one block, tokens
   only (never component selectors), per Design.md §0.6.

## Delivery method

Node-based project, package not yet installed → per Design.md package
order, install **`ux4g-web-components`** (not CDN). Scaffold with Vite +
React + React Router (client-side routing for the multi-page nav; no
backend — tenders/notices/reports/projects data comes from static JSON
under `src/data/`, structured so it's a drop-in replacement point for a
real API later).

```
d:\ux-4g\
  package.json                (Vite + React + React Router + ux4g-web-components)
  src/
    main.jsx                  imports 'ux4g-web-components/styles.css' and
                               'ux4g-web-components/design-system'
    theme.css                 :root override block (resolved tokens, !important)
    App.jsx                   Router + shared layout
    components/
      Header.jsx               utility bar + masthead + nav + login buttons
      Footer.jsx                multi-column footer + bottom bar
    pages/
      Home.jsx                 hero, Quick Actions, At a Glance, What's New, I Need
      About.jsx                org info, board, vision/mission, awards, CSR
      Projects.jsx              grid map placeholder, project cards, voltage-level stats
      Services.jsx               service list (Open Access, Bulk Load, Generator, Vendor)
      Tenders.jsx                 searchable/filterable tender table + notices
      Reports.jsx                 downloadable documents list (manuals, orders, financials)
      Employees.jsx                HR resource links (salary, leave, promotions, medical)
      RTI.jsx                      Right to Information Act info + officer contacts
      Contact.jsx                  contact form + address/phone/email cards
      NotFound.jsx                 fallback route
    data/
      tenders.json, notices.json, projects.json, reports.json  (mock data)
```

## Mandatory UX4G preflight (per SKILL.md / Design.md §0.6)

Before any component code is written, for **each page** declare: every
UX4G component used, its exact variant + size, and where it sits — pulled
from `doc.ux4g.gov.in/web/llms/components/<name>.md` for exact class
composition (base + variant + size — confirmed inconsistent across
components in Design.md §12, so this must be checked per component, not
assumed). Confirmed-available components for this build (Design.md §12
parity table, ✅ in Web CSS): Navbar, Mega Menu, Footer, Breadcrumb,
Button/Icon Button, Card, Badge/Tag/Chip, Input, Search, Table, List/Result
List, Avatar, Empty State, Accordion, Tab, Alert, Pagination, Social Link,
Accessibility Bar, Stepper.

Representative mapping (finalized per-page during implementation, not
guessed here):

| Mockup element | UX4G component |
|---|---|
| Utility bar language/accessibility/contact/search | Dropdown, Accessibility Bar, Link, Search |
| Masthead + nav | Navbar (+ Mega Menu if sub-items needed) |
| Employee/Vendor login | `ux4g-btn-outline-primary` / `ux4g-btn-outline-secondary`, size `md` |
| Hero search | `ux4g-input` + `ux4g-btn-primary` |
| Quick Actions / I Need tiles | `ux4g-card` |
| At a Glance stat tiles | `ux4g-card` + Avatar/icon container using semantic Brand/Status tokens (not hard-coded colours) |
| What's New list | List / Result List + `ux4g-badge` (status: Recruitment/Tender) |
| Footer columns | Footer component + Social Link |
| Tenders page table | Table + Search + Pagination |
| Contact form | Input, Textarea, Button, Card |
| RTI/Reports downloads | List/Result List + Icon Button (download) |

No component will be hand-rolled with custom markup where one of the above
exists. Any genuine gap (e.g. the AP grid-network map graphic) is called
out explicitly as custom, minimal CSS/SVG rather than a fake UX4G class.

## Verification

- `npm run dev`, click through every nav item and footer link, confirm no
  dead routes.
- Toggle `data-theme="light"`/`"dark"` on `<html>` and visually confirm the
  override tokens hold in both, including the stat-tile icon colours.
- Resize through the four documented breakpoints (Mobile/Tablet/Desktop/
  Desktop XL from Design.md §8) and confirm grid/column behaviour.
- Keyboard-only pass: tab through nav, login buttons, search, cards, and
  the contact form; confirm visible `Focus/Outline` on every stop.
- Run the Design.md-mandated completion report: package/delivery used,
  every component+variant+size used, theme override values applied,
  any custom CSS and why, light/dark check, responsive check, a11y check,
  unresolved exceptions.
