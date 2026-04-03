import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  GitBranch,
  ExternalLink,
  Download,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';
import { submitContactForm } from '../utils/api';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
  },
];

const socialLinks = [
  {
    icon: GitBranch,
    label: 'GitHub',
    href: personalInfo.github,
  },
  {
    icon: ExternalLink,
    label: 'LinkedIn',
    href: personalInfo.linkedin,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Failed to send message. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/[0.02] to-transparent dark:via-primary-500/[0.03]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind or want to connect? Let's talk."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-heading text-xl font-bold text-slate-800 dark:text-white mb-2">
                Let's build something great together.
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Whether you need a full-stack application, automation pipeline, or just want to chat
                about engineering — I'm always up for a good conversation.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <div key={link.label} className="flex items-center gap-4">
                  <div className="flex-shrink-0 p-2.5 rounded-xl bg-primary-500/10 text-primary-500">
                    <link.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                      {link.label}
                    </p>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {link.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-200 dark:border-white/[0.08] text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-500/30 transition-all"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>

            {/* Resume download */}
            <a
              href={personalInfo.resumeUrl}
              download
              className="outline-btn inline-flex text-sm"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full glow-btn justify-center text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm"
                >
                  <CheckCircle2 size={16} />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
                >
                  <AlertCircle size={16} />
                  {errorMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
