import { motion } from 'framer-motion'
import { FaHeart, FaUserMd, FaPiggyBank, FaChartLine, FaCar, FaHome, FaUmbrella, FaBuilding, FaBriefcase } from 'react-icons/fa'

const services = [
  { icon: FaHeart, title: 'Life Insurance', desc: "Protect your family's financial future with comprehensive life insurance coverage in Rio Grande Valley, TX." },
  { icon: FaUserMd, title: 'Health Insurance', desc: 'Access quality healthcare with health insurance plans designed to fit your needs and budget in South Texas.' },
  { icon: FaPiggyBank, title: 'Retirement Planning', desc: 'Build a secure future with personalized retirement strategies tailored for Rio Grande Valley residents.' },
  { icon: FaChartLine, title: 'Annuities', desc: 'Guaranteed income streams and tax-advantaged growth for your retirement — serving McAllen, Edinburg, and beyond.' },
  { icon: FaCar, title: 'Auto Insurance', desc: 'Comprehensive auto insurance protecting you and your vehicle on Texas roads. Affordable rates for RGV drivers.' },
  { icon: FaHome, title: 'Home Insurance', desc: "Safeguard your home and belongings with the right home insurance coverage for Rio Grande Valley homeowners." },
  { icon: FaUmbrella, title: 'Renters Insurance', desc: 'Affordable renters insurance for your belongings and liability. Serving Mission, Pharr, Harlingen, and the entire RGV.', link: 'https://epremiuminsurance.com' },
  { icon: FaBuilding, title: 'Commercial Insurance', desc: 'Protect your business assets, employees, and operations with commercial insurance in Rio Grande Valley, Texas.' },
  { icon: FaBriefcase, title: 'Business Insurance', desc: 'Specialized business insurance coverage for small and medium businesses throughout South Texas.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50" aria-label="Insurance Services in Rio Grande Valley, Texas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Insurance Services in Rio Grande Valley, TX</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Looking for reliable insurance in Rio Grande Valley? Mark Shears Insurance provides affordable and personalized
            coverage options for individuals, families, and businesses across McAllen, Edinburg, Mission, and all of South Texas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              onClick={() => {
                if (service.link) {
                  window.open(service.link, '_blank')
                } else {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                <service.icon className="text-primary group-hover:text-white text-xl transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-dark text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              <span className="text-primary text-sm font-medium mt-3 inline-block group-hover:underline">
                {service.link ? 'Get a Quote →' : 'Learn more →'}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
