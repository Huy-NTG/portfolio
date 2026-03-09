import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import AnimatedGrid from "./AnimatedGrid"

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-black text-white">

      {/* Animated grid background */}
      <AnimatedGrid />

      {/* gradient glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl top-20 left-20 -z-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-3xl bottom-20 right-20 -z-0"></div>

      {/* content */}
      <div className="z-10">

        <motion.h1
          className="text-6xl md:text-7xl font-bold"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm{" "}
          <span className="text-blue-400">
            Huy Nguyen
          </span>
        </motion.h1>

        <motion.p
          className="text-xl mt-6 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Backend Developer (Java • Spring Boot)
        </motion.p>

        {/* buttons */}
        <motion.div
          className="mt-8 flex gap-4 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-500 rounded-lg hover:border-blue-400 hover:text-blue-400 transition"
          >
            Contact Me
          </a>
        </motion.div>

        {/* social icons */}
        <motion.div
          className="flex gap-6 justify-center mt-8 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href="https://github.com"
            whileHover={{ scale: 1.2 }}
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </motion.div>

      </div>

    </section>
  )
}

export default Hero