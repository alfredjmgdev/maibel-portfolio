import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-pink-lighter dark:bg-pink-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-32 h-32 md:w-48 md:h-48 bg-pink-light dark:bg-pink-medium opacity-50 rounded-full blur-3xl"></div>
        <div className="absolute right-48 top-48 w-24 h-24 md:w-32 md:h-32 bg-pink-light dark:bg-pink-medium opacity-30 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Left content */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-pink-medium dark:text-pink-light mb-4">
            How to craft and evaluate frontend projects
          </h2>
          <h1 className="text-6xl lg:text-7xl font-bold text-pink-dark dark:text-pink-lighter mb-6 leading-tight">
            Frontend Developer.
          </h1>
          <p className="text-xl text-pink-medium dark:text-pink-light mb-8">
            With great user experience
          </p>
          <motion.button
            className="bg-pink-dark dark:bg-pink-lighter text-pink-lighter dark:text-pink-dark px-8 py-4 rounded-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Right content */}
        <motion.div 
          className="flex-1 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full aspect-square max-w-[28rem] mx-auto rotate-0">
            <div className="absolute inset-0 bg-pink-light dark:bg-pink-medium rounded-[2rem] transform rotate-0"></div>
            <img 
              src="./profile-photo.png" 
              alt="Profile" 
              className="z-10 w-[85%] h-[85%] object-cover rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero