import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-pink-deep">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-semibold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.form
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 border rounded bg-pink-lighter dark:bg-pink-medium text-pink-dark dark:text-white" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded" required></textarea>
          </div>
          <motion.button
            type="submit"
            className="bg-pink-medium text-white px-6 py-2 rounded hover:bg-pink-deep transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact