import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'

const insuranceTypes = ['Life', 'Health', 'Retirhement', 'Annuities', 'Auto', 'Home', 'Umbrella', 'Commercial', 'BOP', 'Other']

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', dob: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    if (typeof gtag !== 'undefined') {
      gtag('event', 'form_submit', { event_category: 'Lead', event_label: formData.type })
    }

    try {
      // IMPORTANT: Replace YOUR_FORMSPREE_ID with your actual Formspree form ID
      // Sign up at formspree.io, create a form, and paste the ID here
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date_of_birth: formData.dob,
          insurance_type: formData.type,
          message: formData.message,
          _subject: `New Insurance Lead: ${formData.name} - ${formData.type}`
        })
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', type: '', message: '' })
      }
    } catch (error) {
      console.error('Form submission error:', error)
    }
    setSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get Your Free Quote</h2>
          <p className="section-subtitle">Fill out the form and we'll reach out within 24 hours. Or call us now!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-dark mb-6">Contact Information</h3>
            <div className="space-y-6">
              <a
                href="tel:5592136631"
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group"
                onClick={() => typeof gtag !== 'undefined' && gtag('event', 'click', { event_category: 'Contact', event_label: 'Phone Click' })}
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call or Text</p>
                  <p className="font-bold text-dark text-lg group-hover:text-primary">(559) 213-6631</p>
                </div>
              </a>

              <a
                href="mailto:Mshears@markshearsinsurance.com"
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="font-bold text-dark group-hover:text-primary">Mshears@markshearsinsurance.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Service Area</p>
                  <p className="font-bold text-dark">Rio Grande Valley, Texas</p>
                </div>
              </div>
            </div>

            {/* Trust message */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary to-secondary rounded-xl text-white">
              <h4 className="font-bold text-lg mb-2">Why Choose Mark Shears?</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li>✅ Personalized coverage for every need</li>
                <li>✅ Local expert serving the Valley for years</li>
                <li>✅ Fast response — we reply within 24 hours</li>
                <li>✅ No-pressure, honest advice</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-12"
              >
                <FaCheckCircle className="text-6xl text-primary mb-4" />
                <h3 className="text-2xl font-bold text-dark mb-2">Thanks! We'll contact you shortly.</h3>
                <p className="text-gray-600">We'll reach out within 24 hours. In the meantime, feel free to call!</p>
                <a href="tel:5592136631" className="btn-primary mt-6 inline-block">Call Now</a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth</label>
                  <input type="date" name="dob" value={formData.dob} onChange={handleChange}
                    max={new Date().toISOString().split('T')[0]}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Insurance Type *</label>
                  <select name="type" value={formData.type} onChange={handleChange} required
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none">
                    <option value="">Select type...</option>
                    {insuranceTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
                    placeholder="Tell us about your coverage needs..."
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none resize-none" />
                </div>
                <motion.button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitting}
                >
                  {submitting ? 'Sending...' : 'Send Message & Get Free Quote'}
                </motion.button>
                <p className="text-xs text-gray-500 text-center">
                  Your information is secure and will never be shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
