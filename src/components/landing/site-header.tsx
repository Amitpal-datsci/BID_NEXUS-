import Link from "next/link";
import { ThemeToggle } from "@/components/landing/theme-toggle";

const NAV = [
  { href: "/#platform", label: "Platform" },
  { href: "/#pipeline", label: "Verification" },
  { href: "/#evidence", label: "Evidence" },
  { href: "/#access", label: "Access" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-stone-200 bg-stone-50/85 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/85">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl text-stone-900 dark:text-stone-50"
        >
          Bid Nexus
          <span className="ml-2 align-middle badge-tag !px-2 !py-0.5 text-[0.5625rem]">
            Beta
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-50"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* Phase 4: LandingAuthHeader mounts session-aware CTAs here */}
          <Link
            href="/login"
            className="inline-flex h-9 items-center rounded-full bg-stone-900 px-4 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-700 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-300"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
