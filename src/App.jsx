import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Industries from './components/Industries';
import Showcase from './components/Showcase';
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
