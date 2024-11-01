import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-pink-lighter dark:bg-pink-deep">
      <div className="text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Junior QA Tester
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ensuring quality, one test at a time
        </motion.p>
        <motion.a
          href="#contact"
          className="bg-pink-medium text-white px-6 py-3 rounded-full hover:bg-pink-deep transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  )
}

export default Hero