import { motion } from 'framer-motion'

const projects = [
  {
    title: "E-commerce Website Testing",
    description: "Conducted comprehensive testing on a new e-commerce platform, identifying and reporting 50+ bugs.",
  },
  {
    title: "Mobile App Automation",
    description: "Developed and implemented automated test scripts for a social media app using Appium.",
  },
  {
    title: "API Testing Project",
    description: "Performed thorough API testing for a financial services application, ensuring data integrity and security.",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-pink-medium">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-semibold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-pink-lighter dark:bg-pink-deep rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects