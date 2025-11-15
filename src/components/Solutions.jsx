import { motion, useScroll, useTransform } from 'framer-motion';

const solutions = [
  {
    title: 'Web & Mobile Apps',
    text: 'React, Next.js, Flutter — delightful interfaces that perform.',
  },
  {
    title: 'Cloud & DevOps',
    text: 'Kubernetes, CI/CD, observability and cost control baked in.',
  },
  {
    title: 'Data & AI',
    text: 'From pipelines to analytics and ML in production.',
  },
  {
    title: 'Integrations',
    text: 'ERP, payments, maps — we stitch your stack together.',
  },
];

function ParallaxCard({ title, text, i }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -60 - i * 10]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? -2 : 2]);

  return (
    <motion.div style={{ y, rotate }} className="rounded-3xl bg-white/80 backdrop-blur p-8 ring-1 ring-black/5 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-700">{text}</p>
    </motion.div>
  );
}

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">End-to-end solutions</h2>
          <p className="mt-3 text-gray-700">From strategy to launch to growth — we ship software that lasts.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, i) => (
            <ParallaxCard key={s.title} i={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
