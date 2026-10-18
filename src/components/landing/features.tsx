import {
  ScanText,
  Network,
  CalendarCheck,
  Scale,
  ShieldCheck,
} from "lucide-react";

const FEATURES = [
  {
    icon: ScanText,
    tag: "Extraction",
    title: "Requirements and claims, read once",
    body: "AI extracts structured requirements from tender documents and every claim from bidder submissions, so reviewers start from parsed facts instead of re-reading PDFs.",
  },
  {
    icon: Network,
    tag: "Entity Resolution",
    title: "One bidder, every alias",
    body: "Subsidiaries, joint ventures, and renamed firms resolve to a single entity, exposing bid splitting and undisclosed relationships.",
  },
  {
    icon: CalendarCheck,
    tag: "Temporal Compliance",
    title: "Credentials checked against dates",
    body: "Licenses, certifications, and validity windows are evaluated against the tender timeline — expired credentials fail before a human opens the file.",
  },
  {
    icon: Scale,
    tag: "Financial Reconciliation",
    title: "Numbers that must agree",
    body: "Bid totals, unit prices, and stated financials reconcile across documents; unexplained differences surface as findings, not footnotes.",
  },
  {
    icon: ShieldCheck,
    tag: "Deterministic Rules",
    title: "Rules you can audit",
    body: "Where policy is explicit, deterministic rule evaluation decides — no model judgment where a rulebook already has the answer.",
  },
];

export function Features() {
  return (
    <section id="platform" className="border-b border-stone-200 py-28 dark:border-stone-800">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="badge-tag">Platform</span>
          <h2 className="font-display mt-6 text-4xl leading-tight text-stone-900 dark:text-stone-50 sm:text-5xl">
            A verification pipeline, not a checklist.
          </h2>
          <p className="mt-6 text-lg text-stone-600 dark:text-stone-300">
            Five independent engines examine every submission. Each produces
            findings with provenance; unresolved conflicts escalate to human
            reviewers.
          </p>
        </div>

        {/* Staggered 12-column grid: 7/5 then 5/7, vertical offsets */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-12">
          <article className="card-glass p-8 md:col-span-7">
            <FeatureBody {...FEATURES[0]} />
          </article>
          <article className="card-glass p-8 md:col-span-5 md:mt-16">
            <FeatureBody {...FEATURES[1]} />
          </article>

          <article className="card-glass p-8 md:col-span-5 md:-mt-8">
            <FeatureBody {...FEATURES[2]} />
          </article>
          <article className="card-glass p-8 md:col-span-7">
            <FeatureBody {...FEATURES[3]} />
          </article>

          <article className="card-glass p-8 md:col-span-7 md:col-start-4">
            <FeatureBody {...FEATURES[4]} />
          </article>
        </div>
      </div>
    </section>
  );
}

function FeatureBody({
  icon: Icon,
  tag,
  title,
  body,
}: {
  icon: typeof ScanText;
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <>
      <div className="flex items-center gap-4">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-stone-200 bg-stone-100 text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200">
          <Icon className="size-5" aria-hidden />
        </span>
        <span className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-500 dark:text-stone-400">
          {tag}
        </span>
      </div>
      <h3 className="font-display mt-6 text-2xl text-stone-900 dark:text-stone-50">
        {title}
      </h3>
      <p className="mt-3 leading-relaxed text-stone-600 dark:text-stone-300">
        {body}
      </p>
    </>
  );
}
