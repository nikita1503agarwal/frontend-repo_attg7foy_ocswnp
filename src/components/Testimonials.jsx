import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'Dioing shipped our MVP in record time and the polish was beyond expectations.',
    name: 'Amara F.',
    role: 'Founder, FarmStack',
  },
  {
    quote:
      'Their team embedded seamlessly with ours and elevated our delivery process.',
    name: 'Luis R.',
    role: 'Head of Product, Logistica',
  },
  {
    quote:
      'Exceptional reliability. We scaled to thousands of users without a hiccup.',
    name: 'Nadia K.',
    role: 'CTO, CityWorks',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center"
        >
          What partners say
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <p className="text-gray-900">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-gray-600">{t.name} — {t.role}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
