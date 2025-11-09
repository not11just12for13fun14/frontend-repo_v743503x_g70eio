import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import CTA from './components/CTA.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 text-center text-sm text-gray-600 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Ordal — AI recruiting, supercharged.
        </div>
      </footer>
    </div>
  );
}

export default App;
