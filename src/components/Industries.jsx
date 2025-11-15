import { motion } from 'framer-motion';
import { Factory, Sprout, Building2, Briefcase, GraduationCap, Stethoscope, Truck, Landmark, Rocket, CalendarDays, Home } from 'lucide-react';

const industries = [
  { name: 'Agriculture', icon: Sprout, desc: 'Farm management, IoT telemetry, supply chain.' },
  { name: 'Events', icon: CalendarDays, desc: 'Registration, ticketing, live engagement.' },
  { name: 'Real Estate', icon: Home, desc: 'Listings, CRM, property analytics.' },
  { name: 'Project Management', icon: Briefcase, desc: 'Workflow automation, sprints, reporting.' },
  { name: 'ERP', icon: Factory, desc: 'Inventory, finance, HR, procurement.' },
  { name: 'Healthcare', icon: Stethoscope, desc: 'EHR, scheduling, telemedicine.' },
  { name: 'Logistics', icon: Truck, desc: 'Fleet, routing, last-mile delivery.' },
  { name: 'Government', icon: Landmark, desc: 'Citizen services, portals, data.' },
  { name: 'Education', icon: GraduationCap, desc: 'LMS, assessments, student success.' },
  { name: 'Startups', icon: Rocket, desc: 'MVPs, scaling, product ops.' },
  { name: 'Hospitality', icon: Building2, desc: 'Bookings, PMS, guest experience.' },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Built for every industry</h2>
          <p className="mt-3 text-gray-700">We tailor platforms for your unique workflows and compliance needs.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(({ name, icon: Icon, desc }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 p-2.5 text-white shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
