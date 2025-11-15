import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/90"/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
          <div className="max-w-3xl">
            <p className="inline-flex items-center text-xs uppercase tracking-[0.25em] font-semibold text-gray-700/80 bg-white/70 backdrop-blur px-3 py-1 rounded-full ring-1 ring-black/10">
              Building across platforms
            </p>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Software that powers growth for modern industries
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700/90">
              Dioing is a product studio crafting reliable, scalable software for agriculture, events, real estate, ERP, project management, and more.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
                Start a project
              </a>
              <a href="#solutions" className="inline-flex items-center rounded-full bg-white/80 backdrop-blur text-gray-900 px-6 py-3 text-sm font-medium ring-1 ring-black/10 hover:bg-white">
                Explore solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
