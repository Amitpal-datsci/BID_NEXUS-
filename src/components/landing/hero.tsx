export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-stone-200 pt-40 pb-28 dark:border-stone-800">
      {/* Phase 3: WebGL particle waveform mounts behind this content */}
      <div
        id="hero-canvas"
        aria-hidden
        className="pointer-events-none absolute inset-0"
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="badge-tag">Evidence-Backed Procurement</span>

            <h1 className="font-display mt-8 text-5xl leading-[1.05] text-stone-900 dark:text-stone-50 sm:text-6xl lg:text-7xl">
              Verify every bid claim against government evidence.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-600 dark:text-stone-300">
              Bid Nexus uses AI to extract requirements and claims from tender
              documents, then checks them through entity resolution, temporal
              compliance, financial reconciliation, and deterministic rules —
              with an evidence chain behind every finding.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/login"
                className="inline-flex h-12 items-center rounded-full bg-stone-900 px-7 text-sm font-semibold text-stone-50 transition-colors hover:bg-stone-700 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-300"
              >
                Request Access
              </a>
              <a
                href="#pipeline"
                className="inline-flex h-12 items-center rounded-full border border-stone-300 px-7 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-800"
              >
                See the Pipeline
              </a>
            </div>
          </div>

          {/* Asymmetric 5-column offset panel (5/7 split) */}
          <div className="lg:col-span-5 lg:mt-16">
            <dl className="card-glass !transform-none p-8 hover:!transform-none">
              <div className="border-b border-stone-200 pb-6 dark:border-stone-800">
                <dt className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-500 dark:text-stone-400">
                  Verification stages
                </dt>
                <dd className="font-display mt-2 text-4xl text-stone-900 dark:text-stone-50">
                  5
                </dd>
              </div>
              <div className="border-b border-stone-200 py-6 dark:border-stone-800">
                <dt className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-500 dark:text-stone-400">
                  Conflicts escalated
                </dt>
                <dd className="font-display mt-2 text-4xl text-stone-900 dark:text-stone-50">
                  Human review
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-xs font-semibold tracking-[0.14em] uppercase text-stone-500 dark:text-stone-400">
                  Audit posture
                </dt>
                <dd className="font-display mt-2 text-4xl text-stone-900 dark:text-stone-50">
                  Full chain
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
