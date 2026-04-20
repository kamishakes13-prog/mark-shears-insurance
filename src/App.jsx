import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import QuoteCalculator from './components/QuoteCalculator'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { FaPhone } from 'react-icons/fa'

function App() {
  // Track page view
  useEffect(() => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', { page_title: 'Mark Shears Insurance' })
    }
  }, [])

  return (
    <div className="flex min-h-screen">
      {/* Fixed left sidebar — hidden on mobile */}
      <Sidebar />

      {/* Main content shifted right on desktop */}
      <div className="w-full md:ml-24">
        <Navbar />
        <main>
          <Hero />
          <QuoteCalculator />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
        {/* Sticky Mobile CTA */}
        <div className="sticky-cta md:hidden bg-primary text-white py-3 px-4 flex items-center justify-between shadow-2xl">
          <span className="font-semibold text-sm">Ready to get covered?</span>
          <a
            href="tel:9562800573"
            className="flex items-center gap-2 bg-white text-primary font-bold py-2 px-4 rounded-full text-sm"
            onClick={() => typeof gtag !== 'undefined' && gtag('event', 'click', { event_category: 'CTA', event_label: 'Sticky Call Button' })}
          >
            <FaPhone className="text-xs" />
            Call Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
