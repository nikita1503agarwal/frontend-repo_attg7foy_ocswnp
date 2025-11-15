import { motion } from 'framer-motion';
import { TrendingUp, Clock, Stars, ShieldCheck } from 'lucide-react';

const metrics = [
  { icon: TrendingUp, label: 'Projects Delivered', value: '120+' },
  { icon: Stars, label: 'Client Satisfaction', value: '98%' },
  { icon: Clock, label: 'Avg. Time to Launch', value: '6 weeks' },
  { icon: ShieldCheck, label: 'Uptime Across Deployments', value: '99.9%' },
];

export default function Metrics() {
  return (
    <section id="metrics" className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center"
        >
          Proof in the numbers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-gray-600 text-center max-w-2xl mx-auto"
        >
          Operational excellence and velocity you can measure.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border bg-white/70 backdrop-blur p-6 flex items-start gap-4 hover:shadow-lg transition-shadow"
            >
              <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                <m.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-3xl font-semibold tracking-tight">{m.value}</div>
                <div className="text-sm text-gray-600 mt-1">{m.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
