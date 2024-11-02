import { motion } from 'framer-motion'

const skills = [
  "Manual Testing",
  "Automated Testing",
  "Test Case Writing",
  "Bug Reporting",
  "Agile Methodologies",
  "Selenium",
  "JIRA",
  "SQL Basics",
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-pink-lighter dark:bg-pink-deep">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-semibold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-white dark:bg-pink-medium text-pink-deep dark:text-pink-lighter rounded-lg p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills