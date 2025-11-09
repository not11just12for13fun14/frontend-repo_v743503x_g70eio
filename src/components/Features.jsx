import { Brain, Search, Mail, Gauge } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Screening',
    desc: 'Instantly qualify candidates with resume parsing, skill matching and knockout questions.'
  },
  {
    icon: Search,
    title: 'Smart Sourcing',
    desc: 'Find hidden talent across the web with AI-powered search and enrichment.'
  },
  {
    icon: Mail,
    title: 'Automated Outreach',
    desc: 'Personalized sequences that adapt to candidate responses to boost replies.'
  },
  {
    icon: Gauge,
    title: 'Pipeline Analytics',
    desc: 'Real-time dashboards to track pipeline health, SLAs and team performance.'
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to hire faster</h2>
          <p className="mt-3 text-gray-600">Purpose-built for modern recruiting teams. Powerful on its own, unstoppable together.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
