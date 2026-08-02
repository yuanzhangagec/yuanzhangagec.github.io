const navigation = [
  ["Research", "/research"],
  ["Publications", "/publications"],
  ["Experience", "/experience"],
  ["Teaching", "/teaching"],
  ["Personal", "/personal"],
];

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Yuan Zhang, home">YZ<span>.</span></a>
      <nav aria-label="Main navigation">
        {navigation.map(([label, href]) => <a className={active === label ? "active" : ""} href={href} key={href}>{label}</a>)}
      </nav>
      <a className="cv-link" href="mailto:yuanz@uark.edu">Contact ↗</a>
    </header>
  );
}
