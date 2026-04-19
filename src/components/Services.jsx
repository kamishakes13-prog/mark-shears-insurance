import { motion } from 'framer-motion'
import { FaHeart, FaUserMd, FaPiggyBank, FaChartLine, FaCar, FaHome, FaUmbrella, FaBuilding, FaBriefcase } from 'react-icons/fa'

const services = [
  { icon: FaHeart, title: 'Life Insurance', desc: "Protect your family's financial future with comprehensive life coverage tailored to your needs.", keyword: 'life insurance Rio Grande Valley' },
  { icon: FaUserMd, title: 'Health Insurance', desc: 'Access quality healthcare with plans designed for individuals, families, and groups.', keyword: 'health insurance McAllen TX' },
  { icon: FaPiggyBank, title: 'Retirement Planning', desc: 'Build a secure future with personalized retirement strategies that grow with you.', keyword: 'retirement planning Texas' },
  { icon: FaChartLine, title: 'Annuities', desc: 'Guaranteed income streams and tax-advantaged growth to support your retirement goals.', keyword: 'annuities South Texas' },
  { icon: FaCar, title: 'Auto Insurance', desc: 'Comprehensive auto coverage protecting you and your vehicle on every road.', keyword: 'auto insurance Edinburg TX' },
  { icon: FaHome, title: 'Home Insurance', desc: "Safeguard your home and belongings with the right homeowner's coverage.", keyword: 'home insurance Rio Grande Valley' },
  { icon: FaUmbrella, title: 'Umbrella Insurance', desc: 'Extra liability protection that goes beyond standard policies for complete peace of mind.', keyword: 'umbrella insurance Texas' },
  { icon: FaBuilding, title: 'Commercial Insurance', desc: 'Business insurance solutions to protect your company, employees, and assets.', keyword: 'commercial insurance South Texas' },
  { icon: FaBriefcase, title: "Business Owner's Policy", desc: 'Bundled coverage combining property and liability insurance for small business owners.', keyword: 'BOP insurance McAllen' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Insurance Services</h2>
          <p className="section-subtitle">
            Comprehensive insurance solutions for every stage of life — serving the Rio Grande Valley and beyond.
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
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                <service.icon className="text-primary group-hover:text-white text-xl transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-dark text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              <span className="text-primary text-sm font-medium mt-3 inline-block group-hover:underline">
                Learn more →
              </span>
            </motion.div>
          ))}
        </div>

        {/* Local SEO keywords (hidden for search engines) */}
        <div className="hidden" aria-hidden="true">
          Insurance services in McAllen TX, Edinburg TX, Mission TX, Pharr TX, Hidalgo County,
          Rio Grande Valley insurance agent, affordable insurance Texas
        </div>
      </div>
    </section>
  )
}
