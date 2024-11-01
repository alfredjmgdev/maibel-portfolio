import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <motion.div
        className="w-16 h-16 border-4 border-pink-medium rounded-full"
        animate={{
          rotate: 360,
          borderRadius: ["50%", "25%", "50%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}

export default Loader