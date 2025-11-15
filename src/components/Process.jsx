import { motion } from 'framer-motion';
import { Sparkles, Workflow, Wrench, Rocket } from 'lucide-react';

const steps = [
  { icon: Sparkles, title: 'Discover', desc: 'We align on goals, users, and success metrics with stakeholder workshops.' },
  { icon: Workflow, title: 'Design', desc: 'Rapid prototyping and design systems translate vision into tangible flows.' },
  { icon: Wrench, title: 'Build', desc: 'Incremental releases with quality gates, testing, and observability.' },
  { icon: Rocket, title: 'Launch & Iterate', desc: 'Ship confidently, measure impact, and evolve with your business.' },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center"
        >
          How we deliver
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-gray-600 text-center max-w-2xl mx-auto"
        >
          A proven playbook from discovery to launch.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border bg-white/70 backdrop-blur p-6 hover:shadow-lg transition-shadow text-center"
            >
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-medium text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
