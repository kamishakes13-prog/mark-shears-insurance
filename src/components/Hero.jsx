import { motion } from 'framer-motion'
import { FaShieldAlt, FaPhone } from 'react-icons/fa'

export default function Hero() {
  const handleGetQuote = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', { event_category: 'CTA', event_label: 'Hero Get Free Quote' })
    }
    document.getElementById('quote').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary to-secondary" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <FaShieldAlt className="text-4xl text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Protect What<br />
            <span className="text-accent">Matters Most</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
            Mark Shears Insurance — Serving the Rio Grande Valley
          </p>

          <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto italic">
            "My mission is to provide quality coverage, with a personalized solution for your individual needs."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={handleGetQuote}
              className="btn-primary text-lg px-8 py-4 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Quote
            </motion.button>
            <a
              href="tel:9562800573"
              className="flex items-center gap-2 text-white border-2 border-white/50 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all text-lg"
            >
              <FaPhone />
              (956) 280-0573
            </a>
          </div>

          {/* Trust Badges */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {[
              { label: 'Years Experience', value: '15+' },
              { label: 'Clients Served', value: '500+' },
              { label: 'Insurance Types', value: '9+' },
            ].map(item => (
              <div key={item.label} className="text-center">
                <div className="text-3xl font-bold text-accent">{item.value}</div>
                <div className="text-blue-200 text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
