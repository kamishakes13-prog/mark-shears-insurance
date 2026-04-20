import { motion } from 'framer-motion'

export default function Sidebar() {
  return (
    <motion.aside
      className="hidden md:flex fixed top-0 left-0 h-full w-24 bg-white shadow-[2px_0_8px_rgba(0,0,0,0.08)] z-40 flex-col items-center justify-center"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <a href="#home" className="flex items-center justify-center w-full h-full p-3">
        <motion.img
          src="/logo.png"
          alt="Mark Shears Insurance Logo"
          className="object-contain w-full"
          style={{ maxHeight: '80vh' }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      </a>
    </motion.aside>
  )
}
