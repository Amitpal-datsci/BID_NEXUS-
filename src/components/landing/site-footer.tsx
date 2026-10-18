const COLUMNS = [
  {
    heading: "Platform",
    links: ["Verification", "Evidence chain", "Requirement extraction", "Escalation"],
  },
  {
    heading: "Roles",
    links: ["For buyers", "For vendors", "Human review"],
  },
  {
    heading: "Trust",
    links: ["Security", "Accessibility", "Privacy"],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-stone-50 py-16 dark:bg-stone-950">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <p className="font-display text-2xl text-stone-900 dark:text-stone-50">
              Bid Nexus
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone-600 dark:text-stone-300">
              AI-powered bid compliance verification for government procurement.
              Evidence-backed findings, accountable decisions.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading} className="md:col-span-2">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-500 dark:text-stone-400">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <span className="text-sm text-stone-600 dark:text-stone-300">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-stone-200 pt-7 sm:flex-row sm:items-center sm:justify-between dark:border-stone-800">
          <p className="text-xs tracking-wide text-stone-500 dark:text-stone-400">
            &copy; {new Date().getFullYear()} Bid Nexus. All rights reserved.
          </p>
          <p className="text-xs tracking-[0.14em] uppercase text-stone-500 dark:text-stone-400">
            Evidence over assertion
          </p>
        </div>
      </div>
    </footer>
  );
}
