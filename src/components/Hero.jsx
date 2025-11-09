import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/60 px-3 py-1 text-xs font-medium text-indigo-700 backdrop-blur">
            <span className="inline-flex h-2 w-2 rounded-full bg-indigo-600"></span>
            New: AI Sourcing Copilot
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Recruit 10x faster with AI
          </h1>
          <p className="mt-4 max-w-xl text-gray-600">
            Ordal automates sourcing, screening and outreach so your team can focus on building relationships. Hire better talent in days, not weeks.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-gray-800">
              Get a live demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
              See features
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-xs text-gray-500">
            <div>
              <span className="font-semibold text-gray-900">3x</span> response rate
            </div>
            <div>
              <span className="font-semibold text-gray-900">60%</span> less time-to-fill
            </div>
            <div>
              <span className="font-semibold text-gray-900">SOC2</span> ready
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow">
            <img
              src="https://images.unsplash.com/photo-1706625107693-35c008651675?q=80&w=1600&auto=format&fit=crop"
              alt="Ordal app screenshot"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-6 -left-6 -right-6 -top-6 bg-gradient-to-tr from-indigo-500/10 via-transparent to-blue-500/10"></div>
        </div>
      </div>
    </section>
  );
}
