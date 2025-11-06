import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.message.length < 10) {
      setStatus('error');
      return;
    }
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container-responsive grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-neutral-300">Have a project idea or want to collaborate? Drop a message!</p>

          <div className="mt-6 flex gap-4">
            <a className="btn-outline" href="https://github.com/ommkar" target="_blank" rel="noreferrer">
              <FiGithub /> GitHub
            </a>
            <a className="btn-outline" href="https://www.linkedin.com/in/ommkar" target="_blank" rel="noreferrer">
              <FiLinkedin /> LinkedIn
            </a>
            <a className="btn-outline" href="mailto:ommkarpattnaik2@gmail.com">
              <FiMail /> Email
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={onSubmit}
          className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6"
        >
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 outline-none focus:border-tealAccent"
              placeholder="Your name"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm mb-1">Email</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 outline-none focus:border-tealAccent"
              type="email"
              placeholder="you@example.com"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm mb-1">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 outline-none min-h-32 focus:border-tealAccent"
              placeholder="Your message (min 10 chars)"
            />
          </div>
          <button type="submit" className="btn-primary mt-5">Send Message</button>
          {status === 'success' && (
            <p className="mt-3 text-tealAccent text-sm">Message sent successfully! (simulated)</p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-red-400 text-sm">Please enter a valid name, email, and a longer message.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}


