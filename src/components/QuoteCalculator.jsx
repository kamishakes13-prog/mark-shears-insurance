import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCalculator, FaCheckCircle } from 'react-icons/fa'

const baseRates = {
  Auto: { Basic: [45, 85], Standard: [90, 150], Premium: [160, 250] },
  Home: { Basic: [60, 110], Standard: [120, 200], Premium: [210, 350] },
  Life: { Basic: [20, 50], Standard: [55, 120], Premium: [130, 300] },
  Business: { Basic: [80, 150], Standard: [160, 300], Premium: [310, 600] },
}

const ageMultiplier = (age) => {
  if (age < 25) return 1.4
  if (age < 35) return 1.0
  if (age < 55) return 0.9
  return 1.2
}

export default function QuoteCalculator() {
  const [form, setForm] = useState({ type: 'Auto', dob: '', coverage: 'Standard' })
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setResult(null)
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    setLoading(true)

    if (typeof gtag !== 'undefined') {
      gtag('event', 'quote_calculator_use', {
        event_category: 'Engagement',
        event_label: `${form.type} - ${form.coverage}`
      })
    }

    setTimeout(() => {
      const [low, high] = baseRates[form.type][form.coverage]
      const mult = ageMultiplier(form.dob ? Math.floor((new Date() - new Date(form.dob)) / (365.25 * 24 * 60 * 60 * 1000)) : 35)
      const estLow = Math.round(low * mult)
      const estHigh = Math.round(high * mult)
      setResult({ low: estLow, high: estHigh })
      setLoading(false)
    }, 800)
  }

  return (
    <section id="quote" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
              <FaCalculator className="text-2xl text-white" />
            </div>
          </div>
          <h2 className="section-title">Get a Quick Estimate</h2>
          <p className="section-subtitle">Find out what your coverage might cost — instantly.</p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleCalculate} className="grid md:grid-cols-3 gap-6">
            {/* Insurance Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Insurance Type</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors"
              >
                {Object.keys(baseRates).map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                max={new Date().toISOString().split('T')[0]}
                required
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            {/* Coverage Level */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Coverage Level</label>
              <select
                name="coverage"
                value={form.coverage}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:outline-none transition-colors"
              >
                <option value="Basic">Basic</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select>
            </div>

            <div className="md:col-span-3 flex justify-center">
              <motion.button
                type="submit"
                className="btn-primary px-10 py-4 text-lg rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
              >
                {loading ? 'Calculating...' : 'Calculate Estimate'}
              </motion.button>
            </div>
          </form>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="mt-8 p-6 bg-gradient-to-r from-primary to-secondary rounded-xl text-white text-center"
              >
                <FaCheckCircle className="text-3xl mx-auto mb-3 text-light" />
                <p className="text-lg font-medium mb-2">Estimated Monthly Cost</p>
                <p className="text-4xl font-bold">
                  ${result.low} – ${result.high}<span className="text-xl">/mo</span>
                </p>
                <p className="text-sm text-blue-100 mt-4">
                  ⚠️ This is an estimate only and is not a binding quote or guarantee of coverage.
                  Contact Mark Shears Insurance for an accurate, personalized quote.
                </p>
                <a
                  href="#contact"
                  className="inline-block mt-4 bg-white text-primary font-bold py-2 px-6 rounded-full hover:bg-blue-50 transition-colors"
                >
                  Get Official Quote
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
