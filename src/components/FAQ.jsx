import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What services does Dioing provide?',
    a: 'We build end‑to‑end products: strategy, UX/UI, web/mobile apps, cloud, and ongoing growth.'
  },
  {
    q: 'How fast can you launch an MVP?',
    a: 'Most MVPs go live within 4–8 weeks depending on scope and integrations.'
  },
  {
    q: 'Do you work with existing teams?',
    a: 'Yes. We frequently embed with product and engineering teams to accelerate roadmaps.'
  },
  {
    q: 'What are your engagement models?',
    a: 'Fixed scope, dedicated squads, or retainer for continuous iteration — tailored to your goals.'
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 text-center"
        >
          Frequently asked questions
        </motion.h2>

        <div className="mt-10 divide-y rounded-2xl border bg-white/70 backdrop-blur">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="px-6 py-4">
                <button
                  className="w-full flex items-center justify-between py-3 text-left"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="font-medium text-gray-900">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-gray-600 pb-3"
                    >
                      {item.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
