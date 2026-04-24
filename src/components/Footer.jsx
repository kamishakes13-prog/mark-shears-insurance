import { FaPhone, FaEnvelope, FaShieldAlt } from 'react-icons/fa'

const services = ['Life Insurance', 'Health Insurance', 'Auto Insurance', 'Home Insurance', 'Business Insurance', 'Retirement Planning']

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <FaShieldAlt className="text-white text-lg" />
              </div>
              <span className="font-bold text-lg">Mark Shears Insurance</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Trusted insurance services in the Rio Grande Valley. Providing quality coverage with
              a personalized solution for your individual needs.
            </p>
            <div className="space-y-2">
              <a href="tel:5592136631" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm">
                <FaPhone className="text-xs" />
                (559) 213-6631
              </a>
              <a href="mailto:Mshears@markshearsinsurance.com" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors text-sm">
                <FaEnvelope className="text-xs" />
                Mshears@markshearsinsurance.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s}>
                  <a href="#services" className="text-blue-200 hover:text-white transition-colors text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Get a Quote', href: '#quote' },
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Contact', href: '#contact' },
              ].map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-blue-200 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block bg-primary hover:bg-secondary text-white font-semibold py-2 px-6 rounded-full text-sm transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-blue-200">
          <p>{'©'} {new Date().getFullYear()} Mark Shears Insurance. All rights reserved.</p>
          <p>Insurance services in Rio Grande Valley, Texas | McAllen | Edinburg | Mission</p>
        </div>
      </div>
    </footer>
  )
}
