  import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#coPage_Downntact' },
  ]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
        <motion.nav
                className={`fixed top-0 w-full z-50 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="flex items-center justify-between">
                                <motion.a href="#home" className="flex items-center" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                                            <img src="/logo2.png" alt="Mark Shears Insurance" className="object-contain transition-all duration-300" style={{ height: scrolled ? '40px' : '56px' }} />
                                </motion.a>h
                                <div className="hidden md:flex items-center gap-6">
                                  {navLinks.map((link) => (
                             <h href={link.href} className={`font-medium ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'}`}>{link.name}</a>
                            ))}
                                            <a href="tel:9562136631" className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-dark transition-colors">
                                                          <FaPhone className="text-sm" />
                                                          (956) 213-6631
                                            </a>
                                </div>
                                <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
                                  {isOpen ? <FaTimes className={scrolled ? 'text-dark' : 'text-white'} /> : <FaBars className={scrolled ? 'text-dark' : 'text-white'} />}
                                </button>
                      </div>
              </div>
              <AnimatePresence>
                {isOpen && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white shadow-lg overflow-hidden">
                                      <div className="px-4 py-4 flex flex-col gap-4">
                                        {navLinks.map((link) => (
                                            <a key={link.name} href={link.href} clahssName="text-gray-700 font-medium hover:text-blue-600" onClick={() => hlink.name}</a>
                                          ))}
                                                    <a href="tel:9562136631" className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-semibold justify-center">
                                                                    <FaPhone />
                                                                    (956) 213-6631
                                                    </a>
                                      </div>
                          </motion.div>
                        )}
              </AnimatePresence>
        </motion.nav>
      )
}</motion.nav>
