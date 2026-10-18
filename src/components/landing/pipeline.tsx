import { FileText, Combine, CalendarClock, Calculator, Gavel } from "lucide-react";

const STAGES = [
  {
    step: "01",
    icon: FileText,
    title: "Ingest",
    body: "Tender documents and bidder submissions are parsed; requirements and claims become structured records.",
  },
  {
    step: "02",
    icon: Combine,
    title: "Resolve",
    body: "Entities across filings resolve to canonical identities, linking aliases, subsidiaries, and partners.",
  },
  {
    step: "03",
    icon: CalendarClock,
    title: "Date",
    body: "Every credential and clause is checked against the tender calendar for expiry and ordering conflicts.",
  },
  {
    step: "04",
    icon: Calculator,
    title: "Reconcile",
    body: "Financials cross-check across documents; deterministic rules decide where policy is explicit.",
  },
  {
    step: "05",
    icon: Gavel,
    title: "Escalate",
    body: "Findings with evidence chains pass; unresolved conflicts route to human reviewers with full context.",
  },
];

export function Pipeline() {
  return (
    <section
      id="pipeline"
      className="border-b border-stone-200 bg-stone-100/60 py-28 dark:border-stone-800 dark:bg-stone-900/40"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="badge-tag">Verification</span>
            <h2 className="font-display mt-6 text-4xl leading-tight text-stone-900 dark:text-stone-50 sm:text-5xl">
              Five stages,
              <br />
              one accountable chain.
            </h2>
            <p className="mt-6 max-w-md text-lg text-stone-600 dark:text-stone-300">
              Each stage records what it examined, what it found, and which
              evidence supported it. Nothing is asserted without provenance.
            </p>
          </div>

          <ol className="lg:col-span-7 lg:mt-16">
            {STAGES.map((stage, i) => (
              <li
                key={stage.step}
                className={`flex gap-6 border-t border-stone-200 py-7 first:border-t-0 first:pt-0 dark:border-stone-800 ${
                  i % 2 === 1 ? "lg:ml-8" : ""
                }`}
              >
                <span className="font-display w-10 shrink-0 text-lg text-stone-400 dark:text-stone-500">
                  {stage.step}
                </span>
                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-stone-200 bg-stone-50 text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200">
                  <stage.icon className="size-4" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-xl text-stone-900 dark:text-stone-50">
                    {stage.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-stone-600 dark:text-stone-300">
                    {stage.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
