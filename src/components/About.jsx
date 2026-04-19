import { motion } from 'framer-motion'
import { FaHeart, FaHandshake, FaStar } from 'react-icons/fa'

const values = [
  { icon: FaHeart, title: 'Personal Touch', desc: 'Every client receives individual attention and a tailored plan built around their unique needs.' },
  { icon: FaHandshake, title: 'Trust & Integrity', desc: 'Honest advice, transparent pricing, and a commitment to serving your best interests.' },
  { icon: FaStar, title: 'Local Expertise', desc: 'Proudly serving the Rio Grande Valley community with deep local knowledge and care.' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">About Mark Shears Insurance</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Mark Shears Insurance is dedicated to helping individuals, families, and businesses
              in the Rio Grande Valley find the right coverage at the right price. With a passion
              for serving our community, we make insurance simple, personal, and affordable.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 italic text-gray-700 text-lg mb-8">
              "My mission is to provide quality coverage, with a personalized solution for your individual needs."
              <footer className="text-primary font-semibold mt-2 not-italic">— Mark Shears</footer>
            </blockquote>
            <a href="#contact" className="btn-primary inline-block">
              Get in Touch
            </a>
          </motion.div>

          {/* Values */}
          <motion.div
            className="grid gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="flex gap-4 p-6 bg-blue-50 rounded-xl hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <v.icon className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-dark text-lg mb-1">{v.title}</h3>
                  <p className="text-gray-600">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
