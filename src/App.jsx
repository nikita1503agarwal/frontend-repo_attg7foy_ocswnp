import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Industries from './components/Industries';
import Showcase from './components/Showcase';
import Metrics from './components/Metrics';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-gray-600">© {new Date().getFullYear()} Dioing. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#solutions" className="hover:text-gray-900">Solutions</a>
          <a href="#industries" className="hover:text-gray-900">Industries</a>
          <a href="#work" className="hover:text-gray-900">Work</a>
          <a href="#metrics" className="hover:text-gray-900">Metrics</a>
          <a href="#process" className="hover:text-gray-900">Process</a>
          <a href="#testimonials" className="hover:text-gray-900">Testimonials</a>
          <a href="#faq" className="hover:text-gray-900">FAQ</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Industries />
        <Showcase />
        <Metrics />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
