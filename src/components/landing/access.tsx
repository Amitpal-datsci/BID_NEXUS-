import { Check } from "lucide-react";

const BUYER_POINTS = [
  "Requirements extracted once, checked on every submission",
  "Expired credentials caught before evaluation begins",
  "Every finding carries its evidence chain",
];

const VENDOR_POINTS = [
  "Clear requirements up front — no guesswork",
  "Submission claims mapped to exact tender clauses",
  "Disputes resolved against recorded evidence, not recollection",
];

export function Access() {
  return (
    <section id="access" className="border-b border-stone-200 py-28 dark:border-stone-800">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="badge-tag">Access</span>
          <h2 className="font-display mt-6 text-4xl leading-tight text-stone-900 dark:text-stone-50 sm:text-5xl">
            Built for both sides of the tender.
          </h2>
        </div>

        {/* 7/5 split with vertical offset */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <article className="card-glass p-9 lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-500 dark:text-stone-400">
              For Buyers
            </p>
            <h3 className="font-display mt-4 text-3xl text-stone-900 dark:text-stone-50">
              Run evaluations on evidence
            </h3>
            <ul className="mt-6 space-y-4">
              {BUYER_POINTS.map((point) => (
                <li key={point} className="flex gap-3 text-stone-600 dark:text-stone-300">
                  <Check className="mt-0.5 size-5 shrink-0 text-indigo-600 dark:text-indigo-400" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card-glass p-9 lg:col-span-5 lg:mt-16">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-500 dark:text-stone-400">
              For Vendors
            </p>
            <h3 className="font-display mt-4 text-3xl text-stone-900 dark:text-stone-50">
              Bid with clarity
            </h3>
            <ul className="mt-6 space-y-4">
              {VENDOR_POINTS.map((point) => (
                <li key={point} className="flex gap-3 text-stone-600 dark:text-stone-300">
                  <Check className="mt-0.5 size-5 shrink-0 text-indigo-600 dark:text-indigo-400" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-20 flex flex-col items-start gap-6 border-t border-stone-200 pt-14 sm:flex-row sm:items-center sm:justify-between dark:border-stone-800">
          <p className="font-display max-w-xl text-3xl text-stone-900 dark:text-stone-50">
            Start with one tender. Judge the findings yourself.
          </p>
          <a
            href="/login"
            className="inline-flex h-12 shrink-0 items-center rounded-full bg-stone-900 px-7 text-sm font-semibold text-stone-50 transition-colors hover:bg-stone-700 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-300"
          >
            Request Access
          </a>
        </div>
      </div>
    </section>
  );
}
