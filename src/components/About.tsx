import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-pink-lighter dark:bg-pink-deep">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-semibold text-center mb-8 text-pink-bright dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-center max-w-2xl mx-auto text-pink-deep dark:text-pink-light"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm a passionate junior QA tester with a keen eye for detail and a drive for ensuring top-notch software quality. 
          My goal is to contribute to creating seamless user experiences by identifying and preventing potential issues 
          before they reach the end-user.
        </motion.p>
      </div>
    </section>
  )
}

export default About