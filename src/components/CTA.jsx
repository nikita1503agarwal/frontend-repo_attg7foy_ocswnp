import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="get-started" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 opacity-10" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900"
        >
          Ready to build what’s next?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-gray-600"
        >
          Partner with a team that moves quickly, sweats the details, and ships with impact.
        </motion.p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-black transition">
            Start a project
          </a>
          <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-white border px-5 py-3 text-sm font-medium hover:bg-slate-50 transition">
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}
