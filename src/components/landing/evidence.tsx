import { Link2, AlertTriangle, UserCheck } from "lucide-react";

export function Evidence() {
  return (
    <section
      id="evidence"
      className="border-b border-stone-800 bg-stone-950 py-28 text-stone-100"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="badge-tag !border-stone-700 !bg-transparent !text-stone-300">
              Evidence Chain
            </span>
            <h2 className="font-display mt-6 text-4xl leading-tight text-stone-50 sm:text-5xl">
              Every finding explains itself.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-stone-300">
              A finding is a sentence you can audit: which claim, which rule,
              which source document, which page — in order. Reviewers see the
              reasoning, not a verdict.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-7 lg:mt-16">
            <article className="rounded-3xl border border-stone-800 bg-stone-900/70 p-8 shadow-xl">
              <Link2 className="size-5 text-indigo-400" aria-hidden />
              <h3 className="font-display mt-5 text-xl text-stone-50">
                Linked provenance
              </h3>
              <p className="mt-3 leading-relaxed text-stone-300">
                Each finding links to the exact clause, claim, and document span
                it came from — reconstructable months later during audit.
              </p>
            </article>

            <article className="rounded-3xl border border-stone-800 bg-stone-900/70 p-8 shadow-xl sm:mt-8">
              <AlertTriangle className="size-5 text-amber-400" aria-hidden />
              <h3 className="font-display mt-5 text-xl text-stone-50">
                Escalated conflicts
              </h3>
              <p className="mt-3 leading-relaxed text-stone-300">
                When two engines disagree or evidence is missing, the conflict
                is preserved and escalated — never silently resolved.
              </p>
            </article>

            <article className="rounded-3xl border border-stone-800 bg-stone-900/70 p-8 shadow-xl">
              <UserCheck className="size-5 text-emerald-400" aria-hidden />
              <h3 className="font-display mt-5 text-xl text-stone-50">
                Human review of record
              </h3>
              <p className="mt-3 leading-relaxed text-stone-300">
                Decisions taken by people are recorded with rationale and
                reviewer identity, completing the chain of accountability.
              </p>
            </article>

            <article className="flex flex-col justify-center rounded-3xl border border-indigo-500/40 bg-indigo-500/10 p-8 sm:mt-8">
              <p className="font-display text-2xl leading-snug text-stone-50">
                Zero finding without evidence. Zero conflict without escalation.
              </p>
              <p className="mt-4 text-xs font-semibold tracking-[0.14em] uppercase text-indigo-300">
                Accountability Specification
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
