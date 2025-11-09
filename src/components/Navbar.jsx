import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-gray-900">Ordal</span>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#how" className="hover:text-gray-900">How it works</a>
          <a href="#cta" className="hover:text-gray-900">Get started</a>
        </nav>

        <div className="hidden md:block">
          <a href="#cta" className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-gray-800">Book a demo</a>
        </div>

        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-200/60 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8">
            <a href="#features" className="py-2 text-sm font-medium text-gray-700">Features</a>
            <a href="#how" className="py-2 text-sm font-medium text-gray-700">How it works</a>
            <a href="#cta" className="py-2 text-sm font-medium text-gray-700">Get started</a>
            <a href="#cta" className="mt-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white">Book a demo</a>
          </div>
        </div>
      )}
    </header>
  );
}
