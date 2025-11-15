import { motion } from 'framer-motion';

const items = [
  { title: 'Smart Farm Ops', text: 'IoT dashboards and predictive insights for crop yield optimization.' },
  { title: 'VenueSuite', text: 'Event registrations, seating, and live polling at scale.' },
  { title: 'EstatePro', text: 'Property listings with CRM and automated follow-ups.' },
  { title: 'FlowBoard', text: 'Project management with workflows, sprints and reporting.' },
  { title: 'CoreERP', text: 'Modular ERP with inventory, finance and HR.' },
];

export default function Showcase() {
  return (
    <section id="work" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Recent work</h2>
          <p className="mt-3 text-gray-700">A peek into platforms we build for clients across industries.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20, rotateX: -6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 ring-1 ring-black/5 shadow-sm hover:shadow-md"
            >
              <div className="aspect-video rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 ring-1 ring-inset ring-black/5" />
              <h3 className="mt-4 font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
