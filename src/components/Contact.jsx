import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await new Promise((res) => setTimeout(res, 800));
      setStatus('Thanks! We will reach out shortly.');
    } catch (e) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Let’s build together</h2>
          <p className="mt-3 text-gray-700">Tell us about your project and we’ll get back within 24 hours.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid md:grid-cols-2 gap-6">
          <input className="rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Full name" required />
          <input type="email" className="rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Work email" required />
          <input className="md:col-span-2 rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Company" />
          <textarea rows={5} className="md:col-span-2 rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Project details" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800" type="submit">Send message</button>
            <span className="text-sm text-gray-600">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
