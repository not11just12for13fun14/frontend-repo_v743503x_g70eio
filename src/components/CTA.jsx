export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-2xl bg-gray-900 px-8 py-12 text-white shadow">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl"></div>
          <div className="absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>

          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Ready to see Ordal in action?</h3>
            <p className="mt-3 text-sm text-gray-200">Book a live walkthrough and we’ll show you how teams reduce time-to-fill by 60% with AI.</p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                required
                placeholder="Work email"
                className="w-full min-w-0 flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm backdrop-blur placeholder:text-gray-300 focus:border-white focus:outline-none"
              />
              <button type="submit" className="w-full rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-gray-100 sm:w-auto">
                Book a demo
              </button>
            </form>

            <p className="mt-3 text-xs text-gray-300">No spam. SOC2 ready. GDPR compliant.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
